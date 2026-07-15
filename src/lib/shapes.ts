/**
 * Las cinco formas de marca — una por pilar de Iterra.
 * Cada forma tiene un color canónico BLOQUEADO por regla de marca:
 * no se recolorea a través de pilares (ver AGENTS.md §Formas).
 */
export const SHAPES = {
  sol: {
    pillar: 'Claridad por sobre comodidad',
    color: 'var(--iterra-lime)',
  },
  arco: {
    pillar: 'Buscar más allá de lo obvio',
    color: 'var(--iterra-sky)',
  },
  nucleo: {
    pillar: 'Ética de la entrega',
    color: 'var(--iterra-orange)',
  },
  hoja: {
    pillar: 'Cooperación por encima del ego',
    color: 'var(--iterra-pink)',
  },
  piedra: {
    pillar: 'Presente de calidad',
    color: 'var(--iterra-brown)',
  },
} as const;

export type ShapeName = keyof typeof SHAPES;
