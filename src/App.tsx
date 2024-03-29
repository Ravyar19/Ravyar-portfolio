import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/Services';

function App() {
  return (
    <div>
      <Cursor />

      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Cortfolio'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
