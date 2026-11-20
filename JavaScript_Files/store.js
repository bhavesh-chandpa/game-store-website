/*
 * Games Store shared catalogue and storefront behaviour.
 * Cart and wishlist data are demo-only browser LocalStorage data.
 */
(() => {
    "use strict";

    const image = (file) => `../Images/${file}`;
    const makeGame = (id, title, genre, platform, price, cover, description, screenshots = [], originalPrice = null) => ({
        id, title, genre, platform, price, cover: image(cover), description,
        screenshots: screenshots.map(image), originalPrice
    });

    const GAMES = [
        // Browse catalogue
        makeGame("god-of-war-ragnarok", "God of War: Ragnarok", "Adventure", "PC, PlayStation", 59.99, "adv1.png", "Embark on a mythic journey with Kratos and Atreus as they face a world-changing prophecy across the Nine Realms.", ["s5.jpg", "st5.jpg"]),
        makeGame("the-witcher-3", "The Witcher 3: Wild Hunt", "Adventure RPG", "PC, PlayStation, Xbox, Nintendo Switch", 39.99, "adv2.png", "Take the role of Geralt of Rivia in a vast fantasy adventure filled with monsters, choices and memorable characters."),
        makeGame("baldurs-gate-3", "Baldur's Gate III", "Role-playing", "PC, PlayStation, Xbox", 59.99, "adv3.png", "Gather your party and shape an expansive fantasy adventure through choices, tactical battles and character-driven storytelling."),
        makeGame("assassins-creed-valhalla", "Assassin's Creed: Valhalla", "Action Adventure", "PC, PlayStation, Xbox", 14.99, "adv4.png", "Lead a Viking clan on a journey to build a new home in medieval England through exploration, alliances and combat."),
        makeGame("until-dawn", "Until Dawn", "Horror Adventure", "PC, PlayStation", 59.99, "adv5.png", "A group of friends return to a remote mountain lodge, where every decision can change who survives the night."),
        makeGame("dying-light-2", "Dying Light 2: Stay Human", "Action, Survival", "PC, PlayStation, Xbox", 59.99, "act1.png", "Explore a dangerous city shaped by infection, parkour and difficult choices in this open-world action adventure."),
        makeGame("elden-ring", "Elden Ring", "Action RPG", "PC, PlayStation, Xbox", 59.99, "act2.png", "Explore the Lands Between, discover hidden paths and face challenging foes in a dark fantasy action role-playing adventure.", ["s1.png"]),
        makeGame("dishonored", "Dishonored", "Stealth Action", "PC, PlayStation, Xbox", 9.99, "act3.png", "Use supernatural abilities, stealth and creative tactics to navigate a city gripped by corruption and conspiracy."),
        makeGame("palworld", "Palworld", "Action, Survival", "PC, Xbox", 29.99, "act4.png", "Collect mysterious creatures, build a base and explore a colourful open world that mixes survival, crafting and adventure."),
        makeGame("death-stranding", "Death Stranding", "Action Adventure", "PC, PlayStation", 39.99, "act5.png", "Cross a fractured landscape as Sam Porter Bridges in a distinctive journey about connection and rebuilding society."),
        makeGame("subnautica", "Subnautica", "Survival", "PC, PlayStation, Xbox, Nintendo Switch", 29.99, "srv1.png", "Dive into an alien ocean, gather resources and uncover the secrets of a mysterious underwater world."),
        makeGame("sons-of-the-forest", "Sons of the Forest", "Horror Survival", "PC", 29.99, "srv2.jpg", "Search for a missing billionaire on a remote island while crafting, building and surviving its hostile inhabitants."),
        makeGame("frostpunk-2", "Frostpunk 2", "Strategy, Survival", "PC, PlayStation, Xbox", 44.99, "srv3.png", "Lead a city through an unforgiving frozen world, balancing resources, political factions and the needs of its people."),
        makeGame("once-human", "Once Human", "Survival, Shooter", "PC, Mobile", 0, "srv4.jpg", "Explore a strange post-apocalyptic world, gather resources and confront supernatural threats in a free-to-play survival experience."),
        makeGame("rust", "Rust", "Multiplayer Survival", "PC, PlayStation, Xbox", 39.99, "srv5.jpg", "Survive in a harsh multiplayer world by gathering materials, crafting equipment and building a base.", ["nws5.jpg"]),
        makeGame("call-of-duty-black-ops-6", "Call of Duty: Black Ops 6", "Shooter", "PC, PlayStation, Xbox", 69.99, "ftr2.jpg", "Enter a cinematic action experience with a campaign, competitive multiplayer and round-based cooperative modes.", ["nws4.jpg"]),
        makeGame("battlefield-2042", "Battlefield 2042", "Shooter", "PC, PlayStation, Xbox", 39.99, "str2.png", "Fight across large-scale near-future battlefields using classes, vehicles and a wide range of weapons."),
        makeGame("halo-infinite", "Halo Infinite", "Shooter", "PC, Xbox", 0, "str3.png", "Join the Master Chief in a science-fiction shooter featuring a story campaign and free-to-play multiplayer."),
        makeGame("rainbow-six-extraction", "Tom Clancy's Rainbow Six Extraction", "Co-op Shooter", "PC, PlayStation, Xbox", 9.99, "str4.png", "Team up in tactical cooperative missions against an evolving alien threat."),
        makeGame("star-wars-battlefront-2", "Star Wars: Battlefront II", "Shooter", "PC, PlayStation, Xbox", 39.99, "str5.png", "Take part in large-scale battles across the Star Wars universe with heroes, troopers, starfighters and vehicles."),

        // Home page featured and top-pick games
        makeGame("sea-of-thieves", "Sea of Thieves", "Adventure, Multiplayer", "PC, Xbox, PlayStation", 39.99, "ftr3.jpg", "Sail with a crew, search for treasure and create your own pirate stories across a shared open world."),
        makeGame("cyberpunk-2077", "Cyberpunk 2077", "Action RPG", "PC, PlayStation, Xbox", 59.99, "ftr4.jpg", "Explore Night City as a mercenary in a story-driven open-world role-playing game full of choices and technology."),
        makeGame("destiny-2-final-shape", "Destiny 2: The Final Shape", "Action, Shooter", "PC, PlayStation, Xbox", 49.99, "ftr5.jpg", "Join a science-fiction action world of cooperative missions, competitive activities and space-fantasy adventures."),
        makeGame("the-last-of-us-part-2", "The Last of Us Part II", "Action Adventure", "PC, PlayStation", 49.99, "tp1.png", "Follow a character-driven survival story through a dangerous world shaped by loss, conflict and difficult choices."),
        makeGame("uncharted-4", "Uncharted 4: A Thief's End", "Adventure", "PC, PlayStation", 64.99, "tp2.png", "Join Nathan Drake on a globe-spanning adventure involving lost treasure, puzzles and cinematic action."),
        makeGame("resident-evil-4", "Resident Evil 4", "Survival Horror", "PC, PlayStation, Xbox", 39.99, "tp3.png", "Experience a survival horror mission in a remote European village filled with danger and unsettling mysteries."),
        makeGame("zelda-tears-of-the-kingdom", "The Legend of Zelda: Tears of the Kingdom", "Adventure", "Nintendo Switch", 59.99, "tp4.png", "Explore a vast fantasy kingdom, solve environmental puzzles and discover new ways to travel and build."),
        makeGame("alan-wake-2", "Alan Wake II", "Survival Horror", "PC, PlayStation, Xbox", 69.99, "tp5.png", "Unravel a supernatural mystery through a tense psychological survival horror experience."),

        // Offers page games
        makeGame("sekiro", "Sekiro: Shadows Die Twice", "Action Adventure", "PC, PlayStation, Xbox", 8.99, "dis1.png", "Take the role of a shinobi in a challenging action adventure set in a reimagined late-1500s Japan.", [], 29.99),
        makeGame("robocop-rogue-city", "RoboCop: Rogue City", "Action Shooter", "PC, PlayStation, Xbox", 5.99, "dis2.jpg", "Bring justice to the streets as RoboCop in a first-person action adventure inspired by the film universe.", [], 29.99),
        makeGame("far-cry-5", "Far Cry 5", "Open-world Shooter", "PC, PlayStation, Xbox", 5.99, "dis3.png", "Resist a fanatical cult and explore the open-world landscapes of Hope County, Montana.", [], 29.99),
        makeGame("forza-horizon-5", "Forza Horizon 5", "Racing", "PC, Xbox, PlayStation", 29.99, "dis4.png", "Drive a large collection of cars through a vibrant open-world interpretation of Mexico.", [], 59.99),
        makeGame("gta-v", "GTA V", "Action, Open World", "PC, PlayStation, Xbox", 12.99, "dis5.png", "Grand Theft Auto V: Explore Los Santos through the intersecting stories of three criminals in an open-world action game.", [], 25.99),
        makeGame("fortnite", "Fortnite", "Battle Royale", "PC, PlayStation, Xbox, Nintendo Switch, Mobile", 0, "fg1.png", "Drop into a changing battle royale island, build, compete and play a range of community experiences."),
        makeGame("valorant", "Valorant", "Tactical Shooter", "PC", 0, "fg2.png", "Compete in a tactical team-based shooter where precise gunplay meets agents with distinct abilities."),
        makeGame("genshin-impact", "Genshin Impact", "Open-world RPG", "PC, PlayStation, Mobile", 0, "fg3.jpg", "Explore the fantasy world of Teyvat, meet companions and uncover elemental mysteries in a free-to-play adventure."),
        makeGame("dark-and-darker", "Dark and Darker", "Fantasy Extraction", "PC", 0, "fg4.png", "Enter dangerous dungeons, collect treasure and try to escape with your loot in a fantasy extraction adventure."),
        makeGame("destiny-2", "Destiny 2", "Action, Shooter", "PC, PlayStation, Xbox", 0, "fg5.png", "Become a Guardian in a shared science-fiction action world featuring missions, raids and competitive modes."),

        // Games represented in the homepage's rotating feature banner
        makeGame("black-myth-wukong", "Black Myth: Wukong", "Action RPG", "PC, PlayStation", 59.99, "s2.jpeg", "Take the role of the Destined One in an action role-playing adventure inspired by the legend of the Monkey King."),
        makeGame("hogwarts-legacy", "Hogwarts Legacy", "Action RPG", "PC, PlayStation, Xbox, Nintendo Switch", 59.99, "s3.jpg", "Experience life as a student at Hogwarts in an open-world wizarding adventure set in the 1800s.", ["st3.jpeg"]),
        makeGame("ark-survival-ascended", "ARK: Survival Ascended", "Survival Adventure", "PC, PlayStation, Xbox", 44.99, "s4.jpg", "Survive and build in a prehistoric world filled with creatures to discover, tame and ride."),
    ];

    const byId = new Map(GAMES.map((game) => [game.id, game]));
    const CART_KEY = "games-store-cart-v1";
    const WISHLIST_KEY = "games-store-wishlist-v1";

    function readStorage(key, fallback) {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            return value ?? fallback;
        } catch (error) {
            return fallback;
        }
    }

    function writeStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn("Could not save Games Store data in this browser.", error);
        }
    }

    function getCart() {
        const cart = readStorage(CART_KEY, []);
        return Array.isArray(cart) ? cart.filter((item) => byId.has(item.id)).map((item) => ({ id: item.id, qty: Math.max(1, Number(item.qty) || 1) })) : [];
    }

    function getWishlist() {
        const list = readStorage(WISHLIST_KEY, []);
        return Array.isArray(list) ? [...new Set(list.filter((id) => byId.has(id)))] : [];
    }

    function money(value) {
        return value === 0 ? "Free" : `$${Number(value).toFixed(2)}`;
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
    }

    function detailUrl(id) {
        return `game-details.html?id=${encodeURIComponent(id)}`;
    }

    function addToCart(id) {
        const cart = getCart();
        const existing = cart.find((item) => item.id === id);
        if (existing) existing.qty += 1;
        else cart.push({ id, qty: 1 });
        writeStorage(CART_KEY, cart);
        updateHeaderLinks();
        return cart;
    }

    function toggleWishlist(id) {
        const list = getWishlist();
        const index = list.indexOf(id);
        if (index >= 0) list.splice(index, 1);
        else list.push(id);
        writeStorage(WISHLIST_KEY, list);
        updateHeaderLinks();
        return list.includes(id);
    }

    function updateHeaderLinks() {
        const top = document.querySelector(".topdiv");
        if (!top) return;
        let links = top.querySelector(".store-links");
        if (!links) {
            links = document.createElement("div");
            links.className = "store-links";
            links.innerHTML = `
                <a href="cart.html" class="store-link" aria-label="Shopping cart">Cart <span class="store-count cart-count">0</span></a>
                <a href="wishlist.html" class="store-link" aria-label="Wishlist">Wishlist <span class="store-count wishlist-count">0</span></a>`;
            const loginLinks = top.querySelector(".logsigdiv");
            if (loginLinks) top.insertBefore(links, loginLinks);
            else top.appendChild(links);
        }
        const cartCount = getCart().reduce((sum, item) => sum + item.qty, 0);
        const wishlistCount = getWishlist().length;
        links.querySelector(".cart-count").textContent = cartCount;
        links.querySelector(".wishlist-count").textContent = wishlistCount;
    }

    function normalize(value) {
        return String(value || "").toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    }

    function findMatches(query) {
        const term = normalize(query);
        if (!term) return [];
        return GAMES.filter((game) => {
            const searchable = normalize(`${game.title} ${game.genre} ${game.platform} ${game.description}`);
            return searchable.includes(term) || term.split(" ").every((part) => searchable.includes(part));
        });
    }

    function showSearchSuggestions(input, query) {
        const wrapper = input.closest(".srchdiv") || input.parentElement;
        if (!wrapper) return;
        wrapper.classList.add("search-wrapper");
        let dropdown = wrapper.querySelector(".search-suggestions");
        if (!dropdown) {
            dropdown = document.createElement("div");
            dropdown.className = "search-suggestions";
            dropdown.setAttribute("role", "listbox");
            wrapper.appendChild(dropdown);
        }
        dropdown.replaceChildren();
        const term = query.trim();
        if (!term) {
            dropdown.hidden = true;
            return;
        }
        const matches = findMatches(term).slice(0, 6);
        if (matches.length === 0) {
            const empty = document.createElement("p");
            empty.className = "suggestion-empty";
            empty.textContent = "No games found. Try another title or genre.";
            dropdown.appendChild(empty);
        } else {
            matches.forEach((game) => {
                const link = document.createElement("a");
                link.className = "search-suggestion";
                link.href = detailUrl(game.id);
                link.setAttribute("role", "option");
                const cover = document.createElement("img");
                cover.src = game.cover;
                cover.alt = "";
                const details = document.createElement("span");
                details.className = "suggestion-copy";
                const title = document.createElement("strong");
                title.textContent = game.title;
                const meta = document.createElement("small");
                meta.textContent = `${game.genre} · ${money(game.price)}`;
                details.append(title, meta);
                link.append(cover, details);
                dropdown.appendChild(link);
            });
        }
        dropdown.hidden = false;
    }

    function filterBrowse(query) {
        const sections = document.querySelectorAll(".dtogmain");
        if (!sections.length) return;
        const term = normalize(query);
        const genrePanel = document.querySelector(".catmain");
        const main = document.querySelector(".maindiv");
        let noResults = document.getElementById("noSearchResults");
        if (!noResults && main) {
            noResults = document.createElement("p");
            noResults.id = "noSearchResults";
            noResults.setAttribute("role", "status");
            noResults.textContent = "No games found in this section. Choose a suggestion above to view the full catalogue.";
            main.appendChild(noResults);
        }
        let visible = 0;
        sections.forEach((section) => {
            let count = 0;
            section.querySelectorAll(".dtoginsd").forEach((card) => {
                const title = card.querySelector(".nog")?.textContent || "";
                const game = GAMES.find((item) => normalize(item.title) === normalize(title));
                const searchable = game ? `${game.title} ${game.genre} ${game.platform}` : `${title} ${section.querySelector(".catname")?.textContent || ""}`;
                const matches = !term || normalize(searchable).includes(term) || term.split(" ").every((part) => normalize(searchable).includes(part));
                card.hidden = !matches;
                if (matches) count += 1;
            });
            section.hidden = count === 0;
            visible += count;
        });
        if (genrePanel) genrePanel.hidden = term.length > 0;
        if (noResults) noResults.hidden = visible !== 0 || term.length === 0;
    }

    function initialiseGameCards() {
        document.querySelectorAll(".dtoginsd, .card").forEach((card) => {
            const title = card.querySelector(".nog")?.textContent?.trim();
            if (!title) return;
            const game = GAMES.find((item) => normalize(item.title) === normalize(title));
            if (!game) return;
            card.dataset.gameId = game.id;
            card.setAttribute("aria-label", `View ${game.title} details`);
            if (card.tagName === "A") card.href = detailUrl(game.id);
            else {
                card.tabIndex = 0;
                card.setAttribute("role", "link");
                card.style.cursor = "pointer";
            }
        });
    }

    function initialiseSearch() {
        document.querySelectorAll("input.srch").forEach((input) => {
            input.setAttribute("aria-label", "Search games");
            input.setAttribute("autocomplete", "off");
            input.addEventListener("input", () => {
                showSearchSuggestions(input, input.value);
                if (document.querySelector(".dtogmain")) filterBrowse(input.value);
            });
            input.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    const matches = findMatches(input.value);
                    if (matches.length) window.location.href = detailUrl(matches[0].id);
                    else if (input.value.trim()) window.location.href = `browse.html?q=${encodeURIComponent(input.value.trim())}`;
                } else if (event.key === "Escape") {
                    const dropdown = (input.closest(".srchdiv") || input.parentElement)?.querySelector(".search-suggestions");
                    if (dropdown) dropdown.hidden = true;
                }
            });
            input.addEventListener("blur", () => {
                window.setTimeout(() => {
                    const dropdown = (input.closest(".srchdiv") || input.parentElement)?.querySelector(".search-suggestions");
                    if (dropdown && !dropdown.matches(":hover")) dropdown.hidden = true;
                }, 180);
            });
        });

        const params = new URLSearchParams(window.location.search);
        const initialQuery = params.get("q");
        if (initialQuery) {
            const input = document.querySelector("input.srch");
            if (input) {
                input.value = initialQuery;
                showSearchSuggestions(input, initialQuery);
            }
            filterBrowse(initialQuery);
        }
    }

    function initialiseCardNavigation() {
        document.addEventListener("click", (event) => {
            const card = event.target.closest("[data-game-id]");
            if (!card) return;
            if (card.tagName === "A") return;
            if (event.target.closest("button")) return;
            window.location.href = detailUrl(card.dataset.gameId);
        });
        document.addEventListener("keydown", (event) => {
            if ((event.key === "Enter" || event.key === " ") && event.target.matches('[data-game-id][role="link"]')) {
                event.preventDefault();
                window.location.href = detailUrl(event.target.dataset.gameId);
            }
        });
    }


    function initialiseHomeShowcase() {
        const hero = document.querySelector(".ss .leftss");
        if (!hero) return;

        const slides = [
            { id: "elden-ring", title: "Elden Ring: Shadow of the Erdtree", image: "s1.png" },
            { id: "black-myth-wukong", title: "Black Myth: Wukong", image: "s2.jpeg" },
            { id: "hogwarts-legacy", title: "Hogwarts Legacy", image: "s3.jpg" },
            { id: "ark-survival-ascended", title: "ARK: Survival Ascended", image: "s4.jpg" },
            { id: "god-of-war-ragnarok", title: "God of War: Ragnarok", image: "s5.jpg" }
        ];
        const imageElement = hero.querySelector(".showcase-image");
        const sideCards = [...document.querySelectorAll(".rightss .timebox")];
        let activeIndex = 0;

        function activateSlide(index) {
            activeIndex = (index + slides.length) % slides.length;
            const slide = slides[activeIndex];
            hero.href = detailUrl(slide.id);
            hero.dataset.gameId = slide.id;
            hero.setAttribute("aria-label", `View ${slide.title} details`);
            if (imageElement) {
                imageElement.src = image(slide.image);
                imageElement.alt = `${slide.title} featured artwork`;
            }
            sideCards.forEach((card, cardIndex) => {
                card.dataset.gameId = slides[cardIndex].id;
                card.setAttribute("role", "link");
                card.setAttribute("tabindex", "0");
                card.setAttribute("aria-label", `View ${slides[cardIndex].title} details`);
                card.classList.toggle("is-active", cardIndex === activeIndex);
            });
        }

        activateSlide(0);
        const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (!reducedMotion) window.setInterval(() => activateSlide(activeIndex + 1), 6000);
    }

    function renderDetailPage() {
        const root = document.getElementById("gameDetail");
        if (!root) return;
        const id = new URLSearchParams(window.location.search).get("id");
        const game = byId.get(id);
        if (!game) {
            root.innerHTML = `<div class="detail-not-found"><h1>Game not found</h1><p>We couldn't find that title in the store catalogue.</p><a class="primary-link" href="browse.html">Browse games</a></div>`;
            return;
        }
        document.title = `${game.title} | Games Store`;
        const gallery = [game.cover, ...game.screenshots];
        const hasGallery = gallery.length > 1;
        const discount = game.originalPrice ? Math.round((1 - game.price / game.originalPrice) * 100) : 0;
        root.innerHTML = `
            <div class="detail-breadcrumb"><a href="home.html">Home</a><span>/</span><a href="browse.html">Browse</a><span>/</span><span>${escapeHtml(game.title)}</span></div>
            <section class="detail-layout">
                <div class="detail-gallery-column">
                    <div class="detail-main-image-wrap"><img id="detailMainImage" class="detail-main-image" src="${game.cover}" alt="${escapeHtml(game.title)} cover artwork"></div>
                    <div class="detail-gallery-label">${hasGallery ? "Screenshots & artwork" : "Game artwork"}</div>
                    <div class="detail-thumbnails" id="detailThumbnails">
                        ${gallery.map((src, index) => `<button type="button" class="detail-thumb ${index === 0 ? "active" : ""}" data-image="${src}" aria-label="Show gallery image ${index + 1}"><img src="${src}" alt=""></button>`).join("")}
                    </div>
                    ${hasGallery ? "" : `<p class="gallery-note">Only one image for this game is included in the original project assets. Additional in-game screenshots can be added to the Images folder later.</p>`}
                </div>
                <div class="detail-info">
                    <p class="detail-eyebrow">GAMES STORE · GAME DETAILS</p>
                    <h1>${escapeHtml(game.title)}</h1>
                    <p class="detail-description">${escapeHtml(game.description)}</p>
                    <div class="detail-tags"><span>${escapeHtml(game.genre)}</span><span>${escapeHtml(game.platform)}</span></div>
                    <div class="detail-price-panel">
                        ${discount ? `<span class="detail-discount">-${discount}%</span>` : ""}
                        <div class="detail-prices">${game.originalPrice ? `<del>${money(game.originalPrice)}</del>` : ""}<strong>${money(game.price)}</strong></div>
                        <small>${game.price === 0 ? "Free to play" : "One-time listed price · Demo storefront"}</small>
                    </div>
                    <div class="detail-actions">
                        <button type="button" id="addToCartButton" class="detail-cart-button">Add to Cart</button>
                        <button type="button" id="wishlistButton" class="detail-wishlist-button">♡ Add to Wishlist</button>
                    </div>
                    <p id="detailActionMessage" class="detail-action-message" role="status" aria-live="polite"></p>
                    <div class="detail-meta"><div><span>Genre</span><strong>${escapeHtml(game.genre)}</strong></div><div><span>Available platforms</span><strong>${escapeHtml(game.platform)}</strong></div><div><span>Store ID</span><strong>${escapeHtml(game.id)}</strong></div></div>
                </div>
            </section>`;

        const mainImage = root.querySelector("#detailMainImage");
        root.querySelectorAll(".detail-thumb").forEach((button) => {
            button.addEventListener("click", () => {
                mainImage.src = button.dataset.image;
                root.querySelectorAll(".detail-thumb").forEach((item) => item.classList.toggle("active", item === button));
            });
        });
        const message = root.querySelector("#detailActionMessage");
        root.querySelector("#addToCartButton").addEventListener("click", () => {
            addToCart(game.id);
            message.textContent = `${game.title} added to your cart.`;
        });
        const wishlistButton = root.querySelector("#wishlistButton");
        function syncWishlistButton() {
            const saved = getWishlist().includes(game.id);
            wishlistButton.textContent = saved ? "♥ In Wishlist · Remove" : "♡ Add to Wishlist";
            wishlistButton.classList.toggle("is-saved", saved);
        }
        syncWishlistButton();
        wishlistButton.addEventListener("click", () => {
            const saved = toggleWishlist(game.id);
            syncWishlistButton();
            message.textContent = saved ? `${game.title} added to your wishlist.` : `${game.title} removed from your wishlist.`;
        });
    }

    function renderCartPage() {
        const root = document.getElementById("cartContent");
        if (!root) return;
        const cart = getCart();
        if (!cart.length) {
            root.innerHTML = `<div class="store-empty"><div class="empty-icon">🛒</div><h2>Your cart is empty</h2><p>Find a game you like and add it to your cart.</p><a class="primary-link" href="browse.html">Browse games</a></div>`;
            return;
        }
        const total = cart.reduce((sum, item) => sum + byId.get(item.id).price * item.qty, 0);
        root.innerHTML = `
            <div class="store-page-heading"><p class="detail-eyebrow">YOUR STORE</p><h1>Shopping Cart</h1><p>${cart.reduce((sum, item) => sum + item.qty, 0)} item(s) in your cart</p></div>
            <div class="cart-layout"><div class="cart-items">${cart.map((item) => { const game = byId.get(item.id); return `
                <article class="cart-item" data-cart-id="${game.id}"><img src="${game.cover}" alt="${escapeHtml(game.title)} cover"><div class="cart-item-info"><h2>${escapeHtml(game.title)}</h2><p>${escapeHtml(game.genre)}</p><strong>${money(game.price)}</strong><div class="quantity-controls"><button type="button" data-cart-action="decrease" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button type="button" data-cart-action="increase" aria-label="Increase quantity">+</button></div></div><button type="button" class="remove-item" data-cart-action="remove">Remove</button></article>`; }).join("")}</div>
                <aside class="cart-summary"><h2>Order Summary</h2><div><span>Subtotal</span><strong>${money(total)}</strong></div><div><span>Discounts</span><strong>—</strong></div><div class="cart-total"><span>Total</span><strong>${money(total)}</strong></div><p>This is a front-end demo. No payment will be collected.</p><a class="primary-link" href="browse.html">Continue Shopping</a></aside></div>`;
        root.querySelectorAll("[data-cart-action]").forEach((button) => button.addEventListener("click", () => {
            const id = button.closest("[data-cart-id]").dataset.cartId;
            const action = button.dataset.cartAction;
            let updated = getCart();
            const item = updated.find((entry) => entry.id === id);
            if (action === "remove") updated = updated.filter((entry) => entry.id !== id);
            if (action === "increase" && item) item.qty += 1;
            if (action === "decrease" && item) item.qty = Math.max(1, item.qty - 1);
            writeStorage(CART_KEY, updated);
            updateHeaderLinks();
            renderCartPage();
        }));
    }

    function renderWishlistPage() {
        const root = document.getElementById("wishlistContent");
        if (!root) return;
        const list = getWishlist();
        if (!list.length) {
            root.innerHTML = `<div class="store-empty"><div class="empty-icon">♡</div><h2>Your wishlist is empty</h2><p>Save games here to keep track of titles you want.</p><a class="primary-link" href="browse.html">Explore games</a></div>`;
            return;
        }
        root.innerHTML = `<div class="store-page-heading"><p class="detail-eyebrow">YOUR STORE</p><h1>Wishlist</h1><p>${list.length} saved game(s)</p></div><div class="wishlist-grid">${list.map((id) => { const game = byId.get(id); return `<article class="wishlist-item" data-wishlist-id="${game.id}"><a href="${detailUrl(game.id)}"><img src="${game.cover}" alt="${escapeHtml(game.title)} cover"></a><div class="wishlist-item-copy"><h2><a href="${detailUrl(game.id)}">${escapeHtml(game.title)}</a></h2><p>${escapeHtml(game.genre)} · ${money(game.price)}</p><div><button type="button" class="wishlist-add-cart" data-wishlist-action="cart">Add to Cart</button><button type="button" class="remove-item" data-wishlist-action="remove">Remove</button></div></div></article>`; }).join("")}</div>`;
        root.querySelectorAll("[data-wishlist-action]").forEach((button) => button.addEventListener("click", () => {
            const id = button.closest("[data-wishlist-id]").dataset.wishlistId;
            if (button.dataset.wishlistAction === "cart") addToCart(id);
            if (button.dataset.wishlistAction === "remove") writeStorage(WISHLIST_KEY, getWishlist().filter((item) => item !== id));
            updateHeaderLinks();
            renderWishlistPage();
        }));
    }

    document.addEventListener("DOMContentLoaded", () => {
        initialiseGameCards();
        updateHeaderLinks();
        initialiseSearch();
        initialiseCardNavigation();
        initialiseHomeShowcase();
        renderDetailPage();
        renderCartPage();
        renderWishlistPage();
    });
})();
