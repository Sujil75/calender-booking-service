const Meeting = require('../model/MeetingModel')
const { Op } = require("sequelize");

const checkConflict = async ({ userId, startTime, endTime, excludeId }) => {
  return Meeting.findOne({
    where: {
      userId,
      ...(excludeId && { id: { [Op.ne]: excludeId } }),
      startTime: { [Op.lt]: endTime },
      endTime: { [Op.gt]: startTime },
    },
  });
};

exports.createMeeting = async (data) => {
  if (new Date(data.startTime) >= new Date(data.endTime)) {
    return {
      message: "startTime must be before endTime",
      statusCode: 400,
    };
  }

  const conflict = await checkConflict(data);
  if (conflict) {
    return {
      message: "Time slot already booked",
      statusCode: 400,
    };
  }

  const newMeeting = await Meeting.create(data);
  return newMeeting;
};

exports.getMeetings = async (query) => {
  const where = {};

  if (query.userId) where.userId = query.userId;
  if (query.startDate && query.endDate) {
    where.startTime = { [Op.gte]: query.startDate };
    where.endTime = { [Op.lte]: query.endDate };
  }

  return Meeting.findAll({ where });
};

exports.getMeetingById = async (id) => {
  const meeting = await Meeting.findByPk(id);
  if (!meeting) {
    return {
      message: "Meeting not found",
      statusCode: 404,
    };
  }
  return meeting;
};

exports.updateMeeting = async (id, data) => {
  const meeting = await exports.getMeetingById(id);
  if (meeting.error) return meeting; // pass error up

  const conflict = await checkConflict({
    ...data,
    userId: meeting.userId,
    excludeId: id,
  });

  if (conflict) {
    return {
      message: "Time slot already booked",
      statusCode: 400,
    };
  }

  const updatedMeeting = await meeting.update(data);
  return updatedMeeting;
};

exports.deleteMeeting = async (id) => {
  const meeting = await exports.getMeetingById(id);
  if (meeting.error) return meeting;

  await meeting.destroy();
  return { success: true, message: "Meeting deleted" };
};
