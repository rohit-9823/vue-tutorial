<template>
  <div class="addresource">
    <h1>Add Resources</h1>
    <form action="" class="addform" @submit.prevent="handleresource">
        <label for="">Title</label><br/>
        <input type="text" name="" id="" v-model="info.id"><br/>
        <label for="">Description</label><br/>
        <input type="textarea" row=5 col=3 name="" id="" v-model="info.description"><br/>
        <label for="">Link</label><br/>
        <input type="text" name="" id="" v-model="info.link"><br/>
        <button>Add Resource</button>

    </form>
  </div>
</template>

<script>
export default {
name:'Addresource',
data(){
    return{
        info:{
            id:'', 
            description:'', 
            link:'', 
        }
    }
},
methods:{
    handleresource(){
console.log(this.info );
if(this.info.id.trim()==''|| this.info.description.trim()=='' || this.info.link.trim()==''){
    
    alert("empty");
}
else{
    this.$emit("newfun",this.info)
    
}
    }
},
emits:['newfun'],
props:{
    newfun:Function,
}
}
</script>

<style>
.addform {
    text-align: left;
    padding: 10px;
}
.addform input{
    width:70%;
    padding: 10px;
}
</style>