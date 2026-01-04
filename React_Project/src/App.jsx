import React, { useState } from "react";
import About from "./About";
import NavBar from "./NavBar";
import TextForm from "./TextForms";
import Alert from "./Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alertmsg, setAlertMsg] = useState(null);

  const showAlert = (message) => {
    setAlertMsg(message);
    setTimeout(() => {
      setAlertMsg(null);
    }, 1500);
  };

  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1e293b"; // dark blue
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1f2937";
      showAlert("Light Mode Enabled");
    }
  };

  return (
    <Router>
      <NavBar
        Title="TextUtils"
        About="About"
        mode={mode}
        toggelMode={toggelMode}
      />

      <Alert alert={alertmsg} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={<TextForm Headings="Text Analyzer" mode={mode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
