import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  // тема залежно від часу
  useEffect(() => {
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
  }, []);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-200">
        <Header name="Косаренко Едуард" group="КБ-405" theme={theme} onToggleTheme={toggleTheme} />
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
          <Reviews />
        </main>
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
