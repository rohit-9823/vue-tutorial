<template>
    <div :key="movie.id" v-for="movie in movie">
        <h1>{{ movie.description }}</h1>
    </div>
    <div :key="flims.id" v-for="flims in flim" >
        <p>{{ flims.name }}</p>
    </div>
    <h1>{etikai}</h1>
</template>

<script>
export default {
name:"Demo",
props:{
    movie:Array,
    flim:Array
}
}
</script>

<style>

</style>