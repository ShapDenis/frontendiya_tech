import React from "react";

interface ButtonProps {
	onClick: () => void;
	disabled?: boolean;
	className?: string;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	disabled,
	className,
	children,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`px-4 py-2 rounded ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
		>
			{children}
		</button>
	);
};

export default Button;
