import React from "react";

const Button = ({ className = "", label = "", type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={` bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
