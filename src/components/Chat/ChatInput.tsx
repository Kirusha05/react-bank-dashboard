import React, { useState } from "react";
import { BiSend } from "react-icons/bi";

interface Props {
  onSubmit: (text: string) => void; 
  showExchangeModal: () => void;
}

const ChatInput: React.FC<Props> = (props) => {
  const [inputText, setInputText] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputText.trim()) return;
    props.onSubmit(inputText);
    setInputText("");
  };

  return (
    <form
      className="h-14 border border-gray-200 rounded-2xl flex items-center justify-between px-5"
      onSubmit={submitHandler}
    >
      <button type="button" onClick={props.showExchangeModal} className="chat-input-btn bg-blue-100 hover:opacity-100 text-gray-800 opacity-70" title="Exchange Money">
        $
      </button>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onMouseEnter={(e) => e.currentTarget.focus()}
        type="text"
        className="w-20 flex-1 outline-none mx-2 text-sm md:text-base font-semibold"
        placeholder="Type your text here"
      />
      <button
        type="submit"
        className={`chat-input-btn ${inputText.trim() ? "bg-blue-700" : "bg-gray-400"}  ${inputText.trim() ? "hover:bg-blue-800" : ""} text-white outline-none text-sm gap-1 transition-colors ease-in-out`}
      >
        Send
        <BiSend />
      </button>
    </form>
  );
};

export default React.memo(ChatInput);
