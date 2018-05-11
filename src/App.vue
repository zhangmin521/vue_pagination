<template>
  <div id="app">
    <pagination :params="params" :config="config" @changePage="changePage"></pagination>
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
      },
      config:{
          show:true,
          pageSizes : [10, 20, 30, 50, 100, 200]
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
