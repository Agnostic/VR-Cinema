# VR-Cinema for Oculus Rift / Google Cardboard

This is an experiment to use the native VR support from mozilla and the HTML5 video player to watch videos in a virtual cinema.

![](http://i.giphy.com/xTiTnDS3ljJ8V0mTuM.gif)

Demo created by Gilberto Avalos:
* http://github.com/Agnostic

### Tech

Projects used:

* [THREE.js](http://threejs.org/) - A JavaScript 3D Library which makes WebGL simpler..
* [webvr-boilerplate](https://github.com/borismus/webvr-boilerplate) - A starting point for web-based VR experiences that work in both Cardboard and Oculus.

### How to use it

Download/clone repo, then run a simple http server:
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
* Add in-game UI/controls
