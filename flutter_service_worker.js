'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "66b3794454a9c14b812049a0733ee65e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cd11bda9e998e92a751c4c6473e77013",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9a53cd0a8d160fadf3179ffd03d0c0c5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "074f2aefd2246838def72286e4859405",
".git/logs/refs/heads/main": "074f2aefd2246838def72286e4859405",
".git/logs/refs/remotes/origin/HEAD": "85df313b56dc945914fb28b738dbe3cf",
".git/logs/refs/remotes/origin/main": "51a1571faf5bcf58f67e4976e9a825af",
".git/objects/0b/64d86ab9c2d1bb6d9d1319d10b42c2eec3edf7": "0d85e8ffdca6bbed65a268bf819efbc2",
".git/objects/11/b85524c9ba6030eb2b4f10356c6172605965ca": "2799d6269989cd2dcf7af28fb906547d",
".git/objects/13/2ea44b7620a77238671bdfab590eb63ee5791f": "e33bda627fb358dc64d79304d96b5aee",
".git/objects/31/a7110c891510b904d785c2f5c226ac73b9bb1e": "4763ff648b7ccd96285157f675ab0962",
".git/objects/39/519af7c25c6ebfc9e70440113723bdb65dd9a7": "090b7ac9fdd9985b0ed59608dd7e817f",
".git/objects/3f/1357fe4e423bcd5197b5e6e8afa97a4175688b": "9bb8ffcd89714e2870186b4f7eb8adb4",
".git/objects/43/096f6835abe67c6bbae2db4bc076a56fdf0091": "4926cb1aaa48955981b8e1023356452d",
".git/objects/4d/69c8e2c14b86eceaeeca5ff47f631396a5ba64": "73f6640ef67a30b307305b245ca90e08",
".git/objects/54/5605ce66aeb1cf1421577e15f00a8a8a904200": "6b1734bd311095e79416f11ddff7b97a",
".git/objects/5b/3379408d0b50040d9e223e2d2ff47d775d3099": "c06e25c363d75fbd545236591d67e61d",
".git/objects/61/519337b4c70f9ffbcd5f5c6f1ffc6d0b6e1df2": "46037d067425b6d34bfa839491b1d2fd",
".git/objects/6c/0ae51f669e3ef8b2cd35f1ef7a696a7ca45d90": "c1bd970bb8ca9d82b1d886eb8ce11dae",
".git/objects/6d/e0e1969097af9a8a828529745c82a47c5aa074": "428debc0d5f2da0768ceefaf2233cf04",
".git/objects/7b/7a697b6f167f9da355b0fae13c8ea3e1e22aea": "8b0d979f17ba10c04643a2579b9f63cd",
".git/objects/7c/c19570f21e0ae3bd21feaf25776cec74561dfa": "b981d3736a7957a2cf3e108572350c92",
".git/objects/8f/15515fad7c3fb889f712efac9ca8e71d83ae37": "bda0e8768e96926979c08af2a297cd5a",
".git/objects/97/0198fadc8c14e10b394714c293c02eb95ea55c": "0cc650538f53e7e1dd511ff1aebe323d",
".git/objects/ab/857c4ca087055aabf430f251b099531f30c648": "a051dc911d4a88f60232d2880d33b25e",
".git/objects/c5/78e90ebbc40f869d514c5b2ff09eb1ee305a6a": "69b7ef5174d1353f343ff10cbff3f9e9",
".git/objects/c7/b806a6001483e311e1330d98490272fe46bb64": "ceb2585d258637690b35abf66f8a710e",
".git/objects/d5/cf78ef7fcdc7569278e00e14c51375d82fa766": "f55b40cf8a62ed2ecfa699a67f76ff6c",
".git/objects/d6/6e07143dc0f6007d48a61a600236b7129506ab": "5e919a254a069eff47e88c0fc162b9cc",
".git/objects/d6/89f85a102a920e22f861695857a72782a0dfe9": "62f8d436db7b86a1f1dc0cc1f610aee2",
".git/objects/e5/50cca52d7020d59ea56fe9aabb7c1747dd713c": "f4539ef287b995b33db2f28763ea7a11",
".git/objects/ea/00b72685b5e44898daf87134280c36c28d22a2": "face6567ae03c28f9acefd73bfec4a39",
".git/objects/fc/821346af264b8182f6f48d70cd130eac4ec3bf": "574cc5dbc4bccc3dfff8e029528cbbef",
".git/objects/pack/pack-9b4b953336613e42227eaedb98332dc021561cf4.idx": "c494098bf5b9f85e307023fff468cd22",
".git/objects/pack/pack-9b4b953336613e42227eaedb98332dc021561cf4.pack": "a667795c09558ba92d7a2e74427eb196",
".git/ORIG_HEAD": "3c4a6bb7730298125f52115db10b46ae",
".git/packed-refs": "a1952f2bdeb092d4858bf51e3bb7b1da",
".git/refs/heads/main": "3c4a6bb7730298125f52115db10b46ae",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3c4a6bb7730298125f52115db10b46ae",
"assets/AssetManifest.json": "e00acca7379442bf81309279656cb08a",
"assets/assets/fonts/EncodeSansExpanded-Black.ttf": "6531624f7d5b8e0a24b643309d9b4e8d",
"assets/assets/fonts/EncodeSansExpanded-Bold.ttf": "cbcf863faa649d9e258d464ca1a58708",
"assets/assets/fonts/EncodeSansExpanded-ExtraBold.ttf": "5e572bb399e1868b020234491477fa20",
"assets/assets/fonts/EncodeSansExpanded-ExtraLight.ttf": "7f391b84462f4a1587dea0df29bcd855",
"assets/assets/fonts/EncodeSansExpanded-Light.ttf": "b1c1626fbe6cb8fcaac6118e7fa59e07",
"assets/assets/fonts/EncodeSansExpanded-Medium.ttf": "fc0a72d2e4d3d70c2749a4e1a101160e",
"assets/assets/fonts/EncodeSansExpanded-Regular.ttf": "7b36b6375528ed0c52aad1705c362aee",
"assets/assets/fonts/EncodeSansExpanded-SemiBold.ttf": "cc9531559377886d0793d0039d786144",
"assets/assets/fonts/EncodeSansExpanded-Thin.ttf": "140b1aba3dbe8e96f1b65929bbb22f2f",
"assets/assets/images/error.jpg": "e7a95858fe8e0fe762854dd783aac74c",
"assets/assets/images/error_1.png": "472015069491da835dd4a0ebc72543ee",
"assets/assets/images/landing.jpg": "482afbb7f65a1be868ee8007f8f3da16",
"assets/assets/images/logo.png": "0ac852a1cc48ba03d99fc2475a6fe175",
"assets/assets/images/logo5.png": "58777837963c949ec87b997baed38ae3",
"assets/assets/images/placeholder.jpg": "168161f61c24783c2610be0164741597",
"assets/assets/images/profileIcon.png": "633c328a5d4b1e551652bf1423e354bb",
"assets/assets/images/qr.png": "a565629f76debce8eb1068fe43dd0317",
"assets/assets/images/stadium.jpg": "d2107e5c144b3c5e7d8f56d37d14a0e6",
"assets/assets/images/stadiumIcon.png": "5ce5ee55f95bdc75fbdc8cbff4c88109",
"assets/FontManifest.json": "8e143df52fcff9b9801a5b7ba5965def",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f9a10d1e5e0372331f8d35e563004317",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1c97256012bec652c1332b5b2579f1c0",
"/": "1c97256012bec652c1332b5b2579f1c0",
"main.dart.js": "b7089020ca0f9e8c2540108d88894d4a",
"manifest.json": "eac8686b9c234582f6239ce388a85a6e",
"version.json": "972a0b7ce35706ad4051f7a9ab7e4dc3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
