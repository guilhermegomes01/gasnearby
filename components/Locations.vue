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
            class="add-wishlist"
            @click="
              !isFavorite(location)
                ? addLocationToFavorites(location)
                : removeFromFavorites(location)
            "
          >
            <svg
              class="icon-favorite"
              :class="{ active: isFavorite(location) }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z"
              ></path>
            </svg>
            {{ !isFavorite(location) ? "Favoritar" : "Desfavoritar" }}
          </button>
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
      <p class="empty-favorites" v-if="favoriteLocations.length === 0">
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
    removeFromFavorites(location) {
      this.favoriteLocations = this.favoriteLocations.filter(
        favoriteLocation => favoriteLocation.place_id !== location.place_id
      );
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
  color: var(--tertiary);
}

.options-list button::after {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
}

.options-list button.active::after {
  background: var(--secondary);
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
  background-color: var(--tertiary);
  border-radius: 5px;
}

.gas-stations-list::-webkit-scrollbar-track {
  background-color: #cecece;
  border-radius: 5px;
}

.gas-stations-list .favorite-button {
  padding: 20px;
}

.gas-stations-list .favorite-button button.add-wishlist {
  display: flex;
  align-items: center;
  background: transparent;
  font-weight: 600;
  color: var(--primary);
  font-size: 16px;
  padding: 0;
}

.gas-stations-list .favorite-button button:hover .icon-favorite {
  fill: var(--primary);
}

.gas-stations-list .favorite-button .icon-favorite {
  width: 30px;
  stroke-width: 2px;
  stroke: var(--primary);
  fill: transparent;
  margin-right: 10px;
  transition: 0.5s;
}

.gas-stations-list .favorite-button .icon-favorite.active {
  fill: var(--primary);
}

.gas-stations-list li {
  border-bottom: 1px solid gray;
}

.gas-stations-list .empty-favorites {
  padding: 20px;
  text-align: center;
}
</style>
