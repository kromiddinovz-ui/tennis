
const themeBtn = document.querySelector('#theme-toggle');

themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');

    if (isDark) {
    
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#f1f1f1';
        themeBtn.textContent = '☀️ Light Mode';
    } else {
    
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#111111';
        themeBtn.textContent = '🌙 Dark Mode';
    }
});

//2 
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent === '🤍') {
            btn.textContent = '❤️';
        } else {
            btn.textContent = '🤍';
        }
    });
});

//3
const serachInp = document.querySelector('.searchInput');
const cards = document.querySelectorAll('.sastab--card');

serachInp.addEventListener('input', () => {
    const searchTerm = serachInp.value.toLowerCase();
    cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

