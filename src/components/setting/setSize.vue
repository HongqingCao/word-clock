<template>
  <div class="set-com">
    <div class="set-title">
      {{ $t("settingData.zoom.title") }} :<span>0px</span>
    </div>
    <slider></slider>
  </div>
</template>

<script>
import slider from "@/components/config/slider.vue";
export default {
  name: "SetTop",
  components: {
    slider
  }
};
</script>
