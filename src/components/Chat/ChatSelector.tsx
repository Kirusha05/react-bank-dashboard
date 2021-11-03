import React from "react";
import ChatContact, { Contact } from "./ChatContact";

interface Props {
  contacts: Contact[];
  onChatClick: (id: number) => void;
}

const ChatSelector: React.FC<Props> = ({ contacts, onChatClick }) => {
  return (
    <div className="flex flex-col absolute top-0 left-0 right-0 lg:w-auto lg:static p-4 h-screen-chat overflow-y-scroll scrollbar-hide z-20 bg-white">
      {contacts.map((contact) => (
        <ChatContact
          key={contact.phoneNumber}
          {...contact}
          onClick={() => onChatClick(contact.id)}
        />
      ))}
    </div>
  );
};

export default ChatSelector;
