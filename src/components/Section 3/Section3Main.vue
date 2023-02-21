<template>
  <section-3 :userdata="userdata" :userarray="userarray" :fun="showid" @propfun="changeprops" :single="single"/>
</template>

<script>
import Section3 from './Section3.vue'
export default {
    name:"Section3Main",
  components: { Section3 },
  data(){
    return{
      single:1,
      userdata:{id:1,name:'Props Data',email:'mrsingh@gmail.com'},
      userarray:[
      {id:1,name:'Props Data',email:'propsinarray@gmail.com',phone:'9841399399'},
      {id:2,name:'Props Data2',email:'propsinarray@gmail.com',phone:'9841372398'},
      ],
    }
  },
  methods:{
      showid(id){
  console.log("In parent class",id);
},
changeprops(id,phn){
  
  this.userarray.map((value)=>{
    {value.id==id?value.phone=phn:null}
  })
} ,
 },

}
</script>

<style>

</style>