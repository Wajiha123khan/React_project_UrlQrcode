import React, { useState } from "react";
import User from "../assets/images/shrtuser.png";
import LinkHome from "./LinkHome";
import { Link } from "react-router-dom";

const LinksMainContent = () => {
  return (
    <>
      <div className="flex justify-center">
        {/* Image and Description */}
        <div className="text-center max-w-2xl">
          <img
            src={User}
            alt="Link Shortener Illustration"
            className="mx-auto mb-6 w-[400px] h-[300px] object-contain"
          />
          <div className="flex justify-center items-center space-x-4">
            {/* First Input */}
            <div className="relative">
              <input
                type="text"
                className="form-input w-full px-4 py-2 rounded-md shadow-sm border border-gray-300"
                placeholder="bit.ly/2BN6kd"
                disabled
              />
            </div>

            {/* Arrow Image */}
            <div className="h-8 w-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            {/* Second Input */}
            <div className="relative">
              <input
                type="text"
                className="bg-[#FF6F00] form-input text-white w-full px-4 py-2 rounded-md shadow-sm border border-orange-500"
                placeholder="your.bmd.co/link"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 13.5l4.5-4.5m-4.5 4.5L10.5 12m0 1.5L3 4.5l7.5 7.5m0 0L21 12"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="mt-10 text-2xl lg:text-3xl font-bold text-gray-800">
            Make your links shorter
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Bibendum ut mauris ultrices
            rutrum sed urna adipiscing. Ullamcorper risus tortor mauris nunc
            phasellus ut.
          </p>

          {/* Button */}
          <div className="mt-6">
            <Link
              to={"/home/link-home/shlink"}
              className="bg-[#00172E] text-white px-6 py-3 rounded-lg hover:bg-[#FF6F00]"
            >
              Create your short link
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksMainContent;
