import React from "react";
import ManPhoto from "../../assets/person-2.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";

interface ButtonProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ExchangeTypeButton: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="modal-shadow-box flex items-start w-full hover:border-blue-400 hover:bg-blue-50 transition-colors ease-in"
      onClick={props.onClick}
    >
      <img src={ManPhoto} alt="User Avatar" className="w-10 rounded-xl mr-4" />
      <div className="relative -top-1">
        <p className="text-base font-bold text-left">{props.title}</p>
        <p className="text-sm text-left text-gray-700">{props.description}</p>
      </div>
    </button>
  );
};

interface ExchangeSelectProps {
  exchangerName: string;
  setExchangeType: (type: "send" | "request", phase: number) => void;
  goBack: () => void;
}

const ExchangeTypeSelect: React.FC<ExchangeSelectProps> = (props) => {
  const firstName = props.exchangerName.split(" ")[0];
  return (
    <>
      <IoIosArrowRoundBack className="text-5xl -my-4 cursor-pointer transition-transform ease-in transform hover:-translate-x-1" onClick={props.goBack} />
      <ExchangeTypeButton
        onClick={() => props.setExchangeType("send", 0)}
        title={`Send money to ${firstName}`}
        description={`Send money from your Simsec PMI to your friend, ${firstName}`}
      />
      <ExchangeTypeButton
        onClick={() => null}
        title={`Request money from ${firstName}`}
        description={`Request money from your friend, ${firstName}`}
      />
    </>
  );
};

export default ExchangeTypeSelect;
