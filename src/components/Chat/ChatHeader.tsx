import React from "react";
import { IoIosArrowBack as BackIcon } from "react-icons/io";

interface Props {
  userName?: string | null;
  goBack: () => void;
}

const ChatHeader: React.FC<Props> = (props) => {
  return (
    <div className="h-16 md:h-24 border-b border-gray-200 flex items-center px-8">
      {props.userName && (
        <BackIcon
          className="lg:hidden text-3xl w-12 text-gray-800 hover:text-blue-400 cursor-pointer"
          onClick={props.goBack}
        />
      )}
      <h2 className="font-bold text-xl md:text-3xl">{props.userName || "Chat"}</h2>
    </div>
  );
};

export default ChatHeader;
