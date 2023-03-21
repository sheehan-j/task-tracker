const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: true,
	},
	title: { type: String, required: true },
	subtitle: { type: String },
	completed: { type: Boolean, default: false },
	important: { type: Boolean, default: false },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Task", taskSchema);
