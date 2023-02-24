<template>
    <div class="storeresource">
        <div class="buttondiv">
            <button @click="handlecomp(true)">Store Resources</button>
            <button @click="handlecomp(false)">Add Resources</button>
        </div>
        <Addresource v-show="!showcomp" @newfun="handledata"/>
        <div class="infosection" v-for="infodata in infodata" :key="infodata.id" v-show="showcomp">
            <h2>{{infodata.id}}</h2>
            <p>{{infodata.description}}</p>
            <button class="btnsection" @click="handeldel(infodata.id)">Delete</button> <br/>
            <a :href="infodata.link"> View Resources</a>
        </div>
        
  </div>
</template>

<script>
import Addresource from './AddResource.vue'

export default {
  components: { Addresource },
    name:'Storedresource',
    data(){
        return{
            showcomp:true,
            infodata:[
                {id:"Google",description:"Yoe need to know about Google",link:"https://google.com"},
            ],
        }
    },
    methods:{
        handlecomp(value){
            this.showcomp=value
            
        },
        handledata(id,description,link){
            let cls={id,description,link}
            this.infodata.push(cls)
            console.log(this.infodata);
        },
        handeldel(value){
            this.infodata=this.infodata.filter((datas)=>datas.id!=value)

        }
    }
}
</script>

<style scoped>

.storeresource{
    border: 1px solid gainsboro;
    margin-top: 10px;
    padding: 10px;
}
.infosection{
    text-align: left;
    
    
}
.btnsection{
    float:right;
}
</style>