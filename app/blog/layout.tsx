import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog — Letícia Fonseca Psicóloga',
  description: 'Conversas sobre saúde mental, autocobrança e o começo do processo terapêutico.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className={inter.className}>{children}</div>;
}
