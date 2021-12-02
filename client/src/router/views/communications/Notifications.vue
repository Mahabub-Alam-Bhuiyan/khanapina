<template>
  <Layout>
    <div class="container">

      <div class="notification-top">
        <h3>Notifications</h3>
        <div class="notification-option">
          <a > New </a>
          <a > All </a>
        </div>
      </div>
<!--      <New_Notification v-bind:class="{ 'new-not-show': done }" />-->
<!--      <All_Notification v-bind:class="{ 'all-not-show': none }" />-->



      <b-jumbotron
          class="notification"
          v-for="(task, index) in todos"
          :key="index"
      >
        <div class="task-info">
          <h3>{{ task.TaskSub }}</h3>
          <h6>{{ task.TaskName }}</h6>
        </div>
        <hr />
        <div class="warning">
          <p>This Task Remaning 24 Hours Only</p>
          <b-button variant="success" href="#" @click="remove"> x </b-button>
        </div>
      </b-jumbotron>

      <br />
      <b-jumbotron
          class="notification"
          v-for="(task, index) in duetask"
          :key="index"
      >
        <div class="task-info">
          <h3>{{ task.TaskSub1 }}</h3>
          <h6>{{ task.TaskName1 }}</h6>
        </div>
        <hr />
        <div class="warning">
          <div>
            <b-button variant="danger" style="margin-right: 15px">
              Over Due
            </b-button>
            <b-text style="color: red; margin-right: 15px">
              {{ task.DueDate }}
            </b-text>

            <b-text> {{ today(date) }} </b-text>
          </div>
          <b-button variant="success" href="#" @click="removedue(index)">
            x
          </b-button>
        </div>
      </b-jumbotron>
      <br />
      <b-jumbotron
          class="notification"
          v-for="(task, index) in duetask"
          :key="index"
      >
        <div class="task-info">
          <h3>{{ task.TaskSub1 }}</h3>
          <h6>{{ task.TaskName1 }}</h6>
        </div>
        <hr />
        <div class="warning">
          <div>
            <b-button variant="danger" style="margin-right: 15px">
              Over Due
            </b-button>
            <b-text style="color: red; margin-right: 15px">
              {{ task.DueDate }}
            </b-text>
            <b-text> {{ today(date) }} </b-text>
          </div>
          <b-button variant="success" href="#" @click="removedue(index)">
            x
          </b-button>
        </div>
      </b-jumbotron>
      <br />
      <b-jumbotron
          class="notification"
          v-for="(task, index) in duetask"
          :key="index"
      >
        <div class="task-info">
          <h3>{{ task.TaskSub1 }}</h3>
          <h6>{{ task.TaskName1 }}</h6>
        </div>
        <hr />
        <div class="warning">
          <div>
            <b-button variant="danger" style="margin-right: 15px">
              Over Due
            </b-button>
            <b-text style="color: red; margin-right: 15px">
              {{ task.DueDate }}
            </b-text>
            <b-text> {{ today(date) }} </b-text>
          </div>
          <b-button variant="success" href="#" @click="removedue(index)">
            x
          </b-button>
        </div>
      </b-jumbotron>
    </div>
  </Layout>
</template>

<script>
import moment from "moment";
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,

  },

  data() {
    return {
      // done: false,
      // none: true,
      todos: [
        {
          TaskSub: "Web Design",
          TaskName: "Create 3 Landing Page with responsive",
        },
      ],
      duetask: [
        {
          TaskSub1: "Learning Update",
          TaskName1: "Complete Sass tutorial in 5 days and give feedback",
          DueDate: "22 Aug, 2021",
        },
      ],
    };
  },
  methods: {
    // DueDate(date){
    //   return '10 Aug, 2021'
    // },
    //   newShow() {
    //     this.done = false;
    //     this.none = true;
    //   },
    //   allShow() {
    //     this.none = false;
    //     this.done = true;
    //   },

      today(date) {
        return moment(date).format("lll");
      },
      remove(index) {
        if (confirm("Are You Sure? You Want to remove this Item")) {
          this.todos.splice(index, 1);
        }
      },
      removedue(index) {
        if (confirm("Are You Sure? You Want to remove this Item")) {
          this.duetask.splice(index, 1);
        }
      },
    },
};
</script>

<style lang="scss" scoped>

</style>
