webpackHotUpdate("static/development/pages/en/locations/[id].js",{

/***/ "./components/templates/location/index.js":
/*!************************************************!*\
  !*** ./components/templates/location/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icon */ "./components/Icon.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider.scss */ "./components/templates/location/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./components/templates/location/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  console.log(data);
  var infoPanel = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  var changePanel = function changePanel() {
    infoPanel.current.classList.toggle('changePanel');
  };

  var karteWrapper = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  var openMap = function openMap(e) {
    console.log(e.currentTarget);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    className: "seo__hidden"
  }, data.title), __jsx("div", {
    className: "page__title page__title--singleloc"
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slug: data.slug,
    title: data.title
  }), __jsx("h1", null, data.title)), __jsx("div", {
    className: "singleloc"
  }, __jsx("div", {
    className: "singleloc__info"
  }, __jsx("div", {
    className: "singleloc__info--wrapper",
    ref: infoPanel
  }, __jsx("div", {
    className: "singleloc__info--front"
  }, __jsx("img", {
    src: data.fields.location_info.location_logo,
    alt: "".concat(data.title, " Logo"),
    className: "singleloc__info--img"
  }), __jsx("span", {
    className: "singleloc__info--type"
  }, data.fields.subtitel), __jsx("div", {
    className: "singleloc__info--buttons"
  }, __jsx("a", {
    href: "/kontakt",
    className: "singleloc__button"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "anfragen",
    name: data.fields.buttongroup.anfragen
  })), __jsx("a", {
    href: data.fields.location_info.location_factsheet,
    className: "singleloc__button"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "factsheet",
    name: data.fields.buttongroup.datenblatt
  })), __jsx("a", {
    href: "#karte",
    onClick: openMap,
    className: "singleloc__button"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "karte",
    name: data.fields.buttongroup.karte
  }))), __jsx("div", {
    className: "singleloc__info--socialmedia"
  }, __jsx("a", {
    href: data.fields.social_media.facebook,
    className: "socialmedia__button"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "facebook"
  })), __jsx("a", {
    href: data.fields.social_media.instagram,
    className: "socialmedia__button"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "instagram"
  }))), __jsx("a", {
    href: "http://".concat(data.fields.location_info.location_webseite),
    className: "singleloc__info--link"
  }, data.fields.location_info.location_webseite), __jsx("button", {
    onClick: changePanel,
    className: "singleloc__info--desc golden__button"
  }, data.fields.buttongroup.beschreibung, " > "), __jsx("a", {
    href: "#gallery",
    className: "singleloc__info--desc singleloc__gallerybutton"
  }, "\u25BE")), __jsx("div", {
    className: "singleloc__info--side"
  }, __jsx("p", null, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.content)), __jsx("div", {
    className: "singleloc__info--bullets"
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.fields.location_info.bulletpoints)), __jsx("button", {
    onClick: changePanel,
    className: "singleloc__info--desc"
  }, " ", __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "back"
  }), " ")))), __jsx("div", {
    className: "singleloc__detail",
    id: "gallery"
  }, __jsx("div", {
    className: "singleloc__gallery"
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselProvider"], {
    naturalSlideWidth: 220,
    naturalSlideHeight: 120,
    totalSlides: data.fields.location_gallery.length,
    isPlaying: true,
    interval: 5000,
    infinite: true
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__["Slider"], {
    className: "singleloc__gallery--wrapper"
  }, data.fields.location_gallery.map(function (item, imageKey) {
    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__["Slide"], {
      key: imageKey,
      index: imageKey
    }, __jsx("img", {
      width: "100%",
      src: item
    }));
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__["DotGroup"], {
    className: "gallery--nav gallery--nav-location"
  }))), __jsx("div", {
    className: "singleloc__detail--data"
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data.fields.technische_daten).map(function (locData, key) {
    return __jsx("div", {
      key: key,
      className: "singleloc__detail--dataitem"
    }, __jsx("span", {
      className: "dataitem--key"
    }, locData.name), __jsx("span", {
      className: "dataitem--value"
    }, locData.option));
  })))), __jsx("div", {
    ref: karteWrapper,
    className: "location__karte--wrapper"
  }));
});
;

/***/ })

})
//# sourceMappingURL=[id].js.e5d20bbe0da854adadbd.hot-update.js.map