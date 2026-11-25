function Contacts() {
  return (
    <section id="contacts" className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-serif font-bold mb-3">Контакти</h2>
      <p>
        GitHub:{' '}
        <a
          href="https://github.com/EduardKosarenko"
          target="_blank"
          rel="noopener"
          className="text-emerald-700 dark:text-emerald-400 underline hover:text-emerald-900"
        >
          EduardKosarenko
        </a>
      </p>
    </section>
  );
}

export default Contacts;
