<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/navbar.vue';
import {mapActions} from "vuex"
export default {
  name: "App",
  components: {
    NavBar,
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
