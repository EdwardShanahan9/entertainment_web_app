import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import Register from "./layout/AuthLayout/Register/Register";
import Login from "./layout/AuthLayout/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/home" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
