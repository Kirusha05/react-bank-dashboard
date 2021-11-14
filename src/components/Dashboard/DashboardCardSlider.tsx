import React, { useRef, useState } from "react";
import DashboardCard, { Card } from "./DashboardCard";
import { GrNext } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

interface Props {
  showModal: () => void;
  selectedCardID: number;
  setSelectedCardID: (id: number) => void;
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

const DashboardCardSlider: React.FC<Props> = (props) => {
  const [defaultSuccess, setDefaultSuccess] = useState<null | "Success ✔">(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const {selectedCardID, setSelectedCardID, showModal, cards, setCards} = props;

  const sliderMouseDown = (direction: "left" | "right") => {
    sliderRef.current!.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  const setSelectedCardHandler = (id: number) => {
    setDefaultSuccess(null);
    setSelectedCardID(id);
  };

  const setCardDefaultHandler = (id: number) => {
    localStorage.setItem("defaultCardId", JSON.stringify(id));
    setCards(cards.slice().map(card => {
      card.isDefault = card.id === id ? true : false; 
      return card
    }));
    setDefaultSuccess("Success ✔");
  };

  const cardsItems = cards.map((card) => (
    <div key={card.id} className="card-wrapper bg-gray-200 justify-center">
      <DashboardCard {...card} onClick={() => setSelectedCardHandler(card.id)} />
    </div>
  ));

  return (
    <div className="container">
      <div className="p-8 rounded-3xl border border-gray-200 shadow-lg w-full relative">
        <GrNext
          className="slider-btn -left-6 slider-btn-rotate"
          onMouseDown={(event) => {event.preventDefault(); sliderMouseDown("left")}}
          title="Scroll to left"
        />
        <GrNext
          className="slider-btn -right-6"
          onMouseDown={(event) => {event.preventDefault(); sliderMouseDown("right")}}
          title="Scroll to right"
        />
        <div
          className="flex gap-8 flex-nowrap overflow-x-auto scrollbar-hide scroll-snap-container-x .smooth-scroll"
          ref={sliderRef}
        >
          <div className="card-wrapper bg-gradient justify-evenly relative">
            <FiSettings className="absolute bottom-3 right-5 md:bottom-0 md:top-6 md:right-6 text-xl md:text-3xl text-white hover:text-blue-100 cursor-pointer" onClick={showModal} title="Edit card settings" />
            <DashboardCard {...cards[selectedCardID]} mini />
            <button
              className={`capitalize py-1 px-3 lg:px-6 lg:py-2 rounded-md ${
                defaultSuccess
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500"
              } text-xs font-bold`}
              onClick={() => setCardDefaultHandler(selectedCardID)}
            >
              {defaultSuccess ? defaultSuccess : "Make default"}
            </button>
          </div>
          {cardsItems}
        </div>
      </div>
    </div>
  );
};

export default DashboardCardSlider;
