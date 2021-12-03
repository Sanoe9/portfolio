import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.jsx';
import Intro from './components/Intro.jsx';
import TechStack from './components/TechStack.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div className="App">
      <Banner />
      <Intro />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;