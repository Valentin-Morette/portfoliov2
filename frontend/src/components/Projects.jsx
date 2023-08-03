import ProjectsCategories from "./ProjectsCategories";
import {
  dataProjectsSites,
  dataProjectsBotsDiscord,
  dataProjectsExtensionsChrome,
} from "../datas/dataProjects";

function Projects() {
  return (
    <section className="presentation">
      <h1 className="title" id="projectAncre">
        <span className="numberH1">02.</span> Projets
      </h1>
      <ProjectsCategories
        number="1"
        category="Sites"
        dataProjects={dataProjectsSites}
      />
      <ProjectsCategories
        number="2"
        category="Bots Discord"
        dataProjects={dataProjectsBotsDiscord}
      />
      <ProjectsCategories
        number="3"
        category="Extensions Chrome"
        dataProjects={dataProjectsExtensionsChrome}
      />
    </section>
  );
}

export default Projects;
