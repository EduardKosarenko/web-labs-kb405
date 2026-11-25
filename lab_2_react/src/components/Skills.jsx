const skills = ['HTML, CSS', 'JavaScript', 'React, Vite, Tailwind CSS', 'Node.js', 'Git, GitHub'];

function Skills() {
  return (
    <section id="skills">
      <h2>Навички</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
