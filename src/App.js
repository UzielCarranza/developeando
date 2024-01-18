import {NavBar} from "./components/NavBar";
import {CallToAction} from "./components/Header";
import {AboutMe} from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <CallToAction/>
        <AboutMe/>
    </div>
  );
}

export default App;
