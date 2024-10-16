import React from 'react';

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-[#FF6F00] mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        
        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Settings</h2>
          <p className="text-gray-600 mb-2">Manage your account information and preferences.</p>
          <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Edit Account</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Settings</h2>
          <p className="text-gray-600 mb-2">Control your privacy preferences and data sharing.</p>
          <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Manage Privacy</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notification Settings</h2>
          <p className="text-gray-600 mb-2">Adjust your notification preferences and alerts.</p>
          <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Edit Notifications</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Settings</h2>
          <p className="text-gray-600 mb-2">Update your security options, including password and two-factor authentication.</p>
          <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Manage Security</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Language Settings</h2>
          <p className="text-gray-600 mb-2">Choose your preferred language for the application.</p>
          <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Select Language</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Theme Settings</h2>
          <p className="text-gray-600 mb-2">Customize the look and feel of the application.</p>
          <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Change Theme</button>
        </div>

      </div>
    
    </div>
  );
};

export default SettingsPage;
