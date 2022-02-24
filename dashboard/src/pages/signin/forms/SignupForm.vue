<template>
  <div>
    <div class="loginContainer">
      <h4 class="title">Cadastre-se para acessar a plataforma</h4>
      <input
        class="email"
        type="text"
        placeholder="E-mail"
        v-model="newUser.email"
      />
      <br />
      <input
        class="username"
        type="text"
        placeholder="Nome de usuário"
        v-model="newUser.username"
      />
      <br />
      <input
        class="password"
        type="password"
        placeholder="Senha"
        v-model="newUser.password"
      />
      <br />
      <MainButton msg="Cadastrar-se" v-on:click="signup" />
    </div>
  </div>
</template>

<script>
import MainButton from "../../../components/button/MainButton.vue";

export default {
  components: {
    MainButton
  },
  data() {
    return {
      newUser: {
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async signup() {
      if (this.newUser.username == "" || this.newUser.password == "") {
        // this.$notify({ type: "error", text: "Preencha todos os campos!" });
        alert("preencha os campos!")
      } else {
        console.log(this.newUser);
      }
    }
  }
}
</script>

<style scoped>
* {
  text-align: center;
}
.loginContainer {
  margin-top: 100px;
  text-align: center;
  margin-left: 150px;
}
.title {
  margin: 20px;
  font-weight: bold;
}
input {
  text-align: left;
  border-radius: 5px;
  margin: 10px;
  background-color: #e9e9e9;
  height: 30px;
  width: 200px;
  padding: 20px;
  outline: 0;
  border: 0 none;
}

</style>