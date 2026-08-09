# Editing your portfolio without learning JavaScript

You can make normal content changes directly on GitHub. Open the file, click the pencil icon, replace the placeholder text, then click **Commit changes**.

## 1. Personal information and projects

Edit `src/data/resume.tsx`.

Use your browser's Find command to locate these placeholder values:

- `Adeyomzy` — your displayed name
- `Nigeria` — your location
- `Aspiring Data Analyst...` — the short introduction beneath your name
- `your-email@example.com` — replace both occurrences
- `your-linkedin-here` — replace with your LinkedIn profile ending
- `Company Name` and `Organisation Name` — demo work-experience entries to replace
- `University Name` and `Training Provider` — demo education entries to replace
- `+2340000000000` — replace both occurrences with your phone number, including country code
- `your-channel` — replace with your YouTube channel handle
- `Sales Performance Dashboard`, `Customer Churn Analysis`, and `Operations Reporting Workbook` — demo projects to replace
- `Certification Name` and `Course or Training Name` — certification timeline placeholders
- `Issuing Organisation` and `Training Provider` — replace with the organisation that issued each credential
- `Year earned` and `Year completed` — replace with the relevant dates
- `View credential` links — replace `href: "#"` with the public verification URL for each certificate

Keep quotation marks, commas, brackets, and labels unchanged. Replace only the words inside quotation marks. Work and Education use a professional fallback icon while `logoUrl` is empty. Later, you can place an organisation logo in `public` and use a value such as `${BASE_URL}my-school-logo.png`.

## 2. Certification logos

The Certifications & Training timeline shows an award icon automatically while `image` is empty. To use an issuer logo, upload it to `public` and change the entry to a value such as `image: "issuer-logo.png"` and place that file in `public`.

## 3. Profile picture

Upload your photo into the `public` folder and name it `picofme.png`. Uploading a new file with the same name replaces the demo photo.

## 4. Blog posts

Blog posts live in `src/content/blog` and end in `.mdx`.

The easiest method:

1. Open an existing post.
2. Copy its full contents.
3. In `src/content/blog`, choose **Add file** then **Create new file**.
4. Name it with lowercase words and hyphens, for example `my-first-power-bi-project.mdx`.
5. Paste the copied post and replace its title, date, summary, and article text.
6. Commit the change.

A post begins like this:

```mdx
---
title: "My First Power BI Project"
publishedAt: "2026-08-09"
summary: "What I learned while building a sales dashboard."
---

Write the article here.
```

## 5. Site settings

Edit `src/data/config.ts` only when you need to change the site address, text size, or colours. Leave this file alone for ordinary content changes.

## Publishing

Every commit to the `master` branch starts the GitHub Pages workflow automatically. Check the repository's **Actions** tab for a green check mark.
