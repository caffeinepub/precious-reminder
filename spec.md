# Specification

## Summary
**Goal:** Rebuild the envelope and letter UI to match a provided HTML reference design, update the page background, and load required Google Fonts.

**Planned changes:**
- Replace the current seal/letter reveal flow with an animated burgundy (#800020) envelope component featuring a triangular flap, two-tone side/bottom panels, and a circular wax seal with a gold heart (♥)
- Clicking the envelope flips the flap upward (rotateX 180deg), hides the wax seal, and animates the letter rising out of the envelope; clicking again reverses the animation
- Style the revealed letter panel with a parchment (#fdf5e6) background, 1px solid #e0d0b0 border, 30px padding, scrollable overflow, Dancing Script header (28px, burgundy, gold underline), and Playfair Display body text (16px, #333, justified)
- Update the page background to a dark radial gradient (radial-gradient(circle, #1a1a1a 0%, #000 100%)), retaining the existing StarBackground particle layer
- Add Google Fonts imports for Dancing Script (600), Playfair Display (400, 700, italic 400), and Poppins (300) in index.html

**User-visible outcome:** Users see a dark background with a burgundy wax-sealed envelope; clicking it reveals a beautifully styled parchment letter that animates upward out of the envelope, and clicking again closes it.
