import { useRef } from "react";
import Form, { FormHandle } from "../Form/Form.tsx";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import styles from "./LoginForm.scss";

export default function LoginForm() {
  const form = useRef<FormHandle>(null);

  const inputConfig = [
    {
      name: "User name",
      type: "text",
      id: "user-name",
      label: {
        className: "block mb-1 text-sm font-medium text-gray-700",
      },
    },
    {
      name: "Password",
      type: "text",
      id: "user-pass",
      label: {
        className: "block mb-1 text-sm font-medium text-gray-700",
      },
    },
  ];

  function handleLoginAttempt(data: unknown) {
    const extractedData = data as {
      uName: string;
      uPass: string;
    };

    //do some checks here

    return true;
  }

  return (
    <Form
      ref={form}
      onSave={handleLoginAttempt}
      id="login-form"
      className={
        "w-[70%] bg-white rounded-b-md shadow-lg p-8 mx-auto border-b-black"
      }
    >
      <div className="flex flex-col items-center gap-4">
        {inputConfig.map((item, index) => (
          <div className="w-full max-w-sm">
            <Input
              key={index}
              label={item.name}
              id={item.id}
              type={item.type}
              labelClassName={item.label.className}
            />
          </div>
        ))}
        <Button
          className={
            "bg-sky-500 hover:bg-sky-700 block mb-1 text-sm font-medium text-gray-700 rounded-xs"
          }
        >
          Login
        </Button>
      </div>
    </Form>
  );
}
