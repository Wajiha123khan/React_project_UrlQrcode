
import React, { useState } from 'react';
import Confirmationimage from '../../assets/images/confirmimg.png';

const Logout = () => {
  const [showConfirmation, setShowConfirmation] = useState(true); 
  const [isHovered, setIsHovered] = useState(false); 

  const handleLogout = () => {
    console.log("User has logged out");
    window.location.href = '/login'; // Redirect user after logout
  };

  const handleCancel = () => {
    setShowConfirmation(false); 
    console.log("User cancelled logout");
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 pt-20">
      {showConfirmation && (
        <div
          className={`bg-white p-8 rounded-lg shadow-xl flex items-center border-4 transition-all duration-300 transform ${isHovered ? 'border-orange-500 scale-105' : 'border-transparent'}`} // Added scaling effect on hover
          style={{ width: '90%', maxWidth: '700px', height: '400px' }} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
        >
          <img
            src={Confirmationimage}
            alt="Logout Confirmation"
            className="w-1/2 h-auto object-contain mr-6" 
          />
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-[#FF6F00] mb-4 text-center"> 
              Logout Confirmation
            </h2>
            <p className="text-gray-700 mb-6 text-center text-lg">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center space-x-6"> 
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200 shadow-md transform hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-[#FF6F00] text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200 shadow-md transform hover:scale-105"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
