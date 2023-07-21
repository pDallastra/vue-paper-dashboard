<template>
  <div class="sign-view">
    <div class="sing-view__img">
      <img src="@/assets/img/login/people.svg" alt="People" class="sign-view__people-img" />
    </div>
    <div class="divisor">
      <hr>
    </div>
    <div class="sign-view__login">
      <div class="sign-view__login-wrapper">
        <img src="@/assets/img/login/packing-logo.svg" alt="Outpacking Logo">
        <div class="sign-view__login-title">Olá, acesse sua conta.</div>
        <BaseInput 
          v-model="email"
          label="Login"
          type="email"
        />

        <BaseInput 
          v-model="password"
          label="Senha"
          type="password"
        />

        <div class="sign-view__forgot">
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button
          @click="onSubmit"
        >ENTRAR</button>
        <div class="sign-view__help-text">Ainda não tem uma conta? <a>Entre em contato com nossa equipe.</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import { mapActions } from 'vuex';

export default {
  name: 'SignView',

  components: {
    BaseInput
  },

  data: () => ({
    email: '',
    password: ''
  }),

  async mounted() {
    console.log('test1')
    let initProducts = await this.getProducts();

    console.log('test6')


    if (initProducts) {
      console.log('NO WAY')
      // this.$router.push({name: 'dashboard'})
    }
  },

  computed: {
    isAuthorized() {

    }
  },

  methods: {
    ...mapActions('auth', ['login']),
    ...mapActions('product', ['getProducts']),

    async onSubmit() {
      let login = await this.login({email: this.email, password: this.password});
      if (login.success) {
        this.$router.push({path: 'dashboard/dashboard'})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sign-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  width: 100vw;
  background-color: #FFFFFF;

  .sing-view__img {
    display: flex;
    width: 50rem;
    padding-right: 4.5rem;
    padding-left: 1rem;

    img {
      width: 100%;
      height: 26rem;
    }
  }

  hr {
    border: none;
    border-left: 1px solid #d6d6d6;
    opacity: 1;
    height: 50rem;
    width: 1px; 
  }

  .sign-view__login {
    display: flex;
    align-content: center;
    height: 100%;
    width: 34rem;
    padding-left: 7rem;
    padding-right: 1rem;

    .sign-view__login-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        width: 99%;
      }

      .sign-view__login-title {
        font-size: 1.75rem;
        color: #4a4b4b;
        padding-top: 3.25rem;
        padding-bottom: 1rem;
      }
    }

    .sign-view__forgot {
      padding-bottom: 0.75rem;
      a {
        text-decoration: none;
        color: #acacac;
      }
    }

    button {
      height: 2.75rem;
      background-color: #c00020;
      opacity: 1;
      color: #ffffff;
      font-size: 0.75rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;


      &:hover {
        background-color: #ffffff;
        color: #c00020;
        border: 1px solid #c00020;
      }

      &:active {
        background-color: #c00020;
        color: #ffffff;
      }
    }

    .sign-view__help-text {
      font-size: 0.75rem;
      color:#B5B5B5;
      padding-top: 1.25rem;

      a {
        color: #c00020;
      }
    }

  }
}
</style>>