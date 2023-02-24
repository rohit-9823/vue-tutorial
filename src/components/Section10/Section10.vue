<template>
    <div class="section10">

  
</div>
</template>

<script>
import Addresource from './AddResource.vue'
import Storedresource from './StoredResource.vue'
export default {
  components: { Addresource,Storedresource },
  name:'Section10',
  data(){
    return{
        word:'Storedresource',
    }
  },
  methods:{
    handlecomp(value){
        this.word=value
    }
  },
}
</script>

<style>
.section10{
    border: 2px solid brown;
}
.section10_inner{
    width: 50%;
    margin: 0 auto;
}
.buttondiv{
    border: 1px solid gainsboro;
    padding: 10px;
    margin-top: 10px;

}
.buttondiv button{
    padding: 5px;
    background-color: purple;
    color: white;
    margin: 10px;
}
</style>
