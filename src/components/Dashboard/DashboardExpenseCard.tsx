import React from "react";
import { IconType } from "react-icons";

export interface Expense {
  title: string;
  amount: string;
  difference: string;
  differenceMessage: string;
  icon: IconType;
  iconColor: string;
}

const DashboardExpenseCard: React.FC<Expense> = (props) => {
  const Icon = props.icon;

  return (
    <div className="shadow p-6 px-8 border-2 border-gray-200 rounded-3xl min-w-72 flex-1 relative">
      {/* Title */}
      <p className="text-sm text-gray-500 font-bold capitalize">
        {props.title}
      </p>

      {/* Amount */}
      <p className="text-2xl text-black font-bold my-2">{props.amount}</p>

      {/* Difference percentage */}
      <p className="text-green-500 bg-green-100 text-xs rounded-md py-1 px-2 inline">
        {props.difference}
      </p>

      {/* Difference message */}
      <p className="text-gray-500 text-xs ml-2 lowercase inline">
        {props.differenceMessage}
      </p>

      {/* Icon */}
      <div
        className={`absolute top-6 right-6 w-12 h-12 rounded-3xl flex items-center justify-center ${props.iconColor}`}
      >
        <Icon className="text-white text-xl" />
      </div>
    </div>
  );
};

export default DashboardExpenseCard;
