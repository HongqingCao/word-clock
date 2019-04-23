<template>
  <ul :style="{ transform: `rotate(${rotates * -30}deg)` }">
    <li
      v-for="(item, index) in monthList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "month",
  props: ["month"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    monthList: {
      get() {
        return this.$t("month");
      }
    }
  },
  watch: {
    month(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  z-index: 3;
  @for $i from 1 through 12 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 30deg}) translateX(60px);
    }
  }
}
</style>
