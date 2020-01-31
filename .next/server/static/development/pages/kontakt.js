module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/kontakt.js": 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/SendingQuery.js":
/*!************************************!*\
  !*** ./components/SendingQuery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const SendingQuery = props => {
  const ellipse = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const tick = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const text = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setTimeout(() => {
      ellipse.current.classList.add('stopEllipse');
      tick.current.classList.add('showTick');
      text.current.classList.add('showText');
    }, 2000);
  }, []);
  return __jsx("div", {
    className: "jsx-2703489858" + " " + "sendingQuery"
  }, __jsx("svg", {
    ref: ellipse,
    viewBox: "0 0 244 244",
    className: "jsx-2703489858" + " " + "sendingQuery-ellipse"
  }, __jsx("defs", {
    className: "jsx-2703489858"
  }, __jsx("linearGradient", {
    id: "sendingGradient",
    x1: "33.68",
    y1: "33.68",
    x2: "206.22",
    y2: "206.22",
    gradientUnits: "userSpaceOnUse",
    className: "jsx-2703489858"
  }, __jsx("stop", {
    offset: "0.15",
    stopColor: props.color,
    stopOpacity: "0",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.25",
    stopColor: props.color,
    stopOpacity: "0.22",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.38",
    stopColor: props.color,
    stopOpacity: "0.45",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.51",
    stopColor: props.color,
    stopOpacity: "0.65",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.64",
    stopColor: props.color,
    stopOpacity: "0.8",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.76",
    stopColor: props.color,
    stopOpacity: "0.91",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.88",
    stopColor: props.color,
    stopOpacity: "0.98",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "1",
    stopColor: props.color,
    className: "jsx-2703489858"
  }))), __jsx("path", {
    fill: "url(#sendingGradient)",
    d: "M122,0A122,122,0,1,0,244,122,122,122,0,0,0,122,0Zm0,236.5A114.5,114.5,0,1,1,236.5,122,114.5,114.5,0,0,1,122,236.5Z",
    className: "jsx-2703489858"
  })), __jsx("svg", {
    ref: tick,
    viewBox: "0 0 138.35 99.15",
    className: "jsx-2703489858" + " " + "sendingQuery-tick"
  }, __jsx("path", {
    fill: props.color,
    d: "M.85,42.5c2.41,1.55,4.74,3.17,7,4.84s4.57,3.34,6.79,5.08c4.47,3.45,8.82,7,13.09,10.66s8.45,7.38,12.57,11.18S48.42,82,52.27,86.07h-8.7c7.75-7.25,15.81-14.19,23.5-21.5S82.54,50,90.37,42.87l11.71-10.79,11.76-10.74Q125.62,10.61,137.5,0l.85.85Q127.73,12.73,117,24.51L106.27,36.27,95.48,48C88.31,55.81,81,63.51,73.78,71.28S59.53,87,52.27,94.77l-4.09,4.38-4.61-4.38c-4.06-3.85-8-7.81-11.81-11.93s-7.54-8.29-11.18-12.57S13.37,61.65,9.92,57.18C8.18,55,6.5,52.68,4.84,50.39s-3.29-4.63-4.84-7Z",
    className: "jsx-2703489858"
  })), __jsx("p", {
    ref: text,
    className: "jsx-2703489858" + " " + "sendingQuery-message"
  }, props.message), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2703489858"
  }, "@-webkit-keyframes rotate-jsx-2703489858{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate-jsx-2703489858{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.sendingQuery.jsx-2703489858{width:200px;position:relative;}.sendingQuery-ellipse.jsx-2703489858{-webkit-transition:.5s all;transition:.5s all;-webkit-animation:rotate-jsx-2703489858 1s linear infinite;animation:rotate-jsx-2703489858 1s linear infinite;}.sendingQuery-tick.jsx-2703489858{position:absolute;-webkit-transition:.5s all;transition:.5s all;width:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.sendingQuery-message.jsx-2703489858{text-align:center;position:absolute;text-transform:uppercase;-webkit-letter-spacing:1.6px;-moz-letter-spacing:1.6px;-ms-letter-spacing:1.6px;letter-spacing:1.6px;left:0;right:0;opacity:0;-webkit-transition:.5s all;transition:.5s all;bottom:-60%;}.stopEllipse.jsx-2703489858{opacity:0;-webkit-transition:.5s all;transition:.5s all;}.showTick.jsx-2703489858{-webkit-transition:.5s all ease-out;transition:.5s all ease-out;width:100px;}.showText.jsx-2703489858{-webkit-transition:.5s all;transition:.5s all;opacity:1;bottom:-50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXRpaC9yZXBvcy9nb2xkZW5kb29yLW5leHQvY29tcG9uZW50cy9TZW5kaW5nUXVlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUlvQyxBQUdFLEFBSWYsQUFJTyxBQUlELEFBUUEsQUFXUixBQUlrQixBQUlULFVBUEEsRUEzQkQsTUFRQyxBQVFELFlBZnBCLE1BZ0IyQixVQWJXLEFBK0IxQixVQVBaLEFBUWMsS0FsQlMsR0FUYixBQXNCSSxJQU1kLElBM0JVLElBc0JWLElBckJXLENBbEJULE1BR0EsRUFnQmdDLG1FQVBsQyxNQWNTLE9BQ0MsUUFDRSxVQUNTLE9BVHJCLHVDQVVjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2ZhdGloL3JlcG9zL2dvbGRlbmRvb3ItbmV4dC9jb21wb25lbnRzL1NlbmRpbmdRdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlbmRpbmdRdWVyeSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBlbGxpcHNlID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IHRpY2sgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3QgdGV4dCA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbGxpcHNlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnc3RvcEVsbGlwc2UnKTtcbiAgICAgIHRpY2suY3VycmVudC5jbGFzc0xpc3QuYWRkKCdzaG93VGljaycpO1xuICAgICAgdGV4dC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3dUZXh0Jyk7XG4gICAgfSwgMjAwMCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRpbmdRdWVyeVwiPlxuXG4gICAgICA8c3ZnIHJlZj17ZWxsaXBzZX0gY2xhc3NOYW1lPVwic2VuZGluZ1F1ZXJ5LWVsbGlwc2VcIiB2aWV3Qm94PVwiMCAwIDI0NCAyNDRcIj5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwic2VuZGluZ0dyYWRpZW50XCIgeDE9XCIzMy42OFwiIHkxPVwiMzMuNjhcIiB4Mj1cIjIwNi4yMlwiIHkyPVwiMjA2LjIyXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjE1XCIgc3RvcENvbG9yPXtwcm9wcy5jb2xvcn0gc3RvcE9wYWNpdHk9XCIwXCIvPlxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3BDb2xvcj17cHJvcHMuY29sb3J9IHN0b3BPcGFjaXR5PVwiMC4yMlwiLz5cbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzhcIiBzdG9wQ29sb3I9e3Byb3BzLmNvbG9yfSBzdG9wT3BhY2l0eT1cIjAuNDVcIi8+XG4gICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjUxXCIgc3RvcENvbG9yPXtwcm9wcy5jb2xvcn0gc3RvcE9wYWNpdHk9XCIwLjY1XCIvPlxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC42NFwiIHN0b3BDb2xvcj17cHJvcHMuY29sb3J9IHN0b3BPcGFjaXR5PVwiMC44XCIvPlxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC43NlwiIHN0b3BDb2xvcj17cHJvcHMuY29sb3J9IHN0b3BPcGFjaXR5PVwiMC45MVwiLz5cbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuODhcIiBzdG9wQ29sb3I9e3Byb3BzLmNvbG9yfSBzdG9wT3BhY2l0eT1cIjAuOThcIi8+XG4gICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPXtwcm9wcy5jb2xvcn0vPlxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgICAgPHBhdGggZmlsbD1cInVybCgjc2VuZGluZ0dyYWRpZW50KVwiIGQ9XCJNMTIyLDBBMTIyLDEyMiwwLDEsMCwyNDQsMTIyLDEyMiwxMjIsMCwwLDAsMTIyLDBabTAsMjM2LjVBMTE0LjUsMTE0LjUsMCwxLDEsMjM2LjUsMTIyLDExNC41LDExNC41LDAsMCwxLDEyMiwyMzYuNVpcIi8+XG4gICAgICA8L3N2Zz5cblxuICAgICAgPHN2ZyByZWY9e3RpY2t9IGNsYXNzTmFtZT1cInNlbmRpbmdRdWVyeS10aWNrXCIgdmlld0JveD1cIjAgMCAxMzguMzUgOTkuMTVcIj5cbiAgICAgICAgPHBhdGggZmlsbD17cHJvcHMuY29sb3J9IGQ9XCJNLjg1LDQyLjVjMi40MSwxLjU1LDQuNzQsMy4xNyw3LDQuODRzNC41NywzLjM0LDYuNzksNS4wOGM0LjQ3LDMuNDUsOC44Miw3LDEzLjA5LDEwLjY2czguNDUsNy4zOCwxMi41NywxMS4xOFM0OC40Miw4Miw1Mi4yNyw4Ni4wN2gtOC43YzcuNzUtNy4yNSwxNS44MS0xNC4xOSwyMy41LTIxLjVTODIuNTQsNTAsOTAuMzcsNDIuODdsMTEuNzEtMTAuNzksMTEuNzYtMTAuNzRRMTI1LjYyLDEwLjYxLDEzNy41LDBsLjg1Ljg1UTEyNy43MywxMi43MywxMTcsMjQuNTFMMTA2LjI3LDM2LjI3LDk1LjQ4LDQ4Qzg4LjMxLDU1LjgxLDgxLDYzLjUxLDczLjc4LDcxLjI4UzU5LjUzLDg3LDUyLjI3LDk0Ljc3bC00LjA5LDQuMzgtNC42MS00LjM4Yy00LjA2LTMuODUtOC03LjgxLTExLjgxLTExLjkzcy03LjU0LTguMjktMTEuMTgtMTIuNTdTMTMuMzcsNjEuNjUsOS45Miw1Ny4xOEM4LjE4LDU1LDYuNSw1Mi42OCw0Ljg0LDUwLjM5cy0zLjI5LTQuNjMtNC44NC03WlwiLz5cbiAgICAgIDwvc3ZnPlxuXG4gICAgICA8cCByZWY9e3RleHR9IGNsYXNzTmFtZT1cInNlbmRpbmdRdWVyeS1tZXNzYWdlXCIgPntwcm9wcy5tZXNzYWdlfTwvcD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZW5kaW5nUXVlcnkge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbmRpbmdRdWVyeS1lbGxpcHNle1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zZW5kaW5nUXVlcnktdGljayB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5zZW5kaW5nUXVlcnktbWVzc2FnZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcbiAgICAgICAgICBib3R0b206IC02MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3BFbGxpcHNlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgLnNob3dUaWNrIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2Utb3V0O1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2hvd1RleHR7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGJvdHRvbTogLTUwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VuZGluZ1F1ZXJ5OyJdfQ== */\n/*@ sourceURL=/Users/fatih/repos/goldendoor-next/components/SendingQuery.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SendingQuery);

/***/ }),

/***/ "./components/templates/kontakt/index.js":
/*!***********************************************!*\
  !*** ./components/templates/kontakt/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-obfuscate */ "react-obfuscate");
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_obfuscate__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _SendingQuery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../SendingQuery */ "./components/SendingQuery.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.scss */ "./components/templates/kontakt/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_19__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }












const MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../MapContainer */ "./components/MapContainer.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../MapContainer */ "./components/MapContainer.js")],
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (({
  data,
  layout,
  lang
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const requestedLocation = router.query.locationName !== undefined ? router.query.locationName : false;
  const locationSelection = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  const contactInfo = layout.footer.info;
  const steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];
  const [eventDate, setEventDate] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(new Date());
  const [elusiveDate, setElusiveDate] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(new Date());
  const [beginTime, setBeginTime] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(new Date());
  const [endTime, setEndTime] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(new Date());
  const formSteps = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  const stepSlider = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  const dateRange = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  const dates = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  const firstStepLock = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  const secondStepLock = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();
  const successBlock = react__WEBPACK_IMPORTED_MODULE_8___default.a.useRef();

  const changeStep = e => {
    const isDateAnswerOneChecked = firstStepLock.current.nextElementSibling.firstElementChild.checked;
    const isDateAnswerTwoChecked = firstStepLock.current.nextElementSibling.nextElementSibling.firstElementChild.checked;
    const ellipses = formSteps.current.parentElement.parentElement.firstElementChild.children;

    if (isDateAnswerOneChecked === true || isDateAnswerTwoChecked === true) {
      firstStepLock.current.parentElement.classList.remove('uncheckedField');

      if (e.currentTarget.classList.contains('goFirst')) {
        formSteps.current.classList.remove('atSecondStep');
        ellipses[1].classList.remove('activeStep');
        ellipses[0].classList.add('activeStep');
      } else if (e.currentTarget.classList.contains('goNext')) {
        if (secondStepLock.current.nextElementSibling.value.length > 0) {
          formSteps.current.classList.remove('atSecondStep');
          formSteps.current.classList.add('atThirdStep');
          ellipses[1].classList.remove('activeStep');
          ellipses[2].classList.add('activeStep');
        } else {
          secondStepLock.current.parentElement.classList.add('uncheckedField');
        }
      } else if (e.currentTarget.classList.contains('goSecond')) {
        formSteps.current.classList.remove('atThirdStep');
        formSteps.current.classList.add('atSecondStep');
        ellipses[2].classList.remove('activeStep');
        ellipses[1].classList.add('activeStep');
      } else {
        formSteps.current.classList.add('atSecondStep');
        ellipses[0].classList.remove('activeStep');
        ellipses[1].classList.add('activeStep');
      }
    } else {
      firstStepLock.current.parentElement.classList.add('uncheckedField');
    }
  };

  const removeUnchecked = e => {
    e.currentTarget.parentElement.classList.contains('uncheckedField') === true ? e.currentTarget.parentElement.classList.remove('uncheckedField') : null;
  };

  const hideDates = e => {
    const container = e.currentTarget.parentElement.parentElement;
    const answerYes = e.currentTarget.parentElement.parentElement.children[1].firstElementChild;
    container.classList.contains('uncheckedField') === true ? container.classList.remove('uncheckedField') : null;

    if (answerYes.checked) {
      dates.current.classList.remove('hidden');
      dateRange.current.classList.add('hidden');
    } else {
      dates.current.classList.add('hidden');
      dateRange.current.classList.remove('hidden');
    }
  };

  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_16__["useForm"])();
  const [submitted, setSubmitted] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false);

  const onSubmit = values => {
    const dates = {
      lang: lang,
      contactType: 'contactForm',
      eventdatum: eventDate.toDateString(),
      ausweichtermin: elusiveDate.toDateString(),
      eventzeitbeginn: beginTime.toLocaleTimeString('de-DE'),
      eventzeitend: endTime.toLocaleTimeString('de-DE')
    };

    const finalForm = _objectSpread({}, values, {}, dates);

    fetch('/api/kontakt', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: serialize_javascript__WEBPACK_IMPORTED_MODULE_12___default()(finalForm)
    }).then(res => {
      res.status === 200 ? setSubmitted(!submitted) : '';
    }).catch(err => console.log(err));
  };

  react__WEBPACK_IMPORTED_MODULE_8___default.a.useEffect(() => {
    stepSlider.current.firstElementChild.classList.add('activeStep');

    if (requestedLocation) {
      locationSelection.current.lastElementChild.value = requestedLocation;
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_8___default.a.useEffect(() => {
    if (submitted) {
      formSteps.current.classList.add('hideForm');
      successBlock.current.classList.add('showSuccess');
    }
  }, [submitted]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_11__["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description
  }), __jsx("div", {
    className: "page__title page__title--contact"
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_13__["default"], {
    slug: data.slug,
    title: data.title
  }), __jsx("h1", null, data.title)), __jsx("div", {
    className: "contact"
  }, __jsx("div", {
    ref: stepSlider,
    className: "contact__stepslider"
  }, steps.map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepslider--ellipse"
  }, __jsx("span", null, key + 1)))), __jsx("div", {
    className: "contact--wrapper"
  }, __jsx("form", {
    className: "contact__steps",
    ref: formSteps,
    onSubmit: handleSubmit(onSubmit)
  }, __jsx("div", {
    className: "contact__step"
  }, __jsx("div", {
    className: "contact__step--flexWrapper"
  }, __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    htmlFor: "event_type",
    className: "label__select"
  }, steps[0].kontakt_frage_1.frage), __jsx("select", {
    name: "event_type",
    ref: register
  }, __jsx("optgroup", null, steps[0].kontakt_frage_1.optionen.map((item, key) => __jsx("option", {
    key: key,
    value: item.option
  }, item.option))))), __jsx("div", {
    className: "contact__stepblock",
    ref: locationSelection
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select"
  }, steps[0].kontakt_frage_2.frage), __jsx("select", {
    ref: register,
    name: "event_location"
  }, __jsx("optgroup", null, steps[0].kontakt_frage_2.optionen.map((item, key) => __jsx("option", {
    key: key,
    value: item.option
  }, item.option)))))), __jsx("div", {
    className: "contact__step--flexWrapper-xl"
  }, __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    ref: firstStepLock,
    htmlFor: "event_date_answer",
    className: "contact__stepblock--inner"
  }, steps[0].kontakt_frage_3.frage), steps[0].kontakt_frage_3.optionen.map((item, key) => __jsx("p", {
    className: "contact__stepblock--inner",
    key: key
  }, __jsx("input", {
    onClick: hideDates,
    ref: register,
    className: "input__radio",
    type: "radio",
    name: "event_date_answer",
    value: item.option
  }), __jsx("span", {
    className: "label__radio"
  }, item.option)))), __jsx("div", {
    className: "contact__stepblock",
    ref: dateRange
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "date_range"
  }, steps[0].kontakt_frage_5), __jsx("input", {
    className: "input__text",
    name: "date_range",
    ref: register,
    type: "text"
  })), __jsx("div", {
    ref: dates,
    className: "contact__stepblock contact__stepblock--datewrapper hidden"
  }, __jsx("div", {
    className: "contact__stepblock--date"
  }, __jsx("label", {
    htmlFor: "date_of_event"
  }, steps[0].kontakt_frage_6.datum), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_17___default.a, {
    selected: eventDate,
    name: "eventdatum",
    ref: register,
    onChange: date => setEventDate(date)
  })), __jsx("div", {
    className: "contact__stepblock--date"
  }, __jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.ausweichtermin), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_17___default.a, {
    selected: elusiveDate,
    name: "ausweichtermin",
    ref: register,
    onChange: date => setElusiveDate(date)
  })), __jsx("div", {
    className: "contact__stepblock--date"
  }, __jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.beginn), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_17___default.a, {
    ref: register,
    name: "event_beginn_zeit",
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: beginTime,
    onChange: date => setBeginTime(date)
  })), __jsx("div", {
    className: "contact__stepblock--date"
  }, __jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.ende), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_17___default.a, {
    name: "event_end_zeit",
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: endTime,
    onChange: date => setEndTime(date)
  })))), __jsx("a", {
    href: "#",
    className: "golden__button golden__button--center",
    onClick: changeStep
  }, data.fields.buttonfelder.prufen)), __jsx("div", {
    className: "contact__step"
  }, __jsx("h3", null, steps[1].feld_1.titel), __jsx("div", {
    className: "contact__step--wrapper"
  }, __jsx("div", {
    className: "contact__step--flexWrapper"
  }, __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    ref: secondStepLock,
    className: "label__text",
    htmlFor: "personenzahl"
  }, steps[1].feld_1.frage_1), __jsx("input", {
    onChange: removeUnchecked,
    type: "text",
    ref: register({
      required: true,
      maxLength: 30
    }),
    className: "input__text",
    name: "personenzahl"
  })), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    htmlFor: "event_max_budget",
    className: "contact__stepblock--inner"
  }, steps[1].feld_1.frage_2.fragefeld), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(steps[1].feld_1.frage_2.optionen).map((item, key) => __jsx("p", {
    className: "contact__stepblock--inner",
    key: key
  }, __jsx("input", {
    ref: register,
    type: "radio",
    className: "input__radio",
    name: "event_max_budget",
    value: item
  }), __jsx("span", {
    className: "label__radio"
  }, item))))), __jsx("h3", null, steps[1].feld_2.titel), __jsx("div", {
    className: "contact__step--flexWrapper-xl"
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(steps[1].feld_2).slice(1).map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepblock"
  }, __jsx("label", {
    htmlFor: `event_${item.fragefeld.toLowerCase()}`,
    className: "label__select"
  }, item.fragefeld), __jsx("select", {
    ref: register,
    name: `event_${item.fragefeld.toLowerCase()}`
  }, item.optionen.map((subItem, subKey) => __jsx("option", {
    key: subKey,
    value: subItem.option
  }, subItem.option))))))), __jsx("div", {
    className: "contact__buttongroup"
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goFirst"
  }, data.fields.buttonfelder.zuruck), __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goNext"
  }, data.fields.buttonfelder.weiter))), __jsx("div", {
    className: "contact__step"
  }, __jsx("h3", null, steps[2].titel), __jsx("div", {
    className: "contact__step--flexWrapper"
  }, __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    htmlFor: "kontakt_anrede",
    className: "label__select"
  }, steps[2].anredefeld.frage), __jsx("select", {
    ref: register,
    name: "kontakt_anrede"
  }, steps[2].anredefeld.sex.map((item, key) => __jsx("option", {
    key: key,
    value: item.option
  }, item.option)))), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_company`
  }, steps[2].andere_fragen.firma), __jsx("input", {
    ref: register({
      maxlength: 40
    }),
    className: "input__text",
    type: "text",
    name: `kontakt_company`
  })), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_name`
  }, steps[2].andere_fragen.vorname, "*"), __jsx("input", {
    ref: register({
      required: true,
      maxlength: 20,
      pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    }),
    className: "input__text",
    type: "text",
    name: `kontakt_name`
  }), errors.kontakt_name && data.fields.fehlerfelder[1].text.toUpperCase()), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_surname`
  }, steps[2].andere_fragen.nachname, "*"), __jsx("input", {
    ref: register({
      required: true,
      maxlength: 25,
      pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    }),
    className: "input__text",
    type: "text",
    name: `kontakt_surname`
  }), errors.kontakt_surname && data.fields.fehlerfelder[1].text.toUpperCase()), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_email`
  }, steps[2].andere_fragen.email, "*"), __jsx("input", {
    ref: register({
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: `UNGÜLTIGE E-MAIL-ADRESSE`
      }
    }),
    className: "input__text",
    type: "email",
    name: `kontakt_email`
  }), errors.kontakt_email && errors.kontakt_email.message), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_phone`
  }, steps[2].andere_fragen.telefon), __jsx("input", {
    ref: register({
      maxlength: 35
    }),
    className: "input__text",
    type: "tel",
    name: `kontakt_phone`
  })), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    htmlFor: "event_nachricht"
  }, steps[0].kontakt_frage_4), __jsx("textarea", {
    ref: register,
    name: "event_nachricht",
    cols: "30",
    rows: "5"
  })), __jsx("div", {
    className: "contact__stepblock contact__stepblock--acceptance"
  }, __jsx("label", {
    htmlFor: "acceptance",
    className: "contact__stepblock--inner"
  }, lang === 'en' ? 'DATA PRIVACY' : 'DATENSCHUTZ', "*"), __jsx("input", {
    ref: register({
      required: true
    }),
    type: "radio",
    className: "input__radio",
    name: "acceptance"
  }), __jsx("span", {
    className: "label__radio"
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_15___default()(data.fields.kontakt_stufe_3.datenschutz)))), __jsx("div", {
    className: "contact__buttongroup"
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond"
  }, data.fields.buttonfelder.zuruck), __jsx("button", {
    type: "submit",
    className: "golden__button"
  }, data.fields.buttonfelder.senden)))), __jsx("div", {
    className: "contact__success"
  }, __jsx("div", {
    ref: successBlock,
    className: "contact__success--wrapper"
  }, submitted && __jsx(_SendingQuery__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "#C2AC84",
    message: data.fields.fehlerfelder[2].text
  }))))), __jsx("div", {
    className: "contact__info"
  }, __jsx("div", {
    className: "contact__info--map"
  }, __jsx(MapContainer, {
    data: data.fields.karte_koordinaten
  })), __jsx("div", {
    className: "contact__info--address"
  }, __jsx("div", {
    className: "contact__info--logo"
  }, __jsx("img", {
    src: contactInfo.logo,
    alt: "Golden Door Logo"
  })), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(contactInfo.address).map((item, key) => __jsx("div", {
    key: key
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_15___default()(item))), __jsx(react_obfuscate__WEBPACK_IMPORTED_MODULE_14___default.a, {
    tel: contactInfo.telefon.split('T:')[1]
  }), __jsx(react_obfuscate__WEBPACK_IMPORTED_MODULE_14___default.a, {
    email: contactInfo.email.toLowerCase()
  }))));
});

/***/ }),

/***/ "./components/templates/kontakt/style.scss":
/*!*************************************************!*\
  !*** ./components/templates/kontakt/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/kontakt.js":
/*!**************************!*\
  !*** ./pages/kontakt.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_kontakt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/kontakt */ "./components/templates/kontakt/index.js");
var _jsxFileName = "/Users/fatih/repos/goldendoor-next/pages/kontakt.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const KontaktPage = ({
  data,
  layout,
  lang
}) => __jsx(_components_templates_kontakt__WEBPACK_IMPORTED_MODULE_1__["default"], {
  data: data,
  lang: lang,
  layout: layout,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
});

KontaktPage.getInitialProps = async () => {
  const lang = 'de';
  const res = await fetch(`${"http://goldendoor-api.narcissundtaurus.com/wp-json/gd/"}de/contact`);
  const layoutRes = await fetch(`${"http://goldendoor-api.narcissundtaurus.com/wp-json/gd/"}de/layout`);
  const layoutJson = await layoutRes.json();
  const json = await res.json();
  return {
    data: json,
    layout: layoutJson,
    lang
  };
};

/* harmony default export */ __webpack_exports__["default"] = (KontaktPage);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/kontakt.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fatih/repos/goldendoor-next/pages/kontakt.js */"./pages/kontakt.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),

/***/ "react-obfuscate":
/*!**********************************!*\
  !*** external "react-obfuscate" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-obfuscate");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=kontakt.js.map