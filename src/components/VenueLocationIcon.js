import L from "leaflet"

export const VenueLocationIcon = L.icon({
  iconUrl: require("../images/Marker.png"),
  iconRetinaUrl: require("../images/Marker.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
