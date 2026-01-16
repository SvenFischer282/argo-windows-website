# SEO Maintenance Guide

This document provides instructions for maintaining the SEO improvements implemented in this project.

## 1. Meta Tags

All pages in this application use `react-helmet-async` to manage meta tags (title and description). When creating a new page, make sure to add a `Helmet` component with a unique and descriptive title and meta description.

**Example:**

```jsx
import { Helmet } from "react-helmet-async";

const NewPage = () => {
  return (
    <div>
      <Helmet>
        <title>New Page Title - ARGO SNV</title>
        <meta
          name="description"
          content="A unique and descriptive meta description for the new page."
        />
      </Helmet>
      {/* Page content */}
    </div>
  );
};

export default NewPage;
```

## 2. Sitemap

The `sitemap.xml` file is located in the `public` directory. When adding a new page, make sure to add a new `<url>` entry to the sitemap.

**Example:**

```xml
<url>
  <loc>https://www.argosnv.sk/new-page</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <priority>0.80</priority>
</url>
```

## 3. Robots.txt

The `robots.txt` file is located in the `public` directory. If you need to disallow certain pages from being crawled, add a `Disallow` rule to this file.

**Example:**

```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://www.argosnv.sk/sitemap.xml
```
