webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/opening/Opening.js":
/*!***************************************!*\
  !*** ./components/opening/Opening.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ "./components/opening/Scene.js");
/* harmony import */ var _Galaxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Galaxy */ "./components/opening/Galaxy.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/opening/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/opening/Opening.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Opening = function Opening(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "scene",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "scene-landscape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_Galaxy__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_Scene__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "home__slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselProvider"], {
    naturalSlideWidth: 220,
    naturalSlideHeight: 125,
    totalSlides: data.length,
    isPlaying: true,
    interval: 9000,
    infinite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["Slider"], {
    className: "home__slider--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.map(function (item, key) {
    return __jsx("a", {
      href: item.link,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["Slide"], {
      index: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item.titel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(item.inhalt)));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Opening);

/***/ })

})
//# sourceMappingURL=index.js.94cb08a61a846e594a90.hot-update.js.map