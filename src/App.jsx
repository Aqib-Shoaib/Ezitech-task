import ContactBlock from "./Homepage/ContactBlock";
import Hero from "./Homepage/Hero";
import "./App.css";
import Placeholder from "./Homepage/Placeholder";
import SkillBox from "./Homepage/SkillBox";
import Courses from "./Homepage/Courses";
import Internships from "./Homepage/Internships";
import Ad from "./Homepage/Ad";
import Footer from "./Homepage/Footer";

function App() {
  return (
    <>
      <div className="app-hero">
        <ContactBlock />
        <Hero />
      </div>
      <Placeholder />
      <SkillBox />
      <Courses />
      <Internships />
      <Ad />
      <Footer />
    </>
  );
}

export default App;
