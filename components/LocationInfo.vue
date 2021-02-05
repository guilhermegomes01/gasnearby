<template>
  <div class="info-local">
    <div class="info">
      <a
        @click.prevent="
          actualLocation = location;
          activeList = 'individual';
          backList = 'locations';
        "
        >{{ location.name }}</a
      >
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
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating
  },
  props: {
    actualLocation: {
      required: true
    },
    location: {
      required: true
    },
    activeList: {
      required: true
    },
    backList: {
      required: true
    }
  }
};
</script>

<style scoped>
.info-local {
  padding: 20px;
}

.info-local a {
  font-weight: bold;
  font-size: 1.25rem;
}

.star-rating {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.star-rating .users-rating {
  margin-left: 10px;
}
</style>
