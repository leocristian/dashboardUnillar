<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseNavBar',
  props:{
    bgColor:{
      type:String,
      default:'#000099'
    }
  }
};
</script>

<style scoped>
.navbar {
  min-height: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: v-bind(bgColor);
  padding-left: 10px;
  padding-right: 10px;
  flex-wrap: wrap;
}
</style>