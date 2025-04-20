const toggleBtn = document.getElementById('darkModeToggle');
    const body = document.body;
    const logo = document.getElementById('logo');

    const setDarkMode = () => {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
        logo.src = 'assets/images/logo/logo2-white.png';
        localStorage.setItem('mode', 'dark');
    };

    const setLightMode = () => {
        body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙';
        logo.src = 'assets/images/logo/logo2-resized.png';
        localStorage.setItem('mode', 'light');
    };

    if (localStorage.getItem('mode') === 'dark') {
        setDarkMode();
    }

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            setLightMode();
        } else {
            setDarkMode();
        }
    });