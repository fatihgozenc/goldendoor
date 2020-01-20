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

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    stepSlider.current.firstElementChild.classList.add('activeStep'); // dates.current.classList.add('hideDates')
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "page__title page__title--contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    ref: stepSlider,
    className: "contact__stepslider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, steps.map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepslider--ellipse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, key + 1));
  })), __jsx("div", {
    className: "contact--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("form", {
    className: "contact__steps",
    ref: formSteps,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_type",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, steps[0].kontakt_frage_1.frage), __jsx("select", {
    id: "event_type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, steps[0].kontakt_frage_1.optionen.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, item.option);
  })))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, steps[0].kontakt_frage_2.frage), __jsx("select", {
    id: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, steps[0].kontakt_frage_2.optionen.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, item.option);
  }))))), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_date_answer",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, steps[0].kontakt_frage_3.frage), steps[0].kontakt_frage_3.optionen.map(function (item, key) {
    return __jsx("p", {
      className: "contact__stepblock--inner",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("input", {
      onClick: hideDates,
      className: "input__radio",
      type: "radio",
      name: "event_date_answer",
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), __jsx("span", {
      className: "label__radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, item.option));
  })), __jsx("div", {
    className: "contact__stepblock",
    ref: dateRange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "date_range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, steps[0].kontakt_frage_5), __jsx("input", {
    className: "input__text",
    required: true,
    type: "text",
    id: "event_date_answer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), __jsx("div", {
    ref: dates,
    className: "contact__stepblock contact__stepblock--datewrapper hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_event",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, steps[0].kontakt_frage_6.datum), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: eventDate,
    onChange: function onChange(date) {
      return setEventDate(date);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, steps[0].kontakt_frage_6.ausweichtermin), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
    selected: elusiveDate,
    onChange: function onChange(date) {
      return setElusiveDate(date);
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
      lineNumber: 151
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
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
      lineNumber: 163
    },
    __self: this
  })))), __jsx("a", {
    href: "#",
    className: "golden__button golden__button--center",
    onClick: changeStep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, data.fields.buttonfelder.prufen)), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, steps[1].feld_1.titel), __jsx("div", {
    className: "contact__step--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, steps[1].feld_1.frage_1), __jsx("input", {
    type: "text",
    required: true,
    className: "input__text",
    name: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_budget",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, steps[1].feld_1.frage_2.fragefeld), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_1.frage_2.optionen).map(function (item, key) {
    return __jsx("p", {
      className: "contact__stepblock--inner",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("input", {
      type: "radio",
      className: "input__radio",
      name: "event_budget",
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }), __jsx("span", {
      className: "label__radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, item));
  }))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, steps[1].feld_2.titel), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_2).slice(1).map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "event_".concat(item.fragefeld.toLowerCase()),
      className: "label__select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, item.fragefeld), __jsx("select", {
      name: "event_".concat(item.fragefeld.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, item.optionen.map(function (subItem, subKey) {
      return __jsx("option", {
        key: subKey,
        value: subItem.option,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, subItem.option);
    })));
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goFirst",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, data.fields.buttonfelder.zuruck), __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goNext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, data.fields.buttonfelder.weiter))), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, steps[2].titel), __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, steps[2].anredefeld.frage), __jsx("select", {
    name: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, steps[2].anredefeld.sex.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, item.option);
  }))), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[2].andere_fragen).map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, __jsx("label", {
      className: "label__text",
      htmlFor: "contactdata_".concat(item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, item), key === 0 | 4 ? __jsx("input", {
      className: "input__text",
      type: "text",
      id: "contactdata_".concat(item.toLowerCase()),
      name: "contactdata_".concat(item.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
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
        lineNumber: 275
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event__nachricht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, steps[0].kontakt_frage_4), __jsx("textarea", {
    name: "event__nachricht",
    id: "event__nachricht",
    cols: "30",
    rows: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, data.fields.buttonfelder.zuruck), __jsx("button", {
    type: "submit",
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, data.fields.buttonfelder.senden)))))), __jsx("div", {
    className: "contact__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx("div", {
    className: "contact__info--map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, __jsx(MapContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  })), __jsx("div", {
    className: "contact__info--address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("div", {
    className: "contact__info--logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("img", {
    src: contactInfo.logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  })), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(contactInfo.address).map(function (item, key) {
    return __jsx("div", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_5___default()(item));
  }), __jsx("a", {
    href: "tel:".concat(contactInfo.telefon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, contactInfo.telefon), __jsx("a", {
    href: "mailto:".concat(contactInfo.email.toLowerCase()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, contactInfo.email))));
});

/***/ })

})
//# sourceMappingURL=kontakt.js.15fd35dabd4dbb1801f0.hot-update.js.map