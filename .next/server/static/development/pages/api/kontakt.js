module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./kontaktMailer.js":
/*!**************************!*\
  !*** ./kontaktMailer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");

const fs = __webpack_require__(/*! fs */ "fs");

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtprelaypool.ispgateway.de",
  port: 465,
  secure: true,
  // use TLS
  auth: {
    user: 'f.gozenc@narciss-taurus.de',
    pass: '1rk3n84L>h8c'
  }
});

const send = props => {
  console.log(props);
  const name = props.contactType == 'contactForm' ? props.kontakt_name + " " + props.kontakt_surname : props.name + ' ' + props.surname;
  const email = props.contactType == 'contactForm' ? props.kontakt_email : props.email;
  const text = props.contactType == 'contactForm' ? `
    \r\nKontaktdaten\r\n
    Anrede: ${props.kontakt_anrede}\r\n
    Vorname: ${props.kontakt_name}\r\n
    Nachname: ${props.kontakt_surname}\r\n
    E-Mail: ${props.kontakt_email}\r\n
    Telefon: ${props.kontakt_phone}\r\n
    Firma: ${props.kontakt_company}\r\n
    Nachricht: ${props.event_nachricht}\r\n
    \r\nEventinformationen\r\n
    Art der Veranstaltung: ${props.event_type}\r\n
    Location Auswahl: ${props.event_location}\r\n
    Konkretes Datum?: ${props.event_date_answer}\r\n
    Zeitraum (Wenn es kein konkretes Datum gibt): ${props.date_range}\r\n
    Event Datum (Wenn es ein konkretes Datum gibt): ${props.eventdatum}\r\n
    Event Ausweichtermin (Wenn es ein konkretes Datum gibt): ${props.ausweichtermin}\r\n
    Event Beginn Zeit (Wenn es ein konkretes Datum gibt): ${props.eventzeitbeginn}\r\n
    Event Ende Zeit (Wenn es ein konkretes Datum gibt): ${props.eventzeitend}\r\n
    \r\nZusatzinformationen\r\n
    Anzahl der Personen: ${props.personenzahl}\r\n
    Maximal Budget?: ${props.event_max_budget}\r\n
    \r\nGewünschte dienstleistungen\r\n
    Speisenauswahl: ${props.lang === 'de' ? props.event_speisen : props.event_food}\r\n
    Mobiliarauswahl: ${props.lang === 'de' ? props.event_mobiliar : props.event_furnishings}\r\n
    Technikauswahl: ${props.lang === 'de' ? props.event_technik : props.event_technique}\r\n
    Dekoauswahl: ${props.lang === 'de' ? props.event_deko : props.event_decoration}\r\n
    Musikauswahl: ${props.lang === 'de' ? props.event_musik : props.event_music}\r\n
  ` : `
    \r\nKarriere Bewerbung\r\n
    Vorname: ${props.name}\r\n
    Nachname: ${props.surname}\r\n
    E-Mail: ${props.email}\r\n
    Berufliche Stellung: ${props.position}\r\n
    Aktueller Jobsstatus: ${props.jobstatus}\r\n
    Mögliches Start-Datum: ${props.startdate}\r\n
    Nachricht: ${props.message}\r\n
  `;
  const uploadedFile = props.contactType == 'contactForm' ? null : [{
    filename: props.attachment.filename,
    path: fs.createReadStream(props.attachment.path),
    content: fs.createReadStream(props.attachment.path)
  }];
  const sender = `${name} <${email}>`;
  const message = {
    from: 'f.gozenc@narciss-taurus.de',
    to: 'f.gozenc@narciss-taurus.de',
    subject: `Neu Nachricht von ${sender}`,
    text,
    attachments: uploadedFile,
    replyTo: sender
  };
  return new _Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => error ? reject(error) : resolve(info));
  });
};

module.exports = send;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./pages/api/kontakt.js":
/*!******************************!*\
  !*** ./pages/api/kontakt.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const kontaktMailer = __webpack_require__(/*! ../../kontaktMailer */ "./kontaktMailer.js");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  if (req.method === 'POST') {
    kontaktMailer(req.body).then(() => {
      res.statusCode = 200;
      res.send('Ihre Mail wurde verschickt, vielen Dank für Ihre Zeit.');
    }).catch(error => {
      console.log('failed', error);
      res.send('Beim Versenden der E-Mail ist ein Problem aufgetreten. Wenden Sie sich an Ihren Administrator.');
    });
  } else {
    res.statusCode = 404;
    res.send('Beim Versenden der E-Mail ist ein Problem aufgetreten. Wenden Sie sich an Ihren Administrator.');
  }
});

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/api/kontakt.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fatih/repos/goldendoor-next/pages/api/kontakt.js */"./pages/api/kontakt.js");


/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ })

/******/ });
//# sourceMappingURL=kontakt.js.map