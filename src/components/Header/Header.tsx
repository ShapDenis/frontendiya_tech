import LogoIcon from "@assets/logo.svg?react";
import SearchIcon from "@assets/search.svg?react";

interface HeaderProps {
	setData: (value: string) => void;
}

const Header = ({ setData }: HeaderProps) => {
	return (
		<div className="flex items-center h-18 bg-blue-700 p-4 shadow-md">
			<div className="flex gap-4 items-center pl-4">
				<LogoIcon />
				<div className="flex items-center w-full relative">
					<input
						type="text"
						onChange={(e) => setData(e.target.value)}
						placeholder="Enter GitHub username"
						className="pl-10 pr-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
					/>
					<span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500">
						<SearchIcon />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
