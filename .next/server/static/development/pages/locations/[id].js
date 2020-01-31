module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/locations/[id].js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Breadcrumb.js":
/*!**********************************!*\
  !*** ./components/Breadcrumb.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Icon = ({
  type,
  name
}) => {
  switch (type) {
    case "anfragen":
      return __jsx("i", {
        className: `icon icon__location icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 90 65"
      }, __jsx("path", {
        d: "M60.83,42.88A17,17,0,0,0,62.62,40l-.94-.35a17.45,17.45,0,0,1-1.8,2.81l-.15.2,2.79,9.45c-1.73-.82-5.36-2.55-7.84-3.89l-.21-.11-.22.09c-6.19,2.67-11.74,3-16.48,1.1-6.85-2.81-9.68-9.6-9.71-9.66l-.92.37A20.1,20.1,0,0,0,37.38,50.24c4.95,2,10.68,1.69,17-1,3.39,1.81,8.64,4.24,8.69,4.26l1,.47Z"
      }), __jsx("path", {
        d: "M44.15,13.37c12.89-.16,17.76,11,17.9,12.29l1,0c0-1.13-4.85-13.25-18.57-13.25h-.35c-13.78.2-17.69,13-17.73,13.13l1,.28C27.51,25.29,31.11,13.56,44.15,13.37Z"
      })), __jsx("span", null, name));

    case "factsheet":
      return __jsx("i", {
        className: `icon icon__location icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 90 65"
      }, __jsx("path", {
        d: "M30.42,17.18H47.13V23.4a1.64,1.64,0,0,0,1.07,1.47h8.67v-.36a.45.45,0,0,0-.16-.32L48,16.36a.57.57,0,0,0-.38-.14H35.53V13.68a1.19,1.19,0,0,1,1.24-1.12H59.68a1.18,1.18,0,0,1,1.23,1.12V24.86H62V13.68a2.2,2.2,0,0,0-2.3-2.07H36.76a2.19,2.19,0,0,0-2.29,2.07v2.53H30.86a1.43,1.43,0,0,0-1.5,1.36v7.3h1.06Zm17.78.68,6.85,6.19H48.92a.69.69,0,0,1-.72-.65Z"
      }), __jsx("path", {
        d: "M60.91,39.69v6A1.28,1.28,0,0,1,59.68,47H56.87V39.7H55.8V52.49H30.42V39.7H29.36V52a1.56,1.56,0,0,0,1.5,1.61h24.5A1.56,1.56,0,0,0,56.87,52V48.17h2.81A2.38,2.38,0,0,0,62,45.72v-6Z"
      })), __jsx("span", null, name));

    case "karte":
      return __jsx("i", {
        className: `icon icon__location icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 90 65"
      }, __jsx("polygon", {
        points: "26.95 17.02 38.42 14.3 38.42 24.63 39.42 24.63 39.42 14.35 50.05 17.02 50.05 25.06 51.05 25.06 51.05 17 61.45 14.33 61.45 24.44 62.45 24.44 62.45 13.04 50.51 16.11 38.85 13.17 25.95 16.23 25.95 24.44 26.95 24.44 26.95 17.02"
      }), __jsx("polygon", {
        points: "62.45 41.03 61.45 41.04 61.48 47.53 51.05 49.99 51.05 41.04 50.05 41.04 50.05 50.01 39.42 47.54 39.42 41.04 38.42 41.04 38.42 47.51 26.95 49.72 26.95 41.04 25.95 41.04 25.95 50.94 38.87 48.44 50.51 51.14 62.49 48.32 62.45 41.03"
      })), __jsx("span", null, name));

    case "facebook":
      return __jsx("i", {
        className: `icon icon__social icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 24 24"
      }, __jsx("path", {
        d: "M20.48,3.51A12,12,0,1,0,12,24,12,12,0,0,0,20.48,3.51Zm-5.2,3.81H13.55a.66.66,0,0,0-.68.75V9.7h2.4L15,12.47H12.87v7.87H9.65V12.47H8.11V9.7H9.65V7.91A3,3,0,0,1,12.9,4.62h2.38Z"
      })));

    case "instagram":
      return __jsx("i", {
        className: `icon icon__social icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 24 24"
      }, __jsx("path", {
        d: "M15.62,6.31H8.38a2.1,2.1,0,0,0-2.1,2.1v7.24a2.1,2.1,0,0,0,2.1,2.1h7.24a2.1,2.1,0,0,0,2.1-2.1V8.41A2.1,2.1,0,0,0,15.62,6.31ZM12,15.8A3.77,3.77,0,1,1,15.77,12,3.77,3.77,0,0,1,12,15.8Zm3.89-6.75a.9.9,0,1,1,.89-.9A.89.89,0,0,1,15.89,9.05Z"
      }), __jsx("path", {
        d: "M12,9.86A2.18,2.18,0,1,0,14.17,12,2.17,2.17,0,0,0,12,9.86Z"
      }), __jsx("path", {
        d: "M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm7.22,15.61a3.65,3.65,0,0,1-3.64,3.64H8.42a3.65,3.65,0,0,1-3.64-3.64V8.46A3.66,3.66,0,0,1,8.42,4.81h7.16a3.66,3.66,0,0,1,3.64,3.65Z"
      })));

    case "back":
      return __jsx("i", {
        className: `icon icon__social icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 36.75 36.75"
      }, __jsx("defs", null, __jsx("linearGradient", {
        id: "linear-gradient",
        x1: "5.38",
        y1: "5.38",
        x2: "31.37",
        y2: "31.37",
        gradientUnits: "userSpaceOnUse"
      }, __jsx("stop", {
        offset: "0",
        stopColor: "#c2ac84",
        stopOpacity: "0.5"
      }), __jsx("stop", {
        offset: "1",
        stopColor: "#c2ac84",
        stopOpacity: "0"
      }))), __jsx("circle", {
        fill: "url(#linear-gradient)",
        cx: "18.38",
        cy: "18.38",
        r: "18.38"
      }), __jsx("path", {
        className: "arrow",
        d: "M20.8,25.58a1.21,1.21,0,0,1-.88-.37l-5.8-5.8a1.23,1.23,0,0,1-.36-.87,1.27,1.27,0,0,1,.36-.88l6.12-6.12A1.24,1.24,0,0,1,22,13.29l-5.25,5.25,4.93,4.93a1.23,1.23,0,0,1,0,1.74A1.2,1.2,0,0,1,20.8,25.58Z"
      })));

    case "plus":
      return __jsx("i", {
        className: `icon icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 20.48 20.48"
      }, __jsx("path", {
        d: "M19.48,9.24H11.24V1a1,1,0,0,0-2,0V9.24H1a1,1,0,0,0,0,2H9.24v8.24a1,1,0,0,0,2,0V11.24h8.24a1,1,0,0,0,0-2Z"
      })));

    case "view":
      return __jsx("i", {
        className: `icon icon--${type}`
      }, __jsx("svg", {
        x: "0px",
        y: "0px",
        viewBox: "0 0 12.8 13.4"
      }, __jsx("path", {
        d: "M12.6,12.5L9.4,9.3c1-1,1.5-2.3,1.5-3.8c0-3-2.4-5.4-5.4-5.4c0,0,0,0,0,0s0,0,0,0c0,0,0,0-0.1,0 c-3,0-5.4,2.4-5.4,5.4c0,0,0,0,0,0.1c0,0,0,0,0,0s0,0,0,0c0,3,2.4,5.4,5.4,5.4c1.2,0,2.2-0.4,3.1-1l3.2,3.2c0.1,0.1,0.2,0.1,0.4,0.1 s0.3,0,0.4-0.1C12.8,13,12.8,12.7,12.6,12.5z M5.5,10C3,10,1,8,1,5.5S3,1,5.5,1S10,3,10,5.5S8,10,5.5,10z"
      })));

    case "cross":
      return __jsx("i", {
        className: `icon icon--${type}`
      }, __jsx("svg", {
        x: "0px",
        y: "0px",
        viewBox: "0 0 20.2 20.2"
      }, __jsx("path", {
        d: "M19.4,0.7L19.4,0.7c-0.4-0.4-1-0.4-1.4,0l-8,8l-8-8c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-0.4,1,0,1.4l8,8l-8,8 c-0.4,0.4-0.4,1,0,1.4l0,0c0.4,0.4,1,0.4,1.4,0l8-8l8,8c0.4,0.4,1,0.4,1.4,0l0,0c0.4-0.4,0.4-1,0-1.4l-8-8l8-8 C19.8,1.7,19.8,1.1,19.4,0.7z"
      })));

    case "mapMarker":
      return __jsx("i", {
        className: `icon--${type}`
      }, __jsx("svg", {
        version: "1.1",
        id: "Layer_1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 24 24"
      }, __jsx("defs", null, __jsx("linearGradient", {
        id: "marker_grad",
        x1: "10.8737",
        y1: "18.4454",
        x2: "12.5293",
        y2: "4.5317"
      }, __jsx("stop", {
        offset: "0",
        stopColor: "#632948"
      }), __jsx("stop", {
        offset: "1",
        stopColor: "#2D1D46"
      }))), __jsx("path", {
        className: "st1",
        fill: "url(#marker_grad)",
        d: "M12,2C8.1,2,5,5.1,5,9c0,5.2,7,13,7,13s7-7.8,7-13C19,5.1,15.9,2,12,2z M12,12.7c-1.8,0-3.2-1.4-3.2-3.2 s1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2S13.8,12.7,12,12.7z"
      })));

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "./components/Icon.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pure-react-carousel */ "pure-react-carousel");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider.scss */ "./components/templates/location/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./components/templates/location/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/fatih/repos/goldendoor-next/components/templates/location/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../MapContainer */ "./components/MapContainer.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../MapContainer */ "./components/MapContainer.js")],
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function ({
  data
}) {
  const infoPanel = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  const changePanel = () => {
    infoPanel.current.classList.toggle('changePanel');
  };

  const karteWrapper = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  const openMap = e => {
    karteWrapper.current.classList.add('openKarte');
  };

  const closeMap = e => {
    karteWrapper.current.classList.remove('openKarte');
  };

  const kontaktHref = data.lang === 'de' ? '/kontakt' : '/en/kontakt';
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const goToContact = e => {
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
      lineNumber: 44
    },
    __self: this
  }), __jsx("h1", {
    className: "seo__hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, data.title), __jsx("div", {
    className: "page__title page__title--singleloc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "singleloc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__info--wrapper",
    ref: infoPanel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__info--front",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("img", {
    src: data.fields.location_info.location_logo,
    alt: `${data.title} Logo`,
    className: "singleloc__info--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("span", {
    className: "singleloc__info--type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, data.fields.subtitel), __jsx("div", {
    className: "singleloc__info--buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    href: kontaktHref,
    onClick: goToContact,
    className: "singleloc__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "anfragen",
    name: data.fields.buttongroup.anfragen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), data.slug != 'burgermeister' && __jsx("a", {
    href: data.fields.location_info.location_factsheet,
    target: "_blank",
    className: "singleloc__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "factsheet",
    name: data.fields.buttongroup.datenblatt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("a", {
    href: "#karte",
    onClick: openMap,
    className: "singleloc__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "karte",
    name: data.fields.buttongroup.karte,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), __jsx("div", {
    className: "singleloc__info--socialmedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("a", {
    href: data.fields.social_media.facebook,
    className: "socialmedia__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("a", {
    href: data.fields.social_media.instagram,
    className: "socialmedia__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), __jsx("a", {
    href: `http://${data.fields.location_info.location_webseite}`,
    className: "singleloc__info--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, data.fields.location_info.location_webseite), __jsx("button", {
    onClick: changePanel,
    className: "singleloc__info--desc golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, data.fields.buttongroup.beschreibung, " > "), __jsx("a", {
    href: "#gallery",
    className: "singleloc__info--desc singleloc__gallerybutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\u25BE")), __jsx("div", {
    className: "singleloc__info--side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_6___default()(data.content)), data.slug != 'burgermeister' && __jsx("div", {
    className: "singleloc__info--bullets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_6___default()(data.fields.location_info.bulletpoints)), __jsx("button", {
    onClick: changePanel,
    className: "singleloc__info--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))))), __jsx("div", {
    className: "singleloc__detail",
    id: "gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "singleloc__gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselProvider"], {
    naturalSlideWidth: 220,
    naturalSlideHeight: 120,
    totalSlides: data.fields.location_gallery.length,
    isPlaying: true,
    interval: 5000,
    infinite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_8__["Slider"], {
    className: "singleloc__gallery--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, data.fields.location_gallery.map((item, imageKey) => __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
    key: imageKey,
    index: imageKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    src: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })))), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_8__["DotGroup"], {
    className: "gallery--nav gallery--nav-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }))), data.slug != 'burgermeister' && __jsx("div", {
    className: "singleloc__detail--data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(data.fields.technische_daten).map((locData, key) => __jsx("div", {
    key: key,
    className: "singleloc__detail--dataitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("span", {
    className: "dataitem--key",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, locData.name), __jsx("span", {
    className: "dataitem--value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, locData.option)))))), __jsx("div", {
    ref: karteWrapper,
    className: "location__karte--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "location__karte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(MapContainer, {
    data: data.fields.karte_koordinaten,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx("div", {
    className: "location__karte--close",
    onClick: closeMap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })))));
});
;

/***/ }),

/***/ "./components/templates/location/slider.scss":
/*!***************************************************!*\
  !*** ./components/templates/location/slider.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/templates/location/style.scss":
/*!**************************************************!*\
  !*** ./components/templates/location/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./pages/locations/[id].js":
/*!*********************************!*\
  !*** ./pages/locations/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/templates/location */ "./components/templates/location/index.js");
var _jsxFileName = "/Users/fatih/repos/goldendoor-next/pages/locations/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LocationPage = ({
  data
}) => __jsx(_components_templates_location__WEBPACK_IMPORTED_MODULE_1__["default"], {
  data: data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
});

LocationPage.getInitialProps = async context => {
  const {
    id
  } = context.query;
  const res = await fetch(`${"http://goldendoor-api.narcissundtaurus.com/wp-json/gd/"}de/locations/${id}`);
  const json = await res.json();
  return {
    data: json
  };
};

/* harmony default export */ __webpack_exports__["default"] = (LocationPage);

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/locations/[id].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fatih/repos/goldendoor-next/pages/locations/[id].js */"./pages/locations/[id].js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "pure-react-carousel":
/*!**************************************!*\
  !*** external "pure-react-carousel" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map