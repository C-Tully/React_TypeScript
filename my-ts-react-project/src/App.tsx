import React, { useState } from "react";
import "./App.css";
import data from "./tempData.json";
import List from "./components/List";
import FormComponent, { FormInput } from "./components/FormComponent";
import { formConfig } from "./formConfig";

//Goal: Allow a user to enter data from a form and
//have it output in a list
function App() {
  //Set intial state based on config.
  const initFormState = formConfig.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initFormState);

  const handleAddItem = (data: typeof formData) => {
    //We want to make sure were keeping the previous items
    console.log("Submitted::", data);
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
      <List items={formData} />
    </div>
  );
}

export default App;
