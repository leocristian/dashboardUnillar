<template>
  <div>
    <div class="loginContainer">
      <h4 class="title">Faça login com sua conta UniBoard</h4>
      <input
        class="username"
        type="text"
        placeholder="Nome de usuário"
        v-model="userLogged.username"
      />
      <br />
      <input
        class="password"
        type="password"
        placeholder="Senha"
        v-model="userLogged.password"
      />
      <br />
      <MainButton msg="Acessar meu dashboard" v-on:click="login" />
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
      userLogged: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      if (this.userLogged.username == "" || this.userLogged.password == "") {
        // this.$notify({ type: "error", text: "Preencha todos os campos!" });
        alert("preencha os campos!")
      } else {
        console.log(this.userLogged);
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
  margin-right: 150px;
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