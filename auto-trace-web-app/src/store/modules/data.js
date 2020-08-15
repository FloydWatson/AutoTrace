import Route from "../../models/route.js";
import User from "../../models/user.js";
import Stop from "../../models/stop.js";
import UserTrip from '../../models/userTrip';

const state = {
  routes: [],
  stops: [],
  users: [],
  userTrips: [],
  dummyData: [{}],
};

const getters = {
  allRoutes: (state) => state.routes,
  allStops: (state) => state.stops,
  allUsers: (state) => state.users,
  allUserTrips: (state) => state.userTrips,
  allDummyData: (state) => state.dummyData,
};

const actions = {
  createRoutes({ commit }) {
    const data = [
      {
        id: 1,
        name: "Parrs Park to Avondale College",
      },
      {
        id: 2,
        name: "Pukekohe Interchange To Waiuku Via Patumahoe And Victoria Av",
      },
      {
        id: 3,
        name: "Britomart To Westmere Via Richmond Rd",
      },
    ];

    const routes = (data || []).map((t) => new Route(t.id, t.name));

    commit("setRoutes", routes);
  },

  createUser({ commit }) {
    const data = [
      {
        id: 1,
        name: "John Smith",
        phone: "0220347658",
        isNotified: false,
      },
      {
        id: 2,
        name: "Jane Doe",
        phone: "0276543872",
        isNotified: false,
      },
      {
        id: 3,
        name: "Major Tom",
        phone: "0213672895",
        isNotified: false,
      },
    ];

    const users = (data || []).map(
      (t) => new User(t.id, t.name, t.phone, t.isNotified)
    );

    commit("setUsers", users);
  },

  createUserTrips({ commit }) {
    const data = [
      {
        id: 1,
        userId: "2",
        startStopId: "3",
        endStopId: "6",
        startTime: "1597459341",
        endTime: "1597461341",
        routeId: "1",
      },
      {
        id: 2,
        userId: "3",
        startStopId: "1",
        endStopId: "4",
        startTime: "1597463822",
        endTime: "1597463987",
        routeId: "3",
      },
      {
        id: 3,
        userId: "1",
        startStopId: "7",
        endStopId: "1",
        startTime: "1596685503",
        endTime: "1596685679",
        routeId: "2",
      },
      {
        id: 4,
        userId: "1",
        startStopId: "1",
        endStopId: "3",
        startTime: "1596080703",
        endTime: "1596081988",
        routeId: "1",
      },
      {
        id: 5,
        userId: "2",
        startStopId: "4",
        endStopId: "8",
        startTime: "1595475903",
        endTime: "1595479503",
        routeId: "3",
      },
      {
        id: 6,
        userId: "1",
        startStopId: "6",
        endStopId: "1",
        startTime: "1595472303",
        endTime: "1595475003",
        routeId: "3",
      },
      {
        id: 7,
        userId: "1",
        startStopId: "1",
        endStopId: "2",
        startTime: "1595299803",
        endTime: "1595303003",
        routeId: "2",
      },
      {
        id: 8,
        userId: "2",
        startStopId: "3",
        endStopId: "1",
        startTime: "1594788303",
        endTime: "1594788453",
        routeId: "1",
      },
      {
        id: 9,
        userId: "2",
        startStopId: "1",
        endStopId: "4",
        startTime: "1595220303",
        endTime: "1595221503",
        routeId: "1",
      },
      {
        id: 10,
        userId: "2",
        startStopId: "1",
        endStopId: "7",
        startTime: "1594683903",
        endTime: "1594684203",
        routeId: "2",
      },
    ];

    const userTrips = (data || []).map(
      (t) => new UserTrip(t.id, parseInt(t.userId), parseInt(t.startStopId), parseInt(t.endStopId), parseInt(t.startTime), parseInt(t.endTime) , parseInt(t.routeId))
    );

    commit("setUserTrips", userTrips);
  },

  createStops({ commit }) {
    const data = [
      {
        id: 1,
        name: "Bay 17 Manukau Bus Station",
        lat: "-36.99369",
        lng: "174.8782",
      },
      {
        id: 2,
        name: "834 Great South Rd Manukau",
        lat: "-37.00184",
        lng: "174.88957",
      },
      {
        id: 3,
        name: "898 Great South Rd Manukau",
        lat: "-37.00737",
        lng: "174.88985",
      },
      {
        id: 4,
        name: "16 Great South Rd Manurewa",
        lat: "-37.00985",
        lng: "174.89084",
      },
      {
        id: 5,
        name: "46 Great South Rd Manurewa",
        lat: "-37.01212",
        lng: "174.89175",
      },
      {
        id: 6,
        name: "82 Great South Rd Manurewa",
        lat: "-37.01529",
        lng: "174.89269",
      },
      {
        id: 7,
        name: "128 Great South Rd Manurewa",
        lat: "-37.0189",
        lng: "174.89408",
      },
      {
        id: 8,
        name: "Northcrest Way near Great South Rd",
        lat: "-37.02015",
        lng: "174.89431",
      },
      {
        id: 9,
        name: "Maich Rd near Station Rd",
        lat: "-37.02169",
        lng: "174.89484",
      },
      {
        id: 10,
        name: "Stop B Manurewa Interchange",
        lat: "-37.02368",
        lng: "174.8958",
      },
      {
        id: 11,
        name: "44 Weymouth Rd",
        lat: "-37.02559",
        lng: "174.89297",
      },
      {
        id: 12,
        name: "68 Weymouth Rd",
        lat: "-37.02633",
        lng: "174.89089",
      },
      {
        id: 13,
        name: "90 Weymouth Rd",
        lat: "-37.02724",
        lng: "174.88828",
      },
      {
        id: 14,
        name: "126 Weymouth Rd",
        lat: "-37.02822",
        lng: "174.88554",
      },
      {
        id: 15,
        name: "Opp 167 Weymouth Rd",
        lat: "-37.0295",
        lng: "174.88185",
      },
    ];

    const stops = (data || []).map(
      (t) =>
        new Stop(
          t.id,
          t.name,
          parseFloat(t.lat),
          parseFloat(t.lng),
         
        )
    );

    commit("setStops", stops);
  },
};

const mutations = {
  setRoutes: (state, routes) => (state.routes = routes),
  setStops: (state, stops) => (state.stops = stops),
  setUsers: (state, users) => (state.users = users),
  setUserTrips: (state, userTrips) => (state.userTrips = userTrips),
  setDummyData: (state, dummyData) => (state.dummyData = dummyData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
