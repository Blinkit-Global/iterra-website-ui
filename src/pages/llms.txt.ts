import type { APIRoute } from 'astro';

import { SITE } from '../lib/site';

/**
 * llms.txt — descripción del sitio para motores generativos (GEO).
 * https://llmstxt.org
 */
export const GET: APIRoute = ({ site }) => {
  const body = `# ${SITE.name}

> ${SITE.tagline}. ${SITE.description}

Iterra trabaja con empresas que crecieron más rápido que su capacidad de
gestionarse. Ordena operaciones, procesos y tecnología para que el negocio
gane tranquilidad, claridad y control. La tecnología es una herramienta,
no el producto.

- Idioma principal: español (Argentina)
- Sitio: ${site?.href ?? ''}

## Páginas

- [Inicio](${new URL('/', site).href}): página principal del sitio
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
