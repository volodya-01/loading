<template>
  <div>
      <misspage v-if="this.$store.state.mShow" />
      <sucess v-if="this.$store.state.sShow" />
      <loading v-if="this.$store.state.isShow" />
    <button @click="getData">请求数据</button>
  </div>
</template>

<script>
import loading from "@/components/loading";
import sucess from "@/components/sucess";
import misspage from "@/components/misspage";
export default {
  name: "load",
  components: {
    loading,
    sucess,
    misspage
  },
  methods: {
    getData() {
      this.$Loading.start();
      this.$axios
        .post("https://112.64.170.158:8190/Service1.svc/GetWaterworks")
        .then(res => {
          this.$Loading.finish();
           this.$store.commit('gbstatus',res.status)
          console.log(res); //返回请求的结果
        })
        .catch(err => {
          this.$Loading.error();
          console.log(err);
          this.$store.commit('errstatus',err)
        });
    },
 
  }
};
</script>
