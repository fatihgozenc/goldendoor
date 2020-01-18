webpackHotUpdate("static/development/pages/en.js",{

/***/ "./pages/en/index.js":
/*!***************************!*\
  !*** ./pages/en/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _components_templates_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/templates/home */ "./components/templates/home/index.js");

var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/pages/en/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Index = function Index(_ref) {
  var data = _ref.data;
  return __jsx(_components_templates_home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

Index.getInitialProps = function _callee() {
  var res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "en/home")));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          json = _context.sent;
          return _context.abrupt("return", {
            data: json
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=en.js.48f25c6a3de493711a8a.hot-update.js.map