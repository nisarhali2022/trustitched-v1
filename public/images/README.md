# Trustitched image replacement guide

All website content images are stored in this folder as WebP files and rendered with Next.js `Image` optimization.

To replace an image without editing code, export it as WebP, overwrite the existing file with the same filename and a similar aspect ratio, and preserve transparency where required. If you change a filename, update the corresponding image configuration near the top of its page file, or the Portfolio project entry in `src/data/portfolio-projects.js`.

## Page folders

- `home/` contains the five homepage-only images.
- `embroidery/` contains the three Embroidery Digitizing page images.
- `vector/` contains the four Vector Art page images.
- `portfolio/` contains the twelve gallery projects and two Portfolio-only quality images.
- `social/` contains the shared 1200×630 Open Graph and Twitter preview image. It intentionally remains PNG for broad crawler compatibility.
- `brand/` contains the approved full logo and standalone icon. The active files are `trustitched-logo.webp` (1600×1043, transparent) and `trustitched-icon.webp` (262×262, transparent).

The Portfolio gallery metadata, including paths and alt text, is stored in `src/data/portfolio-projects.js`. The Contact page currently has no content images. The header and footer use the approved files in `brand/`; preserve their filenames and approximate aspect ratios when replacing them.

These are flattened WebP website images rather than layered PSD or AI source files. Editable means each image can be replaced independently without changing another page.
