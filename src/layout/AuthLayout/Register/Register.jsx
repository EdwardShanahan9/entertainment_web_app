import React, { useState } from "react";
import { Link } from "react-router";
import AuthContainer from "../../../components/AuthContainer/AuthContainer";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <AuthContainer title="Sign Up">
      <form>
        <div className="relative">
          <Input type="email" placeholder="Email Address" />

          {errorMessage ? (
            <span className="text-sm text-primary absolute right-4 top-0 font-light">
              Can’t be empty
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="relative">
          <Input type="password" placeholder="Password" />

          {errorMessage ? (
            <span className="text-sm text-primary absolute right-4 top-0 font-light">
              Can’t be empty
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="relative">
          <Input type="password" placeholder="Repeat Password" />

          {errorMessage ? (
            <span className="text-sm text-primary absolute right-4 top-0 font-light">
              Can’t be empty
            </span>
          ) : (
            ""
          )}
        </div>

        <Button text="Create an account" />
      </form>

      <p className="text-[15px] text-white text-center">
        Alreadt have an account?{" "}
        <Link className="text-primary ml-2" to="/login">
          Login
        </Link>
      </p>
    </AuthContainer>
  );
};

export default Register;
