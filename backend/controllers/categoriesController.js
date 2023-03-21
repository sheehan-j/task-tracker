const Category = require("../model/Category");

const getCategoriesByUser = async (req, res) => {
	try {
		const result = await Category.find({
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

const addCategory = async (req, res) => {
	try {
		const categorySearch = await Category.findOne({
			name: req.body.name,
		});

		if (categorySearch) {
			return res
				.status(400)
				.json({ message: "This category already exists." });
		}

		const result = await Category.create({
			name: req.body.name,
			user: req.body.user,
		});

		res.status(201).json(result);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error." });
	}
};

module.exports = {
	getCategoriesByUser,
	addCategory,
};
