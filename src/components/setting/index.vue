<template>
  <div class="set-warp">
    <div class="title">{{ $t("settingData.title") }}</div>
    <div class="about-me">
      <span>Powered By</span>
      <a href="https://github.com/HongqingCao">codercao</a>
    </div>
    <div class="btn-list">
      <span class="iconfont iconshezhi"></span>
    </div>
    <div class="btn-list2">
      <span class="iconfont iconquanping" @click="screenfullClick"></span>
      <span class="iconfont iconpcduan"></span>
    </div>
    <div class="content">
      <setLang />
      <setSize />
      <setLeft />
      <setTop />
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import setLang from "./setLang.vue";
import setLeft from "./setLeft.vue";
import setTop from "./setTop.vue";
import setSize from "./setSize.vue";
export default {
  name: "Set",
  props: ["week"],
  components: {
    setLang,
    setSize,
    setLeft,
    setTop
  },
  data() {
    return {
      isFullscreen: false
    };
  },
  methods: {
    screenfullClick() {
      if (!screenfull.enabled) {
        return false;
      }
      screenfull.toggle();
    }
  }
};
</script>

<style lang="scss">
.set-warp {
  z-index: 10;
  position: fixed;
  top: 20px;
  width: 250px;
  color: #fff;
  .title {
    padding-left: 20px;
    font-size: 36px;
    color: #fff;
    opacity: 0.9;
  }
  .about-me {
    padding-left: 20px;
    span {
      font-size: 12px;
      color: #666;
      opacity: 0.5;
    }
    a {
      font-size: 14px;
      color: #666;
      opacity: 0.6;
    }
  }
  .btn-list2 {
    position: absolute;
    padding: 10px 0px 10px 15px;
    left: 40px;
    opacity: 0.6;
    margin-bottom: 10px;
    span {
      font-size: 28px;
      margin-right: 10px;
    }
  }
  .btn-list {
    @extend .btn-list2;
    left: 0px;
    &:hover ~ .content {
      margin-left: 0px;
    }
  }
  .content {
    position: absolute;
    height: 300px;
    width: 250px;
    padding: 10px;
    margin-top: 40px;
    margin-left: -272px;
    transition: margin-left 0.9s;
    font-size: 14px;
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    border-radius: 20px;
    background-color: hsla(0, 0%, 100%, 0.1);
    .set-com {
      .set-title {
        opacity: 0.9;
        padding: 5px;
      }
      .set-list {
        margin: 15px 0 15px 0;
        label {
          padding: 5px;
          opacity: 0.7;
        }
        span {
          margin-left: 5px;
          opacity: 0.5;
        }
      }
    }
    &:hover {
      margin-left: 0px;
    }
    &:hover ~ .btn-list2 {
      right: 0px;
    }
  }
}
</style>
