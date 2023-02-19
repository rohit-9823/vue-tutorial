<template>
  <div class="section4">
    <h1>Section4</h1>
    <h2>Monster Slayer</h2>
    <div class="monster_health">
      <h4>Monster Health</h4>
      <div class="healthbar">
        <div  class="monsterhealthbar" :style="handlewidth">
          <h1> &nbsp; </h1>
      </div>
    </div>
    </div>
    <br />
    <div class="monster_health">
      <h4>User Health</h4>
      <div class="healthbar">
        <div class="monsterhealthbar" :style="{ width: userhealth + '%' }">
          <h1>&nbsp; </h1>
        </div>
      </div>
      </div>
<br/>
    <div v-show="monsterwin || userwin" class="gamedecision">
      <h4>Game Over</h4>
      <div class="healthbar">
        <h1>{{winnermsg}}</h1>
        <button @click="handlenewgame">Start New Game</button>
      </div>
    </div>

    <div class="buttons">
      <button @click="handleattack" :disabled="makedisable">Attack</button>
      <button @click="specialattack" :disabled="counter%3!=0 || makedisable">Special Attack</button> <br />
      <button :disabled="makedisable" @click="getheal">Heal</button>
      <button @click="surrender" :disabled="makedisable">Surrender</button>
    </div>
    <div class="gamedecision">
      <ul>
        <li :key="logmessage" v-for="logmessage in logmessage" class="listinglog"> {{logmessage}}</li>
        
      </ul>
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
      monsterwin: false,
      userwin: false,
      makedisable:false,
      winnermsg:'',
      logmessage:[],
      who:'',
      what:'',
      value:'',
    };
  },
  computed:{
    handlewidth(){
      if(this.userwin){
        return {width:'0'}
      }
        return {width:this.monsterhealth + '%'}
    }
  },
  methods: {
    handlelog(who,what,value){
      
      let cls= (who + '-' + what + '-' + value);
      this.logmessage.push(cls)
      console.log(this.logmessage);

    },
    handlenewgame(){
      this.makedisable=false
      this.userhealth=100;
      this.monsterhealth=100
      this.monsterwin=false
      this.userwin=false
      this.logmessage=[]
    },
    declaregame(){
      if(this.monsterhealth <=0)
      {
        this.makedisable=true
        this.userwin=true
        this.winnermsg='You Win'
      }
      if(this.userhealth <=0 || this.monsterwin==true)
      {
        this.makedisable=true
        this.monsterwin=true
        this.winnermsg='You Loose'
      }
    },
    getrandomvalue(max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    handleattack() {
      this.counter+=1
      console.log(this.counter);
      let value= this.getrandomvalue(15, 5)
      this.monsterhealth -= value
      this.handlelog('user','attack',value)
      this.userhealthattack();
      this.declaregame();
      
    },
    userhealthattack() {
      let value=this.getrandomvalue(9, 2);
      this.userhealth -= value
      this.handlelog('monster','attack',value)
    },
    specialattack(){
      this.counter=1
      this.monsterhealth-=this.getrandomvalue(40,30)
      this.userhealth-=this.getrandomvalue(10,5)
      this.handlelog('user','Special-attack',this.getrandomvalue(40,30))
    },
    getheal(){
      this.userhealth+=this.getrandomvalue(10,6)
      this.handlelog('user','Heal',this.getrandomvalue(10,6))
      if(this.userhealth>100){
        this.userhealth=100
      }
      
    },
    surrender(){
      this.monsterwin=true
      this.declaregame()
      this.handlelog('user','Surrender',0)
    }
  },
};
</script>

<style>
.gamedecision{
  width: 30%;
  background-color:whitesmoke;
  margin: auto;
  margin-top: 10px;
}
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
  /* width: 100%; */
  background-color: green;
}
.monsterhealthbars {
  
  background-color: pink;
}
.buttons button {
  padding: 10px;
  width: 30%;
  margin: 10px;
}
.listinglog{
  padding: 10px;
}
</style>
