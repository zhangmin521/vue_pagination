# vue_pagination

> A Vue.js project
> 支持上一页、下一页、单击页码（包括首页、尾页）和输入页码查询
> Support previous page, next page, click page number (including home page, end page) and input page number query

# Demo

[Demo page](https://zhangmin521.github.io/vue_pagination/index.html)

# Installation
# npm

```html
$ npm install pagination
```


# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.5.11`

```html
import pagination from 'pagination'
Vue.use(pagination);

<template>
	<div id="app">
		<pagination :params="params" @changePage="changePage"></pagination>
	</div>
</template>

```

> 参数：当前页、每页条数和总共条数（用于计算总页数）
> Parameters: current page, number of pages per page and total number of pages (for calculating total number of pages)
> 传递函数 changePage

```html
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
