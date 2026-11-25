// 1. інформація про ОС та браузер
function saveSystemInfo() {
  localStorage.setItem('userAgent', navigator.userAgent);
  localStorage.setItem('platform', navigator.platform);
  localStorage.setItem('vendor', navigator.vendor);
  localStorage.setItem('language', navigator.language);
  localStorage.setItem('languages', navigator.languages.join(', '));
  localStorage.setItem('cpuCores', navigator.hardwareConcurrency);
  localStorage.setItem('cookieEnabled', navigator.cookieEnabled);
  localStorage.setItem('online', navigator.onLine);
  localStorage.setItem('screen', screen.width + 'x' + screen.height);
  localStorage.setItem('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
}

function showSystemInfo() {
  const list = document.getElementById('system-info');

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    li.textContent = key + ': ' + localStorage.getItem(key);
    list.append(li);
  }
}

// 2. коментарі роботодавців
const VARIANT = 11;

async function loadComments() {
  const box = document.getElementById('comments');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + VARIANT + '/comments');
    if (!response.ok) {
      throw new Error('статус ' + response.status);
    }
    const comments = await response.json();

    box.textContent = '';
    for (const comment of comments) {
      const article = document.createElement('article');
      article.className = 'comment';

      const title = document.createElement('h3');
      title.textContent = comment.name;

      const email = document.createElement('p');
      email.className = 'date';
      email.textContent = comment.email;

      const text = document.createElement('p');
      text.textContent = comment.body;

      article.append(title, email, text);
      box.append(article);
    }
  } catch (error) {
    console.error(error);
    box.textContent = 'Не вдалося завантажити коментарі';
  }
}

// 3. форма зворотного зв'язку через 1 хвилину
const modal = document.getElementById('modal');

setTimeout(function () {
  modal.showModal();
}, 60000);

document.getElementById('close-modal').addEventListener('click', function () {
  modal.close();
});

// 4. денна / нічна тема
const themeButton = document.getElementById('theme-button');

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    themeButton.textContent = 'Денна тема';
  } else {
    document.body.classList.remove('dark');
    themeButton.textContent = 'Нічна тема';
  }
}

function getThemeByTime() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

let autoTheme = getThemeByTime();
setTheme(autoTheme);

// раз на хвилину перевіряємо, чи не настав день/ніч
setInterval(function () {
  const newTheme = getThemeByTime();
  if (newTheme !== autoTheme) {
    autoTheme = newTheme;
    setTheme(newTheme);
  }
}, 60000);

themeButton.addEventListener('click', function () {
  setTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});

saveSystemInfo();
showSystemInfo();
loadComments();
