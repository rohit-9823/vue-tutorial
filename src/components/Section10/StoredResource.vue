<template>
    <div class="storeresource">
        <h1>Section 10</h1>
        <div class="buttondiv">
            <basebutton @click="handlecomp(true)" :mode="storebtn">Store Resources</basebutton>
            <basebutton @click="handlecomp(false)" :mode="addbtn">Add Resources</basebutton>
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
import Basebutton from '../UI/Basebutton.vue'
import Addresource from './AddResource.vue'

export default {
  components: { Addresource, Basebutton },
    name:'Storedresource',
    computed:{
        storebtn(){
            return this.showcomp ? "activebtn" : "inactive"
        },
        addbtn(){
            return this.showcomp ? "inactive" : "activebtn"
        }
    },
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
        handledata(value){
            console.log("parent",value);
            this.infodata.push(value)
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
    width: 50%;
    margin: auto;
}
.infosection{
    text-align: left;   
}
.btnsection{
    float:right;
}
</style>