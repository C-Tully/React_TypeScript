import { useRef } from "react";
import Form, { FormHandle } from "../Form/Form.tsx";
import Input from "../Input/Input.tsx";

export default function LoginForm() {
  const form = useRef<FormHandle>(null);

  const inputConfig = [
    {
      name: "uName",
      type: "text",
      id: "user-name",
    },
    {
      name: "uPass",
      type: "text",
      id: "user-pass",
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
    <>
      <Form ref={form} onSave={handleLoginAttempt} id="login-form">
        {inputConfig.map((item, index) => (
          <Input key={index} label={item.name} id={item.id} type={item.type} />
        ))}
        <Button> </Button>
      </Form>
    </>
  );
}
