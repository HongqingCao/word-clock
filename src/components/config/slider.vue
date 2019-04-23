<template>
  <div class="control">
    <input type="range" min="0" max="100" v-model="length" />
  </div>
</template>
<script>
export default {
  name: "slider",
  props: ["slider"],
  data() {
    return {
      length: 50
    };
  }
};
</script>

<style scoped lang="scss">
.control {
  margin: 10px 0 10px 0;
  width: 100%;
  height: 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
  input {
    width: 100%;
    margin: 0;
  }
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #ddd;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
    margin-top: -4px;
  }
}
</style>
