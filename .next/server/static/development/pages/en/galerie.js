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

/***/ "./components/loopingGallery/LoopingItem.js":
/*!**************************************************!*\
  !*** ./components/loopingGallery/LoopingItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./components/Icon.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LoopingItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const imgRatio = Math.round(props.width / props.height * 10000) / 10000;
  const imgDomWidth = Math.round(props.windowHeight / 5.555 * imgRatio * 100) / 100;
  const imgRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  const openCarousel = e => {
    const imgID = e.currentTarget.classList[1];
    const mainContainer = e.currentTarget.parentElement.parentElement.parentElement;
    mainContainer.lastElementChild.classList.add('show');
    setTimeout(() => {
      mainContainer.lastElementChild.classList.add('gallerySliderOpen');
      setTimeout(() => {
        mainContainer.lastElementChild.lastElementChild.classList.add('gallerySliderBlockOpen');
      }, 750);
    }, 10);
    const elementInCarousel = mainContainer.lastElementChild.getElementsByClassName(`img-${imgID}`);
    const elementInCarouselIndex = elementInCarousel[0].getAttribute('slideindex');
    mainContainer.lastElementChild.lastElementChild.lastElementChild.lastElementChild.children[elementInCarouselIndex].click();
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    props.measure(imgDomWidth);
  }, [imgDomWidth, props]);
  return __jsx("div", {
    ref: imgRef,
    className: `looping_gallery_item ${props.id}`,
    onClick: openCarousel,
    style: {
      width: `${imgDomWidth}px`
    }
  }, __jsx("img", {
    className: "looping_gallery_item-img",
    onLoad: e => e.currentTarget.classList.add('loaded'),
    src: props.highResUrl,
    alt: props.alt
  }), __jsx("div", {
    className: "looping_gallery_item-text"
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "view"
  }), __jsx("h5", null, props.alt, __jsx("span", null, props.type))));
});
/* harmony default export */ __webpack_exports__["default"] = (LoopingItem);

/***/ }),

/***/ "./components/loopingGallery/LoopingRow.js":
/*!*************************************************!*\
  !*** ./components/loopingGallery/LoopingRow.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoopingItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoopingItem */ "./components/loopingGallery/LoopingItem.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const openCarousel = e => {
  const imgID = e.currentTarget.classList[1];
  const mainContainer = e.currentTarget.parentElement.parentElement.parentElement;
  mainContainer.lastElementChild.classList.add('show');
  setTimeout(() => {
    mainContainer.lastElementChild.classList.add('gallerySliderOpen');
    setTimeout(() => {
      mainContainer.lastElementChild.lastElementChild.classList.add('gallerySliderBlockOpen');
    }, 750);
  }, 10);
  const elementInCarousel = mainContainer.lastElementChild.getElementsByClassName(`img-${imgID}`);
  const elementInCarouselIndex = elementInCarousel[0].getAttribute('slideindex');
  mainContainer.lastElementChild.lastElementChild.lastElementChild.lastElementChild.children[elementInCarouselIndex].click();
}; //FUNCTION FOR CLONING THE CHILDREN OF A DOM NODE.


const cloneChildren = el => {
  let items = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(el.childNodes);

  items.forEach(function (item) {
    var clone = item.cloneNode(true);
    clone.addEventListener('click', openCarousel);
    el.appendChild(clone);
  });
};

const LoopingRow = props => {
  //INITIAL DOM WITH IS 0 BECAUSE IMAGES WILL CHANGE SIZE DEPENDING ON SCREEN SIZE
  const [width, setWidth] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const [canStart, setCanStart] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [transition] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(150); //AS A CALLBACK FUNCTION LOADED ITEM SENDS ITS WIDTH TO ROW ELEMENTS' STATE
  //AND WITH THE HELP OF REACT.MEMO zROW ELEMENT DOESN'T RE-RENDER

  const measure = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(n => {
    setWidth(c => Math.round((c + n) * 100) / 100);
    setCanStart(true);
  }, [setWidth]);
  const galleryRow = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(); //THIS CUSTOM HOOK IS FOR TESTING RENDERING COUNT
  // useCountRenders();
  // React.useEffect(() => {
  // 	console.log(galleryRow.current.parentElement.querySelectorAll('.looping_gallery_item'))
  // }, [])

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    //COMPONENTDIDMOUNT
    let row = galleryRow.current; // console.log(`Rows have mounted.`)
    //IF ROW IS ABLE START TO ANIMATE AND ITS' WIDTH IS CALCULATED,
    //THEN CLONE THE CHILDREN

    if (canStart && width > 0) {
      cloneChildren(row);
      row.style.transitionDuration = `${transition}s`;
      row.style.transform = `translateX(-${width}px)`;
    } //COMPONENTWILLUNMOUNT


    return () => {
      if (canStart) {
        localStorage.setItem('shouldBeCloned', 'false'); // console.log('Rows have unmounted')

        row.style.transitionDuration = `0s`;
        row.style.transform = `translateX(0px)`;
      } else {
        return null;
      }
    };
  }, [canStart, transition, width]);

  const loopTheGallery = e => {
    //DETECTING IF TRANSITIONEND FIRES ON ROW ELEMENT ONLY
    if (e.target === galleryRow.current) {
      //RESETS CSS
      galleryRow.current.style.transitionDuration = `0s`;
      galleryRow.current.style.transform = `translateX(0px)`; //RE-INITIALIZING IT

      setTimeout(() => {
        galleryRow.current.style.transitionDuration = `${transition}s`;
        galleryRow.current.style.transform = `translateX(-${width}px)`;
      }, 1);
    }
  };

  return __jsx("div", {
    className: "looping_gallery_row",
    onTransitionEnd: loopTheGallery,
    ref: galleryRow
  }, props.data.map((item, key) => __jsx(_LoopingItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    order: key + 1,
    rowNumber: props.rowNumber,
    id: item.bild.id,
    windowWidth: props.windowWidth,
    windowHeight: props.windowHeight,
    measure: measure,
    key: item.bild.id,
    width: item.bild.sizes["medium_large-width"],
    height: item.bild.sizes["medium_large-height"],
    type: item.info.veranstaltungsart,
    alt: item.info.titel,
    highResUrl: item.bild.sizes.medium
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoopingRow);

/***/ }),

/***/ "./components/loopingGallery/index.js":
/*!********************************************!*\
  !*** ./components/loopingGallery/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoopingRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoopingRow */ "./components/loopingGallery/LoopingRow.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/loopingGallery/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  data,
  windowWidth,
  windowHeight
}) {
  //FUNCTION FOR DISTRIBUTING DATA INTO EQUAL ROWS FROM GIVEN JSON.
  const distributeImageData = (arr, rows) => {
    const rowImgCount = Math.ceil(arr.length / rows);

    const emptyData = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
      length: rows
    }, () => [0]);

    const slicedData = emptyData.map((x, key) => {
      if (key === 0) {
        return arr.slice(key, rowImgCount);
      } else if (key === rows - 1) {
        return arr.slice(rowImgCount * key, -1);
      } else {
        return arr.slice(rowImgCount * key, rowImgCount * (key + 1));
      }
    });
    return slicedData;
  }; //I WANT 4 COLUMNS SO THIS NEEDS TO BE TYPED.


  const loopingRowData = distributeImageData(data, windowWidth > 1600 ? 4 : 3);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "looping_gallery"
  }, loopingRowData.map((rowData, key) => __jsx(_LoopingRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    windowWidth: windowWidth,
    windowHeight: windowHeight,
    key: key,
    rowNumber: key + 1,
    data: rowData
  }))));
});
;

/***/ }),

/***/ "./components/loopingGallery/style.scss":
/*!**********************************************!*\
  !*** ./components/loopingGallery/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/templates/galerie/index.js":
/*!***********************************************!*\
  !*** ./components/templates/galerie/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pure-react-carousel */ "pure-react-carousel");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loopingGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loopingGallery */ "./components/loopingGallery/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Icon */ "./components/Icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./components/templates/galerie/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/fatih/repos/goldendoor-next/components/templates/galerie/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function ({
  data
}) {
  const items = data.fields.galerie_eintrage;

  const closeGallery = e => {
    const bigParent = e.currentTarget.parentElement.parentElement;
    e.currentTarget.parentElement.classList.remove('gallerySliderBlockOpen');
    bigParent.classList.remove('gallerySliderOpen');
    setTimeout(() => {
      bigParent.classList.remove('show');
    }, 750);
  };

  const windowObject = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const [windowWidth, setWindowWidth] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [windowHeight, setWindowHeight] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setWindowWidth(windowObject.current.getBoundingClientRect().width);
    setWindowHeight(windowObject.current.getBoundingClientRect().height);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "page--gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "page__title page__title--contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, data.title)), __jsx("div", {
    ref: windowObject,
    className: "window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    className: "gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_loopingGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: items,
    windowWidth: windowWidth,
    windowHeight: windowHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "gallery__slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "gallery__slider--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "gallery__slider--close",
    onClick: closeGallery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselProvider"], {
    naturalSlideWidth: 220,
    naturalSlideHeight: 180,
    totalSlides: items.length,
    infinite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    className: "gallery__slider--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, items.map((item, key) => __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["Slide"], {
    slideindex: key,
    className: `img-${item.bild.id}`,
    key: item.bild.id,
    index: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    src: item.bild.sizes["1536x1536"],
    alt: item.info.titel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, item.info.titel, " | ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, item.info.veranstaltungsart)), html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(item.inhalt)))), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["ButtonBack"], {
    className: "gallery__slider-nav gallery__slider-nav--back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["ButtonNext"], {
    className: "gallery__slider-nav gallery__slider-nav--next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__["DotGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))))));
});
;

/***/ }),

/***/ "./components/templates/galerie/style.scss":
/*!*************************************************!*\
  !*** ./components/templates/galerie/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./pages/en/galerie.js":
/*!*****************************!*\
  !*** ./pages/en/galerie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_galerie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/templates/galerie */ "./components/templates/galerie/index.js");
var _jsxFileName = "/Users/fatih/repos/goldendoor-next/pages/en/galerie.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GaleriePage = ({
  data
}) => __jsx(_components_templates_galerie__WEBPACK_IMPORTED_MODULE_1__["default"], {
  data: data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
});

GaleriePage.getInitialProps = async () => {
  const res = await fetch(`${"http://goldendoor-api.narcissundtaurus.com/wp-json/gd/"}en/gallery`);
  const json = await res.json();
  return {
    data: json
  };
};

/* harmony default export */ __webpack_exports__["default"] = (GaleriePage);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/en/galerie.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fatih/repos/goldendoor-next/pages/en/galerie.js */"./pages/en/galerie.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ })

/******/ });
//# sourceMappingURL=galerie.js.map