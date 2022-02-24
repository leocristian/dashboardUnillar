<template>
  <div class="avatar-container">
    <div class="img-container">
      <img
        src="https://th.bing.com/th/id/R.c6b482f5e343903955234a1f60e9ecda?rik=x1nUtb%2b9F9qVIg&pid=ImgRaw&r=0"
        alt="avatar"
        @click="clickMethod"
      />
    </div>
      <div class="card-line" />
  </div>
</template>

<script>
export default {
  name: "AvatarComponent",
  methods: {
    clickMethod() {
      this.$router.push("/task-groups");
    },
  },
};
</script>

<style scoped>
.avatar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 50px;
}
.avatar-container .img-container {
  position: relative;
  height: 45px;
  width: 45px;
  border-radius: 100%;
  overflow: hidden;
}
.avatar-container .img-container img {
  position: absolute;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar-container .img-container img:hover {
  cursor: pointer;
}
.card-line {
	top: 50%;
	position: absolute;
  margin-left: 55px;
	height: 40px;/*Altura da linha*/
	border-left: 2px solid;/* Adiciona borda esquerda na div como ser fosse uma linha.*/
	opacity: 0.2;
	transform: translate(0, -50%)
}
</style>