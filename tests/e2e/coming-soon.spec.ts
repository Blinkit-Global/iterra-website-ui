import { expect, test } from '@playwright/test';

test.describe('coming soon', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('muestra logo, overline y aviso', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Iterra' })).toBeVisible();
    await expect(page.getByText('Sitio en construcción', { exact: true })).toBeVisible();
    await expect(page.getByText('Muy pronto')).toBeVisible();
  });

  test('la capa de revelado tiene las frases de marca', async ({ page }) => {
    await expect(page.getByText('Iterar: la práctica que nos acerca.')).toBeAttached();
    await expect(page.getByText('Hacer historia.')).toBeAttached();
  });

  test('las formas pilares acompañan con opacidad baja', async ({ page }) => {
    const shapes = page.locator('.shp');
    await expect(shapes).toHaveCount(5);

    const opacity = await shapes.first().evaluate((el) => getComputedStyle(el).opacity);
    expect(Number(opacity)).toBeLessThanOrEqual(0.3);
  });

  test('el revelado sigue al puntero', async ({ page, isMobile }) => {
    test.skip(isMobile, 'el seguimiento de puntero es solo desktop; en touch actúa la deriva');

    const stage = page.locator('#stage');
    const mxAt = () =>
      stage.evaluate(
        (el) => el.style.getPropertyValue('--mx') || getComputedStyle(el).getPropertyValue('--mx'),
      );

    await page.mouse.move(100, 100);
    await page.waitForTimeout(400);
    const before = await mxAt();

    await page.mouse.move(600, 500);
    await page.waitForTimeout(400);
    const after = await mxAt();

    expect(after).not.toBe(before);
  });

  test('con reduced motion el revelado queda estático', async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto('/');
    await page.waitForTimeout(600);

    const inlineMx = await page
      .locator('#stage')
      .evaluate((el) => el.style.getPropertyValue('--mx'));
    // Sin animación: GSAP nunca escribe --mx, queda el valor estático del CSS
    expect(inlineMx).toBe('');

    await context.close();
  });
});
