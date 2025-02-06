import ProjectsCategories from "./ProjectsCategories";
import {
  dataProjectsSites,
  dataProjectsBotsDiscord,
  dataProjectsExtensionsChrome,
  dataProjectsBotsTwitter,
} from "../datas/dataProjects";

function Projects() {
  return (
    <section className="presentation">
      <h1 className="title" id="projectAncre">
        <span className="numberH1">02.</span> Projets
      </h1>
      <ProjectsCategories
        number="1"
        category="Bots Discord"
        dataProjects={dataProjectsBotsDiscord}
      />
      <ProjectsCategories
        number="2"
        category="Bots Twitter"
        dataProjects={dataProjectsBotsTwitter}
      />
      <ProjectsCategories
        number="3"
        category="Sites"
        dataProjects={dataProjectsSites}
      />
      <ProjectsCategories
        number="4"
        category="Extensions Chrome"
        dataProjects={dataProjectsExtensionsChrome}
      />
    </section>
  );
}

export default Projects;
