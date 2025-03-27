import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import Register from "./layout/AuthLayout/Register/Register";
import Login from "./layout/AuthLayout/Login/Login";
import { AuthProvider } from "./context/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index path="/" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/home" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
