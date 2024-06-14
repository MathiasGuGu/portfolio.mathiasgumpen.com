export { renderers } from '../renderers.mjs';

const page = () => import('./pages/__CFIO-PdO.mjs').then(n => n._);

export { page };
