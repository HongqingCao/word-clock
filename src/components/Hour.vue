<template>
  <ul :style="{ transform: `rotate(${rotates * -30}deg)` }">
    <li
      v-for="(item, index) in hourList"
      :key="index"
      :class="{ hover: index == rotates - 1 || index == rotates - 13 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "hour",
  props: ["hour"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    hourList: {
      get() {
        return this.$t("hour");
      }
    }
  },
  watch: {
    hour(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  z-index: 7;
  @for $i from 1 through 12 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 30deg}) translateX(270px);
    }
  }
}
</style>
