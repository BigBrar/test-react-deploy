import logo from './logo.svg';
import './App.css';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Textset from './components/Textset'
import Navbar from './components/Navbar'
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [buttonMode, setbuttonMode] = useState('primary');
  

  const setTheme = (theme,color,buttonMode) =>{
    document.body.style.backgroundColor = color;
    setMode('dark')
    showAlert(`${theme} has been applied`,'success')
    setbuttonMode(buttonMode);
  }

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }
    ,1500)
  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode has been enabled..','success')
      setbuttonMode('primary');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled..','success')
      setbuttonMode('primary');
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar setTheme={setTheme} title='Textutils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <Textset showAlert={showAlert} heading='TextUtils' mode={mode} buttonMode={buttonMode}/>
          {/* </Route>
        </Switch>
    </Router> */}
    </>
  );
}

export default App;
