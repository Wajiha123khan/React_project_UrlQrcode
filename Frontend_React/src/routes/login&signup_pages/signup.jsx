import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import signupImage from "../../assets/images/register.png";
import ErrorModal from "./ErrorModal";
import axios from "axios";
import { QrCodeContext } from "../../store/Qr_Code_Generator_Store";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showErrorModal, setShowErrorModal } = useContext(QrCodeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/register",
        data
      );
      if (response.data) {
        setShowErrorModal({
          status: true,
          type: response.data.authSuccess ? "success" : "error",
          message: response.data.message,
        });
        if (response.data.authSuccess) {
          navigate("/login");
        }
        setLoading(false);
      } else {
        setShowErrorModal({
          status: true,
          type: "error",
          message: "Error registering user. Plaese try again",
        });
        setLoading(false);
      }
    } catch (error) {
      setShowErrorModal({
        status: true,
        type: "error",
        message: "Error registering user. Plaese try again",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#00172E]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <img
            src={signupImage}
            alt="Signup Illustration"
            className="w-69 h-69 rounded-lg"
          />
        </div>

        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-[#FF6F00] mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="User name"
                {...register("Username", {
                  required: { value: true, message: "User Name is required" },
                })}
                className={`w-full h-12 p-4 rounded border ${
                  errors.Username
                    ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-[#FF6F00] focus:border-[#FF6F00]"
                }`}
                style={{ backgroundColor: "#F9F9F9" }}
              />
              {errors.Username && (
                <p className="text-red-500">{errors.Username.message}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                {...register("Email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
                className={`w-full h-12 p-4 rounded border ${
                  errors.Email
                    ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-[#FF6F00] focus:border-[#FF6F00]"
                }`}
                style={{ backgroundColor: "#F9F9F9" }}
              />
              {errors.Email && (
                <p className="text-red-500">{errors.Email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full h-12 p-4 rounded border ${
                  errors.Password
                    ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-[#FF6F00] focus:border-[#FF6F00]"
                }`}
                style={{ backgroundColor: "#F9F9F9" }}
              />
              {errors.Password && (
                <p className="text-red-500">{errors.Password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF6F00] text-white py-3 rounded-md hover:bg-orange-700 transition duration-300"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#FF6F00] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showErrorModal.status && <ErrorModal />}
    </div>
  );
};

export default SignUp;
