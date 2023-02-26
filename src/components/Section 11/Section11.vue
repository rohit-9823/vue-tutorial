<template>
  <div class="section11">
  <h1>Form</h1>
  <form class="formcomponent" @submit.prevent="handlesubmitform">
    <label>Your Name</label> <br/>
    <input type="text" placeholder="Your Name" v-model.trim="name" @blur="handlename"> <br/>
    <p v-if="isvalid==false">Invalid Name!!</p>
    <label>Your Age</label> <br/>
    <input type="number" placeholder="Your Age" v-model="age"><br/>
    <label>How did you hear about us?</label> <br/>
    <select v-model="refer">
      <option value="1">Facebook</option>
      <option value="2">Instagram</option>
      <option value="3">Twitter</option>
    </select> <br/>
    <label>What are you interested in?</label> <br/>
<div class="checkboxes">
  <input id="Web" name='radio' type="radio" value="web" v-model="interest">
  <label>Web</label> <br/>

    <input id="python" name='radio' type="radio" value="python" v-model="interest">
    <label>Python</label> <br/>

    <input id="React"  name='radio' type="radio" value="react" v-model="interest">
    <label>React</label> <br/>
  </div>
  <br/>
  <label>Education</label> <br/>
  <div class="checkboxes">
  <input id="SLC"  type="checkbox" value="slc" v-model="education">
  <label>SLC</label> <br/>

    <input id="+2"  type="checkbox" value="plus2" v-model="education">
    <label>+2</label> <br/>

    <input id="Bachelor"   type="checkbox" value="bachelor " v-model="education">
    <label>Bachelor</label> <br/>


  </div>

  <button  :class="cssvalue==='click1'?'change':'asitis' " @click="handlecss('click1')">Click 1</button>
  <button :class="{change:cssvalue==='click2'}"  @click="handlecss('click2')">Click 2</button>
  <button :class="{change:cssvalue==='click3'}"  @click="handlecss('click3')">Click 3</button>

  <basebutton mode="activebtn">Submit</basebutton>
  
</form>
</div>
</template>

<script>
import Basebutton from '../UI/Basebutton.vue'
export default {
  components: { Basebutton },
name:'Section11',
data(){
  return{
    isvalid:true,
    name:'',
    age:'',
    refer:'',
    interest:null,
    education:[],
    cssvalue:"click1",
   

  }
},
methods:{
  handlecss(value){
    this.cssvalue=value
  },
  handlesubmitform(){
console.log(this.education + this.checking );

  },
  handlename(){
    if(this.name==''){
      this.isvalid=false
      }
      else{
        this.isvalid=true
      }
  }
},
}
</script>

<style scoped>
.asitis{
  background-color: antiquewhite;
  color: black;
  padding: 10px;
  margin: 10px;
}
.change{
  background-color: purple;
  border: 1px solid rgb(213, 213, 213);
  margin: 10px;
  padding: 10px;
  color: white;
}
.normal{
  background-color: aliceblue;
  border: 1px solid rgb(213, 213, 213);
  margin: 10px;
  padding: 10px;
}
.section11{
  border: 2px solid turquoise;
  margin: 10px;
}
.formcomponent{
  border: 2px solid whitesmoke;
  width: 40%;
  margin: auto;
  text-align: left;
}
.formcomponent input,select,label{
  width:90%;
  padding: 5px;
  margin: 10px;
}
.checkboxes input{
  width: auto;

}

</style>