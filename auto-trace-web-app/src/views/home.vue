<template>
  <div class="container">
    <!-- <h2>HOME</h2> -->
    <hello-world :msg="'TEST'"></hello-world>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import helloWorld from '../components/HelloWorld.vue';

export default {
  components:{  
    helloWorld
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["allDummyData"]),
    
  },
  methods: {
    
  },
};
</script>

<style></style>
