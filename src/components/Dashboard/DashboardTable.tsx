import React from "react";
import DashboardTableHeader from "./DashboardTableHeader";
import DashboardTableItem from "./DashboardTableItem";
import { TransactionItem } from "./DashboardTableItem";

let TRANSACTIONS: TransactionItem[] = [];

// Generate fake transactions
for (let i = 0; i < 10; i++) {
  const newTransaction: TransactionItem = {
    transactionName: "Car park charges",
    transactionType: "DEB",
    transactionDate: `${Math.floor(Math.random() * 30 + 1)} sep 21`,
    amountIn: "",
    amountOut: (Math.random() * 2000).toFixed(2),
    balance: (Math.random() * (40000 - 25000) + 25000).toFixed(2),
  };
  TRANSACTIONS.push(newTransaction);
}

const DashboardTable = () => {
  return (
    <div className="container">
      <div className="flex lg:flex-col overflow-x-auto scrollbar-hide border rounded-3xl border-gray-200 lg:border-0 shadow-md lg:shadow-none">
        <DashboardTableHeader />
        <div className="flex lg:flex-col">
          {TRANSACTIONS.map((transaction) => (
            <DashboardTableItem key={transaction.balance} {...transaction} />
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-sm py-5 md:px-8">
        Showing 10 items out of 250 results found
      </p>
    </div>
  );
};

export default DashboardTable;
