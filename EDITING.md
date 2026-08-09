# Editing your portfolio without learning JavaScript

Your portfolio is populated from your LinkedIn profile. Most information is stored in `src/data/resume.tsx`.

## Edit your personal information

Open `src/data/resume.tsx`, click the pencil icon, change the required text, and commit the change.

The main fields are:

- `name`, `location`, `description`, and `summary`
- `skills`
- `work`
- `education`
- `projects`
- `hackathons` — this powers the Certifications & Training section
- `contact` — email, phone and social links

Keep quotation marks, commas, brackets and field names unchanged. Replace only the text inside quotation marks.

The only social placeholder still present is `https://youtube.com/@your-channel`. Replace it with your actual YouTube channel URL.

## Organisation and certification logos

Work, Education and Certifications show professional fallback icons while `logoUrl` or `image` is empty.

To add a logo:

1. Upload the logo into the `public` folder.
2. In the relevant entry, set `logoUrl` or `image` to `${BASE_URL}filename.png`.

## Profile picture

Upload your photograph into the `public` folder and name it `picofme.png`. Uploading a new file with the same name replaces the current image.

## Blog posts

Blog posts live in `src/content/blog` and end in `.mdx`.

The easiest method:

1. Open an existing post and copy its contents.
2. In `src/content/blog`, choose **Add file** then **Create new file**.
3. Name it with lowercase words and hyphens, for example `building-an-oil-and-gas-dashboard.mdx`.
4. Paste the copied post and replace its title, date, summary and article.
5. Commit the change.

## Publishing

Every commit to the `master` branch publishes automatically through GitHub Pages. Check the repository's **Actions** tab for the newest green check mark.
