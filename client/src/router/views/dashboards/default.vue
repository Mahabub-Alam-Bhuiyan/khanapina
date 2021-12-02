<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import BarChart from "../chart/BarChart";
import PieChart from "../chart/PieChart";



/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    BarChart,
    PieChart,

  },
  data() {
    return {
      title: "Dashboard First",
      items: [
        {
          text: "Dashboards",
          href: "/",
        },
      ],
      chartOptions: {
        hoverBorderWidth: 20,
      },
      legend: {
        position: "top",
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Complete", "Pending", "Overdue"],
        datasets: [
          {
            label: "Data ",
            backgroundColor: ["#41B883", "#00D8FF", "#E46651"],
            data: [4, 3, 2],
          },
        ],
      },
    };

  },
};
</script>

<template>
  <Layout>
    <div class="dashboard">
      <div class="container">
        <div class="row ">
          <div class="col-sm-3">
            <div>
              <b-card title="Total Task" sub-title="0">
                <b-card-text>Task Count</b-card-text>
              </b-card>
            </div>
          </div>
          <div class="col-sm-3">
            <b-card title="Complete Task" sub-title="0">
              <b-card-text>Task Count</b-card-text>
            </b-card>
          </div>
          <div class="col-sm-3">
            <b-card title="Pending Task" sub-title="0">
              <b-card-text>Task Count</b-card-text>
            </b-card>
          </div>
          <div class="col-sm-3">
            <b-card title="OverDue Task" sub-title="0">
              <b-card-text>Task Count</b-card-text>
            </b-card>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-8 col-md-6 col-sm-12">
            <h3 class="team-table-head"><b>Task Count</b></h3>
            <div class="bar-area">
              <div class="bar">
                <BarChart />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <h3 class="team-table-head"><b>Task Servey</b></h3>
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
      <div class="container">
        <div class=" attendance">
          <h3 class="team-table-head"><b>mark Attendance</b></h3>
            <button class="btn common-btn">Click here</button>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss">


</style>
