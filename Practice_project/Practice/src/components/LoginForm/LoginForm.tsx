import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import { USER_PRIVILIDGE } from "../../utils/constants.tsx";

import Cookies from "js-cookie";

import { setLoggedIn, logout, loginUser } from "../../store/auth/authSlice.tsx";

import Form, { FormHandle } from "../Form/Form.tsx";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import { useNavigate } from "react-router-dom";

// dispatch(setLoggedIn({ id: "abc123", privilidge: "USER" }));
// dispatch(logout());

export default function LoginForm() {
  const form = useRef<FormHandle>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  async function handleLoginAttempt(data: unknown) {
    const { uName, uPass } = data as { uName: string; uPass: string };

    try {
      if (uName && uPass) {
        const resultAction = await dispatch(loginUser({ username: uName }));

        if (loginUser.fulfilled.match(resultAction)) {
          // Cookies.set("session", JSON.stringify({ id, privilidge }), {
          //   expires: 1,
          //   secure: true,
          //   sameSite: "strict",
          // });

          form.current?.clear();
          navigate("/sessions");
        } else {
          //handle error
          console.log("failed login");
        }
      }
    } catch (e) {
      console.log("hard error::", e);
      //oow handle even worse error
    }
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
          <div className="w-full max-w-sm" key={item.id}>
            <Input
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
