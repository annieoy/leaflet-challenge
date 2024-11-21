var map = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

function markerSize(magnitude) {
    return magnitude * 4;
}

function markerColor(depth) {
    return depth > 90 ? '#d73027' :
        depth > 70 ? '#fc8d59' :
            depth > 50 ? '#fee08b' :
                depth > 30 ? '#d9ef8b' :
                    depth > 10 ? '#91cf60' :
                        '#1a9850';
}
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {

    L.geoJSON(data, {
        // Create circle markers
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize(feature.properties.mag),
                fillColor: markerColor(feature.geometry.coordinates[2]),
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },

        onEachFeature: function (feature, layer) {
            layer.bindPopup(
                `<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]} km</p>`
            );
        }
    }).addTo(map);

    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
        var div = L.DomUtil.create("div", "info legend"),
            depthLevels = [-10, 10, 30, 50, 70, 90],
            colors = [
                "#1a9850",
                "#91cf60",
                "#d9ef8b",
                "#fee08b",
                "#fc8d59",
                "#d73027"
            ];

        for (var i = 0; i < depthLevels.length; i++) {
            div.innerHTML +=
                "<i style='background: " + colors[i] + "'></i> " +
                depthLevels[i] + (depthLevels[i + 1] ? "&ndash;" + depthLevels[i + 1] + "<br>" : "+");
        }
        return div;
    };

    legend.addTo(map);
});