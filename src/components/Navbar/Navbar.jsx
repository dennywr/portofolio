import { useState } from "react";
import { IconContext } from "react-icons";
import { CiCloudMoon } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container mx-auto mt-9 items-center">
      {/* isOpen === false */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-slate-700">
          Denny<span className="text-primary">wr.</span>
        </div>
        <ul className="hidden justify-between font-semibold md:flex md:gap-10">
          <li className="nav-list">About</li>
          <li className="nav-list">Skill</li>
          <li className="nav-list">Project</li>
          <li className="nav-list">Contact</li>
        </ul>
        <button className="hidden md:inline-block">
          <CiCloudMoon size={35} />
        </button>
        <img
          src={`./img/${!isOpen ? "burger-menu" : "close-menu"}.svg`}
          className={`${isOpen ? "rotate-90" : ""} h-8 transform cursor-pointer transition-transform md:hidden`}
          alt="Navbar Button"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* item of hamburger navbar || isOpen === true */}
      <ul
        className={`${!isOpen ? "hidden" : ""} absolute left-0 top-0 z-10 flex h-screen w-3/4  flex-col items-center justify-center gap-3 bg-white py-10 text-center shadow-2xl md:hidden lg:hidden xl:hidden`}
      >
        <Link className="hamburger-list" to="#about">
          About
        </Link>
        <Link className="hamburger-list" to="#skill">
          Skill
        </Link>
        <Link className="hamburger-list" to="#project">
          Project
        </Link>
        <Link className="hamburger-list" to="#contact">
          Contact
        </Link>
        <IconContext.Provider value={{ color: "#000" }}>
          <button className="rounded-full bg-slate-200 bg-opacity-80 p-3 px-36 hover:bg-slate-300 hover:text-white">
            <CiCloudMoon size={27} />
          </button>
        </IconContext.Provider>
      </ul>
    </nav>
  );
}
