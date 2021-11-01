import React from "react";
import { SiVisa } from "react-icons/si";

export interface Card {
  id: number;
  bankName: string;
  currency: "$" | "€" | "£";
  number: string;
  cardType: "Visa" | "Mastercard";
  isDefault?: boolean;
  mini?: boolean;
  onClick?: () => void;
}

const DashboardCard: React.FC<Card> = (props) => {
  const circleSize = props.mini ? 'w-6 h-6' : 'w-8 h-8';
  const mastercardIcon = (
    <div className="flex items-center">
      <div className={`bg-yellow-500 rounded-full ${circleSize} z-0`} />
      <div className={`bg-red-500 rounded-full ${circleSize} z-10 -ml-3`} />
    </div>
  );
  const cardTypeIcon =
    props.cardType === "Visa" ? (
      <SiVisa className="text-4xl top-2 md:text-6xl relative md:top-5" />
    ) : (
      mastercardIcon
    );

  const backgroundColor =
    props.cardType === "Visa" ? "bg-blue-600" : " bg-black";
  const mobilePaddingY = props.mini ? "py-4" : "py-4";
  const desktopPaddingY = props.mini ? "md:py-4" : "md:py-7";
  const mobilePaddingX = props.mini ? "px-5" : "px-6";
  const mobileSize = props.mini ? "h-28 w-40" : "h-32 w-48";
  const desktopSize = props.mini ? "md:h-32 md:w-48" : "md:h-40 md:w-56";
  const fontSize = props.mini ? "" : "md:text-sm";
  const whiteBoxSize = props.mini ? "h-6 w-7" : "h-7 w-8"

  return (
    <div
      className={`${backgroundColor} rounded-3xl ${mobileSize} ${desktopSize} text-white ${mobilePaddingX} ${mobilePaddingY} ${desktopPaddingY} text-xs ${fontSize} flex cursor-pointer`}
      title="Click to edit"
      onClick={props.onClick}
    >
      {/* Bank name, white box, number */}
      <div className="flex h-full flex-col items-start justify-between flex-1">
        <p className="">{props.bankName}</p>
        <div className={`${whiteBoxSize} rounded bg-gray-200 -mt-4`} />
        <p className="font-bold">{props.number}</p>
      </div>
      {/* Currency and card type */}
      <div className="flex h-full flex-col items-end justify-between">
        <p className="font-bold">{props.currency}</p>
        {cardTypeIcon}
      </div>
    </div>
  );
};

export default DashboardCard;
