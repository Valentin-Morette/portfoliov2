import PropTypes from "prop-types";
import Project from "./Project";

function ProjectsCategories({ number, category, dataProjects }) {
  return (
    <>
      <h2 className="subtitle">
        <span className="numberH2">02.{number}</span> {category}
      </h2>
      <div className="projects">
        {dataProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

ProjectsCategories.propTypes = {
  number: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dataProjects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      lien: PropTypes.string.isRequired,
      deploy: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ProjectsCategories;
