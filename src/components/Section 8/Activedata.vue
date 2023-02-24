<template>
    <div>
  <userdata @value="displayinput" />
  <div v-show="data" class="showdata">
    <h1>Name: {{ objvalue.name }}</h1>
    <h1>{{ demo }}</h1>
  <h1>Age: {{ objvalue.age }}</h1>
</div>
</div>
</template>

<script>
import Userdata from './Userdata.vue';
export default {
  components: { Userdata },
name:"Activedata",
data(){
    return{
        objvalue:{
        name:'',
        age:''
        },     
        data:false,        
        
        
    }
},
methods:{
    displayinput(name,age){
        console.log(name + age);
        this.data=true
        this.objvalue={
            name:name,
            age:age
        }
    }
},
inject:['demo']
}
</script>

<style>

</style>