import React, { useEffect, useRef, useState } from "react";
import DashboardCard, { Card } from "./DashboardCard";
import { GrNext } from "react-icons/gr";

const Cards: Card[] = [
  {
    bankName: "United Bank",
    currency: "$",
    number: "4352",
    cardType: "Mastercard",
    isDefault: true,
  },
  { bankName: "United Bank", currency: "£", number: "4353", cardType: "Visa" },
  {
    bankName: "United Bank",
    currency: "€",
    number: "4354",
    cardType: "Mastercard",
  },
  { bankName: "United Bank", currency: "£", number: "4355", cardType: "Visa" },
];

type direction = "left" | "right";

const DashboardCardSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [direction, setDirection] = useState<direction | null>(null);

  // Set an interval to animate x-move with multiple scrollTo calls
  // Offset 10 is moving 10px per call, kinda fast
  useEffect(() => {
    const clickLoop = setInterval(() => {
      if (!direction) return;
      const currentScroll = sliderRef.current!.scrollLeft;
      sliderRef.current!.scrollTo({
        left: direction === "left" ? currentScroll - 10 : currentScroll + 10,
      });
    });

    return () => clearInterval(clickLoop);
  }, [isMouseDown, direction]);

  const sliderMouseDown = (direction: direction) => {
    setDirection(direction);
    setIsMouseDown(true);
  };

  const sliderMouseUp = () => {
    setDirection(null);
    setIsMouseDown(false);
  };

  return (
    <div className="container">
      <div className="p-8 rounded-3xl border border-gray-200 shadow-lg w-full relative">
        <GrNext
          className="slider-btn -left-6 slider-btn-rotate"
          onMouseDown={() => sliderMouseDown("left")}
          onTouchStart={() => sliderMouseDown("left")}
          onMouseUp={() => sliderMouseUp()}
          onTouchEnd={() => sliderMouseUp()}
          title="Scroll to left"
        />
        <GrNext
          className="slider-btn -right-6"
          onMouseDown={() => sliderMouseDown("right")}
          onTouchStart={() => sliderMouseDown("right")}
          onMouseUp={() => sliderMouseUp()}
          onTouchEnd={() => sliderMouseUp()}
          title="Scroll to right"
        />
        <div
          className="flex gap-8 flex-nowrap overflow-x-auto scrollbar-hide"
          ref={sliderRef}
        >
          {Cards.map((card) => (
            <div
              key={card.number}
              className="rounded-3xl bg-gray-200 h-40 md:h-56 px-4 md:min-w-88 flex items-center justify-center select-none"
            >
              <DashboardCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCardSlider;
