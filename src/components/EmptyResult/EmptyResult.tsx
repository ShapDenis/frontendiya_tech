import React from "react";

interface EmptyResultProps {
  icon: string;
  text: string;
  style?: React.CSSProperties;
}

const EmptyResult: React.FC<EmptyResultProps> = ({icon, text, style}) => {
  return (
  <div style={style} className="flex flex-col items-center justify-center p-4 h-hvh">
    <img
    src={icon}
    className="size-28 mb-4"
    alt="Search icon"
    />
    <p className="text-gray-500 max-w-9.1rem text-center">{text}</p>
  </div>
  );
};

export default EmptyResult;
