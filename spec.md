# Specification

## Summary
**Goal:** Add a full-screen welcome gate that users must click through before seeing the main website content.

**Planned changes:**
- Create a new full-screen gate component that displays on initial page load, covering the entire viewport with a dark romantic background consistent with the existing theme
- Add a centered "Welcome Cutee" button styled with the gold/maroon romantic aesthetic (serif/cursive fonts, matching colors)
- Gate hides and reveals the main LoveLetterPage with a smooth fade/transition animation when the button is clicked
- Wire the gate into the app so LoveLetterPage is hidden until the button is clicked

**User-visible outcome:** When the site loads, visitors see only the welcome gate with a "Welcome Cutee" button. Clicking it smoothly transitions to the full love letter website.
