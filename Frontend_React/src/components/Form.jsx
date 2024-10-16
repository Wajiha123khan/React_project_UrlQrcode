import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <div className="border p-6 rounded-lg bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Short your URL</h2>
      <input
        type="text"
        className="border rounded-lg w-full py-2 px-3"
        placeholder="https://example.com"
      />
      <Button label="Go to Links" />
    </div>
  );
};

export default Form;
