import {NavBar} from "./components/NavBar";
import {CallToAction} from "./components/Header";
import {AboutMe} from "./components/AboutMe";
import {JobExperience} from "./components/JobExperience";
import {Projects} from "./components/Projects";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <CallToAction/>
        <AboutMe/>
         <JobExperience/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
