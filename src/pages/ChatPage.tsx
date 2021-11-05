import React, { useState } from "react";
import ChatSelector from "../components/Chat/ChatSelector";
import MessagesHeader from "../components/Chat/ChatHeader";
import ChatArea from "../components/Chat/ChatArea";
import { IoIosArrowRoundBack } from "react-icons/io";

import CONTACTS from "./contacts";
import ExchangeTypeSelect from "../components/ExchangeCash/ExchangeTypeSelect";
import Modal from "../components/Modal/Modal";
import ExchangeSendAccount from "../components/ExchangeCash/ExchangeSendAccount";
import ExchangeSendDetails from "../components/ExchangeCash/ExchangeSendDetails";
import ExchangeSendSuccess from "../components/ExchangeCash/ExchangeSendSuccess";

type ExchangeType =
  | { type: "send"; phase: number }
  | { type: "request"; phase: number }
  | null;

const ChatPage = () => {
  const [selectedChatID, setSelectedChatID] = useState(
    window.innerWidth >= 1024 ? 0 : null
  );
  const [contactsInfo, setContactsInfo] = useState(CONTACTS);
  const [exchangeModalIsActive, setExchangeModalIsActive] = useState(false);
  const [selectedExchangeType, setSelectedExchangeType] =
    useState<ExchangeType>(null);
  const [paymentDescription, setPaymentDescription] = useState("");

  const chatSelectHandler = (id: number) => {
    setSelectedChatID(id);
  };

  const returnToChatSelect = () => {
    setSelectedChatID(null);
  };

  const setExchangeType = (type: "send" | "request", phase: number) => {
    setSelectedExchangeType({ type: type, phase: phase });
  };

  const closeExchangeModal = () => {
    setExchangeModalIsActive(false);
    setSelectedExchangeType(null);
  };

  const goBack = () => {
    if (!selectedExchangeType) setExchangeModalIsActive(false);
    if (selectedExchangeType?.type === "send")
      switch (selectedExchangeType.phase) {
        case 1:
          setSelectedExchangeType(null);
          break;
        case 2:
          setSelectedExchangeType({ type: "send", phase: 1 });
          break;
        default:
          break;
      }
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
        {/* ChatSelect is active if no contact is selected on small screens or always show it on large 1024+ px screens */}
        {(selectedChatID === null || window.innerWidth >= 1024) && (
          <ChatSelector
            contacts={contactsInfo}
            onChatClick={chatSelectHandler}
          />
        )}
        {selectedChatID !== null && selectedContact && (
          <ChatArea
            contactName={selectedContact.contactName}
            messages={selectedContact.messageHistory}
            contactPhoto={selectedContact.contactPhoto}
            chatId={selectedChatID}
            setContacts={setContactsInfo}
            showExchangeModal={() => setExchangeModalIsActive(true)}
          />
        )}
      </div>
      {exchangeModalIsActive && (
        <Modal isActive={exchangeModalIsActive} hideModal={closeExchangeModal}>
          {(!selectedExchangeType ||
            (selectedExchangeType.type === "send" &&
              selectedExchangeType.phase !== 3)) && (
            <IoIosArrowRoundBack
              className="text-5xl -my-4 cursor-pointer transition-transform ease-in transform -ml-2 lg:hover:-translate-x-1"
              onClick={goBack}
            />
          )}
          {!selectedExchangeType && (
            <ExchangeTypeSelect
              exchangerName={selectedContact!.contactName}
              setExchangeType={setExchangeType}
              goBack={goBack}
            />
          )}
          {selectedExchangeType?.type === "send" &&
            selectedExchangeType.phase === 1 && (
              <ExchangeSendAccount
                exchangerName={selectedContact!.contactName}
                exchangerPhone={selectedContact!.phoneNumber}
                setExchangeType={setExchangeType}
                descriptionEdit={(e) => setPaymentDescription(e.target.value)}
                goBack={goBack}
              />
            )}
          {selectedExchangeType?.type === "send" &&
            selectedExchangeType.phase === 2 && (
              <ExchangeSendDetails
                exchangerName={selectedContact!.contactName}
                exchangerPhone={selectedContact!.phoneNumber}
                setExchangeType={setExchangeType}
                description={paymentDescription}
                goBack={goBack}
              />
            )}
          {selectedExchangeType?.type === "send" &&
            selectedExchangeType.phase === 3 && (
              <ExchangeSendSuccess
                exchangerName={selectedContact!.contactName}
                endSendExchange={closeExchangeModal}
              />
            )}
        </Modal>
      )}
    </div>
  );
};

export default ChatPage;
