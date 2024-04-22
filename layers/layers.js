var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                popuplayertitle: "World Map",
                interactive: true,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BelgaviBoundary_2 = new ol.format.GeoJSON();
var features_BelgaviBoundary_2 = format_BelgaviBoundary_2.readFeatures(json_BelgaviBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundary_2.addFeatures(features_BelgaviBoundary_2);
var lyr_BelgaviBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundary_2, 
                style: style_BelgaviBoundary_2,
                popuplayertitle: "Belgavi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundary_2.png" /> Belgavi Boundary'
            });
var format_BelgaviBoundaryMtrs_3 = new ol.format.GeoJSON();
var features_BelgaviBoundaryMtrs_3 = format_BelgaviBoundaryMtrs_3.readFeatures(json_BelgaviBoundaryMtrs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundaryMtrs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundaryMtrs_3.addFeatures(features_BelgaviBoundaryMtrs_3);
var lyr_BelgaviBoundaryMtrs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundaryMtrs_3, 
                style: style_BelgaviBoundaryMtrs_3,
                popuplayertitle: "Belgavi Boundary Mtrs",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundaryMtrs_3.png" /> Belgavi Boundary Mtrs'
            });
var format_BelgaviStopsShp_4 = new ol.format.GeoJSON();
var features_BelgaviStopsShp_4 = format_BelgaviStopsShp_4.readFeatures(json_BelgaviStopsShp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopsShp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopsShp_4.addFeatures(features_BelgaviStopsShp_4);
var lyr_BelgaviStopsShp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopsShp_4, 
                style: style_BelgaviStopsShp_4,
                popuplayertitle: "Belgavi Stops Shp",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopsShp_4.png" /> Belgavi Stops Shp'
            });
var format_BelgaviStopPopCoverage_5 = new ol.format.GeoJSON();
var features_BelgaviStopPopCoverage_5 = format_BelgaviStopPopCoverage_5.readFeatures(json_BelgaviStopPopCoverage_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPopCoverage_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPopCoverage_5.addFeatures(features_BelgaviStopPopCoverage_5);
var lyr_BelgaviStopPopCoverage_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPopCoverage_5, 
                style: style_BelgaviStopPopCoverage_5,
                popuplayertitle: "Belgavi Stop Pop Coverage",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPopCoverage_5.png" /> Belgavi Stop Pop Coverage'
            });
var format_BelgaviStopPop_6 = new ol.format.GeoJSON();
var features_BelgaviStopPop_6 = format_BelgaviStopPop_6.readFeatures(json_BelgaviStopPop_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPop_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPop_6.addFeatures(features_BelgaviStopPop_6);
var lyr_BelgaviStopPop_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPop_6, 
                style: style_BelgaviStopPop_6,
                popuplayertitle: "Belgavi Stop Pop",
                interactive: true,
    title: 'Belgavi Stop Pop<br />\
    <img src="styles/legend/BelgaviStopPop_6_0.png" /> 5 min<br />'
        });
var format_Temple_7 = new ol.format.GeoJSON();
var features_Temple_7 = format_Temple_7.readFeatures(json_Temple_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_7.addFeatures(features_Temple_7);
var lyr_Temple_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_7, 
                style: style_Temple_7,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_7.png" /> Temple'
            });
var format_Education_8 = new ol.format.GeoJSON();
var features_Education_8 = format_Education_8.readFeatures(json_Education_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_8.addFeatures(features_Education_8);
var lyr_Education_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_8, 
                style: style_Education_8,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_8.png" /> Education'
            });
var format_BelgaviPSU_9 = new ol.format.GeoJSON();
var features_BelgaviPSU_9 = format_BelgaviPSU_9.readFeatures(json_BelgaviPSU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviPSU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviPSU_9.addFeatures(features_BelgaviPSU_9);
var lyr_BelgaviPSU_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviPSU_9, 
                style: style_BelgaviPSU_9,
                popuplayertitle: "Belgavi PSU",
                interactive: true,
                title: '<img src="styles/legend/BelgaviPSU_9.png" /> Belgavi PSU'
            });
var format_BelgaviOffice_10 = new ol.format.GeoJSON();
var features_BelgaviOffice_10 = format_BelgaviOffice_10.readFeatures(json_BelgaviOffice_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOffice_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOffice_10.addFeatures(features_BelgaviOffice_10);
var lyr_BelgaviOffice_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOffice_10, 
                style: style_BelgaviOffice_10,
                popuplayertitle: "Belgavi Office",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOffice_10.png" /> Belgavi Office'
            });
var format_BelgaviIndustries_11 = new ol.format.GeoJSON();
var features_BelgaviIndustries_11 = format_BelgaviIndustries_11.readFeatures(json_BelgaviIndustries_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviIndustries_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviIndustries_11.addFeatures(features_BelgaviIndustries_11);
var lyr_BelgaviIndustries_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviIndustries_11, 
                style: style_BelgaviIndustries_11,
                popuplayertitle: "Belgavi Industries",
                interactive: true,
                title: '<img src="styles/legend/BelgaviIndustries_11.png" /> Belgavi Industries'
            });
var format_BelgaviRailwayStn_12 = new ol.format.GeoJSON();
var features_BelgaviRailwayStn_12 = format_BelgaviRailwayStn_12.readFeatures(json_BelgaviRailwayStn_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRailwayStn_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRailwayStn_12.addFeatures(features_BelgaviRailwayStn_12);
var lyr_BelgaviRailwayStn_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRailwayStn_12, 
                style: style_BelgaviRailwayStn_12,
                popuplayertitle: "Belgavi Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/BelgaviRailwayStn_12.png" /> Belgavi Railway Stn'
            });
var format_BelgaviRWI_13 = new ol.format.GeoJSON();
var features_BelgaviRWI_13 = format_BelgaviRWI_13.readFeatures(json_BelgaviRWI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRWI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRWI_13.addFeatures(features_BelgaviRWI_13);
var lyr_BelgaviRWI_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRWI_13, 
                style: style_BelgaviRWI_13,
                popuplayertitle: "Belgavi RWI",
                interactive: true,
    title: 'Belgavi RWI<br />\
    <img src="styles/legend/BelgaviRWI_13_0.png" /> -0.18 - 0.175<br />\
    <img src="styles/legend/BelgaviRWI_13_1.png" /> 0.175 - 0.225<br />\
    <img src="styles/legend/BelgaviRWI_13_2.png" /> 0.225 - 0.251<br />\
    <img src="styles/legend/BelgaviRWI_13_3.png" /> 0.251 - 0.367<br />\
    <img src="styles/legend/BelgaviRWI_13_4.png" /> 0.367 - 0.519<br />\
    <img src="styles/legend/BelgaviRWI_13_5.png" /> 0.519 - 0.582<br />\
    <img src="styles/legend/BelgaviRWI_13_6.png" /> 0.582 - 0.671<br />\
    <img src="styles/legend/BelgaviRWI_13_7.png" /> 0.671 - 0.774<br />\
    <img src="styles/legend/BelgaviRWI_13_8.png" /> 0.774 - 0.837<br />\
    <img src="styles/legend/BelgaviRWI_13_9.png" /> 0.837 - 0.89<br />\
    <img src="styles/legend/BelgaviRWI_13_10.png" /> 0.89 - 0.972<br />\
    <img src="styles/legend/BelgaviRWI_13_11.png" /> 0.972 - 1.354<br />\
    <img src="styles/legend/BelgaviRWI_13_12.png" /> 1.354 - 1.399<br />\
    <img src="styles/legend/BelgaviRWI_13_13.png" /> 1.399 - 1.478<br />\
    <img src="styles/legend/BelgaviRWI_13_14.png" /> 1.478 - 1.593<br />'
        });
var format_Belgavistats_14 = new ol.format.GeoJSON();
var features_Belgavistats_14 = format_Belgavistats_14.readFeatures(json_Belgavistats_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belgavistats_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belgavistats_14.addFeatures(features_Belgavistats_14);
var lyr_Belgavistats_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Belgavistats_14, 
                style: style_Belgavistats_14,
                popuplayertitle: "Belgavi stats",
                interactive: true,
                title: '<img src="styles/legend/Belgavistats_14.png" /> Belgavi stats'
            });
var format_BelgaviOverallPOI_15 = new ol.format.GeoJSON();
var features_BelgaviOverallPOI_15 = format_BelgaviOverallPOI_15.readFeatures(json_BelgaviOverallPOI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOverallPOI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOverallPOI_15.addFeatures(features_BelgaviOverallPOI_15);
var lyr_BelgaviOverallPOI_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOverallPOI_15, 
                style: style_BelgaviOverallPOI_15,
                popuplayertitle: "Belgavi Overall POI",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOverallPOI_15.png" /> Belgavi Overall POI'
            });
var format_BelgaviStopPOI_16 = new ol.format.GeoJSON();
var features_BelgaviStopPOI_16 = format_BelgaviStopPOI_16.readFeatures(json_BelgaviStopPOI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPOI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPOI_16.addFeatures(features_BelgaviStopPOI_16);
var lyr_BelgaviStopPOI_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPOI_16, 
                style: style_BelgaviStopPOI_16,
                popuplayertitle: "Belgavi Stop POI",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPOI_16.png" /> Belgavi Stop POI'
            });
var format_StopsinsideBelgavi_17 = new ol.format.GeoJSON();
var features_StopsinsideBelgavi_17 = format_StopsinsideBelgavi_17.readFeatures(json_StopsinsideBelgavi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideBelgavi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideBelgavi_17.addFeatures(features_StopsinsideBelgavi_17);
var lyr_StopsinsideBelgavi_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsideBelgavi_17, 
                style: style_StopsinsideBelgavi_17,
                popuplayertitle: "Stops inside Belgavi",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideBelgavi_17.png" /> Stops inside Belgavi'
            });

lyr_WorldMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BelgaviBoundary_2.setVisible(true);lyr_BelgaviBoundaryMtrs_3.setVisible(true);lyr_BelgaviStopsShp_4.setVisible(true);lyr_BelgaviStopPopCoverage_5.setVisible(true);lyr_BelgaviStopPop_6.setVisible(true);lyr_Temple_7.setVisible(true);lyr_Education_8.setVisible(true);lyr_BelgaviPSU_9.setVisible(true);lyr_BelgaviOffice_10.setVisible(true);lyr_BelgaviIndustries_11.setVisible(true);lyr_BelgaviRailwayStn_12.setVisible(true);lyr_BelgaviRWI_13.setVisible(true);lyr_Belgavistats_14.setVisible(true);lyr_BelgaviOverallPOI_15.setVisible(true);lyr_BelgaviStopPOI_16.setVisible(true);lyr_StopsinsideBelgavi_17.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_OpenStreetMap_1,lyr_BelgaviBoundary_2,lyr_BelgaviBoundaryMtrs_3,lyr_BelgaviStopsShp_4,lyr_BelgaviStopPopCoverage_5,lyr_BelgaviStopPop_6,lyr_Temple_7,lyr_Education_8,lyr_BelgaviPSU_9,lyr_BelgaviOffice_10,lyr_BelgaviIndustries_11,lyr_BelgaviRailwayStn_12,lyr_BelgaviRWI_13,lyr_Belgavistats_14,lyr_BelgaviOverallPOI_15,lyr_BelgaviStopPOI_16,lyr_StopsinsideBelgavi_17];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_BelgaviBoundary_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviBoundaryMtrs_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviStopsShp_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'StopId': 'StopId', 'Lat': 'Lat', 'Lng': 'Lng', });
lyr_BelgaviStopPopCoverage_5.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', });
lyr_BelgaviStopPop_6.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Temple_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'check_date': 'check_date', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'historic': 'historic', 'building': 'building', 'landuse': 'landuse', 'layer': 'layer', 'path': 'path', });
lyr_Education_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'phone': 'phone', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'barrier': 'barrier', 'name_etymo': 'name_etymo', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'name_ta': 'name_ta', 'name_hi': 'name_hi', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'email': 'email', 'alt_name': 'alt_name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviPSU_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'phone': 'phone', 'name_kn': 'name_kn', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'police': 'police', 'operator_w': 'operator_w', 'operator': 'operator', 'addr_distr': 'addr_distr', 'type': 'type', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviOffice_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'level': 'level', 'wikidata': 'wikidata', 'name_kn': 'name_kn', 'name': 'name', 'landuse': 'landuse', 'government': 'government', 'wheelchair': 'wheelchair', 'website': 'website', 'smoking': 'smoking', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviIndustries_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_BelgaviRailwayStn_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'shop': 'shop', 'aeroway': 'aeroway', 'railway': 'railway', 'self_servi': 'self_servi', 'operator': 'operator', 'fuel_diese': 'fuel_diese', 'fuel_Petro': 'fuel_Petro', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'building': 'building', 'name_kn': 'name_kn', 'name': 'name', 'public_tra': 'public_tra', 'highway': 'highway', 'taxi': 'taxi', 'traffic_si': 'traffic_si', 'official_n': 'official_n', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'shelter': 'shelter', 'bench': 'bench', 'check_date': 'check_date', 'supervised': 'supervised', 'opening_ho': 'opening_ho', 'voltage': 'voltage', 'frequency': 'frequency', 'electrifie': 'electrifie', 'maxheight': 'maxheight', 'brand_wi_1': 'brand_wi_1', 'wheelchair': 'wheelchair', 'flood_pron': 'flood_pron', 'access': 'access', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'name_en': 'name_en', 'local_ref': 'local_ref', 'surface': 'surface', 'crossing_m': 'crossing_m', 'bus': 'bus', 'crossing_b': 'crossing_b', 'wikidata': 'wikidata', 'network': 'network', 'internet_a': 'internet_a', 'website': 'website', 'phone': 'phone', 'designatio': 'designatio', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'exit_to': 'exit_to', 'ref': 'ref', 'payment_fa': 'payment_fa', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'junction': 'junction', 'traffic__1': 'traffic__1', 'button_ope': 'button_ope', 'traffic__2': 'traffic__2', 'loc_name': 'loc_name', 'crossing': 'crossing', 'traffic_ca': 'traffic_ca', 'barrier': 'barrier', 'name_mr': 'name_mr', 'traffic__3': 'traffic__3', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRWI_13.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Belgavistats_14.set('fieldAliases', {'shapeName': 'shapeName', 'area': 'area', 'perimeter': 'perimeter', 'Area SqKm': 'Area SqKm', 'Peri KM': 'Peri KM', });
lyr_BelgaviOverallPOI_15.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'OverallPOI': 'OverallPOI', });
lyr_BelgaviStopPOI_16.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', 'Stop POI': 'Stop POI', });
lyr_StopsinsideBelgavi_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'StopId': 'StopId', 'Lat': 'Lat', 'Lng': 'Lng', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_WorldMap_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_BelgaviBoundary_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BelgaviBoundaryMtrs_3.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', });
lyr_BelgaviStopsShp_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'StopId': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', });
lyr_BelgaviStopPopCoverage_5.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'TextEdit', 'Coverage': 'TextEdit', });
lyr_BelgaviStopPop_6.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Temple_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'check_date': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'historic': 'TextEdit', 'building': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Education_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'barrier': 'TextEdit', 'name_etymo': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'name_ta': 'TextEdit', 'name_hi': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'alt_name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviPSU_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'phone': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'police': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'addr_distr': 'TextEdit', 'type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviOffice_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'level': 'TextEdit', 'wikidata': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'landuse': 'TextEdit', 'government': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviIndustries_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', });
lyr_BelgaviRailwayStn_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'self_servi': 'TextEdit', 'operator': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_Petro': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'building': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'taxi': 'TextEdit', 'traffic_si': 'TextEdit', 'official_n': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'check_date': 'TextEdit', 'supervised': 'TextEdit', 'opening_ho': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': 'TextEdit', 'maxheight': 'TextEdit', 'brand_wi_1': 'TextEdit', 'wheelchair': 'TextEdit', 'flood_pron': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'name_en': 'TextEdit', 'local_ref': 'TextEdit', 'surface': 'TextEdit', 'crossing_m': 'TextEdit', 'bus': 'TextEdit', 'crossing_b': 'TextEdit', 'wikidata': 'TextEdit', 'network': 'TextEdit', 'internet_a': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'exit_to': 'TextEdit', 'ref': 'TextEdit', 'payment_fa': 'TextEdit', 'payment_ca': 'TextEdit', 'currency_I': 'TextEdit', 'junction': 'TextEdit', 'traffic__1': 'TextEdit', 'button_ope': 'TextEdit', 'traffic__2': 'TextEdit', 'loc_name': 'TextEdit', 'crossing': 'TextEdit', 'traffic_ca': 'TextEdit', 'barrier': 'TextEdit', 'name_mr': 'TextEdit', 'traffic__3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRWI_13.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Belgavistats_14.set('fieldImages', {'shapeName': '', 'area': '', 'perimeter': '', 'Area SqKm': '', 'Peri KM': '', });
lyr_BelgaviOverallPOI_15.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'OverallPOI': 'Range', });
lyr_BelgaviStopPOI_16.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'TextEdit', 'Coverage': 'TextEdit', 'Stop POI': 'TextEdit', });
lyr_StopsinsideBelgavi_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'StopId': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'hidden field', 'iso_a2': 'hidden field', 'NAME': 'hidden field', 'FIPS_10_': 'hidden field', 'ISO_A3': 'hidden field', 'WB_A2': 'hidden field', 'WB_A3': 'hidden field', });
lyr_BelgaviBoundary_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviBoundaryMtrs_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviStopsShp_4.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'StopId': 'hidden field', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', });
lyr_BelgaviStopPopCoverage_5.set('fieldLabels', {'AA_MINS': 'header label - visible with data', 'AA_MODE': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'BelgaviPop': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', });
lyr_BelgaviStopPop_6.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'header label - visible with data', 'AA_MODE': 'header label - visible with data', 'TOTAL_POP': 'inline label - visible with data', });
lyr_Temple_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'check_date': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'historic': 'hidden field', 'building': 'hidden field', 'landuse': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Education_8.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'phone': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'barrier': 'hidden field', 'name_etymo': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'name_ta': 'hidden field', 'name_hi': 'hidden field', 'wikipedia': 'hidden field', 'wikidata': 'hidden field', 'website': 'hidden field', 'email': 'hidden field', 'alt_name': 'hidden field', 'type': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviPSU_9.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'phone': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'police': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'addr_distr': 'hidden field', 'type': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviOffice_10.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'level': 'hidden field', 'wikidata': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'landuse': 'hidden field', 'government': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviIndustries_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_BelgaviRailwayStn_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'shop': 'hidden field', 'aeroway': 'hidden field', 'railway': 'hidden field', 'self_servi': 'hidden field', 'operator': 'hidden field', 'fuel_diese': 'hidden field', 'fuel_Petro': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'building': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'public_tra': 'hidden field', 'highway': 'hidden field', 'taxi': 'hidden field', 'traffic_si': 'hidden field', 'official_n': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'shelter': 'hidden field', 'bench': 'hidden field', 'check_date': 'hidden field', 'supervised': 'hidden field', 'opening_ho': 'hidden field', 'voltage': 'hidden field', 'frequency': 'hidden field', 'electrifie': 'hidden field', 'maxheight': 'hidden field', 'brand_wi_1': 'hidden field', 'wheelchair': 'hidden field', 'flood_pron': 'hidden field', 'access': 'hidden field', 'motor_vehi': 'hidden field', 'horse': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'name_en': 'hidden field', 'local_ref': 'hidden field', 'surface': 'hidden field', 'crossing_m': 'hidden field', 'bus': 'hidden field', 'crossing_b': 'hidden field', 'wikidata': 'hidden field', 'network': 'hidden field', 'internet_a': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'designatio': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'exit_to': 'hidden field', 'ref': 'hidden field', 'payment_fa': 'hidden field', 'payment_ca': 'hidden field', 'currency_I': 'hidden field', 'junction': 'hidden field', 'traffic__1': 'hidden field', 'button_ope': 'hidden field', 'traffic__2': 'hidden field', 'loc_name': 'hidden field', 'crossing': 'hidden field', 'traffic_ca': 'hidden field', 'barrier': 'hidden field', 'name_mr': 'hidden field', 'traffic__3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviRWI_13.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Belgavistats_14.set('fieldLabels', {'shapeName': 'header label - visible with data', 'area': 'inline label - visible with data', 'perimeter': 'inline label - visible with data', 'Area SqKm': 'inline label - visible with data', 'Peri KM': 'inline label - visible with data', });
lyr_BelgaviOverallPOI_15.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'OverallPOI': 'header label - visible with data', });
lyr_BelgaviStopPOI_16.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'BelgaviPop': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', 'Stop POI': 'header label - visible with data', });
lyr_StopsinsideBelgavi_17.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'descript_1': 'hidden field', 'altitude_1': 'hidden field', 'StopId': 'hidden field', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'shapeName': 'inline label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_StopsinsideBelgavi_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});