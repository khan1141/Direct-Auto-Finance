import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import FormCreditRating from "./pages/FormCreditRating.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormTest from "./pages/FormTest.jsx";
import FormBudget from "./pages/FormBudget.jsx";
import MultiStepForm from "./pages/MultiStepForm.jsx";
import FormSubmitted from "./pages/formSubmitted.jsx";
import AnimatedRoutes from "./AnimatedRoutes.jsx";
import Testbackground from "./Testbackground.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);
// <Route path="/formBudget" element={<FormBudget />} />
//     <Route path="/formCreditRating" element={<FormCreditRating />} />
/*

<Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<MultiStepForm />} />
        <Route path="/success" element={<FormSubmitted />} />
      </Routes>


*/
