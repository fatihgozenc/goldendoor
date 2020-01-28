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
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Icon */ "./components/Icon.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slider.scss */ "./components/templates/location/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.scss */ "./components/templates/location/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/fatih/repos/goldendoor-next/components/templates/location/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../MapContainer */ "./components/MapContainer.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../MapContainer */ "./components/MapContainer.js")];
    },
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  var infoPanel = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  var changePanel = function changePanel() {
    infoPanel.current.classList.toggle('changePanel');
  };

  var karteWrapper = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  var openMap = function openMap(e) {
    karteWrapper.current.classList.add('openKarte');
  };

  var closeMap = function closeMap(e) {
    karteWrapper.current.classList.remove('openKarte');
  };

  console.log(data.slug);
  var kontaktHref = data.lang === 'de' ? '/kontakt' : '/en/kontakt';
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var goToContact = function goToContact(e) {
    e.preventDefault();
    router.push({
      pathname: kontaktHref,
      query: {
        locationName: data.title
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("h1", {
    className: "seo__hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, data.title), __jsx("div", {
    className: "page__title page__title--singleloc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "singleloc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__info--wrapper",
    ref: infoPanel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__info--front",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: data.fields.location_info.location_logo,
    alt: "".concat(data.title, " Logo"),
    className: "singleloc__info--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("span", {
    className: "singleloc__info--type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, data.fields.subtitel), __jsx("div", {
    className: "singleloc__info--buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    href: kontaktHref,
    onClick: goToContact,
    className: "singleloc__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "anfragen",
    name: data.fields.buttongroup.anfragen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), data.slug != 'burgermeister' && __jsx("a", {
    href: data.fields.location_info.location_factsheet,
    target: "_blank",
    className: "singleloc__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "factsheet",
    name: data.fields.buttongroup.datenblatt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx("a", {
    href: "#karte",
    onClick: openMap,
    className: "singleloc__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "karte",
    name: data.fields.buttongroup.karte,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx("div", {
    className: "singleloc__info--socialmedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("a", {
    href: data.fields.social_media.facebook,
    className: "socialmedia__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), __jsx("a", {
    href: data.fields.social_media.instagram,
    className: "socialmedia__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), __jsx("a", {
    href: "http://".concat(data.fields.location_info.location_webseite),
    className: "singleloc__info--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, data.fields.location_info.location_webseite), __jsx("button", {
    onClick: changePanel,
    className: "singleloc__info--desc golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, data.fields.buttongroup.beschreibung, " > "), __jsx("a", {
    href: "#gallery",
    className: "singleloc__info--desc singleloc__gallerybutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u25BE")), __jsx("div", {
    className: "singleloc__info--side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(data.content)), data.slug != 'burgermeister' && __jsx("div", {
    className: "singleloc__info--bullets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(data.fields.location_info.bulletpoints)), __jsx("button", {
    onClick: changePanel,
    className: "singleloc__info--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))))), __jsx("div", {
    className: "singleloc__detail",
    id: "gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselProvider"], {
    naturalSlideWidth: 220,
    naturalSlideHeight: 120,
    totalSlides: data.fields.location_gallery.length,
    isPlaying: true,
    interval: 5000,
    infinite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_9__["Slider"], {
    className: "singleloc__gallery--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, data.fields.location_gallery.map(function (item, imageKey) {
    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_9__["Slide"], {
      key: imageKey,
      index: imageKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("img", {
      width: "100%",
      src: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }));
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_9__["DotGroup"], {
    className: "gallery--nav gallery--nav-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))), data.slug != 'burgermeister' && __jsx("div", {
    className: "singleloc__detail--data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data.fields.technische_daten).map(function (locData, key) {
    return __jsx("div", {
      key: key,
      className: "singleloc__detail--dataitem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("span", {
      className: "dataitem--key",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, locData.name), __jsx("span", {
      className: "dataitem--value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, locData.option));
  })))), __jsx("div", {
    ref: karteWrapper,
    className: "location__karte--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("div", {
    className: "location__karte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(MapContainer, {
    data: data.fields.karte_koordinaten,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("div", {
    className: "location__karte--close",
    onClick: closeMap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })))));
});
;

/***/ })

})
//# sourceMappingURL=[id].js.9f2824959ee456144b6c.hot-update.js.map