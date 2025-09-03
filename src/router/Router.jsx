import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../header/components/pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
