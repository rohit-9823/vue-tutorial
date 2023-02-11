<template>
    <div class="showdiv">
    <div class="showtask" :key="task.id" v-for="task in taskvalue">   
  <h3>{{task.value}}</h3>
</div>
</div>
</template>

<script>
export default {
name:'Showtask',
props:{
    taskvalue:Array,
}
}
</script>

<style>
.showdiv{
    width: 20%;
    margin: 0 auto;
    padding: 10px;
}
.showtask{
    border-bottom: 1px solid black;
    background-color: bisque;
    cursor: pointer;
    height: 50px;
    padding: 5%;
}
.showtask:hover{
    transition: 0.5s;
    background-color: white;
}
h3{
    margin: 0;
}
</style>