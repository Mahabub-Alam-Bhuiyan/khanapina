<template>
  <Layout>
  <div class="overflow-auto">

<!--    <p class="mt-3">Current Page: {{ currentPage }}</p>-->


    <h3> Today :  {{ currentDay() }} &nbsp; {{ currentDate() }}</h3> <br>
    <div style="display: flex"> <h3>Attendance Total : </h3> &nbsp; <button type="button" class="btn btn-primary" style="width: 100px"> {{ totalAttend() }} </button></div>
    <br>
    <br>
    <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
    ></b-table>

    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>
  </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import moment from "moment";
export default {
  page: {
    title: "Attendance",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
  },
  data() {
    return {
      perPage: 15,
      currentPage: 1,
      items: [
        { id: 1, employee_name: 'Mahabub', time_in: '9:00', time_out: '5:00',total_hours:' 8 Hours'  },
        { id: 2, employee_name: 'Shimanto', time_in: '9:00' , time_out: '5:00',total_hours:' 8 Hours'},
        { id: 3, employee_name: 'Asfaqur', time_in: '9:05', time_out: '5:00',total_hours:' 7 Hours 55 Minutes' },
        { id: 4, employee_name: 'Alam', time_in: '9:00', time_out: '5:00' ,total_hours:' 8 Hours'},
        { id: 5, employee_name: 'Nahid', time_in: '9:10', time_out: '5:00' ,total_hours:'7 Hours 50 Minutes'},
        { id: 6, employee_name: 'Kabir', time_in: '9:00', time_out: '5:00' ,total_hours:'8 Hours '},
        { id: 7, employee_name: 'Raisul', time_in: '9:30', time_out: '5:00',total_hours:'7 Hours 30 Minutes' },
        { id: 8, employee_name: 'Sagor', time_in: '9:00', time_out: '5:00',total_hours:'8 Hours ' },
        { id: 9, employee_name: 'Islam', time_in: '9:30', time_out: '5:00',total_hours:'7 Hours 30 Minutes' },
        { id: 10, employee_name: 'Bhuiyan', time_in: '9:00', time_out: '5:00',total_hours:'8 Hours ' },
        { id: 11, employee_name: 'Sunny', time_in: '9:07', time_out: '5:00',total_hours:'7 Hours 53 Minutes' },
        { id: 12, employee_name: 'Sajib', time_in: '9:00', time_out: '5:00',total_hours:'8 Hours' },
        { id: 13, employee_name: 'Sporsho', time_in: '9:10', time_out: '5:00' ,total_hours:'7 Hours 50 Minutes'},
        { id: 14, employee_name: 'Mujahid', time_in: '9:00', time_out: '5:00',total_hours:'8 Hours ' },
        { id: 15, employee_name: 'Sayem', time_in: '9:11', time_out: '5:00',total_hours:'7 Hours 49 Minutes' },
        { id: 16, employee_name: 'Mehedi', time_in: '9:00', time_out: '5:00',total_hours:'8 Hours ' },
        { id: 17, employee_name: 'Joy', time_in: '9:00', time_out: '5:00',total_hours:' 8 Hours' },
        { id: 18, employee_name: 'Bikash', time_in: '9:00', time_out: '5:00',total_hours:' 8 Hours' },
        { id: 19, employee_name: 'Subed', time_in: '9:00', time_out: '5:00',total_hours:' 8 Hours' },

      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods:{
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
      return date;

    },
    currentDay(){
      const current = new Date();
      const mydate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
      // const mydate = "2017-06-28T00:00:00";
      const weekDayName =  moment(mydate).format('dddd');
      return weekDayName

    },
    totalAttend(){
      const total = this.items.length;
      return total

      }
  }
}
</script>
