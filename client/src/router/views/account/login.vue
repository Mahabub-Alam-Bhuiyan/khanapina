<script>
import Layout from "../../layouts/auth";
import {
  authMethods,
  authFackMethods,
  notificationMethods
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, email } from "vuelidate/lib/validators";

/**
 * Login component
 */
export default {
  page: {
    title: "Login",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      app_name: process.env.VUE_APP_NAME,
      app_creator: process.env.VUE_APP_CREATOR,
      email: "admin@themesbrand.com",
      password: "123456",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false
    };
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    }
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToLogIn = true;
          // Reset the authError if it existed.
          this.authError = null;
          return (
            this.logIn({
              email: this.email,
              password: this.password
            })
              // eslint-disable-next-line no-unused-vars
              .then(token => {
                this.tryingToLogIn = false;
                this.isAuthError = false;
                // Redirect to the originally requested page, or to the home page
                this.$router.push(
                  this.$route.query.redirectFrom || { name: "default" }
                );
              })
              .catch(error => {
                this.tryingToLogIn = false;
                this.authError = error ? error : "";
                this.isAuthError = true;
              })
          );
        } else {
          const { email, password } = this;
          if (email && password) {
            this.login({ email, password });
          }
        }
      }
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(process.env.VUE_APP_NAME)
    this.app_name = process.env.VUE_APP_NAME
    this.app_creator = process.env.VUE_APP_CREATOR
  }
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Sign in to continue to <span class="font-weight-bold">{{ app_name }}</span></p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div>
              <router-link tag="a" to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title avatar-title-custom rounded-circle bg-light">
                    <img src="../../../assets/images/task-manage/logo.png" alt height="34" />
                  </span>
                </div>
              </router-link>
            </div>
            <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{authError}}</b-alert>

            <div
              v-if="notification.message"
              :class="'alert ' + notification.type"
            >{{notification.message}}</div>

            <b-form class="p-2" @submit.prevent="tryToLogIn">
              <b-form-group id="input-group-1" label="Email" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="text"
                  placeholder="Enter email"
                  :class="{ 'is-invalid': submitted && $v.email.$error }"
                ></b-form-input>
                <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                  <span v-if="!$v.email.required">Email is required.</span>
                  <span v-if="!$v.email.email">Please enter valid email.</span>
                </div>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                  :class="{ 'is-invalid': submitted && $v.password.$error }"
                ></b-form-input>
                <div
                  v-if="submitted && !$v.password.required"
                  class="invalid-feedback"
                >Password is required.</div>
              </b-form-group>
              <div class="custom-control custom-checkbox">
                <input id="customControlInline" type="checkbox" class="custom-control-input" />
                <label class="custom-control-label" for="customControlInline">Remember me</label>
              </div>
              <div class="mt-3">
                <b-button type="submit" variant="primary" class="btn-block">Log In</b-button>
              </div>
<!--              <div class="mt-4 text-center">-->
<!--                <h5 class="font-size-14 mb-3">Sign in with</h5>-->

<!--                <ul class="list-inline">-->
<!--                  <li class="list-inline-item">-->
<!--                    <a-->
<!--                      href="javascript: void(0);"-->
<!--                      class="social-list-item bg-primary text-white border-primary"-->
<!--                    >-->
<!--                      <i class="mdi mdi-facebook"></i>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                  <li class="list-inline-item">-->
<!--                    <a-->
<!--                      href="javascript: void(0);"-->
<!--                      class="social-list-item bg-info text-white border-info"-->
<!--                    >-->
<!--                      <i class="mdi mdi-twitter"></i>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                  <li class="list-inline-item">-->
<!--                    <a-->
<!--                      href="javascript: void(0);"-->
<!--                      class="social-list-item bg-danger text-white border-danger"-->
<!--                    >-->
<!--                      <i class="mdi mdi-google"></i>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
              <div class="mt-4 text-center">
                <router-link tag="a" to="/forgot-password" class="text-muted">
                  <i class="mdi mdi-lock mr-1"></i> Forgot your password?
                </router-link>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>
            Don't have an account ?
            <router-link tag="a" to="/register" class="font-weight-medium text-primary">Signup now</router-link>
          </p>
          <p>
            © {{new Date().getFullYear()}} {{ app_name }}. Crafted with
            <i class="mdi mdi-heart text-danger"></i> by {{app_creator}}
          </p>
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss">
  .avatar-title-custom{
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid rgba(85, 110, 230, .25);
      padding: 3px;
      background: #fff;
    }
  }
</style>
