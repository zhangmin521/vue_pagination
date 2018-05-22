!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pagination",[],t):"object"==typeof exports?exports.pagination=t():e.pagination=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./dist/",t(t.s=1)}([function(e,t,a){"use strict";t.a={name:"pagination",props:["params"],data:function(){return{pageList:[],jumpPage:this.params.currentPage}},beforeMount:function(){},mounted:function(){this.updatePage()},methods:{updatePage:function(){if(this.params.totalPage=Math.ceil(this.params.totalSize/this.params.perSize),this.params.defaultTotalPage=this.params.defaultTotalPage?this.params.defaultTotalPage:9,this.jumpPage=this.params.currentPage,this.jumpPage>this.params.totalPage&&(this.jumpPage=this.params.totalPage,this.curPage(this.params.totalPage)),this.pageList=[],this.params.totalPage<=this.params.defaultTotalPage)for(var e=1;e<=this.params.totalPage;e++)this.pageList.push(e);else{var t=(this.params.defaultTotalPage-1)/2;if(this.params.currentPage<=t){for(var e=1;e<=t+1;e++)this.pageList.push(e);this.pageList.push("..."),this.pageList.push(this.params.totalPage)}else if(this.params.currentPage>this.params.totalPage-t){this.pageList.push(1),this.pageList.push("...");for(var e=t+1;e>=0;e--)this.pageList.push(this.params.totalPage-e)}else{this.pageList.push(1),this.pageList.push("...");for(var e=Math.ceil(t/2);e>=1;e--)this.pageList.push(this.params.currentPage-e);this.pageList.push(this.params.currentPage);for(var e=1;e<=t/2;e++)this.pageList.push(parseInt(this.params.currentPage)+e);this.pageList.push("..."),this.pageList.push(this.params.totalPage)}}},prePage:function(){this.params.currentPage>1&&(this.params.currentPage=this.params.currentPage-1)},nextPage:function(){this.params.totalPage=Math.ceil(this.params.totalSize/this.params.perSize),this.params.currentPage<this.params.totalPage&&(this.params.currentPage=parseInt(this.params.currentPage)+1)},curPage:function(e){"..."!=e&&(this.params.currentPage=e)},changePerSize:function(){this.params.currentPage>=this.params.totalPage&&(this.params.currentPage=this.params.totalPage)},changeCur:function(){var e=this.jumpPage.replace(/[^0-9]/g,"");if(!(e&&e>0))return this.jumpPage=this.params.currentPage,!1;this.params.currentPage=e}},computed:{},watch:{"params.currentPage":function(e,t){this.$emit("changePage",this.params),this.updatePage()},"params.perSize":function(e,t){this.$emit("changePage",this.params),this.updatePage()}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),n={install:function(e,t){e.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),t.default=n},function(e,t,a){"use strict";function r(e){a(3)}var n=a(0),i=a(9),s=a(8),o=r,p=s(n.a,i.a,!1,o,"data-v-294b7d80",null);t.a=p.exports},function(e,t,a){var r=a(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(6)("dddcacec",r,!0,{})},function(e,t,a){t=e.exports=a(5)(!1),t.push([e.i,".pagination[data-v-294b7d80]{color:#4a4a4a;font-size:0}.jumpTip[data-v-294b7d80]{font-size:12px;vertical-align:middle}.pageWrap[data-v-294b7d80]{display:inline-block;vertical-align:bottom;list-style-type:none;padding:0;margin:0}.changeSize[data-v-294b7d80],.jumpInput[data-v-294b7d80],.nextButton[data-v-294b7d80],.perPage[data-v-294b7d80],.preButton[data-v-294b7d80]{height:28px;line-height:28px;border:1px solid #edf2f8;border-radius:3px;vertical-align:middle;margin-right:5px;background:#fff;outline:none}.nextButton[data-v-294b7d80],.preButton[data-v-294b7d80]{width:30px;height:30px;line-height:30px;outline:none;cursor:pointer}.nextButton img[data-v-294b7d80],.preButton img[data-v-294b7d80]{width:7px}.perPage[data-v-294b7d80]{float:left;display:inline-block;width:28px;text-align:center;font-size:12px;cursor:pointer}.nextButton[data-v-294b7d80]{margin-right:14px}.jumpInput[data-v-294b7d80]{width:31px;color:#606266;outline:none;margin:0 14px;padding:0 10px}.nextButton[data-v-294b7d80]:hover,.perPage[data-v-294b7d80]:hover,.preButton[data-v-294b7d80]:hover{border:1px solid #abd5d9}.nextButton[data-v-294b7d80]:hover,.preButton[data-v-294b7d80]:hover{color:#54d4e0}.activePage[data-v-294b7d80]{background:#54d4e0;color:#fff;border:1px solid #54d4e0}button.notAllowed[data-v-294b7d80]{color:#c0c4cc;background-color:#fff;cursor:not-allowed}",""])},function(e,t){function a(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var i=r(n);return[a].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([i]).join("\n")}return[a].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=a(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<e.length;n++){var s=e[n];"number"==typeof s[0]&&r[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),t.push(s))}},t}},function(e,t,a){function r(e){for(var t=0;t<e.length;t++){var a=e[t],r=c[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(i(a.parts[n]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{for(var s=[],n=0;n<a.parts.length;n++)s.push(i(a.parts[n]));c[a.id]={id:a.id,refs:1,parts:s}}}}function n(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,a,r=document.querySelector("style["+v+'~="'+e.id+'"]');if(r){if(h)return f;r.parentNode.removeChild(r)}if(P){var i=g++;r=l||(l=n()),t=s.bind(null,r,i,!1),a=s.bind(null,r,i,!0)}else r=n(),t=o.bind(null,r),a=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else a()}}function s(e,t,a,r){var n=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var i=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function o(e,t){var a=t.css,r=t.media,n=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(v,t.id),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!p)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=a(7),c={},d=p&&(document.head||document.getElementsByTagName("head")[0]),l=null,g=0,h=!1,f=function(){},m=null,v="data-vue-ssr-id",P="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,n){h=a,m=n||{};var i=u(e,t);return r(i),function(t){for(var a=[],n=0;n<i.length;n++){var s=i[n],o=c[s.id];o.refs--,a.push(o)}t?(i=u(e,t),r(i)):i=[];for(var n=0;n<a.length;n++){var o=a[n];if(0===o.refs){for(var p=0;p<o.parts.length;p++)o.parts[p]();delete c[o.id]}}}};var b=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],r={},n=0;n<t.length;n++){var i=t[n],s=i[0],o=i[1],p=i[2],u=i[3],c={id:e+":"+n,css:o,media:p,sourceMap:u};r[s]?r[s].parts.push(c):a.push(r[s]={id:s,parts:[c]})}return a}},function(e,t){e.exports=function(e,t,a,r,n,i){var s,o=e=e||{},p=typeof e.default;"object"!==p&&"function"!==p||(s=e,o=e.default);var u="function"==typeof o?o.options:o;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),n&&(u._scopeId=n);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):r&&(c=r),c){var d=u.functional,l=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),l(e,t)}):u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:s,exports:o,options:u}}},function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[e.params.pageSizes?a("select",{directives:[{name:"model",rawName:"v-model",value:e.params.perSize,expression:"params.perSize"}],staticClass:"changeSize",attrs:{name:"pagesize",id:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.params,"perSize",t.target.multiple?a:a[0])},function(t){e.changePerSize()}]}},e._l(e.params.pageSizes,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t)+"条/每页")])})):e._e(),e._v(" "),a("button",{staticClass:"preButton",class:1==e.params.currentPage?"notAllowed":"",attrs:{disabled:1==e.params.currentPage},on:{click:e.prePage}},[a("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAAAAXNSR0IArs4c6QAAAh5JREFUOBGVlM9LG1EQx91V0WatNaQ55Zh7sbRBRBF/0KrJJkVaeiiElh5yi0dPHoLgyaun4CEH8WAENbtrrRpsD4VCSg9e+z/0VKK0+eFn1F1W3STbB5O3+958Zr47816Urv8YqVTqaa1WKyqK8lP1yyUSiWf1er2MfxTTFD9gMpmMNRqNo2azOYT/92AwONsRjMfjIzh/xh5hXzVN04vF4p+2UnVdH8X56AY6BpoXiPeuliDyxpEmmQYxIxqNJoHOBZLhKRV5E1TOAhxg3olEIu/y+fy/a+T69x6IvEkKYbKtAW0GAoEPZKq7IXm+JRVohiyWQNhGLBZ77wUJ6GSkuS/o0z7gAzKtm6a5yNwUJ69xBfJNc2zuYv2qqq4BLXk5u9dUqveShT2ByLDiB5IAPcjbYO4DWrYsa1UW/Qwpjl2x4Vwu1+MHEh+VTB+xc4ryplKpbGcymV4/8FVx+M5pemcABwiyT+/e0oa/7QI47XA3HsDkXL5uBzsHgGp+Ids8JodYr1aru9lstq9VViej7cBBGKPSn5D9kCCH4XB4oVAoXNj79nwPlA25TnzzIY9yM+Q6vUK2czPExxOUDfcFJnOZgnW+VgLKQPZzZB8jewj4lOOoG4ZRlT2nOPJyd5RKpR84z7D+G3iKIAfpdFpuTmup7iDIHibjCXCI9W+hUKjzn5UdANlPyFgGfszaVlupNiQzss+Ypsj8i7n7EnS+0Qej7kcMAAAAAElFTkSuQmCC",alt:""}})]),e._v(" "),a("ul",{staticClass:"pageWrap"},e._l(e.pageList,function(t){return a("li",{staticClass:"perPage",class:{activePage:t==e.params.currentPage},attrs:{"track-by":"$index"},on:{click:function(a){e.curPage(t)}}},[e._v(e._s(t))])})),e._v(" "),a("button",{staticClass:"nextButton",class:e.params.currentPage==Math.ceil(e.params.totalSize/e.params.perSize)?"notAllowed":"",attrs:{disabled:e.params.currentPage==Math.ceil(e.params.totalSize/e.params.perSize)},on:{click:e.nextPage}},[a("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaCAYAAACHD21cAAAAAXNSR0IArs4c6QAAAiFJREFUOBGNlM9LG1EQx7O7qf2xRdO/IZB7LTmUFlq1tobdVYTmUDA0p5yaY68lvXr0KB48CTYUaXYN/qgiQlGh0NJrzjnFFG1NbKGb9DMhG6Ju1h0Y3uzO+7z5vvdmVzEM40O73R6NRqPpUqn0LRLSVObpeNx13R0WeRCSi6ixWOwVkw+peo/xs2VZyTCwIpPS6fTdRqPhED7BT/EX5XL5iHGgidRIsVg803U9RbiNj+Bbpmk+ZBxoHVCywOfxeNwitPFhpG8i+7Hk/KwjtT+Ry+VuVKvVFcCXiqKcMRrI3u+fI/EVUF6yZ63ZbC4DzfHYUFXVdBxnT3Ke9aR6L2REtptMJl8TLuE6C6yz5wnJeeZb0UsCKAALjG+Qfa5p2gxNIgfoL9UDvRF4vtVqveX5Dz7LnjcCK3qgjHTVeyq/I/xL5WmtPxkUVyqVvUQi8Y85z1ngqe/h+C1QKBSiAPe7OTeU1O7drgLOyiEBG9eC3OkQdyqf3gxQkzu1bNveDQQFovk/UsHELzTCwD3m8/mbVFoTSFoPT/V3j2/FbDZ7q1arrSFvCuA3x5/i4r+wSM+ugMi7jbxPzJjEf7GnKSod9IhucAEUCHk2laQvAz/oHsi3d4e2coDGkHeCvEnkfb1cyXvuHE4mk9H5WZUFIvETeRNBkMCKQPV6fZP4EZXqwM9o4u+SDDIVaJEJAh0jbzwMJAuKVA2owjiGvB/yMoz9BwJM8ZrOIl5tAAAAAElFTkSuQmCC",alt:""}})]),e._v(" "),a("span",{staticClass:"jumpTip"},[e._v("跳至")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.jumpPage,expression:"jumpPage"}],staticClass:"jumpInput",attrs:{type:"text",onkeyup:"this.value=this.value.replace(/[^0-9]/g,'')",onafterpaste:"this.value=this.value.replace(/[^0-9]/g,'')"},domProps:{value:e.jumpPage},on:{change:e.changeCur,input:function(t){t.target.composing||(e.jumpPage=t.target.value)}}}),a("span",{staticClass:"jumpTip"},[e._v("页")])])},n=[],i={render:r,staticRenderFns:n};t.a=i}])});
//# sourceMappingURL=pagination.js.map