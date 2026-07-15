import { describe, expect, it } from 'vitest';

import { pageTitle, SITE } from '../../src/lib/site';

describe('pageTitle', () => {
  it('agrega el sufijo de marca a un título de página', () => {
    expect(pageTitle('Servicios')).toBe('Servicios — Iterra');
  });

  it('usa el claim de marca cuando no hay título', () => {
    expect(pageTitle()).toBe(`Iterra — ${SITE.tagline}`);
  });
});

describe('SITE', () => {
  it('define idioma y locale rioplatenses', () => {
    expect(SITE.lang).toBe('es-AR');
    expect(SITE.locale).toBe('es_AR');
  });

  it('apunta a una OG image existente en public/', () => {
    expect(SITE.ogImage).toMatch(/^\/og\//);
  });
});
