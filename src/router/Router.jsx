import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manu from "../header/mobileManu/Manu";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manu" element={<Manu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterContainer;
