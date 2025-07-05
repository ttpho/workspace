'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1914905880f71e297d3ba355f9fcf1e4",
"version.json": "38e50d4d9e15cac6ef0cec3ea1886b6a",
"index.html": "a3f7d93193bed97a113b368a2b51c652",
"/": "a3f7d93193bed97a113b368a2b51c652",
"main.dart.js": "0bd94487dbd6191a44f1fac924303444",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "be6611073ede80db600b334d3d30e0f5",
"icons/Icon-192.png": "4faa8260078eaca6d52b9133acd7b060",
"icons/Icon-maskable-192.png": "ca91eefbd84c0065a0070184a6b96d30",
"icons/Icon-maskable-512.png": "a02e6862ea067be1ddf436316a22fceb",
"icons/Icon-512.png": "f33559593f945878673be2e4b74b51ec",
"manifest.json": "39418b5d67fe7c13cd46c26755eef0d8",
"assets/AssetManifest.json": "e020267e683b49f9d9a0fc1a45f98bc1",
"assets/NOTICES": "040da0061046fd61bc14fa9cd5614d2f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c987d18e0786efa715d2e39eaccc74e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0cc74bb30d1c290960c4b62a606d6d61",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/stickers/234999680.png": "f2318b649cc513d143fc58a57de34831",
"assets/assets/stickers/234999694.png": "239a45e1b37ec23ca7ff680bff48b246",
"assets/assets/stickers/106187188.png": "fb814c28632123402b14797417d33367",
"assets/assets/stickers/106187177.png": "24ce28ffc679e6d0fb677d1a8f250508",
"assets/assets/stickers/106187176.png": "18de7e40e9921d206f1d99c3dd3be74f",
"assets/assets/stickers/106187189.png": "5641e67b93375eb085989b8881950605",
"assets/assets/stickers/234999695.png": "857865f9292826b9b645357b1071e365",
"assets/assets/stickers/234999681.png": "2f63f62970b954e836ac609d52d642bd",
"assets/assets/stickers/234999697.png": "df28633c7de310c69a45189d991c8417",
"assets/assets/stickers/234999683.png": "e75f45c633bcbd3ccbf7404ac175162d",
"assets/assets/stickers/106187174.png": "777b5efd5dd2e98a76ef4f0a37d79f94",
"assets/assets/stickers/106187175.png": "3d572fe8cdf6827efb880b06a0b22c6d",
"assets/assets/stickers/234999682.png": "98188a626fbd2a75353b076f22408d65",
"assets/assets/stickers/234999696.png": "c620f8e72b17a969046b3f905e2b51a3",
"assets/assets/stickers/234999679.png": "6a6d550ec62d58d8d3d06f3b135d7fa7",
"assets/assets/stickers/234999686.png": "cb102ef1a4d5e4335352db128d188632",
"assets/assets/stickers/234999687.png": "c94f2be331292c5e961763f378ea94a8",
"assets/assets/stickers/234999678.png": "8f592d7f8401f760bd5d0148e6e01351",
"assets/assets/stickers/234999685.png": "89f6d45cea3a2e6f123e994425b3bfe0",
"assets/assets/stickers/234999691.png": "a6c09fb0ebd19c50b1f996add70ccf4d",
"assets/assets/stickers/234999690.png": "eb8895ecb93db4e60d290141299e8fa0",
"assets/assets/stickers/234999684.png": "e72a96acc6f1f7f5f46c44d92d88b5a6",
"assets/assets/stickers/234999689.png": "08c902c2b01ea204cc67b354da537482",
"assets/assets/stickers/106187181.png": "eb7e5e1ff99ff19664837aa58657c6c8",
"assets/assets/stickers/106187195.png": "b97ddfa6bc4802d197d8f2ea8ec519aa",
"assets/assets/stickers/106187194.png": "f2df5a5a3acf236989a47314a3dd6235",
"assets/assets/stickers/106187180.png": "8d66963be6d59c70e8bdf80aedcbe06e",
"assets/assets/stickers/234999688.png": "11437779fb2589f057a5e7b896c10a18",
"assets/assets/stickers/106187196.png": "0a0eff6958e283cb81d29fe68f4b557b",
"assets/assets/stickers/106187182.png": "d69816544553be27b1c271d5284091d3",
"assets/assets/stickers/234999701.png": "b176a1503fb67dfbc4be53e66ebb0761",
"assets/assets/stickers/234999700.png": "4dbecfccbba3c6a57a54f325b4efffc0",
"assets/assets/stickers/106187183.png": "103ae88afdb360dda104f5467d59a22a",
"assets/assets/stickers/106187193.png": "20abad65fb54be6c1b6a3e71b2f73c63",
"assets/assets/stickers/106187187.png": "bfa04eb56e8c3542e4a18cb38b77fe0b",
"assets/assets/stickers/106187178.png": "db8b3e3664f4d7d964aa31e6444d2efd",
"assets/assets/stickers/106187179.png": "d9a95d624d5cf50398b6db926716f290",
"assets/assets/stickers/106187186.png": "753c0c19d77570ef957659994bb2e479",
"assets/assets/stickers/106187192.png": "cbaed2eeb5d83f668a57f15c3af762c1",
"assets/assets/stickers/234999698.png": "46440cf4f7597bd83c8fbb5a6b58e30b",
"assets/assets/stickers/106187184.png": "19fc75dd3fe22947cc1efdbbcabb174e",
"assets/assets/stickers/106187190.png": "e6f8bfb19ae9da82759023252c5f519d",
"assets/assets/stickers/106187191.png": "760744c7abd3bb4d3319b19874fa9f0c",
"assets/assets/stickers/234999699.png": "6da1ecd17d6870d2e4f0404b3a5ff01b",
"assets/assets/localization_tools/vs-code.svg": "fb04093bf828b3669791c89d47ca6f8c",
"assets/assets/localization_tools/carbon.png": "84cccd6ce871c107ba8821ce88eb196e",
"assets/assets/localization_tools/xcode.svg": "a529e8c470edaa98a2dd4c19fd18cae1",
"assets/assets/localization_tools/logo.png": "9d6a096117c64ed40cc99f899870a453",
"assets/assets/localization_tools/carbon_0.png": "3133bdbf898ba71e33de6aba92b80d1b",
"assets/assets/localization_tools/ios.svg": "2f167508af18e2e13173521b168b2628",
"assets/assets/localization_tools/carbon_1.png": "09d29a22ae78065d080d3425ae58966d",
"assets/assets/localization_tools/carbon_3.png": "8678ff80d2003cc89beb37d3bc45b393",
"assets/assets/localization_tools/carbon_2.png": "497001d90c8ebd0fdd45448c79c7d41b",
"assets/assets/localization_tools/android-studio.svg": "c05f722cd090ff11c7a04257e641f40d",
"assets/assets/localization_tools/carbon_4.png": "5be7c81d356145360a79499c5b8b4c1c",
"assets/assets/anims/robot.json": "546b884a43a2e91d64bc7a6b3aa0ab41",
"assets/assets/icons/todo.svg": "fb9eb4130e3bb60483add7c5662bb44a",
"assets/assets/icons/dartJ.svg": "7fcce799013992a9b2cd62ffdae7ef33",
"assets/assets/icons/kanban.svg": "03922c826f04c144c775e295c66cba5a",
"assets/assets/icons/markdown.svg": "c2abd04f87a8cd9185de031f74912702",
"assets/assets/icons/qr_code.svg": "2fd53ad483ac39f82566a498aaeb2ce4",
"assets/assets/wallpaper/nha_trang_view.JPG": "fd5313066f5eee816e41a24cc995f6bd",
"assets/assets/wallpaper/list_image_url.json": "2363fb7188d108d617ddb570eab04997",
"assets/assets/emojis/emoji.json": "9b87a1d47af6054221075d4b484e03bd",
"assets/assets/ai_provider/notebookLM.png": "8183e129bb03e5542c11934902eb2ba7",
"assets/assets/ai_provider/openAI.png": "99311761f1c7396b761b6ec4b34e1633",
"assets/assets/ai_provider/github.png": "04d4fd61ab07ca064dbd77651f5f0e2f",
"assets/assets/ai_provider/gemini.png": "3836f99d99682ff23492aeafdf068330",
"assets/assets/ai_provider/duckduckgo.png": "79f48013752d2bf16572c3182ca09fef",
"assets/assets/ai_provider/grok.png": "e08a2ce3689d9777e7669b3c2e0a54d8",
"assets/google_fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/google_fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"assets/google_fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/google_fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/google_fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/google_fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/google_fonts/RobotoMono-VariableFont_wght.ttf": "fb485e02e4ff69b803f1c4737f753e4e",
"assets/google_fonts/RobotoMono-Italic-VariableFont_wght.ttf": "10a13855144be200636af7bf3b863ad9",
"assets/google_fonts/Ubuntu-LightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/google_fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/google_fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/google_fonts/Lato-BlackItalic.ttf": "047217f671c9e0849c97d43e26543046",
"assets/google_fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/google_fonts/NotoSans-VariableFont_wdth,wght.ttf": "b72e420edb95cdf06e6e0a27bc0d964d",
"assets/google_fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf": "57b81d1ff243238df110e225d8891400",
"assets/google_fonts/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/google_fonts/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/google_fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/google_fonts/Orbitron-VariableFont_wght.ttf": "8c918f61234884ff360426d3d1f3dfd3",
"assets/google_fonts/Lato-ThinItalic.ttf": "2b26bc77c3f9432c9d4ca4911520294d",
"assets/google_fonts/Ubuntu-BoldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/google_fonts/NotoColorEmoji-Regular.ttf": "4981d3d22bda9c3d0791c13cb612e95d",
"assets/google_fonts/Ubuntu-Italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/google_fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
