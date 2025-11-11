import React from "react";

export default function SimpleForm() {
  type FormValues = {
    a: string;
    b: string;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as FormValues;

    console.log("Data!", data);

    //handle submission

    if (!data) {
      console.log("no data!");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        input A:
        <input name="a" type="text" />
      </label>
      <label>
        input B:
        <input name="b" type="text" />
      </label>
      <button>Submit</button>
    </form>
  );
}
