export default function resolveProductionUrl(doc) {
  return `${process.env.SANITY_STUDIO_URL}/api/preview?secret=${process.env.SANITY_STUDIO_SECRET}&slug=${doc.slug.current}`
}
