import React, { useState } from "react";
import { Link } from "react-router";
import AuthContainer from "../../../components/AuthContainer/AuthContainer";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (!email) errors.email = "Can’t be empty";
    if (!password) errors.password = "Can’t be empty";
    if (!repeatPassword) errors.repeatPassword = "Can’t be empty";

    if (password !== repeatPassword) {
      errors.repeatPassword = "Password don't match";
    }

    setErrorMessage(errors);
  };

  return (
    <AuthContainer title="Sign Up">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Input
            type="email"
            placeholder="Email Address"
            handleChange={(event) => setEmail(event.target.value)}
            error={errorMessage.email}
          />

          {errorMessage.email ? (
            <span className="text-sm text-primary absolute right-4 top-0 font-light">
              {errorMessage.email}
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="relative">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            handleChange={(event) => setPassword(event.target.value)}
            error={errorMessage.password}
          />

          {errorMessage.password ? (
            <span className="text-sm text-primary absolute right-4 top-0 font-light">
              {errorMessage.password}
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="relative">
          <Input
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            handleChange={(event) => setRepeatPassword(event.target.value)}
            error={errorMessage.repeatPassword}
          />

          {errorMessage.repeatPassword ? (
            <span className="text-sm text-primary absolute right-4 top-0 font-light">
              {errorMessage.repeatPassword}
            </span>
          ) : (
            ""
          )}
        </div>

        <Button text="Create an account" />
      </form>

      <p className="text-[15px] text-white text-center">
        Already have an account?{" "}
        <Link className="text-primary ml-2" to="/login">
          Login
        </Link>
      </p>
    </AuthContainer>
  );
};

export default Register;
