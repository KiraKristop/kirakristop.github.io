// Catalog of popular Steam games
const steamGames = [
    {
        id: "1091500",
        title: "Cyberpunk 2077",
        genre: ["rpg", "action"],
        genreNames: ["RPG", "Экшен", "Открытый мир"],
        price: "1999 ₽",
        isFree: false,
        rating: "92%",
        ratingText: "Очень положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        description: "Cyberpunk 2077 — приключенческая ролевая игра с открытым миром, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего.",
        developer: "CD PROJEKT RED",
        publisher: "CD PROJEKT RED",
        releaseDate: "10 дек. 2020",
        steamUrl: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
    },
    {
        id: "730",
        title: "Counter-Strike 2",
        genre: ["action", "multiplayer", "free"],
        genreNames: ["Шутер", "Мультиплеер", "Киберспорт"],
        price: "Бесплатно",
        isFree: true,
        rating: "88%",
        ratingText: "Очень положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        description: "Уже более 20 лет Counter-Strike предлагает элитное соревновательное окружение, на качество которого равняются миллионы игроков со всего мира. Теперь начинается следующая глава — Counter-Strike 2.",
        developer: "Valve",
        publisher: "Valve",
        releaseDate: "21 авг. 2012 / CS2: 2023",
        steamUrl: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    {
        id: "570",
        title: "Dota 2",
        genre: ["strategy", "multiplayer", "free"],
        genreNames: ["MOBA", "Стратегия", "Мультиплеер"],
        price: "Бесплатно",
        isFree: true,
        rating: "82%",
        ratingText: "Очень положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
        description: "Каждый день миллионы игроков по всему миру сражаются в игре Dota 2 от лица одного из более чем сотни героев. Dota невероятно многогранна и постоянно развивается.",
        developer: "Valve",
        publisher: "Valve",
        releaseDate: "9 июл. 2013",
        steamUrl: "https://store.steampowered.com/app/570/Dota_2/"
    },
    {
        id: "1245620",
        title: "ELDEN RING",
        genre: ["rpg", "action"],
        genreNames: ["Souls-like", "RPG", "Темное фэнтези"],
        price: "3999 ₽",
        isFree: false,
        rating: "93%",
        ratingText: "Очень положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
        description: "НОВЫЙ ФЭНТЕЗИЙНЫЙ ЭКШЕН-RPG. Восстань, Погасшая душа, и иди за благодатью, чтобы воззвать к силе Кольца Элден и стать Владыкой Элдена в Междуземье.",
        developer: "FromSoftware Inc.",
        publisher: "FromSoftware Inc. / Bandai Namco",
        releaseDate: "25 февр. 2022",
        steamUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/"
    },
    {
        id: "1086940",
        title: "Baldur's Gate 3",
        genre: ["rpg", "strategy", "multiplayer"],
        genreNames: ["RPG", "Пошаговая", "D&D"],
        price: "1999 ₽",
        isFree: false,
        rating: "96%",
        ratingText: "Крайне положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
        description: "Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история о дружбе и предательстве, выживании и самопожертвовании, о сладком зове абсолютной власти.",
        developer: "Larian Studios",
        publisher: "Larian Studios",
        releaseDate: "3 авг. 2023",
        steamUrl: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
    },
    {
        id: "271590",
        title: "Grand Theft Auto V",
        genre: ["action", "multiplayer"],
        genreNames: ["Экшен", "Открытый мир", "Мультиплеер"],
        price: "1499 ₽",
        isFree: false,
        rating: "86%",
        ratingText: "Очень положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        description: "Grand Theft Auto V для ПК позволяет игрокам исследовать завоевавший множество наград мир Лос-Сантоса и округа Блейн в разрешении до 4k и выше.",
        developer: "Rockstar North",
        publisher: "Rockstar Games",
        releaseDate: "14 апр. 2015",
        steamUrl: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
    },
    {
        id: "292030",
        title: "The Witcher 3: Wild Hunt",
        genre: ["rpg", "action"],
        genreNames: ["RPG", "Открытый мир", "Фэнтези"],
        price: "1199 ₽",
        isFree: false,
        rating: "97%",
        ratingText: "Крайне положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
        description: "Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, где кишат монстры и одолевают войны, чтобы найти Дитя Предназначения.",
        developer: "CD PROJEKT RED",
        publisher: "CD PROJEKT RED",
        releaseDate: "18 мая 2015",
        steamUrl: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
    },
    {
        id: "1172470",
        title: "Apex Legends",
        genre: ["action", "multiplayer", "free"],
        genreNames: ["Королевская битва", "Шутер", "Бесплатно"],
        price: "Бесплатно",
        isFree: true,
        rating: "79%",
        ratingText: "В основном положительные",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
        description: "Apex Legends — это бесплатный командный шутер в стиле «королевская битва», где персонажи с мощными способностями сражаются за славу и богатство.",
        developer: "Respawn Entertainment",
        publisher: "Electronic Arts",
        releaseDate: "5 нояб. 2020",
        steamUrl: "https://store.steampowered.com/app/1172470/Apex_Legends/"
    }
];

// State variables
let activeGenre = 'all';
let searchQuery = '';

// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filterContainer');

// Modal Elements
const gameModal = document.getElementById('gameModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalTags = document.getElementById('modalTags');
const modalDesc = document.getElementById('modalDesc');
const modalDeveloper = document.getElementById('modalDeveloper');
const modalPublisher = document.getElementById('modalPublisher');
const modalRelease = document.getElementById('modalRelease');
const modalRating = document.getElementById('modalRating');
const modalSteamLink = document.getElementById('modalSteamLink');
const heroDetailsBtn = document.getElementById('heroDetailsBtn');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    setupEventListeners();
});

// Render Games Grid
function renderGames() {
    const filteredGames = steamGames.filter(game => {
        const matchesGenre = activeGenre === 'all' || game.genre.includes(activeGenre);
        const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              game.genreNames.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesGenre && matchesSearch;
    });

    resultsCount.textContent = `Показано игр: ${filteredGames.length}`;

    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    gamesGrid.innerHTML = filteredGames.map(game => `
        <div class="game-card" data-id="${game.id}">
            <img class="card-banner" src="${game.image}" alt="${game.title}" loading="lazy">
            <div class="card-body">
                <h3 class="card-title">${game.title}</h3>
                <div class="card-tags">
                    ${game.genreNames.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                </div>
                <div class="card-footer">
                    <span class="game-rating"><i class="fa-solid fa-thumbs-up"></i> ${game.rating}</span>
                    <span class="game-price ${game.isFree ? 'free' : ''}">${game.price}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Attach click events to dynamic cards
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.getAttribute('data-id');
            const game = steamGames.find(g => g.id === gameId);
            if (game) openModal(game);
        });
    });
}

// Event Listeners setup
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderGames();
    });

    // Genre filter buttons
    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            activeGenre = e.target.getAttribute('data-genre');
            renderGames();
        }
    });

    // Close Modal
    modalCloseBtn.addEventListener('click', closeModal);
    gameModal.addEventListener('click', (e) => {
        if (e.target === gameModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Hero button details
    heroDetailsBtn.addEventListener('click', () => {
        const cyberpunk = steamGames.find(g => g.id === "1091500");
        if (cyberpunk) openModal(cyberpunk);
    });
}

// Open Modal with Game Details
function openModal(game) {
    modalImg.src = game.image;
    modalImg.alt = game.title;
    modalTitle.textContent = game.title;
    modalPrice.textContent = game.price;
    modalPrice.className = `price-badge ${game.isFree ? 'free' : ''}`;

    modalTags.innerHTML = game.genreNames.map(tag => `<span class="tag-badge">${tag}</span>`).join('');
    modalDesc.textContent = game.description;
    modalDeveloper.textContent = game.developer;
    modalPublisher.textContent = game.publisher;
    modalRelease.textContent = game.releaseDate;
    modalRating.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> ${game.rating} (${game.ratingText})`;
    modalSteamLink.href = game.steamUrl;

    gameModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    gameModal.classList.remove('active');
    document.body.style.overflow = '';
}
