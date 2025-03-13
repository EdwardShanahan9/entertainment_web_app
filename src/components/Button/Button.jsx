import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-primary hover:bg-white hover:text-dark text-white w-full py-3.5 rounded-10 mb-6 mt-10">
      {text}
    </button>
  );
};

export default Button;
