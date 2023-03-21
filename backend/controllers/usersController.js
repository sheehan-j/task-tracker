const User = require("../model/User");

const getUser = async (req, res) => {
	try {
		const result = await User.findOne({
			email: req.params.user,
		});

		if (!result) {
			return res.status(400).json({ message: "User not found." });
		}

		return res.status(200).json(result);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error." });
	}
};

const addUser = async (req, res) => {};

module.exports = {
	getUser,
	addUser,
};
