import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    // <nav className="w-64 h-screen bg-[#00172e] p-6 text-white">
    <nav className="w-64 min-h-screen bg-[#00172e] p-6 text-white">
      <div className="text-orange-500 text-2xl font-bold mb-8">Logoipsum</div>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 block p-2"
                : "text-white block p-2 hover:bg-orange-500 hover:w-full"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/qr"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 block p-2"
                : "text-white block p-2 hover:bg-orange-500 hover:w-full"
            }
          >
            QR Codes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/link-home"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 block p-2"
                : "text-white block p-2 hover:bg-orange-500 hover:w-full"
            }
          >
            Links
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/analytics"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 block p-2"
                : "text-white block p-2 hover:bg-orange-500 hover:w-full"
            }
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/settings"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 block p-2"
                : "text-white block p-2 hover:bg-orange-500 hover:w-full"
            }
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/help"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 block p-2"
                : "text-white block p-2 hover:bg-orange-500 hover:w-full"
            }
          >
            Help & Support
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/logout"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 block p-2"
                : "text-white block p-2 hover:bg-orange-500 hover:w-full"
            }
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
