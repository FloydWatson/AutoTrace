import * as VueGoogleMaps from 'vue2-google-maps';
const Marker = VueGoogleMaps.Marker;

export default class CustomMarker extends Marker {
  constructor(id, name, lat, lng, colour) {
    super();
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.colour = colour;
  }
}
