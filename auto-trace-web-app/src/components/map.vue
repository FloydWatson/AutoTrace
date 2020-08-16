<template>
  <div>
    <GmapMap
      :center="{ lat: 1.38, lng: 103.8 }"
      :zoom="12"
      :options="{ disableDefaultUI: true /*mapTypeId: 'satellite' */ }"
      disableDefaultUI="true"
      ref="mapRef"
      class="map-container"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in allStops"
        :position="{ lat: m.lat, lng: m.lng }"
        :clickable="true"
        @click="toggleInfoWindow(m, index)"
      ></gmap-marker>
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
      </gmap-info-window>
    </GmapMap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'allRoutes',
      'allStops',
      'allUsers',
      'allUserTrips',
      'allInfectedRoutes',
    ]),
  },
  data() {
    return {
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,

      infoOptions: {
        content: '',
        //optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
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
      this.panMap({ lat: -36.848461, lng: 174.763336 });
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
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = { lat: marker.lat, lng: marker.lng };
      this.infoOptions.content =
        '<b>Station Location:</b><br><br>' + marker.name;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
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
