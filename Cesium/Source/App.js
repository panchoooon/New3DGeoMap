//var camera_start = Cesium.Cartesian3.fromDegrees(135.0, 35.0, 1000);
//var camera_start = Cesium.Cartesian3.fromDegrees(139.76, 35.67, 15000.0);
var camera_start = Cesium.Cartesian3.fromDegrees(139.115824, 35.235114, 1000.0);
//var camera_direction = Cesium.Cartesian3.fromDegrees(-75.0, 70.0, 0);

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

/*
    imageryProvider: new Cesium.JapanGSIImageryProvider({
      layerLists: ["ort","relief","std"]
    }),
*/
//    terrainProvider: new Cesium.JapanGSITerrainProvider({
//        heightPower: 1.0
//    }),

    baseLayerPicker: false,
    mapProjection: new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84)
});


// TerrainProvider
/*
var cesiumTerrainProviderMeshes = new Cesium.EllipsoidTerrainProvider();
viewer.terrainProvider = cesiumTerrainProviderMeshes;
*/


// Set_camera

viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(130.49839, 33.52212, 1000.0)
});



/*
Sandcastle.addToolbarMenu([{
    text : 'EllipsoidTerrainProvider',
    onselect : function() {
        viewer.terrainProvider = cesiumTerrainProviderMeshes;
    }
},{
    text : 'CesiumTerrainProvider - JapanGSI',
    onselect : function() {
      viewer.terrainProvider = new Cesium.JapanGSITerrainProvider({
        heightPower: 1.0
      });
    }
}], 'terrainMenu');
*/

// Reset
/*
Sandcastle.reset = function() {
  viewer.dataSources.removeAll();  
};
*/


/*
var scene = viewer.scene;
scene.globe.depthTestAgainstTerrain = true;
scene.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);
*/

/*
viewer.dataSources.add(
  Cesium.KmlDataSource.load(
    'http://potuji881.github.io/cesium-tokyo/cesium-starter-app-master/Source/TokyoTest.kml'
  )
);

viewer.dataSources.add(
    Cesium.GeoJsonDataSource.load(
        'http://potuji881.github.io/CesiumHakoneTest/Cesium-JapanGSI-master/Source/hakone_shelter.geojson'
    )
);
*/

/*
  var layers = viewer.scene.imageryLayers;
  var osm = layers.addImageryProvider(
    new Cesium.OpenStreetMapImageryProvider()
  );
  osm.alpha = 0.6;
*/

/*
// add_Button
Sandcastle.addToolbarButton('箱根町の避難場所', function() {
  viewer.dataSources.add(
    Cesium.GeoJsonDataSource.load(
        'http://potuji881.github.io/CesiumHakoneTest/Cesium-JapanGSI-master/Source/hakone_shelter.geojson'
    )
  );
  viewer.camera.lookAt(
    Cesium.Cartesian3.fromDegrees(139.115824, 35.235114),
    new Cesium.Cartesian3(0.0, 0.0, 5000.0)
  );
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
}, 'button');

Sandcastle.addToolbarButton('東京タワーから東京駅まで', function() {
  viewer.dataSources.add(
    Cesium.KmlDataSource.load(
      'http://potuji881.github.io/cesium-tokyo/cesium-starter-app-master/Source/TokyoTest.kml'
    )
  );
  viewer.camera.lookAt(
    Cesium.Cartesian3.fromDegrees(139.76, 35.67),
    new Cesium.Cartesian3(0.0, 0.0, 5000.0)
  );
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
}, 'button');

Sandcastle.addToolbarButton('国道322号線', function() {
  viewer.dataSources.add(
    Cesium.KmlDataSource.load(
      'http://potuji881.github.io/CesiumHakoneTest/Cesium-JapanGSI-master/Source/Route322.kml'
    )
  );
  viewer.camera.lookAt(
    Cesium.Cartesian3.fromDegrees(130.52239, 33.31342),
    new Cesium.Cartesian3(0.0, 0.0, 5000.0)
  );
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
}, 'button');
*/