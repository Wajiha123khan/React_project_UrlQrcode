import React from 'react';
import Button from './Button';

const GetStartedAndReplaceBox = () => {
  return (
    <>
      {/* Get Started Box */}
      <div className="border p-6 rounded-lg bg-white shadow col-span-1">
        <h2 className="text-xl font-bold mb-4">Get started</h2>
        <Button label="Create a link" />
        <Button label="Create a QR Code" />
      </div>

      {/* Replace Bitly Box */}
      <div className="border p-6 rounded-lg bg-white shadow col-span-1">
        <h2 className="text-xl font-bold mb-4">Replace 'bit.ly' with your brand</h2>
        <p className="mb-4">Click it, scan it, or share it.</p>
        <Button label="Replace Now" />
      </div>
    </>
  );
};

export default GetStartedAndReplaceBox;
