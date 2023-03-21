const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.route("/").post(tasksController.addTask).put(tasksController.updateTask);

router.route("/by-task/:task").get(tasksController.getTask);
router.route("/by-user/:user").get(tasksController.getTasksByUser);

module.exports = router;
