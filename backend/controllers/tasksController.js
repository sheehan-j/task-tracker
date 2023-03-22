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

const getTask = async (req, res) => {
	try {
		const result = await Task.findOne({
			_id: req.params.task,
		});

		if (!result) {
			return res.status(204).json();
		}

		return res.status(200).json(result);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error." });
	}
};

const updateTask = async (req, res) => {
	try {
		const result = await Task.updateOne(
			{ _id: req.body._id },
			{
				category: req.body.category,
				title: req.body.title,
				subtitle: req.body.subtitle,
				completed: req.body.completed,
				important: req.body.important,
				user: req.body.user,
			}
		);

		return res.status(200).json();
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

const deleteTask = async (req, res) => {
	try {
		const result = await Task.deleteOne({ _id: req.params.task });
		res.status(200).json(result);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error." });
	}
};

module.exports = {
	getTasksByUser,
	addTask,
	getTask,
	updateTask,
	deleteTask,
};
