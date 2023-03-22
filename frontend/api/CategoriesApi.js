import { config } from "../config/constants";

exports.getCategoriesByUser = async (userId) => {
	const CATEGORIES_URL =
		config.API_BASE_URL + "/categories/" + userId.toString();

	const response = await fetch(CATEGORIES_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.json();

	return result;
};

exports.addCategory = async (name, userId) => {
	const CATEGORIES_URL = config.API_BASE_URL + "/categories";
	const newCategory = {
		name: name,
		user: userId,
	};

	const response = await fetch(CATEGORIES_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newCategory),
	});
	const result = await response.json();

	return result;
};
