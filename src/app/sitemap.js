 
export default function sitemap() {
  return [
    {
      url: 'https://www.giornatatop.it',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
   /* {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    */
  ]
}