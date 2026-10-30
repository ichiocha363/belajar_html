---
name: Warm Merchant Modernism
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#4f4632'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#817660'
  outline-variant: '#d3c5ac'
  surface-tint: '#775a00'
  primary: '#775a00'
  on-primary: '#ffffff'
  primary-container: '#ffc61a'
  on-primary-container: '#6e5400'
  inverse-primary: '#f6be0a'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#006e2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#6ae785'
  on-tertiary-container: '#00662a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf98'
  primary-fixed-dim: '#f6be0a'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#7ffc97'
  tertiary-fixed-dim: '#62df7d'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005320'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Epilogue
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  currency-display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  currency-body:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
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
  gutter-lg: 1.5rem
  margin: 1rem
  margin-lg: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system is engineered for local Indonesian neighborhood storefronts and micro-retailers (warung, toko kelontong, and quick-service stalls) operating high-turnover checkout environments. The design ethos combines the warmth, trustworthiness, and approachable familiarity of neighborhood retail with the uncompromising clarity, speed, and precision demanded by modern point-of-sale software.

The aesthetic philosophy centers on **Functional Modernism with Tactile Warmth**:
- High-efficiency screen ergonomics tuned for split-second decisions during peak rush hours.
- Sunlight-resistant contrast ratios suitable for bright, open-front retail spaces.
- Clear structural division between the rapid-entry catalog grid, the real-time order ledger sidebar, and transactional confirmation states.
- Generous interactive hit targets that accommodate non-tech-native operators, touchscreens, and rapid mouse-driven workflows without visual clutter.

## Colors

The palette establishes an immediate sense of warmth while prioritizing strict legibility and scan speed.

- **Primary (`#FFC61A`)**: A vibrant Indonesian sunny gold. Used intentionally for high-priority interactive calls-to-action (e.g., "Bayar / Charge", active cart indicators, selected state accents). Text layered directly onto primary fills must always use deep slate (`#0F172A`) to preserve WCAG AAA legibility.
- **Secondary / Deep Slate (`#1E293B`, `#0F172A`)**: The anchor tone. Delivers authoritative, crisp text hierarchy, deep structural contrast for the order summary drawer/sidebar, and stark keylines.
- **Tertiary / Transactional Green (`#16A34A`, soft tint `#DCFCE7`)**: Dedicated exclusively to financial health, successful payments, printed receipts, and positive cash flow states.
- **Surfaces & Borders**:
  - Background Canvas: `#F8FAFC` (neutral slate-wash to eliminate screen glare).
  - Component Cards & Panels: `#FFFFFF`.
  - Borders & Dividers: `#E2E8F0` (clean, non-distracting 1px boundaries).
  - Hover / Subdued Elements: `#F1F5F9`.
- **System Accents**:
  - Destructive / Void: `#EF4444` (used for line item deletion, canceled sales, low stock warnings).
  - Notification / Alert: `#F59E0B`.

## Typography

The typography strategy pairs **Epilogue** (serving the geometric, friendly, and structured display personality required for store titles, modal headers, and main category divisions) with **Inter** for all transactional processing, high-density line items, and numeric computations.

Key implementation rules:
- **Tabular Numerals**: All price totals, stock balances, barcode displays, and receipt outputs in `Inter` must enforce `font-feature-settings: "tnum" 1, "cv05" 1`. This aligns Rupiah currency values precisely across dense invoice lists.
- **Rupiah Stacking**: For total dues and payment inputs, the "Rp" prefix uses `title-md` (`font-weight: 500`) aligned with the baseline of the main `currency-display` value.
- **Uppercase Restraint**: Use uppercase strictly for status pills and table headers in `label-md` with slight tracking to preserve clarity on budget monitors.

## Layout & Spacing

The layout is built for high-throughput desktop point-of-sale efficiency, structured around a fixed-height, non-scrolling master canvas with compartmentalized internal scroll zones.

### Core POS Desktop Split (Viewport >= 1024px)
- **Top Bar (Height 56px)**: Store status, cashier name, quick shift metrics, global search bar, sync indicator.
- **Left/Center Workspace (Flexible 60-65% width)**:
  - Sticky category tabs / chips on top.
  - Multi-column product grid with `gutter` spacing (3 to 5 columns depending on resolution).
- **Right Checkout Ledger (Fixed 380px to 440px width)**:
  - Sticky customer identifier & order type.
  - Vertically scrolling live receipt ledger.
  - Fixed bottom financial drawer: Subtotal, Pajak/Diskon, Grand Total, and primary "Bayar" action tile.

### Responsive Reflow Rules
- **Desktop (>= 1280px)**: 12-column foundation or a 65/35 dual-panel split with `gutter-lg` (24px) and `margin-lg` (24px).
- **Standard Desktop / POS Terminal (1024px - 1279px)**: Compact 60/40 split with `gutter` (16px) and `margin` (16px).
- **Tablet Landscape Fallback (< 1024px)**: Order summary collapses into a sticky sliding sheet triggerable via bottom floating action dock.

## Elevation & Depth

This system avoids aggressive multi-layer drop shadows, opting for **tactile borders combined with shallow ambient lift** to ensure clarity under harsh fluorescent retail lights.

- **Level 0 (Flat Canvas / Background)**: `#F8FAFC`. Zero elevation.
- **Level 1 (Product Cards, Ledger Lists, Form Controls)**: `#FFFFFF` surface with a crisp 1px solid border in `#E2E8F0`. Shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`.
- **Level 2 (Hovered Product Cards, Active Category Pills)**: 1px border in `#CBD5E1`. Shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Sticky Checkout Summary, Dropdown Menus)**: `#FFFFFF` surface with `0 10px 15px -3px rgba(15, 23, 42, 0.08)`. Left-side ledger uses a 1px border-left in `#E2E8F0`.
- **Level 4 (Modals, Payment Confirmation Dialogs, Numpad Overlays)**: Surface `#FFFFFF` encased in a backdrop scrim of `rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(2px)`. Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.12)`.

## Shapes

The roundedness language utilizes a balanced modern curvature (Scale 2 - 0.5rem / 8px baseline) that feels approachable and warm without compromising information density.

- **Buttons, Form Inputs, Product Tiles**: `rounded` (8px / 0.5rem). Creates distinct, touch-friendly tactile boundaries.
- **Ledger Sidebar Panels, Modal Windows, Summary Boxes**: `rounded-lg` (16px / 1rem). Softens large structural containers.
- **Quantity Steppers, Action Badges, Category Filter Pills**: Fully rounded pill shapes (`9999px`) to immediately signal interactive toggles and non-data containers.
- **Inner Nested Elements**: When an element sits inside a card with 8px radius, the internal icon badge or thumbnail uses 4px (0.25rem) to maintain geometric balance.

## Components

### 1. Product Cards (Catalog Grid)
- **Container**: White background, 1px solid `#E2E8F0`, 8px radius, 12px internal padding.
- **Image/Thumbnail**: 1:1 aspect ratio, 6px radius, neutral slate fill (`#F1F5F9`) with center containment.
- **Typography**: Product title in `title-md` (`#1E293B`, max 2 lines), stock indicator in `body-sm` (`#64748B`), and unit price in `currency-body` (`#0F172A`).
- **Interaction**: Micro-scale lift on hover. Active click shows a momentary 2px outer ring in `#FFC61A`.

### 2. Live Order Summary Ledger & Item Rows
- **List Structure**: Borderless stacked rows separated by 1px subtle divider lines (`#F1F5F9`).
- **Row Elements**:
  - Name and sub-variant/unit info on the left (`#1E293B`).
  - Integrated Quantity Stepper in the middle.
  - Tabular total calculation aligned right (`#0F172A`).
  - Discard/delete button (trash icon) visible on hover or persistent low-opacity slate red (`#EF4444`).

### 3. Quantity Steppers
- Compact horizontal segment: 32px height.
- Minus and Plus buttons styled with light gray slate backgrounds (`#F1F5F9`), transitioning to active slate (`#E2E8F0`) on press.
- Value displayed between controls using Inter tabular bold, 14px.

### 4. Primary & Secondary Action Buttons
- **Primary ("Bayar / Charge", "Selesai")**: Full-bleed background `#FFC61A`, text `#0F172A` in `label-lg`, 44px to 48px height, 8px radius. Active state: `#E5B014`.
- **Secondary ("Batal", "Tahan Pesanan", "Diskon")**: White background, 1px solid `#CBD5E1`, text `#334155`. Hover: background `#F8FAFC`.
- **Destructive ("Hapus Transaksi")**: White background with 1px `#FECACA` border, text `#DC2626`. Hover: `#FEF2F2`.

### 5. Input Fields & Barcode Scanning Bar
- Height: 44px for comfortable touch/mouse targeting.
- Border: 1.5px solid `#CBD5E1`, background `#FFFFFF`, text `#0F172A`.
- Focus State: Border color `#FFC61A` accompanied by an ambient box-shadow glow: `0 0 0 3px rgba(255, 198, 26, 0.25)`.
- Left icon slot reserved for search magnifying glass or handheld barcode scanner status indicators.

### 6. Transaction Badges & Status Chips
- Height: 24px, pill-shaped (`rounded-full`), horizontal padding of 10px.
- **Lunas / Paid**: Background `#DCFCE7`, text `#15803D`.
- **Pending / QRIS**: Background `#FEF3C7`, text `#B45309`.
- **Habis / Out of Stock**: Background `#FEE2E2`, text `#B91C1C`.

### 7. Quick Tender Numpad & Fast Cash Presets
- Preset cash pill buttons: Nominal amounts (e.g., `Uang Pas`, `Rp 10.000`, `Rp 50.000`, `Rp 100.000`).
- Surface: `#F1F5F9`, border 1px solid `#E2E8F0`, font weight 600. Press effect: instantaneous fill shift to `#FFC61A`.