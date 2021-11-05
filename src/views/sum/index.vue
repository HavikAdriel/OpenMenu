<template>
  <div class="container me-sum">
    <van-divider>点赞最多</van-divider>
    <div id="chart1"></div>
    <van-divider>分类占比</van-divider>
    <div id="chart2"></div>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import "./index.scss";
import Tabbar from "@/components/Tabbar.vue";
//import { getCurrentInstance } from "vue";
export default {
  components: {
    Tabbar,
  },
  methods: {
    getChart1() {
      let myChart = this.$echarts.init(document.getElementById("chart1"));
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    getChart2() {
      let myChart = this.$echarts.init(document.getElementById("chart2"));
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.getChart1();
    this.getChart2();
  },
  setup() {
    return {};
  },
};
</script>