webpackHotUpdate("static/development/pages/en/locations.js",{

/***/ "./components/templates/locations/index.js":
/*!*************************************************!*\
  !*** ./components/templates/locations/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/templates/locations/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      lang = _ref.lang;
  // const pageUrl = window.location.pathname;
  console.log(lan);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "page__title"
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slug: data.slug,
    title: data.title
  }), __jsx("h1", null, data.title)), __jsx("div", {
    className: "locations"
  }, data.fields.location_infos.map(function (location, key) {
    return location.location_info.sublocations === false ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: key,
      href: "/locations/".concat(location.location_info.location_name.toLowerCase())
    }, __jsx("a", {
      className: "location__item"
    }, __jsx("h2", null, location.location_info.location_name), __jsx("div", {
      className: "location__item--wrapper"
    }, __jsx("div", {
      className: "location__item--img backgroundImg",
      style: {
        backgroundImage: "url(" + location.location_info.location_bild + ")"
      }
    })))) : __jsx("button", {
      key: key,
      className: "location__item"
    }, __jsx("h2", null, location.location_info.location_name), __jsx("div", {
      className: "location__item--wrapper"
    }, __jsx("div", {
      className: "location__item--img backgroundImg",
      style: {
        backgroundImage: "url(" + location.location_info.location_bild + ")"
      }
    }), __jsx("div", {
      className: "location__item--subitemwrapper"
    }, location.location_info.sublocations.map(function (item, subKey) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: subKey,
        href: "/locations".concat(item.link)
      }, __jsx("a", {
        className: "location__item--subitem"
      }, item.name));
    }))));
  }), __jsx("a", {
    className: "ubersicht",
    href: "#daten"
  }, data.fields.location_scroll_text, __jsx("span", null, "\u25BE"))), __jsx("div", {
    id: "daten",
    className: "locations__daten"
  }, data.fields.location_infos.map(function (info, infoKey) {
    return __jsx("div", {
      key: "1".concat(infoKey),
      className: "locations__daten--item"
    }, __jsx("img", {
      src: info.location_info.location_logo,
      alt: "".concat(info.location_info.location_name, " Logo")
    }), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(info.technische_daten).map(function (locData, locKey) {
      return __jsx("div", {
        key: locKey,
        className: "locations__daten--itemdata"
      }, __jsx("h5", null, locData.key), __jsx("p", null, locData.value));
    }));
  })));
});
;

/***/ })

})
//# sourceMappingURL=locations.js.ce791e9b15d12a583c98.hot-update.js.map