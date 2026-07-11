# @clearline/ui

Clearline's brand-agnostic shared UI system. Every rule in `src/components.css`
drives off CSS custom properties (brand tokens), so a consuming site sets its own
`tokens.css` and gets its own look from the same components.

Consumed by each client site as a pinned git dependency:

    "@clearline/ui": "github:clearlinepartners/clearline-ui#v0.1.0"

Exports: `./components.css`, `./fonts.css`, `./behaviors.js`, `./Icons.astro`.
