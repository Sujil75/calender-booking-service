const router = require("express").Router();
const controller = require("../interface/UserController");

router.post("/", controller.createUser);
router.get("/:id", controller.getUser);

module.exports = router;
