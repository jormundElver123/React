// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

//for publishing  the app, commenting out the router page
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //state variable that tells whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  //alert is an object now
  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

 const toggleMode = () => {
    if (mode === "light") {
      setMode ('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils Light Mode';
    }
  };
  return (
    <>
    {/* <BrowserRouter> */}
      {/* using Props */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className="container">
          {/* <Routes>
            <Route path="about/*" element={<About />}>
            </Route> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* </Route>
          </Routes> */}
        </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
