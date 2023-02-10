<template>
<div class="container">
  <Home/>
<Abouts/>
</div>  
</template>

<script>
import Home from "./components/Home/Home"
import Abouts from "./components/about/About"
export default {
name:'App',
components:{
  Home,
  Abouts,
}
}
</script>

<style>

</style>