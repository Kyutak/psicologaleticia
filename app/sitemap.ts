import type { MetadataRoute } from 'next';

const baseUrl = 'https://psicologaleticiafonseca.com.br';

const posts = [
  'quando-o-ambiente-tambem-pesa',
  'tenho-medo-de-ir-para-um-psicologo',
  'voce-nao-precisa-dar-conta-de-tudo',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    ...posts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
