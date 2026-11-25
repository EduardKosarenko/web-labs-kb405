import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header name="Косаренко Едуард" group="КБ-405" />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
