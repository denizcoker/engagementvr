# engagementvr

Use this code to enable VR on engagements. See Google VR View for more: https://github.com/googlevr/vrview/

Add video specfics to configure the vrcontainer.js file:
```
function onLoad() {
  // Load VR View.
  vrView = new VRView.Player('#vrview', {
    video: 'https://yourfile.com/video.mp4', //video url
    is_stereo: false, //false for monostereoscopic content. Only enable for stacked stereo
    width: "960",
    height: "500",
    loop: false,
    //is_debug: true,
    //default_heading: 90,
    //is_yaw_only: true,
    //is_vr_off: true, //toggle for stereo content
  });

```

Link to your vrcontainer.js file after using asset uploader in the vrcontainer.html file:
```
<script src="https://storage.googleapis.com/vrview/2.0/build/vrview.min.js"></script> <!-- vrlibrary -->
<script src="https://yourfile.com/vrcontainer.js"></script> <!-- containerjs -->   
```


Inject vrcontainer.html into main engagement js:
```
$("#ad_stage").load("https://yourfile.com/vrcontainer.html");
```
