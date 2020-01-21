module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+lMf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F9Bs");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (function ({
  data,
  className,
  entrance
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `hero ${className}`
  }, __jsx("div", {
    className: "hero__img backgroundImg",
    style: {
      backgroundImage: "url(" + data.image + ")"
    }
  }), __jsx("div", {
    className: "hero__opening"
  }, __jsx("div", {
    className: "hero__opening--title"
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    slug: data.slug,
    title: data.title
  }), __jsx("h1", null, entrance ? entrance : data.title)), __jsx("div", {
    className: "hero__opening--excerpt"
  }, __jsx("p", null, data.content), __jsx("a", {
    className: "hero__scroll scroller",
    href: "#content"
  }, data.scroll, __jsx("span", null, "\u25BE"))))));
});

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ETPu");


/***/ }),

/***/ "9Ksj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MehrLesen = ({
  name
}) => {
  return __jsx("div", {
    className: "mehrlesen"
  }, __jsx("span", {
    className: "mehrlesen_text"
  }, name, "\xA0\xA0"), __jsx("div", {
    className: "mehrlesen_graph"
  }, __jsx("svg", {
    x: "0px",
    y: "0px",
    width: "160px",
    height: "6px",
    viewBox: "0 0 160 6"
  }, __jsx("rect", {
    x: "-0.032",
    y: "2.5",
    fill: "#C2AC84",
    width: "159",
    height: "1"
  }), __jsx("polygon", {
    fill: "#C2AC84",
    points: "154.979,6 158.682,3 154.979,0 156.392,0 160,3 156.633,6 "
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (MehrLesen);

/***/ }),

/***/ "ALm9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("efsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+lMf");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("OvnE");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vPRl");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MehrLesen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9Ksj");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uhl+");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nv6v");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["a"] = (function ({
  data
}) {
  const heroData = {
    slug: data.slug,
    title: data.title,
    content: data.excerpt,
    image: data.image,
    scroll: data.scroll
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description
  }), __jsx(_Hero__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    data: heroData,
    className: "hero--reference"
  }), __jsx("div", {
    id: "content",
    className: "reference"
  }, __jsx("div", {
    className: "reference__info"
  }, __jsx("h3", null, data.title), __jsx("p", null, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.content.replace(/\n/g, "<br />"))), __jsx("div", {
    className: "reference__info--utils"
  }, __jsx("a", {
    className: "reference__info--related",
    href: data.lang === 'de' ? `/locations/${data.fields.referenz_ort}` : `/en/locations/${data.fields.referenz_ort}`
  }, __jsx("span", {
    className: "reference__info--related-loc"
  }, "LOCATION:"), __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    name: data.fields.referenz_ort.toUpperCase()
  })), __jsx("div", {
    className: "reference__info--linkgroup"
  }, __jsx("a", {
    className: "",
    href: data.lang === 'de' ? `/referenzen/${data.prev}` : `/en/referenzen/${data.prev}`
  }, "\u2190 ", data.lang === 'de' ? 'BISHERIGE REFERENZ' : 'PREVIOUS REFERENCE'), __jsx("a", {
    className: "",
    href: data.lang === 'de' ? `/referenzen/${data.next}` : `/en/referenzen/${data.next}`
  }, data.lang === 'de' ? 'NÄCHSTE REFERENZ' : 'NEXT REFERENCE', " \u2192")))), __jsx("div", {
    className: "singleloc__gallery reference__gallery"
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselProvider"], {
    naturalSlideWidth: 500,
    naturalSlideHeight: 600,
    totalSlides: data.fields.referenz_slider.length,
    isPlaying: true,
    interval: 5000,
    infinite: true
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["Slider"], {
    className: "singleloc__gallery--wrapper reference__gallery--wrapper"
  }, data.fields.referenz_slider.map((item, imageKey) => __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["Slide"], {
    key: imageKey,
    index: imageKey
  }, __jsx("img", {
    width: "100%",
    src: item
  })))), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["DotGroup"], {
    className: "gallery--nav"
  })))));
});
;

/***/ }),

/***/ "ETPu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");
/* harmony import */ var _components_templates_referenz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ALm9");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ReferenzPage = ({
  data
}) => __jsx(_components_templates_referenz__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  data: data
});

ReferenzPage.getInitialProps = async context => {
  const {
    id
  } = context.query;
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[/* API_HOST */ "a"]}en/references/${id}`);
  const json = await res.json();
  return {
    data: json
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ReferenzPage);

/***/ }),

/***/ "F9Bs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Breadcrumb = ({
  slug,
  title
}) => {
  return __jsx("div", {
    className: "hero__breadcrumb"
  }, __jsx("a", {
    href: "/"
  }, "HOME"), " > ", __jsx("span", null, title));
};

/* harmony default export */ __webpack_exports__["a"] = (Breadcrumb);

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "nv6v":
/***/ (function(module, exports) {



/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_HOST; });
const API_HOST = 'http://goldendoor-api.narcissundtaurus.com/wp-json/gd/';

/***/ }),

/***/ "uhl+":
/***/ (function(module, exports) {



/***/ }),

/***/ "vPRl":
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel");

/***/ })

/******/ });