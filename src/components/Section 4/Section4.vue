<template>
  <div class="section4">
    <h1>Section4</h1>
    <h2>Monster Slayer</h2>
    <div class="monster_health">
      <h4>Monster Health</h4>
      <div class="healthbar">
        <div class="monsterhealthbar" :style="{ width: monsterhealth + '%' }">
          <h1>{{ monsterhealth + "%" }}</h1>
        </div>
      </div>
    </div>
    <br />
    <div class="monster_health">
      <h4>User Health</h4>
      <div class="healthbar">
        <div class="monsterhealthbar" :style="{ width: userhealth + '%' }">
          <h1>{{ userhealth + "%" }}</h1>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button @click="handleattack">Attack</button>
      <button @click="specialattack" :disabled="counter%3!=0">Special Attack</button> <br />
      <button @click="getheal">Heal</button>
      <button>Surrender</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section4",
  data() {
    return {
      monsterhealth: 100,
      userhealth: 100,
      counter: 1,
    };
  },
  methods: {
    declaregame(){
      if(this.monsterhealth<=0){
        return "User Wins"
      }
      else{
        return "Monster Wins"
      }
    },
    getrandomvalue(max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    handleattack() {
      this.counter+=1
      console.log(this.counter);
      this.monsterhealth -= this.getrandomvalue(15, 5);
      this.userhealthattack();
    },
    userhealthattack() {
      this.userhealth -= this.getrandomvalue(6, 3);
    },
    specialattack(){
      this.counter=1
      this.monsterhealth-=this.getrandomvalue(40,30)
      this.userhealth-=this.getrandomvalue(10,5)
    },
    getheal(){
      this.userhealth+=this.getrandomvalue(10,6)
      if(this.userhealth>100){
        this.userhealth=100
      }
      
    },
  },
};
</script>

<style>
.monster_health {
  width: 30%;
  background-color: rgb(207, 228, 248);
  margin: auto;
  padding: 5px;
}
.healthbar {
  width: 100%;
}
.monsterhealthbar {
  width: 100%;
  background-color: green;
}
.buttons {
  /* display: flex;
  flex-direction: column; */
  /* width: 30%; */
}
.buttons button {
  padding: 10px;
  width: 30%;
  margin: 10px;
}
</style>
