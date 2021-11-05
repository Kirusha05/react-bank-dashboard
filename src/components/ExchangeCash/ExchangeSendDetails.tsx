import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

interface DetailProps {
  title: string;
  value: string;
}

const DetailField: React.FC<DetailProps> = (props) => {
  return (
    <div className="flex items-center justify-between font-semibold">
      <p className="text-gray-500">{props.title}</p>
      <p className="text-black">{props.value}</p>
    </div>
  );
};

interface SendDetailsProps {
  goBack: () => void;
  setExchangeType: (type: "send" | "request", phase: number) => void;
  exchangerName: string;
  exchangerPhone: string;
}

const ExchangeSendDetails: React.FC<SendDetailsProps> = (props) => {
  return (
    <>
      <IoIosArrowRoundBack
        className="text-5xl -my-4 cursor-pointer transition-transform ease-in transform hover:-translate-x-1"
        onClick={props.goBack}
      />
      <div className="w-full">
        <div className="modal-shadow-box text-sm">
          <p className="font-bold">Description</p>
          <p>Money for invoice 20002</p>
        </div>
        <div className="modal-shadow-box flex flex-col gap-2">
          <DetailField title="Amount" value="$123" />
          <DetailField title="Amount after exchange" value="£94" />
          <DetailField title="Exchange fee" value="£0" />
          <DetailField title="Total" value="£94" />
          <DetailField title="From" value="USD" />
        </div>
        <div className="modal-shadow-box flex flex-col gap-2">
          <DetailField title="To" value={props.exchangerName} />
          <DetailField title="Phone Number" value={props.exchangerPhone} />
        </div>
        <button
          className="modal-btn-primary mt-4"
          onClick={() => props.setExchangeType("send", 2)}
        >
          Send
        </button>
        <button className="modal-btn-secondary mt-12">Need help?</button>
      </div>
    </>
  );
};

export default ExchangeSendDetails;
