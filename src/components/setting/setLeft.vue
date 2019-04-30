<template>
  <div class="set-com">
    <div class="set-title">
      {{ $t("settingData.level.title") }} :<span>0px</span>
    </div>
    <slider></slider>
  </div>
</template>

<script>
import slider from "@/components/config/slider.vue";
export default {
  name: "SetLeft",
  components: {
    slider
  }
};
</script>
