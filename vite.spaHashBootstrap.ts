import type { Plugin } from 'vite';
import { VALID_PAGE_ROUTES } from './src/routing';

/** Inline script: legacy `/#faq` bookmarks → `/faq` before React loads. */
export function spaHashBootstrap(): Plugin {
  const slugs = VALID_PAGE_ROUTES.filter((route) => route !== 'home');
  const routesLiteral = slugs.map((slug) => `${JSON.stringify(slug)}:1`).join(',');

  const script = `(function(){var h=(location.hash||"").replace(/^#\\/?/,"");var r={${routesLiteral}};if(h&&r[h]){history.replaceState(null,"","/"+h+location.search);}else if(location.hash){history.replaceState(null,"",location.pathname+location.search);}})();`;

  return {
    name: 'spa-hash-bootstrap',
    transformIndexHtml(html) {
      const snippet = `<script>${script}</script>`;
      if (html.includes('<!-- INJECT_SPA_HASH_BOOTSTRAP -->')) {
        return html.replace('<!-- INJECT_SPA_HASH_BOOTSTRAP -->', snippet);
      }
      return html;
    },
  };
}
