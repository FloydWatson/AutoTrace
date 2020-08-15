<template>
  <div class="hello">
    <p>{{UserID}}</p>
    <input type="number" v-model="UserID" placeholder="UserID" />
    <div v-if="getRoutes().length>0">
    <h3>buses taken</h3>
    <table>
      <tr>
        <th>id</th>
        <th>start</th>
        <th>end</th>
        <th>route</th>

        <th>start Time</th>
        <th>end Time</th>
      </tr>
      <tr v-for="i in getRoutes()" :key="i.id">
        <td>{{i.id}}</td>        <td>{{i.start}}</td><td>{{i.end}}</td><td>{{i.route}}</td><td>{{i.starttime}}</td>  <td>{{i.endTime}}</td>  
      </tr>
    </table>
    </div>

    <br>
    <div v-if="getContacts().length>0">
    <h3>close contacts</h3>
    <table>
      <tr>
        <th>id</th>
        <th>phone</th>
        <th>name</th>
        <th>route</th>
      </tr>
      <tr v-for="i in getContacts()" :key="i.id">
        <td>{{i.id}}</td>
        <td>{{i.phone}}</td>
        <td>{{i.name}}</td>
        <td>{{i.route}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "close",
  props: {
    msg: String,
  },
  data() {
    return {
      test: "Test Data",
      UserID: "",
      date: 1597475437,
    };
  },
  computed: {
    stops() {
      return this.$store.state.data.stops;
    },
    routes() {
      return this.$store.state.data.routes;
    },
    userTrips() {
      return this.$store.state.data.userTrips;
    },
    users() {
      return this.$store.state.data.users;
    },
  },
  methods: {
    getContacts: function () {
      // let u=this.UserID;
      let idTrips = this.userTrips.filter((el) => el.userId == this.UserID);
      let otherUserTrips = this.userTrips.filter(this.notIdTrips);

      let contactTrips = [];
      let contactTable = [];

      for (const i in idTrips) {
        for (const e in otherUserTrips) {
          if (
            otherUserTrips[e].startTime <= idTrips[i].endTime &&
            otherUserTrips[e].endTime <= idTrips[i].startTime
          ) {
            let u = this.users.filter(
              (element) => element.id == otherUserTrips[e].userId
            );
            let r = this.routes.filter(
              (element) => element.id == otherUserTrips[e].routeId
            );

            let row = {
              id: u[0].id,
              phone: u[0].phone,
              name: u[0].name,
              route: r[0].name,
            };
            if (!contactTrips.includes(otherUserTrips[e])) {
              contactTrips.push(otherUserTrips[e]);
              contactTable.push(row);
            }
          }
        }
      }

      // 1598486400
      return contactTable;
    },
    isIdTrips: function (trip) {
      return trip.userId == this.UserID;
    },
    notIdTrips: function (trip) {
      return !this.isIdTrips(trip);
    },

    getRoutes: function () {
      let idTrips = this.userTrips.filter((el) => el.userId == this.UserID);
      let formatedTrips = [];
      for (const i in idTrips) {
        let start = this.stops.filter((el) => el.id == idTrips[i].startStopId);
        let stop = this.stops.filter((el) => el.id == idTrips[i].endStopId);
        let r = this.routes.filter(
          (element) => element.id == idTrips[i].routeId
        );

        let row = {
          id: idTrips[i].id,
          start: start[0].name,
          end: stop[0].name,
          route: r[0].name,
          starttime:new Date(idTrips[i].startTime * 1000),
          endTime:new Date(idTrips[i].endTime * 1000)
        };
        formatedTrips.push(row);
      }
      console.log(idTrips);
      return formatedTrips;
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  margin-bottom: 10px;
  width: 100%;
}

td,
th {
  padding: 6px;
  text-align: left;
}
tbody tr:nth-child(even) {
  background-color: #f7f7f7;
}

</style>