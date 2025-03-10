import React from "react";
import { Outlet } from "react-router";
import LogoIcon from "../../assets/icons/logo.svg";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="mb-14 md:mb-16 flex items-center justify-center">
          <img src={LogoIcon} alt="Logo" />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
