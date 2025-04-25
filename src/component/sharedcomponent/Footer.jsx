import React, { useContext } from "react";
import blockfuelogo from "/blockfuselogo1.png";
import facebook from "/facebook-svgrepo-com.svg";
import twitter from "/twitter-svgrepo-com (1).svg";
import instagram from "/instagram-svgrepo-com (2).svg";
import youtube from "/youtube-svgrepo-com (1).svg";
import { themeContextProvider } from "../../Contexts/ThemeContext";

const Footer = () => {
    const {darkTheme}  = useContext(themeContextProvider)
  return (
    <footer>
      <div className="w-[90%] md:w-3/4 py-10 flex flex-col mx-auto space-y-10">
        <div className="flex flex-col gap-3 items-center md:self-start">
          <img src={blockfuelogo} alt="" width="32" height="32" />
          <p>support@blockfuselabs.com</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row items-center justify-between">
          <ul className="flex items-center  flex-wrap gap-4 ">
            <li className="a">Home </li>
            <li className="a">About us</li>
            <li className="a">Team</li>
            <li className="a">Bootcamps</li>
            <li className="a">Events</li>
            <li className="a">Alumni</li>
            <li className="a">Blog</li>
            <li className="a">Open source</li>
            <li className="a">Contact us</li>
          </ul>
          <button className={darkTheme? "py-2 px-6 border-2 bg-black border-[#3f1c4a]": "py-2 px-6 border-2  border-[#3f1c4a]"}>
            Donate
          </button>
        </div>

        <div className={darkTheme? "bg-[#2f2e34] mt-8 px-8 py-4 flex flex-col md:flex-row items-center justify-between  gap-8 text-white": "bg-gray-200 shadow-md mt-8 px-8 py-4 flex flex-col md:flex-row items-center justify-between  gap-8 "} >
          <div className="flex gap-4">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </div>

          <div className="flex gap-4 items-center justify-center flex-wrap  text-[D1D5DB] text-sm">
            <a href="">Privacy Policy</a>
            <span>|</span>
            <a href="">Terms & Conditions</a>
            <span className="text-[#6B7280]">
              {" "}
              All Copyright (C) 2024 Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
