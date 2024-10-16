import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    
    <div className="container mx-auto py-12">
        <header className="flex mb-8">
        <div className="text-3xl font-bold text-[#00172E]">LogoIpsum</div>
      </header>
      <h2 className="text-center text-3xl font-bold mb-4">Choose your pricing plan</h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Non facilisis est amet aliquam interdum turpis.
      </p>

      {/* Toggle between Monthly and Yearly */}
      <div className="flex justify-center mb-6">
        <div className="bg-[#00172E] p-2 rounded-lg inline-flex items-center" >
          <button
            onClick={() => setIsYearly(false)}
            className={`${
              !isYearly ? 'bg-white text-black' : 'bg-[#FF6F00] text-white'
            } font-semibold px-4 py-2 rounded-l-lg focus:outline-none`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`${
              isYearly ? 'bg-white text-black' : 'bg-[#FF6F00] text-white'
            } font-semibold px-4 py-2 rounded-r-lg focus:outline-none`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row">
        {/* PRO Version */}
        <div className="col-md-4 mb-6">
          <div className="p-6 bg-[#F5F5F5] text-center shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-2">PRO version</h3>
            <p className="text-4xl font-bold mb-4">
              {isYearly ? '$99.9' : '$9.9'} <span className="text-sm">{isYearly ? '/year' : '/month'}</span>
            </p>
             <ul className="list-unstyled mb-6 text-left"> {/* Align text to the left */}
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Single user license
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20 "  /> Component properties
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Interactive components
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Light & Dark theme
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> 30+ Page examples
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Lifetime Updates
              </li>
            </ul>
            <button className="bg-[#00172E] text-white py-2 px-10 rounded-lg">Choose Plan</button>
          </div>
        </div>

        {/* PRO TEAM Version */}
        <div className="col-md-4 mb-6">
          <div className="p-6 bg-[#00172E] text-white text-center shadow-lg rounded-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-2 py-1 text-sm rounded-b-lg">
              Most Popular
            </div><br></br>
            <h3 className="text-2xl font-bold mb-2">PRO TEAM version</h3>
            <p className="text-4xl font-bold mb-4">
              {isYearly ? '$199.9' : '$19.9'} <span className="text-sm">{isYearly ? '/year' : '/month'}</span>
            </p>

         <ul className="list-unstyled mb-6 text-left"> {/* Align text to the left */}
              <li className="flex items-center">
                <FaCheck className="text-white mr-20" /> Up to 6 users license
              </li>
              <li className="flex items-center">
                <FaCheck className="text-white mr-20 "  /> Component properties
              </li>
              <li className="flex items-center">
                <FaCheck className="text-white mr-20" /> Interactive components
              </li>
              <li className="flex items-center">
                <FaCheck className="text-white mr-20" /> Light & Dark theme
              </li>
              <li className="flex items-center">
                <FaCheck className="text-white mr-20" /> 30+ Page examples
              </li>
              <li className="flex items-center">
                <FaCheck className="text-white mr-20" /> Lifetime Updates
              </li>
            </ul>
            <button className="bg-white text-[#00172E] py-2 px-10 rounded-lg">Choose Plan</button>
          </div>
        </div>

        {/* PRO ENTERPRISE Version */}
        <div className="col-md-4 mb-6">
          <div className="p-6 bg-[#F5F5F5] text-center shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-2">PRO ENTERPRISE version</h3>
            <p className="text-4xl font-bold mb-4">
              {isYearly ? '$299.9' : '$29.9'} <span className="text-sm">{isYearly ? '/year' : '/month'}</span>
            </p>
           
           <ul className="list-unstyled mb-6 text-left"> {/* Align text to the left */}
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Unlimited user license
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20 "  /> Component properties
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Interactive components
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Light & Dark theme
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> 30+ Page examples
              </li>
              <li className="flex items-center">
                <FaCheck className="text-[#00172E] mr-20" /> Lifetime Updates
              </li>
            </ul>
            <button className="bg-[#00172E] text-white py-2 px-10 rounded-lg">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
