<template>
  <div>
    <!-- <h2>HOME</h2> -->
    <google-map></google-map>
    <hello-world :msg="'TEST'"></hello-world>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import helloWorld from '../components/HelloWorld.vue';
import GoogleMap from '../components/map.vue';
export default {
  components:{  
    helloWorld,
    GoogleMap,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["allRoutes", "allStops", "allUsers", "allUserTrips", "allInfectedRoutes"]),
    
  },
  methods: {
    
  },
};
</script>

<style></style>
