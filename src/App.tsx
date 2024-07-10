import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Header from "@components/Header/Header.tsx";
import EmptyResult from "@components/EmptyResult/EmptyResult.tsx";
import SearchIcon from "@assets/search.svg?react";
import User from "@components/User/User.tsx";
import { fetchUserData } from "@/shared/api/fetchUserData.ts";

function App() {
	const [search, setSearch] = useState("");
	const { data, isError, isLoading } = useQuery({
		queryKey: ["userData", search],
		queryFn: () => fetchUserData(search),
		enabled: !!search,
		retry: false,
		refetchOnWindowFocus: false,
	});

	return (
		<>
			<Header setData={setSearch} />
			{isLoading && <EmptyResult icon={<SearchIcon />} text="Loading..." />}
			{isError && (
				<EmptyResult icon={<SearchIcon />} text="Failed to fetch data" />
			)}
			{data ? (
				<User data={data} />
			) : (
				!isLoading &&
				!isError && (
					<EmptyResult
						icon={<SearchIcon />}
						text="Start with searching a GitHub user"
					/>
				)
			)}
		</>
	);
}

export default App;
