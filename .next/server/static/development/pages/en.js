module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MehrLesen.js":
/*!*********************************!*\
  !*** ./components/MehrLesen.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/MehrLesen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MehrLesen = ({
  name
}) => {
  return __jsx("div", {
    className: "mehrlesen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("span", {
    className: "mehrlesen_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, name, "\xA0\xA0"), __jsx("div", {
    className: "mehrlesen_graph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("svg", {
    x: "0px",
    y: "0px",
    width: "160px",
    height: "6px",
    viewBox: "0 0 160 6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("rect", {
    x: "-0.032",
    y: "2.5",
    fill: "#C2AC84",
    width: "159",
    height: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("polygon", {
    fill: "#C2AC84",
    points: "154.979,6 158.682,3 154.979,0 156.392,0 160,3 156.633,6 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MehrLesen);

/***/ }),

/***/ "./components/opening/Galaxy.js":
/*!**************************************!*\
  !*** ./components/opening/Galaxy.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/opening/Galaxy.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Galaxy = () => __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
  params: {
    "particles": {
      "number": {
        "value": 600,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 1.6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": .5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Galaxy);

/***/ }),

/***/ "./components/opening/Opening.js":
/*!***************************************!*\
  !*** ./components/opening/Opening.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ "./components/opening/Scene.js");
/* harmony import */ var _Galaxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Galaxy */ "./components/opening/Galaxy.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pure-react-carousel */ "pure-react-carousel");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/opening/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/opening/Opening.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Opening = ({
  data
}) => {
  return __jsx("div", {
    className: "scene",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "scene-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "scene-landscape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "scene-galaxy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_Galaxy__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx(_Scene__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("div", {
    className: "home__slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselProvider"], {
    naturalSlideWidth: 220,
    naturalSlideHeight: 125,
    totalSlides: data.length,
    isPlaying: true,
    interval: 9000,
    infinite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["Slider"], {
    className: "home__slider--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, data.map((item, key) => __jsx("a", {
    href: item.link,
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__["Slide"], {
    index: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, item.titel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(item.inhalt))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Opening);

/***/ }),

/***/ "./components/opening/Scene.js":
/*!*************************************!*\
  !*** ./components/opening/Scene.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/opening/Scene.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(x / 8)}px,${_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(y / 8)}px,0)`;

const trans2 = (x, y) => `translate3d(${_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(x / 25 + 5)}px,${_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(y / 10 / 10)}px,0)`; // const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) > `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


const Scene = () => {
  const [properties, setProperties] = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      friction: 40
    }
  }));
  return __jsx("div", {
    className: "container",
    onMouseMove: ({
      clientX: x,
      clientY: y
    }) => setProperties({
      xy: calc(x, y)
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "card1",
    style: {
      transform: properties.xy.interpolate(trans1)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "card2",
    style: {
      transform: properties.xy.interpolate(trans2)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scene);

/***/ }),

/***/ "./components/opening/style.scss":
/*!***************************************!*\
  !*** ./components/opening/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/templates/home/index.js":
/*!********************************************!*\
  !*** ./components/templates/home/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MehrLesen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MehrLesen */ "./components/MehrLesen.js");
/* harmony import */ var _opening_Opening__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../opening/Opening */ "./components/opening/Opening.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./components/templates/home/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/templates/home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function ({
  data
}) {
  const paragraphs = data.content.split("\n\r");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_opening_Opening__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data.fields.text_slider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: "preface",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(data.fields.titel)), __jsx("div", {
    className: "preface__blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, paragraphs.map((paragraph, key) => __jsx("p", {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, paragraph)))), __jsx("div", {
    className: "pool pool--home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, data.fields.routers.map((route, key) => __jsx("a", {
    key: key,
    className: "home__route",
    href: route.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "home__route--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "home__route--img backgroundImg",
    style: {
      backgroundImage: "url(" + route.bild + ")"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("div", {
    className: "home__route--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h3", {
    className: "title__lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, route.titel), html_react_parser__WEBPACK_IMPORTED_MODULE_1___default()(route.inhalt), __jsx("span", {
    className: "home__route--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_MehrLesen__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: route.titel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))))))));
});

/***/ }),

/***/ "./components/templates/home/style.scss":
/*!**********************************************!*\
  !*** ./components/templates/home/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: API_HOST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_HOST", function() { return API_HOST; });
const API_HOST = 'http://goldendoor-api.narcissundtaurus.com/wp-json/gd/';

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./pages/en/index.js":
/*!***************************!*\
  !*** ./pages/en/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _components_templates_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/templates/home */ "./components/templates/home/index.js");
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/pages/en/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = ({
  data
}) => __jsx(_components_templates_home__WEBPACK_IMPORTED_MODULE_2__["default"], {
  data: data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

Index.getInitialProps = async () => {
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__["API_HOST"]}en/home`);
  const json = await res.json();
  return {
    data: json
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/en/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/urbandruid/repos/goldendoor-next/pages/en/index.js */"./pages/en/index.js");


/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

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

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ })

/******/ });
//# sourceMappingURL=en.js.map