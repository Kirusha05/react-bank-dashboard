import React, { useState } from "react";
import ManPhoto from "../../assets/person-2.jpg";
import { FiChevronDown } from "react-icons/fi";
import ExchangeAccountSelect from "./ExchangeAccountSelect";

interface SendAccountProps {
  goBack: () => void;
  setExchangeType: (type: "send" | "request", phase: number) => void;
  exchangerName: string;
  exchangerPhone: string;
}

const ExchangeSendAccount: React.FC<SendAccountProps> = (props) => {
  const [selectAccountActive, setSelectAccountActive] = useState(false);

  if (selectAccountActive)
    return (
      <ExchangeAccountSelect onProceed={() => setSelectAccountActive(false)} />
    );

  return (
    <div className="w-full modal-page">
      <div className="modal-shadow-box flex items-center w-full">
        <img
          src={ManPhoto}
          alt="Vlad Valeanu"
          className="w-12 rounded-3xl mr-4"
        />
        <div>
          <h1 className="text-base font-bold text-left">
            {props.exchangerName}
          </h1>
          <p className="text-sm text-left text-gray-600">
            +{props.exchangerPhone} · vgv
          </p>
        </div>
      </div>
      <div className="modal-shadow-box w-full">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-bold text-lg md:text-xl">PMI</h2>
          <input
            className="font-semibold text-lg md:text-2xl text-gray-500 flex-1 w-20 text-right outline-none"
            placeholder="0"
            title="Click to edit"
          />
        </div>
        <div className="flex items-center justify-between">
          <p
            className="text-sm cursor-pointer hover:text-blue-600"
            onClick={() => setSelectAccountActive(true)}
          >
            Main: £3.30 <FiChevronDown className="text-sm inline" />
          </p>
          <p className="text-sm font-semibold">£0</p>
        </div>
      </div>
      <div className="modal-shadow-box w-full">
        <p className="text-sm text-gray-600">Description</p>
        <p className="font-semibold text-gray-700">2021 payment</p>
      </div>
      <div className="h-px bg-gray-200 w-full my-4" />
      <button
        className="modal-btn-primary"
        onClick={() => props.setExchangeType("send", 2)}
      >
        Continue
      </button>
      <button className="modal-btn-secondary mt-12">Need help?</button>
    </div>
  );
};

export default ExchangeSendAccount;
