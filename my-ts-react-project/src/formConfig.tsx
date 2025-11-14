import { InputConfig } from "./components/FormComponent";

export const formConfig: InputConfig[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
  },
  {
    name: "contactMethod",
    label: "Preferred Contact Method",
    type: "select",
    required: true,
    option: [
      { label: "Phone", value: "phone" },
      { label: "Email", value: "email" },
      { label: "Text", value: "text" },
    ],
  },
];
