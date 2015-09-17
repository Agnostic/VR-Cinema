// Core
var camera;
var effect;
var controls;
var scene;
var video;

// Camera config
var NEAR = 1.0;
var FAR = 350.0;
var VIEW_ANGLE = 30;

// Mouse controls
var mouseX = 0;
var mouseY = 0;
var targetX = 0;
var targetY = 0;
var angle = 0;
var target = new THREE.Vector3(0, 0, 0);
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

initVideo();

function initVideo() {
  OO.ready(function() {
    var embedCode = 'gzYTc4cjpLSw8or1hJ06jmcTAY0acA2o';

    window.pp = OO.Player.create('playerwrapper', embedCode, {
      "layout":"chromeless",
      "discovery-ui":{"layout":"chromeless"},
      "skin":{
        "config": "https://dl.dropboxusercontent.com/u/149437420/html5-skin/config/skin.json?raw=1",
        "languages":[{"language":"en","languageFile":"https://dl.dropboxusercontent.com/u/149437420/html5-skin/config/en.json"}]
      },

      "freewheel-ads-manager":{"fw_video_asset_id":"Fwa2tmcjohJwe-A-plwLw6We8JILCGXR","html5_ad_server":"http://g1.v.fwmrm.net","html5_player_profile":"90750:ooyala_html5","showInAdControlBar":true},"initialTime":0,"autoplay":false
    });
    pp.play();

    initCinema();
    animate();
  });
}

function initCinema() {
  start = Date.now();
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, window.innerWidth / window.innerHeight, NEAR, FAR);
  camera.position.y = 10;

  // -----
  // vr stuff
  renderer = new THREE.WebGLRenderer({ antialias: true });
  document.body.appendChild(renderer.domElement);

  controls = new THREE.VRControls(camera);

  effect = new THREE.VREffect(renderer);
  effect.setSize(window.innerWidth, window.innerHeight);
  // -----

  window.addEventListener('resize', onWindowResize, false);

  var light = new THREE.DirectionalLight( 0xffffff );
  light.position.set(0.5, 1, 1).normalize();
  scene.add(light);

  video = document.querySelector('video.video');
  //video.volume = 0;

  videoTexture = new THREE.Texture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;

  texture = new THREE.VideoTexture(video);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.format = THREE.RGBFormat;

  var parameters = { color: 0xffffff, map: texture };
  var screenPlane = new THREE.BoxGeometry(640, 480, 1);
  var screenMaterial = new THREE.MeshLambertMaterial(parameters);

  var _screen = window._screen = new THREE.Mesh(screenPlane, screenMaterial);
  _screen.position.set(0, 20, -75);
  _screen.rotation.set(0, 0, 0 );
  _screen.scale.x = 0.2;
  _screen.scale.y = 0.2;
  _screen.scale.z = 0.2;
  scene.add(_screen);

  effect.render(scene, camera);
}

function animate() {
  controls.update();

  // Mouselook
  // targetX = mouseX * .002;
  // targetY = mouseY * .001;

  // angle += 0.05 * (targetX - angle);
  // camera.position.x = -Math.sin( angle ) * 40;
  // camera.position.z =  Math.cos( angle ) * 40;
  // camera.lookAt(target);

  effect.render(scene, camera);
  requestAnimationFrame(animate);
}

// TODO: Allow events (they are disabled by the ooyala player
// listen for click
function onclick() {
  effect.setFullScreen(true);
  if (typeof window.screen.orientation !== 'undefined' && typeof window.screen.orientation.lock === 'function') {
    window.screen.orientation.lock('landscape-primary');
  }
}

window.addEventListener('click', onclick);

// Listen for mouse movement to get mouseX and mouseY
document.body.addEventListener('mousemove', function (event) {
  mouseX = (event.clientX - windowHalfX) * 1;
  mouseY = (event.clientY - windowHalfY) * 1;
});

// Listen for keyboard events
function onkey(event) {
  event.preventDefault();

  if (event.keyCode == 90) { // Z
    controls.zeroSensor(); // zero rotation
  } else if (event.keyCode == 70 || event.keyCode == 13) { // F / enter
    effect.setFullScreen(true); // fullscreen
  }
};

window.addEventListener("keydown", onkey, true);
window.addEventListener('dblclick', function () {
  effect.setFullScreen(true);
});

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  effect.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
