webpackHotUpdate("static/development/pages/en/downloads.js",{

/***/ "./pages/en/downloads.js":
/*!*******************************!*\
  !*** ./pages/en/downloads.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_downloads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/templates/downloads */ "./components/templates/downloads/index.js");

var _jsxFileName = "/Users/fatih/repos/goldendoor-next/pages/en/downloads.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var DownloadsPage = function DownloadsPage(_ref) {
  var data = _ref.data,
      language = _ref.language;
  return __jsx(_components_templates_downloads__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    language: language,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
};

DownloadsPage.getInitialProps = function _callee() {
  var language, res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          language = 'en';
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("".concat("http://goldendoor-api.narcissundtaurus.com/wp-json/gd/", "en/downloads")));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          json = _context.sent;
          return _context.abrupt("return", {
            data: json,
            language: language
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadsPage);

/***/ })

})
//# sourceMappingURL=downloads.js.7860cc2342bd29d619c2.hot-update.js.map