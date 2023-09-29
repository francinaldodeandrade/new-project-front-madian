import React from "react"
import {Routes, Route, BrowserRouter,} from "react-router-dom";

//import Header from "./Header";
import Login from "./components/Login/Login";


function App() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} />
        </Routes>  
      </BrowserRouter>
)}

export default App;
