<template>
<div class="selectdiv">
  <label>
      <select v-model="yearSelected">
          <option selected > Selecione o ano </option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
      </select>
  </label>
</div>
</template>

<script>
export default {
    name: 'YearSelection',
    data() {
        return {
            yearSelected: 'Selecione o ano',
        }
    }
}
</script>

<style lang="css" scoped>
.selectdiv {
    border-radius: 5px;
    position: relative;
  /*Don't really need this just for demo styling*/
    border: none;
  float: left;
  min-width: 200px;
  margin: 10px;
}

/* IE11 hide native button (thanks Matt!) */
select::-ms-expand {
    display: none;
}

.selectdiv:after {
  content: '<>';
  font: 17px "Consolas", monospace;
  color: #333;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  right: 11px;
  /*Adjust for position however you want*/
  
  top: 18px;
  padding: 0 0 2px;
  /*left line */
  
  position: absolute;
  pointer-events: none;
}

.selectdiv select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Add some styling */
  
  display: block;
  width: 100%;
  max-width: 200px;
  height: 50px;
  margin: 5px 0px;
  padding: 0px 4px;
  font-size: 16px;
  line-height: 1.75;
  color: #333;
  background-color: #34cce7;
  background-image: none;
  border: none;
  -ms-word-break: normal;
  word-break: normal;
}
</style>