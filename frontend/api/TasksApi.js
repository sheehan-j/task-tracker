import { config } from "../config/constants";

exports.getTasksByUser = async (userId) => {
	const TASKS_URL = config.API_BASE_URL + "/tasks/by-user/" + userId;

	const response = await fetch(TASKS_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.json();

	return result;
};

exports.addTask = async (newTask) => {
	const TASKS_URL = config.API_BASE_URL + "/tasks";

	const response = await fetch(TASKS_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newTask),
	});
	const result = await response.json();

	return result;
};

exports.deleteTask = async (taskId) => {
	const TASKS_URL = config.API_BASE_URL + "/tasks/by-task/" + taskId;

	const response = await fetch(TASKS_URL, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.json();

	return result;
};
