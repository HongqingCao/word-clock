<template>
  <ul :style="{ transform: `rotate(${rotates * -6}deg)` }">
    <li
      v-for="(item, index) in minuteList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "minute",
  props: ["minute"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    minuteList: {
      get() {
        return this.$t("minute");
      }
    }
  },
  watch: {
    minute(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  z-index: 8;
  @for $i from 1 through 60 {
    li:nth-child(#{$i}) {
      transform: rotate(#{$i * 6deg}) translateX(320px);
    }
  }
}
</style>
