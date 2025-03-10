import React from "react";

const AuthContainer = ({ children, title }) => {
  return (
    <div className="p-6 bg-light-blue rounded-10">
      <h2 className="text-white text-3xl mb-10">{title}</h2>
      {children}
    </div>
  );
};

export default AuthContainer;
