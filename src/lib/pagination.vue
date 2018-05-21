<template>
  <div class="pagination">
    <!--<span>共{{params.totalSize}}条</span>-->
    <select v-if="config.show" name="pagesize" class="changeSize" id="" v-model="params.perSize" @change="changePerSize()">
      <option v-for="item in config.pageSizes" :value="item">{{item}}条/每页</option>
    </select>
    <button class="preButton" @click="prePage" :disabled="params.currentPage==1" :class="params.currentPage==1?'notAllowed':''">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAAAAXNSR0IArs4c6QAAAh5JREFUOBGVlM9LG1EQx91V0WatNaQ55Zh7sbRBRBF/0KrJJkVaeiiElh5yi0dPHoLgyaun4CEH8WAENbtrrRpsD4VCSg9e+z/0VKK0+eFn1F1W3STbB5O3+958Zr47816Urv8YqVTqaa1WKyqK8lP1yyUSiWf1er2MfxTTFD9gMpmMNRqNo2azOYT/92AwONsRjMfjIzh/xh5hXzVN04vF4p+2UnVdH8X56AY6BpoXiPeuliDyxpEmmQYxIxqNJoHOBZLhKRV5E1TOAhxg3olEIu/y+fy/a+T69x6IvEkKYbKtAW0GAoEPZKq7IXm+JRVohiyWQNhGLBZ77wUJ6GSkuS/o0z7gAzKtm6a5yNwUJ69xBfJNc2zuYv2qqq4BLXk5u9dUqveShT2ByLDiB5IAPcjbYO4DWrYsa1UW/Qwpjl2x4Vwu1+MHEh+VTB+xc4ryplKpbGcymV4/8FVx+M5pemcABwiyT+/e0oa/7QI47XA3HsDkXL5uBzsHgGp+Ids8JodYr1aru9lstq9VViej7cBBGKPSn5D9kCCH4XB4oVAoXNj79nwPlA25TnzzIY9yM+Q6vUK2czPExxOUDfcFJnOZgnW+VgLKQPZzZB8jewj4lOOoG4ZRlT2nOPJyd5RKpR84z7D+G3iKIAfpdFpuTmup7iDIHibjCXCI9W+hUKjzn5UdANlPyFgGfszaVlupNiQzss+Ypsj8i7n7EnS+0Qej7kcMAAAAAElFTkSuQmCC" alt="">
    </button>
    <ul class="pageWrap">
      <li @click="curPage(item)" class="perPage" :class="{activePage:item==params.currentPage}" v-for="item in pageList" track-by="$index">{{item}}</li>
    </ul>
    <button class="nextButton" @click="nextPage" :disabled="params.currentPage==Math.ceil(params.totalSize/params.perSize)" :class="params.currentPage==Math.ceil(params.totalSize/params.perSize)?'notAllowed':''">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAAAAXNSR0IArs4c6QAAAiFJREFUOBGNlM9LG1EQx7O7qf2xRdO/IZB7LTmUFlq1tobdVYTmUDA0p5yaY68lvXr0KB48CTYUaXYN/qgiQlGh0NJrzjnFFG1NbKGb9DMhG6Ju1h0Y3uzO+7z5vvdmVzEM40O73R6NRqPpUqn0LRLSVObpeNx13R0WeRCSi6ixWOwVkw+peo/xs2VZyTCwIpPS6fTdRqPhED7BT/EX5XL5iHGgidRIsVg803U9RbiNj+Bbpmk+ZBxoHVCywOfxeNwitPFhpG8i+7Hk/KwjtT+Ry+VuVKvVFcCXiqKcMRrI3u+fI/EVUF6yZ63ZbC4DzfHYUFXVdBxnT3Ke9aR6L2REtptMJl8TLuE6C6yz5wnJeeZb0UsCKAALjG+Qfa5p2gxNIgfoL9UDvRF4vtVqveX5Dz7LnjcCK3qgjHTVeyq/I/xL5WmtPxkUVyqVvUQi8Y85z1ngqe/h+C1QKBSiAPe7OTeU1O7drgLOyiEBG9eC3OkQdyqf3gxQkzu1bNveDQQFovk/UsHELzTCwD3m8/mbVFoTSFoPT/V3j2/FbDZ7q1arrSFvCuA3x5/i4r+wSM+ugMi7jbxPzJjEf7GnKSod9IhucAEUCHk2laQvAz/oHsi3d4e2coDGkHeCvEnkfb1cyXvuHE4mk9H5WZUFIvETeRNBkMCKQPV6fZP4EZXqwM9o4u+SDDIVaJEJAh0jbzwMJAuKVA2owjiGvB/yMoz9BwJM8ZrOIl5tAAAAAElFTkSuQmCC" alt="">
    </button>
    <span class="jumpTip">跳至</span><input class="jumpInput" type="text" v-model="jumpPage" @change="changeCur" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" onafterpaste="this.value=this.value.replace(/[^0-9]/g,'')"><span class="jumpTip">页</span>
  </div>
</template>
<script>
  export default {
    name:'pagination',
    props:['params', 'config'],
    data(){
      return {
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
        if(tempPage && tempPage>0){
          this.params.currentPage = tempPage;
        }else{
          this.jumpPage = this.params.currentPage;
          return false;
        }
      }
    },
    computed:{

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
    color: #4A4A4A;
    font-size: 0;
  }
  .jumpTip{
    font-size: 12px;
    vertical-align: middle;
  }
  .pageWrap{
    display: inline-block;
    vertical-align: bottom;
    list-style-type: none;
    padding: 0;
    margin:0;
  }
  .perPage, .changeSize, .jumpInput, .preButton, .nextButton{
    height: 28px;
    line-height:28px;
    border: 1px solid #EDF2F8;
    border-radius: 3px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .preButton, .nextButton{
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
  .preButton img, .nextButton img{
    width: 7px;
  }
  .perPage{
    float: left;
    display: inline-block;
    width: 28px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }
  .nextButton{
    margin-right: 14px;
  }
  .jumpInput{
    width: 31px;
    color: #606266;
    outline: none;
    margin:0 14px;
    padding: 0 10px;
  }
  .perPage:hover, .preButton:hover, .nextButton:hover{
    border:1px solid #ABD5D9;
  }
  .preButton:hover, .nextButton:hover{
    color: #54D4E0;
  }
  .activePage{
    background: #54D4E0;
    color: #fff;
    border:1px solid #54D4E0;
  }
  button.notAllowed{
    color: #c0c4cc;
    background-color: #fff;
    cursor: not-allowed;
  }
</style>
