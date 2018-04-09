"use strict";
/////////////////////////////// LAYERS SET UP //////////////////////////////////////////

    // Set up layersID and QGIS Layer Names in this object.
    // LayerID : "QGIS Layer Name",

    var layers = {
        
        //Basemap
        Elevation: 'Slope',
        Ortho: 'Ortho',
        Slope: 'Shaded Elevation',        
        
        //General Parameters
        Trails: 'Trails from Garmin',
        Roads: 'map lines',
        Buildings: 'Buildings',
        Tower: 'Tower'
    };

var set1 = ['Elevation', 'Ortho', 'Slope'];

// Set initial layer visibility by calling passing layers.LayerID through the toggleSingle(); function.

toggleLayer("Elevation");
toggleLayer("Slope");
toggleSet(set1, "Ortho", false);


/////////////////////////////// FUNCTIONS //////////////////////////////////////////

function toggleLayer(layer) {
    var l = layers[layer];
    project.getLayerByName(l).setVisible(!project.getLayerByName(l).visible);
    toggleLegend(layer);
}

function toggleSet(set, layer, border) {
    for (var i = 0; i < set.length; i++) {
        console.log(layers[set[i]]);
        project.getLayerByName(layers[set[i]]).setVisible(false);
        toggleLegendSet(set[i], 'none');
    }
    if (layer !== 'None') {
        project.getLayerByName(layers[layer]).setVisible(true);
        //project.getLayerByName(layers['SPIBorder']).setVisible(border);
        toggleLegendSet(layer, 'block');
    }
}

function toggleLegend(id) {
    var e = document.getElementById(id);
    if (e != null) {
        if (e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }
}

function toggleLegendSet(id, state) {
    var e = document.getElementById(id);
    if (e != null) {
            e.style.display = state;
    }
}
