import React, { useState } from "react";
import CardSettingsModal from "../components/CardSettingsModal/CardSettingsModal";
import DashboardButtons from "../components/Dashboard/DashboardButtons";
import DashboardCardSlider from "../components/Dashboard/DashboardCardSlider";
import DashboardExpenses from "../components/Dashboard/DashboardExpenses";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardTable from "../components/Dashboard/DashboardTable";
import { Card } from "../components/Dashboard/DashboardCard";

const CARDS: Card[] = [
  {
    id: 0,
    bankName: "United Bank",
    currency: "$",
    number: "4352",
    cardType: "Mastercard",
    isDefault: true,
  },
  {
    id: 1,
    bankName: "United Bank",
    currency: "£",
    number: "4353",
    cardType: "Visa",
    isDefault: false,
  },
  {
    id: 2,
    bankName: "United Bank",
    currency: "€",
    number: "4354",
    cardType: "Mastercard",
    isDefault: false,
  },
  {
    id: 3,
    bankName: "United Bank",
    currency: "£",
    number: "4355",
    cardType: "Visa",
    isDefault: false,
  },
];

const localStorageCardId = localStorage.getItem("defaultCardId");
const defaultCardId = localStorageCardId ? parseInt(localStorageCardId) : 0;

const DashboardPage: React.FC = () => {
  const [selectedCardID, setSelectedCardId] = useState(defaultCardId);
  const [showCardModal, setShowCardModal] = useState(false);
  const [cards, setCards] = useState(CARDS);

  const showModalHandler = () => {
    setShowCardModal(true);
    document.body.className = "overflow-hidden";
  };

  const hideModalHandler = () => {
    setShowCardModal(false);
    document.body.className = "";
  };

  return (
    <div className="w-full">
      <CardSettingsModal
        card={cards[selectedCardID]}
        isActive={showCardModal}
        hideModal={hideModalHandler}
      />
      <DashboardHeader />
      <DashboardButtons />
      <DashboardCardSlider
        cards={cards}
        showModal={showModalHandler}
        selectedCardID={selectedCardID}
        setSelectedCardID={setSelectedCardId}
        setCards={setCards}
      />
      <DashboardExpenses />
      <DashboardTable />
    </div>
  );
};

export default DashboardPage;
