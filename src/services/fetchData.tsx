import axios from "axios";

export default {
	getUser: async (user: string) => {
		try {
			const response = await axios.get(`https://api.github.com/users/${user}`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getUserRepository: async (user: string) => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${user}/repos`
			);
			return response.data;
		} catch (error) {
			return error;
		}
	},
};
