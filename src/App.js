import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import './CSS/App.css'; //importing the css for App
import Home from './Pages/Home';
import EllesCookies from './Pages/EllesCookies';
import NavBar from './Components/NavBar';
import FootBar from './Components/FootBar';

function App() {

  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/EllesCookies" element={<EllesCookies />}></Route>
        </Routes>
      </div>
      <FootBar/>
    </Router>
  );
};

export default App;
