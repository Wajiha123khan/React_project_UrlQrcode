// import React from 'react';

// const HelpAndSupport = () => {
//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6">
//       <h1 className="text-4xl font-bold text-[#FF6F00] mb-8">Help & Support</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">

       
//         <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Learn the Basics of URL Code Generation</h2>
//             <p className="text-gray-600">Understand how URL code generation works and its importance in digital marketing.</p>
//           </div>
//           <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
//             <p className="text-white text-lg font-bold">About</p>
//           </div>
//         </div>

       
//         <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create, Customize, and Share QR Code</h2>
//             <p className="text-gray-600">Learn how to create and customize QR codes for your business needs.</p>
//           </div>
//           <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
//             <p className="text-white text-lg font-bold">Contact Us</p>
//           </div>
//         </div>

      
//         <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">URL Integration to Shortlink</h2>
//             <p className="text-gray-600">Explore how to integrate URLs to create short links seamlessly.</p>
//           </div>
//           <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
//             <p className="text-white text-lg font-bold">Resources</p>
//           </div>
//         </div>

        
//         <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Monitor & Analyze Link & QR Code Performance</h2>
//             <p className="text-gray-600">Learn to monitor and analyze the performance of your links and QR codes effectively.</p>
//           </div>
//           <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
//             <p className="text-white text-lg font-bold">Learn More</p>
//           </div>
//         </div>

//       </div>

//       <br />

//       {/* Adjusted Contact Us Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-6xl mt-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
//         <p className="text-gray-600 mb-4">
//           If you have any questions or need further assistance, please reach out to us:
//         </p>
//         <ul className="text-gray-600">
//           <li>Email: <a href="mailto:support@example.com" className="text-[#FF6F00]">support@example.com</a></li>
//           <li>Phone: <span className="text-[#FF6F00]">(123) 456-7890</span></li>
//           <li>Address: <span className="text-[#FF6F00]">123 Main St, Suite 100, City, State, ZIP</span></li>
//         </ul>
//       </div>

//       {/* Adjusted Resources Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-6xl">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resources</h2>
//         <ul className="text-gray-600">
//           <li><a href="/user-guide" className="text-[#FF6F00]">User Guide</a></li>
//           <li><a href="/faq" className="text-[#FF6F00]">FAQ</a></li>
//           <li><a href="/terms" className="text-[#FF6F00]">Terms of Service</a></li>
//           <li><a href="/privacy-policy" className="text-[#FF6F00]">Privacy Policy</a></li>
//         </ul>
//       </div>

//     </div>
//   );
// };

// export default HelpAndSupport;



import React from 'react';

const HelpAndSupport = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-[#FF6F00] mb-8">Help & Support</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">

        {/* Box 1: URL Code Generation */}
        <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Learn the Basics of URL Code Generation</h2>
            <p className="text-gray-600">Understand how URL code generation works and its importance in digital marketing.</p>
          </div>
          <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
            <p className="text-white text-lg font-bold">About</p>
          </div>
        </div>

        {/* Box 2: QR Code Creation */}
        <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create, Customize, and Share QR Code</h2>
            <p className="text-gray-600">Learn how to create and customize QR codes for your business needs.</p>
          </div>
          <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
            <p className="text-white text-lg font-bold">Contact Us</p>
          </div>
        </div>

        {/* Box 3: URL Integration */}
        <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">URL Integration to Shortlink</h2>
            <p className="text-gray-600">Explore how to integrate URLs to create short links seamlessly.</p>
          </div>
          <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
            <p className="text-white text-lg font-bold">Resources</p>
          </div>
        </div>

        {/* Box 4: Analytics */}
        <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Monitor & Analyze Link & QR Code Performance</h2>
            <p className="text-gray-600">Learn to monitor and analyze the performance of your links and QR codes effectively.</p>
          </div>
          <div className="absolute inset-0 bg-[#FF6F00] opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
            <p className="text-white text-lg font-bold">Learn More</p>
          </div>
        </div>

      </div>

      <br />

      {/* Adjusted Contact Us Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-6xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or need further assistance, please reach out to us:
        </p>
        <div className="flex space-x-4">
          <a href="mailto:support@example.com" className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Email</a>
          <a href="tel:+11234567890" className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#e65c00] transition">Phone</a>
          <span className="bg-[#FF6F00] text-white px-4 py-2 rounded">Address: 123 Main St, Suite 100, City, State, ZIP</span>
        </div>
      </div>

      {/* Adjusted Resources Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resources</h2>
        <ul className="flex flex-wrap text-gray-600 space-x-4">
          <li><a href="/user-guide" className="text-[#FF6F00]">User Guide</a></li>
          <li><a href="/faq" className="text-[#FF6F00]">FAQ</a></li>
          <li><a href="/terms" className="text-[#FF6F00]">Terms of Service</a></li>
          <li><a href="/privacy-policy" className="text-[#FF6F00]">Privacy Policy</a></li>
        </ul>
      </div>

    </div>
  );
};

export default HelpAndSupport;
