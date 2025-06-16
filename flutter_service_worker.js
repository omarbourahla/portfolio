'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c9c4179e7c71669b403ed4981e17e1b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dec6c87a6466e9487f59ff2e9b125255",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "70e82207f38ae18beab9a3ef25ad0bc2",
".git/logs/refs/heads/master": "70e82207f38ae18beab9a3ef25ad0bc2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/16/90ad2f1fb3a8dd65ee831ced700ab99f496168": "0bbf6a6c7e517c0ad01b270e95bc5f0e",
".git/objects/18/8f1af660769c916cc2fa84ffd2c902f4c2830b": "12c7fc316566cd157281fb3f62d0f9e3",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/d46515d39782f386058d908bf03bf1408734c3": "29c09023c00f859fc2c9778f1cd56dbc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/30/6f67618c651c760acd8a578d869154b6c5af1a": "d4b2a479e2abca553a02f7e3408a5c68",
".git/objects/33/479614ad09010999748a336480d39a9dec842b": "dc0fc9dc4db030c278abf774cb3e4575",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/acc83a0d59c93217f9343e99e9b8779d405f1b": "202c64a17092a4c44c586bbddaaba68b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/51/602cb45fae027cc51a95492a859bce16215abe": "c7fed95d4725ee59535ccac208e3c1fc",
".git/objects/52/e149b7bc9765759163549f5b3f8ef09fc391d8": "b194c3403ded74bf025b654f78830555",
".git/objects/56/27363f383739ed5108c98837178b0289a46d11": "9ca87fa7953557ae5a67b7ebccf75cb0",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/2fae8b6d187f591bead7ab5530bd08505d53e8": "0b9b1d468abf50fb1925a416c4137e82",
".git/objects/65/7dbf1527c747ba4c366dbe19752206f0f2f90c": "e2a6871d5e1db7ade14acc3615d2173a",
".git/objects/69/4d7c7d810ab7bd3201ad20fcd1899f70bc84aa": "817cda30c5aeaf332b703f9237e2a789",
".git/objects/6a/5dc71e12698701b4c74f06d40bf37c9da20892": "30ed990546a5188e93ad846bc2306268",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/29bee69b288e2075a2b07426501513509c15c9": "144dc3ded72243c16fbdff47081fc211",
".git/objects/79/a4e9e4836888dab188ddd57647d57077e1d315": "14f526153c528fc850fe5abcdfee219c",
".git/objects/7c/dc881e0ea0fff79e9029d243b45206a2ab5426": "6561eba88de8c3e0e3396c5fbff35e34",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/0b35e4cbab4a4cb4e0d4243fc586ad8377fd6a": "b38a9db5ac5c5a17adc43d8dfc8bc142",
".git/objects/88/98b13e95528799ca48035afdf4f798ced0ad6e": "c75f0d15fbafda9d5df54c1cc51d315e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/48a4423ff43e9abd3de0c86e831931476eaa8a": "6620649fad62eb1521d772852549ca2b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a5/01af1f31fa576332b1a69cb4b8ce50dc021c02": "fbda334f78372b34007854e5bcaf86e6",
".git/objects/a5/15703049d79e69168759bce08c2a3a2865aed1": "f04350cb79b60c918a0ece05b197aba0",
".git/objects/ae/7d98479ada9dbbb458b1d7e82f284296f043f0": "565034f6344a1d8d3327fe9efe7b313e",
".git/objects/b1/5b843742e02119b6313a971d0652e5eb32dd75": "f019450fb28d6f11f54a0319a0b994a2",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/bd55133694db5beaf7e6c1301c7cbfa6baaa49": "74b4f97b2d31c014594138d97e22bba8",
".git/objects/c7/47e7b4a8d724763449fbc06af4731e79b3d489": "1339a41d354b0e6b14ea855b364e8bc4",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/8a2d2413f705bb315fa30af6c8dd245c6e64f8": "16b776f63b96c5a2d962fc9723373cd8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/ae1617cf202de872efc25a6b7dfe133fc9c20e": "f16d532d0efd821558fdf27cf3d46623",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/21f6dda2aed08eedb72ede2eefe2c338906870": "7120b087cace05d7c5923099848eccd0",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "23f8ad08b95ab592c13e11405caab667",
"assets/AssetManifest.bin": "72cfe8a443a46f0c484892fb7c851567",
"assets/AssetManifest.bin.json": "bc678713094c10db09e583b0513b362e",
"assets/AssetManifest.json": "df367a3e92d485ea6099c0b894c9d3f6",
"assets/assets/CRMS/image1.png": "66c9173850a2268ec51f40780bdf737c",
"assets/assets/CRMS/image2.png": "0e1f08bfcc07f602eaf2513e1d8cd9ce",
"assets/assets/CRMS/image3.png": "292b3a33b70f4a36b9bf6254fda06722",
"assets/assets/CRMS/image4.png": "cde6a3037f984601d42dad5cd34aadec",
"assets/assets/CRMS/image5.png": "6c8578a49eb04834efa85da8a664a774",
"assets/assets/gmail.png": "a9beb9bb39e2321dd0d6d9b0ed21ba3f",
"assets/assets/instagram.png": "50f7cefbfb1f11650dfdc213c94995fe",
"assets/assets/linkedin.png": "6db963fcbb0b63f3eed7397b8a36a6d1",
"assets/assets/profile.png": "e44bf1122b29b661d47d46cbb99d3218",
"assets/assets/skills/firebase.png": "45ec5c8523c42019e2aa9fe5436750af",
"assets/assets/skills/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/skills/git.png": "61addc5bed6c9693631b1b4a636f1708",
"assets/assets/skills/github.png": "e45ebd5258d77392cb78ceb7b3133eeb",
"assets/assets/skills/mysql.png": "bab2c760c60f17191cb3a002e08a3dbf",
"assets/assets/skills/nodejs.png": "cb1d08f4ec679b7b13d9e7fce1e77eeb",
"assets/assets/skills/sequelize.png": "724253526c73f2c0da0c80aa2ca9d984",
"assets/assets/skills/sqlserver.png": "3cd96b6df33c6575110ca2670a77f489",
"assets/assets/upwork.png": "60f5b2334c54a09b98d08eb04b286047",
"assets/assets/webetu/1.jpg": "23b2b6827a4b09d6683c3237aa70b0fc",
"assets/assets/webetu/2.jpg": "6c557dbbb3d3a08ce165da6765596666",
"assets/assets/webetu/3.jpg": "afe01811fba362af131d7c4b7d664bc9",
"assets/assets/webetu/4.jpg": "1c1cfb03d6ba679ca185c29b4d3883ab",
"assets/assets/webetu/5.jpg": "f196f22b8f04328b373ff1741f9cc7c9",
"assets/assets/webetu/6.jpg": "575457a9ffcd10c426df0a5e9b70b517",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a69ca4668331e7e9cff2af6ad934e1d7",
"assets/NOTICES": "82d05ea2f040d4c9adace6749fadf8ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "192fd1b18b7da341e80b74af958b6547",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41456be4dff75da9aeca1a9cf4f2ff55",
"/": "41456be4dff75da9aeca1a9cf4f2ff55",
"main.dart.js": "e20d89e9816521c55792449b9ede88d9",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
