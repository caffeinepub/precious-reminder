# Specification

## Summary
**Goal:** Rebuild the app as an animated parchment scroll letter with a dark entry screen and decorative scroll UI.

**Planned changes:**
- Replace existing frontend with a dark (#121212) entry screen showing only an "Open My Heart ❤️" button styled in Cinzel font with a parchment/gold pill shape and hover scale/rotate effect
- Implement animated parchment scroll UI with two wooden-style brown roll handles (with 🕯️ candle decorations) and a parchment body that animates from height 0 to 75vh over 1.8s on open
- Render letter content inside the parchment: Great Vibes h1 title, six Dancing Script body paragraphs, a gold hr separator, a highlighted exam note section, and a "Roll Back & Close 📜" button that reverses the animation
- Load Google Fonts: Dancing Script 600, Cinzel 400/700, and Great Vibes
- Set page title to "A Message for the Most Special Person ✨" and ensure no horizontal overflow
- Letter content fades in with opacity transition after 1.2s delay; close button collapses parchment and returns to entry screen
- Mobile responsive adjustments for font sizes at max-width 480px

**User-visible outcome:** Users see a dark screen with a decorative button; clicking it reveals an animated parchment scroll that unfurls to display a romantic letter with an exam note, and can be rolled back closed.
