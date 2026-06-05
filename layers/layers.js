var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Italy_pm2p5_2021_2023_AMAC_map_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_pm2p5_2021_2023_AMAC_map<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_2_0.png" /> ≤ -3 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_2_1.png" /> -3 – -1.5 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_2_2.png" /> -1.5 – 0 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_2_3.png" /> 0 – 1.5 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_2_4.png" /> 1.5 – 3 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_2_5.png" /> > 3 μg/m³<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_pm2p5_2021_2023_AMAC_map_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });
var lyr_Italy_pm10_2021_2023_AMAC_map_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_pm10_2021_2023_AMAC_map<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_3_0.png" /> ≤ -10 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_3_1.png" /> -10 – -4 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_3_2.png" /> -4 – 0 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_3_3.png" /> 0 – 4 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_3_4.png" /> 4 – 10 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_3_5.png" /> > 10 µg/m³<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_pm10_2021_2023_AMAC_map_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });
var lyr_Italy_no2_2021_2023_AMAC_map_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_no2_2021_2023_AMAC_map<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_4_0.png" /> ≤ -5 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_4_1.png" /> -5 – -2 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_4_2.png" /> -2 – 0 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_4_3.png" /> 0 – 2 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_4_4.png" /> 2 – 5 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_4_5.png" /> > 5 μg/m³<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_no2_2021_2023_AMAC_map_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });

lyr_ESRISatellite_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_Italy_pm2p5_2021_2023_AMAC_map_2.setVisible(true);lyr_Italy_pm10_2021_2023_AMAC_map_3.setVisible(true);lyr_Italy_no2_2021_2023_AMAC_map_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OpenTopoMap_1,lyr_Italy_pm2p5_2021_2023_AMAC_map_2,lyr_Italy_pm10_2021_2023_AMAC_map_3,lyr_Italy_no2_2021_2023_AMAC_map_4];
