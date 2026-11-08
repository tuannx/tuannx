import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import rawProfile from './src/data/profile.json';
import { validateProfile } from './src/engine';
import { applyProfileHead, siteUrlFrom } from './src/profile-head';

// Puts the candidate's own title, description, link-preview tags and
// schema.org JSON-LD into index.html at build time, so crawlers and link
// previews (which don't run JavaScript) see the real profile.
function profileHead(): Plugin {
  return {
    name: 'profile-head',
    transformIndexHtml: html => applyProfileHead(html, validateProfile(rawProfile), siteUrlFrom(process.env)),
  };
}

export default defineConfig({
  plugins: [react(), profileHead()],
  base: './',
});
