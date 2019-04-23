<template>
  <div class="set-com">
    <div class="set-title">{{ $t("settingData.lang.title") }}</div>
    <div class="set-list">
      <label v-for="(item, index) in langList" :key="index"
        ><input type="radio" :value="item.value" v-model="lang" />{{
          item.name
        }}</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "setLang",
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
