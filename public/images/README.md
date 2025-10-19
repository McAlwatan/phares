# Image Assets Directory

Place all project images here. The Figma asset imports have been converted to use standard file paths.

## Required Images

Extract all images from Figma and place them in this directory with descriptive names.

### Naming Convention
Use descriptive, kebab-case names:
- `rifaly-hero.png`
- `nendiwe-logo.png`
- `tequila-island-banner.png`
- etc.

### Original Figma Asset Mapping

The code previously used `figma:asset/[hash].png` imports. These have been replaced with `/images/[name].png` paths throughout the codebase.

When you export images from Figma:
1. Download each asset
2. Rename it to something descriptive
3. Place it in this `/public/images/` directory
4. The imports in the code will automatically work

Example:
```tsx
// Old: import img from "figma:asset/7cf7b63ed0e558ba9ade44fd2b4887f51df6fbbf.png"
// New: <img src="/images/rifaly-hero.png" alt="..." />
```
