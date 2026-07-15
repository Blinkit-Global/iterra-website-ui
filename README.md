# Iterra — Sitio web oficial

Sitio público de Iterra: consultora de tecnología y operaciones.
_Convertimos el caos en estructura._

Construido sobre el design system de Iterra: tokens de color, tipografía,
spacing y motion como única fuente de verdad visual, listos para escalar del
«coming soon» actual al sitio corporativo completo (servicios, blog, customer
stories).

## Stack

| Área       | Herramienta                                                                |
| ---------- | -------------------------------------------------------------------------- |
| Framework  | [Astro 7](https://astro.build) + TypeScript strict                         |
| Estilos    | [Tailwind CSS v4](https://tailwindcss.com) sobre design tokens CSS         |
| Animación  | [GSAP](https://gsap.com)                                                   |
| Fuentes    | Mozilla Text · Hanken Grotesk · Spline Sans Mono (self-hosted, Fontsource) |
| Deploy     | Vercel (`@astrojs/vercel`, output estático)                                |
| Analíticas | GA4 + Microsoft Clarity vía Partytown (web worker, env-gated)              |
| SEO/GEO    | Sitemap, robots.txt, JSON-LD, Open Graph, `llms.txt`                       |
| Calidad    | ESLint · Prettier · husky + lint-staged + commitlint                       |
| Testing    | Vitest (unit) · Playwright (e2e) · GitHub Actions                          |

## Desarrollo

Requiere Node 24 (`.nvmrc`) y pnpm.

```sh
pnpm install
cp .env.example .env   # completar cuando existan dominio e IDs de analytics
pnpm dev               # http://localhost:4321
```

| Comando                                    | Qué hace            |
| ------------------------------------------ | ------------------- |
| `pnpm build`                               | build de producción |
| `pnpm preview`                             | sirve el build      |
| `pnpm lint` · `pnpm format` · `pnpm check` | calidad y typecheck |
| `pnpm test` · `pnpm test:e2e`              | unit y end-to-end   |

## Convenciones

Las reglas del repo — marca, tokens, voz, commits (Conventional Commits en
slices chicas) — viven en [AGENTS.md](AGENTS.md). Leelo antes de tocar código.

## Deploy

Cada push a `main` pasa por CI (lint, typecheck, tests, build). El deploy es
Vercel estándar; las env vars (`PUBLIC_SITE_URL`, `PUBLIC_GA4_ID`,
`PUBLIC_CLARITY_ID`) se configuran por entorno en Vercel.

## Roadmap

- [x] Scaffolding + design system en tokens
- [x] Página «coming soon» con revelado interactivo
- [ ] Sitio completo: servicios, método, casos
- [ ] Blog / customer stories dinámicos (CMS + SSR/ISR)
