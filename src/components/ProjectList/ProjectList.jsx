export default function ProjectList({ project }) {
  return (
    <li className="flex flex-col justify-center gap-7 rounded-xl bg-white p-8 shadow-2xl duration-150 ease-in hover:scale-105 hover:bg-primary/[.09] md:flex-row md:items-center lg:w-1/2 lg:flex-col xl:w-1/3">
      {/* title < medium */}
      <h2 className="text-xl font-semibold text-slate-700 md:hidden">
        {project.title}
      </h2>
      <img
        src={project.image}
        alt="Project"
        className="h-full md:w-1/2 lg:w-3/4"
      />
      {/* medium > title */}
      <div className="flex w-3/4 flex-col gap-2">
        <h2 className="hidden text-xl font-semibold text-slate-700 md:inline-block md:text-2xl   lg:text-xl xl:text-2xl">
          {project.title}
        </h2>
        <p className="xl:text-md md:mb-2 lg:mb-2">{project.desc}</p>
        <div className="flex flex-wrap items-center justify-start gap-3 text-white">
          {project.stack.map((el, i) => (
            <span
              className="rounded-full bg-primary px-4 py-2 xl:px-3 xl:py-2"
              key={i}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
