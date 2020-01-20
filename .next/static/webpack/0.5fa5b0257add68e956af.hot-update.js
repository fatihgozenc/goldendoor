webpackHotUpdate(0,{

/***/ "./components/layout/Newsletter.js":
/*!*****************************************!*\
  !*** ./components/layout/Newsletter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");


var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/layout/Newsletter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Newsletter = function Newsletter(_ref) {
  var data = _ref.data;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      accessToken = _React$useState2[0],
      setAccessToken = _React$useState2[1];

  var n2goHeaders = new Headers();
  n2goHeaders.append("Content-Type", "application/json");
  n2goHeaders.append("Authorization", "Basic " + Buffer.from("t4u26bmr_Qe1ORGnr_fDNBssO_Sjxlfmi3_a5Ri5P:gyt7smav").toString('base64'));

  var n2goBody = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    "username": "marketing@goldendoor.group",
    "password": "&n2go@GD",
    "grant_type": "https://nl2go.com/jwt"
  });

  var requestOpts = {
    method: 'POST',
    headers: n2goHeaders,
    body: n2goBody,
    redirect: 'follow'
  };

  var connectToNewsletter = function connectToNewsletter() {
    fetch("".concat("https://api.newsletter2go.com", "/oauth/v2/token"), requestOpts).then(function (response) {
      return response.json();
    }).then(function (result) {
      setAccessToken(result.access_token);
      localStorage.setItem('newsletter', result.access_token);
    })["catch"](function (error) {
      return console.log('error', error);
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    localStorage.getItem('newsletter') === null && connectToNewsletter();
  }, []);

  var registerNewsletterUser = function registerNewsletterUser(name, surname, email, gender, token) {
    var n2goRegisterHeaders = new Headers();
    n2goRegisterHeaders.append("Content-Type", "application/json");
    n2goRegisterHeaders.append("Authorization", "Bearer " + token);

    var n2goRegisterBody = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      "list_id": "r9s81zk7",
      "email": email,
      "gender": gender === 'Herr' || 'Mr.' ? 'm' : 'f',
      "first_name": name,
      "last_name": surname,
      "is_unsubscribed": false,
      "is_blacklisted": false
    });

    var registerRequestOpts = {
      method: 'POST',
      headers: n2goRegisterHeaders,
      body: n2goRegisterBody,
      redirect: 'follow'
    };
    fetch("".concat("https://api.newsletter2go.com", "/recipients"), registerRequestOpts).then(function (response) {
      return response.text();
    }).then(function (result) {
      return console.log(result);
    })["catch"](function (error) {
      return console.log('error', error);
    });
  };

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(values) {
    registerNewsletterUser(values.vorname, values.name, values.email, values.anrede, accessToken);
  };

  return __jsx("div", {
    id: "newsletter",
    className: "newsletter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "newsletter__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Newsletter"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, data.subtitel)), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "newsletter__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "newsletter__form--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "vorname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, data.vorname), __jsx("input", {
    name: "vorname",
    ref: register({
      pattern: /^[A-Za-z]+$/i,
      validate: function validate(value) {
        return value !== "admin" || "Nice try!";
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), errors.vorname && errors.vorname.message), __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, data.name), __jsx("input", {
    name: "name",
    ref: register({
      pattern: /^[A-Za-z]+$/i,
      validate: function validate(value) {
        return value !== "admin" || "Nice try!";
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), errors.name && errors.name.message)), __jsx("div", {
    className: "newsletter__form--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "anrede",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, data.anrede.value), __jsx("select", {
    name: "anrede",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("option", {
    value: data.anrede.herr,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, data.anrede.herr), __jsx("option", {
    value: data.anrede.frau,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, data.anrede.frau))), errors.anrede && errors.anrede.message), __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, data.email), __jsx("input", {
    name: "email",
    ref: register({
      required: data.fehlerfelder.required,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: data.fehlerfelder.invalid
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), errors.email && errors.email.message)), __jsx("div", {
    className: "newsletter__datenschutz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.datenschutz.text), __jsx("input", {
    className: "input__radio",
    type: "checkbox",
    required: true,
    name: "acceptance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx("label", {
    className: "label__radio",
    htmlFor: "acceptance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, data.datenschutz.checkbox), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.datenschutz.extra)), __jsx("button", {
    type: "submit",
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, data.datenschutz.button)));
};

/* harmony default export */ __webpack_exports__["default"] = (Newsletter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=0.5fa5b0257add68e956af.hot-update.js.map