const Task = require("../model/Task");

const getTasksByUser = async (req, res) => {
	try {
		const result = await Task.find({
			user: req.params.user,
		});

		if (result.length === 0) {
			return res.status(204).json();
		}

		return res.status(200).json(result);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error." });
	}
};

const addTask = async (req, res) => {
	try {
		const result = await Task.create({
			category: req.body.category,
			title: req.body.title,
			subtitle: req.body.subtitle,
			completed: false,
			important: req.body.important,
			user: req.body.user,
		});

		res.status(201).json(result);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error." });
	}
};

module.exports = {
	getTasksByUser,
	addTask,
};
