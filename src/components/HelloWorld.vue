<template>
  <div class="hello">
    <demo/>
    <div><load/></div>
  </div>
</template>

<script>
import demo from '@/components/demo'
import load from '@/components/load'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    demo,
    load
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
