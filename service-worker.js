const CACHE_NAME = 'curious-souls-cafe-v3';

const FILES_TO_CACHE = [
  // Root and main pages
  '/',
  '/index.html',
  '/readme.html',
  '/manifest.json',

  // Data files
  '/data/action-prompts.txt',
  '/data/quotes.txt',

  // Questions
  '/questions/authenticity.txt',
  '/questions/friendship.txt',
  '/questions/happiness.txt',
  '/questions/icebreaker.txt',
  '/questions/inner-child.txt',
  '/questions/interdependence.txt',
  '/questions/love-relationships.txt',
  '/questions/parenting.txt',
  '/questions/reflection.txt',
  '/questions/reimagine.txt',
  '/questions/work-that-resonates.txt',
  '/questions/the-mind-speaks.txt',
  '/questions/transitions.txt',

  // Pages
  '/pages/action-prompts.html',
  '/pages/authenticity.html',
  '/pages/custom-questions-display.html',
  '/pages/custom-questions-input.html',
  '/pages/dice-roll.html',
  '/pages/friendship.html',
  '/pages/happiness.html',
  '/pages/icebreaker.html',
  '/pages/inner-child.html',
  '/pages/interdependence.html',
  '/pages/live-discussion.html',
  '/pages/love-relationships.html',
  '/pages/parenting.html',
  '/pages/reflection.html',
  '/pages/reimagine.html',
  '/pages/work-that-resonates.html',
  '/pages/the-mind-speaks.html',
  '/pages/transitions.html',
  '/pages/welcome.html',

  // Images
  '/images/csc_logo.jpg',
  '/images/favicon.ico',
  '/images/qr-code.png',

  // Icons
  '/images/icons/apple-touch-icon.png',
  '/images/icons/icon-48.png',
  '/images/icons/icon-72.png',
  '/images/icons/icon-96.png',
  '/images/icons/icon-128.png',
  '/images/icons/icon-192-maskable.png',
  '/images/icons/icon-256.png',
  '/images/icons/icon-384.png',
  '/images/icons/icon-512-maskable.png',
];

// Install: cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: respond from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});