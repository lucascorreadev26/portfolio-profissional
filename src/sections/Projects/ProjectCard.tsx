import { FaEarthAmericas } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import Button from "../../components/Button/Button";
import CardsStacks from "../../components/Cards/CardsStacks";
import type { Project } from "./types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-blue-800/50 bg-[#0D1117] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] sm:p-6">
      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-transparent to-cyan-500/10 opacity-0" />

      {/* Conteúdo que recebe o efeito de hover */}
      <div className="relative z-10 transition-all duration-500 group-hover:opacity-10">
        <h2 className="font-inter mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-2xl">
          {project.title}
        </h2>

        <img
          src={project.image}
          alt={project.title}
          className="mb-4 h-auto w-full rounded-lg"
        />

        <div className="mt-6 flex flex-wrap gap-4">
          {project.technologies.map((Tech, index) => (
            <CardsStacks key={index} variant="primary">
              <Tech className="h-8 w-8 rounded-lg border border-gray-700 bg-gray-300/10 p-2 text-white" />
            </CardsStacks>
          ))}
        </div>
      </div>

      {/* Botões - NÃO recebem opacity do hover */}
      <div className="relative z-30 mt-8 flex gap-4">
        <Button variant="primary" href={project.liveUrl} target="_blank">
          <FaEarthAmericas className="h-8 w-8 rounded-lg border border-white/20 p-2 text-white" />

          <span className="pl-2">Ver Projeto</span>
        </Button>

        <Button variant="secondary" href={project.githubUrl} target="_blank">
          <SiGithub className="h-8 w-8 rounded-lg border border-gray-700 bg-black p-2 text-white" />

          <span className="pl-2">GitHub</span>
        </Button>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black px-8 pb-24 text-justify text-base leading-8 font-semibold text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
        <p className="text-white">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
