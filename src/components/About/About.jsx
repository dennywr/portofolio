import { IconContext } from "react-icons";
import Socmed from "../Socmed/Socmed";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="flex bg-primary/[.06] text-center md:h-screen md:items-center md:justify-center"
    >
      <div className="container mx-auto md:flex md:justify-between">
        <div className="mx-auto mb-2 w-1/2 md:w-3/4">
          <img
            src="./img/about-2.svg"
            className="hidden h-36 md:inline-block md:h-40 lg:h-48 xl:h-64"
            alt="About Image"
          />
        </div>
        <div className="mx-auto w-1/2 md:text-left">
          <h1
            className="mb-7 text-xl
         font-bold text-primary md:mb-2 md:text-xl lg:text-2xl xl:mb-4 xl:text-3xl"
          >
            About Me
          </h1>
          <img
            src="./img/about-2.svg"
            className="mb-5 inline-block h-28 md:hidden"
            alt="About Image"
          />
          <p className="md:text-md text-sm lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sit sunt quibusdam quos quia numquam dolores officiis laboriosam,
            temporibus nemo omnis fugiat.
          </p>
          <div className="flex justify-center gap-4 md:my-1 md:justify-normal lg:my-2 lg:justify-normal xl:my-3 xl:justify-normal xl:gap-6">
            <IconContext.Provider
              value={{
                className: "text-lg md:text-2xl lg:text-3xl xl:text-4xl",
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
      </div>
    </section>
  );
}
