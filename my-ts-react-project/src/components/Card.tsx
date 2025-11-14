import React from "react";

interface Item {
  id: number;
  title: string;
  description: string;
}

interface CardProps {
  item: Item;
}

// const Card: React.FC<CardProps> = ({item}) => (
//   return (
//     <div>
//       <h4>{item.title}</h4>
//       <p>{item.description}</p>
//     </div>
//   )
// ));

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default Card;
