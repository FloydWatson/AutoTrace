

const state = {

  dummyData: [{
    "routes": [{
      "route": {
        "id": 1,
        "name": "Parrs Park to Avondale College"
      },
      "route": {
        "id": 2,
        "name": "Pukekohe Interchange To Waiuku Via Patumahoe And Victoria Av"
      },
      "route": {
        "id": 3,
        "name": "Britomart To Westmere Via Richmond Rd"
      }
    }],
    "stops": [{
      "stop": {
        "id": 1,
        "stop_name": "Bay 17 Manukau Bus Station",
        "stop_lat": -36.99369,
        "stop_lon": 174.8782,
      },
      "stop": {
        "id": 2,
        "stop_name": "834 Great South Rd Manukau",
        "stop_lat": -37.00184,
        "stop_lon": 174.88957,
      },
      "stop": {
        "id": 3,
        "stop_name": "898 Great South Rd Manukau",
        "stop_lat": -37.00737,
        "stop_lon": 174.88985,
      },
      "stop": {
        "id": 4,
        "stop_name": "16 Great South Rd Manurewa",
        "stop_lat": -37.00985,
        "stop_lon": 174.89084,
      },
      "stop": {
        "id": 5,
        "stop_name": "46 Great South Rd Manurewa",
        "stop_lat": -37.01212,
        "stop_lon": 174.89175,
      },
      "stop": {
        "id": 6,
        "stop_name": "82 Great South Rd Manurewa",
        "stop_lat": -37.01529,
        "stop_lon": 174.89269,
      },
      "stop": {
        "id": 7,
        "stop_name": "128 Great South Rd Manurewa",
        "stop_lat": -37.0189,
        "stop_lon": 174.89408,
      },
      "stop": {
        "id": 8,
        "stop_name": "Northcrest Way near Great South Rd",
        "stop_lat": -37.02015,
        "stop_lon": 174.89431,
      },
      "stop": {
        "id": 9,
        "stop_name": "Maich Rd near Station Rd",
        "stop_lat": -37.02169,
        "stop_lon": 174.89484,
      },
      "stop": {
        "id": 10,
        "stop_name": "Stop B Manurewa Interchange",
        "stop_lat": -37.02368,
        "stop_lon": 174.8958,
      },
      "stop": {
        "id": 11,
        "stop_name": "44 Weymouth Rd",
        "stop_lat": -37.02559,
        "stop_lon": 174.89297,
      },
      "stop": {
        "id": 12,
        "stop_name": "68 Weymouth Rd",
        "stop_lat": -37.02633,
        "stop_lon": 174.89089,
      },
      "stop": {
        "id": 13,
        "stop_name": "90 Weymouth Rd",
        "stop_lat": -37.02724,
        "stop_lon": 174.88828,
      },
      "stop": {
        "id": 14,
        "stop_name": "126 Weymouth Rd",
        "stop_lat": -37.02822,
        "stop_lon": 174.88554,
      },
      "stop": {
        "id": 15,
        "stop_name": "Opp 167 Weymouth Rd",
        "stop_lat": -37.0295,
        "stop_lon": 174.88185,
      }
    }],
    "users": [{
      "user": {
        "id": 1,
        "name": "John Smith",
        "phone": "0220347658",
        "isNotified": false 
      },
      "user": {
        "id": 2,
        "name": "Jane Doe",
        "phone": "0276543872",
        "isNotified": false
      },
      "user": {
        "id": 3,
        "name": "Major Tom",
        "phone": "0213672895",
        "isNotified": false
      }
    }],
    "userTrips": [{
      "userTrip": {
        "id": 1,
        "userId": 2,
        "startStopId": 3,
        "endStopId": 6,
        "startTime": 1597459341,
        "endTime": 1597461341,
        "routeId": 1
      },
      "userTrip": {
        "id": 2,
        "userId": 3,
        "startStopId": 1,
        "endStopId": 4,
        "startTime": 1597463822,
        "endTime": 1597463987,
        "routeId": 3
      },
      "userTrip": {
        "id": 3,
        "userId": 1,
        "startStopId": 7,
        "endStopId": 14,
        "startTime": 1596685503,
        "endTime": 1596685679,
        "routeId": 2
      },
      "userTrip": {
        "id": 4,
        "userId": 1,
        "startStopId": 15,
        "endStopId": 3,
        "startTime": 1596080703,
        "endTime": 1596081988,
        "routeId": 1
      },
      "userTrip": {
        "id": 5,
        "userId": 2,
        "startStopId": 4,
        "endStopId": 8,
        "startTime": 1595475903,
        "endTime": 1595479503,
        "routeId": 3
      },
      "userTrip": {
        "id": 6,
        "userId": 1,
        "startStopId": 6,
        "endStopId": 12,
        "startTime": 1595472303,
        "endTime": 1595475003,
        "routeId": 3
      },
      "userTrip": {
        "id": 7,
        "userId": 1,
        "startStopId": 1,
        "endStopId": 2,
        "startTime": 1595299803,
        "endTime": 1595303003,
        "routeId": 2
      },
      "userTrip": {
        "id": 8,
        "userId": 2,
        "startStopId": 3,
        "endStopId": 11,
        "startTime": 1594788303,
        "endTime": 1594788453,
        "routeId": 1
      },
      "userTrip": {
        "id": 9,
        "userId": 2,
        "startStopId": 1,
        "endStopId": 4,
        "startTime": 1595220303,
        "endTime": 1595221503,
        "routeId": 1
      },
      "userTrip": {
        "id": 10,
        "userId": 2,
        "startStopId": 13,
        "endStopId": 7,
        "startTime": 1594683903,
        "endTime": 1594684203,
        "routeId": 2
      }
    }],
  }]
};

const getters = {

  allDummyData: (state) => state.dummyData,
};

const actions = {

};

const mutations = {

  setDummyData: (state, dummyData) => (state.dummyData = dummyData),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
