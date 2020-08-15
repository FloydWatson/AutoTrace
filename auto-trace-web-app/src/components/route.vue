<script>
import { MapElementFactory } from 'vue2-google-maps';

export default MapElementFactory({
  name: 'directionsRenderer',

  ctr() {
    console.log('this', this.$vueGoogleMaps);
    return this.$vueGoogleMaps.gmapApi.maps.DirectionsRenderer;
  },

  events: [],

  mappedProps: {},

  props: {
    origin: { type: Object },
    destination: { type: Object },
    travelMode: { type: String },
  },

  mounted() {},

  afterCreate(directionsRenderer) {
    let directionsService = this.$vueGoogleMaps.gmapApi.maps.DirectionsService();

    this.$watch(
      () => [this.origin, this.destination, this.travelMode],
      () => {
        let { origin, destination, travelMode } = this;
        if (!origin || !destination || !travelMode) return;

        directionsService.route(
          {
            origin,
            destination,
            travelMode,
          },
          (response, status) => {
            if (status !== 'OK') return;
            directionsRenderer.setDirections(response);
          }
        );
      }
    );
  },
});
</script>

<style lang="stylus" scoped></style>
