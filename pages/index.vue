<template>
  <div class="container" v-if="locationsList">
    <Locations :list="locationsList" />
    <Map :locationsList="locationsList" :actualLat="lat" :actualLng="lng" />
  </div>
  <!-- <div v-else>
    <p>Erro</p>
  </div> -->
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      lat: "",
      lng: "",
    };
  },
  computed: {
    ...mapState("locations", {
      locationsList: state => state.geoLocations,
      favList: state => state.favList
    })
  },
  methods: {
    ...mapMutations("locations", {
      addFav: "ADD_FAV"
    }),
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
    }
  },
  created() {
    this.getLocations();
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 400px auto;

  height: 100vh;
}
</style>
