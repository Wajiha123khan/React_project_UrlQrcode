// /src/pages/HomePage.jsx
import React from 'react';
import BoxContainer from '../components/BoxContainer';

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome to Your Link Management Hub</h1>

      <div className="grid grid-cols-2 gap-6">
        <BoxContainer title="Short your URL">
          <p>Make your URL short.</p>
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-3 mt-2"
            placeholder="https://example.com"
          />
        </BoxContainer>

        <BoxContainer title="Turn into QR code">
          <p>Turn your links into scannable QR codes.</p>
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-3 mt-2"
            placeholder="https://example.com"
          />
        </BoxContainer>

        <BoxContainer title="Get Started">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Create a QR code
          </button>
        </BoxContainer>

        <BoxContainer title="Replace Bitly with your brand">
          <p>Replace "bit.ly" with your brand. Click it, scan it, or share it.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Replace Now
          </button>
        </BoxContainer>
      </div>
    </div>
  );
};

export default HomePage;
