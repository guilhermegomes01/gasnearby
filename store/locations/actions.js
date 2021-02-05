export default {
  async GETLOCATIONS({ commit }, { userLat, userLng }) {
    try {
        const response = await this.$axios.get(
            `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLat.toString()},${userLng.toString()}&radius=25000&type=gas_station&key=AIzaSyBCLd7m25rmxAEslVigBB42kNchGcoz0Mg`
          );
          console.log(response)
      response.data.results.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
      commit("SET_LOCATIONS", response.data.results);

    } catch (err) {
      console.log(err);
      console.log("erro ao pegar mapa");
    }
  }
};
