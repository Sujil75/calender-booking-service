const service = require("../service/UserService");

exports.createUser = async (req, res, next) => {
  try {
    const user = await service.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await service.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
