import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Pay from "./Components/Pay/pay.component";
import HomePage from './Pages/HomePage/HomePage.component';


const App =()=>{
  return(
    <div className="App">
  
    <Routes>
      <Route path="/pay" element={<Pay/>}/> 
      <Route path="/" element={<HomePage/>}/>
     </Routes>
     </div>
  )
}

export default App;
