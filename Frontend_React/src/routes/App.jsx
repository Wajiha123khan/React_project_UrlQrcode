import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Qr_Code_Generator_Store_Provider from "../store/Qr_Code_Generator_Store";

import HeroSection from "./HeroSection";



const App = () => {
  return (
    <Qr_Code_Generator_Store_Provider>
      <div className="flex">
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 bg-gray-100">
          <Header />
          <Outlet />
          
        </div>
      </div>
      
    </Qr_Code_Generator_Store_Provider>
  );
};

export default App;
