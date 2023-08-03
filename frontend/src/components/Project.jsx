import "./css/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faChrome,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

function Project({ project }) {
  const social = {
    github: faGithub,
    twitter: faTwitter,
    chrome: faChrome,
    discord: faDiscord,
    site: faUpRightFromSquare,
  };

  return (
    <a href={project.lien} target="_blank" rel="noopener noreferrer">
      <article className="project">
        <div className="betProject">
          <ul className="upProject">
            <li>
              <FontAwesomeIcon icon={faFolder} className="folder" />
            </li>
            <li>
              <FontAwesomeIcon icon={social[project.icon]} className="links" />
            </li>
          </ul>

          <h2 className="titleProject">{project.title}</h2>
          <p className="descriptionProject">{project.description}</p>
        </div>
      </article>
    </a>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
