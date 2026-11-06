# Portfolio site — working notes

Built on Strata (HTML5 UP, CC BY 3.0). Keep the "Design: HTML5 UP" footer credit.

## Files you edit
- `index.html` — home page. Intro copy, project tiles, contact.
- `projects/<slug>.html` — one page per project. Replace every [bracketed] item.
- `projects/_template.html` — copy this to add a new project.
- `assets/css/custom.css` — all your styling. Accent color is the `--accent` variable at the top.
- `index.strata-original.html` — untouched template, for reference. Safe to delete.

## Files you drop in
- `images/avatar.jpg` — your headshot (or delete the avatar `<a>` in each header).
- `images/bg.jpg` — header background photo, 1920px+ wide.
- `images/projects/<slug>.jpg` — tile thumbnails. Current ones are Strata placeholders. Aim for a consistent ratio (the placeholders are 1:1).
- `samples/<slug>/` — each project's published output (Storyline folder, HTML export, etc.).
- `uploads/kimberly-chapman-resume.pdf` — current resume.

## Adding a project
1. Copy `projects/_template.html` to `projects/<slug>.html`, fill in the brackets.
2. Add a tile to `index.html` inside `<section id="two">` (copy an existing `<article>`).
3. Update the prev/next links on the neighboring project pages.

## What changed in the template
- `assets/js/main.js`: lightbox gallery removed (tiles link to pages now).
- `index.html`: jquery.poptrox script removed, custom.css added.
