<template>
<div class="container">
  <Home/>
<Abouts/>
<Ch7/>
<Section2Main/>
<section3Main/>
<Section4/>
<Section5/>
<section6/>
<Section8/>
<section9/>
<Storedresource/>
<Section11/>
<Section12/>
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
import Section6 from './components/Section 6/Section6.vue';
import Section8 from './components/Section 8/Section8Main.vue';
import Section9 from './components/Section 9/Section9.vue';
import Storedresource from './components/Section10/StoredResource.vue';
import Section11 from './components/Section 11/Section11.vue';
import Section12 from './components/Section 12 Backend/Section12.vue';
export default {
name:'App',
components:{
    Home,
    Abouts,
    Ch7,
    Section2Main,
    Section3Main,
    Section4,
Section5,
Section6,
Section8,
Section9,
Storedresource,
Section11,
Section12,

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
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
  
</style>