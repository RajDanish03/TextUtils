import React, { useState } from "react";
import About from "./About";
import NavBar from "./NavBar";
import TextForm from "./TextForms";
import Alert from "./Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alertmsg, setalertmsg] = useState(null);

  let toggelMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#415163ff";
      setalertmsg("Dark Mode");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setalertmsg("Light Mode");
    }
  };

  return (
    <>
      <Router>
        <NavBar
          Title="TextUtils"
          About="About"
          visit=""
          mode={mode}
          toggelMode={toggelMode}
        />

        {alertmsg && <Alert alert={alertmsg} />}

        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={<TextForm Headings="Summery" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
