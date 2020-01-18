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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "8VLg":
/***/ (function(module, exports) {



/***/ }),

/***/ "INZR":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__("OvnE");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// CONCATENATED MODULE: ./components/MehrLesen.js

var __jsx = external_react_default.a.createElement;

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

/* harmony default export */ var components_MehrLesen = (MehrLesen);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// CONCATENATED MODULE: ./components/opening/Scene.js


var Scene_jsx = external_react_default.a.createElement;


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${parse_int_default()(x / 8)}px,${parse_int_default()(y / 8)}px,0)`;

const trans2 = (x, y) => `translate3d(${parse_int_default()(x / 25 + 5)}px,${parse_int_default()(y / 10 / 10)}px,0)`; // const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) > `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


const Scene = () => {
  const [properties, setProperties] = Object(external_react_spring_["useSpring"])(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      friction: 40
    }
  }));
  return Scene_jsx("div", {
    className: "container",
    onMouseMove: ({
      clientX: x,
      clientY: y
    }) => setProperties({
      xy: calc(x, y)
    })
  }, Scene_jsx(external_react_spring_["animated"].div, {
    className: "card1",
    style: {
      transform: properties.xy.interpolate(trans1)
    }
  }), Scene_jsx(external_react_spring_["animated"].div, {
    className: "card2",
    style: {
      transform: properties.xy.interpolate(trans2)
    }
  }));
};

/* harmony default export */ var opening_Scene = (Scene);
// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__("INZR");
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);

// CONCATENATED MODULE: ./components/opening/Galaxy.js

var Galaxy_jsx = external_react_default.a.createElement;


const Galaxy = () => Galaxy_jsx(external_react_particles_js_default.a, {
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
  }
});

/* harmony default export */ var opening_Galaxy = (Galaxy);
// EXTERNAL MODULE: external "pure-react-carousel"
var external_pure_react_carousel_ = __webpack_require__("vPRl");

// EXTERNAL MODULE: ./components/opening/style.scss
var style = __webpack_require__("mm+h");

// CONCATENATED MODULE: ./components/opening/Opening.js

var Opening_jsx = external_react_default.a.createElement;






const Opening = ({
  data
}) => {
  return Opening_jsx("div", {
    className: "scene"
  }, Opening_jsx("div", {
    className: "scene-background"
  }), Opening_jsx("div", {
    className: "scene-landscape"
  }), Opening_jsx("div", {
    className: "scene-galaxy"
  }, Opening_jsx(opening_Galaxy, null)), Opening_jsx(opening_Scene, null), Opening_jsx("div", {
    className: "home__slider"
  }, Opening_jsx(external_pure_react_carousel_["CarouselProvider"], {
    naturalSlideWidth: 220,
    naturalSlideHeight: 125,
    totalSlides: data.length,
    isPlaying: true,
    interval: 9000,
    infinite: true
  }, Opening_jsx(external_pure_react_carousel_["Slider"], {
    className: "home__slider--wrapper"
  }, data.map((item, key) => Opening_jsx("a", {
    href: item.link,
    key: key
  }, Opening_jsx(external_pure_react_carousel_["Slide"], {
    index: key
  }, Opening_jsx("h2", null, item.titel), external_html_react_parser_default()(item.inhalt))))))));
};

/* harmony default export */ var opening_Opening = (Opening);
// EXTERNAL MODULE: ./components/templates/home/style.scss
var home_style = __webpack_require__("8VLg");

// CONCATENATED MODULE: ./components/templates/home/index.js

var home_jsx = external_react_default.a.createElement;




/* harmony default export */ var home = (function ({
  data
}) {
  const paragraphs = data.content.split("\n\r");
  return home_jsx(external_react_default.a.Fragment, null, home_jsx(opening_Opening, {
    data: data.fields.text_slider
  }), home_jsx("div", {
    className: "preface"
  }, home_jsx("h2", null, external_html_react_parser_default()(data.fields.titel)), home_jsx("div", {
    className: "preface__blocks"
  }, paragraphs.map((paragraph, key) => home_jsx("p", {
    key: key
  }, paragraph)))), home_jsx("div", {
    className: "pool pool--home"
  }, data.fields.routers.map((route, key) => home_jsx("a", {
    key: key,
    className: "home__route",
    href: route.link
  }, home_jsx("div", {
    className: "home__route--wrapper"
  }, home_jsx("div", {
    className: "home__route--img backgroundImg",
    style: {
      backgroundImage: "url(" + route.bild + ")"
    }
  }), home_jsx("div", {
    className: "home__route--content"
  }, home_jsx("h3", {
    className: "title__lg"
  }, route.titel), external_html_react_parser_default()(route.inhalt), home_jsx("span", {
    className: "home__route--link"
  }, home_jsx(components_MehrLesen, {
    name: route.titel
  }))))))));
});
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;


const Index = ({
  data
}) => {
  // console.log(data)
  return pages_jsx(home, {
    data: data
  });
};

Index.getInitialProps = async () => {
  const res = await fetch('http://goldendoor-api.narcissundtaurus.com/wp-json/gd/de/home');
  const json = await res.json();
  return {
    data: json
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mm+h":
/***/ (function(module, exports) {



/***/ }),

/***/ "vPRl":
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });