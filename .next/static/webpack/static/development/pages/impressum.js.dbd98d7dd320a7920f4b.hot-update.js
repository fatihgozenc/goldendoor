webpackHotUpdate("static/development/pages/impressum.js",{

/***/ "./components/templates/datenschutz/index.js":
false,

/***/ "./pages/impressum.js":
/*!****************************!*\
  !*** ./pages/impressum.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _components_templates_impressum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/templates/impressum */ "./components/templates/impressum/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var ImpressumPage = function ImpressumPage(_ref) {
  var data = _ref.data;
  return __jsx(_components_templates_impressum__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data
  });
};

ImpressumPage.getInitialProps = function _callee() {
  var res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "de/impressum")));

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

/* harmony default export */ __webpack_exports__["default"] = (ImpressumPage);

/***/ })

})
//# sourceMappingURL=impressum.js.dbd98d7dd320a7920f4b.hot-update.js.map