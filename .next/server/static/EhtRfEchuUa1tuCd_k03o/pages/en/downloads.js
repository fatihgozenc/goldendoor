module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0CQf":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WBBS");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

/***/ "GDzw":
/***/ (function(module, exports) {



/***/ }),

/***/ "J+ET":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RMLO");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("OvnE");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cYuJ");
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_obfuscate__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("GDzw");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_11__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const IMG_WIDTH = 300;
const IMG_HEIGHT = 300;
const parentPad = 0;
const VISIBLEIMAGES = 3;
const DURATION = 750;
/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  const {
    imgList = [],
    img_width = IMG_WIDTH,
    img_height = IMG_HEIGHT,
    visibleImages = VISIBLEIMAGES,
    duration = DURATION,
    autoNext = false,
    timeForNext = 3000
  } = props;
  const [currFirstImg, setCurrFirstImg] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(0);
  const [actualFirst, setActualFirst] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('');
  const [visibleItemsProps, setVisibleItemsProps] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState({
    order: [],
    styles: {}
  });
  const currMiddleImgRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(0);
  const intervalRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(0);
  const imgDifference = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(1);
  const durationRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(duration);
  const wrapper = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef();
  const parentHeight = img_height + 2 * parentPad;
  const parentWidth = img_width * 3;
  const elementsInLeft = Math.ceil(visibleImages / 2);
  const elementsInRight = visibleImages - elementsInLeft;

  const changeCenter = ({
    event,
    index
  }) => {
    const currFirstImgIndex = visibleItemsProps.order.indexOf(currFirstImg);
    const prevIndex = visibleItemsProps.order[currFirstImgIndex - 1];
    const nextIndex = visibleItemsProps.order[currFirstImgIndex + 1];

    if (index !== currFirstImg) {
      if (index === prevIndex || index === nextIndex) {
        setCurrFirstImg(index);
      } else {
        const val = currFirstImgIndex - visibleItemsProps.order.indexOf(index);
        imgDifference.current = Math.abs(val);
        setActualFirst(index);
        cycleToNextImage(index);
      }
    } else {
      null;
    }
  };

  const cycleToNextImage = actual => {
    if (visibleItemsProps.order.indexOf(currMiddleImgRef.current) > visibleItemsProps.order.indexOf(actual)) {
      // Right side image click
      currMiddleImgRef.current = currMiddleImgRef.current - 1 > -1 ? currMiddleImgRef.current - 1 : imgList.length - 1; // Right side image click

      setCurrFirstImg(currMiddleImgRef.current);
    } else {
      // Left side image click
      currMiddleImgRef.current = currMiddleImgRef.current + 1 < imgList.length ? currMiddleImgRef.current + 1 : 0; // Conditions to handle cycle

      setCurrFirstImg(currMiddleImgRef.current);
    }
  };

  const constructVisibleItemsProps = () => {
    const visibleItemsProps = {}; // To store config for items that are visibile in the carousel

    visibleItemsProps.order = [];
    let curr_center = currFirstImg; // Storing the Current Middle element in focus

    let timesToIterate = 0; // To iterate through all visible number of images.

    let zIndex = -elementsInRight; // We start from left to right and Zindex has to keep on increasing till middle then has to reduce.

    let xTranslate = img_width; // To move the element with respect to x axis

    let zTranslate = 0; // To reduce image size for images apart from center

    let opacity = 1; // ARALIKLAR BURADA = 4

    const division = img_width * (4.4 / elementsInLeft); // Specifies the length that next image has to move away from with respect to current image (1.6 times the current image)

    let opacityDivider = 1 / elementsInRight; // minimum opacity should be 0.3 (1-0.7)

    let rightEltCount = elementsInRight;
    let leftEltCount = elementsInLeft; // including middle element

    let curr_center_copy = curr_center;

    while (timesToIterate < visibleImages) {
      const styles = {};
      let currImgIndex;
      let currImgIndexOnRight = true; // Tells if in this iteration the currently iterated image lies left to the middle image or not
      // To set properties for elements in right side

      if (timesToIterate < elementsInRight) {
        const nextIndex = curr_center - rightEltCount;
        currImgIndex = nextIndex > -1 ? nextIndex : imgList.length - Math.abs(nextIndex); // Gives the rightmost elemnt in first iteration and then the subsequent elements down the iteration

        opacity = 1 - opacityDivider * rightEltCount; // To assign lowest opacity to last element and increaing it till we come to middle

        zTranslate = -division * rightEltCount; // To increase the size of the images subsequently from last to middle

        xTranslate = img_width - division * rightEltCount; // X coordinate position

        rightEltCount--;
      } else {
        // To set properties for elements in center and to left of it. All props behaves similar to right
        currImgIndexOnRight = false;
        currImgIndex = curr_center_copy;

        if (curr_center_copy + 1 >= imgList.length) {
          // to maintain cyclic carousel
          curr_center_copy = 0;
        } else {
          curr_center_copy++;
        }

        opacity = 1 - opacityDivider * Math.abs(leftEltCount - (timesToIterate + 1));
        zTranslate = -division * Math.abs(leftEltCount - (timesToIterate + 1));
        xTranslate = img_width + division * Math.abs(leftEltCount - (timesToIterate + 1));
      } // Assigning above calculated values to 'styles' object


      styles.transform = 'translateX(' + xTranslate + 'px) translateZ(' + zTranslate + 'px)';
      styles.opacity = opacity;
      styles.zIndex = currImgIndexOnRight ? zIndex++ : zIndex--; // To reduce zIndex while going through left elements

      visibleItemsProps.order.push(currImgIndex); // Push the current image number in the orders array

      visibleItemsProps[currImgIndex] = {
        styles
      }; // pushing all previously created styles

      timesToIterate++;
    }

    durationRef.current = actualFirst === '' ? duration : duration / imgDifference.current; // duration will be user given if he clicks next image or
    // we divide the duration by number of images skipped

    setVisibleItemsProps(visibleItemsProps); // setting state for visible items
  };

  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
    clearInterval(intervalRef.current);

    if (actualFirst !== '') {
      intervalRef.current = setInterval(() => {
        if (actualFirst !== '' && actualFirst !== currMiddleImgRef.current) {
          // If the currentimage in middle is not actually clicked image then gotoNext image
          cycleToNextImage(actualFirst);
        } else if (actualFirst !== '' && actualFirst === currMiddleImgRef.current) {
          setActualFirst('');
          imgDifference.current = 1;
          clearInterval(intervalRef.current); // If actual clicked and middle image are same we are all set to clear intervals, as they are unnecessary now
        }
      }, durationRef.current - 100); // Introduced an advance of 100ms to begin bringing nextimage
      // to middle before the previous one settles down else it looks jerky
    }
  }, [actualFirst]);
  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
    constructVisibleItemsProps(); // This constructs all css properties to the elements in visibility

    currMiddleImgRef.current = currFirstImg; // Need to set it here as well so while accessing inside interval it will have the latest value
  }, [currFirstImg]);
  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(() => {
    if (autoNext) {
      setInterval(() => {
        const nextImg = currMiddleImgRef.current + 1 < imgList.length ? currMiddleImgRef.current + 1 : 0;
        setCurrFirstImg(nextImg);
      }, timeForNext);
    }
  }, []);
  const [middleImageKey, setMiddleImageKey] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(0);

  const loadCarousel = () => {
    return __jsx("div", {
      className: `carousel__3D carousel__3D--${props.name}`
    }, __jsx("ul", {
      ref: wrapper,
      className: "carousel__wrapper",
      style: {
        height: parentHeight + 'px',
        width: parentWidth + 'px',
        padding: parentPad + 'px',
        perspective: '500px'
      }
    }, imgList.map((image, index) => {
      const displayNone = visibleItemsProps.order.indexOf(index) === -1; // To not to show images that are out of visibility scope

      const styles = visibleItemsProps[index] ? visibleItemsProps[index].styles : {};
      return __jsx("li", {
        key: index,
        className: 'carousel__item ' + (displayNone ? 'd-none' : ''),
        style: _objectSpread({}, styles, {
          position: 'absolute',
          transition: `all ${durationRef.current}ms ease `
        }),
        onClick: e => {
          changeCenter({
            e,
            index
          });
          setMiddleImageKey(index);
        }
      }, __jsx("img", {
        src: image,
        alt: 'img',
        width: img_width,
        height: img_height
      }));
    })), __jsx("div", {
      className: `carousel__infos carousel__infos--${props.name}`
    }, props.name === "team" ? props.data.map((item, key) => key === middleImageKey && __jsx("div", {
      key: key,
      className: "infos__item"
    }, __jsx("h3", null, item.mitarbeiter_name), __jsx("h4", null, item.mitarbeiter_titel), __jsx(react_obfuscate__WEBPACK_IMPORTED_MODULE_10___default.a, {
      email: item.mitarbeiter_email
    }), __jsx(react_obfuscate__WEBPACK_IMPORTED_MODULE_10___default.a, {
      tel: item.mitarbeiter_telefon
    }))) : props.data.map((item, key) => key === middleImageKey && __jsx("div", {
      key: key,
      className: "infos__item infos__item--downloads"
    }, __jsx("h4", null, item.name), __jsx("a", {
      href: item.link,
      target: "_blank",
      className: "singleloc__button"
    }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      type: "factsheet",
      name: "DOWNLOAD"
    }))))), props.name === "downloads" && __jsx("div", {
      className: "download__section--factsheet"
    }, __jsx("h2", null, "Factsheets"), html_react_parser__WEBPACK_IMPORTED_MODULE_9___default()(props.content.Inhalt)));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, loadCarousel());
});

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "LR/J":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SWa5");

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "RMLO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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
        id: "linear-gradient",
        x1: "10.8737",
        y1: "18.4454",
        x2: "12.5293",
        y2: "4.5317",
        gradientUnits: "userSpaceOnUse"
      }, __jsx("stop", {
        offset: "0",
        stopColor: "#632948"
      }), __jsx("stop", {
        offset: "1",
        stopColor: "#2D1D46"
      }))), __jsx("path", {
        className: "st1",
        fill: "url(#linear-gradient)",
        d: "M12,2C8.1,2,5,5.1,5,9c0,5.2,7,13,7,13s7-7.8,7-13C19,5.1,15.9,2,12,2z M12,12.7c-1.8,0-3.2-1.4-3.2-3.2 s1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2S13.8,12.7,12,12.7z"
      })));

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "SWa5":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "WBBS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");
/* harmony import */ var _components_templates_downloads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YAJW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DownloadsPage = ({
  data
}) => __jsx(_components_templates_downloads__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  data: data
});

DownloadsPage.getInitialProps = async () => {
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[/* API_HOST */ "a"]}en/downloads`);
  const json = await res.json();
  return {
    data: json
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadsPage);

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "YAJW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LR/J");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F9Bs");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("OvnE");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("J+ET");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RMLO");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0CQf");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/* harmony default export */ __webpack_exports__["a"] = (function ({
  data
}) {
  const images = data.fields.factsheets.factsheet_bearbeitung.map(item => item.factsheet_bild);
  const pdfData = data.fields.factsheets.factsheet_bearbeitung.map(item => ({
    name: item.factsheet_name,
    link: item.factsheet_dokument
  }));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "page__title page__title--downloads"
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    slug: data.slug,
    title: data.title
  }), __jsx("h1", null, data.title)), __jsx(_carousel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    name: "downloads",
    data: pdfData,
    content: data.fields.factsheets,
    imgList: images,
    img_width: 250,
    img_height: 180,
    visibleImages: 5,
    duration: 750
  }), __jsx("div", {
    className: "presskit",
    id: "presskit"
  }, __jsx("div", {
    className: "presskit__block"
  }, __jsx("h2", null, "Presskit"), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.fields.presskit.inhalt)), __jsx("div", {
    className: "presskit__block"
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(data.fields.presskit.bearbeitung).map((item, key) => __jsx("a", {
    key: key,
    href: item[1],
    target: "_blank",
    className: "singleloc__button"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "factsheet",
    name: item[0].split('_').length > 1 ? `${item[0].split('_')[0]} ${item[0].split('_')[1]}` : item[0]
  }))))));
});
;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cYuJ":
/***/ (function(module, exports) {

module.exports = require("react-obfuscate");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_HOST; });
const API_HOST = 'http://goldendoor-api.narcissundtaurus.com/wp-json/gd/';

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ })

/******/ });