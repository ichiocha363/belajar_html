---
name: Warm Merchant POS
colors:
  surface: "#faf8ff"
  surface-dim: "#d2d9f4"
  surface-bright: "#faf8ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f2f3ff"
  surface-container: "#eaedff"
  surface-container-high: "#e2e7ff"
  surface-container-highest: "#dae2fd"
  on-surface: "#131b2e"
  on-surface-variant: "#4f4632"
  inverse-surface: "#283044"
  inverse-on-surface: "#eef0ff"
  outline: "#817660"
  outline-variant: "#d3c5ac"
  surface-tint: "#775a00"
  primary: "#775a00"
  on-primary: "#ffffff"
  primary-container: "#ffc61a"
  on-primary-container: "#6e5400"
  inverse-primary: "#f6be0a"
  secondary: "#7d5800"
  on-secondary: "#ffffff"
  secondary-container: "#febb30"
  on-secondary-container: "#6d4c00"
  tertiary: "#006c49"
  on-tertiary: "#ffffff"
  tertiary-container: "#57e6aa"
  on-tertiary-container: "#006444"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffdf98"
  primary-fixed-dim: "#f6be0a"
  on-primary-fixed: "#251a00"
  on-primary-fixed-variant: "#5a4300"
  secondary-fixed: "#ffdea9"
  secondary-fixed-dim: "#febb30"
  on-secondary-fixed: "#271900"
  on-secondary-fixed-variant: "#5e4100"
  tertiary-fixed: "#6ffbbe"
  tertiary-fixed-dim: "#4edea3"
  on-tertiary-fixed: "#002113"
  on-tertiary-fixed-variant: "#005236"
  background: "#faf8ff"
  on-background: "#131b2e"
  surface-variant: "#dae2fd"
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: "700"
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: "600"
    lineHeight: 30px
  headline-md:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  headline-sm:
    fontFamily: Epilogue
    fontSize: 16px
    fontWeight: "600"
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
  numeric-currency:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.02em
  numeric-table:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system is crafted for grassroots retail merchants, grocery stalls, and small-to-medium retail enterprises (UMKM). It blends everyday approachability with operational precision. The aesthetic direction is modern, inviting, and highly functional—combining clean, bright utility with warm, sunlit hospitality.

Rather than relying on sterile enterprise conventions or overly raw utilitarianism, the visual language uses high legibility, tactile micro-affordances, and clear color cues. Kasir and warung owners operate in fast-paced, high-distraction environments; touch targets must feel generous, feedback must be immediate, and dense transactional numbers must be effortlessly readable at an arm's reach.

## Colors

The palette establishes energetic clarity, anchoring checkout flows and primary interactions with a warm golden core, grounded by rich slate neutrals.

- **Primary (`#FFC61A`)**: Warm golden yellow. Applied to dominant call-to-actions, primary POS actions ("Bayar", "Selesai"), active checkout tabs, and high-visibility status indicators. Always paired with deep charcoal or slate text (`#0F172A`) to ensure accessible contrast.
- **Secondary (`#D99B00`)**: Deep amber gold. Serves as hover, pressed, and focus-ring states for primary elements, as well as selected borders and active item indicators.
- **Tertiary / Success (`#10B981`)**: Mint emerald. Designated for successful transactions, cash received notifications, paid status tags, and stock surplus alerts.
- **Destructive / Alert (`#EF4444`)**: Crisp crimson. Reserved for removing items from cart, voiding invoices, stock depletion alerts, and negative margin warnings.
- **Neutral Surface Palette**:
  - Canvas background: `#F8FAFC` (Slate 50) for reduced eye strain during long shifts.
  - Surface cards & drawers: `#FFFFFF` (Pure White).
  - Borders & dividers: `#E2E8F0` (Slate 200).
  - Secondary text / captions: `#64748B` (Slate 500).
  - Primary text / headers: `#0F172A` (Slate 900).

## Typography

Typography balances warm human character with rigorous transactional utility.

- **Display & Headings**: Rendered in a geometric, friendly sans-serif with strong presence (Epilogue), imparting warmth and distinct personality to brand logos, screen banners, and card titles.
- **Body, Table & Transactional Data**: Powered by Inter. All product pricing, currency quantities, and SKU tables must enable tabular numbers (`font-feature-settings: 'tnum' on, 'zero' on`) to ensure price columns and digit alignments remain strictly vertical and quick to parse.

## Layout & Spacing

The layout is built upon an adaptive 12-column fluid grid system engineered specifically for split-pane POS and dashboard operations:

- **Desktop & Tablet Landscape (POS Mode)**:
  - Fixed-ratio split interface: 65% catalog and product search, 35% fixed checkout sidebar with pinned total and payment action footer.
  - Consistent 16px (`space-md`) internal gutters allow dense yet uncrowded product grid tiles (4-6 columns on desktop, 3 columns on tablet).
- **Mobile & Small Tablet Portrait**:
  - Reflows into a single-column stacked layout with a persistent bottom drawer or floating sticky summary bar showing total items, grand total, and a full-width "Lihat Keranjang / Bayar" trigger.
  - Canvas margin adjusts down to 16px (`margin-mobile`), ensuring maximal surface area for product tiles and touchscreen thumb reach.

## Elevation & Depth

Visual hierarchy uses clean surface separation through low-contrast slate outlines paired with ambient warm-tinted shadows:

- **Level 0 (Flat Canvas)**: Background base (`#F8FAFC`). No shadow, no border.
- **Level 1 (Card & Shelf Surfaces)**: Standard product cards, filter bars, and list containers. Resting on pure white (`#FFFFFF`) with a 1px border (`#E2E8F0`) and an ambient micro-drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04)`.
- **Level 2 (Interactive Floating Elements & Cart Panes)**: Active checkout cart panels, quick-action item hovers, and table sticky headers. Shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modals, NumPad Triggers & Payment Popups)**: Cash tender calculators, receipt previews, and critical alerts: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.

## Shapes

The interface embraces a friendly, ergonomic curvature that softens the dense, boxy nature of inventory tables and register interfaces:

- **Cards & Primary Modules**: Rounded with 1rem radius (`rounded-lg` under shape level 2) to maintain a cohesive, welcoming frame.
- **Buttons & Input Fields**: Configured with a 0.5rem radius (`rounded-base`), providing enough curvature to feel modern and clickable without wasting horizontal tap space.
- **Badges & Counter Chips**: Fully rounded pill shapes for quick visual parsing of category filters and item counts.

## Components

### Buttons

- **Primary Action (e.g., "Bayar Rp 45.000")**: Background `#FFC61A`, text `#0F172A`, font weight 600, height 48px (mobile: 52px for thumb precision). Hover: background `#D99B00`. Focus: ring 3px `#FFC61A` with 50% opacity.
- **Secondary Action**: Border 1px `#E2E8F0`, surface `#FFFFFF`, text `#0F172A`. Hover: background `#F8FAFC`, border `#CBD5E1`.
- **Destructive Action**: Background `#FEE2E2`, text `#EF4444`. Hover: background `#EF4444`, text `#FFFFFF`.

### Product Cards

- Contained in `#FFFFFF` with a 1px `#E2E8F0` border.
- Features square thumbnail preview, bold product title (max 2 lines), stock indicator badge, and high-contrast currency display (`Rp 12.500`).
- Touch-friendly direct "add" interaction: Tap entire card or tap an oversized `+` icon button at the bottom-right corner.

### Chips & Category Filters

- Height 36px, pill-rounded.
- Unselected: `#FFFFFF` surface, `#64748B` label, 1px `#E2E8F0` border.
- Selected: `#FFC61A` background, `#0F172A` bold label, border `#D99B00`.

### Data Tables & Transaction Logs

- Alternate row striping using `#FFFFFF` and `#F8FAFC`.
- Sticky header row with uppercase 11px label font (`#64748B`) and subtle bottom border `#E2E8F0`.
- All monetary columns right-aligned with tabular numerals.

### Inputs & Number Steppers

- Height 44px with a 1px border in `#CBD5E1`. Active state shifts border to `#D99B00` with an amber focus shadow.
- Cart quantity controls: segmented group with prominent minus (`-`), count, and plus (`+`) buttons, ensuring effortless one-finger adjustments on touchscreens.

### On-Screen Numeric Keypad (NumPad)

- Built for fast tender input (e.g., "Uang Pas", "Rp 50.000", "Rp 100.000").
- Key cells structured with 12px gaps, subtle border, distinct `#FFFFFF` backgrounds, and a tactile pressed state shifting to `#F1F5F9`.
