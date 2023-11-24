import React from "react";
import Contact from "../images/contact.png";
import Support from "../images/support.png";
const Header = () => {
  return (
    <div className="flex flex-row justify-between h-16">
      <div className="flex items-center">
        <div className="bg-gray-100 h-12 w-12 flex items-center justify-center rounded-2xl hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold pl-4">Basic Mathematics 101</h1>
      </div>
      <div className="flex items-center">
        <img className="h-8 w-8 rounded" src={Contact} alt="contact" />
        <h3 className="font-bold px-3">Call Teacher</h3>
        <img className="h-8 w-8 rounded" src={Support} alt="support" />
        <h3 className="font-bold px-3">Support</h3>
      </div>
    </div>
  );
};

export default Header;
