import "./css/Presentation.css";
import pp from "../assets/img/pp.png";

function Presentation() {
  return (
    <section className="presentation">
      <h1 className="title" id="presentationAncre">
        <span className="numberH1">01.</span> Présentation
      </h1>
      <div className="textImg">
        <p>
          Salut ! Je m'appelle Valentin Morette et je suis développeur web
          back-end. J'ai commencé mon parcours à la Wild Code School, où j'ai
          suivi une formation en développement web et mobile. C'est là que j'ai
          acquis les bases du métier, en apprenant React, et en travaillant sur
          des projets concrets.
          <br />
          <br />
          Après ma formation, j'ai travaillé pendant un an et demi chez
          Inter-Actif, un revendeur Apple Premium Reseller. Pendant cette
          période, j'ai eu l'occasion de travailler sur des projets variés,
          notamment en développement d'API et en gestion de bases de données.
          <br />
          <br />
          Aujourd'hui, je suis chez Ikoula, un hébergeur web, où je gère le
          tunnel de vente du site marchand. Mon rôle est de m'assurer que tout
          fonctionne bien pour les utilisateurs, tout en améliorant et
          maintenant les systèmes en place.
        </p>

        <div className="overlay">
          <img src={pp} alt="pp" className="pp" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
