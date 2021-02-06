<template>
  <section class="container-auth">
    <section class="image-gas-station">
      <div class="overlay"></div>
      <div class="overlay-image"></div>
      <section class="text">
        <h1>Os postos de gasolina mais próximos de você</h1>
        <p>
          <span class="store-name">GAS NEARBY</span> é o melhor lugar para você
          encontrar e salvar seus postos favoritos
        </p>
      </section>
    </section>
    <section class="auth-form">
      <Logo />

      <h2>{{ type === "signIn" ? "Entrar" : "Cadastrar" }}</h2>

      <form
        @submit.prevent="handleSignUp(signUp)"
        v-if="type === 'signUp'"
        class="form"
      >
        <section class="input-email">
          <label>E-mail</label>
          <input v-model="signUp.email" type="email" required />
        </section>
        <section class="input-password">
          <label>Senha</label>
          <input v-model="signUp.password" type="password" required />
        </section>

        <button class="auth-button">
          {{ type === "signIn" ? "Entrar" : "Registrar" }}
        </button>
      </form>

      <form
        @submit.prevent="handleSignIn(signIn)"
        v-if="type === 'signIn'"
        class="form"
      >
        <section class="input-email">
          <label>E-mail</label>
          <input v-model="signIn.email" type="email" required />
        </section>
        <section class="input-password">
          <label>Senha</label>
          <input v-model="signIn.password" type="password" required />
        </section>

        <button type="submit" class="auth-button">
          {{ type === "signIn" ? "Entrar" : "Registrar" }}
        </button>
      </form>

      <p v-if="type === 'signIn'">
        Não tem uma conta? <NuxtLink to="/cadastrar">Cadastrar</NuxtLink>
      </p>
      <p v-if="type === 'signUp'">
        Já tenho uma conta! <NuxtLink to="/">Fazer Login</NuxtLink>
      </p>
    </section>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    type: {
      required: true
    }
  },
  data() {
    return {
      signIn: {
        email: "",
        password: ""
      },
      signUp: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", {
      handleSignIn: "SIGN_IN",
      handleSignUp: "SIGN_UP"
    })
  }
};
</script>

<style scoped>
.container-auth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.container-auth .image-gas-station {
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-auth .text {
  padding: 18px;
}

.container-auth .text h1 {
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 20px;
}

.container-auth .text p {
  font-size: 1.25rem;
  line-height: 2rem;
}

.container-auth .text p .store-name {
  color: var(--primary);
  font-weight: 600;
}

.container-auth .overlay-image {
  background-image: url("../assets/gas-station.jpeg");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -2;
}

.overlay {
  background-color: #030517d9;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
}

.form {
  margin-top: 20px;
}

.form .input-email,
.form .input-password {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}

.form input {
  color: #616161;
  background-color: #eaeaea;
  outline: none;
}

.auth-form p {
  margin-top: 20px;
}

.auth-button {
  background-color: var(--primary);
  color: #fff;
  width: 100%;
  font-weight: 600;
  padding: 8px 24px;
  margin-top: 12px;
  transition: 0.7s;
}

.auth-button:hover {
  background-color: #9a0036;
}
</style>
