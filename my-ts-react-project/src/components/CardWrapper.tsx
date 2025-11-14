import React from "react";
import Card from "./Card";

interface Item {
  id: number;
  title: string;
  description: string;
}

interface CardWrapperProps {
  item: Item;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ item }) => {
  return (
    <div className="card-wrapper-container">
      <Card item={item} />
    </div>
  );
};

export default CardWrapper;
