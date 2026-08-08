# Trustitched image replacement guide

All website content images are stored in this folder and rendered with Next.js `Image` optimization.

To replace an image without editing code, overwrite the existing file with the same filename and a similar aspect ratio. PNG, JPG, and WebP files are supported. If you change a filename or format, update the corresponding image configuration near the top of its page file, or the Portfolio project entry in `src/data/portfolio-projects.js`.

## Page folders

- `home/` contains the five homepage-only images.
- `embroidery/` contains the three Embroidery Digitizing page images.
- `vector/` contains the four Vector Art page images.
- `portfolio/` contains the twelve gallery projects and two Portfolio-only quality images.
- `social/` contains the shared 1200×630 Open Graph and Twitter preview image.
- `brand/` contains the approved full logo and standalone icon. The active files are `trustitched-logo.png` (1600×1043, transparent) and `trustitched-icon.png` (262×262, transparent).

The Portfolio gallery metadata, including paths and alt text, is stored in `src/data/portfolio-projects.js`. The Contact page currently has no content images. The header and footer use the approved files in `brand/`; preserve their filenames and approximate aspect ratios when replacing them.

These are flattened website images rather than layered PSD or AI source files. Editable means each image can be replaced independently without changing another page.
