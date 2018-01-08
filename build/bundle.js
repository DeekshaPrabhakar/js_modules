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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

var bimage = document.createElement('img');
bimage.src = _big2.default;

document.body.appendChild(bimage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

//module.exports = sum;
exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b0b3a9b34aafbe7e07e2aa64a4dd3b2.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file does not export any code, we import like this so it just gets executed

//const sum = require('./sum');
var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);