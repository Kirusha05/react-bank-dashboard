import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs';

interface SendSuccessProps {
  endSendExchange: () => void;
  exchangerName: string;
}

const ExchangeSendSuccess: React.FC<SendSuccessProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center modal-page">
      <BsCheckCircleFill className="text-green-400 text-3xl md:text-5xl mb-4 md:mb-8" />
      <p className="text-black font-bold mb-2 text-lg">Payment Sent</p>
      <p className="text-gray-500">You sent £94 to {props.exchangerName}</p>
      <button className="modal-btn-primary mt-4 md:mt-8" onClick={props.endSendExchange}>Close</button>
    </div>
  )
}

export default ExchangeSendSuccess
