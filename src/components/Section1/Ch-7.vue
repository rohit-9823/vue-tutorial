<template>
  <div class="ch7">
    <h1>Section 1 CH-7 UDEMY </h1>
    <AddTask @handledata="handletask"/>
    <ShowTask :taskvalue="this.taskdata"/>
  </div>
</template>

<script>
import AddTask from './addTask.vue';
import ShowTask from './showTask.vue';

export default {
    name:'Ch7',
    components: { AddTask, ShowTask },
    methods:{
      handletask(value){
        let id= Math.random()
        let data={id,value}
        this.taskdata=[...this.taskdata,data]
      }
    },
    data(){
      return{
        taskdata:[],
        
      }
    }
}
</script>

<style>
.ch7{
  border: 1px solid brown;
  margin-bottom: 3%;
}
</style>