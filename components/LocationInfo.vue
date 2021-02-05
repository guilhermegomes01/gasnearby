<template>
  <section class="info-local">
    <section class="info">
      <a
        @click.prevent="
          setActualLocation(location);
          setActiveList('individual')
          setBackList(backList);
        "
        >{{ location.name }}</a
      >
      <section class="star-rating">
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
      </section>
      <p>{{ location.vicinity }}</p>
    </section>
  </section>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating
  },
  props: {
    setActualLocation: {
      required: true
    },
    location: {
      required: true
    },
    setActiveList: {
      required: true
    },
    setBackList: {
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
  cursor: pointer;
  color:  var(--tertiary);
}

.info-local a:hover {
text-decoration: underline;
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
