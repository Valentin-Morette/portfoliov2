import "./css/Presentation.css";
import pp from "../assets/img/pp.png";

function Presentation() {
  return (
    <section className="presentation">
      <h1 className="title">
        <span className="numberH1">01.</span> Présentation
      </h1>
      <div className="textImg">
        <p className="test">
          Bonjour, je m'appelle Valentin Morette,
          <br />
          Je suis développeur web fullstack.
          <br />
          <br />
          J'ai fais une formation de développeur web et web mobile à la Wild
          Code School.
          <br />
          <br />
          Lors de cette formation j'ai appris les bases de la programmation et
          j'ai ensuite fais un stage de 6 mois chez Inter-Actif, un Apple
          Premium Reseller.
          <br />
          <br />
          Suite à ce stage j'ai été embauché en tant que développeur web
          fullstack, je suis en charge du developpement de l'API qui alimente
          l'ensemble des projets de l'entreprise.
        </p>
        <div className="overlay">
          <img src={pp} alt="pp" className="pp" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
