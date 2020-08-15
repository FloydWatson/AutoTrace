import Route from "../../models/route.js";
import User from "../../models/user.js";
import Stop from "../../models/stop.js";
import UserTrip from "../../models/userTrip.js";
import InfectedRoute from "../../models/infectedRoute.js";

const state = {
  routes: [],
  stops: [],
  users: [],
  userTrips: [],
  infectedRoutes: [],
  dummyData: [{}],
};

const getters = {
  allRoutes: (state) => state.routes,
  allStops: (state) => state.stops,
  allUsers: (state) => state.users,
  allUserTrips: (state) => state.userTrips,
  allInfectedRoutes: (state) => state.infectedRoutes,
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
      {
        id: 16,
        name: "108 Parrs Cross Rd",
        lat: "-36.90502",
        lng: "174.62593",
      },
      {
        id: 17,
        name: "367 West Coast Rd",
        lat: "-36.90877",
        lng: "174.63997",
      },
      {
        id: 18,
        name: "39 Great South Rd Otahuhu",
        lat: "-36.93746",
        lng: "174.83719",
      },
      {
        id: 19,
        name: "741 Great South Rd Mt Wellington",
        lat: "-36.92358",
        lng: "174.83024",
      },
      {
        id: 20,
        name: "3 Great South Rd Otahuhu",
        lat: "-36.93648",
        lng: "174.83624",
      },
      {
        id: 21,
        name: "Great South Rd near Penrose Station",
        lat: "-36.90959",
        lng: "174.81589",
      },
      {
        id: 22,
        name: "Westgate Dr near Maki St",
        lat: "-36.82215",
        lng: "174.61346",
      },
      {
        id: 23,
        name: "60 Westgate Dr",
        lat: "-36.82731",
        lng: "174.61534",
      },
      {
        id: 24,
        name: "2 Moa Ave",
        lat: "-36.78536",
        lng: "175.01579",
      },
      {
        id: 25,
        name: "54 Mako Street",
        lat: "-36.78495",
        lng: "175.00847",
      },
      {
        id: 26,
        name: "769 Sandringham Rd",
        lat: "-36.90118",
        lng: "174.73068",
      },
      {
        id: 27,
        name: "295 Sandringham Rd",
        lat: "-36.88303",
        lng: "174.73906",
      },
      {
        id: 28,
        name: "Parnell Train Station",
        lat: "-36.85473",
        lng: "174.7774",
      },
      {
        id: 29,
        name: "Newmarket Train Station",
        lat: "-36.86972",
        lng: "174.77883",
      },
      {
        id: 30,
        name: "220 Victoria St West",
        lat: "-36.84815",
        lng: "174.75241",
      },
      {
        id: 31,
        name: "68 College Hill",
        lat: "-36.84798",
        lng: "174.74667",
      },
      {
        id: 32,
        name: "848 Mt Eden Rd",
        lat: "-36.8999",
        lng: "174.75717",
      },
      {
        id: 33,
        name: "Mt Eden Rd near Three Kings School",
        lat: "-36.90801",
        lng: "174.75881",
      },
      {
        id: 34,
        name: "12 Orakei Rd",
        lat: "-36.88057",
        lng: "174.80291",
      },
      {
        id: 35,
        name: "90 Orakei Rd",
        lat: "-36.87484",
        lng: "174.80346",
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

  createInfectedRoutes({ commit }) {
      const data = [
          {
              id: 1,
              name: "Parrs Park to Avondale College",
              start: "16",
              end: "17",
          },
          {
              id: 2,
              name: "Rosehill College To Wattle Downs",
              start: "18",
              end: "19",
          },
          {
              id: 3,
              name: "Waiheke Island 1 To Auckland 2",
              start: "20",
              end: "21",
          },
          {
              id: 4,
              name: "Wesley College/Paerata To Pukekohe Interchange",
              start: "22",
              end: "23",
          },
          {
              id: 5,
              name: "Bay 17 Manukau Bus Station",
              start: "24",
              end: "25",
          },
          {
              id: 6,
              name: "Ellerslie To Baradene",
              start: "26",
              end: "27",
          },
          {
              id: 7,
              name: "Stanmore Bay To Orewa College Via Vipond Rd",
              start: "28",
              end: "29",
          },
          {
              id: 8,
              name: "Inner Link Anticlockwise (S)",
              start: "30",
              end: "31",
          },
          {
              id: 9,
              name: "Britomart To Three Kings Via Mt Eden Rd",
              start: "32",
              end: "33",
          },
          {
              id: 10,
              name: "Epsom Schools to Glendowie",
              start: "34",
              end: "35",
          }
      ];

      const infectedRoutes = (data || []).map(
          (t) =>
              new InfectedRoute(
                  t.id,
                  t.name,
                  parseInt(t.start),
                  parseInt(t.end),
              )
      );

      commit("setInfectedRoutes", infectedRoutes);
  }
};

const mutations = {
  setRoutes: (state, routes) => (state.routes = routes),
  setStops: (state, stops) => (state.stops = stops),
  setUsers: (state, users) => (state.users = users),
  setUserTrips: (state, userTrips) => (state.userTrips = userTrips),
  setInfectedRoutes: (state, infectedRoutes) => (state.infectedRoutes = infectedRoutes),
  setDummyData: (state, dummyData) => (state.dummyData = dummyData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
