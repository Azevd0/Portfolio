document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const moonImg = "imagem/icons8-moon-30.png";
    const sunImg = "imagem/icons8-sun-30.png";

    // Aplica o tema salvo ao carregar a página
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.src = sunImg;
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.src = sunImg;
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.src = moonImg;
            localStorage.setItem('theme', 'dark');
        }
    });
});