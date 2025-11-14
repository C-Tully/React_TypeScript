// import {useState} from "react";

//Set the structure of the Options
interface SelectionInputOption {
  label: string;
  value: string;
}

//InputStructure
interface InputConfig {
  name: string;
  label: string;
  type: "text" | "tel" | "select" | "button";
  required?: boolean;
  option?: SelectionInputOption[];
}

//Set a dynamic Props structure
interface DynamicFormProps {
  fields: InputConfig[];
  ////We set it as record since the data can be dynamic
  data: Record<string, any>;
  setData: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  onSubmit: (data: Record<string, any>) => void;
}

export default function FormComponent({
  fields,
  data,
  setData,
  onSubmit,
}: DynamicFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Pass data up to parent
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type !== "select" && (
              <input
                type={field.type}
                required={field?.required}
                value={data[field.name] ?? ""}
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }));
                }}
              />
            )}
          </div>
        );
      })}
    </form>
  );
}
