# Guía de trabajo

Reglas para trabajar en este repositorio.

## Hacer

- Usar `src/styles/tokens/` como única fuente de verdad visual. Si falta un color, tamaño tipográfico, radio, sombra o easing, agregar primero un token.
- Consumir estilos mediante `var(--token)` o utilities de Tailwind vinculadas a los tokens.
- Mantener `src/styles/global.css` como punto de entrada y bridge de Tailwind; los valores visuales viven en los archivos de tokens.
- Escribir el contenido y la UI en español rioplatense. El código, los identificadores y los commits van en inglés.
- Reutilizar la identidad y el copy compartido desde `src/lib/site.ts`.
- Implementar interactividad con TypeScript vanilla. Usar GSAP cuando haya animación y respetar `prefers-reduced-motion`.
- Mantener focus visible, HTML semántico y navegación por teclado.
- Usar Conventional Commits en cambios chicos y coherentes. Un commit, un tema.
- Antes de cerrar un cambio, correr `pnpm lint`, `pnpm format:check`, `pnpm check` y `pnpm test`. Para cambios visibles, sumar `pnpm test:e2e`.

## Evitar

- No hardcodear colores, tamaños tipográficos, radios, sombras ni easings fuera de `src/styles/tokens/`.
- No agregar frameworks de UI sin una decisión explícita del equipo.
- No duplicar nombre, claim ni copy SEO dentro de páginas o componentes.
- No usar gradientes decorativos, bounce, spring, emojis ni glifos Unicode como íconos.
- No mezclar lima y cielo en una misma sección. Sobre fondos claros usar texto tinta; sobre fondos oscuros, crema o blanco.
- No usar lima como color de texto sobre fondos claros.
- No agregar bordes a cards claras; separarlas con elevación o un cambio de fondo definido por tokens.
- No versionar `.env`, credenciales, `node_modules/`, `dist/` ni otros archivos generados.

## Variables de entorno

Las variables públicas usan el prefijo `PUBLIC_`. Las integraciones opcionales deben quedar desactivadas cuando su variable no está configurada.
