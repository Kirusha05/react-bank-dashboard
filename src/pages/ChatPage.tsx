import React, { useState } from "react";
import ChatSelector from "../components/Chat/ChatSelector";
import MessagesHeader from "../components/Chat/ChatHeader";

import ManPhoto from "../assets/person-2.jpg";
import WomanPhoto1 from "../assets/person-1.jpg";
import WomanPhoto2 from "../assets/person-3.jpg";
import { Contact } from "../components/Chat/ChatContact";
import ChatArea from "../components/Chat/ChatArea";

// FAKE CONTACTS, to be fetched from an API

const CONTACTS: Contact[] = [
  {
    id: 0,
    contactName: "Chiril Cugureanu",
    contactPhoto: ManPhoto,
    phoneNumber: "447543773999",
    messageHistory: [
      {
        self: false,
        messageText: "sent you £3,310.00",
        timestamp: new Date("December 17, 2020 13:21:00"),
        id: 0,
      },
      {
        self: false,
        messageText: "Hello Vlad, how are you?",
        timestamp: new Date("December 17, 2020 13:24:00"),
        id: 1,
      },
      {
        self: true,
        messageText:
          "Wow! These photos are amazing! I’ll add them to moodboard and send you the final presentation. Thank you!",
        timestamp: new Date("December 17, 2020 13:26:00"),
        id: 2,
      },
      {
        self: false,
        messageText: "I'm super exited!!!",
        timestamp: new Date("December 17, 2020 13:29:00"),
        id: 3,
      },
      {
        self: true,
        messageText:
          "This is gonna be our greatest project ever! It's a new beginning for both of us!",
        timestamp: new Date(),
        id: 4,
      },
      {
        self: false,
        messageText:
          "Looks good to me! After 2 years of practice, I'm finally doing payed work :))",
        timestamp: new Date(),
        id: 5,
      },
      {
        self: true,
        messageText:
          "I think I will give you a pay raise! I realize this chat page is actually more complex than I thought and I really like your progress! So, whatchu say about $125 per week?",
        timestamp: new Date(),
        id: 6,
      },
      {
        self: false,
        messageText: "Sounds good to me boss! 💪",
        timestamp: new Date(),
        id: 7,
      },
    ],
  },
  {
    id: 1,
    contactName: "Emma Luyben",
    contactPhoto: WomanPhoto1,
    phoneNumber: "447543773333",
    messageHistory: [
      {
        self: false,
        messageText: "sent you £3,310.00",
        timestamp: new Date("December 17, 2020 13:21:00"),
        id: 0,
      },
      {
        self: false,
        messageText: "Hello Vlad, how are you?",
        timestamp: new Date("December 17, 2020 13:24:00"),
        id: 1,
      },
      {
        self: true,
        messageText:
          "Wow! These photos are amazing! I’ll add them to moodboard and send you the final presentation. Thank you!",
        timestamp: new Date("December 17, 2020 13:26:00"),
        id: 2,
      },
    ],
  },
  {
    id: 2,
    contactName: "Lise Bernier",
    contactPhoto: WomanPhoto2,
    phoneNumber: "447543773777",
    messageHistory: [],
  },
  {
    id: 3,
    contactName: "Lise Bernier",
    contactPhoto: WomanPhoto2,
    phoneNumber: "447543773277",
    messageHistory: [],
  },
  {
    id: 4,
    contactName: "Lise Bernier",
    contactPhoto: WomanPhoto2,
    phoneNumber: "447543771777",
    messageHistory: [],
  },
  {
    id: 5,
    contactName: "Lise Bernier",
    contactPhoto: WomanPhoto2,
    phoneNumber: "443543773777",
    messageHistory: [],
  },
];

const ChatPage = () => {
  const [selectedChatID, setSelectedChatID] = useState(
    window.innerWidth >= 1024 ? 0 : null
  );
  const [contactsInfo, setContactsInfo] = useState(CONTACTS);

  const chatSelectHandler = (id: number) => {
    setSelectedChatID(id);
  };

  const returnToChatSelect = () => {
    setSelectedChatID(null);
  };

  const selectedContact =
    selectedChatID !== null ? contactsInfo[selectedChatID] : null;

  return (
    <div className="w-full max-h-screen">
      <MessagesHeader
        userName={selectedContact?.contactName || null}
        goBack={returnToChatSelect}
      />
      <div className="w-full flex justify-center relative">
        <ChatSelector contacts={contactsInfo} onChatClick={chatSelectHandler} />
        {selectedChatID !== null && selectedContact && (
          <ChatArea
            contactName={selectedContact.contactName}
            messages={selectedContact.messageHistory}
            contactPhoto={selectedContact.contactPhoto}
            chatId={selectedChatID}
            setContacts={setContactsInfo}
          />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
