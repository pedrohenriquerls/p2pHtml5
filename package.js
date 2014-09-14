Package.describe({
  summary: "Simple p2p for webrtc client",
  version: "0.0.1",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('client/peer.js', 'client');
});

/*Package.onTest(function(api) {
  api.use('tinytest');
  api.use('client:peerjs');
  api.addFiles('pedrohenriquerls:peerjs-tests.js');
});*/
