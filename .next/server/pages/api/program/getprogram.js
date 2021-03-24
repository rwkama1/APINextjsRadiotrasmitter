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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/program/getprogram.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initMiddleware; });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./pages/api/cors.js":
/*!***************************!*\
  !*** ./pages/api/cors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/init-middleware */ "./lib/init-middleware.js");

 // Initialize the cors middleware

const cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST,PUT,DELETE and OPTIONS
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
/* harmony default export */ __webpack_exports__["default"] = (cors);

/***/ }),

/***/ "./pages/api/program/getprogram.js":
/*!*****************************************!*\
  !*** ./pages/api/program/getprogram.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ "./pages/api/cors.js");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic */ "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method === "GET") {
    try {
      const {
        pname
      } = req.query;
      await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
      const getprogr = await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicProgram().getProgram(pname);
      res.send(getprogr);
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not search program",
          error: error.toString()
        }
      });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
      const getad = await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicProgram().getProgramsByNameLetter(data.exp);
      res.send(getad);
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not search program",
          error: error.toString()
        }
      });
    }
  }

  return res.status(405).json({
    msg: "Method not implemented"
  });
});

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic":
/*!***************************************************************************!*\
  !*** external "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29ycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZ3JhbS9nZXRwcm9ncmFtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L2xvZ2ljL0ZhY3RvcnlMb2dpY1wiIl0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJjb3JzIiwiQ29ycyIsIm1ldGhvZHMiLCJtZXRob2QiLCJwbmFtZSIsInF1ZXJ5IiwiZ2V0cHJvZ3IiLCJGYWN0b3J5TG9naWMiLCJnZXRMb2dpY1Byb2dyYW0iLCJnZXRQcm9ncmFtIiwic2VuZCIsImVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJtc2ciLCJ0b1N0cmluZyIsImJvZHkiLCJnZXRhZCIsImdldFByb2dyYW1zQnlOYW1lTGV0dGVyIiwiZXhwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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OztBQUNDLFNBQU90QixHQUFHLENBQUNrQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsT0FBRyxFQUFFO0FBQVAsR0FBckIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDdENILGlDOzs7Ozs7Ozs7OztBQ0FBLHFGIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9ncmFtL2dldHByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wcm9ncmFtL2dldHByb2dyYW0uanNcIik7XG4iLCIvLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1pZGRsZXdhcmUobWlkZGxld2FyZSkge1xuICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxufVxuIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICcuLi8uLi9saWIvaW5pdC1taWRkbGV3YXJlJ1xuXG5cblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gIENvcnMoe1xuICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QsUFVULERFTEVURSBhbmQgT1BUSU9OU1xuICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywnREVMRVRFJywnT1BUSU9OUyddLFxuICB9KVxuKVxuZXhwb3J0IGRlZmF1bHQgY29yc1xuXG4iLCJpbXBvcnQgY29ycyBmcm9tIFwiLi4vY29yc1wiO1xyXG5pbXBvcnQge0ZhY3RvcnlMb2dpY30gZnJvbSBcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBpZihyZXEubWV0aG9kPT09XCJHRVRcIilcclxuICB7XHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgIGNvbnN0IHsgcG5hbWUgfSA9IHJlcS5xdWVyeTtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXHJcblxyXG4gICAgY29uc3QgZ2V0cHJvZ3I9YXdhaXQgRmFjdG9yeUxvZ2ljLmdldExvZ2ljUHJvZ3JhbSgpLmdldFByb2dyYW0ocG5hbWUpO1xyXG4gICAgcmVzLnNlbmQoZ2V0cHJvZ3IpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IHNlYXJjaCBwcm9ncmFtXCIsIGVycm9yOmVycm9yLnRvU3RyaW5nKCkgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYocmVxLm1ldGhvZD09PVwiUE9TVFwiKVxyXG4gIHtcclxuICAgIHRyeVxyXG4gICAge1xyXG4gIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gIGNvbnN0IGdldGFkPWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY1Byb2dyYW0oKS5nZXRQcm9ncmFtc0J5TmFtZUxldHRlcihkYXRhLmV4cCk7XHJcbiAgcmVzLnNlbmQoZ2V0YWQpO1xyXG4gICAgfVxyXG4gIGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgIHN0YXR1czogXCJFcnJvclwiLFxyXG4gICAgICAgIGRhdGE6IHsgbXNnOiBcIkNvdWxkIG5vdCBzZWFyY2ggcHJvZ3JhbVwiLCBlcnJvcjplcnJvci50b1N0cmluZygpIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbXNnOiBcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWRcIn0pO1xyXG4gIH1cclxuXHJcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L2xvZ2ljL0ZhY3RvcnlMb2dpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9