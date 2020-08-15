<template>
  <GmapMap
    :center="{ lat: 1.38, lng: 103.8 }"
    :zoom="12"
    ref="mapRef"
    class="map-container"
  >
  </GmapMap>
</template>

<script>
export default {
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ lat: 1.38, lng: 103.8 });
    });
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
