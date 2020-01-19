webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie_universal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-universal */ "./node_modules/cookie-universal/dist/cookie-universal-common.js");
/* harmony import */ var cookie_universal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_universal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuToggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuToggler */ "./components/layout/MenuToggler.js");
/* harmony import */ var _MenuMailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuMailer */ "./components/layout/MenuMailer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/urbandruid/repos/goldendoor-next/components/layout/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var cookies = cookie_universal__WEBPACK_IMPORTED_MODULE_1___default()();

var Header = function Header(_ref) {
  var data = _ref.data,
      logo = _ref.logo,
      lang = _ref.lang,
      pathname = _ref.pathname;
  var navigation = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  var langSelection = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  var menuToggler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  var changeLang = function changeLang() {
    langSelection.current.previousElementSibling.classList.add('lowOpacity');
    langSelection.current.classList.add('changeLang');
  };

  var setLang = function setLang() {
    cookies.get('lang') === 'de' ? cookies.set('lang', 'en') : cookies.set('lang', 'de');
    langSelection.current.previousElementSibling.classList.remove('lowOpacity');
    langSelection.current.classList.remove('changeLang');
  };

  var setPathLang = function setPathLang() {
    if (lang === 'de' && pathname === '/') {
      return "/en";
    } else if (lang === 'en' && pathname === '/en') {
      return "/";
    } else if (lang === 'en') {
      return pathname.split('/en')[1];
    } else {
      return "/en/".concat(pathname.split('/')[1]);
    }
  };

  var toggleMenu = function toggleMenu(e) {
    console.log(navigation, e.currentTarget);
    menuToggler.current.classList.toggle('toggleMenuIcon');
    navigation.current.classList.toggle('nav__opening');
    var navItems = navigation.current.querySelectorAll('ul');
    setTimeout(function () {
      navItems.forEach(function (item) {
        item.classList.toggle('nav__child--appear');
      });
    }, 250);
  };

  return __jsx("header", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("nav", {
    className: "nav",
    ref: navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "nav__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, data.map(function (item) {
    return __jsx("ul", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      onClick: toggleMenu,
      className: "nav__parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, item.title)), item.children !== null && item.children.map(function (subItem) {
      return subItem.children !== null ? __jsx("ul", {
        key: subItem.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: subItem.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("a", {
        onClick: toggleMenu,
        className: "nav__child",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, subItem.title)), subItem.children.map(function (subItemChild) {
        return __jsx("li", {
          key: subItemChild.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: subItemChild.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx("a", {
          onClick: toggleMenu,
          className: "nav__child nav__child--sub",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, subItemChild.title)));
      })) : __jsx("li", {
        key: subItem.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: subItem.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("a", {
        onClick: toggleMenu,
        className: "nav__child",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, subItem.title)));
    }));
  }))), __jsx("div", {
    className: "frame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "logoarea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "panel panel__lang",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("button", {
    className: "panel__lang-selector",
    onClick: changeLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "".concat(lang.toUpperCase(), "\u25BE")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: setPathLang(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("a", {
    ref: langSelection,
    className: "panel__lang-selected",
    onClick: setLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, lang === 'de' ? 'EN' : 'DE')))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: lang === 'de' ? '/' : '/en',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("a", {
    id: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("img", {
    src: logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx("div", {
    className: "panel panel__menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("button", {
    className: "menutoggler__button",
    ref: menuToggler,
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_MenuToggler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })))), __jsx("a", {
    href: "#newsletter",
    className: "menuMailer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_MenuMailer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.e0bdd9cfacf2cf1d788f.hot-update.js.map