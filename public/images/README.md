# Trustitched image replacement guide

All website content images are stored in this folder and rendered with Next.js `Image` optimization.

To replace an image without editing code, overwrite the existing file with the same filename and a similar aspect ratio. PNG, JPG, and WebP files are supported. If you change a filename or format, update the corresponding image configuration near the top of its page file, or the Portfolio project entry in `src/data/portfolio-projects.js`.

## Page folders

- `home/` contains the five homepage-only images.
- `embroidery/` contains the three Embroidery Digitizing page images.
- `vector/` contains the four Vector Art page images.
- `portfolio/` contains the twelve gallery projects and two Portfolio-only quality images.
- `social/` contains the shared 1200Ã—630 Open Graph and Twitter preview image.

The Portfolio gallery metadata, including paths and alt text, is stored in `src/data/portfolio-projects.js`. The Contact page currently has no content images. The header brand mark and decorative page patterns are built with text and CSS, so they do not require image files.

These are flattened website images rather than layered PSD or AI source files. Editable means each image can be replaced independently without changing another page.
