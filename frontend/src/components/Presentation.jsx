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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
          tincidunt nisl nisl vel nisl. Sed euismod, nisl nec ultricies lacinia,
          nisl nisl aliquet nisl, nec tincidunt nisl nisl vel nisl. Sed euismod,
          nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec tincidunt nisl
          nisl vel nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl
        </p>
        <div className="overlay">
          <img src={pp} alt="pp" className="pp" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
