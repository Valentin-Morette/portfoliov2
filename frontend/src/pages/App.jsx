import "../App.css";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Social from "../components/Social";

function App() {
  return (
    <div className="App">
      <Social />
      <Navbar />
      <Presentation />
    </div>
  );
}

export default App;
