import React, { createContext, useState } from "react";

export const QrCodeContext = createContext({
  getqrCodeImageSrc: () => {},
  qrCodeImageSrc: null,
  formData: {
    text: "",
    format: "png",
    margin: "4",
    size: "120",
    ecLevel: "L",
    captionFontSize: "",
    captionFontFamily: "",
    caption: "",
    dark: "",
    light: "",
    centerImageUrl: "",
    centerImageSizeRatio: "",
    centerImageWidth: "",
    centerImageHeight: "",
  },
  showCustomization: false,
  handleDownloadClick: () => {},
  longUrlS: null,
  showErrorModal: {
    status: false,
    type: "error",
    message: "",
  },
  setShowErrorModal: () => {}, // Add this line
  setFormData: () => {}, // Add this line
  setShowCustomization: () => {}, // Add this line
  setLongUrlS: () => {}, // Add this line
});

const Qr_Code_Generator_Store_Provider = ({ children }) => {
  const [qrCodeImageSrc, setQrCodeImageSrc] = useState(null);
  const [formData, setFormData] = useState({
    text: "",
    format: "png",
    margin: "6",
    size: "120",
    ecLevel: "L",
    caption: "",
    captionFontSize: "12",
    captionFontFamily: "sans-serif",
    dark: "",
    light: "",
    centerImageUrl: "",
    centerImageSizeRatio: "0.2",
    centerImageWidth: "50",
    centerImageHeight: "50",
  });
  const getqrCodeImageSrc = (qrCodeSrc) => {
    setQrCodeImageSrc(qrCodeSrc);
  };
  const [showCustomization, setShowCustomization] = useState(false);
  const [longUrlS, setLongUrlS] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState({
    status: false,
    type: "error",
    message: "",
  });

  // Handle QR code download
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = qrCodeImageSrc.imageSrc; // Use the generated QR code image source
    link.download = "customized-qrcode.png"; // Name of the file to be downloaded
    link.click(); // Trigger the download
  };

  return (
    <QrCodeContext.Provider
      value={{
        getqrCodeImageSrc,
        qrCodeImageSrc,
        formData,
        setFormData,
        showCustomization,
        setShowCustomization,
        handleDownloadClick,
        longUrlS,
        setLongUrlS,
        showErrorModal,
        setShowErrorModal,
      }}
    >
      {children}
    </QrCodeContext.Provider>
  );
};

export default Qr_Code_Generator_Store_Provider;
