export default {
  GET_USER({ commit }) {
    this.$axios.get("/users/2").then(response => {
      console.log(response)
      commit("SET_USER", response.data.data);
      // this.$router.push("/profile");
    }).catch(err => console.log(err));
  },
};
