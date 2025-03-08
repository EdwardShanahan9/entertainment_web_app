import React from "react";
import { Link } from "react-router";
import AuthContainer from "../../../AuthContainer/AuthContainer";

const Register = () => {
  return (
    <AuthContainer title="Sign Up">
      <form>
        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <input type="password" placeholder="Repeat Password" />

        <button>Create an account</button>
      </form>

      <p>
        Alreadt have an account? <Link to="/login">Login</Link>
      </p>
    </AuthContainer>
  );
};

export default Register;
