const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

body.classList.add(Theme.LIGHT);

const onThemeChange = () => {
    if (themeSwitcher.checked === true) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

const currentTheme = () => {
    if (localStorage.getItem('theme') === Theme.DARK) {
        body.classList.add(Theme.DARK);
        themeSwitcher.checked = true;
    }
}

currentTheme();
themeSwitcher.addEventListener('change', onThemeChange);



