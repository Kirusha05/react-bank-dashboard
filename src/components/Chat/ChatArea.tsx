import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ChatMessage, { Message } from "./ChatMessage";

import ProfilePhoto from "../../assets/profile-photo.jpg";
import ChatInput from "./ChatInput";
import { Contact } from "./ChatContact";

const SelfUsername = "Vlad Valeanu";

interface ChatProps {
  messages: Message[];
  contactName: string;
  contactPhoto: string;
  chatId: number;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
  showExchangeModal: () => void;
}

let isInitial = true;

const ChatArea: React.FC<ChatProps> = ({
  messages,
  contactName,
  contactPhoto,
  setContacts,
  chatId,
  showExchangeModal,
}) => {
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottomOfChat = () => {
    const div = chatRef.current!;
    div.scrollTo({ top: div.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("resize", scrollToBottomOfChat);

    return () => window.removeEventListener("resize", scrollToBottomOfChat);
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      setTimeout(() => scrollToBottomOfChat(), 100);
    } else {
      scrollToBottomOfChat();
    }
  });

  const addMessageToConversation = (text: string) => {
    const newMessage: Message = {
      messageText: text,
      self: true,
      timestamp: new Date(),
      id: messages.length,
    };

    setContacts((prevContacts) => {
      const newContacts: Contact[] = [...prevContacts];
      newContacts[chatId].messageHistory.push(newMessage);
      return newContacts;
    });
  };

  const messagesArea = (
    <div
      className="flex flex-col justify-start w-full flex-1 overflow-y-scroll scrollbar-hide pb-4"
      ref={chatRef}
    >
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          image={message.self ? ProfilePhoto : contactPhoto}
          messageText={message.messageText}
          name={message.self ? SelfUsername : contactName}
          self={message.self}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );

  return (
    <div className="z-20 px-4 pb-4 flex flex-col bg-white absolute top-0 left-0 w-full h-screen-chat lg:w-auto lg:static lg:max-w-5xl lg:flex-1 lg:border-l border-gray-200">
      {messagesArea}
      <ChatInput onSubmit={addMessageToConversation} showExchangeModal={showExchangeModal} />
    </div>
  );
};

export default React.memo(ChatArea);
