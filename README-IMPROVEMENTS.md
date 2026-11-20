GAMES STORE — IMPROVEMENT BUILD
================================

WHAT'S NEW
----------
1. Shared game search is available on every page. Type a title, genre or platform
   to see suggestions. Press Enter to open the first matching game's detail page.
2. Existing game cards on Home, Browse and Offers open a game detail page.
3. Game detail pages show cover artwork, available gallery images, description,
   price, discount (where configured), genre and supported platforms.
4. Add to Cart and Add to Wishlist actions are functional.
5. Cart and Wishlist pages let visitors review and manage saved games.
6. Cart and Wishlist counters appear in the top navigation.

HOW TO RUN
----------
Recommended: open the project folder in Visual Studio Code and run Html_Files/home.html
with the Live Server extension. You can also open the HTML file directly in a browser.

The project is a front-end demonstration. Cart and Wishlist data are saved in the
browser using LocalStorage. There is no server, real account authentication, payment
processing or checkout backend.

HOW TO ADD MORE GAMES
---------------------
Open JavaScript_Files/store.js and add another makeGame(...) entry to the GAMES list.
The cover and screenshot paths should point to files inside the Images folder. The game
ID must be unique and URL-friendly (lowercase letters and hyphens are recommended).

SCREENSHOTS / GALLERY
---------------------
The source project did not contain separate gameplay screenshots for every title.
The detail page displays extra gallery images only when the project already includes
additional artwork for that game. Add genuine screenshots to Images and list their
filenames in that game's screenshots array in store.js.


## Improvement 03
- Fixed the details, cart and wishlist page shell so content starts after the fixed sidebar and stays within the viewport.
- Fixed the top header dimensions and alignment for those pages.
- Changed the game details artwork to preserve the complete source image with `object-fit: contain`; cart and wishlist covers also retain their full artwork.
- Made the home-page hero slideshow and all five side thumbnails open the matching game details page. The hero image, title mapping and destination update together every six seconds; reduced-motion preferences disable auto-rotation.
