<template>
  <section>
    <div v-if="activeList !== 'individual'" class="options-list">
      <button
        :class="{ active: activeList === 'locations' }"
        @click="activeList = 'locations'"
      >
        Locais Próximos
      </button>
      <button
        :class="{ active: activeList === 'favorites' }"
        @click="activeList = 'favorites'"
      >
        Favoritos
      </button>
    </div>
    <ul v-if="activeList === 'locations'" class="gas-stations-list">
      <li v-for="location in list" :key="location.place_id">
        <LocationInfo
          :location="location"
          :setActualLocation="setActualLocation"
          :setActiveList="setActiveList"
          :setBackList="setBackList"
          :backList="'locations'"
        />
        <div class="favorite-button">
          <button
            v-if="!isFavorite(location)"
            @click="addLocationToFavorites(location)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z M14.811,16.11 c-0.177,0.16-0.331,0.299-0.456,0.416c-0.751,0.7-1.639,1.503-2.355,2.145c-0.716-0.642-1.605-1.446-2.355-2.145 c-0.126-0.117-0.28-0.257-0.456-0.416C7.769,14.827,4,11.419,4,8.5C4,6.57,5.57,5,7.5,5c1.827,0,2.886,1.275,2.914,1.308L12,8 l1.586-1.692C13.596,6.295,14.673,5,16.5,5C18.43,5,20,6.57,20,8.5C20,11.419,16.231,14.827,14.811,16.11z"
              ></path>
            </svg>
            Favoritar
          </button>
          <span v-else>Favorito</span>
        </div>
      </li>
    </ul>
    <div v-if="activeList === 'individual'" class="gas-stations-list">
      <SingleLocation
        :actualLocation="actualLocation"
        :setActiveList="setActiveList"
        :backList="backList"
      />
    </div>
    <ul v-if="activeList === 'favorites'" class="gas-stations-list">
      <p v-if="favoriteLocations.length === 0">
        Ainda não há nenhum local favorito :(
      </p>
      <li v-for="(location, index) in favoriteLocations" :key="index">
        <LocationInfo
          :location="location"
          :actualLocation="location"
          :setActiveList="setActiveList"
          :setBackList="setBackList"
          :backList="'favorites'"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    list: {
      required: true
    }
  },
  data() {
    return {
      backList: "",
      activeList: "locations",
      favoriteLocations: [],
      actualLocation: {}
    };
  },
  methods: {
    addLocationToFavorites(location) {
      return this.favoriteLocations.push(location);
    },
    isFavorite(location) {
      return this.favoriteLocations.find(
        favoriteLocation => location.place_id === favoriteLocation.place_id
      );
    },
    setActiveList(value) {
      this.activeList = value;
    },
    setBackList(value) {
      this.backList = value;
    },
    setActualLocation(location) {
      this.actualLocation = location;
    }
  }
};
</script>

<style scoped>
.options-list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px 32px;
}

.options-list button {
  background: transparent;
  font-size: 20px;
}

.options-list button::after {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
}

.options-list button.active::after {
  background: #f44336;
}

.options-list button:hover {
  opacity: 0.6;
  transition: 0.8s;
}

.gas-stations-list {
  overflow-y: auto;
  list-style: none;
  height: calc(100vh - 68px);
}

.gas-stations-list::-webkit-scrollbar {
  width: 8px;
}

.gas-stations-list::-webkit-scrollbar-thumb {
  background-color: #06092b;
}

.gas-stations-list::-webkit-scrollbar-track {
  background-color: #cecece;
}

.gas-stations-list .favorite-button {
  padding: 20px;
}

.gas-stations-list li {
  border-bottom: 1px solid gray;
}
</style>
