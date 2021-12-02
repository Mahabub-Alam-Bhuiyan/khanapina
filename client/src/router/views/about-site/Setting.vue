<template>
  <div class="py-3">
<!--    <div class="top-bar">-->
<!--      <li class="list-item" @click="scrollToSetting">Setting</li>-->
<!--      <li class="list-item" @click="scrollToElement">Privacy</li>-->
<!--      <li class="list-item" @click="scrollToTearms">Tearms & Conditions</li>-->
<!--    </div>-->
    <div class="container container-setting">
      <!--  Privacy section-->
      <section id="general" ref="scrollToSetting">
        <h2 class="head pb-2"><b>Notification</b></h2>
        <div class="notifi-btn">
          <p>You want to off Notification</p>
          <div
              id="dark-btn"
              @click="hover"
              v-bind:class="{ darkbtnon: isactive }"
          >
            <span></span>
          </div>
        </div>
      </section>

<!--      <section id="privacy" ref="scrollToMe">-->
<!--        <Privacy />-->
<!--      </section>-->

      <!--  Tearms & Conditins-->

<!--      <section id="tearms" ref="scrolltotearms">-->
<!--        <Tearms />-->
<!--      </section>-->
    </div>
  </div>
</template>

<script>


export default {
  name: "Setting",
  data() {
    return {
      isactive: false,
    };
  },
  components: {

  },
  mounted() {
    this.scrollToElement();
    this.scrollToTearms();
    this.scrollToSetting();
  },
  methods: {
    scrollToElement() {
      const el = this.$refs.scrollToMe;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
      // else{
      //   this.el = this.$refs.scrollToMe[0];
      // }
    },
    scrollToSetting() {
      const el = this.$refs.scrollToSetting;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
    },

    // scrollToTearms() {
    //   const el = this.$refs.scrolltotearms;
    //
    //   if (el  ) {
    //     // Use el.scrollIntoView() to instantly scroll to the element
    //     el.scrollIntoView({behavior: 'smooth'});
    //
    //     // else{
    //     //  this.el = this.$refs.scrolltotearms[0];
    //     // }
    //   }
    //
    // },
    scrollToTearms(to, from, savedPosition) {
      savedPosition = this.$refs.scrolltotearms;
      if (savedPosition) {
        return savedPosition.scrollIntoView({ behavior: "smooth" });
      } else {
        return this.$refs.scrolltotearms[0];
      }
    },
    hover() {
      this.isactive = !this.isactive;
    },
  },
};
</script>

<style lang="scss" scoped>


.top-bar{
  padding: 50px;
  position: fixed;
  z-index: 999;

}
.list-item{
  list-style: none;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  cursor: pointer;
}

.list-item:hover{
  background-color: black;
  color: white;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
}

#privacy p{
  word-break: break-all;
}
#privacy{
  margin-bottom: 50px;
}
.container-setting{
  border-left: 1px solid black;
  padding-left: 20px;
}

#general {
  height: 50vh;
}
.notifi-btn{
  position: relative;
}
#dark-btn{
  position: absolute;
  top: 0px;
  left: 20%;
  background-color: #ccc;
  width: 45px;
  border-radius: 15px;
  padding: 2px 3px;
  cursor: pointer;
  display: flex;
  transition: padding-left 0.5s, background 0.5s;
}
#dark-btn span{
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
}

.darkbtnon{
  padding-left: 23px !important;
  background-color: #0a0a0a !important;
  transition: 0.5s;
}


@media (min-width: 992px)and (max-width: 1200px) {
  .top-bar{
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    border-right: none;
    background-color: white;
    margin-top: -18px;
  }
  .list-item{
    list-style: none;
    height: 35px;
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
  #privacy{
    margin: 120px 0 30px 0;
  }
  #general{
    margin-top: 90px;
  }
  #dark-btn{
    left: 40%;
  }
}

@media (min-width:576px)and (max-width:991px){
  .top-bar{
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    border-right: none;
    background-color: white;
    margin-top: -18px;
  }
  .list-item{
    list-style: none;
    height: 35px;
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
  #privacy{
    margin: 120px 0 30px 0;
  }
  #dark-btn{
    left: 40%;
  }
}
@media  (max-width: 576px){
  .top-bar{
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    border-right: none;
    background-color: white;
    margin-top: -17px;
  }
  .list-item{
    list-style: none;
    height: 35px;
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
  #privacy{
    margin: 60px 0 30px 0;
  }
  #dark-btn{
    left: 80% ;
  }
  #general{
    margin-top: 50px;
  }
}

</style>
