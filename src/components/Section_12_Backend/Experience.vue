<template>
    <div class="formsection">
  <h1>How was your experience?</h1>
  <form @submit.prevent="handlesubmit" class="formstyle">
    <div class="form-control">
    <label for=""><b>Name</b></label><br/>
    <input type="tel" name="" id="" style="width:80%" v-model="name"> <br/>
</div>
<div class="form-control">
    <label for=""> <b>My Experience was: </b></label> <br/>
    <input type="radio" name="radio" value="excellent" v-model="experience">
    <label> Excellent</label><br/>
    <input type="radio" name="radio" value="good" v-model="experience">
    <label> Good</label><br/>
    <input type="radio" name="radio" value="worst" v-model="experience">
    <label> Worst</label><br/>
</div>
<div class="form-control">
<basebutton mode="activebtn" class="demobtn">Submit</basebutton>
</div>
  </form>
</div>
</template>

<script>
import Basebutton from '../UI/Basebutton.vue'
export default {
  components: { Basebutton },
name:"Result",
methods:{
    handlesubmit(){
       

fetch("https://vue-http-demo-ec5fd-default-rtdb.firebaseio.com/experience.json",{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:this.name,
        experience:this.experience,
    })
}).then(()=>{
  
})
    },
},
data(){
    return{
        
            name:'',
            experience:'',
        
    }
},
props:{
    // fun:'Function',
},
Emits:['fun']
}
</script>

<style scoped>
.formsection{
    text-align: left;
    padding: 10px;
    width: 50%;
    border: 2px solid rgb(231, 221, 221);
    margin: auto;
}
.formstyle{
    width: 80%;
    padding: 10px;
}
.form-control label,input{
padding: 5px;
margin: 10px;
}
.demobtn{
    padding: 5px;
margin: 10px;
margin-left: 20px;
}
.form-control input{
    margin-left: 15px;
}
</style>