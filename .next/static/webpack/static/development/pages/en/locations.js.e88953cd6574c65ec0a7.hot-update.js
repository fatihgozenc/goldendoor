webpackHotUpdate("static/development/pages/en/locations.js",{

/***/ "./pages/en/locations/index.js":
/*!*************************************!*\
  !*** ./pages/en/locations/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _components_templates_locations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/templates/locations */ "./components/templates/locations/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var LocationsPage = function LocationsPage(_ref) {
  var data = _ref.data,
      lang = _ref.lang;
  return __jsx(_components_templates_locations__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    lang: lang
  });
};

LocationsPage.getInitialProps = function _callee() {
  var lang, res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lang = 'en';
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API_HOST"], "en/locations")));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          json = _context.sent;
          return _context.abrupt("return", {
            data: json,
            lang: lang
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LocationsPage);

/***/ })

})
//# sourceMappingURL=locations.js.e88953cd6574c65ec0a7.hot-update.js.map