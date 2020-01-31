webpackHotUpdate("static/development/pages/en/downloads.js",{

/***/ "./components/templates/downloads/index.js":
/*!*************************************************!*\
  !*** ./components/templates/downloads/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ "./node_modules/serialize-javascript/index.js");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../carousel */ "./components/carousel/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Icon */ "./components/Icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.scss */ "./components/templates/downloads/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "/Users/fatih/repos/goldendoor-next/components/templates/downloads/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data,
      language = _ref.language;
  console.log(data, language);
  var images = data.fields.factsheets.factsheet_bearbeitung.map(function (item) {
    return item.factsheet_bild;
  });
  var pdfData = data.fields.factsheets.factsheet_bearbeitung.map(function (item) {
    return {
      name: item.factsheet_name,
      link: item.factsheet_dokument
    };
  });

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      submitted = _React$useState2[0],
      setSubmitted = _React$useState2[1];

  var onSubmit = function onSubmit(data) {
    var formData = {
      lang: language,
      contactType: "keyRequest",
      name: language === 'de' ? data.bewerbung_vorname : data.bewerbung_name,
      surname: language === 'de' ? data.bewerbung_name : data.bewerbung_surname,
      email: data.bewerbung_email
    };
    fetch('/api/kontakt', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(formData)
    }).then(function (res) {
      res.status === 200 ? setSubmitted(!submitted) : '';
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__["NextSeo"], {
    title: data.fields.seo.title,
    description: data.fields.seo.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: "page__title page__title--downloads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slug: data.slug,
    title: data.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, data.title)), __jsx(_carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "downloads",
    data: pdfData,
    content: data.fields.factsheets,
    imgList: images,
    img_width: 250,
    img_height: 180,
    visibleImages: 5,
    duration: 750,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    className: "presskit",
    id: "presskit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "presskit__blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "presskit__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Presskit"), html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(data.fields.presskit.inhalt)), __jsx("div", {
    className: "presskit__block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(data.fields.presskit.bearbeitung).map(function (item, key) {
    return __jsx("a", {
      key: key,
      href: item[1],
      target: "_blank",
      className: "singleloc__button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "factsheet",
      name: item[0].split('_').length > 1 ? "".concat(item[0].split('_')[0], " ").concat(item[0].split('_')[1]) : item[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }));
  }))), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "presskit__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })));
});
;

/***/ })

})
//# sourceMappingURL=downloads.js.c67d36fb59c405d5723b.hot-update.js.map