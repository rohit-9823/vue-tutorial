<template>
  <div class="addresource">
    <h1>Add Resources</h1>
    <form action="" class="addform" @submit.prevent="handleresource">
        <label for="">Title</label><br/>
        <input type="text" name="" id="" v-model="title"><br/>
        <label for="">Description</label><br/>
        <input type="textarea" row=5 col=3 name="" id="" v-model="description"><br/>
        <label for="">Link</label><br/>
        <input type="text" name="" id="" v-model="link"><br/>
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
            id:Math.floor(Math.random()),
            title:'', 
            description:'', 
            link:'', 
        }
    }
},
methods:{
    handleresource(){
console.log(this.title + this.description + this.link);
this.$emit("newfun",this.title ,this.description ,this.link)
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
    width:100%;
    padding: 10px;
}
</style>