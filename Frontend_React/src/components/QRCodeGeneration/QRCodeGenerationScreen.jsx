// /src/screens/QRCodeGeneration/QRCodeGenerationScreen.jsx
import React, { useContext, useState } from "react";
import QRForm from "./QRForm";
import QRCodeDisplay from "./QRCodeDisplay";
import Button from "../Button";
import { QrCodeContext } from "../../store/Qr_Code_Generator_Store";

const QRCodeGenerationScreen = () => {
  const {
    showCustomization,
  } = useContext(QrCodeContext);

  return (
    <div className="p-6 flex max-w-7xl mx-auto space-x-6">
      <div className="w-2/3 bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">{showCustomization?"Customize QR code":"Create QR code"}</h1>
        <QRForm />
      </div>

      <div className="w-1/3">
        <QRCodeDisplay />
        <div className="flex justify-between mt-4">
          <Button label="Back" />
          <Button label="Share" />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerationScreen;
