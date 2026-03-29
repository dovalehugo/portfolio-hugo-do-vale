import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function PortfolioHugoDoVale() {
  const skills = {
    backend: ["Java", "Node.js", "Express", "APIs REST"],
    frontend: ["Next.js", "JavaScript", "HTML", "CSS"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Render"],
  };

  const projectFeatures = [
    "Gestión de herramientas y categorías",
    "Registro y gestión de empleados",
    "Control de préstamos y devoluciones",
    "Dashboard con indicadores y alertas",
    "Gestión de usuarios con roles",
    "Importación de datos mediante CSV",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-200 selection:text-zinc-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_20%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-lg shadow-black/20">
              HD
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.16em] text-white uppercase md:text-xl">Hugo Do Vale</p>
              <p className="mt-1 text-xs text-zinc-500">Desarrollador junior · Portfolio</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#sobre-mi" className="transition hover:text-white">Sobre mí</a>
            <a href="#proyecto" className="transition hover:text-white">Proyecto</a>
            <a href="#proyectos" className="transition hover:text-white">Proyectos</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#formacion" className="transition hover:text-white">Formación</a>
            <a href="#contacto" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-[0.28em] text-zinc-300 uppercase">
              Desarrollador junior · Estudiante de DAM
            </span>
            <span className="inline-flex w-fit rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-emerald-300 uppercase">
              Disponible para prácticas y trabajo
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
              Desarrollo aplicaciones orientadas a resolver problemas reales.
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            Estoy finalizando mis estudios de DAM y construyendo proyectos full stack con enfoque práctico. Busco incorporarme a un entorno donde seguir aprendiendo, participar en proyectos reales y aportar valor desde el primer día.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#proyecto"
              className="rounded-2xl border border-white bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 transition hover:scale-[1.02] hover:opacity-95"
            >
              Ver proyecto principal
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              { label: "Perfil", value: "Junior full stack" },
              { label: "Proyecto principal", value: "ToolTrack desplegado" },
              { label: "Ubicación", value: "Málaga · España" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-white/5 blur-3xl" />
            <div className="relative w-full rounded-[2.25rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900/95 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-zinc-400">Proyecto destacado</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">ToolTrack</h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-zinc-300">
                      Sistema de control de herramientas para entornos de mantenimiento e industria, con gestión de inventario, préstamos, usuarios, roles y dashboard.
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] text-emerald-300 uppercase">
                    Full stack desplegado
                  </span>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs text-zinc-500">Vista resumida</p>
                      <p className="mt-1 text-sm font-medium text-white">Inventario · préstamos · trazabilidad</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-zinc-500">Enfoque</p>
                      <p className="mt-2 text-sm font-medium text-white">Caso de uso real</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-zinc-500">Arquitectura</p>
                      <p className="mt-2 text-sm font-medium text-white">Frontend + API</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-zinc-500">Objetivo</p>
                      <p className="mt-2 text-sm font-medium text-white">Control y trazabilidad</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Next.js", "Node.js", "Express", "MongoDB", "JWT"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase">Sobre mí</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Un perfil junior con enfoque práctico y una transición real hacia el desarrollo.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-300">
            <p>
              Vengo de una trayectoria profesional vinculada al sector industrial y de mantenimiento, y actualmente estoy reorientando mi carrera hacia el desarrollo de software a través de mis estudios de DAM.
            </p>
            <p>
              Esta transición me permite aportar una combinación de visión práctica del trabajo real, capacidad de adaptación y motivación por aprender tecnología de forma aplicada. Mi objetivo es incorporarme a una empresa como desarrollador junior, participar en proyectos reales y seguir consolidando conocimientos en programación, bases de datos y desarrollo web.
            </p>
          </div>
        </div>
      </section>

      <section id="proyecto" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase">Proyecto principal</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">ToolTrack</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-300">
              Sistema de control de herramientas para entornos de mantenimiento e industria.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/dovalehugo/tooltrack"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Ver repositorio
            </a>

            <a
              href="https://tooltrack-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
            >
              Ver demo
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="aspect-[16/10] rounded-[1.5rem] border border-white/10 bg-zinc-900 p-6">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/20">
                <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  <div className="ml-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
                    tooltrack-dashboard
                  </div>
                </div>

                <Image
                  src="/images/projects/tooltrack/tooltrack-dashboard.png"
                  alt="Dashboard de ToolTrack con métricas de inventario, actividad reciente y alertas de stock"
                  width={1280}
                  height={907}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-rose-400/15 bg-rose-400/10 p-6">
              <p className="text-sm text-rose-300">Problema</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                En muchos entornos técnicos, el control de herramientas sigue dependiendo de procesos manuales o poco estructurados, lo que dificulta el seguimiento del inventario, los préstamos y la disponibilidad real.
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-400/15 bg-emerald-400/10 p-6">
              <p className="text-sm text-emerald-300">Solución</p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                ToolTrack centraliza la gestión de herramientas, empleados y préstamos en una aplicación web con autenticación, roles, dashboard y control de stock orientado a un uso práctico en empresa.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium text-white">Funcionalidades principales</h3>
            <div className="mt-5 grid gap-3">
              {projectFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-300">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium text-white">Qué demuestra este proyecto</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300">
              <p>Estructuración de una aplicación full stack con frontend, API y base de datos.</p>
              <p>Diseño de lógica de negocio relacionada con inventario, préstamos y disponibilidad.</p>
              <p>Integración entre interfaz, backend, autenticación y despliegue.</p>
              <p>Enfoque orientado a resolver una necesidad real de entorno técnico.</p>
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN DE PROYECTOS SECUNDARIOS */}
<section id="proyectos" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
  <div className="mb-10">
    <p className="text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase">
      Más proyectos
    </p>
    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
      Próximos proyectos del portfolio.
    </h2>
    <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-300">
      Estoy preparando nuevos proyectos para seguir reforzando mi perfil en backend,
      Java y desarrollo de aplicaciones, con el objetivo de ampliar el portfolio con
      trabajos bien planteados y útiles para un entorno profesional.
    </p>
  </div>

  <div className="grid gap-6 lg:grid-cols-3">
    {[
      {
        title: "ToolTrack",
        subtitle: "Proyecto principal",
        description:
          "Aplicación full stack orientada al control de herramientas, empleados, préstamos y stock en un entorno técnico real.",
        status: "Disponible",
      },
      {
        title: "Nube Personal",
        subtitle: "Próximo proyecto",
        description:
          "Aplicación orientada a la gestión y organización de archivos, pensada para reforzar el perfil con nuevas capacidades en backend, base de datos y estructura de aplicación.",
        status: "En desarrollo",
      },
      {
        title: "Gestor de incidencias",
        subtitle: "Próximo proyecto",
        description:
          "Proyecto orientado a la gestión de incidencias, estados y seguimiento de tareas, pensado para complementar ToolTrack con otro caso de uso más centrado en operativa y flujo de trabajo.",
        status: "En planificación",
      },
    ].map((project) => (
      <div
        key={project.title}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
      >
        <p className="text-sm text-zinc-400">{project.subtitle}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-zinc-300">{project.description}</p>
        <div className="mt-6 inline-flex rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-400">
          {project.status}
        </div>
      </div>
    ))}
  </div>
</section>

      <section id="stack" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase">Stack y tecnologías</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Tecnologías con las que estoy construyendo y consolidando mi perfil.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skills).map(([key, values]) => (
            <div key={key} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium capitalize text-white">{key}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {values.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="formacion" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase">Formación</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Base académica orientada al desarrollo de aplicaciones.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-medium text-white">CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM)</p>
            <p className="mt-2 text-sm text-zinc-400">Digitech · 2024 – 2026</p>
            <p className="mt-5 text-sm leading-7 text-zinc-300">
              Formación orientada a programación, bases de datos, desarrollo de interfaces, acceso a datos y construcción de aplicaciones.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10">
          <p className="text-sm font-medium tracking-[0.25em] text-zinc-400 uppercase">Objetivo profesional</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Mi objetivo profesional es incorporarme a una empresa como desarrollador junior, participar en proyectos reales y seguir creciendo dentro del desarrollo de software.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
            Me interesa incorporarme a un entorno en el que pueda aportar seriedad, capacidad de adaptación y ganas de crecer técnicamente mientras consolido experiencia real en desarrollo de software.
          </p>
        </div>
      </section>
      {/* SECCIÓN DE CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
             Disponible para prácticas FCT y oportunidades para incorporarme como desarrollador junior.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300">
              Si quieres conocer mejor mi perfil o ver en detalle mis proyectos, puedes contactarme a través de GitHub, LinkedIn, correo electrónico o teléfono.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                label: "GitHub",
                value: "github.com/dovalehugo",
                href: "https://github.com/dovalehugo",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/dovalehugo",
                href: "https://www.linkedin.com/in/dovalehugo",
              },
              {
                label: "Email",
                value: "dovalehugo@gmail.com",
                href: "mailto:dovalehugo@gmail.com",
              },
              {
                label: "Teléfono",
                value: "604 07 83 20",
                href: "tel:+34604078320",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-2xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-white/20 hover:bg-zinc-900"
              >
                <p className="text-sm text-zinc-400">{item.label}</p>
                <p className="mt-2 text-base font-medium text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
