import Image from "next/image";
import Link from "next/link";
import { Aurora } from "@/components/Aurora";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  contact,
  credentials,
  cityscapeImage,
  differentiators,
  firm,
  heroBackdrop,
  industries,
  lifestyle,
  services,
  stats,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <CredentialsBar />
      <Stats />
      <BehindTheFirm />
      <Services />
      <Industries />
      <Differentiators />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}

// ---------------------------------------------------------------------------

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#06070C]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-md bg-[#F5A623] text-[#06070C] font-display text-base"
          >
            FG
          </span>
          <span className="text-sm font-medium tracking-tight text-[#E7E9F0]">
            Frazier Gills <span className="text-[#9CA1B0]">P.C.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#9CA1B0] md:flex">
          <a href="#services" className="transition hover:text-[#E7E9F0]">Services</a>
          <a href="#industries" className="transition hover:text-[#E7E9F0]">Industries</a>
          <a href="#why" className="transition hover:text-[#E7E9F0]">Why Us</a>
          <a href="#contact" className="transition hover:text-[#E7E9F0]">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#06070C] transition hover:bg-[#F8C97A] md:inline-flex"
        >
          Book a consult
        </a>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layer 1: Dallas skyline backdrop */}
      <div className="absolute inset-0">
        <Image
          src={heroBackdrop}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.55]"
        />
        {/* Light wash so the city stays readable but doesn't blow out the type */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[#06070C]/35"
        />
        {/* Bottom fade so the section blends into the credentials marquee */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-[#06070C]/60 to-[#06070C]"
        />
        {/* Soft left-side fade so headline gets a tad more contrast */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#06070C]/55 to-transparent"
        />
      </div>
      {/* Layer 2: drifting amber/blue aurora glows */}
      <div className="absolute inset-0">
        <Aurora />
      </div>
      {/* Layer 3: subtle grid pattern at top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 50%, transparent 75%)",
        }}
      />

      <Reveal as="div" className="relative mx-auto max-w-6xl px-6 pt-28 pb-32 md:pt-36 md:pb-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-[#9CA1B0] backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5A623] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F5A623]" />
          </span>
          {firm.region} · IRS resolution · fractional CFO
        </div>

        <h1 className="mt-7 max-w-5xl text-5xl leading-[1.02] tracking-[-0.025em] text-[#F4F5FA] md:text-7xl lg:text-[5.5rem]">
          Smart accounting.
          <br />
          <span className="font-display italic text-[#F5A623]">Real impact.</span>{" "}
          Dallas roots.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#9CA1B0] md:text-xl">
          {firm.description} Independent since {firm.founded}. Backed by a{" "}
          <span className="text-[#E7E9F0]">100% satisfaction-or-refund guarantee</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-7 py-3.5 text-sm font-semibold text-[#06070C] transition hover:bg-[#F8C97A]"
          >
            Book a complimentary consult
            <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-[#E7E9F0] backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            See what we do
          </a>
        </div>
      </Reveal>
    </section>
  );
}

// ---------------------------------------------------------------------------

function CredentialsBar() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-[#0A0C14]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0A0C14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0A0C14] to-transparent" />
      <Marquee pauseOnHover className="py-7 [--duration:55s] [--gap:3rem]">
        {credentials.map((c) => (
          <span
            key={c}
            className="flex shrink-0 items-center gap-12 text-sm uppercase tracking-[0.2em] text-[#9CA1B0]/60"
          >
            {c}
            <span aria-hidden className="text-[#F5A623]/35">·</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

// ---------------------------------------------------------------------------

function Stats() {
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 px-6 py-20 md:grid-cols-4 md:py-24">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="text-5xl tracking-[-0.03em] text-[#F4F5FA] md:text-6xl">
              {(() => {
                const m = s.value.match(/^([$])?(\d+)(.*)$/);
                if (!m) return s.value;
                const [, prefix, num, suffix] = m;
                return (
                  <>
                    {prefix && <span className="text-[#F5A623]">{prefix}</span>}
                    <NumberTicker
                      value={Number(num)}
                      className="tracking-[-0.03em] text-[#F4F5FA]"
                    />
                    <span className="text-[#F5A623]">{suffix}</span>
                  </>
                );
              })()}
            </div>
            <div className="mt-3 text-sm leading-relaxed text-[#9CA1B0]">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function BehindTheFirm() {
  return (
    <section className="border-b border-white/[0.06] bg-[#0A0C14]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F5A623]">
            Behind the firm
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.1] tracking-[-0.02em] text-[#F4F5FA] md:text-5xl">
            Three habits that <em className="not-italic text-[#F5A623]">add up to thirty years</em> of repeat clients.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {lifestyle.map((l, i) => (
            <Reveal
              key={l.title}
              as="article"
              delay={i * 0.08}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1019]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={l.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0E1019] via-transparent to-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-tight text-[#F4F5FA]">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA1B0]">{l.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F5A623]">
            What we do
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.05] tracking-[-0.02em] text-[#F4F5FA] md:text-6xl">
            Three engagements. One <em className="not-italic text-[#F5A623]">team that&apos;s done it</em> for thirty years.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              as="article"
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1019] p-7 transition hover:border-[#F5A623]/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F5A623]/0 to-[#F5A623]/0 opacity-0 transition group-hover:from-[#F5A623]/10 group-hover:to-transparent group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#9CA1B0]">
                    0{i + 1}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#F5A623] transition group-hover:border-[#F5A623]/40 group-hover:bg-[#F5A623]/10"
                  >
                    →
                  </span>
                </div>
                <h3 className="font-display mt-7 text-2xl tracking-tight text-[#F4F5FA]">{s.name}</h3>
                <p className="mt-4 leading-relaxed text-[#9CA1B0]">{s.short}</p>
                <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5 text-sm text-[#9CA1B0]">
                  {s.bullets.slice(0, 5).map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <span aria-hidden className="text-[#F5A623]/60">●</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Industries() {
  return (
    <section id="industries" className="border-b border-white/[0.06] bg-[#0A0C14]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F5A623]">
            Industries we know
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.05] tracking-[-0.02em] text-[#F4F5FA] md:text-6xl">
            We don&apos;t take everyone. <em className="not-italic text-[#F5A623]">We go deep</em> in the sectors that drive DFW.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {industries.map((i, idx) => (
            <Reveal
              key={i.slug}
              as="article"
              delay={idx * 0.08}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#14161F]"
            >
              <Image
                src={i.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#06070C] via-[#06070C]/80 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                <h3 className="font-display text-3xl tracking-tight text-[#F4F5FA]">
                  {i.name}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-[#9CA1B0]">{i.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Differentiators() {
  return (
    <section id="why" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F5A623]">
              Why Frazier Gills
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-[-0.02em] text-[#F4F5FA] md:text-6xl">
              The <em className="not-italic text-[#F5A623]">last accounting firm</em> you&apos;ll ever switch to.
            </h2>
            <p className="mt-7 leading-relaxed text-[#9CA1B0]">
              We win the trust slowly: by giving the real scoop instead of the comfortable answer, by showing up in person when it matters, and by standing behind the work with a refund guarantee that no Big Four firm offers.
            </p>
          </Reveal>
          <div className="space-y-px overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0E1019]">
            {differentiators.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 0.07}
                className="group relative bg-[#0E1019] p-7 transition hover:bg-[#14161F] md:p-9"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-2xl text-[#F5A623]">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-[#F4F5FA]">{d.title}</h3>
                    <p className="mt-3 leading-relaxed text-[#9CA1B0]">{d.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Testimonials() {
  return (
    <section className="border-b border-white/[0.06] bg-[#0A0C14]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F5A623]">
            Clients we&apos;ve carried through
          </p>
          <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-[-0.02em] text-[#F4F5FA] md:text-6xl">
            <em className="not-italic text-[#F5A623]">$100K of tax debt.</em> Six figures unfiled. We&apos;ve seen it.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name + i}
              as="article"
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1019] p-7 transition hover:border-[#F5A623]/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(500px circle at 50% 0%, rgba(245,166,35,0.10), transparent 40%)",
                }}
              />
              <div className="relative">
                <span aria-hidden className="font-display text-5xl leading-none text-[#F5A623]/70">
                  &ldquo;
                </span>
                <p className="-mt-2 leading-relaxed text-[#E7E9F0]">{t.quote}</p>
                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-5 text-sm">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#F5A623]/30 to-[#F5A623]/10 font-display text-base text-[#F5A623] ring-1 ring-inset ring-[#F5A623]/20"
                  >
                    {t.name
                      .split(/\s+/)
                      .map((w) => w[0])
                      .filter((c) => /[A-Za-z]/.test(c ?? ""))
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-[#F4F5FA]">{t.name}</p>
                    <p className="mt-0.5 text-[#9CA1B0]">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0">
        <Image
          src={cityscapeImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#06070C]/85 via-[#06070C]/95 to-[#06070C]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/[0.07] via-transparent to-[#3B5BDB]/[0.05]"
        />
        <div
          aria-hidden
          className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[#F5A623]/15 blur-3xl"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:items-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#F5A623]">
              Get in touch
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-[-0.02em] text-[#F4F5FA] md:text-6xl">
              Talk to a partner — <em className="not-italic text-[#F5A623]">today</em>.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-[#9CA1B0]">
              Twenty minutes by phone, in our Dallas office, or wherever you keep your books. We&apos;ll tell you straight what your situation calls for, and quote a fixed fee within a week.
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-7 py-3.5 text-sm font-semibold text-[#06070C] transition hover:bg-[#F8C97A]"
            >
              Call {contact.phoneDisplay}
              <span aria-hidden>→</span>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="grid gap-7 rounded-2xl border border-white/[0.08] bg-[#0E1019]/80 p-8 backdrop-blur-sm">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-[#9CA1B0]">Phone</dt>
                <dd className="font-display mt-2 text-2xl tracking-tight text-[#F4F5FA]">
                  <a href={`tel:${contact.phone}`} className="transition hover:text-[#F5A623]">
                    {contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-[#9CA1B0]">Email</dt>
                <dd className="font-display mt-2 break-all text-xl tracking-tight text-[#F4F5FA]">
                  <a href={`mailto:${contact.email}`} className="transition hover:text-[#F5A623]">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-[#9CA1B0]">Office</dt>
                <dd className="font-display mt-2 text-xl tracking-tight leading-snug text-[#F4F5FA]">
                  {contact.addressLines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer className="bg-[#06070C]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-[#6C7080] md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded bg-[#F5A623] text-[#06070C] font-display text-xs"
          >
            FG
          </span>
          <span>© {new Date().getFullYear()} {firm.name}. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="transition hover:text-[#E7E9F0]">Services</a>
          <a href="#industries" className="transition hover:text-[#E7E9F0]">Industries</a>
          <a href="#contact" className="transition hover:text-[#E7E9F0]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
