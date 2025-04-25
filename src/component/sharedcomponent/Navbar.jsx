import React, { useContext, useState } from "react";
import logo from "/blockfuselogo1.png";
import { NavLink } from "react-router-dom";
import apply from "/apply.svg";
import sun from "/sun.svg";
import moon from "/moon.svg";
import hamburger from "/hamburger.svg"
import { themeContextProvider } from "../../Contexts/ThemeContext";
import closebtn from "/closebtn.svg"

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false)
  const [src, setSrc] = useState()
  const { darkTheme, toggleTheme } = useContext(themeContextProvider);

  const toggleSideMenu = ()=> {
    setIsOpen(prev => !prev)
  }

  return (
    <>
    <div
      className={
        darkTheme
          ? "bg-[#2f2e34] w-full xl:w-[90%] 2xl:w-4/5 py-4 px-8 mx-auto mt-8 mb-24 md:mb-36 flex items-center justify-between text-white relative"
          : " w-full xl:w-[90%] 2xl:w-4/5 py-4 px-8 mx-auto mt-8 mb-24 md:mb-36 flex items-center justify-between  relative border-[1px]"
      }
    >
      <div>
        <img src={logo} alt="" width="32" height="32" />
      </div>
      <div className=" hidden xl:flex md:items-center space-x-4 opacity-70 ">
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "active" : ""}>Home</span>
          )}
        </NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="bootcamp">Bootcamp</NavLink>
        <NavLink to="events">Event</NavLink>
        <NavLink to="alumni">Alumni</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="opensource">Open Source</NavLink>
        <NavLink to="contactus">Contact Us</NavLink>
        <NavLink to="faucet">Faucet</NavLink>
      </div>
     
      <div className="flex items-center space-x-4">
        <button
          className={
            darkTheme
              ? " hidden md:block py-2 px-6 border-2 bg-black border-[#ab65ef]"
              : " hidden md:block py-2 px-6 border-2 bg-white border-[#ab65ef]"
          }
        >
          Donate
        </button>
        <button className="text-white hidden md:flex gap-3 items-center py-2 px-4 bg-[#ab65ef]">
          Apply Now
          <img src={apply} alt="apply image" />
        </button>
        <div className="flex items-center gap-3">
          <img
            src={darkTheme ? sun : moon}
            alt="theme changer"
            onClick={toggleTheme}
            width={24}
            height={24}
          />
          <img
            src={isopen? closebtn: hamburger}
            alt=""
            className="xl:hidden"
            onClick={toggleSideMenu}
          />
        </div>
      </div>
     
    </div>
    {isopen && <div className={darkTheme?"mobileMenu bg-[#2f2e34;]": "mobileMenu bg-white border-2"}>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "active" : ""}>Home</span>
          )}
        </NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="bootcamp">Bootcamp</NavLink>
        <NavLink to="events">Event</NavLink>
        <NavLink to="alumni">Alumni</NavLink>
        <NavLink to="blog">Blog</NavLink>
        <NavLink to="opensource">Open Source</NavLink>
        <NavLink to="contactus">Contact Us</NavLink>
        <NavLink to="faucet">Faucet</NavLink>
        <button className="text-white flex gap-3 items-center py-2 px-8  w-fit bg-[#ab65ef]">
          Apply Now
          <img src={apply} alt="apply image" />
        </button>
      </div>}
    </>
  );
};

export default Navbar;
