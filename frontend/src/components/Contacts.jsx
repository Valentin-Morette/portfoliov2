import "./css/Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <section className="presentation">
      <h1 className="title" id="contactsAncre">
        <span className="numberH1">03.</span> Contactes
      </h1>
      <p className="infoContact">
        Bien que je ne recherche pas de nouvelles opportunités actuellement, ma
        boîte mail est toujours ouverte.
        <br />
        <br />
        Que vous ayez une question ou que vous souhaitiez simplement dire
        bonjour, je ferai de mon mieux pour vous répondre !
        <br />
        <br />
        Vous pouvez également me retrouver sur les réseaux sociaux, comme
        Linkedin ou Twitter.
      </p>
      <div className="centerButton">
        <a href="mailto:morette.valentin@gmail.com">
          <button type="button" className="buttonContact">
            Contactez-moi
          </button>
        </a>
      </div>
      <div className="reseau">
        <ul className="reseau-list">
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
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
