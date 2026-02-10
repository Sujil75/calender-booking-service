const service = require("../service/MeetingService");

exports.createMeeting = async (req, res) => {
  const result = await service.createMeeting(req.body);

  if (result.error) {
    return res.status(result.statusCode || 400).json({ message: result.message });
  }

  res.status(201).json(result);
};

exports.getMeetings = async (req, res) => {
  const meetings = await service.getMeetings(req.query);
  res.status(200).json(meetings);
};

exports.getMeeting = async (req, res) => {
  const result = await service.getMeetingById(req.params.id);

  if (result.error) {
    return res.status(result.statusCode || 404).json({ message: result.message });
  }

  res.status(200).json(result);
};

exports.updateMeeting = async (req, res) => {
  const result = await service.updateMeeting(req.params.id, req.body);

  if (result.error) {
    return res.status(result.statusCode || 400).json({ message: result.message });
  }

  res.status(200).json(result);
};

exports.deleteMeeting = async (req, res) => {
  const result = await service.deleteMeeting(req.params.id);

  if (result.error) {
    return res.status(result.statusCode || 404).json({ message: result.message });
  }

  res.status(200).json({ message: "Meeting deleted successfully" });
};
