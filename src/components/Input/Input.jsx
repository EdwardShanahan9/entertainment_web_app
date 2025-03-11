import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      className="block w-full placeholder:text-dark-grey placeholder:text-base px-4 border-b border-dark-grey focus:text-white active:border-white focus:border-white outline-hidden pb-4 mb-6"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
