/**
 * Launch switch. While false, `/` shows the coming-soon page and every other page
 * redirects there (see next.config.ts). Set SITE_LIVE=true in Vercel and redeploy to launch.
 */
export const SITE_LIVE = process.env.SITE_LIVE === "true";
