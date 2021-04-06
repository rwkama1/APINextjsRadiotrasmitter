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
      return res.status(500).send("Could not add campaign " + error.message);
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
      return res.status(500).send("Could not update campaign " + error.message);
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
      return res.status(500).send("Could not delete campaign " + error.message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2FtcGFpZ24vZWNhbXBhaWduLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jb3JzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L2xvZ2ljL0ZhY3RvcnlMb2dpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3Qvc2hhcmVkL2VudGl0eXNoYXJlZC9FQ2FtcGFpZ25cIiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwibWV0aG9kIiwicHRpdGxlIiwicXVlcnkiLCJjb3JzIiwiY2FtcCIsIkZhY3RvcnlMb2dpYyIsImdldExvZ2ljQ2FtcGFpZ24iLCJnZXRDYW1wYWlnbiIsInNlbmQiLCJkYXRhIiwiYm9keSIsImdldGFkIiwiZ2V0TG9naWNBZHZlcnRpc2VyIiwiZ2V0QWR2ZXJ0aXNlciIsInJ1dCIsImR0Y2FtcCIsIkVDYW1wYWlnbiIsInRpdGxlIiwiZGF0ZWkiLCJkYXRlZiIsImR1cmF0aW9uIiwibWVudGlvbnMiLCJwcm9kdWNlciIsImFkZENhbXBhaWduIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInVwZGF0ZUNhbXBhaWduIiwiZGVsZXRlQ2FtcGFpZ24iLCJDb3JzIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Q0E7QUFFQSxZQUFNSyxNQUFNLEdBQUMsSUFBSUMsNkdBQUosQ0FBY1AsSUFBSSxDQUFDUSxLQUFuQixFQUF5QixFQUF6QixFQUE0QixFQUE1QixFQUErQixDQUEvQixFQUFpQyxDQUFqQyxFQUFtQyxJQUFuQyxFQUF3QyxFQUF4QyxFQUEyQyxFQUEzQyxDQUFiO0FBQ0EsWUFBTVoscUdBQVksQ0FBQ0MsZ0JBQWIsR0FBZ0N1QixjQUFoQyxDQUErQ2QsTUFBL0MsQ0FBTjtBQUVBLGFBQU9yQixHQUFHLENBQUM4QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUQsY0FBTSxFQUFFO0FBQVYsT0FBckIsQ0FBUDtBQUNDLEtBUEQsQ0FRQSxPQUFPRSxLQUFQLEVBQWM7QUFDWixhQUFPaEMsR0FBRyxDQUFDOEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JoQixJQUFoQixDQUFxQiwrQkFBNkJrQixLQUFLLENBQUNDLE9BQXhELENBQVA7QUFDRDtBQUNGO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0RIO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FLQTs7QUFDQSxNQUFNeEIsSUFBSSxHQUFHWixvRUFBYyxFQUN6QjtBQUNBdUMsMkNBQUksQ0FBQztBQUNIO0FBQ0FDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXNCLFFBQXRCLEVBQStCLFNBQS9CO0FBRk4sQ0FBRCxDQUZxQixDQUEzQjtBQU9lNUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNiQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxRjs7Ozs7Ozs7Ozs7QUNBQSxnRyIsImZpbGUiOiJwYWdlcy9hcGkvY2FtcGFpZ24vZWNhbXBhaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvY2FtcGFpZ24vZWNhbXBhaWduLmpzXCIpO1xuIiwiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRNaWRkbGV3YXJlKG1pZGRsZXdhcmUpIHtcbiAgcmV0dXJuIChyZXEsIHJlcykgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcbiAgICAgIH0pXG4gICAgfSlcbn1cbiIsImltcG9ydCBjb3JzIGZyb20gXCIuLi9jb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeUxvZ2ljfSBmcm9tIFwicmFkaW90cmFzbWl0dGVyL1JhZGlvVHJhbnNtaXR0ZXIvZGlzdC9sb2dpYy9GYWN0b3J5TG9naWNcIjtcclxuaW1wb3J0IHtFQ2FtcGFpZ259IGZyb20gXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L3NoYXJlZC9lbnRpdHlzaGFyZWQvRUNhbXBhaWduXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuXHJcbiAgaWYocmVxLm1ldGhvZD09PVwiR0VUXCIpXHJcbiAge1xyXG4gICAgY29uc3QgeyBwdGl0bGUgfSA9IHJlcS5xdWVyeTtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXHJcbiAgICBjb25zdCBjYW1wPWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY0NhbXBhaWduKCkuZ2V0Q2FtcGFpZ24ocHRpdGxlKTtcclxuICAgIHJlcy5zZW5kKGNhbXApO1xyXG4gIH1cclxuXHJcblxyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIlBPU1RcIilcclxuICB7XHJcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBnZXRhZD1hd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNBZHZlcnRpc2VyKCkuZ2V0QWR2ZXJ0aXNlcihkYXRhLnJ1dCk7XHJcbiAgICBjb25zdCBkdGNhbXA9bmV3IEVDYW1wYWlnbihkYXRhLnRpdGxlLGRhdGEuZGF0ZWksZGF0YS5kYXRlZixkYXRhLmR1cmF0aW9uLGRhdGEubWVudGlvbnMsZ2V0YWQsZGF0YS5wcm9kdWNlcixbXSk7XHJcbiAgIGF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY0NhbXBhaWduKCkuYWRkQ2FtcGFpZ24oZHRjYW1wKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJTdWNjZXNzXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiQ291bGQgbm90IGFkZCBjYW1wYWlnbiBcIitlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYocmVxLm1ldGhvZD09PVwiUFVUXCIpXHJcbiAge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgIHRyeVxyXG4gICAge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgZ2V0YWQ9YXdhaXQgRmFjdG9yeUxvZ2ljLmdldExvZ2ljQWR2ZXJ0aXNlcigpLmdldEFkdmVydGlzZXIoZGF0YS5ydXQpO1xyXG4gICAgY29uc3QgZHRjYW1wPW5ldyBFQ2FtcGFpZ24oZGF0YS50aXRsZSxkYXRhLmRhdGVpLGRhdGEuZGF0ZWYsZGF0YS5kdXJhdGlvbixkYXRhLm1lbnRpb25zLGdldGFkLGRhdGEucHJvZHVjZXIsW10pO1xyXG4gICAgYXdhaXQgRmFjdG9yeUxvZ2ljLmdldExvZ2ljQ2FtcGFpZ24oKS51cGRhdGVDYW1wYWlnbihkdGNhbXApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiBcIlN1Y2Nlc3NcIiB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJDb3VsZCBub3QgdXBkYXRlIGNhbXBhaWduIFwiK2Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihyZXEubWV0aG9kPT09XCJERUxFVEVcIilcclxuICB7XHJcbiAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKTtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIHRyeVxyXG4gICAge1xyXG4gIFxyXG4gICAgY29uc3QgZHRjYW1wPW5ldyBFQ2FtcGFpZ24oZGF0YS50aXRsZSxcIlwiLFwiXCIsMCwwLG51bGwsXCJcIixbXSk7XHJcbiAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNDYW1wYWlnbigpLmRlbGV0ZUNhbXBhaWduKGR0Y2FtcCk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiBcIlN1Y2Nlc3NcIiB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJDb3VsZCBub3QgZGVsZXRlIGNhbXBhaWduIFwiK2Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcblxyXG4gIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICcuLi8uLi9saWIvaW5pdC1taWRkbGV3YXJlJ1xuXG5cblxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG5jb25zdCBjb3JzID0gaW5pdE1pZGRsZXdhcmUoXG4gIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gIENvcnMoe1xuICAgIC8vIE9ubHkgYWxsb3cgcmVxdWVzdHMgd2l0aCBHRVQsIFBPU1QsUFVULERFTEVURSBhbmQgT1BUSU9OU1xuICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnUFVUJywnREVMRVRFJywnT1BUSU9OUyddLFxuICB9KVxuKVxuZXhwb3J0IGRlZmF1bHQgY29yc1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3Qvc2hhcmVkL2VudGl0eXNoYXJlZC9FQ2FtcGFpZ25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==