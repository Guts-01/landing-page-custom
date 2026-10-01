const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const themeLabel = themeToggle.querySelector('.theme-label');
const themeColor = document.querySelector('meta[name="theme-color"]');
const colorPreference = window.matchMedia('(prefers-color-scheme: dark)');
const storageKey = 'lume-theme';

function readSavedTheme() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
    // O botão continua funcionando quando o armazenamento está indisponível.
  }
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  themeIcon.textContent = isDark ? '☀' : '☾';
  themeLabel.textContent = isDark ? 'Tema claro' : 'Tema escuro';
  themeColor.content = isDark ? '#171615' : '#fffaf4';
}

const savedTheme = readSavedTheme();
const systemTheme = colorPreference.matches ? 'dark' : 'light';
applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : systemTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  saveTheme(nextTheme);
});

colorPreference.addEventListener('change', (event) => {
  if (!readSavedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const fields = new FormData(form);
  const name = String(fields.get('name')).trim();
  const email = String(fields.get('email')).trim();
  const message = String(fields.get('message')).trim();
  const subject = encodeURIComponent('Contato pelo site Lume');
  const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`);

  window.location.href = `mailto:${form.dataset.contactEmail}?subject=${subject}&body=${body}`;
});
