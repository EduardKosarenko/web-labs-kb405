import { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);
    localStorage.setItem('language', navigator.language);
    localStorage.setItem('screen', screen.width + 'x' + screen.height);

    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items.push({ key: key, value: localStorage.getItem(key) });
    }
    setInfo(items);
  }, []);

  return (
    <footer className="bg-emerald-900 dark:bg-emerald-950 text-emerald-200 text-sm text-center p-6 mt-6">
      <p>&copy; 2026 Косаренко Едуард</p>
      <h3 className="mt-4 mb-2 font-semibold text-white">Дані з localStorage</h3>
      <ul className="max-w-3xl mx-auto text-left wrap-anywhere">
        {info.map((item) => (
          <li key={item.key}>
            {item.key}: {item.value}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
