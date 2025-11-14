import React, { useState } from "react";
import "./App.css";
// import data from "./tempData.json";
import List from "./components/List";
import FormComponent from "./components/FormComponent";
import { formConfig } from "./formConfig";

//Type for each item in the list
interface Item {
  id: number;
  data: Record<string, string>;
}

//Goal: Allow a user to enter data from a form and
//have it output in a list
function App() {
  //Set intial state based on config.
  const initFormState: Record<string, string> = formConfig.reduce(
    (acc, field) => {
      acc[field.name] = "";
      return acc;
    },
    {} as Record<string, string>
  );

  const [formData, setFormData] = useState(initFormState);
  const [items, setItems] = useState<Item[]>([]);

  const handleSubmit = (data: typeof formData) => {
    //We want to make sure were keeping the previous items
    console.log("Submitted::", data);
    const newItem: Item = { id: items.length + 1, data };
    setItems((prev) => [...prev, newItem]);
    setFormData(initFormState); //Clears form
  };

  return (
    <div className="App">
      <h1>TestProject</h1>
      <FormComponent
        fields={formConfig}
        data={formData}
        setData={setFormData}
        onSubmit={handleSubmit}
      />
      <hr />
      <List items={items} />
    </div>
  );
}

export default App;
