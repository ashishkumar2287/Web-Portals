const apikey= 'pk.eyJ1IjoibWFuc2lzdXJlMSIsImEiOiI1Mzk2MmRjMzAyZTE2NzNkNWZmNjM3MGJhNTRiNzY4MCJ9.5RQcLoyzHf6QZ2ATi8tB_g'

const map = L.map('map').setView([50.679668, -1.280817], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var LeafletIcon = L.Icon.extend({
   options: {
       iconSize: [50, 32],
       iconAnchor: [25, 16]
    }
})

var needleIcon = new LeafletIcon({iconUrl: 'sun.svg'}),
    militaryIcon = new LeafletIcon({iconUrl: 'sunflower.svg'})
    ventnorIcon = new LeafletIcon({iconUrl: 'boat.svg'})
    carisbrookeIcon = new LeafletIcon({iconUrl: 'dolphin.svg'})
    butterflyIcon = new LeafletIcon({iconUrl: 'icecream.svg'})
    osborneIcon = new LeafletIcon({iconUrl: 'palm.svg'})
    amazonIcon = new LeafletIcon({iconUrl: 'ship.svg'})
    windmillIcon = new LeafletIcon({iconUrl: 'windmill.svg'})


var needleMarker = L.marker([50.662799, -1.583315], {icon: needleIcon}).addTo(map);
var popup = needleMarker.bindPopup('The Needle')
popup.addTo(map);

var militaryMarker = L.marker([50.638863, -1.391676], {icon: militaryIcon}).addTo(map);
var popup = militaryMarker.bindPopup('Military Road')
popup.addTo(map);

var ventnorMarker = L.marker([50.593857, -1.215455], {icon: ventnorIcon}).addTo(map);
var popup = ventnorMarker.bindPopup('Ventnor Park')
popup.addTo(map);

var carisbrookeMarker = L.marker([50.687479, -1.313586], {icon: carisbrookeIcon}).addTo(map);
var popup = carisbrookeMarker.bindPopup('Carisbrooke Castle')
popup.addTo(map);

var butterflyMarker = L.marker([50.711363, -1.254015], {icon: butterflyIcon}).addTo(map);
var popup = butterflyMarker.bindPopup('Butterfly World IOW')
popup.addTo(map);

var osborneMarker = L.marker([50.750641, -1.269511], {icon: osborneIcon}).addTo(map);
var popup = osborneMarker.bindPopup('Osborne')
popup.addTo(map);

var amazonMarker = L.marker([50.655661, -1.219455], {icon: amazonIcon}).addTo(map);
var popup = amazonMarker.bindPopup('Amazon World Zoo')
popup.addTo(map);

var windmillMarker = L.marker([50.683638, -1.095725], {icon: windmillIcon}).addTo(map);
var popup = windmillMarker.bindPopup('National Trust - Bembridge Windmill')
popup.addTo(map);

