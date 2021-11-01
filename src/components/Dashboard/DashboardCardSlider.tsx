import React, { useRef, useState } from "react";
import DashboardCard, { Card } from "./DashboardCard";
import { GrNext } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

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
  },
  {
    id: 2,
    bankName: "United Bank",
    currency: "€",
    number: "4354",
    cardType: "Mastercard",
  },
  {
    id: 3,
    bankName: "United Bank",
    currency: "£",
    number: "4355",
    cardType: "Visa",
  },
];

const localStorageCardId = localStorage.getItem("defaultCardId");
const defaultCardId = localStorageCardId ? parseInt(localStorageCardId) : 0;

const DashboardCardSlider: React.FC = () => {
  const [editCardID, setEditCardId] = useState(defaultCardId);
  const [defaultSuccess, setDefaultSuccess] = useState<null | "Success ✔">(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderMouseDown = (direction: "left" | "right") => {
    sliderRef.current!.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  const setEditCard = (id: number) => {
    setDefaultSuccess(null);
    setEditCardId(id);
  };

  const setCardDefault = (id: number) => {
    localStorage.setItem("defaultCardId", JSON.stringify(id));
    setDefaultSuccess("Success ✔");
  };

  const cards = CARDS.map((card) => (
    <div key={card.id} className="card-wrapper bg-gray-200 justify-center">
      <DashboardCard {...card} onClick={() => setEditCard(card.id)} />
    </div>
  ));

  return (
    <div className="container">
      <div className="p-8 rounded-3xl border border-gray-200 shadow-lg w-full relative">
        <GrNext
          className="slider-btn -left-6 slider-btn-rotate"
          onMouseDown={() => sliderMouseDown("left")}
          title="Scroll to left"
        />
        <GrNext
          className="slider-btn -right-6"
          onMouseDown={() => sliderMouseDown("right")}
          title="Scroll to right"
        />
        <div
          className="flex gap-8 flex-nowrap overflow-x-auto scrollbar-hide scroll-snap-container-x .smooth-scroll"
          ref={sliderRef}
        >
          <div className="card-wrapper bg-gradient justify-evenly relative">
            <FiSettings className="absolute bottom-3 right-5 md:bottom-0 md:top-6 md:right-6 text-xl md:text-3xl text-white cursor-pointer" />
            <DashboardCard {...CARDS[editCardID]} mini />
            <button
              className={`capitalize py-1 px-3 lg:px-6 lg:py-2 rounded-md ${
                defaultSuccess
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500"
              } text-xs font-bold`}
              onClick={() => setCardDefault(editCardID)}
            >
              {defaultSuccess ? defaultSuccess : "Make default"}
            </button>
          </div>
          {cards}
        </div>
      </div>
    </div>
  );
};

export default DashboardCardSlider;
