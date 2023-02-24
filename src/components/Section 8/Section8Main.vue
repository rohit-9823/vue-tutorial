<template>
    <div class="section8">
        <h1>Section 8 Assignment</h1>
  <activedata/>
  <Delsoon/>
  <!-- <userdata/> -->
</div>
</template>

<script>
import Activedata from './Activedata.vue'
import Userdata from './Userdata.vue'
import Delsoon from './Delson.vue'
export default {
  components: { Activedata, Userdata, Delsoon },
    name:'Section8',
    data(){
      return{
          name:"rohit haku singh"
      }
    },
    provide(){
      return{
        myname:this.name
      }
    }

}
</script>

<style>
.section8{
    border: 2px solid blue;
}
</style>

------------------------------Usuage of Provide and inject ------------------------------
it should be used when we need to pass data from parent-to-child-to-child
------------------------------child ko child component ------------------------------
ma onclick ma @click="selecttopic(id)"
ani tala inject:['selecttopic']

----------------------parent component ma ------------------------------
provide(){
  return{
    selecttopic:this.handletopic  //handle topic chai method ho
  }
}
methods:{
  handletopic(id){
    console.log(id);
  }
}

------------------------------ Styling only for single component ------------------------------
scoped should be used with style tag. EG:

<style scoped>


</style>