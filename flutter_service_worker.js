'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "f761ed1951609bf0054b817cf1217c76",
"flutter_bootstrap.js": "9f73fbe81136cc03cf84a444d0034a3e",
"version.json": "46f128f75951dbdd767d1b8659fe71db",
"safari-pinned-tab.svg": "4e7cbe368905ea4ad07ba0d8774fee6f",
"favicon.ico": "bedf0e7d59a2110718e78ba4af571383",
"index.html": "7e4d481c7948f904df388351f5b1141c",
"/": "7e4d481c7948f904df388351f5b1141c",
"android-chrome-192x192.png": "1ea7649cb2d6bfe28d6f4a60d0cb4298",
"apple-touch-icon.png": "8a99637423dc58f92740ec049d512aa4",
"main.dart.js": "08a8c036dae06b3f0976ce487bbe7e13",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"android-chrome-512x512.png": "c1194635e90acf10484a99d634de071d",
"site.webmanifest": "b43469275bf6ec5a61873cb10349ea31",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe95bfe6844786a3c8c259af3c909d16",
"mstile-150x150.png": "7bbebe02caac3ad18075e46598635e39",
".git/config": "b40c6c1b84266bb0e79e48e76ef12766",
".git/objects/59/e94d373c84e3e858256d9b2cd39d8705336e1b": "8f530cfd788df86c72ed3836ac824ca9",
".git/objects/59/a42a6fb677e2eb3c04b112d3749e257958bb80": "387253fff677354f7d4e77cac20bbeac",
".git/objects/92/415244f934926d6c87821df59dd457e815d994": "e4ef807a1a38d37d6e8bae97c7941e0e",
".git/objects/3e/83db19703123224e288a8ec67e507c3f7db088": "b500b7fac48194149e14e40bd17dcd2c",
".git/objects/6f/747f391d08af51ba29f642b76bd52fc318a0c3": "ee5265a432173baac09fb77a8069e809",
".git/objects/6a/aeded00f3b8d464305300ee7d8006428995afb": "285ae3ab3af78e6248328c5e3826995c",
".git/objects/35/2d55bf0a3dbed3bdb41d0c855ebcf81bf6691a": "39122469a709cc2fd2580685a4709d77",
".git/objects/35/8f62639ed4979093aae6dd2a7c145d49c2da6a": "5ef8033ad720aa058be8c553749cadaf",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/51/3a34f43f19a1bef550afdb6f9cd890a6071bce": "10a67a239d5aec463c24e17ef282990a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/d6a08d27d6b14e10d794301b780b60bb5fb929": "c67b699aaf44d517e1d7262e712ca9b5",
".git/objects/0b/a030c6b9938d22aac5d12ad936e14690c9c4af": "ad896b9229d634754aa9493ae82d1e2f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/a63b0ffec11f01afea008a21e630d861dee9bd": "0c9f5deb81f88e02db7315829408b4ca",
".git/objects/60/1f41693e86d3d23d3b51a3846268c47e632dac": "e3b122d1f14471f3877813b61378b429",
".git/objects/5a/f5529742ac4790ff78fadcfeefc71eea91cac8": "e0e79d5948415715277ff6cb2982509c",
".git/objects/5f/c89372c1d28a6361627aadf2f4bcd89f37bf57": "b0953a202724ffb0c59a8de890f2777c",
".git/objects/9c/a718136e9836ceb98365611513af101e5bb991": "36cb7793a381392b31ffbe424e47abe9",
".git/objects/a4/2e2158134805a1ab1c8839eee09f04c625d26e": "e1f20dbcef2eb9b2b98d9f671222aa72",
".git/objects/a3/25f95e63e3aa6555818f6b2ee68f02a414c8d0": "1ad934576c524fad0bc5a2b3215d76e9",
".git/objects/b5/f10fdd67531f37362ee4c493aee8c1f8b7db57": "44b1c83dfe82a1640ccf775d1c25f8e3",
".git/objects/b2/273b9dd22619ab65d8c99a51b3cbedd0ede26d": "479eb4938416b0408c3d613df5de107d",
".git/objects/b2/266378582f745aff224a957fd49a033515db99": "b1658be5daffa52f187c8ec16a255438",
".git/objects/bb/ed38312b24ff731041bbaaaf0a712970dd72ff": "01dc4d3b65d3d3ebbc6b0b67be9b07c5",
".git/objects/bb/8348c78f19f452722be95ad3ba716f83de0ab8": "541389384ab0cc51a1477bbfa30034bf",
".git/objects/be/740022fff41d95395441f5e9f128ec343df04a": "086eddd5644ced299c80c8cb715ecea5",
".git/objects/be/0df77386324da0abd15d66debabc6f650be601": "42d32d077aea765e3a431f88b169cd4a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/43db69563141e449bed8066484a72dd98613d3": "960a3b9354076300048c80b45f4e96ab",
".git/objects/b4/ab35605cfd57c9f41229340302b152e460f8ff": "213ff480eead408d265117b4702cf011",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/49d37daf9f867d688e9e6f1a7fb4c6326b3bf9": "1942d933132688ec0dfb0095c76a036b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/0c81429827d705d93a435f5cb0d702d8e93dc3": "cabb7471e456d594995c4a9d3bb2e4af",
".git/objects/ee/8d5e889ab30a2c0eb76439dc4cc8f772e119e8": "24f6e454e85c5b41442c75b04caea7e9",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/dee8d47a87d873bd6a925834c10fc27c1cb6a3": "365838ff2f28c04657c0ca376e16e3ba",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/2efb823bd77153177b1539d20f604254c3ddbb": "8177700cf982af4cd04624a0c2d620cd",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/be7b60eaefb10f3c9ef69da365aefd4b63d858": "28883d43a1ade3130d4b080b89023a09",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/bb1515eeedc889ff4013fd900ee26068cef462": "2df685e7af728c0d827e6808fc99846b",
".git/objects/7c/5fb6bbc5a94e94196b458db04d0790ea569c86": "3ef95e2819947f0d0c440de278c1d808",
".git/objects/89/fd43449600acf4711fec76f40b74c2065f320b": "666213e75a28753fa57b37887e229bc9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/8c2e33db3ad5cf5c14e189e2e1677186fec4ad": "97b1b608e37e050207f996305ae3c1e6",
".git/objects/74/7f44b656ee191dce8b9841ac715adfc3dcd41d": "600dbbb371c622e17fb9acfe7fc22422",
".git/objects/74/e2c37f7696e95ecfbb22da808f01ef43ec969c": "ac58206e18408de9e692494a816e4cfd",
".git/objects/17/498af6edfd30c03a13c31b7c233d450c6bee57": "05f85f937490c388c0d7be022e712ebb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/660e1aff1a567233162a2f9c50abc15ef226d1": "828233966770fcf4c7dc7778291b44a3",
".git/objects/19/b49dab3b0b461716bb9d5e395576d782f37075": "422e8297fba2be6fb9ef465031a20d33",
".git/objects/19/f59fc694f988ae188bdbc573fc8535b1a51969": "805b223c77d27226b20c65df7c59adb3",
".git/objects/26/a7b88fe1af6ab178a29ecc08ac6aef81b07dab": "5be6f9bf6b8df31c58b1768cf37e1f7c",
".git/objects/2a/44a38de00a01d11fa68949ffa236b3ac8ad818": "61dc2175ad361839db04ea227417fc57",
".git/objects/2f/c832fb127f26f8be0cae9b7eeba2793270bbd5": "5ca69c676c73b0af5df41afe7160490f",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/1ac5774f30a5306234ce4ef87251f43debe794": "9d3ff7c2087c3335638dd0e8ebb6fd65",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/65/6c9c29e1d50864ea7844dfc9633528701cd1ca": "b91d7ba3e427ddea0419826eb70b20a6",
".git/objects/96/63f3f9fd0bc908e0544ade9e3d5b8f3adefe31": "23402f2a83f2afe1221ea6736baeb61f",
".git/objects/53/53aa304b646154d91db1c0aadc3a81d31d154f": "d501eca270120fa4a7ddd44cbfd44a70",
".git/objects/3f/7ed703f70a2f1013380e9114160ace572257f9": "e056bdf67449b8579037beb190b33032",
".git/objects/5e/8f0843d5eac2026da42af09eb8612184bd428c": "381929f9a85ffce04f9e40c642572328",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/63/5965de6e2b1bb98054c8a81f51db14ea7ada8e": "84217b431e9743e7a1f8d56b77543526",
".git/objects/63/32ca129839cef72e1db3e4cb5dc60505595502": "3f3654010e77c5d2bd4a60d660998ff4",
".git/objects/0a/e2cbec3f81e6518f0e16ce257711b1c74cc189": "d82ce25134cd73664416620b89043631",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/30af1c431e5abecb138d6824518ebfb31d5e20": "13201cb1a71fc376aa2f704208652915",
".git/objects/a9/4c087efc0e79c485affa3b94bdb45c63258b4c": "89c585898baa35aa16cc053174e6059d",
".git/objects/d5/e09a3a676e5ffcf02158e3eb6f5b29157fadf5": "00da8a7561d9b1de96b7d6aab2765940",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/441861f2b15a625faf8df202d77e2e36485e7e": "0def43d4022c7c30bc6c977dc1813e4c",
".git/objects/de/b61a42ca16f2114237cea75f6d1ff21638ca7b": "323dd1a93cc326854de40311c2cbc578",
".git/objects/b0/e9e41b2256b09e245ea5f18e1d641c988c289b": "69fe03b88750a9d52dc7bf17fa052170",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/639caf4272e389be650614c25ea514bd8bde27": "de356affc8bab28b9af5e06d6537f7f2",
".git/objects/b9/519835f46130cb3009a0aa6ab4898635d46350": "a8de5e6d4399f29547ed7f27d047b62e",
".git/objects/f1/7cf1ba40ad5214a387d3b0bebcb3ec0175b4b0": "f9800a7d7dced68bf4c7a5f621417c41",
".git/objects/41/673a82bfe0d07fd63351e300ecd7439bf24306": "fca085f4596cf831e345bb90034c53e9",
".git/objects/1b/00343f5af37746555a0921a8ced957b8e9109b": "4a9280b52bee2a14b400cef69bce7d2a",
".git/objects/1e/58f6ba90773c65c0b4ca1d05ff8148d870c306": "62a843d33dc613727858084c16976c76",
".git/objects/4a/27c6e2e819cedd9ab3ba3d5fabffad2ebda51b": "193c4a1f2482d7bf67605c45bcbc95f9",
".git/objects/24/8b3a768e772caca022133349453e37f9e6b55c": "ae109e7d543d03e0f85f0a1c1883c857",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/e9e0702e9a345d1d49acf16fb0aacc172d3a3a": "b96f504e53b6b52776710ce7f68a40bb",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/12252b4fbe1acae3184177dac96598145dbf03": "c49c54ef64e04d99a6c5ad8123d98dad",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/7a/23153ed1688928557ecaf7ed9bd49a5064ce3c": "5c8f02ab1aacaba5aaa6e58efab0a4f8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "95fd5ff4997e52fa51d437b24e69ba67",
".git/logs/refs/heads/main": "95fd5ff4997e52fa51d437b24e69ba67",
".git/logs/refs/remotes/origin/main": "5277f371df39bf2335d7b2f1ea90ca07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2a1ab6ec3dfabd651f52b8f75bce770f",
".git/refs/remotes/origin/main": "03d611c5a23a8ed4087b52d9230f2771",
".git/index": "d3f8fc47da357ad5b8580a5ee1bf4c81",
".git/COMMIT_EDITMSG": "edce2eff97fe38474c06d6303ac62261",
".git/FETCH_HEAD": "c9aae5547a4ce446cff4ebd5d660d127",
"assets/AssetManifest.json": "fc6b453e1f0b881d0605c129160cfe12",
"assets/NOTICES": "7ba3e40d33efed4b1ceb57293ee85a21",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "3533948d27dd84eb2eb1a0d794aff48e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aba3168ee3e94414fe5e6bca2ba397dd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3d251e0f340c162fe6b630e5abfb5318",
"assets/fonts/MaterialIcons-Regular.otf": "9c80a5294c2994a4975e1aa835e1f704",
"assets/assets/images/evo-post.png": "f859829e820d40f5c2a71aff78f6dfae",
"assets/assets/images/presenting_social_media.png": "206f7398216df943ab19bc8f84379512",
"assets/assets/images/logo1.png": "97b796f577efc1e8e994afb240e47240",
"assets/assets/images/logo.png": "6d7b3376dff51ab74fa4dfe9525f5afd",
"assets/assets/images/MacBook%2520Pro%252014_%2520-%25202.svg": "610ba83567620e43c6b675d446e5a86e",
"assets/assets/images/logoglowing.png": "5412edfb244f16c4e5844a4d0b20c701",
"assets/assets/images/Letter_P_logo_design_letterma1rk.png": "0435398bf48414bf802cec1e3d6502ad",
"browserconfig.xml": "7f2b2f8a4c6863cc7be0a1e4b7963bd9",
"favicon-32x32.png": "28c26d77cdd146951d3b0f45d5234a16",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
