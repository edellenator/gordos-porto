import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { act } from 'react-dom/test-utils';

function App() { 
  const navItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  const [activeNavItem, setActiveNavItem] = useState(navItems[0])

  const main = (activeNavItem) => {
    if (activeNavItem === 'About Me') {
      return <AboutMe />
    }
    if (activeNavItem === 'Portfolio') {
      return <Portfolio />
    }
    if (activeNavItem === 'Contact') {
      return <Contact />
    }
    if (activeNavItem === 'Resume') {
      return <Resume />
    }
  }
  return (
    <div>
      <header>
        <Header 
          navItems={navItems}
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      </header>
      <main>
          {main(activeNavItem)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
