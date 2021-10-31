// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import { imagetools } from 'vite-imagetools';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  vite: {
    plugins: [imagetools()],
  },
});
