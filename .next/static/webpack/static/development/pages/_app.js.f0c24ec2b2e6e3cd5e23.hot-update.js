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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var cookies = cookie_universal__WEBPACK_IMPORTED_MODULE_1___default()();

var Header = function Header(_ref) {
  var data = _ref.data,
      logo = _ref.logo,
      lang = _ref.lang,
      pathname = _ref.pathname;
  console.log(pathname);
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
    } else if (pathname === '/en/engagement' || pathname === '/engagement') {
      console.log('hey');
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
    className: "header"
  }, __jsx("nav", {
    className: "nav",
    ref: navigation
  }, __jsx("div", {
    className: "nav__wrapper"
  }, data.map(function (item) {
    return __jsx("ul", {
      key: item.id
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: item.url
    }, __jsx("a", {
      onClick: toggleMenu,
      className: "nav__parent"
    }, item.title)), item.children !== null && item.children.map(function (subItem) {
      return subItem.children !== null ? __jsx("ul", {
        key: subItem.id
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: subItem.url
      }, __jsx("a", {
        onClick: toggleMenu,
        className: "nav__child"
      }, subItem.title)), subItem.children.map(function (subItemChild) {
        return __jsx("li", {
          key: subItemChild.id
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: subItemChild.url
        }, __jsx("a", {
          onClick: toggleMenu,
          className: "nav__child nav__child--sub"
        }, subItemChild.title)));
      })) : __jsx("li", {
        key: subItem.id
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: subItem.url
      }, __jsx("a", {
        onClick: toggleMenu,
        className: "nav__child"
      }, subItem.title)));
    }));
  }))), __jsx("div", {
    className: "frame"
  }, __jsx("div", {
    className: "logoarea"
  }, __jsx("div", {
    className: "panel panel__lang"
  }, __jsx("button", {
    className: "panel__lang-selector",
    onClick: changeLang
  }, "".concat(lang.toUpperCase(), "\u25BE")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: setPathLang()
  }, __jsx("a", {
    ref: langSelection,
    className: "panel__lang-selected",
    onClick: setLang
  }, __jsx("span", null, lang === 'de' ? 'EN' : 'DE')))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: lang === 'de' ? '/' : '/en'
  }, __jsx("a", {
    id: "logo"
  }, __jsx("img", {
    src: logo,
    alt: "Golden Door Logo"
  }))), __jsx("div", {
    className: "panel panel__menu"
  }, __jsx("button", {
    className: "menutoggler__button",
    ref: menuToggler,
    onClick: toggleMenu
  }, __jsx(_MenuToggler__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), __jsx("a", {
    href: "#newsletter",
    className: "menuMailer"
  }, __jsx(_MenuMailer__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.f0c24ec2b2e6e3cd5e23.hot-update.js.map