webpackHotUpdate("static/development/pages/en/uberuns.js",{

/***/ "./components/templates/uberuns/index.js":
/*!***********************************************!*\
  !*** ./components/templates/uberuns/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Hero */ "./components/Hero.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MehrLesen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MehrLesen */ "./components/MehrLesen.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/templates/uberuns/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/templates/uberuns/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      lang = _ref.lang;
  var story = data.fields.uber_uns_story;
  var philosophy = data.fields.uber_uns_philosophy;
  var extra_text_1 = data.fields.uber_uns_extra_text.extra_text_block_1;
  var extra_text_2 = data.fields.uber_uns_extra_text.extra_text_block_2;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "story story--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "story__img backgroundImg",
    style: {
      backgroundImage: "url(" + story.story_bild + ")"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    className: "story__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    className: "title__lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, story.story_titel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(story.story_inhalt), lang === 'de' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/referenzen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "ZUM REFEREZEN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/en/referenzen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "TO REFERENCES",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))))), __jsx("div", {
    className: "extratext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    className: "story story--left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "story__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h2", {
    className: "title__lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, philosophy.philosophy_titel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(philosophy.philosophy_inhalt), lang === 'de' ? __jsx("a", {
    href: "/kontakt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "ZUM KONTAKT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })) : __jsx("a", {
    href: "/en/kontakt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "TO CONTACT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), __jsx("div", {
    className: "story__img backgroundImg",
    style: {
      backgroundImage: "url(" + philosophy.philosophy_bild + ")"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))));
});
;

/***/ })

})
//# sourceMappingURL=uberuns.js.69015cefa9deb86a1b1c.hot-update.js.map