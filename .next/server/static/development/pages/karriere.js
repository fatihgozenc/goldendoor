module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Icon = ({
  type,
  name
}) => {
  switch (type) {
    case "anfragen":
      return __jsx("i", {
        className: `icon icon__location icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 90 65"
      }, __jsx("path", {
        d: "M60.83,42.88A17,17,0,0,0,62.62,40l-.94-.35a17.45,17.45,0,0,1-1.8,2.81l-.15.2,2.79,9.45c-1.73-.82-5.36-2.55-7.84-3.89l-.21-.11-.22.09c-6.19,2.67-11.74,3-16.48,1.1-6.85-2.81-9.68-9.6-9.71-9.66l-.92.37A20.1,20.1,0,0,0,37.38,50.24c4.95,2,10.68,1.69,17-1,3.39,1.81,8.64,4.24,8.69,4.26l1,.47Z"
      }), __jsx("path", {
        d: "M44.15,13.37c12.89-.16,17.76,11,17.9,12.29l1,0c0-1.13-4.85-13.25-18.57-13.25h-.35c-13.78.2-17.69,13-17.73,13.13l1,.28C27.51,25.29,31.11,13.56,44.15,13.37Z"
      })), __jsx("span", null, name));

    case "factsheet":
      return __jsx("i", {
        className: `icon icon__location icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 90 65"
      }, __jsx("path", {
        d: "M30.42,17.18H47.13V23.4a1.64,1.64,0,0,0,1.07,1.47h8.67v-.36a.45.45,0,0,0-.16-.32L48,16.36a.57.57,0,0,0-.38-.14H35.53V13.68a1.19,1.19,0,0,1,1.24-1.12H59.68a1.18,1.18,0,0,1,1.23,1.12V24.86H62V13.68a2.2,2.2,0,0,0-2.3-2.07H36.76a2.19,2.19,0,0,0-2.29,2.07v2.53H30.86a1.43,1.43,0,0,0-1.5,1.36v7.3h1.06Zm17.78.68,6.85,6.19H48.92a.69.69,0,0,1-.72-.65Z"
      }), __jsx("path", {
        d: "M60.91,39.69v6A1.28,1.28,0,0,1,59.68,47H56.87V39.7H55.8V52.49H30.42V39.7H29.36V52a1.56,1.56,0,0,0,1.5,1.61h24.5A1.56,1.56,0,0,0,56.87,52V48.17h2.81A2.38,2.38,0,0,0,62,45.72v-6Z"
      })), __jsx("span", null, name));

    case "karte":
      return __jsx("i", {
        className: `icon icon__location icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 90 65"
      }, __jsx("polygon", {
        points: "26.95 17.02 38.42 14.3 38.42 24.63 39.42 24.63 39.42 14.35 50.05 17.02 50.05 25.06 51.05 25.06 51.05 17 61.45 14.33 61.45 24.44 62.45 24.44 62.45 13.04 50.51 16.11 38.85 13.17 25.95 16.23 25.95 24.44 26.95 24.44 26.95 17.02"
      }), __jsx("polygon", {
        points: "62.45 41.03 61.45 41.04 61.48 47.53 51.05 49.99 51.05 41.04 50.05 41.04 50.05 50.01 39.42 47.54 39.42 41.04 38.42 41.04 38.42 47.51 26.95 49.72 26.95 41.04 25.95 41.04 25.95 50.94 38.87 48.44 50.51 51.14 62.49 48.32 62.45 41.03"
      })), __jsx("span", null, name));

    case "facebook":
      return __jsx("i", {
        className: `icon icon__social icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 24 24"
      }, __jsx("path", {
        d: "M20.48,3.51A12,12,0,1,0,12,24,12,12,0,0,0,20.48,3.51Zm-5.2,3.81H13.55a.66.66,0,0,0-.68.75V9.7h2.4L15,12.47H12.87v7.87H9.65V12.47H8.11V9.7H9.65V7.91A3,3,0,0,1,12.9,4.62h2.38Z"
      })));

    case "instagram":
      return __jsx("i", {
        className: `icon icon__social icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 24 24"
      }, __jsx("path", {
        d: "M15.62,6.31H8.38a2.1,2.1,0,0,0-2.1,2.1v7.24a2.1,2.1,0,0,0,2.1,2.1h7.24a2.1,2.1,0,0,0,2.1-2.1V8.41A2.1,2.1,0,0,0,15.62,6.31ZM12,15.8A3.77,3.77,0,1,1,15.77,12,3.77,3.77,0,0,1,12,15.8Zm3.89-6.75a.9.9,0,1,1,.89-.9A.89.89,0,0,1,15.89,9.05Z"
      }), __jsx("path", {
        d: "M12,9.86A2.18,2.18,0,1,0,14.17,12,2.17,2.17,0,0,0,12,9.86Z"
      }), __jsx("path", {
        d: "M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm7.22,15.61a3.65,3.65,0,0,1-3.64,3.64H8.42a3.65,3.65,0,0,1-3.64-3.64V8.46A3.66,3.66,0,0,1,8.42,4.81h7.16a3.66,3.66,0,0,1,3.64,3.65Z"
      })));

    case "back":
      return __jsx("i", {
        className: `icon icon__social icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 36.75 36.75"
      }, __jsx("defs", null, __jsx("linearGradient", {
        id: "linear-gradient",
        x1: "5.38",
        y1: "5.38",
        x2: "31.37",
        y2: "31.37",
        gradientUnits: "userSpaceOnUse"
      }, __jsx("stop", {
        offset: "0",
        stopColor: "#c2ac84",
        stopOpacity: "0.5"
      }), __jsx("stop", {
        offset: "1",
        stopColor: "#c2ac84",
        stopOpacity: "0"
      }))), __jsx("circle", {
        fill: "url(#linear-gradient)",
        cx: "18.38",
        cy: "18.38",
        r: "18.38"
      }), __jsx("path", {
        className: "arrow",
        d: "M20.8,25.58a1.21,1.21,0,0,1-.88-.37l-5.8-5.8a1.23,1.23,0,0,1-.36-.87,1.27,1.27,0,0,1,.36-.88l6.12-6.12A1.24,1.24,0,0,1,22,13.29l-5.25,5.25,4.93,4.93a1.23,1.23,0,0,1,0,1.74A1.2,1.2,0,0,1,20.8,25.58Z"
      })));

    case "plus":
      return __jsx("i", {
        className: `icon icon--${type}`
      }, __jsx("svg", {
        viewBox: "0 0 20.48 20.48"
      }, __jsx("path", {
        d: "M19.48,9.24H11.24V1a1,1,0,0,0-2,0V9.24H1a1,1,0,0,0,0,2H9.24v8.24a1,1,0,0,0,2,0V11.24h8.24a1,1,0,0,0,0-2Z"
      })));

    case "view":
      return __jsx("i", {
        className: `icon icon--${type}`
      }, __jsx("svg", {
        x: "0px",
        y: "0px",
        viewBox: "0 0 12.8 13.4"
      }, __jsx("path", {
        d: "M12.6,12.5L9.4,9.3c1-1,1.5-2.3,1.5-3.8c0-3-2.4-5.4-5.4-5.4c0,0,0,0,0,0s0,0,0,0c0,0,0,0-0.1,0 c-3,0-5.4,2.4-5.4,5.4c0,0,0,0,0,0.1c0,0,0,0,0,0s0,0,0,0c0,3,2.4,5.4,5.4,5.4c1.2,0,2.2-0.4,3.1-1l3.2,3.2c0.1,0.1,0.2,0.1,0.4,0.1 s0.3,0,0.4-0.1C12.8,13,12.8,12.7,12.6,12.5z M5.5,10C3,10,1,8,1,5.5S3,1,5.5,1S10,3,10,5.5S8,10,5.5,10z"
      })));

    case "cross":
      return __jsx("i", {
        className: `icon icon--${type}`
      }, __jsx("svg", {
        x: "0px",
        y: "0px",
        viewBox: "0 0 20.2 20.2"
      }, __jsx("path", {
        d: "M19.4,0.7L19.4,0.7c-0.4-0.4-1-0.4-1.4,0l-8,8l-8-8c-0.4-0.4-1-0.4-1.4,0l0,0c-0.4,0.4-0.4,1,0,1.4l8,8l-8,8 c-0.4,0.4-0.4,1,0,1.4l0,0c0.4,0.4,1,0.4,1.4,0l8-8l8,8c0.4,0.4,1,0.4,1.4,0l0,0c0.4-0.4,0.4-1,0-1.4l-8-8l8-8 C19.8,1.7,19.8,1.1,19.4,0.7z"
      })));

    case "mapMarker":
      return __jsx("i", {
        className: `icon--${type}`
      }, __jsx("svg", {
        version: "1.1",
        id: "Layer_1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 24 24"
      }, __jsx("defs", null, __jsx("linearGradient", {
        id: "marker_grad",
        x1: "10.8737",
        y1: "18.4454",
        x2: "12.5293",
        y2: "4.5317"
      }, __jsx("stop", {
        offset: "0",
        stopColor: "#632948"
      }), __jsx("stop", {
        offset: "1",
        stopColor: "#2D1D46"
      }))), __jsx("path", {
        className: "st1",
        fill: "url(#marker_grad)",
        d: "M12,2C8.1,2,5,5.1,5,9c0,5.2,7,13,7,13s7-7.8,7-13C19,5.1,15.9,2,12,2z M12,12.7c-1.8,0-3.2-1.4-3.2-3.2 s1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2S13.8,12.7,12,12.7z"
      })));

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/templates/karriere/index.js":
/*!************************************************!*\
  !*** ./components/templates/karriere/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropzone-uploader */ "react-dropzone-uploader");
/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Icon */ "./components/Icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ "./components/templates/karriere/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "/Users/fatih/repos/goldendoor-next/components/templates/karriere/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var bufferify = __webpack_require__(/*! json-bufferify */ "json-bufferify");



/* harmony default export */ __webpack_exports__["default"] = (({
  data,
  language
}) => {
  const formFields = data.fields.karriere_bewerbung;
  const [jobStartDate, setJobStartDate] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Date());

  const collapseBlock = el => {
    let sectionHeight = el.scrollHeight;
    let elTransition = el.style.transition;
    el.style.transition = '';
    requestAnimationFrame(function () {
      el.style.height = sectionHeight + 'px';
      el.style.transition = elTransition;
      requestAnimationFrame(function () {
        el.style.height = 6 + 'rem';
      });
    });
  };

  const expandBlock = el => {
    let sectionHeight = el.scrollHeight;
    el.style.height = sectionHeight + 'px';

    let trigger = el => {
      el.addEventListener('transitionend', function (e) {
        el.removeEventListener('transitionend', trigger);
        el.style.height = null;
      });
    };
  };

  const openBlock = e => {
    const entryContainer = e.currentTarget.parentElement.parentElement;
    let isCollapsed = entryContainer.getAttribute('data-collapsed') === 'true';
    console.log(isCollapsed);

    if (isCollapsed) {
      collapseBlock(entryContainer);
      entryContainer.setAttribute('data-collapsed', 'false');
    } else {
      expandBlock(entryContainer);
      entryContainer.setAttribute('data-collapsed', 'true');
    }

    console.log(e.currentTarget);
    e.currentTarget.firstElementChild.classList.toggle('rotateSymbol');
  };

  const labels = data.fields.karriere_bewerbung.bewerbung_etiketten;
  const uploadText = formFields.bewerbung_hochladen;
  const uploadMessages = formFields.formnachrichten;
  const [uploadedFile, setUploadedFile] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    file: '',
    buffer: {}
  });

  const MyUploader = () => {
    // specify upload params and url for your files
    const getUploadParams = ({
      meta
    }) => {
      return {
        url: 'https://httpbin.org/post'
      };
    }; // called every time a file's `status` changes


    const handleChangeStatus = ({
      meta,
      file
    }, status) => {
      console.log(status, meta, file);
    }; // receives array of files that are done uploading when submit button is clicked


    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta));
      allFiles.forEach(f => f.remove());
    };

    return __jsx(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_9___default.a, {
      getUploadParams: getUploadParams,
      onChangeStatus: handleChangeStatus,
      onSubmit: handleSubmit,
      accept: "application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    });
  };

  const onDrop = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log(uploadMessages[1].text);

      reader.onerror = () => console.log(uploadMessages[1].text);

      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setUploadedFile({
          file: file,
          buffer: binaryStr
        });
      };

      reader.readAsArrayBuffer(file);
      console.log(file);
    });
  }, []);
  const {
    getRootProps,
    getInputProps
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_7__["useDropzone"])({
    onDrop
  });
  const uploadTextParts = uploadText.split(' ');
  const [submitted, setSubmitted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])();

  const onSubmit = data => {
    const formData = {
      lang: language,
      contactType: "jobApplication",
      name: language === 'de' ? data.bewerbung_vorname : data.bewerbung_name,
      surname: language === 'de' ? data.bewerbung_name : data.bewerbung_surname,
      email: data.bewerbung_email,
      position: data.job_position,
      jobstatus: data.job_status,
      startdate: jobStartDate.toDateString(),
      message: data.job_message,
      attachment_name: uploadedFile.file.path,
      attachment_buffer: new TextDecoder('utf-8').decode(uploadedFile.buffer)
    };
    fetch('/api/kontakt', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(formData)
    }).then(res => {
      res.status === 200 ? setSubmitted(!submitted) : '';
    }).catch(err => console.log(err));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx("div", {
    className: "page__title page__title--contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, data.title)), __jsx("div", {
    className: "career",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, data.fields.karriere_eintrage.map((item, key) => __jsx("div", {
    key: key,
    className: "career__entry--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx("div", {
    className: "career__entry",
    "data-collapsed": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("div", {
    className: "career__entry--block career__entry--util",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, item.info.arbeitszeit), __jsx("div", {
    className: "career__entry--block career__entry--info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, item.info.titel), html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(item.beschreibung), __jsx("a", {
    href: "#bewerbung",
    className: "golden__button button--bewerbung",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, formFields.bewerbung_button)), __jsx("div", {
    className: "career__entry--block career__entry--util",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, item.info.standort), __jsx("div", {
    className: "career__entry--block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("a", {
    href: `#job-${key}`,
    onClick: e => openBlock(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }))))))), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    id: "bewerbung",
    className: "career__application",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, formFields.bewerbung_titel), __jsx("div", {
    className: "contact__step--flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "bewerbung_name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, labels.bewerbung_vorname, "*", __jsx("input", {
    className: "input__text",
    type: "text",
    ref: register({
      required: true,
      maxlength: 20,
      pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    }),
    name: "bewerbung_name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "bewerbung_name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, labels.bewerbung_name, "*", __jsx("input", {
    className: "input__text",
    type: "text",
    ref: register({
      required: true,
      maxlength: 20,
      pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    }),
    name: "bewerbung_surname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "bewerbung_email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, "EMAIL*", __jsx("input", {
    className: "input__text",
    type: "email",
    ref: register({
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: `UNGÜLTIGE E-MAIL-ADRESSE`
      }
    }),
    name: "bewerbung_email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, __jsx("label", {
    className: "label__text",
    htmlFor: "bewerbung_tel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, labels.bewerbung_telefon, __jsx("input", {
    className: "input__text",
    type: "tel",
    ref: register({
      maxlength: 35
    }),
    name: "bewerbung_tel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "job_position",
    className: "label__select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, formFields.bewerbung_frage_1), __jsx("select", {
    name: "job_position",
    ref: register,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, __jsx("optgroup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, data.fields.karriere_eintrage.map((item, key) => __jsx("option", {
    key: key,
    value: item.info.titel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, item.info.titel, ", ", item.info.standort))))), __jsx("div", {
    className: "contact__stepblock uploadcv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "uploadedfile",
    ref: register
  }, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, uploadTextParts[0]), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, uploadTextParts[1]), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, `${uploadTextParts[2]} ${uploadTextParts[3]}`))), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "job_status",
    className: "contact__stepblock--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, formFields.bewerbung_frage_2.frage), formFields.bewerbung_frage_2.job_status.map((item, key) => __jsx("p", {
    className: "contact__stepblock--inner contact__stepblock--career",
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx("input", {
    ref: register,
    className: "input__radio",
    type: "radio",
    name: "job_status",
    value: item.status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }), __jsx("span", {
    className: "label__radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, item.status)))), __jsx("div", {
    className: "contact__stepblock contact__stepblock--date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }, __jsx("label", {
    className: "contact__stepblock--inner",
    htmlFor: "job_start_date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, formFields.bewerbung_zeit), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
    selected: jobStartDate,
    onChange: date => setJobStartDate(date),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "job_message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, formFields.bewerbung_nachricht), __jsx("textarea", {
    ref: register,
    name: "job_message",
    id: "job_message",
    cols: "30",
    rows: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  })), __jsx("div", {
    className: "contact__stepblock career__submitwrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, __jsx("button", {
    type: "submit",
    className: "golden__button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }, formFields.bewerbung_button)))));
});

/***/ }),

/***/ "./components/templates/karriere/style.scss":
/*!**************************************************!*\
  !*** ./components/templates/karriere/style.scss ***!
  \**************************************************/
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/karriere.js":
/*!***************************!*\
  !*** ./pages/karriere.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _components_templates_karriere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/templates/karriere */ "./components/templates/karriere/index.js");
var _jsxFileName = "/Users/fatih/repos/goldendoor-next/pages/karriere.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const KarrierePage = ({
  data,
  language
}) => __jsx(_components_templates_karriere__WEBPACK_IMPORTED_MODULE_2__["default"], {
  data: data,
  language: language,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

KarrierePage.getInitialProps = async () => {
  const language = 'de';
  const res = await fetch(`${"http://goldendoor-api.narcissundtaurus.com/wp-json/gd/"}de/career`);
  const json = await res.json();
  return {
    data: json,
    language: language
  };
};

/* harmony default export */ __webpack_exports__["default"] = (KarrierePage);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/karriere.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fatih/repos/goldendoor-next/pages/karriere.js */"./pages/karriere.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "json-bufferify":
/*!*********************************!*\
  !*** external "json-bufferify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("json-bufferify");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

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

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "react-dropzone-uploader":
/*!******************************************!*\
  !*** external "react-dropzone-uploader" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone-uploader");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=karriere.js.map