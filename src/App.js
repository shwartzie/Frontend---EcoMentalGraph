import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage.js";
import { LogInPage } from "./pages/LogInPage/LogInPage.js";
import { Patient } from "./pages/Patient/Patient.js";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/log-in" element={<LogInPage />}></Route>
          <Route exact path="/sign-up" element={<SignUpPage />}></Route>
          <Route exact path="/patient" element={<Patient />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
