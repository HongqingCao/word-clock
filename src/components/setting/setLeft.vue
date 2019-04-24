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
  },
  data() {
    return {
      marginStatus: true
    };
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.language;
      },
      set(lang) {
        this.$i18n.locale = lang;
        this.$store.dispatch("setLanguage", lang);
      }
    },
    langList: {
      get() {
        return this.$t("settingData.lang.list");
      }
    }
  }
};
</script>
