import Project from './Project';

const projects = [
  {
    title: 'Сайт-резюме',
    date: '2026, навчальний проєкт',
    tasks: [
      'зробив розмітку на HTML із семантичними тегами',
      'оформив сторінку за допомогою CSS',
      'додав інтерактивність на JavaScript',
    ],
  },
  {
    title: 'Резюме на React',
    date: '2026, навчальний проєкт',
    tasks: [
      'розбив сторінку на компоненти',
      'налаштував збірку через Vite',
      'стилізував компоненти через Tailwind CSS',
    ],
  },
  {
    title: 'Сервер на Node.js',
    date: '2026, навчальний проєкт',
    tasks: [
      'роздача статичного сайту через hapi',
      "прийом і перевірка даних форми зворотного зв'язку",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-serif font-bold mb-3">Досвід</h2>
      <div className="space-y-4">
        {projects.map((p) => (
          <Project key={p.title} title={p.title} date={p.date} tasks={p.tasks} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
