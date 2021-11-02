import React from "react";
import { Message } from "./ChatMessage";

export interface Contact {
  contactName: string;
  phoneNumber: string;
  contactPhoto: string;
  messageHistory: Message[];
  id: number;
}

interface Props extends Contact {
  onClick: () => void;
}

const ChatContact: React.FC<Props> = (props) => {
  return (
    <div
      className="w-full p-6 border border-gray-200 rounded-xl flex gap-3 shadow-md mb-4 cursor-pointer hover:bg-gray-50"
      onClick={props.onClick}
    >
      <img
        className="h-12 w-12 rounded-full"
        src={props.contactPhoto}
        alt={props.contactName}
      />
      <div className="w-60">
        <h3 className="text-md font-bold mb-1 capitalize truncate w-full">
          {props.contactName}
        </h3>
        <p className="text-gray-600 text-sm">+{props.phoneNumber}</p>
      </div>
    </div>
  );
};

export default ChatContact;
