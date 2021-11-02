import React, { useRef } from "react";
import { BiSend } from "react-icons/bi";

interface Props {
  onSubmit: (text: string) => void; 
}

const ChatInput: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const messageText = inputRef.current!.value;

    props.onSubmit(messageText);
    inputRef.current!.value = "";
  };

  return (
    <form
      className="w-full h-14 border border-gray-200 rounded-2xl flex items-center justify-between px-5"
      onSubmit={submitHandler}
    >
      <button className="chat-input-btn bg-blue-100  hover:opacity-100 text-gray-800 opacity-70">
        $
      </button>
      <input
        ref={inputRef}
        type="text"
        className="flex-1 outline-none mx-2 font-semibold"
        placeholder="Type your text here"
      />
      <button
        type="submit"
        className="chat-input-btn bg-blue-700 hover:bg-blue-800 text-white text-sm gap-1"
      >
        Send
        <BiSend />
      </button>
    </form>
  );
};

export default React.memo(ChatInput);
