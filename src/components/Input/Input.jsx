import React from "react";

const Input = ({ type, placeholder, handleChange, error }) => {
  return (
    <input
      className={`block w-full text-white placeholder:text-dark-grey placeholder:text-base px-4 border-b border-dark-grey focus:text-white active:border-white ${
        error ? "border-primary" : ""
      } focus:border-white outline-hidden pb-4 mb-6`}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
