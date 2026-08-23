// Список заголовков для смены
const titles = [
    "KiraKris|KrisFox✨ Официальный сайт",
    "💜 Добро пожаловать!",
    "🎮 Разработчик & Геймер",
    "✨ Загляни в проекты!"
];

let titleIndex = 0;

// Интервал смены: 60000 мс = 1 минута (или 120000 мс для 2 минут)
setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length;
    document.title = titles[titleIndex];
}, 60000);