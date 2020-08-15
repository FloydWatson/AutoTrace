<template>
  <div id="app">
    <nav-bar></nav-bar>
    <google-map></google-map>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "./components/navbar.vue";
import GoogleMap from "./components/map.vue";
export default {
  name: "App",
  components: {
    NavBar,
    GoogleMap,
  },
  methods: {
    ...mapActions([
      "createRoutes",
      "createUser",
      "createUserTrips",
      "createStops",
    ]),
  },
  mounted() {
    this.createRoutes();
    this.createUser();
    this.createUserTrips();
    this.createStops();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
