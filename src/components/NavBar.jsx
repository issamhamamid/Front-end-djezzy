import React from "react";
import { HiOutlineHome } from "react-icons/hi";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      <div className="py-6 px-4">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Dashboard</h3>
        <ul>
          <li className="mb-2">
            <a
              href="a"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              <HiOutlineHome className="w-8 h-6" />
              <span className={isOpen ? "ml-2 transition-all enter" : "hidden"}>
                Home
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              <HiOutlineHome className="w-8 h-6" />
              <span className={isOpen ? "ml-2 transition-all enter" : "hidden"}>
                Network Overview
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              <HiOutlineHome className="w-8 h-6" />
              <span className={isOpen ? "ml-2 transition-all enter" : "hidden"}>
                Network KPIs
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              <HiOutlineHome className="w-8 h-6" />
              <span className={isOpen ? "ml-2 transition-all enter" : "hidden"}>
                Network Performance
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              <HiOutlineHome className="w-8 h-6" />
              <span className={isOpen ? "ml-2 transition-all enter" : "hidden"}>
                Customer KPIs
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              <HiOutlineHome className={isOpen ? "w-8 h-6" : ""} />
              <span className={isOpen ? "ml-2 transition-all enter" : "hidden"}>
                Customer Feedback
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="ml-64 h-screen bg-gray-100">
        <div className="flex items-center justify-between bg-gray-200 px-4 py-2 h-16">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.17157 17.1716L4.58579 18.5858L12 11.1716L19.4142 18.5858L20.8284 17.1716L13.4142 9.75739L20.8284 2.34315L19.4142 0.928925L12 8.34315L4.58579 0.928925L3.17157 2.34315L10.5858 9.75739L3.17157 17.1716Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.58579 18.5858L3.17157 17.1716L10.5858 9.75739L3.17157 2.34315L4.58579 0.928925L12 8.34315L19.4142 0.928925L20.8284 2.34315L13.4142 9.75739L20.8284 17.1716L19.4142 18.5858L12 11.1716L4.58579 18.5858Z"
                />
              )}
            </svg>
          </button>
          <h3 className="text-lg font-medium text-gray-700">Dashboard</h3>
          <div></div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">
            Welcome to your Dashboard
          </h1>
          <p className="text-gray-600">
            You can use the sidebar to navigate through the different pages of
            the dashboard. Click on the icon to open and close it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
