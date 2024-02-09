import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";

import { BrowserRouter as Router} from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes.jsx";


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
