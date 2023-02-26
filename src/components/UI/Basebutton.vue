<template>
  <button :class="mode">
  <slot></slot>
  </button>
</template>

<script>
export default {
name:'Basebutton',
props:{

    mode:String,
},
}
</script>

<style scoped>
.activebtn{
    background-color: purple;
    color: white;
    cursor: pointer;
}
.inactive{
    background-color:white;
    color: black;
    cursor: pointer;
}
</style>