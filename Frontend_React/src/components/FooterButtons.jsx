import React from 'react';
import Button from './Button';

const FooterButtons = () => {
  return (
    <div className="flex justify-around mt-6">
      <Button label="Create a link" />
      <Button label="Create a QR Code" />
    </div>
  );
};

export default FooterButtons;
