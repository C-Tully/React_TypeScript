import { useRef } from "react";
import { useDispatch } from "react-redux";
import { USER_PRIVILIDGE } from "../../utils/constants.tsx";

import Cookies from "js-cookie";

import { setLoggedIn, logout } from "../../store/auth/authSlice.tsx";

import Form, { FormHandle } from "../Form/Form.tsx";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";

const dispatch = useDispatch();

// dispatch(setLoggedIn({ id: "abc123", privilidge: "USER" }));
// dispatch(logout());

export default function LoginForm() {
  const form = useRef<FormHandle>(null);

  const inputConfig = [
    {
      name: "uName",
      type: "text",
      id: "uName",
      label: {
        className: "block mb-1 text-sm font-medium text-gray-700",
        name: "User name",
      },
      required: true,
    },
    {
      name: "uPass",
      type: "text",
      id: "uPass",
      label: {
        className: "block mb-1 text-sm font-medium text-gray-700",
        name: "Password",
      },
      required: true,
    },
  ];

  function handleLoginAttempt(id: string, privilidge: USER_PRIVILIDGE) {
    //Set logged in using React first.
    dispatch(setLoggedIn({ id, privilidge }));
    // Set cookie in users browser so we can carry this forward
    Cookies.set("session", JSON.stringify({ id, privilidge }), {
      expires: 1, // 1 day
      secure: true,
      sameSite: "strict",
    });
  }

  // function handleLoginAttempt(data: unknown) {
  //   const extractedData = data as {
  //     uName: string;
  //     uPass: string;
  //   };
  //   if (!extractedData.uName || !extractedData.uPass) {
  //   }

  //   //do some checks here

  //   return true;
  // }

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
              label={item.label}
              id={item.id}
              type={item.type}
              name={item.name}
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
