const CACHE_NAME = '20251007-04';

const FILES_TO_CACHE = [
  // Root and main pages
  '/',
  '/index.html',
  '/readme.html',
  '/README.md',
  '/manifest.json',

  // Data files
  '/data/action-prompts.txt',
  '/data/famous-quotes.txt',

  // Questions
  '/questions/authenticity.txt',
  '/questions/friendship.txt',
  '/questions/happiness.txt',
  '/questions/icebreaker.txt',
  '/questions/inner-child.txt',
  '/questions/interdependence.txt',
  '/questions/love-relationships.txt',
  '/questions/parenting.txt',
  '/questions/purpose.txt',
  '/questions/reflection.txt',
  '/questions/reimagine.txt',
  '/questions/work-that-resonates.txt',
  '/questions/the-mind-speaks.txt',
  '/questions/transitions.txt',
  '/questions/adulthood.txt',
  '/questions/entrepreneurship.txt',
  '/questions/all-in-one.txt',
  '/questions/global-curiosities.txt',
  '/questions/true-wealth.txt',
  '/questions/legacy.txt',

  // Pages
  '/pages/action-prompts.html',
  '/action-prompts/index.html',
  '/pages/authenticity.html',
  '/topics/authenticity/index.html',
  '/topics/authenticity/about/index.html',
  '/pages/custom-questions-display.html',
  '/pages/custom-questions-input.html',
  '/custom-questions/index.html',
  '/custom-questions/imported/index.html',
  '/pages/dice.html',
  '/dice/index.html',
  '/pages/friendship/index.html',
  '/topics/friendship/index.html',
  '/topics/friendship/about/index.html',
  '/pages/happiness.html',
  '/topics/happiness/index.html',
  '/topics/happiness/about/index.html',
  '/pages/icebreaker.html',
  '/topics/icebreaker/index.html',
  '/topics/icebreaker/about/index.html',
  '/pages/inner-child.html',
  '/topics/inner-child/index.html',
  '/topics/inner-child/about/index.html',
  '/pages/interdependence.html',
  '/topics/interdependence/index.html',
  '/topics/interdependence/about/index.html',
  '/pages/live-discussion.html',
  '/topics/live-discussion/index.html',
  '/topics/live-discussion/about/index.html',
  '/pages/love-relationships.html',
  '/topics/love-relationships/index.html',
  '/topics/love-relationships/about/index.html',
  '/pages/parenting.html',
  '/topics/parenting/index.html',
  '/topics/parenting/about/index.html',
  '/pages/purpose.html',
  '/topics/purpose/index.html',
  '/topics/purpose/about/index.html',
  '/pages/reflection.html',
  '/topics/reflection/index.html',
  '/topics/reflection/about/index.html',
  '/pages/reimagine.html',
  '/topics/reimagine/index.html',
  '/topics/reimagine/about/index.html',
  '/pages/work-that-resonates.html',
  '/topics/work-that-resonates/index.html',
  '/topics/work-that-resonates/about/index.html',
  '/pages/the-mind-speaks.html',
  '/topics/the-mind-speaks/index.html',
  '/topics/the-mind-speaks/about/index.html',
  '/pages/transitions.html',
  '/topics/transitions/index.html',
  '/topics/transitions/about/index.html',
  '/pages/welcome.html',
  '/pages/adulthood.html',
  '/topics/adulthood/index.html',
  '/topics/adulthood/about/index.html',
  '/pages/entrepreneurship.html',
  '/topics/entrepreneurship/index.html',
  '/topics/entrepreneurship/about/index.html',
  '/pages/all-in-one.html',
  '/topics/all-in-one/index.html',
  '/topics/all-in-one/about/index.html',
  '/pages/global-curiosities.html',
  '/topics/global-curiosities/index.html',
  '/topics/global-curiosities/about/index.html',
  '/pages/true-wealth.html',
  '/topics/true-wealth/index.html',
  '/topics/true-wealth/about/index.html',
  '/pages/saved-items.html',
  '/saved-items/index.html',
  '/pages/legacy.html',
  '/topics/legacy/index.html',
  '/topics/legacy/about/index.html',
  '/pages/global-event-list.html',

  // Pages (descriptions)
  '/pages/descriptions/authenticity.html',
  '/pages/descriptions/friendship.html',
  '/pages/descriptions/happiness.html',
  '/pages/descriptions/icebreaker.html',
  '/pages/descriptions/inner-child.html',
  '/pages/descriptions/interdependence.html',
  '/pages/descriptions/love-relationships.html',
  '/pages/descriptions/parenting.html',
  '/pages/descriptions/purpose.html',
  '/pages/descriptions/reflection.html',
  '/pages/descriptions/reimagine.html',
  '/pages/descriptions/work-that-resonates.html',
  '/pages/descriptions/the-mind-speaks.html',
  '/pages/descriptions/transitions.html',
  '/pages/descriptions/adulthood.html',
  '/pages/descriptions/entrepreneurship.html',
  '/pages/descriptions/all-in-one.html',
  '/pages/descriptions/dice.html',
  '/pages/descriptions/global-curiosities.html',
  '/pages/descriptions/true-wealth.html',
  '/pages/descriptions/legacy.html',

  // Images
  '/images/csc_logo.jpg',
  '/images/favicon.ico',
  '/images/qr/qr-code.png',
  '/images/qr/qr-code-function-action-prompts.png',
  '/images/qr/qr-code-function-custom-questions-input.png',
  '/images/qr/qr-code-function-dice.png',
  '/images/qr/qr-code-readme.png',
  '/images/qr/qr-code-topic-adulthood.png',
  '/images/qr/qr-code-topic-authenticity.png',
  '/images/qr/qr-code-topic-friendship.png',
  '/images/qr/qr-code-topic-happiness.png',
  '/images/qr/qr-code-topic-icebreaker.png',
  '/images/qr/qr-code-topic-inner-child.png',
  '/images/qr/qr-code-topic-interdependence.png',
  '/images/qr/qr-code-topic-love-relationships.png',
  '/images/qr/qr-code-topic-parenting.png',
  '/images/qr/qr-code-topic-purpose.png',
  '/images/qr/qr-code-topic-reflection.png',
  '/images/qr/qr-code-topic-reimagine.png',
  '/images/qr/qr-code-topic-the-mind-speaks.png',
  '/images/qr/qr-code-topic-transitions.png',
  '/images/qr/qr-code-topic-true-wealth.png',
  '/images/qr/qr-code-topic-work-that-resonates.png',
  '/images/qr/qr-code-topic-all-in-one.png',
  '/images/qr/qr-code-topic-legacy.png',
  '/images/qr/qr-code-topic-global-curiosities.png',
  '/images/qr/qr-code-welcome.png',

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