webpackJsonp([10],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".page-infinite-loading[data-v-4453682e]{position:absolute;bottom:1.6rem;margin-left:4.6rem}.hotpost[data-v-4453682e]{padding-bottom:3rem}.article-list[data-v-4453682e]{position:absolute;top:6.7288888rem;padding-bottom:3rem}.mint-swipe[data-v-4453682e]{position:absolute;top:1.3333333rem;left:0;right:0;height:5.4333333rem;color:#fff;font-size:.4rem}.mint-swipe .mint-swipe-item[data-v-4453682e]{background-size:100% 100%}.mint-swipe .mint-swipe-item .slide[data-v-4453682e]{color:#fff}.mint-swipe .mint-swipe-item .swiper-desc[data-v-4453682e]{font-weight:500;font-size:.466667rem;margin-top:4.533333rem;margin-left:.36667rem}", "", {"version":3,"sources":["/Users/zhangyu/Documents/github/tencent-sports-master/src/components/community/hotpost.vue"],"names":[],"mappings":"AACA,wCACE,kBAAmB,AACnB,cAAe,AACf,kBAAoB,CACrB,AACD,0BACE,mBAAqB,CACtB,AACD,+BACE,kBAAmB,AACnB,iBAAkB,AAClB,mBAAqB,CACtB,AACD,6BACE,kBAAmB,AACnB,iBAAkB,AAClB,OAAQ,AACR,QAAS,AACT,oBAAqB,AACrB,WAAY,AACZ,eAAkB,CACnB,AACD,8CACE,yBAA2B,CAC5B,AACD,qDACE,UAAY,CACb,AACD,2DACE,gBAAiB,AACjB,qBAAuB,AACvB,uBAAwB,AACxB,qBAAwB,CACzB","file":"hotpost.vue","sourcesContent":["\n.page-infinite-loading[data-v-4453682e] {\n  position: absolute;\n  bottom: 1.6rem;\n  margin-left: 4.6rem;\n}\n.hotpost[data-v-4453682e] {\n  padding-bottom: 3rem;\n}\n.article-list[data-v-4453682e] {\n  position: absolute;\n  top: 6.7288888rem;\n  padding-bottom: 3rem;\n}\n.mint-swipe[data-v-4453682e] {\n  position: absolute;\n  top: 1.3333333rem;\n  left: 0;\n  right: 0;\n  height: 5.4333333rem;\n  color: #fff;\n  font-size: 0.4rem;\n}\n.mint-swipe .mint-swipe-item[data-v-4453682e] {\n  background-size: 100% 100%;\n}\n.mint-swipe .mint-swipe-item .slide[data-v-4453682e] {\n  color: #fff;\n}\n.mint-swipe .mint-swipe-item .swiper-desc[data-v-4453682e] {\n  font-weight: 500;\n  font-size: 0.466667rem;\n  margin-top: 4.533333rem;\n  margin-left: 0.36667rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("f5410d7c", content, true);

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hotpost"
  }, [_c('mt-swipe', {
    staticClass: "mt-swipe",
    attrs: {
      "auto": 4000
    }
  }, _vm._l((_vm.swiperItems), function(swiperItem) {
    return _c('mt-swipe-item', {
      staticClass: "slide",
      style: ({
        backgroundImage: 'url(' + swiperItem.img + ')'
      })
    }, [_c('p', {
      staticClass: "swiper-desc"
    }, [_vm._v(_vm._s(swiperItem.desc))])])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "infinite-scroll",
      rawName: "v-infinite-scroll",
      value: (_vm.loadMore),
      expression: "loadMore"
    }],
    staticClass: "article-list page-infinite-list",
    attrs: {
      "infinite-scroll-disabled": "loading",
      "infinite-scroll-distance": "50"
    }
  }, [_vm._l((_vm.articleArr), function(article) {
    return _c('community-article', {
      staticClass: "community-article page-infinite-listitem",
      attrs: {
        "article": article
      }
    })
  }), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "page-infinite-loading"
  }, [_c('mt-spinner', {
    attrs: {
      "type": "fading-circle"
    }
  })], 1)], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(148)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(189),
  /* scopeId */
  "data-v-4453682e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['article']
});

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(true);
// imports


// module
exports.push([module.i, ".article[data-v-57cc774c]{background-color:#fff;padding:.4rem .4rem .02rem .2rem;position:relative}.article .header h2[data-v-57cc774c]{color:#333;font-size:.43666666rem;margin-bottom:.2rem}.article .desc[data-v-57cc774c]{font-size:.3333333rem;color:#818597;margin-bottom:.3rem}.article .content .content__img--double[data-v-57cc774c]{display:block;float:left;width:2.96rem;margin-right:.1666667rem;margin-bottom:.166667rem;height:2.3333rem}.article .content .content__img[data-v-57cc774c]{width:5.2rem;height:4.3333rem;margin-bottom:.166667rem}.article .content[data-v-57cc774c]:after{content:\"\";display:table;visibility:hidden;clear:both}.article .footer[data-v-57cc774c]{font-size:.3rem}.article .footer .article__author--left[data-v-57cc774c]{float:left}.article .footer .article__author--left p[data-v-57cc774c]{color:#a7aaab;margin-top:.1rem;margin-bottom:.2rem}.article .footer .article__author--left p .author__name[data-v-57cc774c]{margin-right:.1rem;color:#3466f6}.article .footer .article__author--left p .author__posi[data-v-57cc774c]{margin-left:.1rem;color:#3466f6}.article .footer .article__commit--right[data-v-57cc774c]{margin-top:.1rem;float:right;color:#a7aaab}.article .footer[data-v-57cc774c]:after{content:\"\";display:table;visibility:hidden;clear:both}.article[data-v-57cc774c]:after{position:absolute;content:\"\";height:1px;width:100%;transform:scaleY(.5);background-color:#edeff2}", "", {"version":3,"sources":["/Users/zhangyu/Documents/github/tencent-sports-master/src/components/public/communityArticle.vue"],"names":[],"mappings":"AACA,0BACE,sBAAuB,AACvB,iCAAsC,AACtC,iBAAmB,CACpB,AACD,qCACE,WAAY,AACZ,uBAAyB,AACzB,mBAAsB,CACvB,AACD,gCACE,sBAAwB,AACxB,cAAe,AACf,mBAAsB,CACvB,AACD,yDACE,cAAe,AACf,WAAY,AACZ,cAAe,AACf,yBAA2B,AAC3B,yBAA2B,AAC3B,gBAAkB,CACnB,AACD,iDACE,aAAc,AACd,iBAAkB,AAClB,wBAA2B,CAC5B,AACD,yCACE,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,UAAY,CACb,AACD,kCACE,eAAkB,CACnB,AACD,yDACE,UAAY,CACb,AACD,2DACE,cAAe,AACf,iBAAmB,AACnB,mBAAsB,CACvB,AACD,yEACE,mBAAqB,AACrB,aAAe,CAChB,AACD,yEACE,kBAAoB,AACpB,aAAe,CAChB,AACD,0DACE,iBAAmB,AACnB,YAAa,AACb,aAAe,CAChB,AACD,wCACE,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,UAAY,CACb,AACD,gCACE,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,WAAY,AACZ,qBAAuB,AACvB,wBAA0B,CAC3B","file":"communityArticle.vue","sourcesContent":["\n.article[data-v-57cc774c] {\n  background-color: #fff;\n  padding: 0.4rem 0.4rem 0.02rem 0.2rem;\n  position: relative;\n}\n.article .header h2[data-v-57cc774c] {\n  color: #333;\n  font-size: 0.43666666rem;\n  margin-bottom: 0.2rem;\n}\n.article .desc[data-v-57cc774c] {\n  font-size: 0.3333333rem;\n  color: #818597;\n  margin-bottom: 0.3rem;\n}\n.article .content .content__img--double[data-v-57cc774c] {\n  display: block;\n  float: left;\n  width: 2.96rem;\n  margin-right: 0.1666667rem;\n  margin-bottom: 0.166667rem;\n  height: 2.3333rem;\n}\n.article .content .content__img[data-v-57cc774c] {\n  width: 5.2rem;\n  height: 4.3333rem;\n  margin-bottom: 0.166667rem;\n}\n.article .content[data-v-57cc774c]:after {\n  content: '';\n  display: table;\n  visibility: hidden;\n  clear: both;\n}\n.article .footer[data-v-57cc774c] {\n  font-size: 0.3rem;\n}\n.article .footer .article__author--left[data-v-57cc774c] {\n  float: left;\n}\n.article .footer .article__author--left p[data-v-57cc774c] {\n  color: #a7aaab;\n  margin-top: 0.1rem;\n  margin-bottom: 0.2rem;\n}\n.article .footer .article__author--left p .author__name[data-v-57cc774c] {\n  margin-right: 0.1rem;\n  color: #3466f6;\n}\n.article .footer .article__author--left p .author__posi[data-v-57cc774c] {\n  margin-left: 0.1rem;\n  color: #3466f6;\n}\n.article .footer .article__commit--right[data-v-57cc774c] {\n  margin-top: 0.1rem;\n  float: right;\n  color: #a7aaab;\n}\n.article .footer[data-v-57cc774c]:after {\n  content: '';\n  display: table;\n  visibility: hidden;\n  clear: both;\n}\n.article[data-v-57cc774c]:after {\n  position: absolute;\n  content: '';\n  height: 1px;\n  width: 100%;\n  transform: scaleY(0.5);\n  background-color: #edeff2;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("be216494", content, true);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  "data-v-57cc774c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-link', {
    attrs: {
      "to": _vm.article.url
    }
  }, [_c('div', {
    staticClass: "article"
  }, [_c('header', {
    staticClass: "header"
  }, [_c('h2', [_vm._v(_vm._s(_vm.article.title))])]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("\n      " + _vm._s(_vm.article.desc) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._l((_vm.article.imgArr), function(img) {
    return (_vm.article.imgArr.length <= 1) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (img),
        expression: "img"
      }],
      staticClass: "content__img",
      attrs: {
        "alt": ""
      }
    }) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.article.imgArr), function(img) {
    return (_vm.article.imgArr.length > 1) ? _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (img),
        expression: "img"
      }],
      staticClass: "content__img--double",
      attrs: {
        "alt": ""
      }
    }) : _vm._e()
  })], 2), _vm._v(" "), _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "article__author--left"
  }, [_c('p', [_c('span', {
    staticClass: "author__name"
  }, [_vm._v(_vm._s(_vm.article.author))]), _vm._v("来自"), _c('span', {
    staticClass: "author__posi"
  }, [_vm._v(_vm._s(_vm.article.posi))])])]), _vm._v(" "), _c('div', {
    staticClass: "article__commit--right"
  }, [_vm._v("\n        211\n      ")])])])])
},staticRenderFns: []}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_communityArticle__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_communityArticle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_communityArticle__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  // axios加载文章
  mounted() {
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/swiper').then(response => {
      // console.log(response.data.swiper)
      this.swiperItems = response.data.swiper;
    }).catch(function (error) {
      console.log(error);
    });
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/article').then(response => {
      this.articleArr = response.data.articles;
    }).catch(function (error) {
      console.log(error);
    });
  },
  data() {
    return {
      swiperItems: [],
      articleArr: [],
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 1000
    };
  },
  methods: {
    // 加载更多
    loadMore() {
      this.loading = true;
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/article1').then(response => {
        response.data.articles.map(item => {
          this.articleArr.push(item);
          this.loading = false;
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  components: {
    communityArticle: __WEBPACK_IMPORTED_MODULE_0__public_communityArticle___default.a
  }
});

/***/ })

});
//# sourceMappingURL=10.373bef87f957de7d0317.js.map