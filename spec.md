# Specification

## Summary
**Goal:** Build "A Garden for Priya" — a romantic, fully client-side interactive flower garden web app with a landing screen, clickable flowers revealing personal messages, and a surprise finale.

**Planned changes:**
- Create a full-screen landing page with a soft radial gradient (white to #f4ecd8), italic subtitle "A secret garden for Priya...", and a gold-bordered "ENTER" button that fades out and reveals the main content on click
- Build a centered main content area (max-width 600px) with an italic serif heading "For My Everything", a gold divider, and a muted italic subtitle "Tap each bloom to reveal my heart..."
- Implement a 3×2 grid of 6 flower emojis (🌹🌸🌷🌻🌼🌺) that start desaturated/sepia and become full color when clicked (marked as viewed), with hover scale effects
- Add a scrollable message display area (250px tall, double gold borders) that fades in each flower's corresponding personal message when clicked, with a placeholder before any selection
- Show a pulsing "For You, Priya ❤️" button (rose/red pill shape) only after all 6 flowers have been viewed, appearing 800ms after the last flower is clicked
- Implement a heart burst particle animation spawning 100 ❤️/💖 emoji particles flying outward from center and fading out over 3 seconds on button click
- Display a centered thank-you modal (parchment background, gold border, rounded corners, drop shadow) with the exact thank-you message and a gold "[ Close ]" button
- Apply a consistent parchment/gold/ink theme (colors: #fdfaf1, #3a3535, #c5a059, #e74c3c) using Georgia serif font throughout, with a footer reading "ETERNALLY YOURS" in small gold uppercase letter-spaced text

**User-visible outcome:** Priya can open the app, enter the secret garden, tap each of the 6 flowers to reveal personal messages, and after viewing all flowers unlock a surprise heart burst animation and a heartfelt thank-you modal.
