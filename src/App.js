import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/Portfolio/About";

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skill />
      <About/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
