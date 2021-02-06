export default {
   SIGN_IN({ commit }, data) {
    this.$axios.post("/login", data).then(response => {
      commit("SET_AUTH", response.data.token);
      this.$router.push("/perfil");
    }).catch(err => {
      alert("Ocorreu um erro ao fazer login. Verifique as credenciais utilizadas")
    });
  },
  SIGN_UP({ commit }, data) {
    this.$axios.post("/register", data).then(response => {
      commit("SET_AUTH", response.data.token);
      this.$router.push("/perfil");
    }).catch(err => {
      alert("Ocorreu um erro ao cadastrar. Verifique as credenciais utilizadas")
    });
  },
};
