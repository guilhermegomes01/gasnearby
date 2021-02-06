export default {
  SET_AUTH(state, payload){
      state.token = payload;
  },
  LOGOUT(state){
      state.token = false;
  }
}
