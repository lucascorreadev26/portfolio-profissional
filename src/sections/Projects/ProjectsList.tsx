import BadgeSection from "../../components/Bagde/BadgeSection";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

const ProjectsList = () => {
  return (
    <section className="bg-[#08090F] pt-24 px-6 md:px-10 lg:px-0">
      <div className="max-w-3xl lg:ml-64">
        <div className="">
          <BadgeSection>
            <span>&gt;_</span>
            <span className="font-mono font-bold uppercase">Projetos</span>
          </BadgeSection>

          <h2 className="sm:text-5xl lg:text-4xl font-extrabold font-inter text-center lg:text-left uppercase mb-2">
            Meu stack técnico
          </h2>
          <h2></h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-32 lg:w-7xl">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
