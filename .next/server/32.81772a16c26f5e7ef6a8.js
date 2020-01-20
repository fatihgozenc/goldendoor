exports.ids = [32];
exports.modules = {

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "dggA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("OvnE");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);


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
    // localStorage.getItem('newsletter') === null &&
    connectToNewsletter();
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
    className: "newsletter"
  }, __jsx("div", {
    className: "newsletter__block"
  }, __jsx("h3", null, "Newsletter"), __jsx("p", null, data.subtitel)), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "newsletter__form"
  }, __jsx("div", {
    className: "newsletter__form--block"
  }, __jsx("div", {
    className: "newsletter__form--field"
  }, __jsx("label", {
    htmlFor: "vorname"
  }, data.vorname), __jsx("input", {
    name: "vorname",
    ref: register({
      pattern: /^[A-Za-z]+$/i,
      validate: value => value !== "admin" || "Nice try!"
    })
  }), errors.vorname && errors.vorname.message), __jsx("div", {
    className: "newsletter__form--field"
  }, __jsx("label", {
    htmlFor: "name"
  }, data.name), __jsx("input", {
    name: "name",
    ref: register({
      pattern: /^[A-Za-z]+$/i,
      validate: value => value !== "admin" || "Nice try!"
    })
  }), errors.name && errors.name.message)), __jsx("div", {
    className: "newsletter__form--block"
  }, __jsx("div", {
    className: "newsletter__form--field"
  }, __jsx("label", {
    htmlFor: "anrede"
  }, data.anrede.value), __jsx("select", {
    name: "anrede",
    ref: register
  }, __jsx("optgroup", null, __jsx("option", {
    value: data.anrede.herr
  }, data.anrede.herr), __jsx("option", {
    value: data.anrede.frau
  }, data.anrede.frau))), errors.anrede && errors.anrede.message), __jsx("div", {
    className: "newsletter__form--field"
  }, __jsx("label", {
    htmlFor: "email"
  }, data.email), __jsx("input", {
    name: "email",
    ref: register({
      required: data.fehlerfelder.required,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: data.fehlerfelder.invalid
      }
    })
  }), errors.email && errors.email.message)), __jsx("div", {
    className: "newsletter__datenschutz"
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.datenschutz.text), __jsx("input", {
    className: "input__radio",
    type: "checkbox",
    required: true,
    name: "acceptance"
  }), __jsx("label", {
    className: "label__radio",
    htmlFor: "acceptance"
  }, data.datenschutz.checkbox), html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(data.datenschutz.extra)), __jsx("button", {
    type: "submit",
    className: "golden__button"
  }, data.datenschutz.button)));
};

/* harmony default export */ __webpack_exports__["default"] = (Newsletter);

/***/ })

};;