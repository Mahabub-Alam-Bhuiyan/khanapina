<template>
  <Layout>
  <div class="headDash">
    <div class="container">
<!-- dashboard -->
      <div class="dash">
          <div class="row">
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
          <div class="row">
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
                  <pie-chart :legend="legend" :data="chartData" :options="chartOptions"></pie-chart>
                </div>
              </div>
            </div>
          </div>
      </div>
<!-- team table-->
      <div class="row">

        <div class="col-md-12">

          <div class="accordion" role="tablist">
            <b-card no-body class="leader-team mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <!--        <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>-->

                <div class="row team-list" >

                  <div class="col-md-9">
                    <h3>Team Name : {{ teamname_1 }}</h3>
                    <p>Team Member : {{ teammember_1 }}</p>
                  </div>
                  <div class="col-md-3">
                    <p>Department : Web</p>
                    <button type="button"  block v-b-toggle.accordion-3 class="btn common-btn">View Details</button>
                  </div>
                </div>
              </b-card-header>


              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <div class="row">
                      <div class="col-md-9">  <h3>Team Name : {{ teamname_1 }}</h3></div>
                      <div class="col-md-3">Total Member : {{ teammember_1 }}</div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="col-md-6">Ishita khanom</div>
                      <div class="col-md-3">Employee</div>
                      <div class="col-md-3">
                        <div class="acc-btn">
                          <button type="button"  block v-b-toggle.accordion-4 class="btn common-btn">View Details</button>
                        </div>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-md-6">Masudur Rahamn</div>
                      <div class="col-md-3">Senior Officer</div>
                      <div class="col-md-3">
                        <div class="acc-btn">
                          <button type="button"  block v-b-toggle.accordion-4 class="btn common-btn">View Details</button>
                        </div>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-md-6">Parbin Sultana</div>
                      <div class="col-md-3">Jusnior Officer</div>
                      <div class="col-md-3">
                        <div class="acc-btn">
                          <button type="button"  block v-b-toggle.accordion-4 class="btn common-btn">View Details</button>
                        </div>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-md-6">Sadekur Rahman</div>
                      <div class="col-md-3">Employee</div>
                      <div class="col-md-3">
                        <div class="acc-btn">
                          <button type="button"  block v-b-toggle.accordion-4  class="btn common-btn">View Details</button>
                        </div>
                      </div>
                    </div>


                  </b-card-text>
                </b-card-body>
              </b-collapse>

              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="employee-profile">
                            <img class="img img-fluid " src="../../../assets/images/users/mahabub.jpg" alt="IMG">
                            <h6><b>Employee Name : </b> {{ employee }} </h6>
                          <h6><b>Employee Designation : </b> {{ designation }} </h6>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="check-board">
                          <div class="show-task">
                            <h3> Click here for show my task list </h3>
                            <button class="btn common-btn">Task List</button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>

        </div>

      </div>
<!-- attendance system  -->
        <div class=" attendence">
          <h3 class="team-table-head"><b>mark Attendance</b></h3>
          <button class="btn common-btn" @click="goTaskPage">Click here</button>
        </div>
    </div>
  </div>
  </Layout>
</template>
<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PieChart from "../chart/PieChart";
import BarChart from "../chart/BarChart";

export default {
  page: {
    title: "Lead dashboard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    BarChart,
    PieChart,
  },

  data: function data(){
    return{

      teammember_1: 10,
      teamname_1:'SSTack',
      employee: "Mahabub Alam",
      designation : "Senior Developer",
      chartOptions: {
        hoverBorderWidth: 20
      },
      legend: {
        position: 'top'
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

        ]
      }
    }
  },
  methods:{

    goTaskPage () {
      // eslint-disable-next-line no-console
      console.log('hello')
      // window.location.href = 'http://localhost:8080/task-list'
      // this.$router.push({path: '/task-list'});
    }
  }

}
</script>


<style lang="scss">


@media (max-width: 576px)  {
  .pie2{
    width: 240px;
    height: 240px;
  }

}

</style>
