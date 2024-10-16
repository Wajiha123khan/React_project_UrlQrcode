
import React from 'react';
import { FaPen, FaTrash, FaDownload } from 'react-icons/fa';
import Chart from "../assets/images/chart.png";
import Time from "../assets/images/scanbytime.png"

const Analytics = () => {
    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Analytics</h2>
                {/* Date Range */}
                <div className="text-gray-500 text-sm bg-gray-100 px-4 py-2 rounded-md">
                    <span className="font-semibold">15/08/2024 - 15/09/2024</span>
                </div>
            </div>
            <p className="text-black font-bold mb-6">Shows data for all the links and QR codes</p>

            {/* Most Used on Card */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-[#FF6F00] p-6 rounded-lg shadow-xl transition-transform hover:scale-105 hover:shadow-2xl">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Most used on</h3>
                            <div className="flex space-x-2">
                                <FaPen className="text-gray-400 cursor-pointer" />
                                <FaTrash className="text-red-400 cursor-pointer" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold my-4">27 Aug, 2024</h2>
                        <p className="text-3xl font-bold my-2">65 clicks + 53 scans</p>
                        <p className="text-2xl font-bold my-2">24 Aug, 2024 - 4 Sept, 2024</p>
                    </div>
                </div>

                <div className="bg-[#FF6F00] p-6 rounded-lg shadow-xl transition-transform hover:scale-105 hover:shadow-2xl">
                    {/* Clicks + Scans by Time */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Clicks + Scans by Time</h3>
                            <FaDownload className="text-gray-500 cursor-pointer hover:text-gray-700" />
                        </div>
                        <div className="h-60 flex justify-center items-center">
                            {/* Chart image */}
                            <img src={Time} alt="chart" className="h-50 w-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* Clicks + Scans by Time */}
                <div className="bg-[#FF6F00] p-6 rounded-lg shadow-xl transition-transform hover:scale-105 hover:shadow-2xl">
                    {/* Clicks + Scans by Time */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Clicks + Scans by Device</h3>
                            <FaDownload className="text-gray-500 cursor-pointer hover:text-gray-700" />
                        </div>
                        <div className="h-60 flex justify-center items-center">
                            {/* Chart image */}
                            <img src={Chart} alt="chart" className="h-42 w-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
                {/* Clicks + Scans by Platforms */}
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">Clicks + Scans by Platforms</h3>
                    <FaDownload className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>

                {/* Grid of platforms */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4 items-end"> 
                    {/* LinkedIn (Small Box) */}
                    <div className="text-center">
                        <div className="bg-[#FF6F00] h-24 md:h-24 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
                           
                        </div>
                        <p className="mt-2 text-sm">LinkedIn</p>
                    </div>

                    {/* Google (Larger than LinkedIn) */}
                    <div className="text-center">
                        <div className="bg-[#FF6F00] h-32 md:h-32 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
                        
                        </div>
                        <p className="mt-2 text-sm">Google</p>
                    </div>

                    {/* Facebook (Larger than Google) */}
                    <div className="text-center">
                        <div className="bg-[#FF6F00] h-40 md:h-40 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
                            
                        </div>
                        <p className="mt-2 text-sm">Facebook</p>
                    </div>

                    {/* Twitter (Smaller than Facebook) */}
                    <div className="text-center">
                        <div className="bg-[#FF6F00] h-28 md:h-28 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
                           
                        </div>
                        <p className="mt-2 text-sm">Twitter</p>
                    </div>

                    {/* Direct (Larger than Twitter) */}
                    <div className="text-center">
                        <div className="bg-[#FF6F00] h-36 md:h-36 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
                           
                        </div>
                        <p className="mt-2 text-sm">Direct</p>
                    </div>

                    {/* Others (Smaller than Direct) */}
                    <div className="text-center">
                        <div className="bg-[#FF6F00] h-20 md:h-20 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-2xl">
                           
                        </div>
                        <p className="mt-2 text-sm">Others</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Analytics;
