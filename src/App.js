import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
