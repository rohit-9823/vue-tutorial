<template>
  <form @submit="handlesubmit">
    <table>
        <tr>
            <label for="">Name: </label>
            <input type="text" v-model="name" name="" id="">
        </tr> <br/>
        <tr>
            <label for="">Day: </label>
            <input type="text" v-model="day" name="" id="">
        </tr><br/>
        <tr>
            <label for="">Reminder: </label>
            
            <input type="checkbox" v-model="reminder" name="" id="">
        </tr><br/>
        <button>Submit</button>

    </table>
  </form>
</template>

<script>



export default {
name:'Addtask',
methods:{
    handlesubmit(event){
        event.preventDefault();

        let new_data={
            id: Math.random(),
            description:this.name,
            day:this.day,
            reminder:this.reminder,
        }
        this.$emit('handlenewData',new_data)
        console.log(new_data);
        this.name='',
        this.day='',
        this.reminder=false
        
    }
},
data(){
    return{
        
    name:'',
    reminder:false,
    day:''
        
    
    }
},
emit:['handlenewData'],
}
</script>

<style>

</style>