<template>
  <div>
    <Experience @fun="handledata"/>
  <Result :value="newvalue"/>
</div>
</template>

<script>
import Experience from './Experience.vue'
import Result from './Result.vue'
export default {
  components: { Result, Experience },
name:"Section12",
data(){return{
    newvalue:[
    ]
}},
methods:{
    handledata(name,expectation){
        let cls={name,expectation}
        this.newvalue.unshift(cls)
        console.log(this.newvalue);
    },
}
}
</script>

<style>

</style>