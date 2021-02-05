<template>
  <section class="single-location">
    <button class="back-button" @click="setActiveList(backList)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 172 172"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <path d="M0,172v-172h172v172z" fill="none" />
          <g fill="#FF5F5F">
            <path
              d="M93.16667,42.49609l-43.50391,43.50391l43.50391,43.5039l10.75,-10.75l-32.75391,-32.7539l32.75391,-32.75391z"
            />
          </g>
        </g>
      </svg>
      <span>Voltar</span>
    </button>
    <section class="place-name">
      <img class="place-icon" :src="actualLocation.icon" />
      <h3>{{ actualLocation.name }}</h3>
    </section>


    <form @submit.prevent="sendRating" v-if="personalRating.isEmpty" class="form">
      <section class="input-title">
        <label>Título</label>
        <input type="text" v-model="personalRating.title" required />
      </section>
      <section class="input-rating">
        <label>Avaliação</label>
        <star-rating :star-size="30" v-model="personalRating.rating"></star-rating>
        <span v-if="personalRating.showError" class="error">É necessário escolher uma avaliação entre 1 e 5</span>
      </section>
      <section class="textarea-comment">
        <label>Comentário</label>
        <textarea v-model="personalRating.comment"></textarea>
      </section>

      <button class="send-rating" type="submit">Salvar Avaliação</button>
    </form>

    <section class="personal-rating" v-if="!personalRating.isEmpty">
      <h3>Sua avaliação</h3>
      <star-rating :star-size="25" :rating="personalRating.rating" :read-only="true"></star-rating>
      <h4 class="rating-title">{{ personalRating.title }}</h4>
      <p>{{ personalRating.comment }}</p>

      <button @click="personalRating.isEmpty = true" class="edit-rating">Editar Avaliação</button>
    </section>
  </section>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  props: {
    setActiveList: {
      required: true
    },
    actualLocation: {
      required: true
    },
    backList: {
      required: true
    }
  },
  data() {
    const personalRatingStorage = JSON.parse(localStorage.getItem("@gas-nearby:personalRating"));
    const { title, rating, comment, isEmpty, showError } = personalRatingStorage;

    return {
      personalRating: {
        isEmpty,
        showError,
        title,
        rating,
        comment
      },
    };
  },
  methods: {
    sendRating() {
      if(this.personalRating.rating === 0) {
        this.personalRating.showError = true
      } else {
        this.personalRating.isEmpty = false;
        this.personalRating.showError = false;
        localStorage.setItem("@gas-nearby:personalRating", JSON.stringify(this.personalRating));
      }
    }
  }
};
</script>

<style scoped>
.single-location {
  padding: 20px;
}

.error {
  font-size: 12px;
  color: red;
}

.place-name {
  display: flex;
  align-items: center;
}

.place-name .place-icon {
  width: 30px;
  margin-right: 10px;
}

.back-button {
  display: flex;
  align-items: center;
  padding: 4px 12px;
  margin-bottom: 2rem;
  background: transparent;
  border: 1px solid #FF5F5F;
  color: #FF5F5F;
}

.back-button svg {
  width: 30px;
}

.back-button span {
  line-height: 19px;
  font-weight: 600;
  text-transform: uppercase;
}

.form {
  margin-top: 20px;
}

.form .input-title, .form .input-rating, .form .textarea-comment {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}

.form input, .form textarea {
  color: #616161;
  background-color: #EAEAEA;
  outline: none;
}

.form .send-rating, .edit-rating {
  background-color: #FF5F5F;
  color: #FFF;
  font-weight: 600;
  padding: 8px 24px;
  margin-top: 12px;
}

.personal-rating {
  margin-top: 30px;
}

.personal-rating .rating-title {
  margin-top: 20px;
}

</style>
