// Join BASE_URL (e.g. "/Interactive-Product-Filter-Display/") with a relative path.
export const asset = (p) => {
  const base = (import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/';
  const path = p.startsWith('/') ? p.slice(1) : p; // drop leading slash
  return `${base}${path}`; // e.g. "/Interactive-Product-Filter-Display/images/1.svg"
};

