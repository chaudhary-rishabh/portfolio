import './App.css';
import { Banner } from './Components/Banner';
import { Contact } from './Components/Contact';
import {NavBar} from './Components/NavBar'
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
function App() {
  return (
    <div>
      <NavBar />
      <Banner />  
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
