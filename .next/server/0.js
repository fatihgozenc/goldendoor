exports.ids = [0];
exports.modules = {

/***/ "./components/layout/Newsletter.js":
/*!*****************************************!*\
  !*** ./components/layout/Newsletter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/layout/Newsletter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Newsletter = ({
  data
}) => {
  const [accessToken, setAccessToken] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');
  const n2goHeaders = new Headers();
  n2goHeaders.append("Content-Type", "application/json");
  n2goHeaders.append("Authorization", "Basic " + Buffer.from("t4u26bmr_Qe1ORGnr_fDNBssO_Sjxlfmi3_a5Ri5P:gyt7smav").toString('base64'));

  const n2goBody = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    "username": "marketing@goldendoor.group",
    "password": "&n2go@GD",
    "grant_type": "https://nl2go.com/jwt"
  });

  const requestOpts = {
    method: 'POST',
    headers: n2goHeaders,
    body: n2goBody,
    redirect: 'follow'
  };

  const connectToNewsletter = () => {
    fetch(`${"https://api.newsletter2go.com"}/oauth/v2/token`, requestOpts).then(response => response.json()).then(result => {
      setAccessToken(result.access_token);
      localStorage.setItem('newsletter', result.access_token);
    }).catch(error => console.log('error', error));
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    localStorage.getItem('newsletter') === null && connectToNewsletter();
  }, []);

  const registerNewsletterUser = (name, surname, email, gender, token) => {
    const n2goRegisterHeaders = new Headers();
    n2goRegisterHeaders.append("Content-Type", "application/json");
    n2goRegisterHeaders.append("Authorization", "Bearer " + token);

    const n2goRegisterBody = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      "list_id": "r9s81zk7",
      "email": email,
      "gender": gender === 'Herr' || 'Mr.' ? 'm' : 'f',
      "first_name": name,
      "last_name": surname,
      "is_unsubscribed": false,
      "is_blacklisted": false
    });

    const registerRequestOpts = {
      method: 'POST',
      headers: n2goRegisterHeaders,
      body: n2goRegisterBody,
      redirect: 'follow'
    };
    fetch(`${"https://api.newsletter2go.com"}/recipients`, registerRequestOpts).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));
  };

  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();

  const onSubmit = values => {
    registerNewsletterUser(values.vorname, values.name, values.email, values.anrede, accessToken);
  };

  return __jsx("div", {
    id: "newsletter",
    className: "newsletter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("div", {
    className: "newsletter__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Newsletter"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, data.subtitel)), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "newsletter__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "newsletter__form--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "vorname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, data.vorname), __jsx("input", {
    name: "vorname",
    ref: register({
      pattern: /^[A-Za-z]+$/i,
      validate: value => value !== "admin" || "Nice try!"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), errors.vorname && errors.vorname.message), __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, data.name), __jsx("input", {
    name: "name",
    ref: register({
      pattern: /^[A-Za-z]+$/i,
      validate: value => value !== "admin" || "Nice try!"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), errors.name && errors.name.message)), __jsx("div", {
    className: "newsletter__form--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "anrede",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, data.anrede.value), __jsx("select", {
    name: "anrede",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("option", {
    value: data.anrede.herr,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, data.anrede.herr), __jsx("option", {
    value: data.anrede.frau,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, data.anrede.frau))), errors.anrede && errors.anrede.message), __jsx("div", {
    className: "newsletter__form--field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
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
    __self: undefined
  }), errors.email && errors.email.message)), __jsx("div", {
    className: "newsletter__datenschutz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.datenschutz.text), __jsx("input", {
    className: "input__radio",
    type: "checkbox",
    required: true,
    name: "acceptance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx("label", {
    className: "label__radio",
    htmlFor: "acceptance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, data.datenschutz.checkbox), html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.datenschutz.extra)), __jsx("button", {
    type: "submit",
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, data.datenschutz.button)));
};

/* harmony default export */ __webpack_exports__["default"] = (Newsletter);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ })

};;
//# sourceMappingURL=0.js.map