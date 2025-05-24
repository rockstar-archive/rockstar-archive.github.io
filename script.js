const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Store user preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
});

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {

    body.classList.add(currentTheme);

}