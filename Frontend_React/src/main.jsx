import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Tailwind CSS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import Qr from "./routes/Qr.jsx";
import HeroSection from "./routes/HeroSection.jsx";
import LinkHome from "./routes/LinkHome.jsx";
import LinkMainContent from "./routes/LinksMainContent.jsx";
import Pricing from "./routes/Pricing.jsx";
import Analytics from "./routes/Analytics.jsx";
import Login from "./routes/login&signup_pages/login.jsx"; // Adjust the path if needed
import Signup from "./routes/login&signup_pages/signup.jsx"; // Adjust the path if needed
import Qr_Code_Generator_Store_Provider from "./store/Qr_Code_Generator_Store.jsx";
import Logout from "./routes/login&signup_pages/Logout.jsx";
import HelpAndSupport from "./routes/HelpAndSupport.jsx";
import SettingsPage from "./routes/SettingsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroSection />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  // {
  //   path: "/logout",
  //   element: <div>logout page</div>,
  // },
  // {
  //   path: "/login",
  //   element: (
  //     <Qr_Code_Generator_Store_Provider>
  //       <Login />,
  //     </Qr_Code_Generator_Store_Provider>
  //   ),
  // },
  // {
  //   path: "/signup",
  //   element: (
  //     <Qr_Code_Generator_Store_Provider>
  //       <Signup />,
  //     </Qr_Code_Generator_Store_Provider>
  //   ),
  // },
  {
    path: "/home",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },

      {
        path: "qr",
        element: <Qr />,
      },
      {
        path: "link-home",
        element: <LinkMainContent />,
      },
      {
        path: "link-home/shlink",
        element: <LinkHome />,
      },

      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <SettingsPage/>,
      },
      {
        path: "help",
        element: <HelpAndSupport/>,
      },
        {
      path: "logout",
      element: <Logout />,
    },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
