import React from "react";
import { SiVisa } from "react-icons/si";

export interface Card {
  bankName: string;
  currency: "$" | "€" | "£";
  number: string;
  cardType: "Visa" | "Mastercard";
  isDefault?: boolean;
}

const DashboardCard: React.FC<Card> = (props) => {
  const mastercardIcon = (
    <div className="flex items-center">
      <div className="bg-yellow-500 rounded-full w-8 h-8 z-0" />
      <div className="bg-red-500 rounded-full w-8 h-8 z-10 -ml-3" />
    </div>
  );
  const cardTypeIcon =
    props.cardType === "Visa" ? (
      <SiVisa className="text-7xl relative top-5" />
    ) : (
      mastercardIcon
    );

  return (
    <div
      className={`${
        props.cardType === "Visa" ? "bg-blue-600" : " bg-black"
      } rounded-3xl h-32 md:h-40 w-48 md:w-56 text-white px-6 py-4 md:py-7 text-xs md:text-sm flex cursor-pointer`}
      title="Click to edit"
    >
      {/* Bank name, white box, number */}
      <div className="flex h-full flex-col items-start justify-between flex-1">
        <p className="">{props.bankName}</p>
        <div className="h-7 w-8 rounded bg-gray-200 -mt-4" />
        <p className="font-bold">{props.number}</p>
      </div>
      {/* Currency and card type */}
      <div className="flex h-full flex-col items-end justify-between flex-1">
        <p className="font-bold">{props.currency}</p>
        {cardTypeIcon}
      </div>
    </div>
  );
};

export default DashboardCard;
