webpackHotUpdate("static/development/pages/en/referenzen.js",{

/***/ "./components/templates/referenzen/index.js":
/*!**************************************************!*\
  !*** ./components/templates/referenzen/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Hero */ "./components/Hero.js");
/* harmony import */ var _MehrLesen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MehrLesen */ "./components/MehrLesen.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/templates/referenzen/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: data.main.fields.seo.title,
    description: data.main.fields.seo.description
  }), __jsx(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data.main
  }), __jsx("div", {
    id: "content",
    className: "pool pool--home"
  }, data.children.map(function (route, key) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: key,
      href: route.lang === 'en' ? "/en/referenzen/".concat(route.slug) : "/referenzen/".concat(route.slug)
    }, __jsx("a", {
      className: "home__route"
    }, __jsx("div", {
      className: "home__route--wrapper"
    }, __jsx("div", {
      className: "home__route--img backgroundImg",
      style: {
        backgroundImage: "url(" + route.image + ")"
      }
    }), __jsx("div", {
      className: "home__route--content"
    }, __jsx("h3", {
      className: "title__lg"
    }, route.title), __jsx("p", null, route.excerpt), __jsx("span", {
      className: "home__route--link"
    }, __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: data.read_more
    }))))));
  }), __jsx("div", {
    className: "pool__pagination"
  }, new Array(data.page_count + 1).fill(data.page_count).map(function (item, key) {
    if (key === 1) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: key,
        href: data.lang === 'en' ? "/en/referenzen" : "/referenzen"
      }, __jsx("a", {
        className: data.page_number == key ? 'pageActive' : null
      }, key));
    } else if (key > 1) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: key,
        href: data.lang === 'en' ? "/en/referenzen/page/".concat(key) : "/referenzen/page/".concat(key)
      }, __jsx("a", {
        className: data.page_number == key ? 'pageActive' : null
      }, key));
    } else {
      return null;
    }
  }))));
});
;

/***/ })

})
//# sourceMappingURL=referenzen.js.635950d71c02e5378386.hot-update.js.map