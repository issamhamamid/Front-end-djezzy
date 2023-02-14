import React from "react";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div
      className={`${
        isOpen ? "translate-x-full" : "translate-x-0"
      } w-64 bg-white h-screen fixed ease-in-out top-0 left-0 border-r border-gray-300 rounded-r-md`}
    >
      <div className="py-6 relative">
        <h3 className="text-lg font-medium text-gray-700 text-center">
          Dashboard
        </h3>
        <ul className="mt-6">
          <li className="mb-2">
            <a
              href="a"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              Home
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              Network Overview
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              Network KPIs
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-310 text-gray-700 rounded-r-lg font-medium"
            >
              Network Performance
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              Customer KPIs
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              Reports
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              Settings
            </a>
          </li>
          <li className="mb-2">
            <a
              href="a#"
              className="block py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-r-lg font-medium"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>

      <button
        className={`
         block mt-4 ml-4 bg-gray-700 text-white p-4 rounded hover:bg-indigo-700 absolute
        ${isOpen ? "top-8 left-64 bg-red-400 " : "top-8 right-10"}`}
        style={{ top: "30px", right: "calc(100% - 40px)" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </button>
    </div>
    // <div className="relative bg-black">

    //   <div
    //     className={`${
    //       isOpen ? "block" : "hidden"
    //     } w-64 bg-gray-600 fixed top-0 bottom-0 z-10  rounded-r-md transition duration-500 ease-in-out transform ${
    //       isOpen ? "translate-x-0" : "translate-x-full"
    //     }`}
    //   >
  );
}

export default NavBar;
