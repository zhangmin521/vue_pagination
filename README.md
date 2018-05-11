# vue_pagination

> A Vue.js project
> 支持上一页、下一页、单击页码（包括首页、尾页）和输入页码查询
> Support previous page, next page, click page number (including home page, end page) and input page number query

# Demo

[Demo page](https://zhangmin521.github.io/vue_pagination/index.html)

# Installation
# npm

```html
$ npm install vue-pagenavs --save
```


# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.5.11`

```html
import pagination from 'vue-pagenavs'
Vue.use(pagination);

<template>
	<div id="app">
		<pagination :params="params" @changePage="changePage"></pagination>
	</div>
</template>

```

> 页码参数：当前页、每页条数和总共条数（用于计算总页数）
> Parameters: current page, number of pages per page and total number of pages (for calculating total number of pages)
> 配置参数：是否显示每页条数的选择框、自定义选择框数组
> Configuration parameters: whether to display the selection box for each page number and the custom selection box array
> 传递函数 changePage

```html
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

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# 兼容性
  ie9+

# License

[The MIT License](http://opensource.org/licenses/MIT)

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
