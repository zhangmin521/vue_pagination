<template>
  <div id="app">
    <pagination :params="params" @changePage="changePage"></pagination>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      params:{
        currentPage:1,
        perSize:10,
        totalSize:107
      }
    }
  },
  methods:{
    changePage(params){
      this.params = params;
    }
  }
}
</script>

<style scoped>

</style>
