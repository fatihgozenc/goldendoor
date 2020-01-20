module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/en/kontakt.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/Breadcrumb.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Breadcrumb = ({
  slug,
  title
}) => {
  return __jsx("div", {
    className: "hero__breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "HOME"), " > ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

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
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.scss */ "./components/templates/kontakt/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/templates/kontakt/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../MapContainer */ "./components/MapContainer.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../MapContainer */ "./components/MapContainer.js")],
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (({
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

  const onSubmit = values => {
    const dates = {
      eventdatum: eventDate.toDateString(),
      ausweichtermin: elusiveDate.toDateString(),
      eventzeitbeginn: beginTime.toDateString(),
      eventzeitend: endTime.toDateString()
    };

    const finalForm = _objectSpread({}, values, {}, dates);

    console.log(finalForm);
  };

  const getFormData = e => {
    const formElement = e.currentTarget.parentElement.parentElement.parentElement;

    const inputs = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_7___default()(formElement.getElementsByTagName('input'));

    const selects = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_7___default()(formElement.getElementsByTagName('select'));

    const textArea = formElement.getElementsByTagName('textarea');
    const textAreaValue = ['nachricht', textArea[0].value];
    const selectValues = selects.map((item, key) => [item.getAttribute('name'), item.value]);
    const inputValues = inputs.map((item, key) => {
      if (item.type === 'radio' && item.checked === true) {
        return [item.getAttribute('name'), item.value];
      } else if (item.type !== 'radio') {
        return [item.getAttribute('name'), item.value];
      }
    });
    console.log(inputValues.concat(selectValues, ['nachricht', textArea[0].value]));
  };

  react__WEBPACK_IMPORTED_MODULE_9___default.a.useEffect(() => {
    stepSlider.current.firstElementChild.classList.add('activeStep'); // dates.current.classList.add('hideDates')
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
    className: "page__title page__title--contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_11__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, data.title)), __jsx("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("div", {
    ref: stepSlider,
    className: "contact__stepslider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, steps.map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepslider--ellipse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, key + 1)))), __jsx("div", {
    className: "contact--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("form", {
    className: "contact__steps",
    ref: formSteps,
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_type",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, steps[0].kontakt_frage_1.frage), __jsx("select", {
    name: "event_type",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, steps[0].kontakt_frage_1.optionen.map((item, key) => __jsx("option", {
    key: key,
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, item.option))))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, steps[0].kontakt_frage_2.frage), __jsx("select", {
    ref: register,
    name: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, steps[0].kontakt_frage_2.optionen.map((item, key) => __jsx("option", {
    key: key,
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, item.option)))))), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx("label", {
    ref: firstStepLock,
    htmlFor: "event_date_answer",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, steps[0].kontakt_frage_3.frage), steps[0].kontakt_frage_3.optionen.map((item, key) => __jsx("p", {
    className: "contact__stepblock--inner",
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, __jsx("input", {
    onClick: hideDates,
    ref: register,
    className: "input__radio",
    type: "radio",
    name: "event_date_answer",
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }), __jsx("span", {
    className: "label__radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, item.option)))), __jsx("div", {
    className: "contact__stepblock",
    ref: dateRange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "date_range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, steps[0].kontakt_frage_5), __jsx("input", {
    className: "input__text",
    name: "date_range",
    ref: register,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  })), __jsx("div", {
    ref: dates,
    className: "contact__stepblock contact__stepblock--datewrapper hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_event",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.datum), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
    selected: eventDate,
    name: "eventdatum",
    ref: register,
    onChange: date => setEventDate(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.ausweichtermin), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
    selected: elusiveDate,
    name: "ausweichtermin",
    ref: register,
    onChange: date => setElusiveDate(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.beginn), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
    ref: register,
    name: "event_beginn_zeit",
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: beginTime,
    onChange: date => setBeginTime(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.ende), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
    name: "event_end_zeit",
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: endTime,
    onChange: date => setEndTime(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  })))), __jsx("a", {
    href: "#",
    className: "golden__button golden__button--center",
    onClick: changeStep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, data.fields.buttonfelder.prufen)), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  }, steps[1].feld_1.titel), __jsx("div", {
    className: "contact__step--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, __jsx("label", {
    ref: secondStepLock,
    className: "label__text",
    htmlFor: "personenzahl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }, steps[1].feld_1.frage_1), __jsx("input", {
    onChange: removeUnchecked,
    type: "text",
    ref: register({
      required: true
    }),
    className: "input__text",
    name: "personenzahl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_max_budget",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, steps[1].feld_1.frage_2.fragefeld), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(steps[1].feld_1.frage_2.optionen).map((item, key) => __jsx("p", {
    className: "contact__stepblock--inner",
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx("input", {
    ref: register,
    type: "radio",
    className: "input__radio",
    name: "event_max_budget",
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }), __jsx("span", {
    className: "label__radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, item))))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, steps[1].feld_2.titel), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(steps[1].feld_2).slice(1).map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: `event_${item.fragefeld.toLowerCase()}`,
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, item.fragefeld), __jsx("select", {
    ref: register,
    name: `event_${item.fragefeld.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, item.optionen.map((subItem, subKey) => __jsx("option", {
    key: subKey,
    value: subItem.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }, subItem.option))))))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goFirst",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }, data.fields.buttonfelder.zuruck), __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goNext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, data.fields.buttonfelder.weiter))), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: undefined
  }, steps[2].titel), __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "kontakt_anrede",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  }, steps[2].anredefeld.frage), __jsx("select", {
    ref: register,
    name: "kontakt_anrede",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: undefined
  }, steps[2].anredefeld.sex.map((item, key) => __jsx("option", {
    key: key,
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: undefined
  }, item.option)))), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(steps[2].andere_fragen).map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `kontakt_${item}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: undefined
  }, item), key === 0 | 4 ? __jsx("input", {
    ref: register,
    className: "input__text",
    type: "text",
    id: `kontakt_${item.toLowerCase()}`,
    name: `kontakt_${item.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: undefined
  }) : __jsx("input", {
    ref: register({
      required: true
    }),
    className: "input__text",
    type: "text",
    id: `kontakt_${item.toLowerCase()}`,
    name: `kontakt_${item.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_nachricht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: undefined
  }, steps[0].kontakt_frage_4), __jsx("textarea", {
    ref: register,
    name: "event_nachricht",
    cols: "30",
    rows: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: undefined
  }, data.fields.buttonfelder.zuruck), __jsx("button", {
    type: "submit",
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  }, data.fields.buttonfelder.senden)))))), __jsx("div", {
    className: "contact__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__info--map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: undefined
  }, __jsx(MapContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__info--address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__info--logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: undefined
  }, __jsx("img", {
    src: contactInfo.logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: undefined
  })), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(contactInfo.address).map((item, key) => __jsx("div", {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: undefined
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_12___default()(item))), __jsx("a", {
    href: `tel:${contactInfo.telefon}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: undefined
  }, contactInfo.telefon), __jsx("a", {
    href: `mailto:${contactInfo.email.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: undefined
  }, contactInfo.email))));
});

/***/ }),

/***/ "./components/templates/kontakt/style.scss":
/*!*************************************************!*\
  !*** ./components/templates/kontakt/style.scss ***!
  \*************************************************/
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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

/***/ "./pages/en/kontakt.js":
/*!*****************************!*\
  !*** ./pages/en/kontakt.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _components_templates_kontakt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/templates/kontakt */ "./components/templates/kontakt/index.js");
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/pages/en/kontakt.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const KontaktPage = ({
  data,
  layout
}) => __jsx(_components_templates_kontakt__WEBPACK_IMPORTED_MODULE_2__["default"], {
  data: data,
  layout: layout,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

KontaktPage.getInitialProps = async () => {
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__["API_HOST"]}en/contact`);
  const layoutRes = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__["API_HOST"]}en/layout`);
  const layoutJson = await layoutRes.json();
  const json = await res.json();
  return {
    data: json,
    layout: layoutJson
  };
};

/* harmony default export */ __webpack_exports__["default"] = (KontaktPage);

/***/ }),

/***/ 13:
/*!***********************************!*\
  !*** multi ./pages/en/kontakt.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/urbandruid/repos/goldendoor-next/pages/en/kontakt.js */"./pages/en/kontakt.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ })

/******/ });
//# sourceMappingURL=kontakt.js.map