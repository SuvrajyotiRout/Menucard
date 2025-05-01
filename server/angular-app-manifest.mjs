
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5033, hash: '43edf79ba8dc4e0d656487f8c656aa7c743cd42cf6ecd4696b3a1f189d4ca218', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: 'aeea8570c766e3b8a49d954e2fa864e2c643c2dbdbc5d62758517a0034decd9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24983, hash: '68c61f1b79744b341c2018204fd8808afffd6a5eb4261a47a3b22c4ee3cd8ff1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2YOFVBP7.css': {size: 231011, hash: '46sy/igHbhg', text: () => import('./assets-chunks/styles-2YOFVBP7_css.mjs').then(m => m.default)}
  },
};
