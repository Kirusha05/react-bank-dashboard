import React from "react";
import ManPhoto from "../../assets/person-2.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";

interface SendAccountProps {
  goBack: () => void;
  setExchangeType: (type: "send" | "request", phase: number) => void;
  exchangerName: string;
  exchangerPhone: string;
}

const ExchangeSendAccount: React.FC<SendAccountProps> = (props) => {
  return (
    <>
      <IoIosArrowRoundBack
        className="text-5xl -my-4 cursor-pointer transition-transform ease-in transform hover:-translate-x-1"
        onClick={props.goBack}
      />
      <div className="modal-shadow-box flex items-center w-full">
        <img
          src={ManPhoto}
          alt="Vlad Valeanu"
          className="w-12 rounded-3xl mr-4"
        />
        <div>
          <h1 className="text-base font-bold text-left">{props.exchangerName}</h1>
          <p className="text-sm text-left text-gray-600">{props.exchangerPhone} · vgv</p>
        </div>
      </div>
      <div className="modal-shadow-box w-full">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-bold text-xl">PMI</h2>
          <input
            className="font-semibold text-2xl text-gray-500 flex-1 w-20 text-right outline-none"
            placeholder="0"
            title="Click to edit"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Main: £3.30</p>
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
        onClick={() => props.setExchangeType("send", 1)}
      >
        Continue
      </button>
      <button className="modal-btn-secondary mt-12">Need help?</button>
    </>
  );
};

export default ExchangeSendAccount;
