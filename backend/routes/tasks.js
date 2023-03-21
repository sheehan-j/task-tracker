const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router
	.route("/")
	.get(tasksController.getTasksByUser)
	.post(tasksController.addTask);

module.exports = router;
