 // import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar.js';

import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Textform from './Components/TextForm';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-white");
    document.body.classList.remove("bg-dark");

  }
  // const [switchBtn, setSwitchBtn] = useState("Enable Dark Mode");//not work try later
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    setMode("light");
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#072c50';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setSwitchBtn("Enable  Light Mode")
      setInterval(() => {
        document.title = "TextUtils  is Amazing";
      }, 1000);
      setInterval(() => {
        document.title = " install TextUtils  Now";
      }, 700);
    } else {
      setMode("light");
      // setSwitchBtn("Enable   Dark Mode")
      document.body.style.backgroundColor = 'white'
      showAlert(" Light mode has been enabled", "success")
      document.title = "TextUtils -   Light Mode"

    }

  }

  return (
    <>

   
<Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-5'>

 
      <Routes>
       
          <Route exact path="/" element={  <Textform heading="Enter the text to Analyzers" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About about = "About Us"  mode={mode} /> } />
           
           
        </Routes>
 


      </div>


      </Router>


    </>
  );
}

export default App;