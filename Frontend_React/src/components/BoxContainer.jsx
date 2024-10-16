import React from "react";

const BoxContainer = ({ title, children }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {children}
    </div>
  );
};

export default BoxContainer;
