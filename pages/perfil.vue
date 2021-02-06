<template>
  <section>
    <div class="container" v-if="locationsList">
      <section>
        <section class="username-container">
          <aside class="username-image">
            <img :src="userInfo.avatar" alt="Avatar do usuário" />
          </aside>
          <section class="username-info">
            <p class="username">{{ `${userInfo.first_name} ${userInfo.last_name}` }}</p>
            <p class="username-email">{{ userInfo.email }}</p>
            <button @click="handleLogout()">Sair</button>
          </section>

        </section>
        <Locations :list="locationsList" />
      </section>
      <Map :locationsList="locationsList" :actualLat="lat" :actualLng="lng" />
    </div>
  </section>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      lat: "",
      lng: ""
    };
  },
  middleware: "verifyIsLogged",
  computed: {
    ...mapState("locations", {
      locationsList: state => state.geoLocations
    }),
    ...mapState("auth", {
      isLogged: state => state.token
    }),
    ...mapState("user", {
      userInfo: state => state.userInfo
    })
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
    }),
    ...mapMutations("auth", {
      logOut: "LOGOUT"
    }),
    handleLogout() {
      this.logOut();
      this.$router.push("/");
    }
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


.username-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.username-container .username-image img {
  border-radius: 50%;
}

.username-container .username-info {
  margin-left: 20px;
}

.username {
  font-weight: 600;
}

.username-container .username-info button {
    padding: 4px 12px;
  background: transparent;
  border: 1px solid #FF5F5F;
  color: #FF5F5F;
  transition: .7s;
  margin-top: 2rem;
}

@media (max-width: 767px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
