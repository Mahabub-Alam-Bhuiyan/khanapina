<template>
  <div class="taskoption">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-sm-12 col-md-6 left_card">
          <b-card
              title="Person Use"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2 card1 w-50"
          >
            <b-card-text>
              This option for your personal task management purpose
            </b-card-text>

            <b-button @click="personal" variant="primary"
            >Start Maintain</b-button
            >
          </b-card>
        </div>
        <div class="col-sm-6"></div>
      </div>
      <div class="row no-gutters ">
        <div class="col-sm-12 col-md-6 "></div>
        <div class="col-sm-12 col-md-6 right_card">
          <b-card
              title="Team Management"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2 card2 w-50"
          >
            <b-card-text>
              This option for Team / Company task management purpose
            </b-card-text>

            <b-button @click="company" variant="primary"
            >Start Maintain</b-button
            >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../routes";
import appConfig from "@/app.config";

export default {
  page: {
    title: "Task Divide",
    meta: [{ name: "description", content: appConfig.description }],
  },
  methods: {
    company: function () {
      router.push("/head-dashboard")
      // console.log("clicked");
    },
    personal() {
      router.push("/dashboard");
    },
  },
};
</script>

<style lang="scss" scoped>


row{
  margin: 0;
}
.taskoption{
  margin: 100px 0;
}
.left_card{
  padding-bottom: 10px;
  padding-right: 10px;
  border-right:double red ;
  border-bottom: double red;
}
.card1{
  margin-left: 100%;
  transform: translateX(-100%);
}
.card2{
  margin-top: 10px;
}
.right_card{
  padding-top: 10px;
  padding-left: 10px;
  border-left: double red ;
  border-top: double red;
}

</style>
