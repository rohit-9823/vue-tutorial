<template>
    <div>
  <h1>In-active user</h1>
  <input type="text" placeholder="Keep alive" v-model="name">
  <button @click="handlename">Submit</button>
</div>
</template>

<script>
export default {
name:'Inactiveuser',
data(){
    return{
        name:''
    }
},
methods:{
    handlename(){
            if(this.name==""){
                alert("Field must not be empty")
            }
            else {
                alert("Submitted")
            }
    }
}
}
</script>

<style>

</style>