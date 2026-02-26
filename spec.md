# Specification

## Summary
**Goal:** Fix the message/letter panel so it stays perfectly centered and stationary in the viewport after the envelope opens.

**Planned changes:**
- Update the letter/message panel positioning to use stable, fixed centering (e.g., fixed positioning with transform-based centering) so it cannot shift, drift, or animate its position after reveal.
- Ensure no CSS transition or keyframe animation affects the panel's position properties (`top`, `left`, `right`, `bottom`, or translate transforms) once the panel is visible.
- Verify centering holds across different screen sizes and scroll positions.

**User-visible outcome:** After clicking the envelope to open it, the message panel appears exactly centered on screen and stays there without any movement or drift.
