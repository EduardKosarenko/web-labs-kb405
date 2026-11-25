function Project({ title, date, tasks }) {
  return (
    <article className="p-4 rounded-lg border-2 border-stone-200 dark:border-stone-600 hover:border-emerald-600 hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">{date}</p>
      <ul className="list-disc pl-5 space-y-1">
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </article>
  );
}

export default Project;
