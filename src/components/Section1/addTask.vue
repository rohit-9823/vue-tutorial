<template>
    <div class="addtask">
  <input type="text" name="task" id="" placeholder="Your Task" v-model="task">
  <button @click="$emit('handledata',task),this.task=''">Submit</button>
</div>
</template>

<script>
export default {
name:"Addtask",
data(){
    return{
        task:''
    }
},
methods:{
  
},
emits:['handledata'],

}
</script>

<style>

.addtask{
    margin-top: 3%;   
    padding: 10px;
}
</style>