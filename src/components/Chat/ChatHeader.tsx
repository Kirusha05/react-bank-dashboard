import React from "react";
import { IoChevronBack as BackIcon } from "react-icons/io5";

interface Props {
  userName?: string | null;
  goBack: () => void;
}

const ChatHeader: React.FC<Props> = (props) => {
  return (
    <div className="h-16 md:h-24 border-b border-gray-200 flex items-center justify-start gap-2 px-4 md:px-12">
      {props.userName && (
        <BackIcon
          className="lg:hidden w-9 h-9 -ml-2 text-3xl hover:text-blue-400 text-gray-800 cursor-pointer"
          onClick={props.goBack}
        />
      )}
      <h2 className="font-bold text-xl md:text-3xl w-full truncate">
        {props.userName || "Chat"}
      </h2>
    </div>
  );
};

export default ChatHeader;
