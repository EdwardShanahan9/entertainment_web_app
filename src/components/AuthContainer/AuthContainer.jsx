import React from "react";

const AuthContainer = ({ children, title }) => {
  return (
    <div className="p-6 bg-dark-blue rounded-10 w-[327px] md:w-[400px] ">
      <h2 className="text-white text-3xl mb-10">{title}</h2>
      {children}
    </div>
  );
};

export default AuthContainer;
