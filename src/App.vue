<template>
<div class="container">
  <Home/>
<Abouts/>
<Ch7/>
</div>  
</template>

<script>
import Home from "./components/youtube/Home/Home"
import Abouts from "./components/about/About"
import Ch7 from "./components/ch-7/Ch-7.vue";
export default {
name:'App',
components:{
    Home,
    Abouts,
    Ch7,
    
}
}
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