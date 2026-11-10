import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const sanityConfigured = Boolean(projectId && projectId !== 'replace-me');

export const client = createClient({
  projectId: projectId || 'replace-me',
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01',
  useCdn: true,
});

export const projectsQuery = `*[_type == "project" && visibility != "draft"] | order(order asc) {
  _id, titleFr, titleEn, "slug": slug.current, categoryFr, categoryEn,
  summaryFr, summaryEn, status, visibility, website,
  "logoUrl": logo.asset->url, "coverUrl": cover.asset->url
}`;
export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug && visibility != "draft"][0] {
  ..., "logoUrl": logo.asset->url, "coverUrl": cover.asset->url,
  "galleryUrls": gallery[].asset->url
}`;
export const settingsQuery = `*[_type == "siteSettings"][0] {
  ..., "logoUrl": logo.asset->url, "socialImageUrl": defaultSocialImage.asset->url
}`;
