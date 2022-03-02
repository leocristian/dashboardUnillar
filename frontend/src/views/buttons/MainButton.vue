<template>
  <button :style="{'background-color': bgColor}">{{ msg }}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: { 
    msg: String, 
    bgColor: {
      type: String,
      default: "#0228b1"
    }
  },
};
</script>

<style scoped>
button {
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  border: 0 none;
  transition: 0.2s;
}
button:hover {
  background-color: #1d4eff;
  cursor: pointer;
}
</style>