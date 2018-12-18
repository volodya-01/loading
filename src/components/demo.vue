<template>
    
       <div>
               999
               {{ count }}
               <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
              </p>
               
       </div>
  
</template>
<script type="text/javascript">
    export default{
        name:'demo',
        data(){
            return{

            }
        },
        methods:{
            increment(){
              this.$store.commit('increment')
            },
            decrement(){
              this.$store.commit('decrement')
            }
        },
        computed:{
            count(){
                return this.$store.state.count
            },
        }


    }

</script>