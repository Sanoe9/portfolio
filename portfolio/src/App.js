import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Intro from './components/Intro/Intro.jsx';
import TechStack from './components/TechStack.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';

function App() {
  return (
    <div className="app">
      <Banner />
      <Intro />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
