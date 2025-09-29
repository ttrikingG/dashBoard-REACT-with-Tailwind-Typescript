import React from "react";

type CardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, value, icon, className }) => {
  return (
    <div
      className={`bg-white shadow rounded p-4 flex items-center gap-4 ${className}`}
    >
      {icon && <div className="text-2xl">{icon}</div>}
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
