import React from "react";
import HomePage from "../src/Components/Page/HomePage/HomePage";
import PricingPage from "../src/Components/Page/PricingPage/PricingPage";
import { Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
  </Routes>
 
  );
}

export default App;
