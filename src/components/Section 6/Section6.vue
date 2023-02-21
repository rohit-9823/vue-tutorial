<template>
    <div class="section6">
  <h1>section 6</h1>
  <h1>Friend list</h1>
   <div class="friendlisting" >
    <ul>
        <li class="listingfriend" :key="lists.id" v-for="lists in friendlist">

            <h2 class="friendname">{{ lists.name }}</h2>
    <hr/>

            
    <button @click="handleshowhide(lists.id)"> {{showhide || value!=lists.id?"Show":"Hide"}}</button>
        <ul v-if=" value==lists.id && showhide">
            <li class="insidelist" >Phone: {{ lists.phone }}</li>
            <li class="insidelist">E-Mail: {{ lists.email }}</li>
        </ul>    
        </li>
    </ul>


   </div>
</div>
</template>
<script>

export default {
name:"Section6",
data(){
    return{
        showhide:false,
        value:0,
            friendlist:[
                {id:1,name:"Rohit Singh",phone:"9841399399",email:"rohit@gmail.com"},
                {id:2,name:"Batista",phone:"9823890987 ",email:"batista12@gmail.com"},
                {id:3,name:"John Cena",phone:"9841399283",email:"yoyocena@gmail.com"},
            ],
    }
},
methods:{
    handleshowhide(id){
        this.value=id
this.showhide=!this.showhide
    }
}
}
</script>

<style>
.section6{
    border-top: 2px solid red;
}
.friendlisting{
    
    width: 30%;
    padding: 10px;
    margin: 0 auto;
}
.listingfriend{
    list-style-type: none;
    border: 3px solid rgb(234, 230, 230);
    margin: 10px;
    padding: 10px;
    
}
.friendname{
    
    width: 40%;
    padding: 10px;
    margin: 0 auto;
}
.insidelist{
    list-style-type: none;
}

</style>