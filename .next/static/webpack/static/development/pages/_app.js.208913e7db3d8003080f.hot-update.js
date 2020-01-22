webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/layout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Newsletter = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Newsletter */ "./components/layout/Newsletter.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Newsletter */ "./components/layout/Newsletter.js")];
    },
    modules: ['./Newsletter']
  }
});


var Layout = function Layout(props) {
  console.log(props.pathname);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logo: props.data.footer.info.logo,
    data: props.data.header,
    lang: props.data.lang,
    pathname: props.pathname
  }), props.children, props.pathname !== '/en/datenschutz' || props.pathname !== '/datenschutz' || props.pathname !== '/impressum' || props.pathname !== '/en/impressum' && __jsx(Newsletter, {
    data: props.data.newsletter
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: props.data.footer
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.208913e7db3d8003080f.hot-update.js.map