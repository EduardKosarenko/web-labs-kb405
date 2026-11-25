function Project({ title, date, tasks }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{date}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </article>
  );
}

export default Project;
