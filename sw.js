const cacheName = 'API de tradução';

const versao = 4;

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      cache.addAll([
        './',
        './index.html',
        './manifest.webmanifest',

        './assets/css/reset.css',
        './assets/css/animations.css',
        './assets/css/styles.css',
        './assets/css/box.css',
        './assets/css/bandeira.css',

        './assets/js/periodos.js',
        './assets/js/mudancaHorario.js',

        './API/conectaApi.js',
        './API/conectaBandeiras.js',
        './API/exibeOpcoes.js',
        './API/metodoTraduzir.js',
        './API/orderAlfabetica.js',

        './assets/images/lago-01.svg',
        './assets/images/arrow.svg',

        './assets/images/bandeiras/br.svg',
        './assets/images/bandeiras/ca.svg',
        './assets/images/bandeiras/fr.svg',
        './assets/images/bandeiras/it.svg',
        './assets/images/bandeiras/jp.svg',
        './assets/images/bandeiras/mx.svg',

      ])
    })
  )
  return self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        return cachedResponse || fetch(event.request);
      })
  )
});