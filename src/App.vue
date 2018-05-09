<template>
  <div id="app">
    <pagination :params="params" @changePage="changePage"></pagination>
  </div>
</template>

<script>
 import Pagination from './common/pagination.vue'
export default {
  name: 'app',
  components:{Pagination},
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin:0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
