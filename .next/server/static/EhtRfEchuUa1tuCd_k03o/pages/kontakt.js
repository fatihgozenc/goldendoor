module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		22: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"31":"ad58a27a4eb77db22d81"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2ebh");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2ebh":
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
  layout
}) => __jsx(_components_templates_kontakt__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  data: data,
  layout: layout
});

KontaktPage.getInitialProps = async () => {
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[/* API_HOST */ "a"]}de/contact`);
  const layoutRes = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__[/* API_HOST */ "a"]}de/layout`);
  const layoutJson = await layoutRes.json();
  const json = await res.json();
  return {
    data: json,
    layout: layoutJson
  };
};

/* harmony default export */ __webpack_exports__["default"] = (KontaktPage);

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

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

/***/ "c5S0":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fdHT":
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jY1r":
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2wwy");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("F9Bs");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("OvnE");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("c5S0");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(() => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, "1hZ5")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("1hZ5")],
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ __webpack_exports__["a"] = (({
  data,
  layout
}) => {
  const contactInfo = layout.footer.info;
  const steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];
  const [eventDate, setEventDate] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(new Date());
  const [elusiveDate, setElusiveDate] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(new Date());
  const [beginTime, setBeginTime] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(new Date());
  const [endTime, setEndTime] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(new Date());
  const formSteps = react__WEBPACK_IMPORTED_MODULE_9___default.a.useRef();
  const stepSlider = react__WEBPACK_IMPORTED_MODULE_9___default.a.useRef();
  const dateRange = react__WEBPACK_IMPORTED_MODULE_9___default.a.useRef();
  const dates = react__WEBPACK_IMPORTED_MODULE_9___default.a.useRef();
  const firstStepLock = react__WEBPACK_IMPORTED_MODULE_9___default.a.useRef();
  const secondStepLock = react__WEBPACK_IMPORTED_MODULE_9___default.a.useRef();

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
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_13__["useForm"])();
  const [submitted, setSubmitted] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);

  const onSubmit = values => {
    const dates = {
      eventdatum: eventDate.toDateString(),
      ausweichtermin: elusiveDate.toDateString(),
      eventzeitbeginn: beginTime.toDateString(),
      eventzeitend: endTime.toDateString()
    };

    const finalForm = _objectSpread({}, values, {}, dates);

    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(finalForm)
    }).then(res => {
      res.status === 200 ? setSubmitted(!submitted) : '';
    });
  };

  react__WEBPACK_IMPORTED_MODULE_9___default.a.useEffect(() => {
    stepSlider.current.firstElementChild.classList.add('activeStep');
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
    className: "page__title page__title--contact"
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
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
    className: "contact__stepblock"
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
  }, steps[0].kontakt_frage_6.datum), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
    selected: eventDate,
    name: "eventdatum",
    ref: register,
    onChange: date => setEventDate(date)
  })), __jsx("div", {
    className: "contact__stepblock--date"
  }, __jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.ausweichtermin), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
    selected: elusiveDate,
    name: "ausweichtermin",
    ref: register,
    onChange: date => setElusiveDate(date)
  })), __jsx("div", {
    className: "contact__stepblock--date"
  }, __jsx("label", {
    htmlFor: "date_of_elusive"
  }, steps[0].kontakt_frage_6.beginn), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
  }, steps[0].kontakt_frage_6.ende), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
      required: true
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
  }, item.option)))), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(steps[2].andere_fragen).map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepblock"
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_${item}`
  }, item), key === 0 | 4 ? __jsx("input", {
    ref: register,
    className: "input__text",
    type: "text",
    name: `kontakt_${item.toLowerCase()}`
  }) : __jsx("input", {
    ref: register({
      required: true
    }),
    className: "input__text",
    type: "text",
    name: `kontakt_${item.toLowerCase()}`
  }))), __jsx("div", {
    className: "contact__stepblock"
  }, __jsx("label", {
    htmlFor: "event_nachricht"
  }, steps[0].kontakt_frage_4), __jsx("textarea", {
    ref: register,
    name: "event_nachricht",
    cols: "30",
    rows: "5"
  }))), __jsx("div", {
    className: "contact__buttongroup"
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond"
  }, data.fields.buttonfelder.zuruck), __jsx("button", {
    type: "submit",
    className: "golden__button"
  }, data.fields.buttonfelder.senden)))))), __jsx("div", {
    className: "contact__info"
  }, __jsx("div", {
    className: "contact__info--map"
  }, __jsx(MapContainer, null)), __jsx("div", {
    className: "contact__info--address"
  }, __jsx("div", {
    className: "contact__info--logo"
  }, __jsx("img", {
    src: contactInfo.logo,
    alt: "Golden Door Logo"
  })), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(contactInfo.address).map((item, key) => __jsx("div", {
    key: key
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_12___default()(item))), __jsx("a", {
    href: `tel:${contactInfo.telefon}`
  }, contactInfo.telefon), __jsx("a", {
    href: `mailto:${contactInfo.email.toLowerCase()}`
  }, contactInfo.email))));
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