export default {
  async GETLOCATIONS({ commit }, { userLat, userLng }) {
    try {
      const response = await this.$axios.get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLat.toString()},${userLng.toString()}&radius=25000&type=gas_station&key=AIzaSyAZN6B6vvnFIUT7ySIbOVjsOuiCVXtbh6M`
      );
      console.log(response);
      response.data.results.sort(function(a, b) {
        return a - b;
      });
      commit("SET_LOCATIONS", response.data.results);
    } catch (err) {
      console.log(err);
      console.log("erro ao pegar mapa");
    }
  }
};
