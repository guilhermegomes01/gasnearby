<template>
  <section>
    <div class="options-list">
      <button @click="activeList = 'locations'">Locais Próximos</button>
      <button @click="activeList = 'favorites'">Favoritos</button>
    </div>
    <ul v-if="activeList === 'locations'" class="gas-stations-list">
      <li v-for="location in list" :key="location.place_id" >
        <div class="info-local">
          <div class="info">
            <a @click.prevent="actualLocation = location; activeList = 'individual'; backList = 'locations'">{{ location.name }}</a>
            <div class="star-rating">
              <StarRating
                :rating="location.rating"
                :star-size="20"
                :read-only="true"
                :round-start-rating="false"
              >
              </StarRating>
              <span class="users-rating"
                >({{ location.user_ratings_total }} avaliações)</span
              >
            </div>
            <p>{{ location.vicinity }}</p>
            <button v-if="!isFavorite(location)" @click="addLocationToFavorites(location)">Favoritar</button>
            <span v-else>Favorito</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="activeList === 'individual'">
      <button @click="activeList = backList">Voltar</button>
      {{ actualLocation }}
    </div>
    <ul v-if="activeList === 'favorites'">
      <p v-if="favoriteLocations.length === 0">Ainda não há nenhum local favorito :(</p>
      <li v-for="(location, index) in favoriteLocations" :key="index">
        <div class="info-local">
          <div class="info">
            <h3>{{ location.name }}</h3>
            <div class="star-rating">
              <StarRating
                :rating="location.rating"
                :star-size="20"
                :read-only="true"
                :round-start-rating="false"
              >
              </StarRating>
              <span class="users-rating"
                >({{ location.user_ratings_total }} avaliações)</span
              >
            </div>
            <p>{{ location.vicinity }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating
  },
  props: {
    list: {
      required: true
    }
  },
  data() {
    return {
      backList: '',
      activeList: 'locations',
      favoriteLocations: [],
      actualLocation: {}
    };
  },
  methods: {
    addLocationToFavorites(location) {
      return this.favoriteLocations.push(location);
    },
    isFavorite(location) {
      return this.favoriteLocations.find(favoriteLocation => location.place_id === favoriteLocation.place_id);
    }
  }
};
</script>

<style scoped>
.gas-stations-list {
  overflow-y: auto;
  list-style: none;
  height: calc(100vh - 21px);
}

.gas-stations-list li {
  border-bottom: 1px solid gray;
}

.gas-stations-list li .info-local {
  padding: 20px;
}

.gas-stations-list .star-rating {
  display: flex;
  align-items: center;
}

.gas-stations-list .star-rating .users-rating {
  margin-left: 10px;
}
</style>
