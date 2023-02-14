<template>
<div class="container">
  <Home/>
<Abouts/>
<Ch7/>
<Section2Main/>
</div>  
</template>

<script>
import Home from "./components/youtube/Home/Home"
import Abouts from "./components/about/About"
import Ch7 from "./components/Section1/Ch-7.vue";
import Section2Main from "./components/Section 2/Section2Main.vue";
export default {
name:'App',
components:{
    Home,
    Abouts,
    Ch7,
    Section2Main
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