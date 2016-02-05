//mapMenu

var layers = viewer.scene.imageryLayers;

function Remove(){
    viewer.dataSources.removeAll();
    viewer.entities.removeAll();
}

function AddReliefLayers(){
    layers.addImageryProvider(
      new Cesium.JapanGSIImageryProvider({
        layerLists: ["relief"]
      })
    );
}

Sandcastle.addToolbarMenu([{
    text : 'Simple (Reset)',
    onselect : function() {
      layers.removeAll();
      var map = layers.addImageryProvider(
        new Cesium.MapboxImageryProvider({
          mapId: 'potuji881.oej1ebmn',
          accessToken: 'pk.eyJ1IjoicG90dWppODgxIiwiYSI6ImNpaTh4bHpudzAwbm12Nmx2MDZsM3U5ZTIifQ.OBO6jyCxxr2ShPrfsgmd-A'
        })
      );
    }
},{
    text : 'Aerial',
    onselect : function() {
      layers.removeAll();
      layers.addImageryProvider(
        new Cesium.BingMapsImageryProvider({
            url : 'http://dev.virtualearth.net',
            key : 'aL3rLMWqTIao4o6RM2uK~ovsAIFivolrz1c0QKOeIZw~AtVUyccgyOorJeDSHTaK25MyiF005nsYEW37BSrS_1S2zj6-HCD4nOXTJFh5UK8-',
            mapStyle : Cesium.BingMapsStyle.AERIAL_WITH_LABELS
        })
      );
    }
}/*,{
    text : 'ArcGisMap',
    onselect : function() {
      layers.removeAll();
      layers.addImageryProvider(
        new Cesium.ArcGisMapServerImageryProvider({
          url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        })
      );
    }
}*/,{
    text : 'Relief',
    onselect : function() {
      layers.removeAll();
      AddReliefLayers();
      var map = layers.addImageryProvider(
        new Cesium.createOpenStreetMapImageryProvider()
      );
      map.alpha = 0.6;
    }
},{
    text : 'JapanSTD',
    onselect : function() {
      layers.removeAll();
      AddReliefLayers();
      var map = layers.addImageryProvider(
        new Cesium.JapanGSIImageryProvider({
          url: 'http://cyberjapandata.gsi.go.jp/xyz/std/'
        })
      );
      map.alpha = 0.6;
    }
}/*,{
    text : '写真',
    onselect : function() {
      layers.removeAll();
      layers.addImageryProvider(
        new Cesium.JapanGSIImageryProvider({
          layerLists: ["ort"]
        })
      );
    }
}*/], 'mapMenu');


//dataMenu
Sandcastle.addDefaultToolbarMenu([{
    text : '見たいデータを選んで下さい (リセットはこちら)',
    onselect : function() {
      Remove();
    }
},{
    text : '箱根町の避難場所',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/hakone_shelter.geojson'
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(139.115824, 35.235114),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '剱岳　八っ峰上部　バリエーション',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/Turugi.geojson',{
            stroke: Cesium.Color.DEEPSKYBLUE,
            strokeWidth: 8
          }
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(137.595978,36.577744),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '国道322号線',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.KmlDataSource.load(
          './Data/Route322.kml'
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.52239, 33.31342),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '坂本峠（国道385号線）',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
//          './Data/pointTest2.geojson'
          './Data/2Final_Route385.geojson'
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.39926, 33.35281),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '大分県道41号線',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/route41.geojson',{
            stroke: Cesium.Color.CRIMSON,
            strokeWidth: 6
          }
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(131.51654111100012, 33.043613753563008),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '歴史の散歩道',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/Dazaifu_Sanpo.geojson',{
            stroke: Cesium.Color.LIGHTPINK,
            strokeWidth: 8,
            markerColor: Cesium.Color.DODGERBLUE
          }
        )
      );
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/Mapping_geo_final.geojson',{
            markerColor: Cesium.Color.FIREBRICK
          }
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.49839, 33.52212),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '歴史の散歩道（KML）',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.KmlDataSource.load(
          './Data/Rekishi2.kml'
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.49839, 33.52212),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '水城跡（テスト）',
    onselect : function() {
      Remove();
      Mizuki();
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.49839, 33.52212),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '大野城跡',
    onselect : function() {
      Remove();
      Ohnojo();
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.51899433135986, 33.543308309351943),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '阿蘇登山道（古坊中ルート）',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/Final_Furubouchu_ful1.geojson',{
            stroke: Cesium.Color.GOLD,
            strokeWidth: 8
          }
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(131.08029928693045, 32.913725003328445),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '雲仙普賢岳（3峰（普賢岳・国見岳・妙見岳）周回）',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/Unzen_Tozan.geojson',{
            stroke: Cesium.Color.GOLD,
            strokeWidth: 8
          }
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.276, 32.749138),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
},{
    text : '大牟田GPXテスト',
    onselect : function() {
      Remove();
      viewer.dataSources.add(
        Cesium.GeoJsonDataSource.load(
          './Data/Omuta.geojson',{
            stroke: Cesium.Color.DEEPSKYBLUE,
            strokeWidth: 8
          }
        )
      );
      viewer.camera.lookAt(
        Cesium.Cartesian3.fromDegrees(130.515396,33.36623),
        new Cesium.Cartesian3(0.0, 0.0, 5000.0)
      );
      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    }
}], 'dataMenu');

/*
Sandcastle.addToolbarButton('Reset', function() {
  Remove();
}, 'dataMenu');
*/

Sandcastle.addDefaultToolbarMenu([{
    text : '2Dマップ',
    onselect : function() {
      viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
      function fly(position) {
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 500.0)
        });
      }
      // Ask browser for location, and fly there.
      navigator.geolocation.getCurrentPosition(fly);
      viewer.scene.mode = 2;
    }
},{
    text : '3Dマップ',
    onselect : function() {
      viewer.terrainProvider = new Cesium.JapanGSITerrainProvider({
        heightPower: 1.0
      });
      function fly(position) {
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 500.0)
        });
      }
      // Ask browser for location, and fly there.
      navigator.geolocation.getCurrentPosition(fly);
      viewer.scene.mode = 3;
    }
}], 'terrainMenu');

Sandcastle.addDefaultToolbarButton('現在地へジャンプ', function() {
    // Create callback for browser's geolocation
    function fly(position) {
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(position.coords.longitude, position.coords.latitude, 500.0)
        });
    }
    // Ask browser for location, and fly there.
    navigator.geolocation.getCurrentPosition(fly);
}, 'locate');

Sandcastle.addDefaultToolbarMenu([{
    text : '透過する',
    onselect : function() {
      viewer.scene.globe.depthTestAgainstTerrain = false;
    }
},{
    text : '透過しない',
    onselect : function() {
      viewer.scene.globe.depthTestAgainstTerrain = true;
    }
}], 'depth');