import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/About Us";
import Releases from "./components/Releases";
import Gigs from "./components/Gigs";
import Projects from "./components/Project";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Releases />
      <Gigs />
      <Projects />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
