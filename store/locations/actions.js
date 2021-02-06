export default {
  async GETLOCATIONS({ commit }, { userLat, userLng }) {
    try {
      const response = await this.$axios.get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLat.toString()},${userLng.toString()}&radius=25000&type=gas_station&key=AIzaSyBCLd7m25rmxAEslVigBB42kNchGcoz0Mg`
      );
      commit("SET_LOCATIONS", response.data.results);
    } catch (err) {
      alert("Ocorreu um erro ao carregar o mapa. Por favor, atualize a página");
    }
  }
};
