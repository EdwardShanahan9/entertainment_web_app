import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import MainLayout from "./layout/MainLayout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<AuthLayout />} />

          <Route path="/home" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
