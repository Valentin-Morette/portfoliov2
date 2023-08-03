import Project from "./Project";
import { dataProjects } from "../datas/dataProjects";

function Projects() {
  return (
    <section className="presentation">
      <h1 className="title" id="projectAncre">
        <span className="numberH1">02.</span> Projets
      </h1>
      <div className="projects">
        {dataProjects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
