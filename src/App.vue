<template>
<div class="container">
  <Home/>
<Abouts/>
<Ch7/>
<Section2Main/>
<section3Main/>
<Section4/>
<Section5/>
</div>  
</template>

<script>
import Home from "./components/youtube/Home/Home"
import Abouts from "./components/about/About"
import Ch7 from "./components/Section1/Ch-7.vue";
import Section2Main from "./components/Section 2/Section2Main.vue";
import Section3Main from './components/Section 3/Section3Main.vue';
import Section4 from "./components/Section 4/Section4.vue";
import Section5 from './components/Section 5/Section5.vue';
export default {
name:'App',
components:{
    Home,
    Abouts,
    Ch7,
    Section2Main,
    Section3Main,
    Section4,
Section5
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