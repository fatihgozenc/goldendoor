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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Hero */ "./components/Hero.js");
/* harmony import */ var _MehrLesen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MehrLesen */ "./components/MehrLesen.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/templates/referenzen/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/templates/referenzen/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  // const pageCount = new Array(data.page_count + 1).fill(pageCount);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    id: "content",
    className: "pool pool--home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, data.children.map(function (route, key) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: key,
      href: route.lang === 'en' ? "/en/referenzen/".concat(route.slug) : "/referenzen/".concat(route.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      className: "home__route",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "home__route--wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "home__route--img backgroundImg",
      style: {
        backgroundImage: "url(" + route.image + ")"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("div", {
      className: "home__route--content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h3", {
      className: "title__lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, route.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, route.excerpt), __jsx("span", {
      className: "home__route--link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: data.read_more,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))))));
  }), __jsx("div", {
    className: "pool__pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, new Array(data.page_count + 1).fill(data.page_count).map(function (item, key) {
    if (key === 1) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: key,
        href: data.lang === 'en' ? "/en/referenzen" : "/referenzen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("a", {
        className: data.page_number == key ? 'pageActive' : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, key));
    } else if (key > 1) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: key,
        href: data.lang === 'en' ? "/en/referenzen/page/".concat(key) : "/referenzen/page/".concat(key),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("a", {
        className: data.page_number == key ? 'pageActive' : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, key));
    } else {
      return null;
    }
  }))));
});
;

/***/ })

})
//# sourceMappingURL=referenzen.js.ade974fcaefd1e81c4df.hot-update.js.map