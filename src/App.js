import {NavBar} from "./components/NavBar";
import {CallToAction} from "./components/Header";
import {AboutMe} from "./components/AboutMe";
import {JobExperience} from "./components/JobExperience";
import {Footer} from "./components/Footer";
import "../src/styles/index.css";

function App() {
  return (
    <main className="app-content">
      <NavBar/>
        <CallToAction/>
        <AboutMe/>
         <JobExperience/>
        <Footer/>
    </main>
  );
}

export default App;
