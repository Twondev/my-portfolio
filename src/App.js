import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />

      {/* Custom styles to prevent component overlap on smaller devices */}
      <style jsx>{`
        @media (max-width: 768px) {
          .App {
            padding-top: 80px; /* Adjust top padding to avoid overlap with Navbar */
            padding-bottom: 80px; /* Adjust bottom padding to avoid overlap with SocialLinks */
          }
        }
      `}</style>
    </div>
  );
}

export default App;
