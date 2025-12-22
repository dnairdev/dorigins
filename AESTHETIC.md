# Aesthetic Design System

A guide to the visual design tokens and how to customize the look and feel of "Is This Diya Nair?"

---

## Design Tokens (`theme.css`)

All visual properties are controlled through CSS custom properties (variables) in `theme.css`. This allows easy customization without modifying the core styles.

### Background Colors

```css
--bg-deep: #06060a;      /* Deepest background */
--bg-base: #0a0a10;      /* Main canvas background */
--bg-elevated: #0f0f16;  /* Elevated surfaces */
--bg-surface: #14141c;   /* Cards and panels */
```

**Vignette** creates depth with a brighter center:
```css
--vignette-center: rgba(18, 18, 28, 0.3);
--vignette-mid: rgba(10, 10, 16, 0.6);
--vignette-edge: rgba(4, 4, 8, 0.95);
```

### Accent Colors (Soft Pastels)

Three primary accent hues with multiple opacity levels:

| Token | Color | Use Case |
|-------|-------|----------|
| `--accent-lavender` | `rgb(200, 180, 230)` | Primary accent, nodes, glows |
| `--accent-mint` | `rgb(160, 220, 200)` | Status indicators, secondary highlights |
| `--accent-peach` | `rgb(255, 200, 180)` | Warm accents, bubble effects |

Each accent has variants:
- `-soft` (60% opacity) — For active states
- `-muted` (30% opacity) — For hover states
- `-glow` (15% opacity) — For subtle glows and shadows

### Text Hierarchy

```css
--text-primary: rgba(240, 238, 245, 0.95);   /* Main text */
--text-secondary: rgba(200, 198, 210, 0.85); /* Body text */
--text-muted: rgba(150, 148, 165, 0.7);      /* Labels, hints */
--text-faint: rgba(120, 118, 135, 0.5);      /* Disabled text */
```

**Note:** Text is intentionally off-white (slight lavender tint) to reduce harshness.

### Node Styling

**Sizes:**
```css
--node-radius-sm: 6px;   /* Subnodes */
--node-radius-md: 10px;  /* Regular nodes */
--node-radius-lg: 16px;  /* Origin/central node */
```

**Glow strengths** (0-1 scale):
```css
--node-glow-idle: 0.4;   /* Default state */
--node-glow-hover: 0.8;  /* On hover */
--node-glow-active: 1.0; /* Selected/visited */
```

**Halo size multipliers:**
```css
--node-halo-idle: 1.8;   /* Default bloom radius */
--node-halo-hover: 2.4;  /* Hover bloom expansion */
--node-halo-active: 2.8; /* Active state bloom */
```

### Link Styling

```css
--link-width-thin: 0.5;
--link-width-normal: 1.0;
--link-opacity-faint: 0.06;   /* Undiscovered connections */
--link-opacity-idle: 0.12;    /* Discovered but inactive */
--link-opacity-hover: 0.35;   /* Connected to hovered node */
--link-opacity-active: 0.5;   /* Active path */
```

### Blur & Glow

```css
/* Blur amounts */
--blur-subtle: 2px;
--blur-soft: 5px;
--blur-medium: 10px;
--blur-strong: 20px;

/* Glow shadows (use with box-shadow) */
--glow-subtle: 0 0 8px;
--glow-soft: 0 0 15px;
--glow-medium: 0 0 25px;
--glow-strong: 0 0 40px;
```

### Animation Timings

```css
--duration-fast: 150ms;     /* Micro-interactions */
--duration-normal: 300ms;   /* Standard transitions */
--duration-slow: 500ms;     /* Page transitions */
--duration-drift: 3000ms;   /* Subtle animations */
--duration-pulse: 2500ms;   /* Breathing effects */
```

---

## How to Customize

### Making Nodes More Vibrant

Increase glow strengths:
```css
:root {
  --node-glow-idle: 0.6;    /* was 0.4 */
  --node-glow-hover: 1.0;   /* was 0.8 */
  --node-halo-hover: 3.0;   /* was 2.4 */
}
```

### Making Links More Visible

Increase link opacity:
```css
:root {
  --link-opacity-idle: 0.2;   /* was 0.12 */
  --link-opacity-hover: 0.5;  /* was 0.35 */
}
```

### Changing the Color Palette

Replace accent colors while keeping the opacity variants:
```css
:root {
  /* Electric blue theme */
  --accent-lavender: rgb(100, 180, 255);
  --accent-lavender-soft: rgba(100, 180, 255, 0.6);
  --accent-lavender-muted: rgba(100, 180, 255, 0.3);
  --accent-lavender-glow: rgba(100, 180, 255, 0.15);
}
```

### Reducing Motion

The system respects `prefers-reduced-motion`. You can also force it:
```css
:root {
  --duration-drift: 0ms;
  --duration-pulse: 0ms;
  --star-twinkle-duration: 0s;
}
```

---

## Visual Effects Breakdown

### Background Layers (bottom to top)
1. **Solid fill** — `#06060a` base
2. **Vignette gradient** — Radial gradient, brighter center
3. **Starfield** — Canvas-rendered, varied sizes and brightness
4. **Noise texture** — CSS SVG filter, very low opacity (2.5%)

### Node "Orb" Effect
1. **Outer halo** — Large radial gradient, transparent edge
2. **Core gradient** — Bright center fading to darker edge
3. **Inner hotspot** — Small bright center for depth
4. **Specular highlight** — Off-center white spot for 3D effect

### Focus Mode (Hover)
When hovering a node:
- Hovered node: Halo expands, brightness increases
- Neighbor nodes: Slight brightness boost
- Non-neighbors: Fade to 25% opacity
- Neighbor links: Increase to full opacity
- Other links: Fade significantly

---

## Performance Notes

- **60fps target** on modern laptops
- Starfield twinkle uses simple sine wave (no heavy calculations)
- Gradients are created once per frame, not per-draw
- Noise overlay is a single CSS pseudo-element
- `prefers-reduced-motion` disables all animations

---

## Files Changed

| File | Changes |
|------|---------|
| `theme.css` | NEW — Design token system |
| `styles.css` | Refactored to use tokens, glass HUD, modern typography |
| `script.js` | Improved rendering: orb nodes, soft links, focus mode, starfield |
| `index.html` | Added theme.css import |

---

## Checklist

- [x] Nodes appear as glowing orbs with soft halos
- [x] Links are thin, soft, and elegant (not harsh)
- [x] Background has depth (vignette + stars + subtle grain)
- [x] Text uses modern Inter font with proper hierarchy
- [x] Hover focus mode: neighbors emphasized, others fade
- [x] Glass pill HUD with blur effect
- [x] Reduced motion support
- [x] No functional changes to graph behavior

