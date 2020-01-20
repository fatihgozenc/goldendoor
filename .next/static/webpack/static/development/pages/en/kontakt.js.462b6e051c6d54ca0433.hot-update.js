webpackHotUpdate("static/development/pages/en/kontakt.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./components/templates/kontakt/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/templates/kontakt/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var MapContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(new Date()),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      eventDate = _React$useState2[0],
      setEventDate = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(new Date()),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      elusiveDate = _React$useState4[0],
      setElusiveDate = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(new Date()),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      beginTime = _React$useState6[0],
      setBeginTime = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(new Date()),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      endTime = _React$useState8[0],
      setEndTime = _React$useState8[1];

  var formSteps = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var stepSlider = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var dateRange = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var dates = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var firstStepLock = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  var secondStepLock = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();

  var changeStep = function changeStep(e) {
    var isDateAnswerOneChecked = firstStepLock.current.nextElementSibling.firstElementChild.checked;
    var isDateAnswerTwoChecked = firstStepLock.current.nextElementSibling.nextElementSibling.firstElementChild.checked;
    var ellipses = formSteps.current.parentElement.parentElement.firstElementChild.children;

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

  var removeUnchecked = function removeUnchecked(e) {
    e.currentTarget.parentElement.classList.contains('uncheckedField') === true ? e.currentTarget.parentElement.classList.remove('uncheckedField') : null;
  };

  var hideDates = function hideDates(e) {
    var container = e.currentTarget.parentElement.parentElement;
    var answerYes = e.currentTarget.parentElement.parentElement.children[1].firstElementChild;
    container.classList.contains('uncheckedField') === true ? container.classList.remove('uncheckedField') : null;

    if (answerYes.checked) {
      dates.current.classList.remove('hidden');
      dateRange.current.classList.add('hidden');
    } else {
      dates.current.classList.add('hidden');
      dateRange.current.classList.remove('hidden');
    }
  };

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(values) {
    console.log(values);
  };

  var getFormData = function getFormData(e) {
    var formElement = e.currentTarget.parentElement.parentElement.parentElement;

    var inputs = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(formElement.getElementsByTagName('input'));

    var selects = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(formElement.getElementsByTagName('select'));

    var textArea = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(formElement.getElementsByTagName('textarea'));

    var selectValues = selects.map(function (item, key) {
      return [item.getAttribute('name'), item.value];
    });
    var inputValues = inputs.map(function (item, key) {
      if (item.type === 'radio' && item.checked === true) {
        return [item.getAttribute('name'), item.value];
      } else if (item.type !== 'radio') {
        return [item.getAttribute('name'), item.value, item.type];
      } else {
        return null;
      }
    });
    console.log(inputValues, selectValues);
  };

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    stepSlider.current.firstElementChild.classList.add('activeStep'); // dates.current.classList.add('hideDates')
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "page__title page__title--contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    ref: stepSlider,
    className: "contact__stepslider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, steps.map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepslider--ellipse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, key + 1));
  })), __jsx("div", {
    className: "contact--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("form", {
    className: "contact__steps",
    ref: formSteps,
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_type",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, steps[0].kontakt_frage_1.frage), __jsx("select", {
    name: "event_type",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, steps[0].kontakt_frage_1.optionen.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, item.option);
  })))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_location",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, steps[0].kontakt_frage_2.frage), __jsx("select", {
    ref: register,
    name: "event_location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, steps[0].kontakt_frage_2.optionen.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, item.option);
  }))))), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("label", {
    ref: firstStepLock,
    htmlFor: "event_date_answer",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, steps[0].kontakt_frage_3.frage), steps[0].kontakt_frage_3.optionen.map(function (item, key) {
    return __jsx("p", {
      className: "contact__stepblock--inner",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
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
        lineNumber: 177
      },
      __self: this
    }), __jsx("span", {
      className: "label__radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, item.option));
  })), __jsx("div", {
    className: "contact__stepblock",
    ref: dateRange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "date_range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, steps[0].kontakt_frage_5), __jsx("input", {
    className: "input__text",
    name: "date_range",
    ref: register({
      required: true
    }),
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), __jsx("div", {
    ref: dates,
    className: "contact__stepblock contact__stepblock--datewrapper hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_event",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, steps[0].kontakt_frage_6.datum), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
    selected: eventDate,
    name: "eventdatum",
    ref: register,
    onChange: function onChange(date) {
      return setEventDate(date);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, steps[0].kontakt_frage_6.ausweichtermin), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
    selected: elusiveDate,
    name: "ausweichtermin",
    ref: register,
    onChange: function onChange(date) {
      return setElusiveDate(date);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, steps[0].kontakt_frage_6.beginn), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
    ref: register,
    name: "event_beginn_zeit",
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
      lineNumber: 203
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "date_of_elusive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, steps[0].kontakt_frage_6.ende), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
    name: "event_end_zeit",
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
      lineNumber: 217
    },
    __self: this
  })))), __jsx("a", {
    href: "#",
    className: "golden__button golden__button--center",
    onClick: changeStep,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, data.fields.buttonfelder.prufen)), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, steps[1].feld_1.titel), __jsx("div", {
    className: "contact__step--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("label", {
    ref: secondStepLock,
    className: "label__text",
    htmlFor: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, steps[1].feld_1.frage_1), __jsx("input", {
    onChange: removeUnchecked,
    type: "text",
    ref: register({
      required: true
    }),
    className: "input__text",
    name: "people_number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  })), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event_budget",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, steps[1].feld_1.frage_2.fragefeld), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_1.frage_2.optionen).map(function (item, key) {
    return __jsx("p", {
      className: "contact__stepblock--inner",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx("input", {
      ref: register,
      type: "radio",
      className: "input__radio",
      name: "event_budget",
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }), __jsx("span", {
      className: "label__radio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, item));
  }))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, steps[1].feld_2.titel), __jsx("div", {
    className: "contact__step--flexWrapper-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[1].feld_2).slice(1).map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "event_".concat(item.fragefeld.toLowerCase()),
      className: "label__select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, item.fragefeld), __jsx("select", {
      ref: register,
      name: "event_".concat(item.fragefeld.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, item.optionen.map(function (subItem, subKey) {
      return __jsx("option", {
        key: subKey,
        value: subItem.option,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, subItem.option);
    })));
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goFirst",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, data.fields.buttonfelder.zuruck), __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goNext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, data.fields.buttonfelder.weiter))), __jsx("div", {
    className: "contact__step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, steps[2].titel), __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "anrede",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, steps[2].anredefeld.frage), __jsx("select", {
    ref: register,
    name: "anrede",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, steps[2].anredefeld.sex.map(function (item, key) {
    return __jsx("option", {
      key: key,
      value: item.option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, item.option);
  }))), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(steps[2].andere_fragen).map(function (item, key) {
    return __jsx("div", {
      key: key,
      className: "contact__stepblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, __jsx("label", {
      className: "label__text",
      htmlFor: "kontakt_".concat(item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, item), key === 0 | 4 ? __jsx("input", {
      ref: register,
      className: "input__text",
      type: "text",
      id: "kontakt_".concat(item.toLowerCase()),
      name: "kontakt_".concat(item.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }) : __jsx("input", {
      ref: register({
        required: true
      }),
      className: "input__text",
      type: "text",
      id: "kontakt_".concat(item.toLowerCase()),
      name: "kontakt_".concat(item.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "event__nachricht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, steps[0].kontakt_frage_4), __jsx("textarea", {
    ref: register,
    name: "event__nachricht",
    id: "event__nachricht",
    cols: "30",
    rows: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }))), __jsx("div", {
    className: "contact__buttongroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: changeStep,
    className: "golden__button goSecond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, data.fields.buttonfelder.zuruck), __jsx("button", {
    type: "submit",
    onClick: getFormData,
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, data.fields.buttonfelder.senden)))))), __jsx("div", {
    className: "contact__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, __jsx("div", {
    className: "contact__info--map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx(MapContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  })), __jsx("div", {
    className: "contact__info--address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, __jsx("div", {
    className: "contact__info--logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, __jsx("img", {
    src: contactInfo.logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  })), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(contactInfo.address).map(function (item, key) {
    return __jsx("div", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_6___default()(item));
  }), __jsx("a", {
    href: "tel:".concat(contactInfo.telefon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, contactInfo.telefon), __jsx("a", {
    href: "mailto:".concat(contactInfo.email.toLowerCase()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, contactInfo.email))));
});

/***/ })

})
//# sourceMappingURL=kontakt.js.462b6e051c6d54ca0433.hot-update.js.map