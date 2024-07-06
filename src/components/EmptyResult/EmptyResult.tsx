import { ReactNode } from "react";
import classNames from "classnames";

interface EmptyResultProps {
	icon: ReactNode;
	text: string;
	additionalClasses?: string;
}

const EmptyResult = ({ icon, text, additionalClasses }: EmptyResultProps) => {
	return (
		<div className={classNames("flex flex-col items-center justify-center p-4 h-hvh", additionalClasses)}>
			{icon}
			<p className="text-gray-500 max-w-9.1rem text-center">{text}</p>
		</div>
	);
};

export default EmptyResult;
