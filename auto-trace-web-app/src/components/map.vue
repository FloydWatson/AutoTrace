<template>
  <GmapMap
    :center="{ lat: 1.38, lng: 103.8 }"
    :zoom="12"
    :options="{ disableDefaultUI: true, mapTypeId: 'satellite' }"
    disableDefaultUI="true"
    ref="mapRef"
    class="map-container"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
    ></gmap-marker>
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      map: Map,
      markers: [
        { position: { lat: 10, lng: 10 } },
        { position: { lat: 11, lng: 11 } },
      ],
      routes: {
        origin: { lat: -36.99369, lng: 174.8782 },
        destination: { lat: -37.00184, lng: 174.88957 },
      },
    };
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      this.map = map;
      this.setMapToUserLocation();
    });
  },
  methods: {
    panMap(latLng) {
      this.map.panTo(latLng);
    },

    setMapToUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.panMap({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    },

    //displays routes
    displayRoute() {},
  },
};
</script>

<!-- Add "scoped"  attribute to limit CSS to this component only -->
<style scoped>
.map-container {
  height: 80vh;
  width: 100vw;
}
</style>
