import { useState } from "react";
import { UsersTypes } from "./type.ts";
import UsersIcon from "@assets/users.svg?react";
import UserIcon from "@assets/user.svg?react";
import NotRepoIcons from "@assets/not-repo-icons.svg?react";
import EmptyResult from "@components/EmptyResult/EmptyResult.tsx";
import Button from "@components/Button/Button.tsx";

interface UserProps {
	data: UsersTypes;
}

const UserComponent = ({ data }: UserProps) => {
	const { user, public_reports } = data;
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const totalPages = Math.ceil(public_reports.length / itemsPerPage);
	const startIdx = (currentPage - 1) * itemsPerPage;
	const endIdx = Math.min(startIdx + itemsPerPage, public_reports.length);
	const currentRepos = public_reports.slice(startIdx, endIdx);

	const handlePrevPage = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	const handleNextPage = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	const renderPageNumbers = (): (number | string)[] => {
		if (totalPages <= 5) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}
		const pageNumbers: (number | string)[] = [1, 2, 3];

		if (currentPage > 3 && currentPage < totalPages - 2) {
			pageNumbers.push("...", currentPage, "...");
		} else if (currentPage >= totalPages - 2) {
			pageNumbers.push("...", totalPages - 2, totalPages - 1);
		} else {
			pageNumbers.push("...");
		}

		pageNumbers.push(totalPages);
		return pageNumbers;
	};

	return (
		<div className="flex bg-blue-50 min-w-[900px]">
			<div className="p-14 pr-0 min-w-96">
				<img
					src={user.avatar_url}
					alt="User avatar"
					className="rounded-full h-72 w-72 mb-2"
				/>
				<h2 className="md:font-bold text-3xl mb-1">{user.name}</h2>
				<a
					href={user.html_url}
					target="_blank"
					rel="noreferrer"
					className="text-blue-600 mb-6 inline-block"
				>
					{user.login}
				</a>
				<p className="flex items-center gap-4">
					<span className="flex items-center gap-1">
						<UsersIcon />
						{user.followers} followers
					</span>
					<span className="flex items-center gap-1">
						<UserIcon />
						{user.following} following
					</span>
				</p>
			</div>
			{!currentRepos.length ? (
				<EmptyResult
					icon={<NotRepoIcons />}
					text="Repository list is empty"
					additionalClasses="flex align-center w-full"
				/>
			) : (
				<div className="p-14 pl-3 min-w-[1100px] max-w-[1100px]">
					<h2 className="text-5xl md:font-semibold mb-7">
						Repositories ({user.public_repos})
					</h2>
					<div className="flex flex-col gap-4">
						{currentRepos.map((repo) => (
							<div
								key={repo.id}
								className="text-2xl bg-white py-6 px-8 gap-4 rounded-md"
							>
								<a
									href={repo.html_url}
									target="_blank"
									rel="noreferrer"
									className="text-blue-600 mb-6 inline-block"
								>
									{repo.name}
								</a>
								<p>{repo.description}</p>
							</div>
						))}
					</div>
					<div className="flex items-center justify-end mt-4">
						<div className="flex items-center">
							<span className="mr-2 text-slate-500">{`${startIdx + 1}-${endIdx} of ${public_reports.length} items`}</span>
							<Button
								onClick={handlePrevPage}
								disabled={currentPage === 1}
								className="bg-blue-50 text-gray-700"
							>
								&lt;
							</Button>
						</div>
						<div className="flex items-center">
							{renderPageNumbers().map((page, index) =>
								typeof page === "string" ? (
									<span
										key={index}
										className="px-4 py-2 mx-1 rounded bg-blue-50 text-gray-700"
									>
										{page}
									</span>
								) : (
									<Button
										key={index}
										onClick={() => setCurrentPage(page)}
										className={`mx-1 ${
											currentPage === page
												? "bg-blue-600 text-white"
												: "bg-blue-50 text-gray-700"
										}`}
									>
										{page}
									</Button>
								)
							)}
						</div>
						<Button
							onClick={handleNextPage}
							disabled={currentPage === totalPages}
							className="bg-blue-50 text-gray-700"
						>
							&gt;
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserComponent;
