import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";

export interface TransactionItem {
  transactionDate: string;
  transactionName: string;
  transactionType: "DEB";
  amountIn: string;
  amountOut: string;
  balance: string; 
};

const DashboardTableItem: React.FC<TransactionItem> = (props) => {
  const {transactionDate, transactionName, transactionType, amountIn, amountOut, balance} = props;

  return (
    <div className="t-row bg-transparent relative px-8 py-5 lg:py-2 text-gray-600 font-thin grid grid-rows-5 grid-flow-col lg:gap-0 lg:w-auto lg:grid-flow-row lg:grid-rows-none lg:grid-cols-custom items-center border-r border-gray-200 lg:border-b lg:border-r-0 lg:border-t-0 w-36">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center text-center md:text-left"> {/* Transaction Description */}
        <BsCreditCard className="text-2xl text-black hidden lg:block" /> {/* Card Icon */}
        <div className="text-black">
          <p className="text-xs font-normal capitalize">{transactionDate}</p> {/*Transaction Date */}
          <p className="text-sm lg:text-base leading-4 text-uppercase font-bold">{transactionName}</p> {/*Transaction Name */}
        </div>
      </div>
      <p className="text-center lg:text-left text-sm lg:text-base">{transactionType}</p> {/* Transaction Type */}
      <p className="text-center lg:text-left text-sm lg:text-base">{amountIn}</p> {/* In amount */}
      <p className="text-center lg:text-left text-sm lg:text-base">{amountOut}</p> {/* Out amount */}
      <p className="text-center lg:text-left text-sm lg:text-base">{balance}</p> {/* Balance */}
      <button className="absolute right-1 top-2 lg:right-8 flex justify-end text-gray-500 hover:text-gray-800"> {/* Options btn */}
        <BiDotsVerticalRounded className="text-2xl" />
      </button>
    </div>
  );
};

export default DashboardTableItem;
