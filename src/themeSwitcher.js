const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

body.classList.add(Theme.LIGHT);

const onThemeChange = () => {
    if (themeSwitcher.checked) {
        editClass(Theme.DARK, Theme.LIGHT);
    } else {
        editClass(Theme.LIGHT, Theme.DARK);
    }
}

const editClass = (addClass, removeClass) => {
    body.classList.add(addClass);
        body.classList.remove(removeClass);
        localStorage.setItem('theme', addClass);}

const currentTheme = () => {
    if (localStorage.getItem('theme') === Theme.DARK) {
        body.classList.add(Theme.DARK);
        themeSwitcher.checked = true;
    }
}

currentTheme();
themeSwitcher.addEventListener('change', onThemeChange);



