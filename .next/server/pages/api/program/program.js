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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/program/program.js");
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

/***/ "./pages/api/program/program.js":
/*!**************************************!*\
  !*** ./pages/api/program/program.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ "./pages/api/cors.js");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic */ "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_shared_entityshared_Program__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Program */ "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Program");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_shared_entityshared_Program__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(radiotrasmitter_RadioTransmitter_dist_shared_entityshared_Program__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method === "GET") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
    const list = await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicProgram().getPrograms();
    res.send(list);
  }

  if (req.method === "POST") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const dtprogram = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_Program__WEBPACK_IMPORTED_MODULE_2__["Program"](data.name, data.producer, data.type, data.price);
      await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicProgram().addProgram(dtprogram);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not add program",
          error: error.toString()
        }
      });
    }
  }

  if (req.method === "PUT") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const dtprogram = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_Program__WEBPACK_IMPORTED_MODULE_2__["Program"](data.name, data.producer, data.type, data.price);
      await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicProgram().updateProgram(dtprogram);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not update program",
          error: error.toString()
        }
      });
    }
  }

  if (req.method === "DELETE") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
    const data = req.body;

    try {
      const dtprogram = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_Program__WEBPACK_IMPORTED_MODULE_2__["Program"](data.name, " ", " ", 0);
      await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicProgram().deleteProgram(dtprogram);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          error: error.toString()
        }
      });
    }
  }
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

/***/ }),

/***/ "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Program":
/*!************************************************************************************!*\
  !*** external "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Program" ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Program");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29ycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZ3JhbS9wcm9ncmFtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L2xvZ2ljL0ZhY3RvcnlMb2dpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3Qvc2hhcmVkL2VudGl0eXNoYXJlZC9Qcm9ncmFtXCIiXSwibmFtZXMiOlsiaW5pdE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImNvcnMiLCJDb3JzIiwibWV0aG9kcyIsIm1ldGhvZCIsImxpc3QiLCJGYWN0b3J5TG9naWMiLCJnZXRMb2dpY1Byb2dyYW0iLCJnZXRQcm9ncmFtcyIsInNlbmQiLCJkYXRhIiwiYm9keSIsImR0cHJvZ3JhbSIsIlByb2dyYW0iLCJuYW1lIiwicHJvZHVjZXIiLCJ0eXBlIiwicHJpY2UiLCJhZGRQcm9ncmFtIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibXNnIiwidG9TdHJpbmciLCJ1cGRhdGVQcm9ncmFtIiwiZGVsZXRlUHJvZ3JhbSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVB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QUFoQjtBQUNBLFlBQU1SLHFHQUFZLENBQUNDLGVBQWIsR0FBK0JrQixhQUEvQixDQUE2Q2IsU0FBN0MsQ0FBTjtBQUNKLGFBQU9qQixHQUFHLENBQUN3QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUQsY0FBTSxFQUFFO0FBQVYsT0FBckIsQ0FBUDtBQUNDLEtBTEQsQ0FNQSxPQUFPRSxLQUFQLEVBQWM7QUFDWixhQUFPMUIsR0FBRyxDQUFDd0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRCxjQUFNLEVBQUUsT0FEa0I7QUFFMUJULFlBQUksRUFBRTtBQUFHVyxlQUFLLEVBQUVBLEtBQUssQ0FBQ0UsUUFBTjtBQUFWO0FBRm9CLE9BQXJCLENBQVA7QUFJRDtBQUNGO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUMvREgsaUM7Ozs7Ozs7Ozs7O0FDQUEscUY7Ozs7Ozs7Ozs7O0FDQUEsOEYiLCJmaWxlIjoicGFnZXMvYXBpL3Byb2dyYW0vcHJvZ3JhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Byb2dyYW0vcHJvZ3JhbS5qc1wiKTtcbiIsIi8vIEhlbHBlciBtZXRob2QgdG8gd2FpdCBmb3IgYSBtaWRkbGV3YXJlIHRvIGV4ZWN1dGUgYmVmb3JlIGNvbnRpbnVpbmdcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4gIHJldHVybiAocmVxLCByZXMpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG59XG4iLCJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYi9pbml0LW1pZGRsZXdhcmUnXG5cblxuXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbiAgLy8gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcbiAgQ29ycyh7XG4gICAgLy8gT25seSBhbGxvdyByZXF1ZXN0cyB3aXRoIEdFVCwgUE9TVCxQVVQsREVMRVRFIGFuZCBPUFRJT05TXG4gICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdQVVQnLCdERUxFVEUnLCdPUFRJT05TJ10sXG4gIH0pXG4pXG5leHBvcnQgZGVmYXVsdCBjb3JzXG5cbiIsImltcG9ydCBjb3JzIGZyb20gXCIuLi9jb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeUxvZ2ljfSBmcm9tIFwicmFkaW90cmFzbWl0dGVyL1JhZGlvVHJhbnNtaXR0ZXIvZGlzdC9sb2dpYy9GYWN0b3J5TG9naWNcIjtcclxuaW1wb3J0IHtQcm9ncmFtfSBmcm9tIFwicmFkaW90cmFzbWl0dGVyL1JhZGlvVHJhbnNtaXR0ZXIvZGlzdC9zaGFyZWQvZW50aXR5c2hhcmVkL1Byb2dyYW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIkdFVFwiKVxyXG4gIHtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXHJcbiAgICBjb25zdCBsaXN0PWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY1Byb2dyYW0oKS5nZXRQcm9ncmFtcygpO1xyXG4gICAgcmVzLnNlbmQobGlzdCk7XHJcbiAgfVxyXG5cclxuICBpZihyZXEubWV0aG9kPT09XCJQT1NUXCIpXHJcbiAge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgZHRwcm9ncmFtPW5ldyBQcm9ncmFtKGRhdGEubmFtZSxkYXRhLnByb2R1Y2VyLGRhdGEudHlwZSxkYXRhLnByaWNlKTtcclxuICAgIGF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY1Byb2dyYW0oKS5hZGRQcm9ncmFtKGR0cHJvZ3JhbSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IGFkZCBwcm9ncmFtXCIsIGVycm9yOiBlcnJvci50b1N0cmluZygpIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIlBVVFwiKVxyXG4gIHtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGR0cHJvZ3JhbT1uZXcgUHJvZ3JhbShkYXRhLm5hbWUsZGF0YS5wcm9kdWNlcixkYXRhLnR5cGUsZGF0YS5wcmljZSk7XHJcbiAgIGF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY1Byb2dyYW0oKS51cGRhdGVQcm9ncmFtKGR0cHJvZ3JhbSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IHVwZGF0ZSBwcm9ncmFtXCIsIGVycm9yOmVycm9yLnRvU3RyaW5nKCkgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYocmVxLm1ldGhvZD09PVwiREVMRVRFXCIpXHJcbiAge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcyk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICB0cnlcclxuICAgIHsgIFxyXG4gICAgICAgIGNvbnN0IGR0cHJvZ3JhbT1uZXcgUHJvZ3JhbShkYXRhLm5hbWUsXCIgXCIsXCIgXCIsMCk7XHJcbiAgICAgICAgYXdhaXQgRmFjdG9yeUxvZ2ljLmdldExvZ2ljUHJvZ3JhbSgpLmRlbGV0ZVByb2dyYW0oZHRwcm9ncmFtKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJTdWNjZXNzXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiRXJyb3JcIixcclxuICAgICAgICBkYXRhOiB7ICBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcblxyXG4gICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmFkaW90cmFzbWl0dGVyL1JhZGlvVHJhbnNtaXR0ZXIvZGlzdC9sb2dpYy9GYWN0b3J5TG9naWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmFkaW90cmFzbWl0dGVyL1JhZGlvVHJhbnNtaXR0ZXIvZGlzdC9zaGFyZWQvZW50aXR5c2hhcmVkL1Byb2dyYW1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==