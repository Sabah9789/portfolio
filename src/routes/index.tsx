import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ContourArt, GridField, InstallationMap } from "@/components/site/Cartography";
import { Reveal } from "@/components/site/Reveal";
import gisApp from "@/assets/project-gis-app.jpg";
import lexora from "@/assets/project-lexora.jpg";
import grocery from "@/assets/project-grocery.jpg";
import dataviz from "@/assets/project-dataviz.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sabah Hassan — GIS Specialist × Front-End Developer" },
      { name: "description", content: "Portfolio of Sabah Hassan: geospatial expertise and modern front-end development — interactive maps, spatial dashboards and refined digital experiences." },
      { property: "og:title", content: "Sabah Hassan — GIS Specialist × Front-End Developer" },
      { property: "og:description", content: "Turning spatial data into digital experiences. Interactive maps, data-driven applications and refined interfaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

const EXPERTISE = [
  {
    no: "01",
    title: "GIS & Spatial Data",
    items: ["Spatial Analysis", "GIS Data Management", "Geodatabases", "Data Modeling", "Web GIS"],
  },
  {
    no: "02",
    title: "Front-End Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Interfaces"],
  },
  {
    no: "03",
    title: "Data & Digital Experiences",
    items: ["Interactive Maps", "Dashboards", "Data Visualization", "REST APIs", "User-focused Interfaces"],
  },
];

const PROJECTS = [
  {
    no: "01",
    title: "GIS Web Application",
    description: "Interactive mapping platform focused on spatial data visualization.",
    tech: ["Web GIS", "Leaflet", "React", "REST APIs"],
    image: gisApp,
  },
  {
    no: "02",
    title: "Lexora",
    description: "Premium law firm management system with a calm, document-first interface.",
    tech: ["React", "Tailwind CSS", "Dashboards"],
    image: lexora,
  },
  {
    no: "03",
    title: "Grocery",
    description: "Modern online grocery e-commerce experience built around clarity and speed.",
    tech: ["React", "JavaScript", "Responsive UI"],
    image: grocery,
  },
  {
    no: "04",
    title: "GIS Data Visualization",
    description: "Spatial dashboards and data-driven visual experiences across layered datasets.",
    tech: ["Spatial Analysis", "Data Viz", "Geodatabases"],
    image: dataviz,
  },
];

const TIMELINE = [
  { no: "01", title: "GIS Background", note: "Spatial thinking, geodatabases, analysis" },
  { no: "02", title: "ITI GIS Training", note: "Professional geospatial specialization" },
  { no: "03", title: "Front-End Development", note: "HTML, CSS, JavaScript foundations" },
  { no: "04", title: "React & Modern Web Applications", note: "Component systems, interfaces" },
  { no: "05", title: "GIS × Web Development", note: "Maps, dashboards, spatial products" },
];

const LINKS = [
  { label: "GitHub", href: "https://github.com/Sabah9789" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sabah-hassan-270297398" },
  { label: "Email", href: "mailto:sh9744489@gmail.com?subject=Portfolio%20Inquiry" },
  { label: "Freelance Profile", href: "#" },
];

function Index() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Signature />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "border-b border-foreground/15 bg-background/85 backdrop-blur-md" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <a href="#top" className="display text-lg tracking-[0.18em] uppercase md:text-xl">
          Sabah Hassan
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="group label-xs relative inline-block py-1">
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="label-xs border border-foreground/30 px-4 py-3 transition-colors duration-500 hover:border-copper hover:text-copper md:hidden">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 md:pt-40">
      <GridField className="pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 pb-20 md:grid-cols-12 md:px-12 md:pb-28">
        <div className="md:col-span-7 md:pt-10">
          <Reveal>
            <p className="label-xs text-copper">GIS Specialist / Front-End Developer</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mt-8 text-[3.1rem] sm:text-6xl md:mt-12 md:text-[5.4rem] lg:text-[6.2rem]">
              Turning spatial
              <br />
              data into
              <br />
              <em className="text-copper not-italic">digital</em> experiences.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">I combine geospatial expertise with modern front-end development to create interactive maps, data-driven applications, and refined digital experiences.</p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticLink href="#work" variant="solid">
                Explore Work
              </MagneticLink>
              <MagneticLink href="#contact">Let&apos;s Talk</MagneticLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="md:col-span-5">
          <div className="relative h-[380px] w-full sm:h-[460px] md:h-[620px]">
            <div className="absolute inset-0 border border-hairline" />
            <ContourArt className="drift-slow absolute inset-0 h-full w-full text-foreground" />
            <span className="label-xs absolute -top-3 left-4 bg-background px-2 text-copper">Fig. 01 — Terrain</span>
            <span className="label-xs absolute right-4 -bottom-3 bg-background px-2 text-foreground/60">31°00′N / 31°30′E</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MagneticLink({ href, children, variant = "outline" }: { href: string; children: React.ReactNode; variant?: "outline" | "solid" }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <a
      href={href}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setOffset({
          x: ((e.clientX - (r.left + r.width / 2)) / r.width) * 12,
          y: ((e.clientY - (r.top + r.height / 2)) / r.height) * 8,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      className={`label-xs inline-flex items-center gap-3 rounded-sm px-7 py-4 transition-all duration-500 ease-out ${variant === "solid" ? "bg-foreground text-background hover:bg-copper" : "border border-foreground/30 text-foreground hover:border-copper hover:text-copper"}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-foreground text-background">
      <ContourArt className="pointer-events-none absolute -top-40 -right-40 h-[900px] w-[900px] text-background opacity-[0.13]" />
      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 py-24 md:grid-cols-12 md:px-12 md:py-40">
        <div className="md:col-span-3">
          <Reveal>
            <p className="label-xs text-background/60">01 — About</p>
          </Reveal>
        </div>
        <div className="md:col-span-8 md:col-start-4">
          <Reveal>
            <h2 className="display text-[2.8rem] sm:text-6xl md:text-[5.5rem]">
              GIS meets
              <br />
              the web.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-background/75 md:mt-16 md:text-lg">I transform complex spatial information into clear, interactive and visually engaging digital experiences.</p>
          </Reveal>
          <Reveal delay={260}>
            <dl className="mt-14 grid gap-px border-t border-background/20 sm:grid-cols-3">
              {[
                ["Discipline", "GIS × Front-End"],
                ["Focus", "Maps & Dashboards"],
                ["Based", "Egypt — Remote"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-background/20 py-6 pr-6">
                  <dt className="label-xs text-background/50">{k}</dt>
                  <dd className="mt-3 text-sm md:text-base">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <h2 className="display text-[2.6rem] sm:text-5xl md:text-[4.5rem]">What I do</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="label-xs text-copper">02 — Expertise</p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3">
        {EXPERTISE.map((block, i) => (
          <Reveal key={block.no} delay={i * 140}>
            <article className="group h-full border border-hairline bg-champagne p-8 transition-colors duration-700 hover:border-copper md:p-10">
              <p className="label-xs text-copper">{block.no}</p>
              <h3 className="display mt-8 text-3xl md:text-[2.4rem]">{block.title}</h3>
              <ul className="mt-10 space-y-3 border-t border-foreground/15 pt-8">
                {block.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                    <span className="h-px w-5 bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative border-y border-foreground/15 bg-champagne">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
        <Reveal>
          <p className="label-xs text-copper">03 — Portfolio</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-6 text-[2.8rem] sm:text-6xl md:text-[6rem]">Selected work</h2>
        </Reveal>

        <div className="mt-20 space-y-24 md:mt-32 md:space-y-40">
          {PROJECTS.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={project.no}>
                <article className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
                  <div className={`md:col-span-7 ${flipped ? "md:order-2 md:col-start-6" : "md:order-1"}`}>
                    <div className="group relative overflow-hidden border border-hairline">
                      <img src={project.image} alt={`${project.title} — project visual`} loading="lazy" width={1408} height={1008} className="h-[260px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06] sm:h-[360px] md:h-[520px]" />
                      <span className="display absolute top-4 left-5 text-4xl text-background mix-blend-difference md:text-6xl">{project.no}</span>
                    </div>
                  </div>
                  <div className={`md:col-span-4 ${flipped ? "md:order-1 md:col-start-1" : ""}`}>
                    <p className="label-xs text-copper">Project {project.no}</p>
                    <h3 className="display mt-6 text-4xl md:text-[3.2rem]">{project.title}</h3>
                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>
                    <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-foreground/15 pt-6">
                      {project.tech.map((t) => (
                        <li key={t} className="label-xs text-foreground/70">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="group label-xs mt-10 inline-flex items-center gap-3 text-copper">
                      View Project
                      <span className="h-px w-8 bg-copper transition-all duration-500 group-hover:w-14" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-background md:py-40">
      <InstallationMap className="pointer-events-none absolute inset-0 h-full w-full text-background opacity-40" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <Reveal>
          <p className="label-xs text-background/55">04 — Signature</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-8 max-w-4xl text-[2.9rem] sm:text-6xl md:text-[6.4rem]">Every dataset has a story.</h2>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-16 grid gap-px border-t border-background/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Layer 01", "Basemap & terrain"],
              ["Layer 02", "Routes & networks"],
              ["Layer 03", "Spatial markers"],
              ["Layer 04", "Analysis output"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-background/20 py-6 pr-6">
                <p className="label-xs text-background/50">{k}</p>
                <p className="mt-3 text-sm">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40">
      <Reveal>
        <p className="label-xs text-copper">05 — Experience</p>
      </Reveal>
      <ol className="mt-14 md:mt-24">
        {TIMELINE.map((step, i) => (
          <Reveal as="li" key={step.no} delay={i * 90}>
            <div className="group grid gap-4 border-t border-foreground/15 py-8 transition-colors duration-700 hover:border-copper md:grid-cols-12 md:py-12">
              <p className="label-xs text-copper md:col-span-2">{step.no}</p>
              <h3 className="display text-2xl md:col-span-6 md:text-[2.6rem]">{step.title}</h3>
              <p className="text-sm text-muted-foreground md:col-span-4 md:pt-3">{step.note}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground text-background">
      <GridField className="pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-44">
        <Reveal>
          <p className="label-xs text-background/55">06 — Contact</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-8 max-w-5xl text-[2.9rem] sm:text-6xl md:text-[6.6rem]">Let&apos;s build something meaningful.</h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-10 text-base text-background/70 md:text-lg">Have a GIS, dashboard, or web project in mind?</p>
        </Reveal>
        <Reveal delay={300}>
          <a href="mailto:hello@sabahhassan.dev" className="label-xs mt-12 inline-flex items-center gap-4 rounded-sm bg-background px-8 py-5 text-foreground transition-colors duration-500 hover:bg-copper hover:text-background">
            Start a Project <span aria-hidden="true">→</span>
          </a>
        </Reveal>
        <Reveal delay={380}>
          <ul className="mt-20 grid gap-px border-t border-background/20 sm:grid-cols-2 lg:grid-cols-4">
            {LINKS.map((link) => (
              <li key={link.label} className="border-b border-background/20">
                <a href={link.href} className="label-xs flex items-center justify-between py-6 pr-6 text-background/75 transition-colors duration-500 hover:text-background">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
      <div className="flex flex-col gap-6 border-t border-foreground/15 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-2xl tracking-[0.16em] uppercase">Sabah Hassan</p>
          <p className="label-xs mt-4 text-muted-foreground">GIS Specialist × Front-End Developer</p>
        </div>
        <div className="flex items-end gap-8">
          <p className="label-xs text-copper">31°00′N / 31°30′E</p>
          <p className="label-xs text-muted-foreground">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
