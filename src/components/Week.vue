<template>
  <ul :style="{ transform: `rotate(${rotates * -51.428}deg)` }">
    <li
      v-for="(item, index) in weekList"
      :key="index"
      :class="{ hover: index == rotates - 1 || index == rotates + 6 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "week",
  props: ["week"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    weekList: {
      get() {
        return this.$t("week");
      }
    }
  },
  watch: {
    week(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  z-index: 5;
  @for $i from 1 through 7 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 51.428deg}) translateX(180px);
    }
  }
}
</style>
