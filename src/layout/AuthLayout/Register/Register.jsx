import React from "react";
import { Link } from "react-router";
import AuthContainer from "../../../components/AuthContainer/AuthContainer";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Register = () => {
  return (
    <AuthContainer title="Sign Up">
      <form>
        <Input type="email" placeholder="Email Address" />

        <Input type="password" placeholder="Password" />

        <Input type="password" placeholder="Repeat Password" />

        <Button text="Create an account" />
      </form>

      <p className="text-[15px] text-white text-center">
        Alreadt have an account?{" "}
        <Link className="text-primary" to="/login">
          Login
        </Link>
      </p>
    </AuthContainer>
  );
};

export default Register;
