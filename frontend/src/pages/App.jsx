import "../App.css";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Social from "../components/Social";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

function App() {
  return (
    <div className="App">
      <Social />
      <Navbar />
      <Presentation />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
