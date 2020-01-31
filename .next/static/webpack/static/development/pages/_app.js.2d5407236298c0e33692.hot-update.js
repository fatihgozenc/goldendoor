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
var _jsxFileName = "/Users/fatih/repos/goldendoor-next/components/layout/Header.js";

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
    } else if (pathname === '/en/engagement' || pathname === '/engagement') {
      return lang === 'de' ? "/en/engagement" : "/engagement";
    } else if (lang === 'en') {
      return pathname.split('/en')[1];
    } else {
      return "/en".concat(pathname);
    }
  };

  var toggleMenu = function toggleMenu(e) {
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
    }, __jsx("a", {
      href: item.url,
      onClick: toggleMenu,
      className: "nav__parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, item.title), item.children !== null && item.children.map(function (subItem) {
      return subItem.children !== null ? __jsx("ul", {
        key: subItem.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        href: subItem.url,
        onClick: toggleMenu,
        className: "nav__child",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, subItem.title), subItem.children.map(function (subItemChild) {
        return __jsx("li", {
          key: subItemChild.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx("a", {
          href: subItemChild.url,
          onClick: toggleMenu,
          className: "nav__child nav__child--sub",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, subItemChild.title));
      })) : __jsx("li", {
        key: subItem.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("a", {
        href: subItem.url,
        onClick: toggleMenu,
        className: "nav__child",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, subItem.title));
    }));
  }))), __jsx("div", {
    className: "frame",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "logoarea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "panel panel__lang",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("button", {
    className: "panel__lang-selector",
    onClick: changeLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "".concat(lang.toUpperCase(), "\u25BE")), __jsx("a", {
    href: setPathLang(),
    ref: langSelection,
    className: "panel__lang-selected",
    onClick: setLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, lang === 'de' ? 'EN' : 'DE'))), __jsx("a", {
    href: lang === 'de' ? '/' : '/en',
    id: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("img", {
    src: logo,
    alt: "Golden Door Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })), __jsx("div", {
    className: "panel panel__menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("a", {
    href: "/locations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Locations"), __jsx("a", {
    href: "/locations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Locations"), __jsx("button", {
    className: "menutoggler__button",
    ref: menuToggler,
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_MenuToggler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })))), __jsx("a", {
    href: "#newsletter",
    className: "menuMailer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_MenuMailer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.2d5407236298c0e33692.hot-update.js.map