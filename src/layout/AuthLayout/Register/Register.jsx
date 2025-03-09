import React from "react";
import { Link } from "react-router";
import AuthContainer from "../../../components/AuthContainer/AuthContainer";
import Input from "../../../components/Input/Input";

const Register = () => {
  return (
    <AuthContainer title="Sign Up">
      <form>
        <Input type="email" placeholder="Email Address" />

        <Input type="password" placeholder="Password" />

        <Input type="password" placeholder="Repeat Password" />

        <button>Create an account</button>
      </form>

      <p>
        Alreadt have an account? <Link to="/login">Login</Link>
      </p>
    </AuthContainer>
  );
};

export default Register;
