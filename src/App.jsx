import Navbar from "./Components/Header";
// import { DarkModeProvider } from "./Components/DarkModeContext";
import Hero from "./Components/Hero";
import ResumeSection from "./Components/Resume";
import SkillsSection from "./Components/Skill";
import ProjectsSection from "./Components/Project";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
// import TestimonialsSection from "./Components/Testimonial";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    {/* <DarkModeProvider>
       <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500"> */}
        <Navbar />
        <Hero/>
        <ResumeSection/>
        <SkillsSection/>
        <ProjectsSection/> 
        <Blog/>
        {/* <TestimonialsSection/> */}
        <Contact/>
        <Footer/>
  
      {/* </div>
    </DarkModeProvider> */}
    </>
  );
}

export default App;
