# VR-Cinema for Ooyala Player

This is an experiment to use the native VR support from mozilla and the Ooyala player to watch videos in a virtual cinema.

![](http://i.giphy.com/xTiTnDS3ljJ8V0mTuM.gif)

### Tech

Projects used:

* [THREE.js](http://threejs.org/) - A JavaScript 3D Library which makes WebGL simpler..
* [Ooyala Player](http://ooyala.com/) - HTML5 player.
* [VRControls.js](https://github.com/dmarcos) - Three.js extension to handle camera rotation/orientation with HDM displays (Oculus Rift), by @hawksley.
* [VREffect.js](https://github.com/dmarcos) - Stereo effect for three.js, by @hawksley and @dmarcos.

### How to use it

Download/clone repo, then:
```sh
~/vr-cinema$ php -S localhost:8080
# Then open http://localhost:8080/
# or:
~/vr-cinema$ python -m SimpleHTTPServer
# Then open http://localhost:8000/
```

Move the tab/window to the oculus rift display, then go to fullscreen.
Enjoy!

### TODO
* Add in-game controls
* Allow browser events for custom controls.
