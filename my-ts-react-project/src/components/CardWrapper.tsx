import React from "react";
import Card from "./Card";

interface Item {
  id: number;
  data: Record<string, string>;
  // description: string;
}

interface CardWrapperProps {
  item: Item;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ item }) => {
  return (
    <div className="card">
      {Object.entries(item.data).map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {value}
        </p>
      ))}
    </div>
  );
};

export default CardWrapper;
