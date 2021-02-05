<template>
  <section>
    <div class="options-list">
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
          :actualLocation="actualLocation"
          :activeList="activeList"
          :backList="backList"
        />
        <div class="favorite-button">
          <button
            v-if="!isFavorite(location)"
            @click="addLocationToFavorites(location)"
          >
            Favoritar
          </button>
          <span v-else>Favorito</span>
        </div>
      </li>
    </ul>
    <div v-if="activeList === 'individual'" class="gas-stations-list">
      <button @click="activeList = backList">Voltar</button>
      {{ actualLocation }}
    </div>
    <ul v-if="activeList === 'favorites'" class="gas-stations-list">
      <p v-if="favoriteLocations.length === 0">
        Ainda não há nenhum local favorito :(
      </p>
      <li v-for="(location, index) in favoriteLocations" :key="index">
        <LocationInfo
          :location="location"
          :actualLocation="actualLocation"
          :activeList="activeList"
          :backList="backList"
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

.gas-stations-list .favorite-button {
  padding: 20px;
}

.gas-stations-list li {
  border-bottom: 1px solid gray;
}
</style>
