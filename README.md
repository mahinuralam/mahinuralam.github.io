# mahinuralam.github.io

Personal academic homepage of **Md Mahinur Alam**, Ph.D. student in Information Systems at UMBC.
Live at <https://mahinuralam.github.io/>.

It is a single static page (plain HTML, CSS and JavaScript). There is no build step, no Jekyll
and no npm: what you see in these files is exactly what GitHub Pages serves.

## Files

```
index.html                  the whole page: profile, about, news, research, publications, ...
404.html                    "page not found" page
assets/css/style.css        all styling; colours and fonts are tokens at the top
assets/js/main.js           theme toggle, menu, highlight filters, publication search, copy email
images/profile.jpg          profile photo (square, 480x480 or larger)
images/highlights/*.svg     figures on the Research Highlights cards
images/social-card.png      1200x630 preview image shown when the link is shared
images/favicon.svg|png      tab icon
files/Md_Mahinur_Alam_CV.pdf  the CV behind the "CV" button
```

## Common edits (all in `index.html`)

Every section starts with a comment like `<!-- ===== NEWS -->`, so search for the section name.

- **Add a news item:** copy one `<li class="news__item">…</li>` block to the top of the News list
  and change the date, the badge (`badge--paper`, `badge--award`, `badge--milestone`) and the text.
  All items stay in one list that scrolls inside its box.
- **Add a publication:** copy a `<li class="pub">…</li>` block into the right group.
  The coloured label is the `tag` class: `tag--journal`, `tag--conf`, `tag--workshop`,
  `tag--review`, `tag--revision`, `tag--prep`, `tag--domestic`. Wrap your own name in
  `<span class="me">…</span>`. A paper without a link uses `<span class="pub__title">` instead of
  `<a class="pub__title">`. Then update the count next to the search box (`40 papers and manuscripts`).
- **Add a research highlight:** copy an `<article class="hl">…</article>` block. `data-cat` must be
  `vision`, `learning` or `twins` (the filter buttons), and update the numbers on the buttons.
- **Use a real paper figure:** put a PNG or JPG in `images/highlights/` and point the card's
  `<img src>` at it. A 16:10 image fits best.
- **Update Google Scholar numbers:** search for `131` (citations) and update the line under the
  Publications heading, including the month.
- **Replace the CV:** export your CV to PDF and save it over `files/Md_Mahinur_Alam_CV.pdf`.
- **Remove the internship banner:** delete the `<div class="callout">…</div>` block in About.

## Publishing

GitHub Pages serves this repository straight from the `main` branch (Settings → Pages →
"Deploy from a branch", `main` / root). Commit and push to `main`, and the live site updates within
a minute or two. The empty `.nojekyll` file tells GitHub Pages to serve the files as they are.

To preview locally, run `python3 -m http.server` in this folder and open <http://localhost:8000>.
