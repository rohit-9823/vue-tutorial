<template>
  <header>
    <h1>{{msg}}</h1>
    <div class="btn_design">
    <button @click="$emit('handleshow',true),hideshow=false,delbtn=true" v-show="hideshow" class="active_button">Add New</button>
    <button @click="$emit('handleshow',true),hideshow=true,delbtn=false" v-show="delbtn" class="close_button">Close</button>
  </div>
    <div class="task" :key="task.id" v-for="task in taskk">
      <div :class="task.reminder==true? 'tasknameactive' : 'tasknameinactive'" @click="$emit('handledouble',task.id)">
            <h3>{{ task.description }}</h3> 
            <i @click="handlecross(task.id)" class="fa-regular fa-circle-xmark crossmark"></i>
            <h5>{{ task.day }}</h5>
          </div>
          </div>
    
  </header>
</template>

<script>


export default {
name:"Header",
props:{
    msg:String,
    taskk:Array
},

methods:{
    
    handlecross(id){
      console.log(id);
      this.$emit('delete-task',id)
    },
    handledoubleclick(id){
      console.log(id);
    }
},
emits:['delete-task','handledouble','handleshow'],
data(){
  return{
  flims:[],
  hideshow:true,
  delbtn:false,
  }
},
created(){
this.flims=[
  {
    id:1,
    name:"nepali dhoom"
  },
  {
    id:2,
    name:"nepali flim"
  },
]
}

}

</script>
<style scoped>
header{
    
    color: black;
    justify-content: left;
}
.task{
  background-color:rgb(229, 215, 215);
  width: 20%;
  margin: 0 auto;
  
}
.tasknameactive{
  
  border-left: 7px solid green;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
  /* width: 90%; */
}
.tasknameinactive{
  
 
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
  /* width: 90%; */
}
.crossmark{
margin-top: 20px;
cursor: pointer;
}
.btn_design{
  padding: 10px;
}
.active_button {
  background-color: rgb(78, 78, 236);
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
.close_button {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>

