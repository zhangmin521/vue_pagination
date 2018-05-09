<template>
  <div class="pagination">
    <span>共{{params.totalSize}}条</span>
    <select name="pagesize" class="changeSize" id="" v-model="params.perSize" @change="changePerSize()">
      <option v-for="item in pageSizes" :value="item">{{item}}条/每页</option>
    </select>
    <button class="preButton" @click="prePage" :disabled="params.currentPage==1" :class="params.currentPage==1?'notAllowed':''"><i><</i></button>
    <ul class="pageWrap">
      <li @click="curPage(item)" class="perPage" :class="{activePage:item==params.currentPage}" v-for="item in pageList" track-by="$index">{{item}}</li>
    </ul>
    <button class="nextButton" @click="nextPage" :disabled="params.currentPage==Math.ceil(params.totalSize/params.perSize)" :class="params.currentPage==Math.ceil(params.totalSize/params.perSize)?'notAllowed':''"><i>></i></button>
    <span>前往 <input class="jumpInput" type="text" v-model="jumpPage" @change="changeCur" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" onafterpaste="this.value=this.value.replace(/[^0-9]/g,'')"> 页</span>
  </div>
</template>
<script>
  export default {
    name:'pagination',
    props:['params'],
    data(){
      return {
        pageSizes : [10, 20, 30, 50, 100, 200],
        pageList:[],
        jumpPage:this.params.currentPage
      }
    },
    beforeMount(){

    },
    mounted(){
      this.updatePage();
    },
    methods:{
      updatePage(){
        this.params.totalPage = Math.ceil(this.params.totalSize/this.params.perSize);
        this.params.defaultTotalPage = this.params.defaultTotalPage ? this.params.defaultTotalPage : 9;
        this.jumpPage = this.params.currentPage;
        if(this.jumpPage > this.params.totalPage){
          this.jumpPage = this.params.totalPage;
          this.curPage(this.params.totalPage);
        }
        this.pageList = [];
        if(this.params.totalPage<=this.params.defaultTotalPage){
          for(var i = 1; i <= this.params.totalPage; i++){
            this.pageList.push(i);
          }
        }else{
          let offset = (this.params.defaultTotalPage - 1)/2;
          if(this.params.currentPage <= offset){
            for(var i = 1; i <= offset + 1; i++){
              this.pageList.push(i);
            }
            this.pageList.push('...');
            this.pageList.push(this.params.totalPage);
          }else if(this.params.currentPage > this.params.totalPage - offset){
            this.pageList.push(1);
            this.pageList.push('...');
            for(var i = offset + 1; i >= 0; i--){
              this.pageList.push(this.params.totalPage - i);
            }
          }else {
            this.pageList.push(1);
            this.pageList.push('...');
            for (var i = Math.ceil(offset / 2); i >= 1; i--) {
              this.pageList.push(this.params.currentPage - i);
            }
            this.pageList.push(this.params.currentPage);
            for (var i = 1; i <= offset / 2; i++) {
              this.pageList.push(parseInt(this.params.currentPage) + i);
            }
            this.pageList.push('...');
            this.pageList.push(this.params.totalPage);
          }
        }
      },
      prePage(){
        if(this.params.currentPage>1){
          this.params.currentPage = this.params.currentPage - 1;
        }
      },
      nextPage(){
        this.params.totalPage = Math.ceil(this.params.totalSize/this.params.perSize);
        if(this.params.currentPage<this.params.totalPage){
          this.params.currentPage = parseInt(this.params.currentPage) + 1;
        }
      },
      curPage(item){
        if(item!='...'){
          this.params.currentPage = item;
        }
      },
      changePerSize(){
        if(this.params.currentPage>=this.params.totalPage){
          this.params.currentPage = this.params.totalPage;
        }
      },
      changeCur(){
        var tempPage = this.jumpPage.replace(/[^0-9]/g,'');
        if(tempPage){
          this.params.currentPage = tempPage;
        }else{
          this.jumpPage = this.params.currentPage;
          return false;
        }
      }
    },
    computed:{
      changeData(){
        const {currentPage, perSize} = this;
        return {currentPage, perSize}
      }
    },
    watch:{
      'params.currentPage':function (newV, oldV) {
        this.$emit('changePage', this.params);
//        console.log(newV, oldV);
        this.updatePage();
      },
      'params.perSize':function (newV, oldV) {
        this.$emit('changePage', this.params);
//        console.log(newV, oldV);
        this.updatePage();
      }
    }
  }
</script>
<style scoped>
  .pagination{
    color: #535353;
  }
  .pageWrap{
    display: inline-block;
    vertical-align: bottom;
  }
  .perPage{
    float: left;
    display: inline-block;
    width: 20px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }
  .activePage{
    background: skyblue;
  }
  button.notAllowed{
    color: #c0c4cc;
    background-color: #fff;
    cursor: not-allowed;
  }
  .perPage, .changeSize, .jumpInput{
    height: 20px;
    line-height:20px;
    border: 1px solid silver;
    border-radius: 3px;
    margin: 0 5px;
    opacity: 0.5;
  }
  .preButton, .nextButton{
    border:none;
    background: transparent;
    cursor: pointer;
  }
  .nextButton{
    margin-right: 5px;
  }
  .preButton:hover, .nextButton:hover{
    color: blue;
  }
  .jumpInput{
    width: 31px;
    color: #606266;
    outline: none;
    padding: 0 10px;
  }
</style>
