<template>
  <div class="">
    <!-- <h2>HOME</h2> -->
    <h1>AutoTrace</h1>
    <iframe
      width="60%"
      height="669"
      src="https://www.youtube.com/embed/oHg5SJYRHA0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="row">
      <div class="card-body" @click="chosenGraph = 1">
        <h4 class="card-title">
          Transport Carbon Emissions (EXPOSED)
        </h4>
        <p class="card-text">
          On average, each year people in New Zealand spend nearly 1,500 million
          hours travelling, and travel nearly 52,000 million km, in over 6,500
          million trip legs. However, only 4.9% of our total travel time is
          using public transport. To take steps to improve New Zealand's
          greenhouse emissions, the most impactful changes would be to increase
          the use of our public transport as it is currently severely underused.
        </p>
      </div>

      <div class="card-body" @click="chosenGraph = 2">
        <h4 class="card-title">Caring for the Aged in COVID Times</h4>
        <p class="card-text">
          20% of New Zealand residents are made up of over 60s, the elderly have
          been disproportionately affected by the Covid-19 pandemic so far and
          the dangers of Covid still pose a larger danger for them than other
          age groups. This danger can easily be increased with the struggle
          elderly people face with adapting to new technology.
        </p>
      </div>

      <div class="card-body" @click="chosenGraph = 3">
        <h4 class="card-title">
          Impact of Covid-19 on Public Transit usage
        </h4>
        <p class="card-text">
          Across the world the fear of public transport has increased during
          these unprecedented times and this has caused a decrease in its use.
          See below graph to view the impact.
        </p>
      </div>
    </div>
    <div v-if="chosenGraphBool(1)" id="graph">
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
    <div v-else-if="chosenGraphBool(2)" id="graph">
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
    <div v-else-if="chosenGraphBool(3)" id="graph">
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
  },
  methods: {
    chosenGraphBool(clicked) {
      return this.chosenGraph == clicked;
    },
  },
};
</script>

<style>
.card-body {
  padding: 3em 1em 1em 1em;
  width: 30%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.card-text {
  padding: 1em 2em 2em 2em;
  text-align: left;
}

h1 {
  padding: 1.5em;
}
</style>
