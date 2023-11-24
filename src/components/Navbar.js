import React, { useState } from "react";
import { links } from "../data";
import clsx from "clsx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Classroom");
  return (
    <div className="flex h-12  rounded-full justify-around  bg-[#F0F1F3] shadow-black/[0.03] backdrop-blur-[0.5rem] ">
      <nav className="flex h-12 ">
        <ul className="flex  text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <li className="pt-3 px-8 relative flex-grow" key={link.hash}>
              <a
                className={clsx("px-2 flex align-middle hover:text-gray-950", {
                  "text-gray-950": activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                <img className="h-5 w-5" src={link.image} alt="link" />
                <p className="px-2">{link.name}</p>
                {link.name === activeSection && (
                  <span className="bg-white rounded-full absolute inset-0 -z-10 my-2"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
