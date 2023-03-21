const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectToDB = require("./config/dbConfig");
const PORT = process.env.BACKEND_PORT || 6201;
require("dotenv").config();

connectToDB();

// Handle urlencoded data (built-in middleware)
app.use(express.urlencoded({ extended: false }));

// Use built-in middleware for handling JSON
app.use(express.json());

// Routes
app.use("/categories", require("./routes/categories"));
app.use("/users", require("./routes/users"));
app.use("/tasks", require("./routes/tasks"));

// Open connection
mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB.");
	app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
