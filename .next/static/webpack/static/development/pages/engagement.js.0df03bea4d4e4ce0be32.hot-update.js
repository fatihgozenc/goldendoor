webpackHotUpdate("static/development/pages/engagement.js",{

/***/ "./components/templates/engagement/index.js":
/*!**************************************************!*\
  !*** ./components/templates/engagement/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/templates/engagement/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description
  }), __jsx("div", {
    className: "page__title page__title--downloads"
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slug: data.slug,
    title: data.title
  }), __jsx("h1", null, data.fields.eroffnungstitel)), __jsx("div", {
    className: "engagement"
  }, data.fields.engagement_eintrage.map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "engagement__item"
    }, __jsx("div", {
      className: "engagement__item--img backgroundImg",
      style: {
        backgroundImage: "url(" + item.info.bild + ")"
      }
    }), __jsx("div", {
      className: "engagement__item--info"
    }, __jsx("h3", null, item.info.titel), __jsx("h4", null, item.info.subtitel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(item.inhalt)));
  })));
});
;

/***/ })

})
//# sourceMappingURL=engagement.js.0df03bea4d4e4ce0be32.hot-update.js.map