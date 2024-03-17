import Navbar from './components/navbar/Navbar';
import Hero from './components/navbar/hero/Hero';

function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>Parrallax</section>
      <section>Services</section>
      <section id='Portfolio'>Portfolio</section>
      <section id='Cortfolio'>Contact</section>
    </div>
  );
}

export default App;
