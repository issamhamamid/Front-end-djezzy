import React from "react";

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900 mb-5">
      {title}
    </p>
    <div className="border-t border-gray-700"></div>
  </div>
);

export default Header;
