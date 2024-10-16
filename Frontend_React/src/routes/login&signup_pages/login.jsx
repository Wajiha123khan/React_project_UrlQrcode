import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginImage from "../../assets/images/login.png";
import { QrCodeContext } from "../../store/Qr_Code_Generator_Store";
import ErrorModal from "./ErrorModal";
import axios from "axios";

const Login = () => {
  const { showErrorModal, setShowErrorModal } = useContext(QrCodeContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/login",
        data
      );
      console.log(data);
      if (response.data.authSuccess) {
        setLoading(false);
        navigate("/home");
      } else {
        setShowErrorModal({
          status: true,
          type: "error",
          message: response.data.message,
        });
        setLoading(false);
      }
    } catch (error) {
      setShowErrorModal({
        status: true,
        type: "error",
        message: "Something went wrong. Plaese try again",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#00172E]">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
          <img
            src={loginImage}
            alt="User Avatar"
            className="w-64 h-64 rounded-full"
          />
        </div>

        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-center text-[#FF6F00] mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="Email"
                placeholder="Email"
                {...register("Email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email format is invalid",
                  },
                })}
                className={`w-full h-12 p-4 rounded border ${
                  errors.Email
                    ? "border-red-500 bg-red-100 placeholder-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-[#FF6F00] focus:border-[#FF6F00]"
                }`}
                style={{ backgroundColor: "#F9F9F9" }}
              />
              {errors.email && (
                <p className="text-red-500">{errors.Email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="Password"
                placeholder="Password"
                {...register("Password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
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
              className="w-full h-12 bg-[#FF6F00] text-white py-2 rounded-md hover:bg-orange-700 transition duration-300"
            >
              {loading ? "Loging in..." : "Login"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#FF6F00] hover:underline">
                Sign Up
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

export default Login;
