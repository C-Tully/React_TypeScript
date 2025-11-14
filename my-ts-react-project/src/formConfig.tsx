export const formConfig = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    lable: "Last Name",
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
    options: [
      {
        label: "Phone",
        value: "phone",
      },
      {
        label: "Email",
        value: "email",
      },
      {
        label: "Text",
        value: "phone",
      },
    ],
  },
] as const;
