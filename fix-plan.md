# Fix Plan for Program Timeline Section

## Problem
The "Attività/Programma" (Activities/Program) section has disappeared due to overly aggressive CSS changes that are hiding essential elements.

## Root Cause
Our current CSS rules are too broad and are hiding elements with classes that are essential for the section to display properly. Specifically, this rule is problematic:

```css
#program .group > [class*="bg-gradient-to-t"],
#program .group > [class*="from-black"],
#program .group > [class*="bg-black"],
#program .group .absolute.bottom-0[class*="bg-gradient-to-t"],
#program .group > [class*="bg-black/20"],
#program .group > [class*="bg-gray"],
#program .group > [class*="dark:"] {
  display: none !important;
}
```

## Solution Approach
1. **Remove overly aggressive CSS rules** that are hiding essential elements
2. **Create more targeted CSS** that only affects specific overlay elements causing darkening
3. **Test incrementally** to ensure the section remains visible
4. **Focus on hover effects** without breaking the base layout

## Specific CSS Changes Needed

### 1. Remove Problematic Rules
Remove the broad `display: none !important` rules that are hiding essential elements.

### 2. Replace with Targeted Hover Fixes
Create more specific CSS that only targets the overlay elements that appear on hover:

```css
/* Target only specific overlay elements that cause darkening */
#program .group:hover > .absolute.inset-0.bg-gradient-to-t,
#program .group:hover > [class*="from-black"].bg-gradient-to-t,
#program .group:hover > [class*="bg-black"].bg-gradient-to-t {
  display: none !important;
}

/* Reduce opacity of overlay effects instead of hiding them completely */
#program .group:hover .group-hover\:opacity-100 {
  opacity: 0.3 !important;
}

/* Ensure hover effects are subtle */
#program .group:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
}
```

### 3. Preserve Essential Elements
Ensure we don't hide elements that are needed for the base layout:

```css
/* Don't hide essential layout elements */
#program .group > [class*="bg-"]:not(.bg-gradient-to-t):not([class*="from-black"]):not([class*="bg-black"]) {
  display: block !important;
}
```

## Implementation Steps
1. Remove the overly aggressive CSS rules from index.css
2. Add the more targeted CSS rules
3. Test to ensure the section is visible
4. Test hover effects to ensure they're improved
5. Make any necessary adjustments

## Success Criteria
- The "Attività/Programma" section is fully visible
- Hover effects are improved without dark overlays
- No essential functionality or layout is broken
- The section looks professional and functions as expected