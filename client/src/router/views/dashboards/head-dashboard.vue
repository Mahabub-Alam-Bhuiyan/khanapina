<template>
  <Layout>
    <div class="headDash">
      <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div>
            <b-card title="Total Team" sub-title="0">
              <b-card-text>Task Count</b-card-text>
            </b-card>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <b-card title="Project Team" sub-title="0">
            <b-card-text>Task Count</b-card-text>
          </b-card>
        </div>
        <div class="col-md-3 col-sm-6">
          <b-card title="Task Progress" sub-title="0">
            <b-card-text>Task Count</b-card-text>
          </b-card>
        </div>
        <div class="col-md-3 col-sm-6">
          <b-card title="Complete Task" sub-title="0">
            <b-card-text>Task Count</b-card-text>
          </b-card>
        </div>
      </div>

      <!--        Chart cHart Area Start-->

      <div class="row">
        <div class="col-lg-8 col-md-6 col-sm-12">
          <h3 class="team-table-head"><b>Employee count by team</b></h3>
          <div class="bar-area">
            <BarChart2 />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <h3 class="team-table-head"><b>Project Servey</b></h3>
          <div class="pie-area">
            <div class="pie">
              <pie-chart
                  :legend="legend"
                  :data="chartData"
                  :options="chartOptions"
              ></pie-chart>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import BarChart2 from "../chart/Barchart2";
import PieChart from "../chart/PieChart";
export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    PieChart,
    BarChart2,
  },

  data: function data() {
    return {
      ishide:false,
      isfull:false,
      chartOptions: {
        hoverBorderWidth: 20
      },
      legend: {
        position: "top",
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Complete", "Progress"],
        datasets: [
          {
            label: "Data ",
            backgroundColor: ["#41B883", "#00D8FF"],
            data: [9, 3],
          },
        ],
      },

    };
  },

};
</script>

<style lang="scss" scoped>


@media (min-width:1000px) and (max-width: 1399px) {
  .pie[data-v-144a9a4f] {
    width: 250px !important;
    margin: 0 auto;
    height: 250px !important;
  }
  #doughnut-chart {
    width: 220px !important;
    height: 220px !important;
    margin: 0;
    padding: 0;
  }
}

</style>
