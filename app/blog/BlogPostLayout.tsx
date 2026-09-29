'use client';

import { ArrowLeft, ArrowUpRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const whatsappUrl = 'https://wa.me/5511953249631?text=Olá%2C%20Letícia.%20Gostaria%20de%20saber%20mais%20sobre%20a%20terapia.';
const instagramUrl = 'https://www.instagram.com/leticiafonseca.psic/';

export default function BlogPostLayout({
  category,
  title,
  excerpt,
  children,
}: {
  category: string;
  title: string;
  excerpt: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="blog-header">
        <Link href="/" className="brand">Letícia <em>Fonseca</em></Link>
        <Link href="/#blog" className="back-link"><ArrowLeft size={15} /> Voltar ao site</Link>
      </header>
      <article className="article-shell">
        <span className="section-label">{category}</span>
        <h1>{title}</h1>
        <p className="article-lead">{excerpt}</p>
        <div className="article-body">{children}</div>
      </article>
      <section className="article-cta">
        <h2>Se algo aqui resonou com você,<br /><em>talvez seja o momento de conversarmos.</em></h2>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">Iniciar processo no WhatsApp <ArrowUpRight size={17} /></a>
      </section>
      <footer className="article-footer">
        <Link href="/" className="footer-brand">Letícia <em>Fonseca</em></Link>
        <a href={instagramUrl} target="_blank" rel="noreferrer">@leticiafonseca.psic</a>
      </footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com Letícia pelo WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}
