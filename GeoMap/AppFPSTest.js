var camera_start = Cesium.Cartesian3.fromDegrees(0.0, 0.0, 1000.0);

var viewer = new Cesium.Viewer('cesiumContainer', {
    animation : false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    navigationHelpButton: true,
    sceneModePicker: false,
    scene3DOnly: false,
    timeline: false,
    imageryProvider: new Cesium.MapboxImageryProvider({
        mapId: 'potuji881.oej1ebmn',
        accessToken: 'pk.eyJ1IjoicG90dWppODgxIiwiYSI6ImNpaTh4bHpudzAwbm12Nmx2MDZsM3U5ZTIifQ.OBO6jyCxxr2ShPrfsgmd-A'
    }),
    baseLayerPicker: false,
    mapProjection: new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84)
});


// Set_camera
function fly(position) {
    viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 500.0)
    });
}
navigator.geolocation.getCurrentPosition(fly);


// Frame_Test
viewer.scene.sun.show = false;
viewer.scene.fog.enable = false;
viewer.scene.debugShowFramesPerSecond = true;