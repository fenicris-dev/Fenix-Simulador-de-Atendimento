/* Fênix | Simulado de Atendimento — service worker v1.7 (abre sem internet; não altera o core) */
var CACHE='fenix-simulado-v1.7';
var ARQ=['./','./index.html','./icone-192.png','./icone-512.png','./icone-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ARQ).catch(function(){});}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf('fenix-simulado-')===0&&k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);if(u.origin!==location.origin)return;
 e.respondWith(fetch(r).then(function(x){var cp=x.clone();caches.open(CACHE).then(function(c){c.put(r,cp);});return x;}).catch(function(){return caches.match(r).then(function(m){return m||caches.match('./index.html');});}));});
