import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { Card } from "../Dashboard/DashboardCard";
import DashboardCard from "../Dashboard/DashboardCard";
import { IconType } from "react-icons";
import Modal from "../Modal/Modal";

const SettingSection: React.FC<{
  icon: IconType;
  title: string;
  desc: string;
}> = (props) => {
  const Icon = props.icon;
  return (
    <div className="py-2 lg:py-4 flex items-center gap-3 border-b border-gray-200 w-full">
      <Icon className="text-xl text-gray-800" />
      <div>
        <p className="font-bold">{props.title}</p>
        <p className="text-sm mt-1">{props.desc}</p>
      </div>
      <div className="flex-1 flex justify-end">
        <BiDotsVerticalRounded className="text-3xl text-gray-500 hover:text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};


interface Props {
  isActive: boolean;
  hideModal: () => void;
  card: Card;
}

const CardSettings: React.FC<Props> = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const card = props.card;

  const toggleDisabled = () => {
    setIsDisabled((prevDisabled) => !prevDisabled);
  };

  return (
    <Modal {...props}>
      <MdClose onClick={props.hideModal} className="absolute top-6 right-6 text-2xl cursor-pointer" />
      <p className="text-lg font-bold uppercase">{card.cardType} PMI</p>
      <div className="my-4 self-center">
        <DashboardCard {...card} />
      </div>
      <p className="text-gray-700 text-sm">
        This PMI is currently active {card.isDefault ? "and is" : "but isn't"}{" "}
        set to your default charge.
      </p>
      {/* Disable PMI */}
      <div className="w-full self-center flex justify-center items-center gap-6 py-4 lg:py-6 border-b border-gray-200">
        {/* Switch btn */}
        <div
          className={`w-11 ${
            isDisabled ? "bg-blue-400" : "bg-gray-200"
          } rounded-3xl h-6 relative cursor-pointer transition ease-in`}
          onClick={toggleDisabled}
        >
          <div
            className={`w-4 h-4 ${
              isDisabled ? "transform translate-x-5" : ""
            } left-1 bg-white rounded-xl absolute top-1/2 transform -translate-y-1/2 transition ease-in`}
          />
        </div>
        <p className="font-bold relative -mt-1">Disable PMI</p>
      </div>
      <SettingSection
        icon={FiSettings}
        title="Settings"
        desc="Remove or rename PMI & more"
      />
      <SettingSection
        icon={MdSecurity}
        title="Security"
        desc="Disable online transactions & more"
      />
      <button className="bg-gray-200 hover:bg-gray-300 rounded-lg w-full py-2 text-gray-700 font-bold mt-8 lg:mt-16">Need help?</button>
    </Modal>
  );
};

export default CardSettings;
