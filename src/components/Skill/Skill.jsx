import { IconContext } from "react-icons";
import { SiTailwindcss, SiReact, SiBootstrap, SiRedux } from "react-icons/si";
export default function Skill() {
  return (
    <section id="skill" className="container mx-auto">
      <div className="container flex h-screen flex-col items-center justify-center  md:flex-row md:justify-between">
        <div className="w-1/2 space-y-3 text-center font-bold text-slate-700 md:text-left">
          <h1 className="text-xl text-primary lg:text-2xl xl:text-3xl">
            Skill
          </h1>
          <h3 className="text-md sm:text-xl md:w-[90%] md:text-2xl lg:w-[75%] lg:text-3xl xl:w-2/3 xl:text-4xl">
            Some of the newest <span className="text-primary">technology</span>{" "}
            that i use.
          </h3>
        </div>
        <div className="mt-5 flex justify-between space-x-8">
          <IconContext.Provider
            value={{
              className:
                "text-slate-400 text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            }}
          >
            <SiTailwindcss />
            <SiBootstrap />
            <SiReact />
            <SiRedux />
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
}
