module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		13: 0
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
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + "." + {"36":"37dbb266692b3dcbafc8"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6a60");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6a60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");
/* harmony import */ var _components_templates_kontakt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jY1r");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const KontaktPage = ({
  data,
  layout,
  lang
}) => __jsx(_components_templates_kontakt__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  data: data,
  lang: lang,
  layout: layout
});

KontaktPage.getInitialProps = async () => {
  const lang = 'en';
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[/* API_HOST */ "a"]}en/contact`);
  const layoutRes = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[/* API_HOST */ "a"]}en/layout`);
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

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "aGw4":
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "c5S0":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cYuJ":
/***/ (function(module, exports) {

module.exports = require("react-obfuscate");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "fdHT":
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jY1r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var object_values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(object_values);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// EXTERNAL MODULE: external "serialize-javascript"
var external_serialize_javascript_ = __webpack_require__("aGw4");
var external_serialize_javascript_default = /*#__PURE__*/__webpack_require__.n(external_serialize_javascript_);

// EXTERNAL MODULE: ./components/Breadcrumb.js
var Breadcrumb = __webpack_require__("F9Bs");

// EXTERNAL MODULE: external "react-obfuscate"
var external_react_obfuscate_ = __webpack_require__("cYuJ");
var external_react_obfuscate_default = /*#__PURE__*/__webpack_require__.n(external_react_obfuscate_);

// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__("OvnE");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/SendingQuery.js


var __jsx = external_react_default.a.createElement;

const SendingQuery = props => {
  const ellipse = external_react_default.a.useRef();
  const tick = external_react_default.a.useRef();
  const text = external_react_default.a.useRef();
  external_react_default.a.useEffect(() => {
    setTimeout(() => {
      ellipse.current.classList.add('stopEllipse');
      tick.current.classList.add('showTick');
      text.current.classList.add('showText');
    }, 2000);
  }, []);
  return __jsx("div", {
    className: "jsx-3539097141" + " " + "sendingQuery"
  }, __jsx("svg", {
    ref: ellipse,
    viewBox: "0 0 244 244",
    className: "jsx-3539097141" + " " + "sendingQuery-ellipse"
  }, __jsx("defs", {
    className: "jsx-3539097141"
  }, __jsx("linearGradient", {
    id: "sendingGradient",
    x1: "33.68",
    y1: "33.68",
    x2: "206.22",
    y2: "206.22",
    gradientUnits: "userSpaceOnUse",
    className: "jsx-3539097141"
  }, __jsx("stop", {
    offset: "0.15",
    stopColor: props.color,
    stopOpacity: "0",
    className: "jsx-3539097141"
  }), __jsx("stop", {
    offset: "0.25",
    stopColor: props.color,
    stopOpacity: "0.22",
    className: "jsx-3539097141"
  }), __jsx("stop", {
    offset: "0.38",
    stopColor: props.color,
    stopOpacity: "0.45",
    className: "jsx-3539097141"
  }), __jsx("stop", {
    offset: "0.51",
    stopColor: props.color,
    stopOpacity: "0.65",
    className: "jsx-3539097141"
  }), __jsx("stop", {
    offset: "0.64",
    stopColor: props.color,
    stopOpacity: "0.8",
    className: "jsx-3539097141"
  }), __jsx("stop", {
    offset: "0.76",
    stopColor: props.color,
    stopOpacity: "0.91",
    className: "jsx-3539097141"
  }), __jsx("stop", {
    offset: "0.88",
    stopColor: props.color,
    stopOpacity: "0.98",
    className: "jsx-3539097141"
  }), __jsx("stop", {
    offset: "1",
    stopColor: props.color,
    className: "jsx-3539097141"
  }))), __jsx("path", {
    fill: "url(#sendingGradient)",
    d: "M122,0A122,122,0,1,0,244,122,122,122,0,0,0,122,0Zm0,236.5A114.5,114.5,0,1,1,236.5,122,114.5,114.5,0,0,1,122,236.5Z",
    className: "jsx-3539097141"
  })), __jsx("svg", {
    ref: tick,
    viewBox: "0 0 138.35 99.15",
    className: "jsx-3539097141" + " " + "sendingQuery-tick"
  }, __jsx("path", {
    fill: props.color,
    d: "M.85,42.5c2.41,1.55,4.74,3.17,7,4.84s4.57,3.34,6.79,5.08c4.47,3.45,8.82,7,13.09,10.66s8.45,7.38,12.57,11.18S48.42,82,52.27,86.07h-8.7c7.75-7.25,15.81-14.19,23.5-21.5S82.54,50,90.37,42.87l11.71-10.79,11.76-10.74Q125.62,10.61,137.5,0l.85.85Q127.73,12.73,117,24.51L106.27,36.27,95.48,48C88.31,55.81,81,63.51,73.78,71.28S59.53,87,52.27,94.77l-4.09,4.38-4.61-4.38c-4.06-3.85-8-7.81-11.81-11.93s-7.54-8.29-11.18-12.57S13.37,61.65,9.92,57.18C8.18,55,6.5,52.68,4.84,50.39s-3.29-4.63-4.84-7Z",
    className: "jsx-3539097141"
  })), __jsx("p", {
    ref: text,
    className: "jsx-3539097141" + " " + "sendingQuery-message"
  }, props.message), __jsx(style_default.a, {
    id: "3539097141"
  }, ["@-webkit-keyframes rotate-jsx-3539097141{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotate-jsx-3539097141{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", ".sendingQuery.jsx-3539097141{width:200px;position:relative;}", ".sendingQuery-ellipse.jsx-3539097141{-webkit-transition:.5s all;transition:.5s all;-webkit-animation:rotate-jsx-3539097141 1s linear infinite;animation:rotate-jsx-3539097141 1s linear infinite;}", ".sendingQuery-tick.jsx-3539097141{position:absolute;-webkit-transition:.5s all;transition:.5s all;width:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".sendingQuery-message.jsx-3539097141{text-align:center;position:absolute;left:0;right:0;opacity:0;-webkit-transition:.5s all;transition:.5s all;bottom:-60%;}", ".stopEllipse.jsx-3539097141{opacity:0;-webkit-transition:.5s all;transition:.5s all;}", ".showTick.jsx-3539097141{-webkit-transition:.5s all ease-out;transition:.5s all ease-out;width:100px;}", ".showText.jsx-3539097141{-webkit-transition:.5s all;transition:.5s all;opacity:1;bottom:-50%;}"]));
};

/* harmony default export */ var components_SendingQuery = (SendingQuery);
// EXTERNAL MODULE: ./components/templates/kontakt/style.scss
var style = __webpack_require__("c5S0");

// CONCATENATED MODULE: ./components/templates/kontakt/index.js









var kontakt_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }











const MapContainer = dynamic_default()(() => __webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(null, "1hZ5")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("1hZ5")],
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ var kontakt = __webpack_exports__["a"] = (({
  data,
  layout,
  lang
}) => {
  console.log(data);
  const contactInfo = layout.footer.info;
  const steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];
  const [eventDate, setEventDate] = external_react_default.a.useState(new Date());
  const [elusiveDate, setElusiveDate] = external_react_default.a.useState(new Date());
  const [beginTime, setBeginTime] = external_react_default.a.useState(new Date());
  const [endTime, setEndTime] = external_react_default.a.useState(new Date());
  const formSteps = external_react_default.a.useRef();
  const stepSlider = external_react_default.a.useRef();
  const dateRange = external_react_default.a.useRef();
  const dates = external_react_default.a.useRef();
  const firstStepLock = external_react_default.a.useRef();
  const secondStepLock = external_react_default.a.useRef();
  const successBlock = external_react_default.a.useRef();

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
  } = Object(external_react_hook_form_["useForm"])();
  const [submitted, setSubmitted] = external_react_default.a.useState(false);

  const onSubmit = values => {
    const dates = {
      lang: lang,
      eventdatum: eventDate.toDateString(),
      ausweichtermin: elusiveDate.toDateString(),
      eventzeitbeginn: beginTime.toLocaleTimeString('de-DE'),
      eventzeitend: endTime.toLocaleTimeString('de-DE')
    };

    const finalForm = _objectSpread({}, values, {}, dates);

    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: external_serialize_javascript_default()(finalForm)
    }).then(res => {
      res.status === 200 ? setSubmitted(!submitted) : '';
    }).catch(err => console.log(err));
  };

  external_react_default.a.useEffect(() => {
    stepSlider.current.firstElementChild.classList.add('activeStep');
  }, []);
  external_react_default.a.useEffect(() => {
    console.log(submitted);

    if (submitted) {
      formSteps.current.classList.add('hideForm');
      successBlock.current.classList.add('showSuccess');
    }
  }, [submitted]);
  return kontakt_jsx(external_react_default.a.Fragment, null, kontakt_jsx(external_next_seo_["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description
  }), kontakt_jsx("div", {
    className: "page__title page__title--contact"
  }, kontakt_jsx(Breadcrumb["a" /* default */], {
    slug: data.slug,
    title: data.title
  }), kontakt_jsx("h1", null, data.title)), kontakt_jsx("div", {
    className: "contact"
  }, kontakt_jsx("div", {
    ref: stepSlider,
    className: "contact__stepslider"
  }, steps.map((item, key) => kontakt_jsx("div", {
    key: key,
    className: "contact__stepslider--ellipse"
  }, kontakt_jsx("span", null, key + 1)))), kontakt_jsx("div", {
    className: "contact--wrapper"
  }, kontakt_jsx("form", {
    className: "contact__steps",
    ref: formSteps,
    onSubmit: handleSubmit(onSubmit)
  }, kontakt_jsx("div", {
    className: "contact__step"
  }, kontakt_jsx("div", {
    className: "contact__step--flexWrapper"
  }, kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    htmlFor: "event_type",
    className: "label__select"
  }, steps[0].kontakt_frage_1.frage), kontakt_jsx("select", {
    name: "event_type",
    ref: register
  }, kontakt_jsx("optgroup", null, steps[0].kontakt_frage_1.optionen.map((item, key) => kontakt_jsx("option", {
    key: key,
    value: item.option
  }, item.option))))), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    htmlFor: "event_location",
    className: "label__select"
  }, steps[0].kontakt_frage_2.frage), kontakt_jsx("select", {
    ref: register,
    name: "event_location"
  }, kontakt_jsx("optgroup", null, steps[0].kontakt_frage_2.optionen.map((item, key) => kontakt_jsx("option", {
    key: key,
    value: item.option
  }, item.option)))))), kontakt_jsx("div", {
    className: "contact__step--flexWrapper-xl"
  }, kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    ref: firstStepLock,
    htmlFor: "event_date_answer",
    className: "contact__stepblock--inner"
  }, steps[0].kontakt_frage_3.frage), steps[0].kontakt_frage_3.optionen.map((item, key) => kontakt_jsx("p", {
    className: "contact__stepblock--inner",
    key: key
  }, kontakt_jsx("input", {
    onClick: hideDates,
    ref: register,
    className: "input__radio",
    type: "radio",
    name: "event_date_answer",
    value: item.option
  }), kontakt_jsx("span", {
    className: "label__radio"
  }, item.option)))), kontakt_jsx("div", {
    className: "contact__stepblock",
    ref: dateRange
  }, kontakt_jsx("label", {
    className: "label__text",
    htmlFor: "date_range"
  }, steps[0].kontakt_frage_5), kontakt_jsx("input", {
    className: "input__text",
    name: "date_range",
    ref: register,
    type: "text"
  })), kontakt_jsx("div", {
    ref: dates,
    className: "contact__stepblock contact__stepblock--datewrapper hidden"
  }, kontakt_jsx("div", {
    className: "contact__stepblock--date"
  }, kontakt_jsx("label", {
    htmlFor: "date_of_event"
  }, steps[0].kontakt_frage_6.datum), kontakt_jsx(external_react_datepicker_default.a, {
    selected: eventDate,
    name: "eventdatum",
    ref: register,
    onChange: date => setEventDate(date)
  })), kontakt_jsx("div", {
    className: "contact__stepblock--date"
  }, kontakt_jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.ausweichtermin), kontakt_jsx(external_react_datepicker_default.a, {
    selected: elusiveDate,
    name: "ausweichtermin",
    ref: register,
    onChange: date => setElusiveDate(date)
  })), kontakt_jsx("div", {
    className: "contact__stepblock--date"
  }, kontakt_jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.beginn), kontakt_jsx(external_react_datepicker_default.a, {
    ref: register,
    name: "event_beginn_zeit",
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: beginTime,
    onChange: date => setBeginTime(date)
  })), kontakt_jsx("div", {
    className: "contact__stepblock--date"
  }, kontakt_jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.ende), kontakt_jsx(external_react_datepicker_default.a, {
    name: "event_end_zeit",
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: endTime,
    onChange: date => setEndTime(date)
  })))), kontakt_jsx("a", {
    href: "#",
    className: "golden__button golden__button--center",
    onClick: changeStep
  }, data.fields.buttonfelder.prufen)), kontakt_jsx("div", {
    className: "contact__step"
  }, kontakt_jsx("h3", null, steps[1].feld_1.titel), kontakt_jsx("div", {
    className: "contact__step--wrapper"
  }, kontakt_jsx("div", {
    className: "contact__step--flexWrapper"
  }, kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    ref: secondStepLock,
    className: "label__text",
    htmlFor: "personenzahl"
  }, steps[1].feld_1.frage_1), kontakt_jsx("input", {
    onChange: removeUnchecked,
    type: "text",
    ref: register({
      required: true,
      maxLength: 30
    }),
    className: "input__text",
    name: "personenzahl"
  })), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    htmlFor: "event_max_budget",
    className: "contact__stepblock--inner"
  }, steps[1].feld_1.frage_2.fragefeld), values_default()(steps[1].feld_1.frage_2.optionen).map((item, key) => kontakt_jsx("p", {
    className: "contact__stepblock--inner",
    key: key
  }, kontakt_jsx("input", {
    ref: register,
    type: "radio",
    className: "input__radio",
    name: "event_max_budget",
    value: item
  }), kontakt_jsx("span", {
    className: "label__radio"
  }, item))))), kontakt_jsx("h3", null, steps[1].feld_2.titel), kontakt_jsx("div", {
    className: "contact__step--flexWrapper-xl"
  }, values_default()(steps[1].feld_2).slice(1).map((item, key) => kontakt_jsx("div", {
    key: key,
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    htmlFor: `event_${item.fragefeld.toLowerCase()}`,
    className: "label__select"
  }, item.fragefeld), kontakt_jsx("select", {
    ref: register,
    name: `event_${item.fragefeld.toLowerCase()}`
  }, item.optionen.map((subItem, subKey) => kontakt_jsx("option", {
    key: subKey,
    value: subItem.option
  }, subItem.option))))))), kontakt_jsx("div", {
    className: "contact__buttongroup"
  }, kontakt_jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goFirst"
  }, data.fields.buttonfelder.zuruck), kontakt_jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goNext"
  }, data.fields.buttonfelder.weiter))), kontakt_jsx("div", {
    className: "contact__step"
  }, kontakt_jsx("h3", null, steps[2].titel), kontakt_jsx("div", {
    className: "contact__step--flexWrapper"
  }, kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    htmlFor: "kontakt_anrede",
    className: "label__select"
  }, steps[2].anredefeld.frage), kontakt_jsx("select", {
    ref: register,
    name: "kontakt_anrede"
  }, steps[2].anredefeld.sex.map((item, key) => kontakt_jsx("option", {
    key: key,
    value: item.option
  }, item.option)))), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_company`
  }, steps[2].andere_fragen.firma), kontakt_jsx("input", {
    ref: register({
      maxlength: 40
    }),
    className: "input__text",
    type: "text",
    name: `kontakt_company`
  })), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_name`
  }, steps[2].andere_fragen.vorname), kontakt_jsx("input", {
    ref: register({
      required: true,
      maxlength: 20,
      pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    }),
    className: "input__text",
    type: "text",
    name: `kontakt_name`
  }), errors.kontakt_name && data.fields.fehlerfelder[1].text.toUpperCase()), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_surname`
  }, steps[2].andere_fragen.nachname), kontakt_jsx("input", {
    ref: register({
      required: true,
      maxlength: 25,
      pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    }),
    className: "input__text",
    type: "text",
    name: `kontakt_surname`
  }), errors.kontakt_surname && data.fields.fehlerfelder[1].text.toUpperCase()), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_email`
  }, steps[2].andere_fragen.email), kontakt_jsx("input", {
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
  }), errors.kontakt_email && errors.kontakt_email.message), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_phone`
  }, steps[2].andere_fragen.telefon), kontakt_jsx("input", {
    ref: register({
      maxlength: 35
    }),
    className: "input__text",
    type: "tel",
    name: `kontakt_phone`
  })), kontakt_jsx("div", {
    className: "contact__stepblock"
  }, kontakt_jsx("label", {
    htmlFor: "event_nachricht"
  }, steps[0].kontakt_frage_4), kontakt_jsx("textarea", {
    ref: register,
    name: "event_nachricht",
    cols: "30",
    rows: "5"
  }))), kontakt_jsx("div", {
    className: "contact__buttongroup"
  }, kontakt_jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond"
  }, data.fields.buttonfelder.zuruck), kontakt_jsx("button", {
    type: "submit",
    className: "golden__button"
  }, data.fields.buttonfelder.senden)))), kontakt_jsx("div", {
    className: "contact__success"
  }, kontakt_jsx("div", {
    ref: successBlock,
    className: "contact__success--wrapper"
  }, submitted && kontakt_jsx(components_SendingQuery, {
    color: "#C2AC84",
    message: data.fields.fehlerfelder[2].text
  }))))), kontakt_jsx("div", {
    className: "contact__info"
  }, kontakt_jsx("div", {
    className: "contact__info--map"
  }, kontakt_jsx(MapContainer, {
    data: data.fields.karte_koordinaten
  })), kontakt_jsx("div", {
    className: "contact__info--address"
  }, kontakt_jsx("div", {
    className: "contact__info--logo"
  }, kontakt_jsx("img", {
    src: contactInfo.logo,
    alt: "Golden Door Logo"
  })), values_default()(contactInfo.address).map((item, key) => kontakt_jsx("div", {
    key: key
  }, external_html_react_parser_default()(item))), kontakt_jsx(external_react_obfuscate_default.a, {
    tel: contactInfo.telefon.split('T:')[1]
  }), kontakt_jsx(external_react_obfuscate_default.a, {
    email: contactInfo.email.toLowerCase()
  }))));
});

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