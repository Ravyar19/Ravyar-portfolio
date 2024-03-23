import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';

function App() {
  return (
    <div>
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
      <section id='Portfolio'>Portfolio</section>
      <section id='Cortfolio'>Contact</section>
    </div>
  );
}

export default App;
