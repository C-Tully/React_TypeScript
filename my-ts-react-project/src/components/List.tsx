import react from "react";
import CardWrapper from "./CardWrapper";

interface Item {
  id: number;
  data: Record<string, string>;
  // description: string;
}

interface ListProps {
  // items: Item[];
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div>
      <h3>Item List</h3>
      {items.map((item) => (
        <CardWrapper key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
