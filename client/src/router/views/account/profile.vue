<template>
<Layout>

<!--    <div class="profile-box profile-login">-->
<!--      <div class="row">-->
<!--        <div class="col-md-3">-->
<!--          <div class="">-->
<!--            <p class="dp-text">Avatar</p>-->
<!--            <img class="img img-fluid" src="../../../assets/images/users/mahabub.jpg" alt="IMG" />-->
<!--            <span type="button" class="dp-btn">Upload</span>-->
<!--            <span type="button" class="dp-btn">Remove</span>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-md-5">-->
<!--          <div class="col-md-6">-->
<!--          <label>Name : </label>-->
<!--          <input-->
<!--              type="text"-->
<!--              v-model="name"-->
<!--              name="name"-->
<!--              placeholder="Name"-->
<!--              required-->
<!--          />-->

<!--          <label>Password : </label>-->
<!--          <input-->
<!--              type="text"-->
<!--              v-model="password"-->
<!--              name="password"-->
<!--              placeholder="Password"-->
<!--              required-->
<!--          />-->

<!--          <label>Designation : </label>-->
<!--          <input-->
<!--              type="text"-->
<!--              v-model="designation"-->
<!--              name="designation"-->
<!--              placeholder="Designation"-->
<!--              required-->
<!--          />-->

<!--          <label>Address : </label>-->
<!--          <input-->
<!--              type="text"-->
<!--              v-model="address"-->
<!--              name="address"-->
<!--              placeholder="Address"-->
<!--              required-->
<!--          />-->

<!--        </div>-->

<!--        <div class="col-md-6">-->
<!--          <label>Email id : </label>-->
<!--          <input-->
<!--              type="email"-->
<!--              v-model="email"-->
<!--              name="email"-->
<!--              placeholder="Email id"-->
<!--              required-->
<!--          />-->

<!--          <label>Phone Number : </label>-->
<!--          <input-->
<!--              type="number"-->
<!--              v-model="number"-->
<!--              name="number"-->
<!--              placeholder="Phone Number"-->
<!--              required-->
<!--          />-->

<!--          <label>Department : </label>-->
<!--          <input-->
<!--              type="text"-->
<!--              v-model="department"-->
<!--              name="department"-->
<!--              placeholder="Department"-->
<!--              required-->
<!--          />-->

<!--          <label>Educational Background : </label>-->
<!--          <input-->
<!--              type="text"-->
<!--              v-model="degree"-->
<!--              name="education"-->
<!--              placeholder="Educational Background"-->
<!--          />-->

<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-md-4">-->

<!--        <label>Work Experience (if have) : </label>-->
<!--        <input-->
<!--            type="text"-->
<!--            v-model="experience"-->
<!--            name="experience"-->
<!--            placeholder="Professional Experience (if have)"-->
<!--        />-->

<!--        <label>Personal Website (if have) : </label>-->
<!--        <input-->
<!--            type="text"-->
<!--            v-model="website"-->
<!--            name="website"-->
<!--            placeholder="Personal Website (if have)"-->
<!--        />-->
<!--      </div>-->
<!--      </div>-->

<!--      <div class="row">-->
<!--        <div class="col-12">-->
<!--          <div class="input_field">-->
<!--            <label class="description"> Description : </label>-->
<!--            <textarea-->
<!--                class="textarea"-->
<!--                v-model="details"-->
<!--                placeholder="About me"-->
<!--            ></textarea>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="profile-btn">-->
<!--        <button class="btn btn-dark ">Cancel</button>-->
<!--        <button type="submit" @click="update_profile" class="btn btn-primary ">-->
<!--          Save Change-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->

  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-lg-3 col-md-12 border-right">

        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
         <div class="pic-upld">
           <span type="button" class="dp-btn">Upload</span>
           <span type="button" class="dp-btn">Remove</span>
         </div>
          <img class="rounded-circle mt-2" src="../../../assets/images/users/mahabub.jpg" alt="">
          <span class="font-weight-bold">Mahabub Alam</span>
          <span class="text-black-50">ma.nahid960@gmail.com</span>
          <span> </span>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value="" v-model="name"></div>
            <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname" v-model="surname"></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value="" v-model="number"></div>
            <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value="" v-model="address"></div>
            <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" v-model="email"></div>
            <div class="col-md-12"><label class="labels">Age</label><input type="number" class="form-control" placeholder="enter age" value="" v-model="age"></div>
            <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value="" v-model="degree"></div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
          </div>
          <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="update_profile">Save Profile</button></div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
          <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" v-model="experience"></div> <br>
          <div class="col-md-12"><label class="labels">Designation</label><input type="text" class="form-control" placeholder="Designation" value="" v-model="designation"></div>
          <div class="col-md-12"><label class="labels">Website</label><input type="text" class="form-control" placeholder="Website" value="" v-model="website"></div>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>

</Layout>
</template>

<script>

import Layout from "../../layouts/main";
import appConfig from "@/app.config";

export default {
  page: {
    title: "Profile",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      number: "",
      designation: "",
      department: "",
      address: "",
      details: "",
      degree: "",
      experience: "",
      website: "",
      age:"",
    };
  },
  methods: {
    // update_profile() {
    //   console.log(
    //       this.name +
    //       this.email +
    //       this.number +
    //       this.designation +
    //       this.department +
    //       this.address +
    //       this.details +
    //       this.degree +
    //       this.experience +
    //       this.website +
    //       this.age
    //   );
  //   },
  },
};
</script>

<style lang="scss" scoped>

body {
  background: rgb(99, 39, 120)
}

.form-control:focus {
  box-shadow: none;
  border-color: #BA68C8
}

.profile-button {
  background: rgb(99, 39, 120);
  box-shadow: none;
  border: none
}

.profile-button:hover {
  background: #682773
}

.profile-button:focus {
  background: #682773;
  box-shadow: none
}

.profile-button:active {
  background: #682773;
  box-shadow: none
}

.back:hover {
  color: #682773;
  cursor: pointer
}

.labels {
  font-size: 11px
}

.add-experience:hover {
  background: #BA68C8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #BA68C8
}
.pic-upld{
  display: flex;
}
.dp-btn {
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 5px;
}
.dp-btn:hover {
  color: #3b3a3a;
  box-shadow: 2px 2px 2px #3b3a3a;
}

///* box */
//.profile-head {
//  margin: 30px 0 0 0;
//}
//.profile-box {
//  box-sizing: border-box;
//  max-width: 60% !important;
//  border-radius: 5px;
//  background-color: white;
//  overflow: hidden;
//  margin: 10px auto;
//  border: none;
//  padding: 20px;
//}
//
//img {
//  box-sizing: border-box;
//  width: 75px;
//  border-radius: 50%;
//  border: 5px solid white;
//  padding: 3px;
//  margin-left: 2%;
//  margin-bottom: 20px;
//}
//.dp-text {
//  margin-left: 3%;
//  margin-bottom: 0px !important;
//}
//.dp-btn:first-child {
//  color: #4158d0;
//}
//.dp-btn:hover {
//  color: #3b3a3a;
//  box-shadow: 2px 2px 2px #3b3a3a;
//}
//label {
//  margin-left: 5%;
//  margin-bottom: 10px;
//}
//.description {
//  margin-left: 2.5%;
//  margin-bottom: 10px;
//}
//
//input[type="text"],
//input[type="email"],
//input[type="number"],
//input[type="password"] {
//  display: block;
//  box-sizing: border-box;
//  background: #f3f5f7;
//  color: black;
//  padding: 10px;
//  width: 90%;
//  height: 32px;
//  border: none;
//  //border: 1px solid #f3f5f7;
//  border-radius: 3px;
//  /* font-family: "Robot",sans-serif; */
//  font-weight: 400;
//  font-size: 15px;
//  transition: 0.2s ease;
//  margin: 0 auto 20px;
//}
//
//.input_field .textarea,
//input[type="text"]:focus,
//input[type="email"]:focus,
//input[type="number"]:focus,
//input[type="password"]:focus {
//  //border: 2px solid #f3f5f7;
//  border-radius: 5px;
//  font-size: 15px;
//  transition: 0.2s ease;
//  outline: none;
//}
//
//.input_field .textarea {
//  resize: none;
//  height: 125px;
//  display: block;
//  box-sizing: border-box;
//  background: #f3f5f7;
//  color: black;
//  padding: 10px;
//  width: 95%;
//  border-radius: 3px;
//  border: 1px solid #f3f5f7;
//  font-weight: 400;
//  font-size: 15px;
//  transition: 0.2s ease;
//  margin: 0 auto 20px;
//}
//.profile-btn {
//  display: flex;
//  justify-content: space-around;
//}
//button {
//  border: 1px solid black;
//  color: white;
//  width: 300px;
//  border-radius: 5px;
//  margin: 0px;
//  transition: all 0.3s;
//  cursor: pointer;
//}
//button:hover {
//  transform: scale(1.1);
//  transition: 0.3s;
//}
//button:focus {
//  outline: 0 !important;
//  box-shadow: none !important;
//}
//
//@media (min-width: 992px) and (max-width: 1199.98px) {
//  button {
//    width: 250px;
//  }
//}
//
//@media (min-width: 768px) and (max-width: 991.98px) {
//  //.profile-box {
//  //  max-width: 100%;
//  //  margin: 0px;
//  //  padding: 20px 0;
//  //}
//}
//
//@media (min-width: 576px) and (max-width: 767.98px) {
//  //.profile-box {
//  //  max-width: 100%;
//  //  height: auto;
//  //  margin: auto;
//  //  padding: inherit;
//  //}
//  //.input_field .textarea {
//  //  width: 90%;
//  //}
//  .profile-btn {
//    flex-direction: column;
//    text-align: center;
//  }
//}
//
//@media (max-width: 575.98px) {
//  //.profile-box {
//  //  max-width: 100%;
//  //  margin: 0px;
//  //  padding: 10px 0;
//  //}
//  //.input_field .textarea {
//  //  width: 90%;
//  //}
//  .profile-btn {
//    flex-direction: column;
//    text-align: center;
//    margin-left: 50%;
//    transform: translateX(-50%);
//  }
//  button {
//    width: 200px !important;
//    margin-bottom: 10px;
//  }
//}
</style>
