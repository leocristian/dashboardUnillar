<template>
  <div class="home">
    
    <div class="landing">
      <h2 class="title">ORGANIZE OS DADOS DA SUA EMPRESA COM O <p id="name">UNIBOARD</p></h2>
      <p>
        O UniBoard é um plataforma de gerenciamento e organizações dos dados da sua empresa onde,
        utilizando atalhos e gráficos intuitivos você poderá ter uma visualização clara sobre suas informações.
      </p>
      <router-link to="/signin"> <MainButton msg="Acessar meu dashboard" /> </router-link>
      <router-link class="demoButton" to="/demo"> <MainButton msg="Demonstração" bgColor="#C7BD00" /> </router-link>
    </div>
    <LineCenter />
    <img src="../../assets/Business_PNG.png" alt="" />
  </div>
</template>

<script>
import MainButton from "../../components/button/MainButton.vue";
import LineCenter from "../../components/LineCenter.vue"

export default {
  name: "HomePage",
  components: {
    MainButton,
    LineCenter
  },
};

</script>

<style scoped>

.home {
  display: flex;
  align-self: center;
  justify-content: center;
}
img {
  width: 550px;
  margin-left: 100px;
  margin-top: 30px;
}
.landing {
  text-align: left;
  margin: auto;
  width: 600px;
}
.landing .title #name {
  margin: 0px;
  color: #000099;
  margin-bottom: 20px;

}
.demoButton {
  margin-left: 30px;
}

.landing p {
  margin: 0 40px 40px 0;
}
.line-center {
  height: 500px;/*Altura da linha*/
  border-left: 2px solid;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
  opacity: 0.2;
}
</style>