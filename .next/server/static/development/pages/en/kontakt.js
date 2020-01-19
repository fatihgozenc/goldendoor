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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./components/templates/kontakt/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/templates/kontakt/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../MapContainer */ "./components/MapContainer.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../MapContainer */ "./components/MapContainer.js")],
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (({
  data
}) => {
  // const contactInfo = useSelector(state => state.layout.footer.info);
  const steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];
  const [eventDate, setEventDate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new Date());
  const [elusiveDate, setElusiveDate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new Date());
  const [beginTime, setBeginTime] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new Date());
  const [endTime, setEndTime] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(new Date());
  const formSteps = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const stepSlider = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const dateRange = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const dates = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

  const changeStep = e => {
    const ellipses = formSteps.current.parentElement.parentElement.firstElementChild.children;

    if (e.currentTarget.classList.contains('goFirst')) {
      formSteps.current.classList.remove('atSecondStep');
      ellipses[1].classList.remove('activeStep');
      ellipses[0].classList.add('activeStep');
    } else if (e.currentTarget.classList.contains('goNext')) {
      formSteps.current.classList.remove('atSecondStep');
      formSteps.current.classList.add('atThirdStep');
      ellipses[1].classList.remove('activeStep');
      ellipses[2].classList.add('activeStep');
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
  };

  const hideDates = e => {
    const answerYes = e.currentTarget.parentElement.parentElement.children[1].firstElementChild;

    if (answerYes.checked) {
      dates.current.classList.remove('hidden');
      dateRange.current.classList.add('hidden');
    } else {
      dates.current.classList.add('hidden');
      dateRange.current.classList.remove('hidden');
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    stepSlider.current.firstElementChild.classList.add('activeStep'); // dates.current.classList.add('hideDates')
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "page__title page__title--contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, data.title)), __jsx("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("div", {
    ref: stepSlider,
    className: "contact__stepslider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, steps.map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepslider--ellipse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, key + 1)))), __jsx("div", {
    className: "contact--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("form", {
    className: "contact__steps",
    ref: formSteps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_type",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, steps[0].kontakt_frage_1.frage), __jsx("select", {
    id: "event_type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, steps[0].kontakt_frage_1.optionen.map((item, key) => __jsx("option", {
    key: key,
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, item.option))))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, steps[0].kontakt_frage_2.frage), __jsx("select", {
    id: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, steps[0].kontakt_frage_2.optionen.map((item, key) => __jsx("option", {
    key: key,
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, item.option)))))), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_date_answer",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, steps[0].kontakt_frage_3.frage), steps[0].kontakt_frage_3.optionen.map((item, key) => __jsx("p", {
    className: "contact__stepblock--inner",
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("input", {
    onClick: hideDates,
    className: "input__radio",
    type: "radio",
    name: "event_date_answer",
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), __jsx("span", {
    className: "label__radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, item.option)))), __jsx("div", {
    className: "contact__stepblock",
    ref: dateRange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "date_range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, steps[0].kontakt_frage_5), __jsx("input", {
    className: "input__text",
    required: true,
    type: "text",
    id: "event_date_answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  })), __jsx("div", {
    ref: dates,
    className: "contact__stepblock contact__stepblock--datewrapper hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_event",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.datum), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
    selected: eventDate,
    onChange: date => setEventDate(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.ausweichtermin), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
    selected: elusiveDate,
    onChange: date => setElusiveDate(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.beginn), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: beginTime,
    onChange: date => setBeginTime(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, steps[0].kontakt_frage_6.ende), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: endTime,
    onChange: date => setEndTime(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  })))), __jsx("a", {
    href: "#",
    className: "golden__button golden__button--center",
    onClick: changeStep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, data.fields.buttonfelder.prufen)), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, steps[1].feld_1.titel), __jsx("div", {
    className: "contact__step--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, steps[1].feld_1.frage_1), __jsx("input", {
    type: "text",
    required: true,
    className: "input__text",
    name: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_budget",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, steps[1].feld_1.frage_2.fragefeld), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_1.frage_2.optionen).map((item, key) => __jsx("p", {
    className: "contact__stepblock--inner",
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx("input", {
    type: "radio",
    className: "input__radio",
    name: "event_budget",
    value: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }), __jsx("span", {
    className: "label__radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, item))))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, steps[1].feld_2.titel), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_2).slice(1).map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: `event_${item.fragefeld.toLowerCase()}`,
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, item.fragefeld), __jsx("select", {
    name: `event_${item.fragefeld.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, item.optionen.map((subItem, subKey) => __jsx("option", {
    key: subKey,
    value: subItem.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, subItem.option))))))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goFirst",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, data.fields.buttonfelder.zuruck), __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goNext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, data.fields.buttonfelder.weiter))), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, steps[2].titel), __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, steps[2].anredefeld.frage), __jsx("select", {
    name: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, steps[2].anredefeld.sex.map((item, key) => __jsx("option", {
    key: key,
    value: item.option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, item.option)))), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[2].andere_fragen).map((item, key) => __jsx("div", {
    key: key,
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: `contactdata_${item}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, item), key === 0 | 4 ? __jsx("input", {
    className: "input__text",
    type: "text",
    id: `contactdata_${item.toLowerCase()}`,
    name: `contactdata_${item.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }) : __jsx("input", {
    required: true,
    className: "input__text",
    type: "text",
    id: `contactdata_${item.toLowerCase()}`,
    name: `contactdata_${item.toLowerCase()}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "event__nachricht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, steps[0].kontakt_frage_4), __jsx("textarea", {
    name: "event__nachricht",
    id: "event__nachricht",
    cols: "30",
    rows: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }, data.fields.buttonfelder.zuruck), __jsx("button", {
    type: "submit",
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }, data.fields.buttonfelder.senden)))))), __jsx("div", {
    className: "contact__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__info--map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: undefined
  }, __jsx(MapContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

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
  data
}) => __jsx(_components_templates_kontakt__WEBPACK_IMPORTED_MODULE_2__["default"], {
  data: data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

KontaktPage.getInitialProps = async () => {
  const res = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_1__["API_HOST"]}en/contact`);
  const json = await res.json();
  return {
    data: json
  };
};

/* harmony default export */ __webpack_exports__["default"] = (KontaktPage);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/en/kontakt.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/urbandruid/repos/goldendoor-next/pages/en/kontakt.js */"./pages/en/kontakt.js");


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