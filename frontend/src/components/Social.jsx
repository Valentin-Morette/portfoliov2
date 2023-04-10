import "./css/Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <div className="social">
      <ul className="social-list">
        <li>
          <a
            href="https://www.linkedin.com/in/valentinmorette/"
            target="_blanck"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Valentin-Morette" target="_blanck">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/VM__Dev" target="_blanck">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </li>
        <li className="verticalLine" />
      </ul>
    </div>
  );
}

export default Social;
