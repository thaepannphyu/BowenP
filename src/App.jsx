import React from "react";
import Work from "./Pages/Work.jsx";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layoutPages/HomeLayout.jsx";
import Company from "./Pages/Company.jsx";
import CompanyLayout from "./layoutPages/CompanyLayout.jsx";
import "./App.css";

import Contact from "./Pages/Contact.jsx";

import ContactLayout from "./layoutPages/ContactLayout.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Work />} />
      </Route>
      <Route path="/company" element={<CompanyLayout />}>
        <Route index element={<Company />} />
      </Route>
      <Route path="/contact" element={<ContactLayout />}>
        <Route index element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
