import React from "react"
import {Routes, Route, BrowserRouter,} from "react-router-dom";

//import Login from "./components/Pages/Login/Login";
import CreateUser from "./components/Pages/CreateUser/CreateUser";
//import CreateUser from "./components/Pages/CreateUser/CreateUser";



function App() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<CreateUser />} />
        </Routes>  
      </BrowserRouter>
)}

export default App;
