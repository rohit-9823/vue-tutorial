<template>
  <div class="section3">
    <h1>Section 3</h1>
    <!-- ---------------------------------------props demo---------------------------------------------------------- -->
    <h1>{{ userdata.name }}</h1>
    <button @click="handleprop">Send value in parent class</button>
    <p>{{ showsingle }}</p>
    <p :key="value.id" v-for="value in userarray">{{ value.phone }}</p>
    <input type="text" v-model="phn" />
    <button @click="handlechangeprops">Change Props value from child</button>
    <!-- ---------------------------------------props demo ended ---------------------------------------------------------- -->
    <h3>My Goal</h3>
    <br />
    <input type="text" name="" id="" v-model="goal" />
    <button @click="handlegoal">Add Goal</button> <br />
    <p v-if="listOfGoal.length == 0">No Goal Listed</p>
    <p v-else-if="listOfGoal.length > 0">Goal Listed</p>
    <p v-else>v-else ma condition halnu pardaina</p>
    <ul v-show="showhide">
      <li
        :key="log.id"
        v-for="log in listOfGoal"
        class="listitem"
        @click="handleremove(log.id)"
      >
        {{ log.goals }}<br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Demo of Click.Stop in input field"
          @click.stop
        />
      </li>
    </ul>

    <div v-show="isdivisible(log)" :key="log" v-for="log in 10">
      <!-- <div :key="log" v-for="log in modulus2">  //////////can be used with computed -->
      <ul v-show="showhide" class="listitem" @click="handleremove(log)">
        <li>{{ log }}</li>
      </ul>
    </div>

    <button @click="handlehideshow">{{ showhide ? "Hide" : "Show" }}</button>
  </div>
</template>

<script>
export default {
  name: "Section3",
  props: ["userdata", "userarray", "fun", "single"],
  computed: {
    modulus2() {
      let cls = this.hawa.filter((value) => value % 2 == 0);
      return cls;
    },
  },
  data() {
    return {
      goal: "",
      phn: "",
      listOfGoal: [],
      hawa: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      showhide: true,
      showsingle: this.single,
    };
  },
  methods: {
    handlechangeprops() {
      this.$emit("propfun", 1, this.phn);
    },
    handleprop() {
      this.fun(5);
    },
    isdivisible(value) {
      if (value % 2 == 0) {
        return true;
      }
      return false;
    },
    handlehideshow() {
      this.showhide = !this.showhide;
    },
    handleremove(value) {
      console.log(value);
      this.listOfGoal = this.listOfGoal.filter((data) => data.id != value);
    },
    handlegoal() {
      let id = Math.random();
      let goals = this.goal;
      let newvalue = { id, goals };
      this.listOfGoal.push(newvalue);
      //     this.listOfGoal=[...this.listOfGoal,newvalue]
      this.goal = "";
    },
  },
  emits: ["propfun"],
};
</script>

<style>
.listitem {
  background-color: rgb(104, 255, 104);
  width: 180px;
  border-radius: 10px;
  list-style: none;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
}
</style>
