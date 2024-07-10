import services from "@/services";

export const fetchUserData = async (search: string) => {
	const user = await services.fetchData.getUser(search);
	const repos = await services.fetchData.getUserRepository(search);
	return { user, public_reports: repos };
};