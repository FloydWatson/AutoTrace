<template>
  <div>
    <google-map></google-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GoogleMap from '../components/map.vue';
export default {
  components: {
    GoogleMap,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'allRoutes',
      'allStops',
      'allUsers',
      'allUserTrips',
      'allInfectedRoutes',
    ]),
  },
  methods: {},
};
</script>

<style></style>
