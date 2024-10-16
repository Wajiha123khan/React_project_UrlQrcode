import React, { useContext, useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import Button from "../Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { QrCodeContext } from "../../store/Qr_Code_Generator_Store";

const QRForm = () => {
  const {
    getqrCodeImageSrc,
    formData,
    setFormData,
    showCustomization,
    longUrlS,
  } = useContext(QrCodeContext);

  const [showCaption, setShowCaption] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showCenterImage, setShowCenterImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const cap = useRef(null);
  const col = useRef(null);
  const center_img = useRef(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // When the form is submitted
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setFormData({ ...formData, ...data });
      const response = await axios.post(
        "http://localhost:3000/api/qr-code",
        formData
      ); // Make request with formData
      if (response) {
        getqrCodeImageSrc(response.data); // Fetch the QR code image URL
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error creating QR code:", error);
      setLoading(false);
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    navigate("/home"); // Redirect to the homepage or another screen
  };

  const handleCheckboxChange = () => {
    setShowCaption(cap.current.checked);
    setShowColor(col.current.checked);
    setShowCenterImage(center_img.current.checked);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Link Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Your link
        </label>
        <input
          {...register("text", {
            required: { value: true, message: "Link field is required" },
          })}
          type="text"
          defaultValue={formData.text || longUrlS}
          placeholder="e.g., https://example.com/myurl"
          // className="border rounded-lg w-full py-2 px-3"
          className={`border rounded-lg w-full py-2 px-3 ${
            errors.text
              ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          }`}
        />
        {errors.text && <p className="text-red-500">{errors.text.message}</p>}
      </div>

      {/* Format */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Format
        </label>
        <select
          {...register("format", {
            required: { value: true, message: "format field is required" },
          })}
          defaultValue={formData.format}
          // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          className={`border rounded-lg w-full py-2 px-3 ${
            errors.format
              ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          }`}
        >
          <option value="">Select a format</option>
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
          <option value="svg">SVG</option>
        </select>
        {errors.format && (
          <p className="text-red-500">{errors.format.message}</p>
        )}
      </div>
      {/* Error Correction Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Error Correction Level
        </label>
        <select
          {...register("ecLevel", {
            required: { value: true, message: "Eclevel field is required" },
          })}
          defaultValue={formData.ecLevel}
          // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          className={`border rounded-lg w-full py-2 px-3 ${
            errors.ecLevel
              ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          }`}
        >
          <option value="">Select Eclevel</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="Q">Q</option>
          <option value="H">H</option>
        </select>
        {errors.ecLevel && (
          <p className="text-red-500">{errors.ecLevel.message}</p>
        )}
      </div>
      {/* Buttons */}
      {!showCustomization && (
        <div className="flex space-x-4 mt-6">
          <Button label="Cancel" onClick={handleCancel} />
          <Button
            label={loading ? "Creating..." : "Create QR code"}
            type="submit"
          />
        </div>
      )}

      {showCustomization && (
        <div>
          {/* Margin */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Margin (px)
            </label>
            <input
              {...register("margin", {
                required: { value: true, message: "Margin field is required" },
              })}
              defaultValue={formData.margin}
              type="number"
              placeholder="e.g., 4"
              // className="border rounded-lg w-full py-2 px-3"
              className={`border rounded-lg w-full py-2 px-3 ${
                errors.margin
                  ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {errors.ecLevel && (
              <p className="text-red-500">{errors.ecLevel.message}</p>
            )}
          </div>
          {/* Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              QR Code Size (px)
            </label>
            <input
              {...register("size", {
                required: {
                  value: true,
                  message: "Qrcode size field is required",
                },
              })}
              defaultValue={formData.size}
              type="number"
              placeholder="e.g., 120"
              // className="border rounded-lg w-full py-2 px-3"
              className={`border rounded-lg w-full py-2 px-3 ${
                errors.size
                  ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {errors.size && (
              <p className="text-red-500">{errors.size.message}</p>
            )}
          </div>

          <div class="form-check form-switch my-2">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheck_caption"
              ref={cap}
              onChange={handleCheckboxChange}
            />
            <label class="form-check-label" for="flexSwitchCheck_caption">
              Add Caption
            </label>
          </div>
          {showCaption && (
            <div>
              {/* Caption */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Caption
                </label>
                <input
                  {...register("caption", {
                    required: {
                      value: true,
                      message: "caption field is required",
                    },
                  })}
                  defaultValue={formData.caption}
                  type="text"
                  placeholder="e.g., My qr code"
                  // className="border rounded-lg w-full py-2 px-3"
                  className={`border rounded-lg w-full py-2 px-3 ${
                    errors.caption
                      ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                />
                {errors.caption && (
                  <p className="text-red-500">{errors.caption.message}</p>
                )}
              </div>
              {/* Caption Font Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Caption Font Size (px)
                </label>
                <input
                  {...register("captionFontSize", {
                    required: {
                      value: true,
                      message: "fontsize field is required",
                    },
                  })}
                  defaultValue={formData.captionFontSize}
                  type="number"
                  placeholder="e.g., 12"
                  // className="border rounded-lg w-full py-2 px-3"
                  className={`border rounded-lg w-full py-2 px-3 ${
                    errors.captionFontSize
                      ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                />
                {errors.captionFontSize && (
                  <p className="text-red-500">
                    {errors.captionFontSize.message}
                  </p>
                )}
              </div>
              {/* Caption Font Family */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Caption Font Family
                </label>
                <input
                  {...register("captionFontFamily", {
                    required: {
                      value: true,
                      message: "fontfamily field is required",
                    },
                  })}
                  defaultValue={formData.captionFontFamily}
                  type="text"
                  placeholder="e.g., 'Arial', 'sans-serif'"
                  // className="border rounded-lg w-full py-2 px-3"
                  className={`border rounded-lg w-full py-2 px-3 ${
                    errors.captionFontFamily
                      ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                />
                {errors.captionFontFamily && (
                  <p className="text-red-500">
                    {errors.captionFontFamily.message}
                  </p>
                )}
              </div>
            </div>
          )}
          <div class="form-check form-switch my-2">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheck_color"
              ref={col}
              onChange={handleCheckboxChange}
            />
            <label class="form-check-label" for="flexSwitchCheck_color">
              Change Colors
            </label>
          </div>
          {showColor && (
            <div>
              {/* Foreground Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Foreground Color
                </label>
                <input
                  {...register("dark")}
                  defaultValue={formData.dark}
                  type="color"
                  className="w-full p-2 border rounded"
                />
              </div>
              {/* Foreground Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Background Color
                </label>
                <input
                  {...register("light")}
                  defaultValue={formData.light}
                  type="color"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          )}

          <div class="form-check form-switch my-2">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheck_color"
              ref={center_img}
              onChange={handleCheckboxChange}
            />
            <label class="form-check-label" for="flexSwitchCheck_color">
              Add Center Image
            </label>
          </div>

          {showCenterImage && (
            <div>
              {/* centerImageUrl */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Center Image Url
                </label>
                <input
                  {...register("centerImageUrl")}
                  defaultValue={formData.centerImageUrl}
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="e.g., https://example.com/image"
                />
                {/* {errors.centerImageUrl && <p className="text-red-500">{errors.centerImageUrl.message}</p>} */}
              </div>

              {/* centerImageSizeRatio */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Center Image Size Ratio (between 0.0 and 1.0)
                </label>
                <input
                  {...register("centerImageSizeRatio", {
                    required: {
                      value: true,
                      message: "image size ratio field is required",
                    },
                  })}
                  defaultValue={formData.centerImageSizeRatio}
                  type="number"
                  // className="w-full p-2 border rounded"
                  className={`border rounded-lg w-full py-2 px-3 ${
                    errors.centerImageSizeRatio
                      ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="e.g., 0.3"
                />
                {errors.centerImageSizeRatio && (
                  <p className="text-red-500">
                    {errors.centerImageSizeRatio.message}
                  </p>
                )}
              </div>

              {/* centerImageWidth */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Center Image Width (px)
                </label>
                <input
                  {...register("centerImageWidth", {
                    required: {
                      value: true,
                      message: "image width  field is required",
                    },
                  })}
                  defaultValue={formData.centerImageWidth}
                  type="number"
                  // className="w-full p-2 border rounded"
                  className={`border rounded-lg w-full py-2 px-3 ${
                    errors.centerImageWidth
                      ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="e.g., 50"
                />
                {errors.centerImageWidth && (
                  <p className="text-red-500">
                    {errors.centerImageWidth.message}
                  </p>
                )}
              </div>

              {/* centerImageHeight */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Center Image Height (px)
                </label>
                <input
                  {...register("centerImageHeight", {
                    required: {
                      value: true,
                      message: "image heigth field is required",
                    },
                  })}
                  defaultValue={formData.centerImageHeight}
                  type="number"
                  // className="w-full p-2 border rounded"
                  className={`border rounded-lg w-full py-2 px-3 ${
                    errors.centerImageHeight
                      ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="e.g., 50"
                />
                {errors.centerImageHeight && (
                  <p className="text-red-500">
                    {errors.centerImageHeight.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Update and Download buttons */}
          <div className="mt-6 flex justify-between">
            <Button
              label={loading ? "Updating..." : "Update QR code"}
              type="submit"
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default QRForm;
