import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

/**
 * 48. SEO Route Metadata Manager
 * Updates document title, meta description, canonical URL, Open Graph, and Twitter tags on route change.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogImage = 'https://abdulgaffarandsons.pk/images/hero-wooden-villa.webp',
}) => {
  useEffect(() => {
    const fullTitle = `${title} | Abdul Gaffar & Sons — Interior Architecture & Luxury Design Studio`;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', `https://abdulgaffarandsons.pk${canonicalPath}`);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);
    setMeta('link[rel="canonical"]', 'href', `https://abdulgaffarandsons.pk${canonicalPath}`);
  }, [title, description, canonicalPath, ogImage]);

  return null;
};
