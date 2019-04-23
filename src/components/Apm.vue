<template>
  <ul :style="{ transform: `rotate(${rotates * -30}deg)` }">
    <li
      v-for="(item, index) in apmList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "apm",
  props: ["apm"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    apmList: {
      get() {
        return this.$t("apm");
      }
    }
  },
  watch: {
    apm(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  z-index: 6;
  @for $i from 1 through 2 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 30deg}) translateX(230px);
    }
  }
}
</style>
