/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./css/style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

const img1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./img/home-interview.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const img2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./img/home-benefit.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const img3 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./img/home-service.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const img4 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./img/home-cover.jpg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const img5 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./img/home-macbook.jpg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const img6 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./img/logo-header.svg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

console.log(img1, img2, img3, img4, img5, img6);

// handlebar someting({img2})

module.exports = img1;


/***/ })
/******/ ]);