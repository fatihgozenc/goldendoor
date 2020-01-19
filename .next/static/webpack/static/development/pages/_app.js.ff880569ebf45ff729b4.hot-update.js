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
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/layout/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Footer = function Footer(_ref) {
  var data = _ref.data;
  return __jsx("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "footer__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    id: "footer--logo",
    src: data.info.logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.info.address.berlin)), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.info.address.dresden)), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    href: "tel:".concat(data.info.telefon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, data.info.telefon), __jsx("a", {
    href: "mailto:".concat(data.info.email.toLowerCase()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, data.info.email)), __jsx("div", {
    className: "footer__block__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "footer__routes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "footer__routes--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, data.routes.map(function (route, key) {
    while (key <= 3) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: route.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("a", {
        key: route.id,
        className: "footer__routes--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, route.title));
    }
  })), __jsx("div", {
    className: "footer__routes--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, data.routes.map(function (route, key) {
    while (key >= 4) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: route.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("a", {
        key: route.id,
        className: "footer__routes--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, route.title));
    }
  }), __jsx("div", {
    className: "footer__routes--item copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, data.info.copyright))))), __jsx("div", {
    className: "footer__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "footer__submarken",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    id: "submarken--text",
    className: "footer__submarken--item ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, data.submarken.submarke_text), __jsx("div", {
    className: "footer__submarken--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "footer__submarken--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, data.submarken.submarke_logogroup.map(function (marke, key) {
    while (key < 4) {
      return __jsx("div", {
        key: key,
        className: "footer__submarken--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("a", {
        href: marke.route,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("img", {
        src: marke.logo,
        alt: "Submarke Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })));
    }
  })), __jsx("div", {
    className: "footer__submarken--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, data.submarken.submarke_logogroup.map(function (marke, key) {
    while (key > 3 && key < 8) {
      return __jsx("div", {
        key: key,
        className: "footer__submarken--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("a", {
        href: marke.route,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("img", {
        src: marke.logo,
        alt: "Submarke Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })));
    }
  }))), __jsx("div", {
    className: "footer__submarken--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, data.submarken.submarke_logogroup.map(function (marke, key) {
    while (key > 7) {
      return __jsx("div", {
        key: key,
        className: "footer__submarken--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("a", {
        href: marke.route,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("img", {
        src: marke.logo,
        alt: "Submarke Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=_app.js.ff880569ebf45ff729b4.hot-update.js.map