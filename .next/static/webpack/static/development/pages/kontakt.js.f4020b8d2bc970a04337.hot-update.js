webpackHotUpdate("static/development/pages/kontakt.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./components/templates/kontakt/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/templates/kontakt/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../MapContainer */ "./components/MapContainer.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../MapContainer */ "./components/MapContainer.js")];
    },
    modules: ['../../MapContainer']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      layout = _ref.layout;
  var contactInfo = layout.footer.info;
  var steps = [data.fields.kontakt_stufe_1, data.fields.kontakt_stufe_2, data.fields.kontakt_stufe_3];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date()),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      eventDate = _React$useState2[0],
      setEventDate = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date()),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      elusiveDate = _React$useState4[0],
      setElusiveDate = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date()),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      beginTime = _React$useState6[0],
      setBeginTime = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date()),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      endTime = _React$useState8[0],
      setEndTime = _React$useState8[1];

  var formSteps = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var stepSlider = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var dateRange = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var dates = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();

  var changeStep = function changeStep(e) {
    var ellipses = formSteps.current.parentElement.parentElement.firstElementChild.children;

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

  var hideDates = function hideDates(e) {
    var answerYes = e.currentTarget.parentElement.parentElement.children[1].firstElementChild;

    if (answerYes.checked) {
      dates.current.classList.remove('hidden');
      dateRange.current.classList.add('hidden');
    } else {
      dates.current.classList.add('hidden');
      dateRange.current.classList.remove('hidden');
    }
  };

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(values) {
    console.log(values);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    stepSlider.current.firstElementChild.classList.add('activeStep'); // dates.current.classList.add('hideDates')
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "page__title page__title--contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    ref: stepSlider,
    className: "contact__stepslider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, steps.map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepslider--ellipse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, key + 1));
  })), __jsx("div", {
    className: "contact--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("form", {
    className: "contact__steps",
    ref: formSteps,
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_type",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, steps[0].kontakt_frage_1.frage), __jsx("select", {
    name: "event_type",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, steps[0].kontakt_frage_1.optionen.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, item.option);
  })))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, steps[0].kontakt_frage_2.frage), __jsx("select", {
    ref: register,
    id: "event_location",
    name: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, steps[0].kontakt_frage_2.optionen.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, item.option);
  }))))), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_date_answer",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, steps[0].kontakt_frage_3.frage), steps[0].kontakt_frage_3.optionen.map(function (item, key) {
    return __jsx("p", {
      className: "contact__stepblock--inner",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("input", {
      onClick: hideDates,
      ref: register,
      className: "input__radio",
      type: "radio",
      name: "event_date_answer",
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), __jsx("span", {
      className: "label__radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, item.option));
  })), __jsx("div", {
    className: "contact__stepblock",
    ref: dateRange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "date_range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, steps[0].kontakt_frage_5), __jsx("input", {
    className: "input__text",
    ref: register({
      required: true
    }),
    type: "text",
    id: "event_date_answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx("div", {
    ref: dates,
    className: "contact__stepblock contact__stepblock--datewrapper hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_event",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, steps[0].kontakt_frage_6.datum), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: eventDate,
    name: "date_of_event",
    ref: register,
    onChange: function onChange(date) {
      return setEventDate(date);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, steps[0].kontakt_frage_6.ausweichtermin), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: elusiveDate,
    name: "date_of_elusive",
    ref: register,
    onChange: function onChange(date) {
      return setElusiveDate(date);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, steps[0].kontakt_frage_6.beginn), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: beginTime,
    onChange: function onChange(date) {
      return setBeginTime(date);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, steps[0].kontakt_frage_6.ende), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 15,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    selected: endTime,
    onChange: function onChange(date) {
      return setEndTime(date);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })))), __jsx("a", {
    href: "#",
    className: "golden__button golden__button--center",
    onClick: changeStep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, data.fields.buttonfelder.prufen)), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, steps[1].feld_1.titel), __jsx("div", {
    className: "contact__step--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, steps[1].feld_1.frage_1), __jsx("input", {
    type: "text",
    required: true,
    className: "input__text",
    name: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_budget",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, steps[1].feld_1.frage_2.fragefeld), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_1.frage_2.optionen).map(function (item, key) {
    return __jsx("p", {
      className: "contact__stepblock--inner",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx("input", {
      type: "radio",
      className: "input__radio",
      name: "event_budget",
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }), __jsx("span", {
      className: "label__radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, item));
  }))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, steps[1].feld_2.titel), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_2).slice(1).map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "event_".concat(item.fragefeld.toLowerCase()),
      className: "label__select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, item.fragefeld), __jsx("select", {
      name: "event_".concat(item.fragefeld.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, item.optionen.map(function (subItem, subKey) {
      return __jsx("option", {
        key: subKey,
        value: subItem.option,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, subItem.option);
    })));
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goFirst",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, data.fields.buttonfelder.zuruck), __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goNext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, data.fields.buttonfelder.weiter))), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, steps[2].titel), __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, steps[2].anredefeld.frage), __jsx("select", {
    name: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, steps[2].anredefeld.sex.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, item.option);
  }))), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[2].andere_fragen).map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, __jsx("label", {
      className: "label__text",
      htmlFor: "contactdata_".concat(item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, item), key === 0 | 4 ? __jsx("input", {
      className: "input__text",
      type: "text",
      id: "contactdata_".concat(item.toLowerCase()),
      name: "contactdata_".concat(item.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }) : __jsx("input", {
      required: true,
      className: "input__text",
      type: "text",
      id: "contactdata_".concat(item.toLowerCase()),
      name: "contactdata_".concat(item.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event__nachricht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, steps[0].kontakt_frage_4), __jsx("textarea", {
    name: "event__nachricht",
    id: "event__nachricht",
    cols: "30",
    rows: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, data.fields.buttonfelder.zuruck), __jsx("button", {
    type: "submit",
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, data.fields.buttonfelder.senden)))))), __jsx("div", {
    className: "contact__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("div", {
    className: "contact__info--map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx(MapContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  })), __jsx("div", {
    className: "contact__info--address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, __jsx("div", {
    className: "contact__info--logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx("img", {
    src: contactInfo.logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  })), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(contactInfo.address).map(function (item, key) {
    return __jsx("div", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_5___default()(item));
  }), __jsx("a", {
    href: "tel:".concat(contactInfo.telefon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, contactInfo.telefon), __jsx("a", {
    href: "mailto:".concat(contactInfo.email.toLowerCase()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, contactInfo.email))));
});

/***/ })

})
//# sourceMappingURL=kontakt.js.f4020b8d2bc970a04337.hot-update.js.map