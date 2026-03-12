# Accessibility Reference

## 1. Visual Design

### Typography & Readability
- Use fonts with distinct letter forms — characters like I, l, and 1 must be visually distinguishable
- Ensure enough letter spacing and a moderate x-height
- Use true italics (not just slanted roman)
- Avoid justified text
- Avoid all caps text
- Include light and dark modes — set `color-scheme: light dark` on `:root`

### Dyslexia Mode
- Apply the `.dyslexia` class to the root element to activate dyslexia-friendly styles
  - Sets `letter-spacing: 0.15rem`, `word-spacing: 0.2rem`, `line-height: 200%`
- Use sans-serif fonts
- Avoid italics; use bold instead

### Color & Contrast
- Do NOT rely on color alone — always provide a secondary visual cue for interactivity
- Use the combo of **icon + color + text** for maximum readability
- Links: underline reserved for links only; 3:1 contrast ratio against surrounding text
- Run WCAG color-contrast checks and use a color-blind simulator

---

## 2. Content & Cognitive Load

- Break down complex tasks into smaller steps
- Avoid infinite scroll
- Reduce visual noise and distractions
- Use descriptive text as cues

---

## 3. Semantic HTML Structure

- There should be **only one H1**; its content must match the `<title>` tag
- Do NOT skip heading levels
- Do NOT use tables for layout purposes
- Use semantic HTML elements throughout (verify with HTML5 Outliner)

---

## 4. Interactive Elements

### General
- Add focus rings to elements using outlines — **never remove outlines**
  - `:focus-visible` shows the ring for keyboard users only
  - `:focus:not(:focus-visible)` safely hides it for mouse users
- Document all component states: anchor, button, and input (especially focus and disabled states)
  - Disabled elements receive `cursor: not-allowed` and `opacity: 0.6` via `:disabled, [aria-disabled="true"]`
- Interactive elements must announce state changes to screen readers
- All clickable elements (`a`, `button`, `label`, `summary`, and interactive `input` types) receive `cursor: pointer`
- Controls (`.btn`, `button`, `input`) have a minimum height/width of `3rem` (48px) via `--controls-side`
  - Add `touch-action: manipulation` to prevent accidental double-tap zoom on mobile

### Attributes to Include
- `alt` text for brief image descriptions; `figcaption` for longer ones
- `role` attributes where appropriate
- `tabindex`: only use `0` and `-1`
- ARIA attributes — **use only when necessary**

---

## 5. Forms

### Structure & Flow
- Include a label for all inputs
- Use appropriate input types
- Use a `<legend>` as the title for a `<fieldset>`
- Use the `autocomplete` attribute to help users fill forms faster
- Use the `<search>` tag to wrap search forms
- Group dropdown options with `<optgroup>`

### Multi-Step Forms
- Show progress and total steps
- Allow users to go back
- Save partial progress when possible
- Announce step changes to screen readers

### Field Indicators
- If more fields are required → mark only the optional ones
- If counts are about equal → mark the required fields

### Error Handling
- Add `role="alert"` to error messages so changes are announced
- Trigger error handling on blur (not on input)
- Do one final validation check on submit
- Use `aria-invalid` on invalid fields

---

## 6. Tables

- Use `<caption>` as the table title
- Assign `scope="row"` or `scope="col"` to all `<th>` elements
- Use the `headers` attribute to link cells to multiple headers
- When wrapping for horizontal scroll, use `.table-responsive`:
  - Sets `overflow-x: auto` and `-webkit-overflow-scrolling: touch` for iOS momentum scroll
  - Add `role="region"`, `tabindex="0"`, and `aria-label` directly on the `.table-responsive` element (HTML attributes — not set by CSS)
  - Set a minimum width on the wrapped `<table>`
  - Hide lower-priority columns as needed
- CSS `display` rules may strip native roles — reassign roles to table elements if needed

---

## 7. Modals

- Add `aria-modal="true"`
- Move focus to the dialog when opened
- Trap focus within the dialog
- Return focus to the trigger element when closed
- Close on `Esc` key

---

## 8. Keyboard Navigation

- Navigation order: **Header → Main → Sidebar → Footer** (follow visual flow)
- Add a `.skip` link at the beginning of the header
  - Hidden by default via `.skip:not(:focus) { visibility: hidden }`
  - Becomes visible on focus — consider positioning it off-screen so it appears in a predictable location without reflowing the page
- Add skip buttons to each section
- All interactive elements must be reachable via `Tab`

---

## 9. Media

- Include captions for all audio/video
- Disable all autoplay — do NOT include the `autoplay` attribute on video tags
- Avoid PDFs

---

## 10. Testing Checklist

| Area | Tools |
|---|---|
| Color contrast | WCAG checker, color-blind simulator |
| Zoom | Test at 200%–400% |
| HTML structure | HTML5 Outliner |
| Automated | axe DevTools, WAVE, Stark, Lighthouse, Accessibility Insights, Pa11y |
| Semantic HTML | Manual review |
| Keyboard nav | Manual tab-through |
| Screen reader | VoiceOver |
| Comprehension | User testing |

---

## 11. Future Updates

- APCA-compliant color schemes
- `<datalist>` tag implementation
- Audio/video: captions, transcripts, and audio descriptions
- Stacked card layout for tables
- Sortable tables

---

## 12. CSS Quick Reference

| Selector / Class | Purpose |
|---|---|
| `.dyslexia *` | Dyslexia-friendly spacing and line height |
| `.skip:not(:focus)` | Hides skip links until focused |
| `.table-responsive` | Horizontal scroll wrapper for tables (add `role="region"` + `tabindex="0"` in HTML) |
| `:focus-visible` | Focus ring for keyboard users |
| `:focus:not(:focus-visible)` | Hides focus ring for mouse users |
| `:disabled, [aria-disabled="true"]` | Not-allowed cursor + reduced opacity |
| `a, button, label, ...` | Pointer cursor for all interactive elements |
| `a.btn, button, input` | 48px minimum touch target via `--controls-side` |
| `:root` | Font stack fallbacks via `--sans-serif-fallback`, `--serif-fallback`, `--mono-fallback` |

---

## 13. Resources

- [WCAG 2.1 Quick Reference](https://w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org) — articles, checklists, tools
- [A11y Project](https://a11yproject.com) — checklists, patterns
- [ARIA Authoring Practices](https://w3.org/WAI/ARIA/apg/)
