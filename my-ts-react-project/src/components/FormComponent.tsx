// import {useState} from "react";

//Set the structure of the Options
interface SelectionInputOption {
  label: string;
  value: string;
}

//InputStructure
export interface InputConfig {
  name: string;
  label: string;
  type: "text" | "tel" | "select";
  required?: boolean;
  option?: SelectionInputOption[];
}

//Set a dynamic Props structure
interface DynamicFormProps {
  //Note: Since we are passing in a config object,
  // we need to set this as readonly across usages
  fields: readonly InputConfig[];
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
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>

          {field.type === "select" ? (
            <select
              id={field.name}
              value={data[field.name] ?? ""}
              required={field.required}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  [field.name]: e.target.value,
                }))
              }
            >
              <option value="">Select...</option>
              {field.option?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type} // 'text' | 'tel'
              required={field.required}
              value={data[field.name] ?? ""}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  [field.name]: e.target.value,
                }))
              }
            />
          )}
        </div>
      ))}
      <button className="btn btn--primary" type="submit">
        Submit
      </button>
    </form>
  );
}
