/**
 * Configuración central del sitio. Todo dato de identidad (nombre, copy SEO,
 * redes) vive acá — las páginas y componentes lo consumen, nunca lo duplican.
 */
export const SITE = {
  name: 'Iterra',
  /** Claim de marca — se usa como título por defecto y en JSON-LD. */
  tagline: 'Convertimos el caos en estructura',
  description:
    'Consultora de tecnología y operaciones. Convertimos la intuición y el caos operativo en sistemas claros, decisiones firmes y control real.',
  lang: 'es-AR',
  locale: 'es_AR',
  ogImage: '/og/og-default.png',
  /** Completar cuando existan los perfiles oficiales. */
  socialLinks: [] as string[],
} as const;

/** Título de pestaña/OG: "Página — Iterra" o el claim si no hay título. */
export function pageTitle(title?: string): string {
  return title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}
