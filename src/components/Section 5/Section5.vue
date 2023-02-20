<template>
    <div class="section5">
    <p>USEREF:</p>
    <input type="text" ref="userText"/>
    <button @click="settext">UseRef</button>
    <input type="text" v-model="jpt">
    <h5>{{ msg }}</h5>
</div>
</template>

<script>
export default {
    name:"Section5",
    data(){
        return{
            msg:"",
            jpt:"",
            message:"hello world",
        }
    },
    methods:{

        settext(){
            this.msg=this.$refs.userText.value

        }
    },
    beforeCreate(){
        
        console.log('before create' + this.message);
    },
    created(){
        
        console.log('created' + this.message);
    },
    updated(){
            console.log("updated");
    },
    beforeMount(){
        console.log('before'+this.message);
    },
    mounted(){
            console.log("mounted");
    },
    unmounted(){
        console.log("unmounted");
    },
}
</script>

<style>
.section5{
    
    border-top: 2px solid red;
}
</style>