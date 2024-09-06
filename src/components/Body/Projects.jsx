import { useState } from "react";
import ProjectTemplate from "../Utils/ProjectTemplate";
import ProjectsData from "../../Configs/ProjectsData";

function Projects() {
  const [showProject, setShowProject] = useState(0);

  const handleShowProject = (index) => {
    setShowProject(showProject === index ? showProject : index);
  };
  return (
    <div
      id="projects"
      className="lg-h-screen relative flex flex-col items-center justify-center gap-5 py-5 text-black transition-colors duration-500 dark:bg-black dark:text-white"
    >
      <h2 className="font-[Gilroy-Dark] text-3xl uppercase text-blue-500">
        projects
      </h2>
      {ProjectsData && ProjectsData.length > 0 ? (
        ProjectsData.map((project, index) => (
          <ProjectTemplate
            key={project.index}
            title={project.title}
            img={project.img}
            description={project.description}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
            isExpand={showProject === index}
            onToggle={() => handleShowProject(index)}
          />
        ))
      ) : (
        <div>Dropping Very SOON!</div>
      )}
    </div>
  );
}

export default Projects;
