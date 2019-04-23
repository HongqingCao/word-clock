import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./lang";
import "./assets/iconfont/iconfont.css";

Vue.config.productionTip = false;

Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
