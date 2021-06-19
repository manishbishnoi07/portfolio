import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
