export const asset = (p) =>
  new URL(p.startsWith('/') ? p : `/${p}`, import.meta.env.BASE_URL).href;
