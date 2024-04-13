import ProjectList from "../ProjectList/ProjectList";

const templateDataProject = [
  {
    title: "Coming soon...",
    image: "./img/project-template.svg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores amet aliquid provident? Amet, minus.",
    stack: ["React JS", "Tailwind CSS", "Redux"],
  },
  {
    title: "Coming soon...",
    image: "./img/project-template.svg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores amet aliquid provident? Amet, minus.",
    stack: ["React JS", "Tailwind CSS", "Redux"],
  },
];

export default function Project() {
  return (
    <section className="mx-auto w-screen bg-primary/[.06]">
      <div className="container mx-auto py-10">
        <div className="container mb-8">
          <h1 className="text-xl font-bold text-primary lg:text-3xl">
            Project
          </h1>
        </div>
        <ul className="container space-y-5 lg:flex lg:justify-around lg:space-x-5 lg:space-y-0">
          {templateDataProject.map((project, i) => (
            <ProjectList project={project} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
