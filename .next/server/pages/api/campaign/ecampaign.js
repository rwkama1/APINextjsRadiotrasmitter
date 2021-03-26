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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/campaign/ecampaign.js");
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

/***/ "./pages/api/campaign/ecampaign.js":
/*!*****************************************!*\
  !*** ./pages/api/campaign/ecampaign.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ "./pages/api/cors.js");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic */ "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_shared_entityshared_ECampaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! radiotrasmitter/RadioTransmitter/dist/shared/entityshared/ECampaign */ "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/ECampaign");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_shared_entityshared_ECampaign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(radiotrasmitter_RadioTransmitter_dist_shared_entityshared_ECampaign__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method === "GET") {
    const {
      ptitle
    } = req.query;
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
    const camp = await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicCampaign().getCampaign(ptitle);
    res.send(camp);
  }

  if (req.method === "POST") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const getad = await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicAdvertiser().getAdvertiser(data.rut);
      const dtcamp = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_ECampaign__WEBPACK_IMPORTED_MODULE_2__["ECampaign"](data.title, data.datei, data.datef, data.duration, data.mentions, getad, data.producer, []);
      await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicCampaign().addCampaign(dtcamp);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not add campaign",
          error: error.toString()
        }
      });
    }
  }

  if (req.method === "PUT") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const getad = await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicAdvertiser().getAdvertiser(data.rut);
      const dtcamp = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_ECampaign__WEBPACK_IMPORTED_MODULE_2__["ECampaign"](data.title, data.datei, data.datef, data.duration, data.mentions, getad, data.producer, []);
      await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicCampaign().updateCampaign(dtcamp);
      return res.status(200).json({
        status: "Success"
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {
          msg: "Could not update campaign",
          error: error.toString()
        }
      });
    }
  }

  if (req.method === "DELETE") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
    const data = req.body;

    try {
      const dtcamp = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_ECampaign__WEBPACK_IMPORTED_MODULE_2__["ECampaign"](data.title, "", "", 0, 0, null, "", []);
      await radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLogicCampaign().deleteCampaign(dtcamp);
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

/***/ "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/ECampaign":
/*!**************************************************************************************!*\
  !*** external "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/ECampaign" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("radiotrasmitter/RadioTransmitter/dist/shared/entityshared/ECampaign");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2FtcGFpZ24vZWNhbXBhaWduLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jb3JzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L2xvZ2ljL0ZhY3RvcnlMb2dpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3Qvc2hhcmVkL2VudGl0eXNoYXJlZC9FQ2FtcGFpZ25cIiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwibWV0aG9kIiwicHRpdGxlIiwicXVlcnkiLCJjb3JzIiwiY2FtcCIsIkZhY3RvcnlMb2dpYyIsImdldExvZ2ljQ2FtcGFpZ24iLCJnZXRDYW1wYWlnbiIsInNlbmQiLCJkYXRhIiwiYm9keSIsImdldGFkIiwiZ2V0TG9naWNBZHZlcnRpc2VyIiwiZ2V0QWR2ZXJ0aXNlciIsInJ1dCIsImR0Y2FtcCIsIkVDYW1wYWlnbiIsInRpdGxlIiwiZGF0ZWkiLCJkYXRlZiIsImR1cmF0aW9uIiwibWVudGlvbnMiLCJwcm9kdWNlciIsImFkZENhbXBhaWduIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibXNnIiwidG9TdHJpbmciLCJ1cGRhdGVDYW1wYWlnbiIsImRlbGV0ZUNhbXBhaWduIiwiQ29ycyIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Ozs7O0FDYkEsaUM7Ozs7Ozs7Ozs7O0FDQUEscUY7Ozs7Ozs7Ozs7O0FDQUEsZ0ciLCJmaWxlIjoicGFnZXMvYXBpL2NhbXBhaWduL2VjYW1wYWlnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2NhbXBhaWduL2VjYW1wYWlnbi5qc1wiKTtcbiIsIi8vIEhlbHBlciBtZXRob2QgdG8gd2FpdCBmb3IgYSBtaWRkbGV3YXJlIHRvIGV4ZWN1dGUgYmVmb3JlIGNvbnRpbnVpbmdcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4gIHJldHVybiAocmVxLCByZXMpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG59XG4iLCJpbXBvcnQgY29ycyBmcm9tIFwiLi4vY29yc1wiO1xyXG5pbXBvcnQge0ZhY3RvcnlMb2dpY30gZnJvbSBcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCI7XHJcbmltcG9ydCB7RUNhbXBhaWdufSBmcm9tIFwicmFkaW90cmFzbWl0dGVyL1JhZGlvVHJhbnNtaXR0ZXIvZGlzdC9zaGFyZWQvZW50aXR5c2hhcmVkL0VDYW1wYWlnblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcblxyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIkdFVFwiKVxyXG4gIHtcclxuICAgIGNvbnN0IHsgcHRpdGxlIH0gPSByZXEucXVlcnk7XHJcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgY29uc3QgY2FtcD1hd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNDYW1wYWlnbigpLmdldENhbXBhaWduKHB0aXRsZSk7XHJcbiAgICByZXMuc2VuZChjYW1wKTtcclxuICB9XHJcblxyXG5cclxuICBpZihyZXEubWV0aG9kPT09XCJQT1NUXCIpXHJcbiAge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgZ2V0YWQ9YXdhaXQgRmFjdG9yeUxvZ2ljLmdldExvZ2ljQWR2ZXJ0aXNlcigpLmdldEFkdmVydGlzZXIoZGF0YS5ydXQpO1xyXG4gICAgY29uc3QgZHRjYW1wPW5ldyBFQ2FtcGFpZ24oZGF0YS50aXRsZSxkYXRhLmRhdGVpLGRhdGEuZGF0ZWYsZGF0YS5kdXJhdGlvbixkYXRhLm1lbnRpb25zLGdldGFkLGRhdGEucHJvZHVjZXIsW10pO1xyXG4gICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNDYW1wYWlnbigpLmFkZENhbXBhaWduKGR0Y2FtcCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IGFkZCBjYW1wYWlnblwiLCBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihyZXEubWV0aG9kPT09XCJQVVRcIilcclxuICB7XHJcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBnZXRhZD1hd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNBZHZlcnRpc2VyKCkuZ2V0QWR2ZXJ0aXNlcihkYXRhLnJ1dCk7XHJcbiAgICBjb25zdCBkdGNhbXA9bmV3IEVDYW1wYWlnbihkYXRhLnRpdGxlLGRhdGEuZGF0ZWksZGF0YS5kYXRlZixkYXRhLmR1cmF0aW9uLGRhdGEubWVudGlvbnMsZ2V0YWQsZGF0YS5wcm9kdWNlcixbXSk7XHJcbiAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNDYW1wYWlnbigpLnVwZGF0ZUNhbXBhaWduKGR0Y2FtcCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IHVwZGF0ZSBjYW1wYWlnblwiLCBlcnJvcjplcnJvci50b1N0cmluZygpIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIkRFTEVURVwiKVxyXG4gIHtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpO1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGR0Y2FtcD1uZXcgRUNhbXBhaWduKGRhdGEudGl0bGUsXCJcIixcIlwiLDAsMCxudWxsLFwiXCIsW10pO1xyXG4gICAgYXdhaXQgRmFjdG9yeUxvZ2ljLmdldExvZ2ljQ2FtcGFpZ24oKS5kZWxldGVDYW1wYWlnbihkdGNhbXApO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJTdWNjZXNzXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiRXJyb3JcIixcclxuICAgICAgICBkYXRhOiB7ICBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcblxyXG4gIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICcuLi8uLi9saWIvaW5pdC1taWRkbGV3YXJlJ1xuXG5cblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gIENvcnMoe1xuICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QsUFVULERFTEVURSBhbmQgT1BUSU9OU1xuICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywnREVMRVRFJywnT1BUSU9OUyddLFxuICB9KVxuKVxuZXhwb3J0IGRlZmF1bHQgY29yc1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3Qvc2hhcmVkL2VudGl0eXNoYXJlZC9FQ2FtcGFpZ25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==