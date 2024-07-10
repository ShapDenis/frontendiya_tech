import axiosInstance from "@/shared/api/axiosInstance.ts";

export default {
	getUser: async (user: string) => {
		try {
			const response = await axiosInstance.get(`/users/${user}`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getUserRepository: async (user: string) => {
		try {
			const response = await axiosInstance.get(`/users/${user}/repos`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
};
