<template>
<section>
  <div class="container" v-if="locationsList">
    {{ userInfo }}
    <Locations :list="locationsList" />
    <Map :locationsList="locationsList" :actualLat="lat" :actualLng="lng" />
  </div>
</section>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      lat: "",
      lng: ""
    };
  },
  middleware: 'verifyIsLogged',
  computed: {
    ...mapState("locations", {
      locationsList: state => state.geoLocations
    }),
    ...mapState("auth", {
      isLogged: state => state.token
    }),
    ...mapState("user", {
      userInfo: state => state.userInfo
    }),
  },
  methods: {
    async getLocations() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.$store.dispatch("locations/GETLOCATIONS", {
            userLat: this.lat,
            userLng: this.lng
          });
        });
      }
    },
    ...mapActions("user", {
      getUser: "GET_USER"
    })
  },
  created() {
    this.getLocations();
    this.getUser();
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 400px auto;

  height: 100vh;
}
</style>
