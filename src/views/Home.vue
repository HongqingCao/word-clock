<template>
  <div class="home">
    <Second :second="second" />
    <Minute :minute="minute" />
    <Hour :hour="hour" />
    <Apm :apm="apm" />
    <Week :week="week" />
    <Day :day="day" />
    <Month :month="month" />
    <Setting />
  </div>
</template>

<script>
import Second from "@/components/Second.vue";
import Minute from "@/components/Minute.vue";
import Hour from "@/components/Hour.vue";
import Apm from "@/components/Apm.vue";
import Week from "@/components/Week.vue";
import Day from "@/components/Day.vue";
import Month from "@/components/Month.vue";
import Setting from "@/components/setting";

export default {
  name: "home",
  components: {
    Second,
    Minute,
    Hour,
    Apm,
    Week,
    Day,
    Month,
    Setting
  },
  data() {
    return {
      second: "",
      minute: "",
      hour: "",
      apm: "",
      week: "",
      day: "",
      month: ""
    };
  },
  methods: {
    start() {
      setInterval(() => {
        let data = new Date();
        this.second = data.getSeconds();
        this.minute = data.getMinutes();
        this.hour = data.getHours();
        this.week = data.getDay();
        this.day = data.getDate();
        this.month = data.getMonth() + 1;
        if (this.hour > 12) {
          this.apm = 2;
        } else {
          this.apm = 1;
        }
      }, 1000);
    }
  },
  created() {
    this.start();
  }
};
</script>
<style lang="scss">
.home {
  ul {
    list-style-type: none;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 60px;
    width: 60px;
    transition: 0.1s 0.1s ease-in;
    li {
      position: absolute;
      height: 60px;
      width: 60px;
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      &.hover {
        text-shadow: rgb(255, 255, 255) 0px 0px 10px,
          rgb(255, 255, 255) 0px 0px 20px, rgb(255, 0, 222) 0px 0px 30px,
          rgb(255, 0, 222) 0px 0px 40px, rgb(255, 0, 222) 0px 0px 70px,
          rgb(255, 0, 222) 0px 0px 80px, rgb(255, 0, 222) 0px 0px 100px;
      }
    }
  }
}
</style>
