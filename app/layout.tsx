import type { Metadata } from 'next';
import { Lora, Playfair_Display } from 'next/font/google';

import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {

  metadataBase: new URL('https://psicologaleticiafonseca.com.br'),

  alternates: {
    canonical: '/',
  },

  
  title: {
    default: 'Letícia Fonseca | Psicóloga',
    template: '%s | Letícia Fonseca',
  },

  description:
    'Psicoterapia online para mulheres que vivem com ansiedade, autocobrança, culpa e a sensação de nunca serem suficientes. Um espaço para se conhecer e construir uma relação mais leve consigo mesma.',
    
  icons: {
    icon: [
      {
        url: '/favicon-light.png',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.png',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },

  keywords: [
    'psicóloga',
    'psicóloga online',
    'psicoterapia online',
    'terapia online',
    'terapia para mulheres',
    'psicóloga para mulheres',
    'TCC',
    'terapia cognitivo-comportamental',
    'ansiedade',
    'autocobrança',
    'saúde emocional',
    'Letícia Fonseca',
  ],

  authors: [
    {
      name: 'Letícia Fonseca',
    },
  ],

  creator: 'Letícia Fonseca',

  publisher: 'Letícia Fonseca Psicóloga',

  applicationName: 'Letícia Fonseca Psicóloga',

  category: 'health',


  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://psicologaleticiafonseca.com.br',
    title: 'Letícia Fonseca | Psicóloga',
    description:
      'Psicoterapia online para mulheres que vivem com ansiedade, autocobrança, culpa e a sensação de nunca serem suficientes.',
    siteName: 'Letícia Fonseca Psicóloga',
    images: [
      {
        url: '/assets/imagem1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Letícia Fonseca — Psicóloga',
      },
    ],
  },


  twitter: {
    card: 'summary_large_image',
    title: 'Letícia Fonseca | Psicóloga',
    description:
      'Psicoterapia online para mulheres que vivem com ansiedade, autocobrança, culpa e a sensação de nunca serem suficientes.',
  },


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/icon-light.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/icon-dark.png" media="(prefers-color-scheme: dark)" />
      </head>

      <body>{children}</body>
    </html>
  );
}

