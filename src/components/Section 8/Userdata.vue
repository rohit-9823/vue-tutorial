<template>
    <div>
  <div class="formarea">
    
  <form class="forming">

    <input  type="text" v-model="name" placeholder="Name"><br/>
    <input type="number" v-model="age" placeholder="age"> <br/>
    <button @click.prevent="$emit('value',name,age)">Submit</button> 
  </form>
</div>
</div>
</template>

<script>
export default {
name:"Userdata",
data(){
    return{
        name:'',
        age:'',
        demo:"this is inject msg",
    }
},
provide(){
  return{
    demo:this.demo
  }
}
}
</script>

<style>
.forming input{
padding: 5px;
margin: 10px;

}
.formarea{
    
    margin-bottom: 10px;
}
</style>