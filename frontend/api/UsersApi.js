import { config } from "../config/constants";

exports.getUserIdByEmail = async (email) => {
	const USER_URL = config.API_BASE_URL + "/users/" + email;

	const response = await fetch(USER_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.json();

	return result._id;
};
