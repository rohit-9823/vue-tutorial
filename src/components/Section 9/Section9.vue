<template>
    <div>
        <button @click="handleactive('activeuser')">Active</button>
        <button @click="handleactive('inactiveuser')">In-Active</button>
        <keep-alive>
  <component :is="showactive"></component>
</keep-alive>
        
</div>
</template>

<script>
import Activeuser from './Activeuser.vue'
import Inactiveuser from './Inactiveuser.vue'
export default {
    name:'Section9',
    data(){
        return{
            showactive:'activeuser',
        }
    },
    methods:{
        handleactive(value){
            this.showactive=value
        }
      },
  components: { Activeuser, Inactiveuser },

}
</script>

<style>

</style>