<template>
    <div class="container">
      <Header
        @handledouble="handledouble"
        @delete-task="deletetask"
        @handleshow="handleshow"
        msg="hello nepal"
        :taskk="tasks"
      />
      <div v-show="this.showform">
  
          <Addtask @handlenewData="handlenew"/>
      </div>
      <Footers/>
      
      <Demo :movie="movie" />
      
      
  
    </div>
  </template>
  
  <script>
  import Demo from "../demo.vue";
  import Header from "../Header.vue";
  import Addtask from "../Addtask.vue";
  import Footers from "../footer.vue";
  
  
  export default {
    name: "Home",
    components: {
      Header,
      Addtask,
      Footers,
      Demo,
      
    },
    methods: {
      async handlenew(value){
        console.log(value);
        let res= await fetch('api/task',{
          method:"POST",
          headers:{
            'Content-type':'application/json',
          },
          body:JSON.stringify(value),
        })
        
        const data= await res.json()
  
  this.tasks=[...this.tasks,data]
      },
      handleshow(value){
          console.log(value);
          this.showform=!this.showform;
          
      },
  
      async handledouble(id) {
  
        const res=await fetch(`api/task/${id}`)
        const data= await res.json()
        let setvalue=!data.reminder
        data.reminder=setvalue
        console.log("data::::",data);
        // let settingvalue= await fetch(`api/task/${id}`)
        // settingvalue.map((value)=>value.reminder=!reminder)
        this.task = this.tasks.map((value) => {
          {
            
            value.id == id ? (value.reminder = !value.reminder) : null;
          }
        });
        // console.log(newvalue);
        let datas= await fetch(`api/task/${id}`,{
          method:"PUT",
          headers:{
            'Content-type':'application/json',
          },
          body:JSON.stringify(data)
        })
        let jpt=await datas.json()
        
      },
  
      async deletetask(id) {
        let newData
        console.log("app ko id", id);
        let res=await fetch(`api/task/${id}`,{
          method:"DELETE",
        })
  {res.status==200?(newData = this.tasks.filter((value) => id != value.id),
        this.tasks = newData,alert("deleted")):alert("Not Found")}
        
      },
  
      async fetchdata(){
  
        const res= await fetch("api/task")
        const data=await res.json();
    return data; 
      },
      async particulardata(){
        const res=await fetch(`api/movie/1`)
        const data= await res.json()
        console.log(data);
        return data
      }
    },
    data() {
      return {
        tasks: [],
        movie: [],
        showform:false,
      };
    },
    async created() {
      this.tasks= await this.fetchdata()
      this.movie=await this.particulardata()
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  