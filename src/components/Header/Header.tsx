import React from "react";
import searchIcon from "../../assets/logo.svg";

const Header: React.FC = () => {
	return (
		<div className="flex items-center h-18 bg-gray-100 p-4 shadow-md">
			<div className="flex items-center">
				<img src={searchIcon} className="logo react" alt="React logo" />
				<input
					type="text"
					placeholder="Search..."
					className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
		</div>
	);
};

export default Header;
