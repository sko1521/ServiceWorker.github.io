const chacheName = 'v1';
const cacheAsset = ['index.html','about.html','/js/main.js'];
self.addEventListener('install',(e)=>{
    console.log(`Service worker installed`)

    e.waitUntil(
        caches.open(chacheName)
        .then(cache => cache.addAll(cacheAsset))
        .then(() => self.skipWaiting())
    )
})

self.addEventListener('activate',(e)=>{
    console.log(`Service worker Activated`)
    e.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cache => {
              if(cache !== cacheName) {
                console.log('Service Worker: Clearing Old Cache');
                return caches.delete(cache);
              }
            })
          );
        })
      );
})

self.addEventListener('fetch', (e)=>{
    e.respondWith(
        fetch(e.request).catch(() => caches.fatch(e.request))
    )
})