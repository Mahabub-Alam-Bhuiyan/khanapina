<template>
  <Layout>
    <div class="container">
      <div class="project-div">
        <div>
          <b-button v-b-modal.modal-project class="create-team">Create Task</b-button>
          <!--Project modal-->
          <div class="modal-team">
            <b-modal id="modal-project" size="lg" title="New project" hide-footer>
              <b-form @submit.prevent="newProject">
                <b-form-group id="form-group" class="form-group" label="Task Name">
                  <b-form-input
                    id="form-group"
                    v-model="codo.project"
                    placeholder="Task Name"
                    class="from-input"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="form-group" class="form-group" label="Assign By">
                  <b-form-input
                    id="form-group"
                    v-model="codo.project_leader"
                    placeholder="Assign By"
                    class="from-input"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="form-group" class="form-group" label="Date">
                  <section>
                    <date-picker
                      class="daterange"
                      v-model="codo.duDate"
                      type="date"
                      range
                      placeholder="Date range"
                    ></date-picker>
                  </section>
                </b-form-group>

                <b-form-group id="form-group" class="form-group" label="Category">
                  <select v-model="codo.role" class="form-input">
                    <option value="Web Designer">Web Designer</option>
                    <option value="Web Developer">Web Developer</option>
                  </select>
                  {{ codo.role }}
                </b-form-group>

                <b-form-group id="form-group" class="form-group" label="Comment">
                  <textarea
                    id="form-group"
                    v-model="codo.comment"
                    placeholder="Comment"
                    class="from-input"
                  ></textarea>
                </b-form-group>
                <button class="btn btn-success" type="submit">Submit</button>
              </b-form>
            </b-modal>
          </div>
        </div>

        <!--Modal end-->

        <h3 class="team-table-head">
          <b>Recent Task</b>
        </h3>

        <!--        <select v-model="role" class="form-input">-->
        <!--          <option value="designer">Web Designer</option>-->
        <!--          <option value="developer">Web Developer</option>-->
        <!--        </select>-->
        <!--        <button @click="roleshow"> roleshow </button>-->

        <div class="task-mention">
          <table style="width: 100%">
            <tr>
              <th>Task Name</th>
              <th>Assign By</th>
              <th>Task Time</th>
              <th>Task Category</th>
              <th>comment</th>
            </tr>
            <tr v-for="(nproject, index) in projects" :key="index">
              <td style="width: 40%">{{ nproject.project }}</td>
              <!--            <td> <img class="img img-fluid assigne-img" src="../../assets/demo.png" alt="IMG"><img class="img img-fluid assigne-img" src="../../assets/demo.png" alt="IMG"> </td>-->
              <td>{{ nproject.project_leader }}</td>
              <td>
                <span class="datestyle" v-for="date in nproject.duDate" :key="date">
                  {{
                    daterange(date)
                  }}
                </span>
              </td>
              <td>{{ nproject.role }}</td>
              <td>
                <div>
                  <b-button class="btn btn-info" v-b-modal.modal-1>Comment</b-button>

                  <b-modal id="modal-1" title="Task Requirment" hide-footer>
                    <p class="my-4">{{ nproject.comment }}</p>
                  </b-modal>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div class="no-task" v-if="no_project">
          <p>You Have no Task right Now</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import moment from "moment";


export default {
  page: {
    title: "Create Task",
    meta: [{ name: "createTask", content: appConfig.description }],
  },
  components: {
    Layout
  },
  data() {
    return {
      no_project: true,
      // green: true,
      // red: true,
      // yellow: true,
      // green2: true,
      // red2: true,
      // yellow2: true,
      // green3: true,
      // red3: true,
      // yellow3: true,
      // normal: true,
      // normal2: true,
      // normal3: true,
      codo: {
        project: " ",
        project_leader: "",
        duDate: "",
        comment: "",
        role: "",

      },
      projects: [],
    }
  },
  methods: {
    // roleshow(){
    //   this.console("Role : " + this.role)
    // },
    newProject() {
      // eslint-disable-next-line no-console
      console.log(this.codo.role)
      this.sampleproject = Object.assign({}, this.codo);
      this.codo.project = "";
      this.codo.project_leader = "";
      this.codo.duDate = "";
      this.codo.comment = "";
      this.codo.role = "";
      this.projects.push(this.sampleproject);
      this.no_project = false;

    },
    daterange(date) {
      return moment(date).format("ll");
    },

  },

};
</script>

<style lang="scss" scoped>
</style>
