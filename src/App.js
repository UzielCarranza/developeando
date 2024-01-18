import {NavBar} from "./components/NavBar";
import {CallToAction} from "./components/Header";
import {AboutMe} from "./components/AboutMe";
import {JobExperience} from "./components/JobExperience";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <CallToAction/>
        <AboutMe/>
      <JobExperience/>
    </div>
  );
}

export default App;
