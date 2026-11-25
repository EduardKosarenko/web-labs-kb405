const links = [
  { href: '#about', text: 'Про мене' },
  { href: '#experience', text: 'Досвід' },
  { href: '#education', text: 'Освіта' },
  { href: '#skills', text: 'Навички' },
  { href: '#contacts', text: 'Контакти' },
];

function Header({ name, group }) {
  return (
    <header className="bg-emerald-900 text-white px-6 py-10 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-serif font-bold tracking-wide">{name}</h1>
          <p className="mt-1 text-lg text-emerald-200">Студент групи {group}</p>
        </div>
        <nav>
          <ul className="flex flex-wrap gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3 py-1 rounded-full border border-emerald-600 hover:bg-emerald-700 focus:bg-emerald-700 transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
