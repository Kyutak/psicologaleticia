'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  X,
} from 'lucide-react';

const googleReviewUrl = '#';
const whatsappUrl = 'https://wa.me/5511939007750?text=Olá%2C%20Letícia.%20Gostaria%20de%20saber%20mais%20sobre%20a%20terapia.';
const instagramUrl = 'https://www.instagram.com/leticiafonseca.psic/';

const recognitionPoints = [
  'Sente que precisa ser sempre boa, gentil e agradável para se sentir aceita ou acolhida.',
  'Se perde dentro das relações, entregando mais do que recebe e se anulando pelo outro.',
  'Carrega a sensação de nunca ser suficiente, por mais que se esforce ou conquiste.',
  'Convive com a síndrome do impostor: acha que a qualquer momento vão descobrir que “não é tão boa assim”.',
  'Entende que precisa se priorizar, mas sempre tem alguém que parece precisar mais de você.',
  'Lida com ansiedade, oscilações intensas de humor ou uma tristeza que não sabe nomear.',
];

const pillars = [
  ['01', 'Formulação de caso', 'Entendemos juntas a origem dos seus padrões, não olhamos apenas para os sintomas, mas para a história por trás deles.'],
  ['02', 'Reestruturação cognitiva', 'Identificamos as crenças que sustentam o “eu não sou suficiente” e trabalhamos para flexibilizá-las.'],
  ['03', 'Regulação emocional', 'Ferramentas concretas para lidar com ansiedade e oscilações de humor no dia a dia.'],
  ['04', 'Autonomia real', 'O objetivo é que você finalize o processo sabendo reconhecer seus próprios padrões, sem depender de mim para isso.'],
];

const steps = [
  ['01', 'Contato inicial', 'Você me chama no WhatsApp, conta o que te trouxe até aqui e alinhamos horários e valores.'],
  ['02', 'Primeiras sessões', 'Escutamos sua história com calma, mapeamos padrões, crenças e o que sustenta o que você sente hoje.'],
  ['03', 'Construção do processo', 'Definimos juntas os objetivos da terapia e passamos a trabalhar com estratégias para o seu momento.'],
];

const faqs = [
  ['Por que fazer terapia e não tentar resolver sozinha?', 'Você provavelmente já tentou de tudo: livros, conversas com amigas, força de vontade. A terapia oferece um olhar técnico e neutro, com métodos validados cientificamente, para chegar às causas dos padrões que se repetem, não só aos sintomas.'],
  ['Como funciona o atendimento online?', 'As sessões acontecem por videochamada, com a mesma estrutura e sigilo de um atendimento presencial. Você recebe o link com antecedência e realiza a sessão de onde estiver.'],
  ['Qual a duração e frequência das sessões?', 'As sessões têm 50 minutos e, geralmente, frequência semanal, especialmente no início do processo, para dar consistência ao trabalho.'],
  ['Você atende convênio?', 'Não atendo convênio, mas emito recibo para reembolso. Consulte seu plano sobre as condições.'],
];

const posts = [
  { slug: 'quando-o-ambiente-tambem-pesa', category: 'Cuidado e contexto', title: 'Quando o ambiente também pesa: entendendo a terapia cognitiva ambiental', excerpt: 'Nem tudo começa dentro de você. Às vezes, olhar para os lugares e relações ao redor também é uma forma de cuidado.' },
  { slug: 'tenho-medo-de-ir-para-um-psicologo', category: 'Primeiros passos', title: 'Tenho medo de ir para um psicólogo', excerpt: 'O medo de começar pode dizer muito sobre o quanto você precisou se proteger. E você não precisa chegar pronta.' },
  { slug: 'voce-nao-precisa-dar-conta-de-tudo', category: 'Autocobrança', title: 'Você não precisa dar conta de tudo para merecer descanso', excerpt: 'Um lembrete gentil para quem transformou força em obrigação e esqueceu que também pode receber cuidado.' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Letícia Fonseca, início">
          <img src="assets/logo.png" alt="Letícia Fonseca Psicóloga" />
        </a>
        <button className="mobile-menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={26} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre mim</a>
          <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar conversa <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-copy reveal-up">
          <SectionLabel>Psicoterapia online para mulheres</SectionLabel>
          <h1>Você não precisa ser forte o tempo todo.</h1>
          <p className="hero-support">Terapia para mulheres que aprenderam a ser boas demais, a dar conta de tudo e a duvidar do próprio valor, mesmo fazendo tudo certo. Um espaço para parar de se cobrar e começar a se conhecer.</p>
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Agende sua consulta <ArrowUpRight size={17} /></a>
          <div className="hero-note"><span className="note-dot" /> Atendimento online para todo o Brasil</div>
        </div>
        <div className="hero-portrait reveal-up delay-one">
          <div className="portrait-frame"><img src="/assets/imagem1.jpeg" alt="Letícia Fonseca em seu consultório" /></div>
          <div className="portrait-caption"><span>Letícia Fonseca</span><small>Psicóloga · CRP 06/223688</small></div>
          <div className="hero-stamp"><Sparkles size={16} /><span>um lugar para<br />voltar para si</span></div>
        </div>
      </section>

      <section className="how-strip" aria-label="Como funciona o acompanhamento">
        <div className="how-title">Como funciona o<br /><em>acompanhamento?</em></div>
        <div className="how-item"><span className="how-icon"><Play size={14} /></span><div><h3>Sessões semanais</h3><small>Duração de 50 minutos.</small></div></div>
        <div className="how-item"><span className="how-icon"><MessageCircle size={17} /></span><div><h3>Suporte próximo</h3><small>WhatsApp para dúvidas pontuais.</small></div></div>
        <div className="how-item"><span className="how-icon"><Check size={17} /></span><div><h3>Processo individual</h3><small>Cada caminho respeita a sua história.</small></div></div>
      </section>

      <section className="recognition-section section-shell">
        <div className="section-intro"><SectionLabel>Talvez você se reconheça aqui</SectionLabel><h2>Culpa, ansiedade <em>e o peso de não se sentir suficiente</em></h2></div>
        <div className="recognition-grid">{recognitionPoints.map((point, index) => <article className="recognition-card" key={point}><div className="recognition-card-inner"><div className="recognition-card-front"><span className="card-number">0{index + 1}</span><p>{point}</p><ArrowDownRight size={17} /></div><div className="recognition-card-back"><span className="card-number">0{index + 1}</span><h3>Talvez seja hora de olhar para isso.</h3><p>Você não precisa continuar carregando tudo sozinha.</p></div></div></article>)}</div>
      </section>

      <section id="processo" className="approach-section">
        <div className="section-shell approach-layout"><div className="approach-copy"><SectionLabel>Como eu trabalho</SectionLabel><h2>Ciência e cuidado, <em>sempre andam juntas por aqui</em></h2><p>Cada estratégia utilizada em sessão é escolhida com base em evidências e pensada a partir da sua história. O processo é construído junto, no seu tempo.</p><div className="quote-block">“O objetivo não é te ensinar a suportar, controlar ou não sentir mais. É te ajudar a construir uma relação mais leve com você mesma.”</div></div><div className="pillar-grid">{pillars.map(([number, title, text]) => <article className="pillar-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="steps-section section-shell"><div className="steps-heading"><SectionLabel>Primeiros passos</SectionLabel><h2>Como começa o processo</h2><p>Nada de fórmula mágica: um caminho estruturado, para que você saiba exatamente onde está pisando.</p></div><div className="steps-list">{steps.map(([number, title, text]) => <article className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={19} /></article>)}</div></section>

      <section id="sobre" className="about-section section-shell"><div className="about-visual"><div className="about-image"><img src="/assets/imagem2.jpeg" alt="Letícia Fonseca sorrindo" /></div><a href="/assets/diploma.pdf" target="_blank" rel="noreferrer" className="credential-card"><img src="/assets/diploma.png" alt="Diploma de Bacharel em Psicologia" /></a></div><div className="about-copy"><SectionLabel>Sobre mim</SectionLabel><h2>Um olhar técnico,<br /><em>sem perder o humano</em></h2><p>Sou Letícia Fonseca, psicóloga clínica, e acredito que terapia não precisa ser um lugar de respostas prontas. Ela pode ser um espaço de curiosidade, segurança e construção.</p><p>Minha prática é voltada para mulheres que se acostumaram a se adaptar, se cobrar e esconder o que sentem. A partir da Terapia Cognitivo-Comportamental e da Prática Baseada em Evidências, construímos um caminho que respeita sua história e seu ritmo.</p><ul className="about-list"><li><Check size={16} /> CRP 06/223688</li><li><Check size={16} /> Atendimento online em todo o Brasil</li><li><Check size={16} /> Formação contínua em TCC e prática baseada em evidências</li></ul></div></section>


      <section className="final-cta"><div><SectionLabel>Um convite para você</SectionLabel><h2>Você já carrega peso demais.<br /><em>Aqui, pode deixar de carregar tudo sozinha.</em></h2></div><a className="light-button" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar conversa inicial <ArrowUpRight size={17} /></a></section>

      <section id="blog" className="blog-section"><div className="section-shell"><div className="blog-heading"><div><SectionLabel>Do consultório para a vida</SectionLabel><h2>Conversas que podem<br /><em>acompanhar você</em></h2></div><a href="#blog-list" className="text-link">Ver todos os textos <ArrowUpRight size={16} /></a></div><div id="blog-list" className="blog-grid">{posts.map((post, index) => <a href={`/blog/${post.slug}`} className="blog-card" key={post.slug}><div className={`blog-art art-${index + 1}`}><span>{index === 0 ? 'contexto' : index === 1 ? 'começos' : 'respiro'}</span></div><div className="blog-card-content"><SectionLabel>{post.category}</SectionLabel><h3>{post.title}</h3><p>{post.excerpt}</p><span className="read-link">Ler artigo <ArrowUpRight size={15} /></span></div></a>)}</div></div></section>

      <section id="faq" className="faq-section section-shell"><div className="faq-heading"><SectionLabel>Perguntas frequentes</SectionLabel><h2>Antes de começar,<br /><em>talvez você queira saber</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? 'faq-item is-open' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="reviews-section"><div className="section-shell"><div className="reviews-top"><div className="reviews-heading"><SectionLabel>Também no Instagram</SectionLabel><h2>Reflexões para <br /><em>além da terapia</em></h2><p>Conteúdos sobre ansiedade, autocobrança, relacionamentos e saúde emocional para acompanhar você também no dia a dia.</p></div><div className="instagram-container"><iframe src="https://www.instagram.com/leticiafonseca.psic/embed" className="instagram-frame" scrolling="no" title="Instagram de Letícia Fonseca" /></div></div><div className="review-box"><div className="review-copy"><SectionLabel>Sua experiência importa</SectionLabel><h3>Já fez terapia comigo? <em>Deixe sua avaliação.</em></h3><p>Se você se sentir confortável, sua experiência pode ajudar outras mulheres a conhecerem meu trabalho.</p></div><a href={googleReviewUrl} target="_blank" rel="noreferrer" className="primary-button">Deixe sua avaliação <ArrowUpRight size={17} /></a></div></div></section>



      <footer className="site-footer"><div className="footer-main"><div><a href="#inicio" className="footer-brand">Letícia <em>Fonseca</em></a><p>Psicoterapia para voltar a<br />se escutar com gentileza.</p></div><div className="footer-links"><div><span>Explorar</span><a href="#sobre">Sobre mim</a><a href="#processo">Como funciona</a><a href="#blog">Blog</a></div><div><span>Contato</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href="mailto:contato@leticiafonseca.com">E-mail</a></div></div><a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> @leticiafonseca.psic <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 Letícia Fonseca Psicóloga</span><span>CRP 06/223688 · Atendimento online</span><span>Privacidade e sigilo</span></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com Letícia pelo WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}
