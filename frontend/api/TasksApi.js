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