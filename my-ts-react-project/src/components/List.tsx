import react from "react";
import CardWrapper from "./CardWrapper";

interface Item {
  id: number;
  title: string;
  description: string;
}

interface ListProps {
  // items: Item[];
  items: Record<string, string>;
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div>
      <h3>Item List</h3>
      {Object.entries(items).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default List;
