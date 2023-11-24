import React from "react";
import { cardData } from "../data";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-col w-1/4 mr-2">
      {cardData.map((card) => (
        <Card name={card.name} src={card.src} />
      ))}
    </div>
  );
};

export default Cards;
