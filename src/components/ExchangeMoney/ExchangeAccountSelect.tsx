import React, { useState } from "react";
import flagUK from "../../assets/flags/united-kingdom.png";
import flagUSA from "../../assets/flags/united-states.png";
import flagHongKong from "../../assets/flags/hong-kong.png";
import flagEU from "../../assets/flags/european-union.png";

import { BsCheckCircleFill } from "react-icons/bs";

interface IAccount {
  id: number;
  image: string;
  name: string;
  currency: string;
  defaultAmount: string;
  poundsAmount?: string;
}

interface AccountCardProps extends IAccount {
  selected: boolean;
  onClick: () => void;
}

const AccountCard: React.FC<AccountCardProps> = (props) => {
  return (
    <div
      className={`w-full p-2 md:p-3 flex items-center gap-4 ${
        props.selected ? "bg-blue-50" : "bg-white"
      } hover:bg-blue-50 rounded-lg cursor-pointer`}
      onClick={props.onClick}
    >
      <div className="w-8 h-8 md:w-11 md:h-11 rounded-3xl bg-gray-400 relative">
        <img src={props.image} alt="Currency" />
        {props.selected && (
          <BsCheckCircleFill className="absolute -right-px -bottom-px text-blue-600 text-lg bg-white rounded-xl" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between text-sm md:text-base font-semibold">
          <p>{props.name}</p>
          <p>{props.defaultAmount}</p>
        </div>
        <div className="flex items-start justify-between text-xs md:text-sm text-gray-500 font-semibold">
          <p>{props.currency}</p>
          <p>{props.poundsAmount}</p>
        </div>
      </div>
    </div>
  );
};

const RECENT_ACCOUNTS: IAccount[] = [
  {
    id: 0,
    image: flagUK,
    name: "Main",
    currency: "GBP",
    defaultAmount: "£0.94",
  },
  {
    id: 1,
    image: flagUSA,
    name: "Main",
    currency: "USD",
    defaultAmount: "$7,069.01",
    poundsAmount: "£5,165.80",
  },
  {
    id: 2,
    image: flagHongKong,
    name: "Hong Kong Dollars",
    currency: "HKD",
    defaultAmount: "H$575.02",
    poundsAmount: "£54",
  },
];

const OTHER_ACCOUNTS: IAccount[] = [
  {
    id: 3,
    image: flagEU,
    name: "Main",
    currency: "EUR",
    defaultAmount: "€1.11",
    poundsAmount: "£0.95",
  },
  {
    id: 4,
    image: flagUSA,
    name: "American Dollars",
    currency: "USD",
    defaultAmount: "$7,069.01",
    poundsAmount: "£5,165.80",
  },
];

interface AccountSelectProps {
  onProceed: () => void;
};

const ExchangeAccountSelect: React.FC<AccountSelectProps> = (props) => {
  const [selectedAccID, setSelectedAccID] = useState(0);

  return (
    <div className="w-full">
      <p className="font-bold text-xl md:text-2xl my-2 md:my-5">Select your account</p>
      <p className="text-gray-500 text-sm font-semibold md:mb-2">Recently used</p>
      <div className="p-1 w-full bg-white rounded-xl flex flex-col gap-1 shadow-md">
        {RECENT_ACCOUNTS.map((acc) => (
          <AccountCard
            {...acc}
            selected={acc.id === selectedAccID}
            onClick={() => setSelectedAccID(acc.id)}
          />
        ))}
      </div>
      <p className="text-gray-500 text-sm font-semibold md:mb-2 mt-3 md:mt-6">Others • {OTHER_ACCOUNTS.length}</p>
      <div className="p-1 w-full bg-white rounded-xl flex flex-col gap-1 shadow-md">
        {OTHER_ACCOUNTS.map((acc) => (
          <AccountCard
            {...acc}
            selected={acc.id === selectedAccID}
            onClick={() => setSelectedAccID(acc.id)}
          />
        ))}
      </div>
      <button className="modal-btn-primary mt-2" onClick={props.onProceed}>Continue</button>
    </div>
  );
};

export default ExchangeAccountSelect;
