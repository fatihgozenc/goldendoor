webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/Footer.js":
/*!*************************************!*\
  !*** ./components/layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-obfuscate */ "./node_modules/react-obfuscate/dist/obfuscate.js");
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_obfuscate__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/layout/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Footer = function Footer(_ref) {
  var data = _ref.data;
  return __jsx("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "footer__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    id: "footer--logo",
    src: data.info.logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.info.address.berlin)), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.info.address.dresden)), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, console.log(data.info.telefon), __jsx(react_obfuscate__WEBPACK_IMPORTED_MODULE_3___default.a, {
    tel: data.info.telefon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(react_obfuscate__WEBPACK_IMPORTED_MODULE_3___default.a, {
    tel: data.info.email.toLowerCase(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "footer__routes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "footer__routes--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, data.routes.map(function (route, key) {
    while (key <= 3) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: route.id,
        href: route.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("a", {
        className: "footer__routes--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, route.title));
    }
  })), __jsx("div", {
    className: "footer__routes--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, data.routes.map(function (route, key) {
    while (key >= 4) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: route.id,
        href: route.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("a", {
        className: "footer__routes--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, route.title));
    }
  }), __jsx("div", {
    className: "footer__routes--item copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, data.info.copyright))))), __jsx("div", {
    className: "footer__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "footer__submarken",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    id: "submarken--text",
    className: "footer__submarken--item ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, data.submarken.submarke_text), __jsx("div", {
    className: "footer__submarken--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "footer__submarken--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, data.submarken.submarke_logogroup.map(function (marke, key) {
    while (key < 4) {
      return __jsx("div", {
        key: key,
        className: "footer__submarken--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: marke.route,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("img", {
        src: marke.logo,
        alt: "Submarke Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))));
    }
  })), __jsx("div", {
    className: "footer__submarken--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, data.submarken.submarke_logogroup.map(function (marke, key) {
    while (key > 3 && key < 8) {
      return __jsx("div", {
        key: key,
        className: "footer__submarken--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: marke.route,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("img", {
        src: marke.logo,
        alt: "Submarke Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))));
    }
  }))), __jsx("div", {
    className: "footer__submarken--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, data.submarken.submarke_logogroup.map(function (marke, key) {
    while (key > 7) {
      return __jsx("div", {
        key: key,
        className: "footer__submarken--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: marke.route,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("img", {
        src: marke.logo,
        alt: "Submarke Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=_app.js.84df132d134ae1137dcb.hot-update.js.map