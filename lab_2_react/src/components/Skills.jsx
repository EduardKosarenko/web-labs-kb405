const skills = ['HTML, CSS', 'JavaScript', 'React, Vite, Tailwind CSS', 'Node.js', 'Git, GitHub'];

function Skills() {
  return (
    <section id="skills" className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-serif font-bold mb-3">Навички</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-900 hover:scale-105 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
