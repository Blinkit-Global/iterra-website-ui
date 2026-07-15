import { describe, expect, it } from 'vitest';

import { SHAPES } from '../../src/lib/shapes';

describe('SHAPES', () => {
  it('define las cinco formas pilares', () => {
    expect(Object.keys(SHAPES).sort()).toEqual(['arco', 'hoja', 'nucleo', 'piedra', 'sol']);
  });

  it('bloquea el color canónico de cada pilar (regla de marca)', () => {
    expect(SHAPES.sol.color).toBe('var(--iterra-lime)');
    expect(SHAPES.arco.color).toBe('var(--iterra-sky)');
    expect(SHAPES.nucleo.color).toBe('var(--iterra-orange)');
    expect(SHAPES.hoja.color).toBe('var(--iterra-pink)');
    expect(SHAPES.piedra.color).toBe('var(--iterra-brown)');
  });
});
