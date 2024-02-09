/* eslint-disable no-unused-vars */
import React from "react";
import App from "./App.jsx";

import MultiStepForm from "./pages/MultiStepForm.jsx";
import FormSubmitted from "./pages/FormSubmitted.jsx";

import About from "./pages/About.jsx";
import ContantUs from "./pages/ContactUs.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<MultiStepForm />} />
        <Route path="/success" element={<FormSubmitted />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContantUs />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
