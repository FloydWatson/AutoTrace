<template>
  <div class="container">
    <!-- <h2>HOME</h2> -->
    <close-contact-table></close-contact-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CloseContactTable from '../components/CloseContactTable.vue';

export default {
  components:{  
    CloseContactTable
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
