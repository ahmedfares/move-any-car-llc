# Maintenance guide

This site is intentionally static:

- No WordPress
- No database
- No paid builder
- No server functions
- No monthly hosting bill on Cloudflare Pages

## Common edits

### Change phone number

Update these files:

- `index.html`
- `llms.txt`
- `business-profile.json`

Search for:

```text
4702224927
(470) 222-4927
+1-470-222-4927
```

### Add a review

Update:

- The reviews section in `index.html`
- The `review` array inside the JSON-LD script in `index.html`, if the review should be machine-readable

### Add service areas

Update:

- Visible city list in `index.html`
- `areaServed` in JSON-LD inside `index.html`
- `llms.txt`
- `business-profile.json`

### Add photos

Put new images in:

```text
public/images/
```

Then reference them from `index.html`.

## SEO after every launch

1. Test `https://moveanycarus.com/` in Google Search Console URL Inspection.
2. Re-submit `https://moveanycarus.com/sitemap.xml`.
3. Test structured data with Google Rich Results Test.
4. Confirm `robots.txt`, `llms.txt`, and `business-profile.json` load publicly.

## Recommended next enhancements

- Add individual service pages.
- Add focused city pages for real service areas.
- Add more first-party review quotes.
- Add compressed WebP/AVIF image versions.
- Add Cloudflare Web Analytics.

