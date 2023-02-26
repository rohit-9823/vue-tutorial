<template>
    <div class="result">
        <h1>Submitted Experience</h1>
        <basebutton @click="handleshow" mode="activebtn">{{showlist?'Hide':'Load Submitted Experience'}}</basebutton>
        <!-- --------------------------Loading API ---------------------------- -->
        <h1 v-if="isloading">Loading</h1>
        <!-- --------------------------no record in api---------------------------- -->
        <h1 v-else-if="!isloading && datastore.length==0">No record  in API</h1>
        <div v-else>
        <div class="listingcard" v-for="item in datastore" :key="item.name">
            <h3>{{item.name}} is saying {{item.experience}}</h3>
        </div>
    </div>
    </div>
</template>

<script>
import Basebutton from '../UI/Basebutton.vue'
export default {
name:"Result",
components:{Basebutton},
data(){
    return{
            showlist:false,
            isloading:false,
            datastore:[],
            errmsg:'',

    }
},
mounted(){
    this.handleshow();
    
},
methods:{

    async handleshow(){
        this.isloading=true
        this.showlist=!this.showlist
        const data= await fetch('https://vue-http-demo-ec5fd-default-rtdb.firebaseio.com/experience.json').then((res)=>{
            this.isloading=false
            return res.json()
        }).catch((err)=>{
          console.log("err",err);
        })
        let result=[]
        for(let id in data){
                result.push({
                    id:id,
                    name:data[id].name,
                    experience:data[id].experience
                })
        }

        this.datastore=result
        
    },
    
},

    
     

props:{
    value:Array,
}
}
</script>


<style scoped>
.result{
    width: 50%;
    margin: auto;
    
}
.listingcard h3{
    border: 2px solid yellow;
    margin: 20px;

}
</style>