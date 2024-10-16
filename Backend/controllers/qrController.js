const express = require("express");
const axios = require("axios");

const qrController = async function (req, res, next) {
  try {
    const {
      text,
      format,
      captionFontSize,
      captionFontFamily,
      caption,
      ecLevel,
      dark,
      size,
      margin,
      light,
      centerImageUrl,
      centerImageSizeRatio,
      centerImageWidth,
      centerImageHeight,
    } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    let contentType;
    if (format === "svg") {
      contentType = "image/svg+xml";
    } else if (format === "base64") {
      contentType = "text/plain";
    } else {
      contentType = "image/png";
    }
    const queryParams = new URLSearchParams({
      text: text,
      caption: caption || "",
      margin: margin || "4",
      format: format || "png",
      size: size || "150",
      caption: caption || "",
      captionFontSize: captionFontSize || "",
      captionFontFamily: captionFontFamily || "",
      ecLevel: ecLevel || "",
      dark: dark || "",
      light: light || "",
      centerImageUrl: centerImageUrl || "",
      centerImageSizeRatio: centerImageSizeRatio || "",
      centerImageWidth: centerImageWidth || "",
      centerImageHeight: centerImageHeight || "",
    });

    const response = await axios.get(
      `https://quickchart.io/qr?${queryParams.toString()}`,
      {
        responseType: "arraybuffer",
      }
    );

    if (response) {
      const imageBase64 = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      const imageSrc = `data:${contentType};base64,${imageBase64}`;
      res.json({ imageSrc });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to generate QR code" });
  }
};

module.exports = qrController;
