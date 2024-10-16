import React from "react";
import { Link, useNavigate } from "react-router-dom";
import user1Image from "../assets/images/userscan.png";
import Partner1Image from "../assets/images/prtnr1.png";
import Partner2Image from "../assets/images/prtnr2.png";
import Partner3Image from "../assets/images/prtnr3.png";
import Partner4Image from "../assets/images/prtnr4.png";
import Partner5Image from "../assets/images/prtnr5.png";
import Partner6Image from "../assets/images/prtnr6.png";
import QrCode from "../assets/images/qrcode.png";
import ShortLink from "../assets/images/shortlink.png";
import Customer1 from "../assets/images/customer01.jpg";
import customer2 from "../assets/images/customer2.jpg";
import Fb from "../assets/images/fb.png";
import Inst from "../assets/images/inst.png";
import X from "../assets/images/x.png";
import In from "../assets/images/in.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Logoipsum</h1>
          <nav className="space-x-8 hidden md:flex">
            <Link to="#" className="text-black no-underline">
              Products
            </Link>
            <Link to="/pricing" className="text-black no-underline">
              Pricing
            </Link>
            <Link to="#" className="text-black no-underline">
              Help
            </Link>
          </nav>
          <div className="space-x-4 hidden md:flex">
            <Link
              to="/home"
              className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 no-underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 no-underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <section className="bg-white text-center py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-[#00172e]">
            Transform Long Links into Powerful Connections. Your Shortcut to
            Smarter Sharing Starts Here.
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            temporibus.
            <center>
              {" "}
              Vitae quae culpa, et corporis aperiam quia necessitatibus vel
              quidem laboriosam voluptas.
            </center>
          </p>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border p-4 w-64 rounded-md text-black"
            />
            <button className="bg-[#ff6f00] text-white py-3 px-8 ml-2 rounded-md hover:bg-orange-600">
              Get started for free
            </button>
          </div>
          <div className="flex justify-center">
            <img src={user1Image} alt="User 1" className="max-w-lg w-full" />
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto flex justify-center space-x-6">
          <img src={Partner1Image} alt="Airbnb" className="h-15" />
          <img src={Partner2Image} alt="Hubspot" className="h-15" />
          <img src={Partner3Image} alt="Google" className="h-15" />
          <img src={Partner4Image} alt="Microsoft" className="h-15" />
          <img src={Partner5Image} alt="Walmart" className="h-15" />
          <img src={Partner6Image} alt="Fedex" className="h-15" />
        </div>
      </section>

      {/* Sign-up Section */}
      <section className="bg-[#00172e] py-12 text-center text-white">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Networking Start with a Link or Scan
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#ff6f00] text-white py-2 px-6 rounded-md hover:bg-orange-600">
              Short Link
            </button>
            <button className="bg-[#ff6f00] text-white py-2 px-6 rounded-md hover:bg-orange-600">
              QR Code
            </button>
          </div>
          <div className="mt-8">
            {/* <p>Short A Long Link</p> */}

            <section className="bg-gray-100 py-8 text-center text-[#00172e]">
              <div className="container mx-auto">
                {/* <h2 className="text-3xl font-bold mb-4">Our Customers Feedback</h2> */}
                <p className="text-3xl font-bold mb-4">Short A Long Link</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. In quisque sit lorem
                  consequat posuere tortor nisl.
                </p>
                <p className="text-3xl font-bold mb-4">Paste your link below</p>
              </div>
            </section>
            <input
              type="url"
              placeholder="Paste your link below"
              className="px-4 py-2 w-64 mt-2 rounded-md text-black"
            />
            <button className="bg-[#ff6f00] text-white py-2 px-6 mt-4 rounded-md hover:bg-orange-600">
              Get your short link
            </button>
          </div>
        </div>
        <br></br>
        <p className="text-1xl font-bold mb-2">Your Free Plan Includes:</p>
        <section className="flex justify-center items-center">
          <div>
            <ul className="flex space-x-4">
              <li>Try for free</li>
              <li>No credit card required</li>
              <li>Cancel anytime</li>
            </ul>
          </div>
        </section>
      </section>

      {/* Features Section */}
      <section className="bg-white text-center py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#00172e]">
            Your Gateway to Smarter URL Management
          </h2>
          <p className="text-1xl  mb-2">
            A smarter way to shorten, share, and track your links empowering you
            to optimize and enhance your online presence.
          </p>
          <br></br>
          <div className="text-center">
            <button className="bg-[#ff6f00] text-white py-2 px-6 rounded-md hover:bg-orange-600">
              Get Started For Free
            </button>
          </div>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={ShortLink}
                alt="URL Shortener"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p>URL Shortener</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={QrCode}
                alt="QR Codes"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p>QR Codes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <h2 className="text-3xl font-bold mb-6 text-[#00172e] text-center">
        Trusted and loved by thousands for simplifying the way they connect and
        share online
      </h2>
      <section className="bg-[#00172e] py-12 text-center text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-bold text-4xl">120K+</p>
              <p>People loved using it</p>
            </div>
            <div>
              <p className="font-bold text-4xl">535K+</p>
              <p>Links & QR codes generated</p>
            </div>
            <div>
              <p className="font-bold text-4xl">270K+</p>
              <p>Connections (clicks & scans)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="bg-gray-100 py-12 text-center text-[#00172e]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Customers Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FF6F00] p-6 rounded-lg shadow-md">
              <img
                src={Customer1}
                alt="Customer 1"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h2 className=" text-white">Jenny Wilson</h2>
              <p className=" text-white">Senior Project Manager</p>
              <p className="text-white">
                "This platform has simplified our URL management"
              </p>
            </div>
            <div className="bg-[#FF6F00] p-6 rounded-lg shadow-md">
              <img
                src={customer2}
                alt="Customer 2"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h2 className=" text-white">Freddie Deckow</h2>
              <p className=" text-white">Senior Developer</p>
              <p className="text-white">
                "We love the QR code features, it's super easy to use..."
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <h2 className="text-3xl font-bold mb-6 text-[#00172e] text-center">
          Enhanced Features for Ultimate Control
        </h2>
        <p className="text-1 text-[#00172e] text-center">
          Unlock advanced analytics, custom domains, and seamless integrations
          to enhance your link management
        </p>
        <button className="bg-[#ff6f00] text-white py-2 px-6 rounded-md hover:bg-orange-600">
          Get Started For Free
        </button>
      </section>
      <footer className="bg-[#00172e] text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
          {/* Company */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white no-underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white no-underline">
                  URL Shortener
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  QR Codes
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  2D Barcodes
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white no-underline">
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Mobile Links
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 12a10 10 0 0110-10h0a10 10 0 0110 10v0a10 10 0 01-10 10h0A10 10 0 012 12z"
                />
              </svg>
              <a
                href="mailto:jackson.graham@example.com"
                className="text-white no-underline"
              >
                jackson.graham@example.com
              </a>
            </div>
            <div className="flex items-center">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10v4a1 1 0 001 1h16a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1z"
              />

              <a
                href="tel:+92-335-559-0469"
                className="text-white no-underline"
              >
                +92-335-559-0469
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-orange-500 font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white no-underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us */}
        <div className="container mx-auto text-center mt-8">
          <h3 className="text-orange-500 font-bold mb-4">Follow us on</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-orange-600 no-underline">
              <img src={Fb} alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:text-orange-600 no-underline">
              <img src={Inst} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:text-orange-600 no-underline">
              <img src={X} alt="Twitter/X" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:text-orange-600 no-underline">
              <img src={In} alt="LinkedIn" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="container mx-auto text-center mt-8">
          <select className="bg-[#00172e] border border-gray-500 text-white px-4 py-2 rounded-md hover:border-orange-600">
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
        <br></br>
        <hr></hr>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p>© 2024 LogoBrand, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default HeroSection;
