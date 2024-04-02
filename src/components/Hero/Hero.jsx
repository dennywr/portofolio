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
    <main className="container relative mt-24 md:flex md:justify-between">
      <div className="bg-primary absolute left-24 top-0 -z-10 h-32 w-32 rounded-full blur-3xl"></div>

      <div className="container mx-auto sm:space-y-1 md:mt-12 lg:space-y-3 xl:space-y-5">
        <h3 className="text-center text-sm font-bold  text-slate-700 sm:text-xl md:text-left lg:text-left lg:text-3xl xl:text-left xl:text-4xl">
          Hi, my name is
        </h3>
        <h1 className=" text-center text-lg font-bold text-slate-700 sm:text-2xl md:text-left lg:text-left lg:text-4xl xl:text-left xl:text-5xl">
          Denny Wahyudi Ramadhon
        </h1>
        <h2 className=" text-center text-lg font-bold text-slate-700 sm:text-2xl md:text-left lg:text-left lg:text-4xl xl:text-left xl:text-5xl">
          Frontend Web Developer
        </h2>

        <div className="mx-auto my-2 text-center md:text-left lg:mt-9 lg:text-left xl:text-left">
          <a href="#" target="_blank" className="inline-block">
            <Button>
              <span className="mr-2">Curriculum Vitae</span> <FaArrowRight />
            </Button>
          </a>
        </div>

        <div className="my-4 flex justify-center gap-3 md:justify-normal lg:my-9 lg:justify-normal xl:justify-normal xl:gap-6">
          <Socmed url="#">
            <FaInstagram size={35} />
          </Socmed>
          <Socmed url="#">
            <FaLinkedin size={35} />
          </Socmed>
          <Socmed url="#">
            <FaGithub size={35} />
          </Socmed>
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
