import React, { FC, ReactNode } from "react";

interface EmptyResultProps {
	icon: ReactNode;
	text: string;
	style?: React.CSSProperties;
}

const EmptyResult: FC<EmptyResultProps> = ({ icon, text, style }) => {
	return (
		<div style={style} className="flex flex-col items-center justify-center p-4 h-hvh">
			{icon}
			<p className="text-gray-500 max-w-9.1rem text-center">{text}</p>
		</div>
	);
};

export default EmptyResult;
