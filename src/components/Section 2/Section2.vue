<template>
  <div class="section2">
  <h1>Section 2 </h1>
  <div class="topdiv">
  <h1>Vue course goal</h1>
</div>
<!-- ------------------bind started------------------////////// -->
<div class="seconddiv">
    <p>{{functionvalue()}}</p>
  <p>V-Bind:  <a class="clickme" v-bind:href="linkData">Click Me</a></p>
  
</div>
<!-- ------------------bind ended---------------------------------------------- -->
<!-- ------------------Assignment Started---------------------------------------------- -->
  <div class="assignment">
    <h1>Assignment Task 1</h1> <hr/>
    <h4> Name: {{name.name}}</h4>
    <h4>Age: {{name.age}}</h4>
    <h4>Age after 5 year:  {{name.age + 5}}</h4>
    <h4>Favorite Numeber:  {{name.favoriteNumber}}</h4>
    <h4> Image: <img v-bind:src=name.image alt="404 Not Found" class="imagelogo"/></h4>
    <input type="text" name="hobby" id="" placeholder="Hobby"  v-on:input="setname">
    <p>{{ copytext }}</p>
  </div>
  <!-- ------------------Assignment Ended---------------------------------------------- -->
  <!-- ------------------Event Started---------------------------------------------- -->
  <div class="eventdiv">
    <h1>Event in Action</h1><hr/>
    <button @click="handleincrement(1)">Add 10</button>
    <button @click="handleincrement(0)">Remove 5</button>
    <p v-once> Once Result: {{ counter }}</p>
    <p>Result: {{ counter }}</p>

  </div>
  <!-- ------------------Event Ended---------------------------------------------- -->
  <!-- ------------------Form Started---------------------------------------------- -->
<form action="" @submit.prevent="handlesubmit">
    <input type="text" name="" id="">
    <button>Submit</button>
</form>

  <!-- ------------------Form Ended---------------------------------------------- -->

  <!-- ------------------Assignment 2 Started---------------------------------------------- -->
<div class="assignment2">

<button @click="handlealert()">Show Alert</button>
<hr>
<br/>
<input type="text" name="" id="" placeholder="First Name" v-model="assignment2text">
<input type="text" name="" id="" placeholder="Last Name" v-model="assignment2textlast"> <br/>
<p>{{showall}}</p>
<br/>
<input type="text" v-bind:value="entervalue" v-on:input="handlename" @keyup.enter="handleenter()" placeholder="Press Enter after typing"> <br/>
<button @click="handlereset">Reset</button>
<p>{{assignment2text2}}</p>

</div>
  <!-- ------------------Assignment 2 Ended---------------------------------------------- -->
  <!-- ------------------Assignment 3 Started---------------------------------------------- -->
  <div class="assignment3">
    <h1>Assignment 3</h1>
    <button @click="handleadd5(5)">Add 5</button>
    <button @click="handleadd5(1)">Add 1</button>
    <p>Result: {{handleadd}}</p>
  </div>
  <!-- ------------------Assignment 3 Ended---------------------------------------------- -->
  <!-- ------------------INline css  Started---------------------------------------------- -->
  <div class="inlinecss">
    <div 
        :class="['box1',{active: boxtype}]"
    @click="handlebox"></div>
    <div class="box2"
    :class="styling"
    ></div>
    <div class="box3"></div>
  </div>
  <!-- ------------------INline css  Ended---------------------------------------------- -->
  <!-- ------------------Assignment 4  Started---------------------------------------------- -->
  <div class="assignment4">
    <h1>Assignment 4</h1>
    <input type="text" placeholder="Type user1 or user2" v-model="styleinput">
    <p
    :class="styleinput" 
    
    >Style Me!</p>
  </div>
  <!-- ------------------Assignment 4  Ended---------------------------------------------- -->
</div>
</template>

<script>

export default {
name:'Section2',
props:{
    linkData:'String',
    functionvalue:'Function',
        name :Object,
},
data(){
    return{
        counter:0,
        counter2:0,
        copytext:'',
        assignment2text:'',
        assignment2textlast:'',
        assignment2text2:'',
        entervalue:'',
        boxtype:false,
        boxtype2:false,
        styleinput:'',
    }
},
computed:{

showall(){
    return this.assignment2text + ' ' + this.assignment2textlast
},
handleadd(){

if(this.counter2<35){
    return `More number needed Counter is: ${this.counter2}`
}
else if(this.counter2>35){
    return "Less Number Needed"
}
else{
    return this.counter2
}

    },
},
watch:{
handleadd(){
    const that=this;
    setTimeout(() => {
    that.counter2=0
}, 5000);
}
},
methods:{
   handlebox(){
    this.boxtype=!this.boxtype
   },
handleadd5(value){
this.counter2+=value

},
    handlereset(){
this.assignment2text2=''
this.entervalue=''
    },
    handlename(event){
this.entervalue=event.target.value 
    },
    handleenter(){
        
        this.assignment2text2=this.entervalue + ' '+ 'maharjan'
    },
    handlealert(){
        
        alert("Function Called")
    },
    handlesubmit(){
console.log('submit');
    },
    setname(event){
        this.copytext=event.target.value
    },
handleincrement(value){
    console.log(value);
{value==1?this.counter=this.counter+10:this.counter=this.counter-5}
console.log(this.counter);
}
}
}
</script>

<style>
.section2{
    
    margin-bottom: 2%;
}
.clickme{
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: bolder;
}
.topdiv{
    background-color: blueviolet;
    width: 18%;
    padding: 15px;
    height: 80px;
    margin: 0 auto;
}

.seconddiv{
    width: 18%;
    height: 150px;
    margin:  auto;
    
}
.seconddiv>p{
    background-color: blueviolet;
    padding: 15px;
    color: white;
    border-radius: 10px;
}
.assignment{
    border: 1px solid orangered;
    width: 30%;
    height: auto;
    margin: 0 auto;
}
.imagelogo{
    width:50px;
    height: 50px;
}
.eventdiv{
    border: 1px solid chartreuse;
    width: 30%;
    height: auto;
    margin: auto;
}
.eventdiv button{
    color: white;
    background-color: red;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
}
.assignment2{
    border: 1px solid purple;
    width: 30%;
    height: auto;
    margin: 0 auto;
}
.assignment3{
    border: 1px solid rgb(78, 244, 106);
    width: 30%;
    height: auto;
    margin: 0 auto;
}
.assignment4{
    border: 1px solid blue;
    width: 30%;
    height: 200px;
    margin: 0 auto;
}
.inlinecss{
    border: 1px solid rgb(78, 244, 106);
    width: 30%;
    height: 400px;
    margin: 0 auto;
}
.box1{
    width: 160px;
    height: 160px;
    
    background-color: red;
}
.active{
    width: 160px;
    height: 160px;
    
    background-color: greenyellow;
}
.box2{
    width: 160px;
    height: 160px;
    
    background-color: yellow;
}
.user1{
    width: 160px;
    background-color: yellow;
    margin: auto;
}
.user2{
    width: 160px;
    background-color: blue;
    color: white;
    margin: auto;
}
.stylingpara{
    background-color: red;
    width:160px;
    
}
</style>