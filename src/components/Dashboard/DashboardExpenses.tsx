import React from "react";
import DashboardExpenseCard, { Expense } from "./DashboardExpenseCard";
import { BsCreditCard2Front } from "react-icons/bs";
import { VscGraphLeft } from "react-icons/vsc";
import { BsCalendarMonth } from "react-icons/bs";

const EXPENSES: Expense[] = [
  {
    title: "current balance",
    amount: "$17,500.90",
    difference: "+13%",
    differenceMessage: "since last month",
    icon: BsCreditCard2Front,
    iconColor: "bg-pink-400"
  },
  {
    title: "spent today",
    amount: "$1,200.00",
    difference: "+30%",
    differenceMessage: "compared to one day ago",
    icon: VscGraphLeft,
    iconColor: "bg-blue-600"
  },
  {
    title: "monthly spent",
    amount: "$3,500.00",
    difference: "+10%",
    differenceMessage: "since last month",
    icon: BsCalendarMonth,
    iconColor: "bg-turquoise"
  },
];

const DashboardExpenses: React.FC = () => {
  return (
    <div className="container flex gap-8 my-6 w-full items-center justify-between flex-wrap">
      {EXPENSES.map((expense) => (
        <DashboardExpenseCard key={expense.title} {...expense} />
      ))}
    </div>
  );
};

export default DashboardExpenses;
