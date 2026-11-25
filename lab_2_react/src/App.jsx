import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Header name="Косаренко Едуард" group="КБ-405" />
      <main className="max-w-5xl mx-auto p-4 md:p-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <About />
          <Experience />
        </div>
        <div className="space-y-6">
          <Education />
          <Skills />
          <Contacts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
