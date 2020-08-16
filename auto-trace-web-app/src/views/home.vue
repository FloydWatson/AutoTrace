<template>
  <div class="">
    <!-- <h2>HOME</h2> -->
    <img
      src="../assets/auto_logo.png"
      id="autoLogoTitle"
      alt="auto trace icon"
    /><br />
    <iframe
      width="60%"
      height="669"
      src="https://www.youtube.com/embed/WzuR663_i8A"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="row justify-content-center">
      <div class="card">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">
            Transport Carbon Emissions
          </h4>
          <p class="card-text">
            On average, each year people in New Zealand spend nearly 1,500
            million hours travelling, and travel nearly 52,000 million km, in
            over 6,500 million trip legs. However, only 4.9% of our total travel
            time is using public transport. To take steps to improve New
            Zealand's greenhouse emissions, the most impactful changes would be
            to increase the use of our public transport as it is currently
            severely underused.
          </p>
          <button
            @click="scrollFns(1)"
            type="button"
            class="btn btn-warning mt-auto"
          >
            View Graph
          </button>
        </div>
      </div>

      <div class="card" ref="card1">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">Caring for the Aged in COVID Times</h4>
          <p class="card-text">
            Approximately 20% of New Zealand residents are made up of over 60s,
            who have been disproportionately affected by the Covid-19 pandemic
            so far. The dangers of Covid still pose a larger danger for the
            elderly than any other age groups. This danger can easily be
            increased with the struggle elderly people face with adapting to new
            technology.
          </p>
          <button
            @click="chosenGraph = 2"
            type="button"
            class="btn btn-warning mt-auto"
          >
            View Graph
          </button>
        </div>
      </div>

      <div class="card">
        <div class="card-body d-flex flex-column" @click="chosenGraph = 3">
          <h4 class="card-title">
            Impact of Covid-19 on Public Transit usage
          </h4>
          <p class="card-text">
            Across the world the fear of public transport has increased during
            these unprecedented times and this has caused a decrease in its use.
          </p>
          <button
            @click="chosenGraph = 3"
            type="button"
            class="btn btn-warning  mt-auto"
          >
            View Graph
          </button>
        </div>
      </div>
    </div>
    <div v-if="chosenGraphBool(1)" ref="graph1">
      <p>
        Share of total travel time in New Zealand 2015-2017
        <a
          href="https://www.transport.govt.nz/assets/Uploads/Research/Documents/18b14beb02/Household-Travel-Survey-intro-Dec2017.pdf"
          >transport.govt</a
        >
      </p>

      <a class="navbar-brand" href="#">
        <img
          src="../assets/emissions.png"
          id="ptGraph"
          alt="Public Transport Graph"
        />
      </a>
    </div>
    <div v-else-if="chosenGraphBool(2)" ref="graph2">
      <p>
        Resident population of New Zealand
        <a href="https://figure.nz/chart/vm0qVHNtsrA3zFnr">figure.nz</a>
      </p>

      <a class="navbar-brand" href="#">
        <img
          src="../assets/population.png"
          id="ptGraph"
          alt="Public Transport Graph"
        />
      </a>
    </div>
    <div v-else-if="chosenGraphBool(3)" ref="graph3">
      <p>
        The report, updated daily, is showing Moovit’s app usage of the previous
        7 days in each city, and comparing it to a typical week before the
        outbreak began (the week prior to January 15th).
        <a
          href="https://moovitapp.com/insights/en-gb/Moovit_Insights_Public_Transport_Index-121"
          >Moovit</a
        >
      </p>

      <a class="navbar-brand" href="#">
        <img
          src="../assets/public_transport_graph.png"
          id="ptGraph"
          alt="Public Transport Graph"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      chosenGraph: 0,
    };
  },
  computed: {
    ...mapGetters(["allDummyData"]),
    scroll1() {
      return document.getElementsByName("graph1");
    },
  },
  methods: {
    chosenGraphBool(clicked) {
      return this.chosenGraph == clicked;
    },
    scroll() {
      //let el = this.scroll1;
      this.$refs.graph1[0].$el.focus();
    },
    scrollFns(graphNum) {
      console.log(this.$refs.card1);
      this.chosenGraph = graphNum;
      this.scroll();
    },
  },
};
</script>

<style>
#autoLogoTitle {
  margin: 2em 2em;
  width: 10%;
  height: auto;
}

.card {
  padding: 3em 1em 1em 1em;
  width: 20vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 2em;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.card-text {
  padding: 1em 2em;
  text-align: left;
}

h1 {
  padding: 1.5em;
}
</style>
