import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { CiCloudMoon } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`container sticky top-0 z-10 mx-auto items-center py-6 ${
        isScrolled ? "bg-opacity-90 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-slate-700">
          <a href="#">
            Denny<span className="text-primary">wr.</span>
          </a>
        </div>
        <ul className="hidden justify-between text-lg font-semibold md:flex md:gap-10">
          <li className="nav-list visited:bg-red-400 visited:text-white">
            <a href="#about">About</a>
          </li>
          <li className="nav-list">
            <a href="#skill">Skill</a>
          </li>
          <li className="nav-list">
            <a href="#project">Project</a>
          </li>
          <li className="nav-list">
            <a href="#contact">Contact</a>
          </li>
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

      <ul
        className={`${!isOpen ? "hidden" : ""} absolute left-0 top-0 z-10 flex h-screen w-3/4  flex-col items-center justify-center gap-3 bg-white py-10 text-center shadow-2xl md:hidden lg:hidden xl:hidden`}
      >
        <li className="hamburger-list visited:bg-red-400 visited:text-white">
          <a href="#about">About</a>
        </li>
        <li className="hamburger-list">
          <a href="#skill">Skill</a>
        </li>
        <li className="hamburger-list">
          <a href="#project">Project</a>
        </li>
        <li className="hamburger-list">
          <a href="#contact">Contact</a>
        </li>

        <IconContext.Provider value={{ color: "#000" }}>
          <button className="rounded-full bg-slate-200 bg-opacity-80 p-3 px-36 hover:bg-slate-300 hover:text-white">
            <CiCloudMoon size={27} />
          </button>
        </IconContext.Provider>
      </ul>
    </nav>
  );
}
