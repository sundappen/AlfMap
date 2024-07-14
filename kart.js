// Initialize and add the map
let map;

async function initMap() {
    // The location of ALF as
    const positionAlf = { lat:60.378840582884585, lng: 5.343357143529645 }
    const posBuss12 = { lat:60.379312, lng:5.338688 }
    const posBybaneDkPlass = {lat:60.375527, lng:5.339737}
    const posBybaneFloen = {lat:60.381118, lng:5.352872}
    const posBybaneFlorida = {lat:60.381554, lng:5.333117}

  
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


    // The map, centered at Klaus Hanssens vei 22
    map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: positionAlf,
    mapId: "DEMO_MAP_ID",
    mapTypeId: 'satellite',
    });

    // Define the marker icons
    const busIconUrl = 'http://maps.google.com/mapfiles/ms/icons/bus.png';
    const bybaneIconUrl = 'http://maps.google.com/mapfiles/ms/icons/rail.png';
    const greenIconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';


    // Create a div element for the custom bus-icon
    const busDiv = document.createElement('div');
    busDiv.innerHTML = `<img src="${busIconUrl}" style="width: 24px; height: 24px;" />`;

    // Create a div element for the custom alf-icon
    const alfDiv = document.createElement('div');
    alfDiv.style.cursor = 'pointer';
    alfDiv.innerHTML = `<img src="${greenIconUrl}" style="width: 28px; height: 28px;" />`;

    // Create a div element for the custom alf-icon
    const bybane1KronstadDiv = document.createElement('div');
    bybane1KronstadDiv.innerHTML = `<img src="${bybaneIconUrl}" style="width: 24px; height: 24px;" />`;

    // Create a div element for the custom alf-icon
    const bybane1FloridaDiv = document.createElement('div');
    bybane1FloridaDiv.innerHTML = `<img src="${bybaneIconUrl}" style="width: 24px; height: 24px;" />`;

    // Create a div element for the custom alf-icon
    const bybane2FloenDiv = document.createElement('div');
    bybane2FloenDiv.innerHTML = `<img src="${bybaneIconUrl}" style="width: 24px; height: 24px;" />`;

    // The marker positioned at Klaus Hanssens vei 22
    const marker = new AdvancedMarkerElement({
        map: map,
        position: positionAlf,
        title: "ALF as - Klaus Hanssens vei 22",
        content: alfDiv,
        gmpClickable: true,
    });


    // The buss-marker positioned at Strømmen
    const buss12FraSentrum = new AdvancedMarkerElement({
        map:map,
        position: posBuss12,
        title: "Busstopp 12 fra Sentrum",
        content: busDiv,
        });


    // The bybane1-marker positioned at Danmarksplass
    const bybane1Kronstad = new AdvancedMarkerElement({
        map:map,
        position: posBybaneDkPlass,
        title: "Bybane 1, Danmarksplass",
        content: bybane1KronstadDiv,
        });

    // The bybane1-marker positioned at Florida
    const bybane1Florida = new AdvancedMarkerElement({
        map:map,
        position: posBybaneFlorida,
        title: "Bybane 1, Florida",
        content: bybane1FloridaDiv,
        });

    // The bybane2-marker positioned at Fløen
    const bybane2Floen = new AdvancedMarkerElement({
        map:map,
        position: posBybaneFloen,
        title: "Bybane 2, Fløen",
        content: bybane2FloenDiv,
        });

}

initMap();