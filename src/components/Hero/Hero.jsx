import { IconContext } from "react-icons";
import Button from "../Button/Button";
import Socmed from "../Socmed/Socmed";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Hero() {
  return (
    <main className="container relative mx-auto mt-7 md:flex md:justify-between xl:h-screen">
      <div className="absolute left-24 top-0 -z-10 w-32 rounded-full bg-primary blur-3xl"></div>

      <div className="container mx-auto sm:space-y-1 md:mt-12 lg:space-y-3 xl:space-y-5">
        <h3 className="text-center text-sm font-bold text-slate-700 sm:text-xl md:text-left lg:text-left lg:text-3xl xl:text-left xl:text-4xl">
          Hi, my name is
        </h3>
        <h1 className="h1-hero">Denny Wahyudi Ramadhon</h1>
        <h2 className="h1-hero">Frontend Web Developer</h2>

        <div className="mx-auto my-2 text-center md:text-left lg:mt-9 lg:text-left xl:text-left">
          <a href="#" target="_blank" className="inline-block">
            <Button>
              <span className="mr-2">Curriculum Vitae</span> <FaArrowRight />
            </Button>
          </a>
        </div>

        <div className="my-2 flex justify-center gap-4 md:justify-normal lg:my-9 lg:justify-normal xl:justify-normal xl:gap-6">
          <IconContext.Provider
            value={{
              className: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
            }}
          >
            <Socmed url="https://www.instagram.com/dennnywr">
              <FaInstagram />
            </Socmed>
            <Socmed url="#">
              <FaLinkedin />
            </Socmed>
            <Socmed url="https://github.com/dennywr/">
              <FaGithub />
            </Socmed>
          </IconContext.Provider>
        </div>
      </div>
      <img
        src="./img/man-2.svg"
        className="mx-auto mt-5 w-28 md:w-52 xl:w-64"
        alt=""
      />
    </main>
  );
}
