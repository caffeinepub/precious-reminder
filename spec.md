# Specification

## Summary
**Goal:** Replace the existing frontend with a faithful React/Tailwind implementation of a provided HTML love letter design.

**Planned changes:**
- Remove all existing envelope animation, SealButton, StarBackground, and Envelope components
- Set full-viewport dark background (#1a1a1a)
- Add four floating emoji elements (❤️, ✨, 🕊️, 🌹) that animate upward with staggered delays using a float keyframe
- Create a centered parchment-style letter container (max-width 650px, background #fdfcf0, gold border #d4af37, box-shadow, fadeIn animation on load)
- Import Dancing Script, Playfair Display, and EB Garamond from Google Fonts
- Render header "To my dearest Priya (Cutee) 📜✨" in Dancing Script, maroon (#800000), with a gold double-line bottom border
- Render all five letter body paragraphs verbatim in EB Garamond with justified alignment and line-height 1.9
- Style the phrases "Please don't misunderstand my intentions;" and "grace note in my life;" as italic, bold, maroon, with a wavy gold underline
- Add a right-aligned cursive footer reading "Always yours, ❤️" in Dancing Script
- Add a centered 70×70px maroon radial-gradient wax seal circle displaying gold letter "P"
- Apply responsive styles reducing padding and font sizes on screens narrower than 480px

**User-visible outcome:** Users see a beautifully styled static love letter page with floating emoji animations, a parchment-style letter container, styled highlighted phrases, and a wax seal, matching the provided HTML design exactly.
