import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import VisionMission from "./sections/VisionMission.jsx";
import Members from "./sections/Members.jsx";
import Projects from "./sections/Projects.jsx";
import Services from "./sections/Services.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink font-sans text-cream">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <Members />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
