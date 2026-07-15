import { expect, test } from '@playwright/test';

test.describe('home', () => {
  test('carga sin errores de consola y con el idioma correcto', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('lang', 'es-AR');
    expect(errors).toEqual([]);
  });

  test('expone metadata SEO completa', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Iterra/);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og/);

    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1);
    const parsed = JSON.parse((await jsonLd.textContent()) ?? '{}');
    const types = parsed['@graph']?.map((node: { '@type': string }) => node['@type']);
    expect(types).toEqual(expect.arrayContaining(['Organization', 'WebSite']));
  });

  test('aplica los tokens del design system', async ({ page }) => {
    await page.goto('/');

    const lime = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--iterra-lime').trim(),
    );
    expect(lime.toLowerCase()).toBe('#d8fe5b');

    const bodyFont = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
    expect(bodyFont).toContain('Hanken Grotesk');
  });
});

test.describe('descubribilidad', () => {
  test('sirve robots.txt con sitemap y llms.txt', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBeTruthy();
    const body = await robots.text();
    expect(body).toContain('Sitemap:');
    expect(body).toContain('llms.txt');

    const llms = await request.get('/llms.txt');
    expect(llms.ok()).toBeTruthy();
    expect(await llms.text()).toContain('# Iterra');
  });
});
