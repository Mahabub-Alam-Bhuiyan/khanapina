<template>
  <layout>
    <div class="container">
      <div class="tasklist">
        <div class="task-mention">
          <table style="width: 100%">
            <tr>
              <th style="width: 40%" class="task-name">Task Name</th>
              <th>Assignee</th>
              <th>Due Date</th>
              <th>Task Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Comment</th>
            </tr>
          </table>
        </div>

        <hr />

        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-running
                class="task-status btn-info"
                >Running >
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-running"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>

                <div class="task-mention">
                                    <table style="width: 100%">
                                      <tr>
                                        <td style="width: 37%" class="task-name">
                                          {{ TaskName2 }}
                                        </td>
                                        <td>
                                          <img
                                            class="img img-fluid assign-img"
                                            src="../../../assets/images/task-manage/demo.png"
                                            alt="IMG"
                                          />
                                        </td>
                                        <td>Due Date</td>
                                        <td>{{ ProjectName }}</td>
                                        <td>
                                          <select
                                            @click="addpriority"
                                            name="Priority"
                                            id="priority"
                                            class="priority"
                                            v-bind:class="{
                                              green: this.green,
                                              yellow: this.yellow,
                                              red: this.red,
                                              normal: this.normal,
                                            }"
                                          >
                                            <option value="1">No Priority</option>
                                            <option value="2">High</option>
                                            <option value="3">Medium</option>
                                            <option value="4">Low</option>
                                          </select>
                                        </td>

                                        <td>
                                          <select
                                            @click="addstatus"
                                            name="status"
                                            id=""
                                            class="status"
                                            v-bind:class="{
                                              green2: this.green2,
                                              blue: this.blue,
                                              red2: this.red2,
                                              normal2: this.normal2,
                                            }"
                                          >
                                            <option value="1">No Status</option>
                                            <option value="2">Running</option>
                                            <option value="3">Complete</option>
                                            <option value="4">Over Due</option>
                                          </select>
                                        </td>
                                        <td>
                                          <b-button class="btn btn-info" v-b-modal.modal-1
                                            >Comment</b-button
                                          >
                                          <b-modal
                                            id="modal-1"
                                            title="Task Requirment"
                                            hide-footer
                                          >
                                            <p class="my-4">{{ ProjectName2 }}</p>
                                          </b-modal>
                                        </td>
                                        <td class="editbutton">
                                          <b-button class="btn btn-sm" v-b-modal.modal-update-running
                                            ><i class="fas fa-pencil-alt"></i
                                          ></b-button>

                                          <b-modal
                                            id="modal-update-running"
                                            class="modal-team"
                                            title="Update Task"
                                            hide-footer
                                          >
                                            <b-from @submit.prevent="UpdateTask">
                                              <b-form-group class="form-group" label="Task Name">
                                                <b-form-input
                                                  placeholder="New Task Name"
                                                  class="form-input"
                                                >
                                                </b-form-input>
                                              </b-form-group>

                                              <b-form-group class="form-group" label="Assign By">
                                                <b-form-input
                                                  id="form-group"
                                                  placeholder="Assign By"
                                                  class="from-input"
                                                  required
                                                >
                                                </b-form-input>
                                              </b-form-group>
                                              <b-form-group  class="form-group" label="Date">
                                                <section>
                                                  <date-picker
                                                      class="daterange"
                                                      v-model="duDate"
                                                      type="date"
                                                      range
                                                      placeholder="Date range"
                                                  ></date-picker>
                                                </section>
                                              </b-form-group>

                  <!--                            <b-form-group-->
                  <!--                              class="form-group"-->
                  <!--                              label="Task Category"-->
                  <!--                            >-->
                  <!--                              <b-form-input-->
                  <!--                                id="form-group"-->
                  <!--                                placeholder="add category"-->
                  <!--                                class="from-input"-->
                  <!--                              >-->
                  <!--                              </b-form-input>-->
                  <!--                            </b-form-group>-->
                                            </b-from>
                                          </b-modal>
                                        </td>
                                        <td class="deletebutton">
                                          <b-button class="btn btn-sm" @click="removeTask(index)"
                                            ><i class="far fa-trash-alt"></i
                                          ></b-button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="width: 37%" class="task-name">
                                          {{ TaskName2 }}
                                        </td>
                                        <td>
                                          <img
                                            class="img img-fluid assign-img"
                                            src="../../../assets/images/task-manage/demo.png"
                                            alt="IMG"
                                          />
                                        </td>
                                        <td>Due Date</td>
                                        <td>{{ ProjectName }}</td>
                                        <td>
                                          <select
                                            @click="addpriority"
                                            name="Priority"
                                            id="priority"
                                            class="priority"
                                            v-bind:class="{
                                              green: this.green,
                                              yellow: this.yellow,
                                              red: this.red,
                                              normal: this.normal,
                                            }"
                                          >
                                            <option value="1">No Priority</option>
                                            <option value="2">High</option>
                                            <option value="3">Medium</option>
                                            <option value="4">Low</option>
                                          </select>
                                        </td>

                                        <td>
                                          <select
                                            @click="addstatus"
                                            name="status"
                                            id=""
                                            class="status"
                                            v-bind:class="{
                                              green2: this.green2,
                                              blue: this.blue,
                                              red2: this.red2,
                                              normal2: this.normal2,
                                            }"
                                          >
                                            <option value="1">No Status</option>
                                            <option value="2">Running</option>
                                            <option value="3">Complete</option>
                                            <option value="4">Over Due</option>
                                          </select>
                                        </td>
                                        <td>
                                          <b-button class="btn btn-info" v-b-modal.modal-1
                                            >Comment</b-button
                                          >
                                          <b-modal
                                            id="modal-1"
                                            title="Task Requirment"
                                            hide-footer
                                          >
                                            <p class="my-4">{{ ProjectName2 }}</p>
                                          </b-modal>
                                        </td>
                                        <td class="editbutton">
                                          <b-button class="btn btn-sm" v-b-modal.modal-update-running
                                            ><i class="fas fa-pencil-alt"></i
                                          ></b-button>

                                          <b-modal
                                            id="modal-update-running"
                                            class="modal-team"
                                            title="Update Task"
                                            hide-footer
                                          >
                                            <b-from @submit.prevent="UpdateTask">
                                              <b-form-group class="form-group" label="Task Name">
                                                <b-form-input
                                                  placeholder="New Task Name"
                                                  class="form-input"
                                                >
                                                </b-form-input>
                                              </b-form-group>

                                              <b-form-group class="form-group" label="Assign By">
                                                <b-form-input
                                                  id="form-group"
                                                  placeholder="Assign By"
                                                  class="from-input"
                                                  required
                                                >
                                                </b-form-input>
                                              </b-form-group>
                                              <b-form-group  class="form-group" label="Date">
                                                <section>
                                                  <date-picker
                                                      class="daterange"
                                                      v-model="duDate"
                                                      type="date"
                                                      range
                                                      placeholder="Date range"
                                                  ></date-picker>
                                                </section>
                                              </b-form-group>

                  <!--                            <b-form-group-->
                  <!--                              class="form-group"-->
                  <!--                              label="Task Category"-->
                  <!--                            >-->
                  <!--                              <b-form-input-->
                  <!--                                id="form-group"-->
                  <!--                                placeholder="add category"-->
                  <!--                                class="from-input"-->
                  <!--                              >-->
                  <!--                              </b-form-input>-->
                  <!--                            </b-form-group>-->
                                            </b-from>
                                          </b-modal>
                                        </td>
                                        <td class="deletebutton">
                                          <b-button class="btn btn-sm" @click="removeTask(index)"
                                            ><i class="far fa-trash-alt"></i
                                          ></b-button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="width: 37%" class="task-name">
                                          {{ TaskName2 }}
                                        </td>
                                        <td>
                                          <img
                                            class="img img-fluid assign-img"
                                            src="../../../assets/images/task-manage/demo.png"
                                            alt="IMG"
                                          />
                                        </td>
                                        <td>Due Date</td>
                                        <td>{{ ProjectName }}</td>
                                        <td>
                                          <select
                                            @click="addpriority"
                                            name="Priority"
                                            id="priority"
                                            class="priority"
                                            v-bind:class="{
                                              green: this.green,
                                              yellow: this.yellow,
                                              red: this.red,
                                              normal: this.normal,
                                            }"
                                          >
                                            <option value="1">No Priority</option>
                                            <option value="2">High</option>
                                            <option value="3">Medium</option>
                                            <option value="4">Low</option>
                                          </select>
                                        </td>

                                        <td>
                                          <select
                                            @click="addstatus"
                                            name="status"
                                            id=""
                                            class="status"
                                            v-bind:class="{
                                              green2: this.green2,
                                              blue: this.blue,
                                              red2: this.red2,
                                              normal2: this.normal2,
                                            }"
                                          >
                                            <option value="1">No Status</option>
                                            <option value="2">Running</option>
                                            <option value="3">Complete</option>
                                            <option value="4">Over Due</option>
                                          </select>
                                        </td>
                                        <td>
                                          <b-button class="btn btn-info" v-b-modal.modal-1
                                            >Comment</b-button
                                          >
                                          <b-modal
                                            id="modal-1"
                                            title="Task Requirment"
                                            hide-footer
                                          >
                                            <p class="my-4">{{ ProjectName2 }}</p>
                                          </b-modal>
                                        </td>
                                        <td class="editbutton">
                                          <b-button class="btn btn-sm" v-b-modal.modal-update-running
                                            ><i class="fas fa-pencil-alt"></i
                                          ></b-button>

                                          <b-modal
                                            id="modal-update-running"
                                            class="modal-team"
                                            title="Update Task"
                                            hide-footer
                                          >
                                            <b-from @submit.prevent="UpdateTask">
                                              <b-form-group class="form-group" label="Task Name">
                                                <b-form-input
                                                  placeholder="New Task Name"
                                                  class="form-input"
                                                >
                                                </b-form-input>
                                              </b-form-group>

                                              <b-form-group class="form-group" label="Assign By">
                                                <b-form-input
                                                  id="form-group"
                                                  placeholder="Assign By"
                                                  class="from-input"
                                                  required
                                                >
                                                </b-form-input>
                                              </b-form-group>
                                              <b-form-group  class="form-group" label="Date">
                                                <section>
                                                  <date-picker
                                                      class="daterange"
                                                      v-model="duDate"
                                                      type="date"
                                                      range
                                                      placeholder="Date range"
                                                  ></date-picker>
                                                </section>
                                              </b-form-group>

                  <!--                            <b-form-group-->
                  <!--                              class="form-group"-->
                  <!--                              label="Task Category"-->
                  <!--                            >-->
                  <!--                              <b-form-input-->
                  <!--                                id="form-group"-->
                  <!--                                placeholder="add category"-->
                  <!--                                class="from-input"-->
                  <!--                              >-->
                  <!--                              </b-form-input>-->
                  <!--                            </b-form-group>-->
                                            </b-from>
                                          </b-modal>
                                        </td>
                                        <td class="deletebutton">
                                          <b-button class="btn btn-sm" @click="removeTask(index)"
                                            ><i class="far fa-trash-alt"></i
                                          ></b-button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="width: 37%" class="task-name">
                                          {{ TaskName2 }}
                                        </td>
                                        <td>
                                          <img
                                            class="img img-fluid assign-img"
                                            src="../../../assets/images/task-manage/demo.png"
                                            alt="IMG"
                                          />
                                        </td>
                                        <td>Due Date</td>
                                        <td>{{ ProjectName }}</td>
                                        <td>
                                          <select
                                            @click="addpriority"
                                            name="Priority"
                                            id="priority"
                                            class="priority"
                                            v-bind:class="{
                                              green: this.green,
                                              yellow: this.yellow,
                                              red: this.red,
                                              normal: this.normal,
                                            }"
                                          >
                                            <option value="1">No Priority</option>
                                            <option value="2">High</option>
                                            <option value="3">Medium</option>
                                            <option value="4">Low</option>
                                          </select>
                                        </td>

                                        <td>
                                          <select
                                            @click="addstatus"
                                            name="status"
                                            id=""
                                            class="status"
                                            v-bind:class="{
                                              green2: this.green2,
                                              blue: this.blue,
                                              red2: this.red2,
                                              normal2: this.normal2,
                                            }"
                                          >
                                            <option value="1">No Status</option>
                                            <option value="2">Running</option>
                                            <option value="3">Complete</option>
                                            <option value="4">Over Due</option>
                                          </select>
                                        </td>
                                        <td>
                                          <b-button class="btn btn-info" v-b-modal.modal-1
                                            >Comment</b-button
                                          >
                                          <b-modal
                                            id="modal-1"
                                            title="Task Requirment"
                                            hide-footer
                                          >
                                            <p class="my-4">{{ ProjectName2 }}</p>
                                          </b-modal>
                                        </td>
                                        <td class="editbutton">
                                          <b-button class="btn btn-sm" v-b-modal.modal-update-running
                                            ><i class="fas fa-pencil-alt"></i
                                          ></b-button>

                                          <b-modal
                                            id="modal-update-running"
                                            class="modal-team"
                                            title="Update Task"
                                            hide-footer
                                          >
                                            <b-from @submit.prevent="UpdateTask">
                                              <b-form-group class="form-group" label="Task Name">
                                                <b-form-input
                                                  placeholder="New Task Name"
                                                  class="form-input"
                                                >
                                                </b-form-input>
                                              </b-form-group>

                                              <b-form-group class="form-group" label="Assign By">
                                                <b-form-input
                                                  id="form-group"
                                                  placeholder="Assign By"
                                                  class="from-input"
                                                  required
                                                >
                                                </b-form-input>
                                              </b-form-group>
                                              <b-form-group  class="form-group" label="Date">
                                                <section>
                                                  <date-picker
                                                      class="daterange"
                                                      v-model="duDate"
                                                      type="date"
                                                      range
                                                      placeholder="Date range"
                                                  ></date-picker>
                                                </section>
                                              </b-form-group>

                  <!--                            <b-form-group-->
                  <!--                              class="form-group"-->
                  <!--                              label="Task Category"-->
                  <!--                            >-->
                  <!--                              <b-form-input-->
                  <!--                                id="form-group"-->
                  <!--                                placeholder="add category"-->
                  <!--                                class="from-input"-->
                  <!--                              >-->
                  <!--                              </b-form-input>-->
                  <!--                            </b-form-group>-->
                                            </b-from>
                                          </b-modal>
                                        </td>
                                        <td class="deletebutton">
                                          <b-button class="btn btn-sm" @click="removeTask(index)"
                                            ><i class="far fa-trash-alt"></i
                                          ></b-button>
                                        </td>
                                      </tr>
                                    </table>
                </div>
<!----------------------->
                <div>

                  <p>Current page: {{ currentPage }}</p>
                  <p>Per page: {{ perPage }}</p>
                  <v-pagination v-model="perPage"
                                :page-count="totalPages"
                                :classes="bootstrapPaginationClasses"
                                :labels="paginationAnchorTexts"
                                ></v-pagination>
                </div>
<!----------------------->

              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-overdue
                class="task-status btn-info"
                >Over Due ></b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-overdue"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <div class="task-mention">
                  <table style="width: 100%">
                    <tr>
                      <td style="width: 37%;" class="task-name">{{ TaskName2 }}</td>
                      <td>
                        <img
                          class="img img-fluid assign-img"
                          src="../../../assets/images/task-manage/demo.png"
                          alt="IMG"
                        />
                      </td>
                      <td>Due Date</td>
                      <td>{{ ProjectName }}</td>
                      <td>
                        <p style="background-color: red; color: #0a0a0a">
                          High
                        </p>
                      </td>
                      <td>
                        <p style="background-color: red; color: #0a0a0a">
                          Complete
                        </p>
                      </td>
                      <td>
                        <b-button class="btn btn-info" v-b-modal.modal-2
                          >Comment</b-button
                        >

                        <b-modal
                          id="modal-2"
                          title="Task Requirment"
                          hide-footer
                        >
                          <p class="my-4">{{ ProjectName }}</p>
                        </b-modal>
                      </td>
                      <td class="editbutton">
                        <b-button class="btn btn-sm" v-b-modal.modal-update-overdue
                        ><i class="fas fa-pencil-alt"></i
                        ></b-button>

                        <b-modal
                            id="modal-update-overdue"
                            class="modal-team"
                            title="Update Task"
                            hide-footer
                        >
                          <b-from @submit.prevent="UpdateTask">
                            <b-form-group class="form-group" label="Task Name">
                              <b-form-input
                                  placeholder="New Task Name"
                                  class="form-input"
                              >
                              </b-form-input>
                            </b-form-group>

                            <b-form-group class="form-group" label="Assign By">
                              <b-form-input
                                  id="form-group"
                                  placeholder="Assign By"
                                  class="from-input"
                                  required
                              >
                              </b-form-input>
                            </b-form-group>

                            <b-form-group
                                class="form-group"
                                label="Task Category"
                            >
                              <textarea
                                  id="form-group"
                                  placeholder="add category"
                                  class="from-input"
                              >
                              </textarea>
                            </b-form-group>
                          </b-from>
                        </b-modal>
                      </td>
<!--                      <td class="deletebutton">-->
<!--                        <b-button class="btn btn-sm" @click="removeTask(index)"-->
<!--                        ><i class="far fa-trash-alt"></i-->
<!--                        ></b-button>-->
<!--                      </td>-->
                    </tr>
                  </table>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-complete
                class="task-status btn-info"
                >Complete ></b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-complete"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <div class="task-mention">
                  <table style="width: 100%">
                    <tr>
                      <td style="width: 37%;" class="task-name">{{ TaskName }}</td>
                      <td>
                        <img
                          class="img img-fluid assign-img"
                          src="../../../assets/images/task-manage/demo.png"
                          alt="IMG"
                        />
                      </td>
                      <td>Due Date</td>
                      <td>{{ ProjectName }}</td>
                      <td>No Priority</td>
                      <td>
                        <p style="background-color: green; color: #0a0a0a">
                          Complete
                        </p>
                      </td>
                      <td>
                        <b-button class="btn btn-info" v-b-modal.modal-3
                          >Comment</b-button
                        >

                        <b-modal
                          id="modal-3"
                          title="Task Requirment"
                          hide-footer
                        >
                          <p class="my-4">{{ TaskName }}</p>
                        </b-modal>
                      </td>
                    </tr>

                  </table>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import vPagination from 'vue-plain-pagination'

export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    vPagination

  },
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      totalPages: 30,
      bootstrapPaginationClasses: {
        ul: 'pagination',
        li: 'page-item',
        liActive: 'active',
        liDisable: 'disabled',
        button: 'page-link'
      },
      paginationAnchorTexts: {
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last'
      },


      TaskName: "Create 3 landing page",
      TaskName2:
        " Complete SASS Tutorial & make a web site with SASS ",
      ProjectName: "Web Design",
      ProjectName2: "Graphics Design",
      green: false,
      red: false,
      yellow: false,
      normal: false,
      green2: false,
      red2: false,
      normal2: false,
      blue: false,
      tasklist: [],
      items: [],
      duDate: "",
    };
  },
  methods: {
    addpriority(e) {
      if (e.target.value == 2) {
        this.green = false;
        this.yellow = false;
        this.red = true;
        this.normal = false;
      } else if (e.target.value == 3) {
        this.yellow = true;
        this.green = false;
        this.red = false;
        this.normal = false;
      } else if (e.target.value == 4) {
        this.green = true;
        this.red = false;
        this.yellow = false;
        this.normal = false;
      } else if (e.target.value == 1) {
        this.normal = true;
      }
    },
    addstatus(e) {
      if (e.target.value == 2) {
        this.blue = true;
        this.green2 = false;
        this.red2 = false;
        this.normal2 = false;
      } else if (e.target.value == 3) {
        this.green2 = true;
        this.blue = false;
        this.red2 = false;
        this.normal2 = false;
      } else if (e.target.value == 4) {
        this.red2 = true;
        this.green2 = false;
        this.blue = false;
        this.normal2 = false;
      } else if (e.target.value == 1) {
        this.normal2 = true;
      }
    },
    removeTask(index) {
      alert(this.items.splice(index, 1));
    },
  },
};
</script>

<style lang="scss" scoped></style>
