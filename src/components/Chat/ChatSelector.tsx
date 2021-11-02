import React from "react";
import ChatContact, { Contact } from "./ChatContact";

interface Props {
  contacts: Contact[],
  onChatClick: (id: number) => void;
}

const ChatSelector: React.FC<Props> = ({contacts, onChatClick}) => {
  return (
    <div className="flex flex-col w-96 p-4 max-h-screen-chat overflow-y-scroll scrollbar-hide">
      {contacts.map((contact) => (
        <ChatContact key={contact.phoneNumber} {...contact} onClick={() => onChatClick(contact.id)} />
      ))}
    </div>
  );
};

export default ChatSelector;
