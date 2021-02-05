export default {
  SET_LOCATIONS(state, payload) {
    state.geoLocations = payload;
  },
  ADD_FAV(state, payload) {
    state.favList.push(payload);
  }
};
