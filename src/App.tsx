import Navbar from './components/navbar/Navbar';
import Hero from './components/navbar/hero/Hero';
import Parallax from './components/navbar/parallax/Parallax';

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
        <Parallax type='portfolio' />
      </section>
      <section id='Portfolio'>Portfolio</section>
      <section id='Cortfolio'>Contact</section>
    </div>
  );
}

export default App;
