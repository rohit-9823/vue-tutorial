<template>
  <Section2 :linkData="bind_link" :functionvalue="ouputs" :name="personalInfo"/>
</template>

<script>
import Section2 from './Section2.vue';

export default {
    name: "Section2main",
    components: { Section2 },
    data(){
        return{
            bind_link:"https://rohitportfolio9823.netlify.app/?fbclid=IwAR0ZB_JreIfroS2IXEiR9u1l01l0v0dTfcW-q7w2jPN5lcfaB0bvndi2Dw4",
            goalA:"Pratice more of Vue",
            goalB:"Master more of Vue",
            personalInfo:{
                name:"Rohit Singh",
            age:21,
            favoriteNumber:Math.random().toFixed(),
            image:"https://www.img2go.com/assets/favicon/favicon-196x196.png",
            }
            
        }
    },
    methods:{
        ouputs(){
            let data=Math.random();
            if(data<0.5){
                return this.goalA
            }
            else{
                return this.goalB
            }
        }
    }
}
</script>

<style>

</style>