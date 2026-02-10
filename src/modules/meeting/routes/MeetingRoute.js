const router = require("express").Router();
const controller = require("../interface/MeetingController");

router.post("/", controller.createMeeting);
router.get("/", controller.getMeetings);
router.get("/:id", controller.getMeeting);
router.put("/:id", controller.updateMeeting);
router.delete("/:id", controller.deleteMeeting);

module.exports = router;
