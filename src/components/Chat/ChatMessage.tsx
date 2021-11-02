import React from "react";

export interface Message {
  self: boolean;
  messageText: string;
  timestamp: Date;
  id?: number;
}

interface Props extends Message {
  name: string;
  image: string;
}

const ChatMessage: React.FC<Props> = (props) => {
  return (
    <div
      className={`mt-4 ${props.self ? "self-end" : "self-start"}`}
    >
      <p
        className={`text-sm font-bold mb-2 text-gray-600 ${
          props.self ? "text-right" : ""
        }`}
      >
        {props.name}
      </p>
      <div
        className={`flex ${
          props.self ? "flex-row-reverse" : ""
        } items-start gap-2`}
      >
        <img
          className="rounded-full w-12 h-12"
          src={props.image}
          alt={props.name}
        />
        <div
          className={`p-4 message-max-w whitespace-normal ${props.self ? "message-bg-self" : "message-bg"} ${
            props.self ? "text-white" : "text-gray-800"
          }
          ${
            props.self
              ? "rounded-tr-none rounded-xl"
              : "rounded-tl-none rounded-xl"
          }`}
        >
          <p className="text-sm whitespace-normal break-words">{props.messageText}</p>
          <span className="text-xs mt-2 text-right block">
            {`${props.timestamp.getHours()}:${props.timestamp.getMinutes()}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
