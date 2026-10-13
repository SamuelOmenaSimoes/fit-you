import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin, Menu, MessageCircle, Phone, Mail, X, Plus } from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import musculacao from "@/assets/musculacao.jpg";
import funcional from "@/assets/funcional.jpg";
import aerobico from "@/assets/aerobico.jpg";
import impacto from "@/assets/impacto.jpg";
import cuidado from "@/assets/cuidado.jpg";
import ventosa from "@/assets/ventosa.jpg";
import bandagem from "@/assets/bandagem.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fit You Studio — Treinamento individualizado em Mogi das Cruzes" },
      {
        name: "description",
        content:
          "Musculação, funcional, aeróbico e serviços de cuidado corporal com acompanhamento individualizado. Fit You Studio, Mogi das Cruzes — SP.",
      },
      { property: "og:title", content: "Fit You Studio — Seu treino. Seu ritmo. Sua evolução." },
      {
        property: "og:description",
        content: "Treinamento especializado e individualizado, baseado em evidências. Mogi das Cruzes — SP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA_NUMBER = "5511981998215";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Olá! Conheci a Fit You pelo site e gostaria de saber mais sobre os treinamentos e serviços.",
)}`;
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Avenida São Paulo, 1331, Mogi das Cruzes - SP");
const MAPS_EMBED =
  "https://www.google.com/maps?q=" + encodeURIComponent("Avenida São Paulo, 1331, Mogi das Cruzes - SP") + "&output=embed";

const NAV = [
  ["Início", "#inicio"],
  ["O Studio", "#studio"],
  ["Treinamentos", "#treinamentos"],
  ["Serviços", "#servicos"],
  ["Metodologia", "#metodologia"],
  ["Contato", "#contato"],
] as const;

const TRAININGS = [
  { n: "01", t: "Musculação", d: "Treinamento de força estruturado de acordo com seus objetivos e características.", img: musculacao },
  { n: "02", t: "Funcional", d: "Movimento, força, coordenação e condicionamento em uma proposta dinâmica de treinamento.", img: funcional },
  { n: "03", t: "Aeróbico", d: "Treinamento voltado ao condicionamento e à construção de uma rotina ativa.", img: aerobico },
];

const STEPS = [
  ["01", "Entender", "Conhecer objetivos, necessidades e particularidades."],
  ["02", "Planejar", "Construir uma estratégia coerente com cada pessoa."],
  ["03", "Treinar", "Executar com orientação e acompanhamento."],
  ["04", "Evoluir", "Acompanhar o processo e adaptar quando necessário."],
];

const SERVICES = [
  { t: "Reabilitação", d: "Parte dos serviços oferecidos pela Fit You, conduzida com atenção individualizada e respeito ao momento de cada pessoa.", img: impacto },
  { t: "Liberação miofascial", d: "Técnica manual utilizada dentro da nossa proposta de cuidado corporal individualizado.", img: cuidado },
  { t: "Bandagem funcional", d: "Recurso utilizado de acordo com as necessidades de cada pessoa.", img: bandagem },
  { t: "Acupuntura", d: "Uma das práticas disponíveis no Studio, sempre com atendimento individualizado.", img: ventosa },
  { t: "Massagem", d: "Um momento de cuidado corporal, atenção e bem-estar.", img: cuidado },
  { t: "Ventosaterapia", d: "Uma das técnicas oferecidas pela Fit You dentro de sua proposta de cuidado.", img: ventosa },
];

// PLACEHOLDER: substituir por fotos reais do espaço da Fit You Studio.
const GALLERY = [hero, funcional, musculacao, aerobico];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/85 py-3 backdrop-blur-md" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
        <a href="#inicio" className="shrink-0">
          <img src={logo} alt="Fit You Fitness Studio" className={`w-auto transition-all ${scrolled ? "h-11" : "h-14"}`} />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-foreground/75 transition-colors hover:text-wine">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden bg-wine px-5 py-3 text-xs font-bold tracking-[0.18em] text-primary-foreground transition hover:bg-wine-deep lg:inline-block"
        >
          AGENDE UMA VISITA
        </a>
        <button aria-label="Abrir menu" onClick={() => setOpen(true)} className="text-wine lg:hidden">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-wine-deep p-6 text-primary-foreground lg:hidden">
          <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="self-end">
            <X />
          </button>
          <nav className="mt-10 flex flex-col gap-6">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="display text-4xl">
                {l}
              </a>
            ))}
          </nav>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="mt-auto bg-gold px-6 py-4 text-center text-xs font-bold tracking-[0.2em] text-graphite">
            AGENDE UMA VISITA
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-sand pt-28 lg:min-h-screen lg:pt-0">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:min-h-screen lg:grid-cols-[45fr_55fr]">
        <div className="rise relative z-10 py-10 lg:py-32">
          <p className="eyebrow">Fit You • Fitness Studio</p>
          <h1 className="display mt-6 text-5xl text-graphite sm:text-6xl xl:text-7xl">
            Seu treino.
            <br />
            Seu ritmo.
            <br />
            <span className="serif-accent text-wine">Sua evolução.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Treinamento especializado e individualizado, com uma abordagem baseada em evidências e respeito às necessidades de cada pessoa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WA_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-wine px-7 py-4 text-xs font-bold tracking-[0.18em] text-primary-foreground transition hover:bg-wine-deep">
              AGENDE UMA VISITA <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#studio" className="inline-flex items-center border border-graphite/25 px-7 py-4 text-xs font-bold tracking-[0.18em] text-graphite transition hover:border-wine hover:text-wine">
              CONHEÇA A FIT YOU
            </a>
          </div>
          <p className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-wine" /> Mogi das Cruzes • SP
          </p>
        </div>
        <div className="relative h-[70vh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]">
          <img src={hero} alt="Profissional acompanhando aluna durante exercício" width={1280} height={1600} className="h-full w-full object-cover" />
          <div className="absolute -left-px bottom-0 hidden h-1/3 w-px bg-gold lg:block" />
        </div>
      </div>
    </section>
  );
}

function ConceptBand() {
  const words = Array.from({ length: 6 }).flatMap(() => ["Treinar", "Cuidar", "Evoluir"]);
  return (
    <div className="overflow-hidden border-y border-border bg-background py-8">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-12 display text-5xl uppercase text-graphite md:text-7xl">
            <span className={i % 3 === 1 ? "serif-accent normal-case text-wine" : i % 3 === 2 ? "outline-text" : ""}>{w}</span>
            <span className="h-2 w-2 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="studio" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:py-36">
      <div className="reveal lg:col-span-6 lg:pr-8">
        <p className="eyebrow">Um studio pensado para você</p>
        <h2 className="display mt-6 text-4xl text-graphite md:text-6xl">
          Treinamento não deveria ser <span className="serif-accent text-wine">igual</span> para todo mundo.
        </h2>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Cada pessoa possui objetivos, necessidades e características diferentes. Na Fit You, o treinamento parte da individualidade e do acompanhamento para construir uma experiência mais completa.
        </p>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
          {["Individualização", "Acompanhamento", "Evidências"].map((c, i) => (
            <div key={c} className="bg-background py-6 pr-4 sm:px-4 sm:first:pl-0">
              <span className="text-xs font-bold text-gold">0{i + 1}</span>
              <p className="mt-2 font-bold text-graphite">{c}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="reveal relative lg:col-span-6">
        <img src={musculacao} alt="Acompanhamento durante treino" loading="lazy" width={1200} height={1408} className="aspect-[4/5] w-full object-cover lg:ml-auto lg:w-[85%]" />
        <div className="absolute -bottom-8 left-0 hidden w-56 bg-wine p-6 text-primary-foreground md:block">
          <p className="serif-accent text-2xl leading-snug">"Existe uma proposta pensada para mim."</p>
        </div>
      </div>
    </section>
  );
}

function Trainings() {
  return (
    <section id="treinamentos" className="bg-sand py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Movimento</p>
          <h2 className="display mt-6 text-4xl text-graphite md:text-6xl">
            Encontre a forma de treinar que <span className="serif-accent text-wine">combina com você.</span>
          </h2>
        </div>
        <div className="mt-20 space-y-24 lg:space-y-32">
          {TRAININGS.map((t, i) => (
            <article key={t.n} className={`reveal grid items-center gap-10 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="group relative overflow-hidden lg:col-span-7">
                <img src={t.img} alt={t.t} loading="lazy" width={1200} height={1408} className="aspect-[4/3] w-full object-cover transition duration-1000 group-hover:scale-105" />
              </div>
              <div className={`lg:col-span-5 ${i % 2 ? "lg:pr-12" : "lg:pl-12"}`}>
                <span className="display block text-8xl text-wine/15 md:text-9xl">{t.n}</span>
                <h3 className="display -mt-8 text-4xl uppercase text-graphite md:text-5xl">{t.t}</h3>
                <div className="mt-6 h-px w-16 bg-wine" />
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">{t.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const f = () => setY(window.scrollY);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <img src={impacto} alt="Treinamento acompanhado" loading="lazy" width={1920} height={1088}
        className="absolute inset-0 h-[120%] w-full object-cover" style={{ transform: `translateY(${(y % 4000) * -0.04}px)` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/85 via-graphite/50 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <h2 className="reveal display max-w-3xl text-5xl text-cream md:text-7xl">
          Não existe treino padrão <span className="serif-accent text-gold">para pessoas diferentes.</span>
        </h2>
        <p className="reveal mt-8 max-w-md text-lg text-cream/80">Cada processo começa entendendo quem está treinando.</p>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodologia" className="mx-auto max-w-7xl px-6 py-28 lg:py-36">
      <div className="reveal text-center">
        <p className="eyebrow">Como pensamos o treinamento</p>
        <h2 className="display mx-auto mt-6 max-w-3xl text-4xl text-graphite md:text-6xl">
          Individualizar antes de <span className="serif-accent text-wine">intensificar.</span>
        </h2>
      </div>
      <div className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-wine to-transparent lg:block" />
        <div className="absolute bottom-0 left-6 top-0 w-px bg-wine/30 lg:hidden" />
        {STEPS.map(([n, t, d]) => (
          <div key={n} className="reveal relative pl-20 lg:pl-0 lg:text-center">
            <div className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full border border-wine bg-background text-sm font-bold text-wine lg:relative lg:mx-auto">
              {n}
            </div>
            <h3 className="display text-2xl uppercase text-graphite lg:mt-8">{t}</h3>
            <p className="mt-3 text-muted-foreground lg:mx-auto lg:max-w-[14rem]">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Care() {
  return (
    <section className="relative overflow-hidden bg-wine-deep text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-0">
        <div className="reveal lg:py-36">
          <p className="eyebrow text-gold">Além do treino</p>
          <h2 className="display mt-6 text-5xl md:text-7xl">
            Movimento também é <span className="serif-accent text-gold">cuidado.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/75">
            A Fit You reúne serviços complementares dentro de uma proposta de atenção individual, cuidado corporal e bem-estar.
          </p>
        </div>
        <img src={cuidado} alt="Atendimento de cuidado corporal" loading="lazy" width={1200} height={1408} className="reveal aspect-[4/5] w-full object-cover lg:h-full lg:aspect-auto" />
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-28 lg:py-36">
      <div className="reveal mb-16 max-w-2xl">
        <p className="eyebrow">Serviços</p>
        <h2 className="display mt-6 text-4xl text-graphite md:text-6xl">Cuidado com atenção individual.</h2>
      </div>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="relative hidden overflow-hidden lg:col-span-5 lg:block">
          {SERVICES.map((s, i) => (
            <img key={s.t} src={s.img} alt={s.t} loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />
          ))}
          <div className="aspect-[4/5]" />
        </div>
        <ul className="lg:col-span-7">
          {SERVICES.map((s, i) => (
            <li key={s.t} className="border-b border-border first:border-t">
              <button onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
                className="group flex w-full items-center gap-6 py-7 text-left">
                <span className={`text-sm font-bold transition-colors ${active === i ? "text-wine" : "text-gold"}`}>0{i + 1}</span>
                <span className={`display flex-1 text-2xl uppercase transition-all md:text-4xl ${active === i ? "translate-x-2 text-wine" : "text-graphite"}`}>{s.t}</span>
                <Plus className={`h-5 w-5 shrink-0 text-wine transition-transform ${active === i ? "rotate-45" : ""}`} />
              </button>
              <div className={`grid transition-all duration-500 ${active === i ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden pl-12 text-muted-foreground md:max-w-lg">{s.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pillars() {
  const P = [
    ["Treinar", "Movimento orientado e individualizado."],
    ["Cuidar", "Serviços que complementam uma experiência voltada ao cuidado corporal."],
    ["Evoluir", "Um processo construído respeitando cada pessoa."],
  ];
  return (
    <section className="bg-sand py-28">
      <div className="mx-auto max-w-7xl space-y-14 px-6">
        {P.map(([w, d], i) => (
          <div key={w} className={`reveal flex flex-col gap-4 md:flex-row md:items-end md:gap-12 ${i === 1 ? "md:justify-center" : i === 2 ? "md:justify-end" : ""}`}>
            <span className={`display text-[18vw] uppercase leading-none md:text-[9rem] ${i === 1 ? "text-wine" : i === 2 ? "outline-text" : "text-graphite"}`}>{w}</span>
            <p className="max-w-xs pb-4 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Structure() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:py-36">
      <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2 className="display max-w-2xl text-4xl text-graphite md:text-6xl">
          Um espaço para cuidar do seu <span className="serif-accent text-wine">movimento.</span>
        </h2>
        <p className="text-sm text-muted-foreground">Imagens ilustrativas</p>
      </div>
      {/* PLACEHOLDER: trocar as imagens de GALLERY por fotos reais do Studio */}
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <img src={GALLERY[0]} alt="Espaço Fit You (ilustrativo)" loading="lazy" className="reveal h-full min-h-80 w-full object-cover md:col-span-2 md:row-span-2" />
        <img src={GALLERY[1]} alt="Espaço Fit You (ilustrativo)" loading="lazy" className="reveal aspect-[4/3] w-full object-cover" />
        <img src={GALLERY[3]} alt="Espaço Fit You (ilustrativo)" loading="lazy" className="reveal aspect-[4/3] w-full object-cover" />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-28">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden bg-wine px-8 py-20 text-center text-cream md:px-16 md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-gold/30" />
        <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full border border-gold/20" />
        <p className="eyebrow text-gold">Comece por uma conversa</p>
        <h2 className="display relative mx-auto mt-6 max-w-3xl text-4xl md:text-6xl">
          Descubra uma forma de treinar mais <span className="serif-accent text-gold">conectada com você.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-cream/80">Conheça a Fit You Studio, nossos treinamentos e serviços.</p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-cream px-7 py-4 text-xs font-bold tracking-[0.18em] text-wine transition hover:bg-gold hover:text-graphite">
            <MessageCircle className="h-4 w-4" /> FALAR COM A FIT YOU
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-cream/40 px-7 py-4 text-xs font-bold tracking-[0.18em] transition hover:border-gold hover:text-gold">
            COMO CHEGAR <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contato" className="bg-sand">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="reveal px-6 py-24 lg:py-32 lg:pr-16">
          <p className="eyebrow">Localização</p>
          <h2 className="display mt-6 text-4xl text-graphite md:text-6xl">
            Estamos em <span className="serif-accent text-wine">Mogi das Cruzes.</span>
          </h2>
          <div className="mt-12 space-y-6 text-graphite">
            <div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-wine" />
              <p><strong>FIT YOU STUDIO</strong><br />Avenida São Paulo, 1331 — 1º andar<br />Mogi das Cruzes — SP, Brasil</p></div>
            <a href="tel:+551133740443" className="flex gap-4 hover:text-wine"><Phone className="h-5 w-5 text-wine" /> (11) 3374-0443</a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="flex gap-4 hover:text-wine"><MessageCircle className="h-5 w-5 text-wine" /> +55 11 98199-8215</a>
            <a href="mailto:fityoustudio@gmail.com" className="flex gap-4 hover:text-wine"><Mail className="h-5 w-5 text-wine" /> fityoustudio@gmail.com</a>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-12 inline-flex items-center gap-3 bg-wine px-7 py-4 text-xs font-bold tracking-[0.18em] text-primary-foreground hover:bg-wine-deep">
            COMO CHEGAR <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <iframe title="Mapa Fit You Studio" src={MAPS_EMBED} loading="lazy" className="h-96 w-full grayscale lg:h-full" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-wine-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
        <div>
          <div className="inline-block bg-cream p-4"><img src={logo} alt="Fit You Fitness Studio" className="h-16 w-auto" /></div>
          <p className="serif-accent mt-6 max-w-xs text-xl text-gold">Treinar. Cuidar. Evoluir.</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm text-cream/75">
          {NAV.map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}
        </nav>
        <div className="space-y-2 text-sm text-cream/75">
          <p>Avenida São Paulo, 1331 — 1º andar</p>
          <p>Mogi das Cruzes — SP</p>
          <p>(11) 3374-0443 · +55 11 98199-8215</p>
          <p>fityoustudio@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Fit You Studio. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a href={WA_URL} target="_blank" rel="noreferrer" aria-label="Fale com a Fit You"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-wine p-4 text-primary-foreground shadow-lg ring-1 ring-gold/40 transition-all hover:gap-3 hover:pr-6">
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40">Fale com a Fit You</span>
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <ConceptBand />
      <About />
      <Trainings />
      <Impact />
      <Method />
      <Care />
      <Services />
      <Pillars />
      <Structure />
      <CTA />
      <Location />
      <Footer />
      <FloatingWA />
    </main>
  );
}
