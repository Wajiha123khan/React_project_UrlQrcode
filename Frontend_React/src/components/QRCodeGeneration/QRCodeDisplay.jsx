import React, { useContext, useState } from "react";
import Button from "../Button";
import { QrCodeContext } from "../../store/Qr_Code_Generator_Store";
import axios from "axios";

const QRCodeDisplay = () => {
  const {
    qrCodeImageSrc,
    setShowCustomization,
    showCustomization,
    handleDownloadClick,
  } = useContext(QrCodeContext);

  // Toggle customization form visibility
  const handleCustomizeClick = () => {
    setShowCustomization(!showCustomization);
  };

  return (
    <div className="border p-6 rounded-lg bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Generated QR Code</h2>
      <img
        src={qrCodeImageSrc && qrCodeImageSrc.imageSrc}
        className="w-32 h-32 mx-auto mb-6"
        alt="QR Code"
      />
      {qrCodeImageSrc && <>
      
        <div className="flex flex-col items-center"> 
            <Button label="Customize QR Code" onClick={handleCustomizeClick} />
            <div className="my-2" />
            <Button label="Download QR Code" onClick={handleDownloadClick} />
          </div>
      
      </>
      }
    </div>
    
  );
};

export default QRCodeDisplay;
