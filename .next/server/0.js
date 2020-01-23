exports.ids = [0];
exports.modules = {

/***/ "./components/SendingQuery.js":
/*!************************************!*\
  !*** ./components/SendingQuery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const SendingQuery = props => {
  const ellipse = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const tick = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const text = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setTimeout(() => {
      ellipse.current.classList.add('stopEllipse');
      tick.current.classList.add('showTick');
      text.current.classList.add('showText');
    }, 2000);
  }, []);
  return __jsx("div", {
    className: "jsx-2703489858" + " " + "sendingQuery"
  }, __jsx("svg", {
    ref: ellipse,
    viewBox: "0 0 244 244",
    className: "jsx-2703489858" + " " + "sendingQuery-ellipse"
  }, __jsx("defs", {
    className: "jsx-2703489858"
  }, __jsx("linearGradient", {
    id: "sendingGradient",
    x1: "33.68",
    y1: "33.68",
    x2: "206.22",
    y2: "206.22",
    gradientUnits: "userSpaceOnUse",
    className: "jsx-2703489858"
  }, __jsx("stop", {
    offset: "0.15",
    stopColor: props.color,
    stopOpacity: "0",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.25",
    stopColor: props.color,
    stopOpacity: "0.22",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.38",
    stopColor: props.color,
    stopOpacity: "0.45",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.51",
    stopColor: props.color,
    stopOpacity: "0.65",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.64",
    stopColor: props.color,
    stopOpacity: "0.8",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.76",
    stopColor: props.color,
    stopOpacity: "0.91",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "0.88",
    stopColor: props.color,
    stopOpacity: "0.98",
    className: "jsx-2703489858"
  }), __jsx("stop", {
    offset: "1",
    stopColor: props.color,
    className: "jsx-2703489858"
  }))), __jsx("path", {
    fill: "url(#sendingGradient)",
    d: "M122,0A122,122,0,1,0,244,122,122,122,0,0,0,122,0Zm0,236.5A114.5,114.5,0,1,1,236.5,122,114.5,114.5,0,0,1,122,236.5Z",
    className: "jsx-2703489858"
  })), __jsx("svg", {
    ref: tick,
    viewBox: "0 0 138.35 99.15",
    className: "jsx-2703489858" + " " + "sendingQuery-tick"
  }, __jsx("path", {
    fill: props.color,
    d: "M.85,42.5c2.41,1.55,4.74,3.17,7,4.84s4.57,3.34,6.79,5.08c4.47,3.45,8.82,7,13.09,10.66s8.45,7.38,12.57,11.18S48.42,82,52.27,86.07h-8.7c7.75-7.25,15.81-14.19,23.5-21.5S82.54,50,90.37,42.87l11.71-10.79,11.76-10.74Q125.62,10.61,137.5,0l.85.85Q127.73,12.73,117,24.51L106.27,36.27,95.48,48C88.31,55.81,81,63.51,73.78,71.28S59.53,87,52.27,94.77l-4.09,4.38-4.61-4.38c-4.06-3.85-8-7.81-11.81-11.93s-7.54-8.29-11.18-12.57S13.37,61.65,9.92,57.18C8.18,55,6.5,52.68,4.84,50.39s-3.29-4.63-4.84-7Z",
    className: "jsx-2703489858"
  })), __jsx("p", {
    ref: text,
    className: "jsx-2703489858" + " " + "sendingQuery-message"
  }, props.message), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2703489858"
  }, "@-webkit-keyframes rotate-jsx-2703489858{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotate-jsx-2703489858{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.sendingQuery.jsx-2703489858{width:200px;position:relative;}.sendingQuery-ellipse.jsx-2703489858{-webkit-transition:.5s all;transition:.5s all;-webkit-animation:rotate-jsx-2703489858 1s linear infinite;animation:rotate-jsx-2703489858 1s linear infinite;}.sendingQuery-tick.jsx-2703489858{position:absolute;-webkit-transition:.5s all;transition:.5s all;width:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.sendingQuery-message.jsx-2703489858{text-align:center;position:absolute;text-transform:uppercase;-webkit-letter-spacing:1.6px;-moz-letter-spacing:1.6px;-ms-letter-spacing:1.6px;letter-spacing:1.6px;left:0;right:0;opacity:0;-webkit-transition:.5s all;transition:.5s all;bottom:-60%;}.stopEllipse.jsx-2703489858{opacity:0;-webkit-transition:.5s all;transition:.5s all;}.showTick.jsx-2703489858{-webkit-transition:.5s all ease-out;transition:.5s all ease-out;width:100px;}.showText.jsx-2703489858{-webkit-transition:.5s all;transition:.5s all;opacity:1;bottom:-50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXRpaC9yZXBvcy9nb2xkZW5kb29yLW5leHQvY29tcG9uZW50cy9TZW5kaW5nUXVlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUlvQyxBQUdFLEFBSWYsQUFJTyxBQUlELEFBUUEsQUFXUixBQUlrQixBQUlULFVBUEEsRUEzQkQsTUFRQyxBQVFELFlBZnBCLE1BZ0IyQixVQWJXLEFBK0IxQixVQVBaLEFBUWMsS0FsQlMsR0FUYixBQXNCSSxJQU1kLElBM0JVLElBc0JWLElBckJXLENBbEJULE1BR0EsRUFnQmdDLG1FQVBsQyxNQWNTLE9BQ0MsUUFDRSxVQUNTLE9BVHJCLHVDQVVjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2ZhdGloL3JlcG9zL2dvbGRlbmRvb3ItbmV4dC9jb21wb25lbnRzL1NlbmRpbmdRdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlbmRpbmdRdWVyeSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBlbGxpcHNlID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IHRpY2sgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3QgdGV4dCA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbGxpcHNlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnc3RvcEVsbGlwc2UnKTtcbiAgICAgIHRpY2suY3VycmVudC5jbGFzc0xpc3QuYWRkKCdzaG93VGljaycpO1xuICAgICAgdGV4dC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3dUZXh0Jyk7XG4gICAgfSwgMjAwMCk7XG4gIH0sIFtdKVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRpbmdRdWVyeVwiPlxuXG4gICAgICA8c3ZnIHJlZj17ZWxsaXBzZX0gY2xhc3NOYW1lPVwic2VuZGluZ1F1ZXJ5LWVsbGlwc2VcIiB2aWV3Qm94PVwiMCAwIDI0NCAyNDRcIj5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwic2VuZGluZ0dyYWRpZW50XCIgeDE9XCIzMy42OFwiIHkxPVwiMzMuNjhcIiB4Mj1cIjIwNi4yMlwiIHkyPVwiMjA2LjIyXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjE1XCIgc3RvcENvbG9yPXtwcm9wcy5jb2xvcn0gc3RvcE9wYWNpdHk9XCIwXCIvPlxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3BDb2xvcj17cHJvcHMuY29sb3J9IHN0b3BPcGFjaXR5PVwiMC4yMlwiLz5cbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzhcIiBzdG9wQ29sb3I9e3Byb3BzLmNvbG9yfSBzdG9wT3BhY2l0eT1cIjAuNDVcIi8+XG4gICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjUxXCIgc3RvcENvbG9yPXtwcm9wcy5jb2xvcn0gc3RvcE9wYWNpdHk9XCIwLjY1XCIvPlxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC42NFwiIHN0b3BDb2xvcj17cHJvcHMuY29sb3J9IHN0b3BPcGFjaXR5PVwiMC44XCIvPlxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC43NlwiIHN0b3BDb2xvcj17cHJvcHMuY29sb3J9IHN0b3BPcGFjaXR5PVwiMC45MVwiLz5cbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuODhcIiBzdG9wQ29sb3I9e3Byb3BzLmNvbG9yfSBzdG9wT3BhY2l0eT1cIjAuOThcIi8+XG4gICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPXtwcm9wcy5jb2xvcn0vPlxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgICAgPHBhdGggZmlsbD1cInVybCgjc2VuZGluZ0dyYWRpZW50KVwiIGQ9XCJNMTIyLDBBMTIyLDEyMiwwLDEsMCwyNDQsMTIyLDEyMiwxMjIsMCwwLDAsMTIyLDBabTAsMjM2LjVBMTE0LjUsMTE0LjUsMCwxLDEsMjM2LjUsMTIyLDExNC41LDExNC41LDAsMCwxLDEyMiwyMzYuNVpcIi8+XG4gICAgICA8L3N2Zz5cblxuICAgICAgPHN2ZyByZWY9e3RpY2t9IGNsYXNzTmFtZT1cInNlbmRpbmdRdWVyeS10aWNrXCIgdmlld0JveD1cIjAgMCAxMzguMzUgOTkuMTVcIj5cbiAgICAgICAgPHBhdGggZmlsbD17cHJvcHMuY29sb3J9IGQ9XCJNLjg1LDQyLjVjMi40MSwxLjU1LDQuNzQsMy4xNyw3LDQuODRzNC41NywzLjM0LDYuNzksNS4wOGM0LjQ3LDMuNDUsOC44Miw3LDEzLjA5LDEwLjY2czguNDUsNy4zOCwxMi41NywxMS4xOFM0OC40Miw4Miw1Mi4yNyw4Ni4wN2gtOC43YzcuNzUtNy4yNSwxNS44MS0xNC4xOSwyMy41LTIxLjVTODIuNTQsNTAsOTAuMzcsNDIuODdsMTEuNzEtMTAuNzksMTEuNzYtMTAuNzRRMTI1LjYyLDEwLjYxLDEzNy41LDBsLjg1Ljg1UTEyNy43MywxMi43MywxMTcsMjQuNTFMMTA2LjI3LDM2LjI3LDk1LjQ4LDQ4Qzg4LjMxLDU1LjgxLDgxLDYzLjUxLDczLjc4LDcxLjI4UzU5LjUzLDg3LDUyLjI3LDk0Ljc3bC00LjA5LDQuMzgtNC42MS00LjM4Yy00LjA2LTMuODUtOC03LjgxLTExLjgxLTExLjkzcy03LjU0LTguMjktMTEuMTgtMTIuNTdTMTMuMzcsNjEuNjUsOS45Miw1Ny4xOEM4LjE4LDU1LDYuNSw1Mi42OCw0Ljg0LDUwLjM5cy0zLjI5LTQuNjMtNC44NC03WlwiLz5cbiAgICAgIDwvc3ZnPlxuXG4gICAgICA8cCByZWY9e3RleHR9IGNsYXNzTmFtZT1cInNlbmRpbmdRdWVyeS1tZXNzYWdlXCIgPntwcm9wcy5tZXNzYWdlfTwvcD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZW5kaW5nUXVlcnkge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbmRpbmdRdWVyeS1lbGxpcHNle1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zZW5kaW5nUXVlcnktdGljayB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5zZW5kaW5nUXVlcnktbWVzc2FnZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcbiAgICAgICAgICBib3R0b206IC02MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3BFbGxpcHNlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgLnNob3dUaWNrIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2Utb3V0O1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2hvd1RleHR7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGFsbDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGJvdHRvbTogLTUwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VuZGluZ1F1ZXJ5OyJdfQ== */\n/*@ sourceURL=/Users/fatih/repos/goldendoor-next/components/SendingQuery.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SendingQuery);

/***/ }),

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
/* harmony import */ var _SendingQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SendingQuery */ "./components/SendingQuery.js");


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
  const [registerResponse, setRegisterResponse] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});
  const newsletterForm = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();

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
    fetch(`${"https://api.newsletter2go.com"}/recipients`, registerRequestOpts).then(response => response.text()).then(result => {
      setRegisterResponse(JSON.parse(result));
    }).catch(error => console.log('error', error));
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    registerResponse.status === 200 && newsletterForm.current.classList.add('newsletterHide');
  }, [registerResponse, setRegisterResponse]);
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
    ref: newsletterForm,
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
  }, data.datenschutz.button)), registerResponse.status === 200 && __jsx(_SendingQuery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "#C2AC84",
    message: `Danke für die Registrierung.`
  }));
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