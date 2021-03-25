import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <div className = "home">
        <div className = "home-content">
          < Navbar />
          <Banner />
        </div>
      </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
