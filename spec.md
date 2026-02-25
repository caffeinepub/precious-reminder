# Specification

## Summary
**Goal:** Fix the broken "click to open" interaction on the Envelope component so the letter panel correctly rises out when the envelope is clicked.

**Planned changes:**
- Fix the click handler on the Envelope component so clicking the envelope, wax seal, or "click to open" prompt correctly toggles the open/closed state.
- Ensure the open/closed state is properly tracked in React state.
- Make the wax seal and "click to open" label visually interactive (`cursor: pointer`) and responsive to click events.

**User-visible outcome:** Users can click the envelope (or its wax seal / label) to open it and watch the letter rise out, and click again to close it, with no console errors.
