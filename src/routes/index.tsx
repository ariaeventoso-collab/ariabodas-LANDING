import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Users,
  CheckCircle2,
  LayoutGrid,
  MessageCircle,
  Mail,
  Sparkles,
  UserPlus,
  Send,
  Armchair,
  ArrowRight,
  Palette,
  ListChecks,
  CalendarClock,
} from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";
import tableImg from "@/assets/wedding-table.jpg";
import detailsImg from "@/assets/wedding-details.jpg";

const ADMIN_URL = "https://ariabodas-admin.vercel.app";
const WHATSAPP_NUMERO = "526441159752";
const WHATSAPP_MENSAJE = encodeURIComponent(
  "Hola, quiero información sobre AriaBodas para organizar mi boda."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${WHATSAPP_MENSAJE}`;

export const Route = createFileRoute("/")({
  component: Landing,
});

function AdminLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={ADMIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center gap-1.5 text-sm font-medium text-petrol border border-petrol/40 rounded-full px-4 py-1.5 transition hover:bg-petrol hover:text-white " +
        className
      }
      style={{ color: "var(--petrol)", borderColor: "color-mix(in oklab, var(--petrol) 45%, transparent)" }}
    >
      Iniciar sesión
      <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-[color:var(--gold)]">
      <span className="h-px w-10 bg-[color:var(--gold)]/60" />
      <Sparkles className="h-3.5 w-3.5" />
      <span className="h-px w-10 bg-[color:var(--gold)]/60" />
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo-aria-transparente.png" alt="AriaBodas" className="h-14 w-auto" />
            <span className="font-serif text-2xl tracking-tight">
              Aria<span className="italic text-[color:var(--gold)]">Bodas</span>
            </span>
          </a>
          <AdminLink />
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Invitación de boda elegante con detalles dorados"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--bone)]/95 via-[color:var(--bone)]/70 to-[color:var(--bone)]/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-52 md:pb-36">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[color:var(--petrol)]">
              <span className="h-px w-8 bg-[color:var(--petrol)]/60" />
              Para novios y wedding planners
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight">
              Diseñada con{" "}
              <span className="italic text-[color:var(--gold)]">amor</span>.
              Organizada sin estrés.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[color:var(--ink)]/75">
              Tu invitación digital personalizada, más un panel para
              invitados, confirmaciones y mesas.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-8 py-3.5 text-sm font-semibold text-[color:var(--ink)] shadow-[0_10px_30px_-12px_rgba(212,175,55,0.55)] transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                Envíanos WhatsApp
              </a>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-[color:var(--ink)]/70 underline decoration-[color:var(--gold)] decoration-2 underline-offset-4 hover:text-[color:var(--ink)]"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
        <Ornament />
        <p className="mt-8 font-serif text-2xl md:text-4xl leading-snug">
          Entre Excel, WhatsApp y notas sueltas, es fácil perder el control de{" "}
          <span className="italic">quién confirmó</span>, cuántos pases usar y{" "}
          <span className="italic">quién se sienta con quién</span>.
        </p>
        <p className="mt-6 text-[color:var(--ink)]/60">
          AriaBodas junta todo eso en un solo lugar. Simple, elegante, tuyo.
        </p>
      </section>

      {/* Personalización del diseño */}
      <section className="bg-[color:var(--ink)] text-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">
              Diseño a tu medida
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Tú nos das el contexto.{" "}
              <span className="italic text-[color:var(--gold)]">
                Nosotros la diseñamos.
              </span>
            </h2>
            <p className="mt-6 text-white/70 max-w-lg">
              No es una plantilla genérica. Nos cuentas cómo es tu boda y
              creamos una invitación digital que de verdad se sienta tuya.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Palette,
                title: "Tus colores",
                text: "La paleta de tu boda, reflejada en cada detalle de la invitación.",
              },
              {
                icon: ListChecks,
                title: "Tus reglas",
                text: "Código de vestimenta, niños sí o no, mesa de regalos — como tú lo definas.",
              },
              {
                icon: CalendarClock,
                title: "Tu itinerario",
                text: "Ceremonia, recepción, horarios — todo claro para tus invitados.",
              },
              {
                icon: Sparkles,
                title: "Tu estilo",
                text: "Del romántico clásico al minimalista moderno, diseñado a tu gusto.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5 text-[color:var(--gold)]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros novios — ahora conectado a Firestore. Se muestran las
          bodas marcadas como "Destacar en landing" desde el panel admin.
          Cada link va con ?preview=true para bloquear datos sensibles
          (ver PublicInvitation.jsx y PlantillaJardinBotanico.jsx). */}
      <NuestrosNovios />

      {/* How it works */}
      <section
        id="como-funciona"
        className="bg-[color:var(--sand)] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--petrol)]">
              Cómo funciona
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Cuatro pasos para llegar al altar{" "}
              <span className="italic text-[color:var(--gold)]">sin estrés</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                icon: UserPlus,
                title: "Agrega a tus invitados",
                text: "Manual o importando tu Excel. Familias, pases y contacto en un mismo lugar.",
              },
              {
                n: "02",
                icon: Send,
                title: "Envía RSVP por WhatsApp",
                text: "Confirmaciones directas desde la plataforma, sin cambiar de ventana.",
              },
              {
                n: "03",
                icon: Armchair,
                title: "Organiza las mesas",
                text: "Arrastra y suelta a tus invitados hasta que la distribución sea perfecta.",
              },
              {
                n: "04",
                icon: Mail,
                title: "Comparte la invitación",
                text: "Invitación digital personalizada, lista para enviar a cada familia.",
              },
            ].map(({ n, icon: Icon, title, text }) => (
              <div key={n} className="group">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl italic text-[color:var(--gold)]">
                    {n}
                  </span>
                  <span className="h-px flex-1 bg-[color:var(--ink)]/15" />
                </div>
                <Icon className="mt-6 h-6 w-6 text-[color:var(--petrol)]" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm text-[color:var(--ink)]/70 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--petrol)]">
              Todo lo que necesitas
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Un panel simple para{" "}
              <span className="italic text-[color:var(--gold)]">
                una boda inolvidable
              </span>
              .
            </h2>
            <p className="mt-6 text-[color:var(--ink)]/70">
              Diseñado para que tú y tu pareja lo usen sin manuales ni cursos.
              Nada que instalar — se abre desde el navegador.
            </p>
            <div className="mt-10 overflow-hidden rounded-lg">
              <img
                src={tableImg}
                alt="Mesa de boda con arreglos florales y detalles dorados"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Invitados por familia",
                text: "Controla pases, acompañantes y confirmaciones agrupadas por familia.",
              },
              {
                icon: CheckCircle2,
                title: "RSVP en tiempo real",
                text: "Mira quién confirmó, quién falta y cuántos lugares te sobran.",
              },
              {
                icon: LayoutGrid,
                title: "Mesas visuales",
                text: "Organiza la distribución arrastrando y soltando invitados.",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp integrado",
                text: "Envía recordatorios y detalles del evento sin salir de la plataforma.",
              },
              {
                icon: Mail,
                title: "Diseño personalizado de invitación",
                text: "Tu invitación digital con el diseño y estilo de tu boda, lista para compartir con cada familia.",
              },
              {
                icon: Sparkles,
                title: "Panel sencillo",
                text: "Sin instalar nada. Se abre desde el celular o la laptop.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-lg bg-[color:var(--sand)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(28,28,28,0.25)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--bone)]">
                  <Icon className="h-5 w-5 text-[color:var(--gold)]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink)]/70 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding planners */}
      <section className="bg-[color:var(--sand)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--petrol)]">
              Para wedding planners
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              ¿Trabajas con un{" "}
              <span className="italic text-[color:var(--gold)]">
                wedding planner
              </span>
              ?
            </h2>
            <p className="mt-5 text-[color:var(--ink)]/70 max-w-md">
              Sin problema. Tu wedding planner también puede tener su propio
              acceso al panel, para ayudarte a gestionar invitados, mesas y
              confirmaciones junto contigo — todo en el mismo lugar.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--petrol)] underline decoration-[color:var(--petrol)]/40 decoration-2 underline-offset-4 hover:text-[color:var(--ink)]"
            >
              <MessageCircle className="h-4 w-4" />
              Pregúntanos cómo
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <footer className="bg-[color:var(--ink)] text-white/80">
        <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo-aria.png" alt="AriaBodas" className="h-7 w-auto" />
              <span className="font-serif text-2xl text-white">
                Aria<span className="italic text-[color:var(--gold)]">Bodas</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-white/50 max-w-sm">
              Una plataforma cálida para gestionar todo lo que rodea al día más
              importante.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <a
              href={ADMIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/80 border border-white/25 rounded-full px-4 py-1.5 transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              Iniciar sesión
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} AriaBodas. Hecho con cariño.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Genera una portada automática única por boda cuando no hay imagen_fondo_url
// cargada: un monograma elegante con las iniciales de los novios, usando los
// colores configurados en Diseño para esa boda específica (o los colores de
// marca de AriaBodas por defecto). No requiere ninguna subida manual — es
// distinto para cada boda porque usa nombres y colores reales de cada una.
function generarMonogramaSVG(boda: {
  nombre_novio_1: string;
  nombre_novio_2: string;
  colores?: { primario?: string; secundario?: string };
}) {
  const inicial1 = boda.nombre_novio_1?.[0]?.toUpperCase() || "";
  const inicial2 = boda.nombre_novio_2?.[0]?.toUpperCase() || "";
  const fondo = boda.colores?.secundario || "#ede3d2";
  const acento = boda.colores?.primario || "#3e606f";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="${fondo}" />
      <circle cx="300" cy="200" r="70" fill="none" stroke="${acento}" stroke-width="1.5" opacity="0.6" />
      <text x="300" y="220" font-family="Georgia, serif" font-style="italic" font-size="56" fill="${acento}" text-anchor="middle">${inicial1}&amp;${inicial2}</text>
      <text x="300" y="340" font-family="Georgia, serif" font-size="14" letter-spacing="4" fill="${acento}" text-anchor="middle" opacity="0.7">ARIABODAS</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function NuestrosNovios() {
  const [bodas, setBodas] = useState<Array<{ id: string; nombre_novio_1: string; nombre_novio_2: string; slug: string; imagen_fondo_url?: string; colores?: { primario?: string; secundario?: string } }>>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargar() {
      try {
        const q = query(
          collection(db, "bodas"),
          where("activa", "==", true),
          where("destacada_en_landing", "==", true)
        );
        const snap = await getDocs(q);
        setBodas(
          snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Array<{
            id: string;
            nombre_novio_1: string;
            nombre_novio_2: string;
            slug: string;
            imagen_fondo_url?: string;
            colores?: { primario?: string; secundario?: string };
          }>
        );
      } catch (e) {
        // Si falla la consulta (reglas de Firestore, red, etc.), la
        // sección simplemente no se muestra en vez de romper el landing.
        setBodas([]);
      }
      setCargando(false);
    }
    cargar();
  }, []);

  // Nada que mostrar todavía (cargando) o ninguna boda destacada aún:
  // no renderizamos la sección en vez de mostrar algo vacío o de ejemplo.
  if (cargando || bodas.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--petrol)]">
          Nuestros novios
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          Invitaciones que{" "}
          <span className="italic text-[color:var(--gold)]">ya cuentan</span>{" "}
          su historia.
        </h2>
        <p className="mt-6 text-[color:var(--ink)]/70 max-w-lg">
          Conoce a algunas de las parejas que ya organizan su boda con
          AriaBodas. Toca una tarjeta para ver su invitación en vivo.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bodas.map((boda) => (
          <a
            key={boda.id}
            href={`${ADMIN_URL}/i/${boda.slug}?preview=true`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-lg bg-[color:var(--sand)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(28,28,28,0.3)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={boda.imagen_fondo_url || generarMonogramaSVG(boda)}
                alt={`Invitación de ${boda.nombre_novio_1} & ${boda.nombre_novio_2}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <p className="font-serif text-lg italic">
                {boda.nombre_novio_1} &amp; {boda.nombre_novio_2}
              </p>
              <ArrowRight className="h-4 w-4 text-[color:var(--gold)] transition group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[color:var(--ink)] text-white">
      <div className="absolute inset-0 opacity-30">
        <img
          src={detailsImg}
          alt=""
          width={1200}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/85 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Ornament />
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Tu boda merece{" "}
            <span className="italic text-[color:var(--gold)]">
              estar organizada
            </span>
            .
          </h2>
          <p className="mt-6 text-white/70 max-w-md">
            Escríbenos por WhatsApp y te damos acceso anticipado a AriaBodas
            para tu fecha.
          </p>
        </div>

        <div className="rounded-lg bg-white/[0.04] backdrop-blur border border-white/10 p-6 md:p-8 flex flex-col items-center text-center gap-5">
          <MessageCircle className="h-8 w-8 text-[color:var(--gold)]" strokeWidth={1.5} />
          <p className="text-sm text-white/70 max-w-xs">
            Un solo mensaje y empezamos a organizar tu boda juntos, sin
            formularios ni esperas.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] transition hover:brightness-105 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Envíanos WhatsApp
          </a>
          <p className="text-[11px] text-white/40">
            +52 644 115 9752 · Te respondemos en poco tiempo
          </p>
        </div>
      </div>
    </section>
  );
}
