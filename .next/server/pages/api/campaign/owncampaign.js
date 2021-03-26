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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/campaign/owncampaign.js");
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

/***/ "./pages/api/campaign/owncampaign.js":
/*!*******************************************!*\
  !*** ./pages/api/campaign/owncampaign.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ "./pages/api/cors.js");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic */ "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(radiotrasmitter_RadioTransmitter_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_shared_entityshared_OwnCampaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! radiotrasmitter/RadioTransmitter/dist/shared/entityshared/OwnCampaign */ "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/OwnCampaign");
/* harmony import */ var radiotrasmitter_RadioTransmitter_dist_shared_entityshared_OwnCampaign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(radiotrasmitter_RadioTransmitter_dist_shared_entityshared_OwnCampaign__WEBPACK_IMPORTED_MODULE_2__);



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
      const dtcamp = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_OwnCampaign__WEBPACK_IMPORTED_MODULE_2__["OwnCampaign"](data.title, data.datei, data.datef, data.duration, data.mentions, getad, data.cost, []);
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
      const dtcamp = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_OwnCampaign__WEBPACK_IMPORTED_MODULE_2__["OwnCampaign"](data.title, data.datei, data.datef, data.duration, data.mentions, getad, data.cost, []);
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
      const dtcamp = new radiotrasmitter_RadioTransmitter_dist_shared_entityshared_OwnCampaign__WEBPACK_IMPORTED_MODULE_2__["OwnCampaign"](data.title, "", "", 0, 0, null, 0, []);
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

/***/ "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/OwnCampaign":
/*!****************************************************************************************!*\
  !*** external "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/OwnCampaign" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("radiotrasmitter/RadioTransmitter/dist/shared/entityshared/OwnCampaign");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2FtcGFpZ24vb3duY2FtcGFpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NvcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmFkaW90cmFzbWl0dGVyL1JhZGlvVHJhbnNtaXR0ZXIvZGlzdC9zaGFyZWQvZW50aXR5c2hhcmVkL093bkNhbXBhaWduXCIiXSwibmFtZXMiOlsiaW5pdE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsIm1ldGhvZCIsInB0aXRsZSIsInF1ZXJ5IiwiY29ycyIsImNhbXAiLCJGYWN0b3J5TG9naWMiLCJnZXRMb2dpY0NhbXBhaWduIiwiZ2V0Q2FtcGFpZ24iLCJzZW5kIiwiZGF0YSIsImJvZHkiLCJnZXRhZCIsImdldExvZ2ljQWR2ZXJ0aXNlciIsImdldEFkdmVydGlzZXIiLCJydXQiLCJkdGNhbXAiLCJPd25DYW1wYWlnbiIsInRpdGxlIiwiZGF0ZWkiLCJkYXRlZiIsImR1cmF0aW9uIiwibWVudGlvbnMiLCJjb3N0IiwiYWRkQ2FtcGFpZ24iLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtc2ciLCJ0b1N0cmluZyIsInVwZGF0ZUNhbXBhaWduIiwiZGVsZXRlQ2FtcGFpZ24iLCJDb3JzIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLFVBQXhCLEVBQW9DO0FBQ2pELFNBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQ0wsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUMvQkwsY0FBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWUksTUFBRCxJQUFZO0FBQy9CLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDM0IsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDRDs7QUFDRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNELEtBTFMsQ0FBVjtBQU1ELEdBUEQsQ0FERjtBQVNELEM7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLCtFQUFnQkwsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBRXZDLE1BQUdELEdBQUcsQ0FBQ08sTUFBSixLQUFhLEtBQWhCLEVBQ0E7QUFDRSxVQUFNO0FBQUVDO0FBQUYsUUFBYVIsR0FBRyxDQUFDUyxLQUF2QjtBQUNBLFVBQU1DLHFEQUFJLENBQUNWLEdBQUQsRUFBTUMsR0FBTixDQUFWO0FBQ0EsVUFBTVUsSUFBSSxHQUFDLE1BQU1DLHFHQUFZLENBQUNDLGdCQUFiLEdBQWdDQyxXQUFoQyxDQUE0Q04sTUFBNUMsQ0FBakI7QUFDQVAsT0FBRyxDQUFDYyxJQUFKLENBQVNKLElBQVQ7QUFDRDs7QUFHRCxNQUFHWCxHQUFHLENBQUNPLE1BQUosS0FBYSxNQUFoQixFQUNBO0FBQ0UsVUFBTUcscURBQUksQ0FBQ1YsR0FBRCxFQUFNQyxHQUFOLENBQVY7O0FBQ0EsUUFDQTtBQUNBLFlBQU1lLElBQUksR0FBR2hCLEdBQUcsQ0FBQ2lCLElBQWpCO0FBQ0EsWUFBTUMsS0FBSyxHQUFDLE1BQU1OLHFHQUFZLENBQUNPLGtCQUFiLEdBQWtDQyxhQUFsQyxDQUFnREosSUFBSSxDQUFDSyxHQUFyRCxDQUFsQjtBQUNBLFlBQU1DLE1BQU0sR0FBQyxJQUFJQyxpSEFBSixDQUFnQlAsSUFBSSxDQUFDUSxLQUFyQixFQUEyQlIsSUFBSSxDQUFDUyxLQUFoQyxFQUFzQ1QsSUFBSSxDQUFDVSxLQUEzQyxFQUFpRFYsSUFBSSxDQUFDVyxRQUF0RCxFQUErRFgsSUFBSSxDQUFDWSxRQUFwRSxFQUE2RVYsS0FBN0UsRUFBbUZGLElBQUksQ0FBQ2EsSUFBeEYsRUFBNkYsRUFBN0YsQ0FBYjtBQUNELFlBQU1qQixxR0FBWSxDQUFDQyxnQkFBYixHQUFnQ2lCLFdBQWhDLENBQTRDUixNQUE1QyxDQUFOO0FBQ0MsYUFBT3JCLEdBQUcsQ0FBQzhCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRCxjQUFNLEVBQUU7QUFBVixPQUFyQixDQUFQO0FBQ0MsS0FQRCxDQVFBLE9BQU9FLEtBQVAsRUFBYztBQUNaLGFBQU9oQyxHQUFHLENBQUM4QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJELGNBQU0sRUFBRSxPQURrQjtBQUUxQmYsWUFBSSxFQUFFO0FBQUVrQixhQUFHLEVBQUUsd0JBQVA7QUFBaUNELGVBQUssRUFBRUEsS0FBSyxDQUFDRSxRQUFOO0FBQXhDO0FBRm9CLE9BQXJCLENBQVA7QUFJRDtBQUNGOztBQUNELE1BQUduQyxHQUFHLENBQUNPLE1BQUosS0FBYSxLQUFoQixFQUNBO0FBQ0UsVUFBTUcscURBQUksQ0FBQ1YsR0FBRCxFQUFNQyxHQUFOLENBQVY7O0FBQ0EsUUFDQTtBQUNBLFlBQU1lLElBQUksR0FBR2hCLEdBQUcsQ0FBQ2lCLElBQWpCO0FBQ0EsWUFBTUMsS0FBSyxHQUFDLE1BQU1OLHFHQUFZLENBQUNPLGtCQUFiLEdBQWtDQyxhQUFsQyxDQUFnREosSUFBSSxDQUFDSyxHQUFyRCxDQUFsQjtBQUNBLFlBQU1DLE1BQU0sR0FBQyxJQUFJQyxpSEFBSixDQUFnQlAsSUFBSSxDQUFDUSxLQUFyQixFQUEyQlIsSUFBSSxDQUFDUyxLQUFoQyxFQUFzQ1QsSUFBSSxDQUFDVSxLQUEzQyxFQUFpRFYsSUFBSSxDQUFDVyxRQUF0RCxFQUErRFgsSUFBSSxDQUFDWSxRQUFwRSxFQUE2RVYsS0FBN0UsRUFBbUZGLElBQUksQ0FBQ2EsSUFBeEYsRUFBNkYsRUFBN0YsQ0FBYjtBQUNBLFlBQU1qQixxR0FBWSxDQUFDQyxnQkFBYixHQUFnQ3VCLGNBQWhDLENBQStDZCxNQUEvQyxDQUFOO0FBQ0EsYUFBT3JCLEdBQUcsQ0FBQzhCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRCxjQUFNLEVBQUU7QUFBVixPQUFyQixDQUFQO0FBQ0MsS0FQRCxDQVFBLE9BQU9FLEtBQVAsRUFBYztBQUNaLGFBQU9oQyxHQUFHLENBQUM4QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJELGNBQU0sRUFBRSxPQURrQjtBQUUxQmYsWUFBSSxFQUFFO0FBQUVrQixhQUFHLEVBQUUsMkJBQVA7QUFBb0NELGVBQUssRUFBQ0EsS0FBSyxDQUFDRSxRQUFOO0FBQTFDO0FBRm9CLE9BQXJCLENBQVA7QUFJRDtBQUNGOztBQUNELE1BQUduQyxHQUFHLENBQUNPLE1BQUosS0FBYSxRQUFoQixFQUNBO0FBQ0UsVUFBTUcscURBQUksQ0FBQ1YsR0FBRCxFQUFNQyxHQUFOLENBQVY7QUFDQSxVQUFNZSxJQUFJLEdBQUdoQixHQUFHLENBQUNpQixJQUFqQjs7QUFDQSxRQUNBO0FBRUUsWUFBTUssTUFBTSxHQUFDLElBQUlDLGlIQUFKLENBQWdCUCxJQUFJLENBQUNRLEtBQXJCLEVBQTJCLEVBQTNCLEVBQThCLEVBQTlCLEVBQWlDLENBQWpDLEVBQW1DLENBQW5DLEVBQXFDLElBQXJDLEVBQTBDLENBQTFDLEVBQTRDLEVBQTVDLENBQWI7QUFDRixZQUFNWixxR0FBWSxDQUFDQyxnQkFBYixHQUFnQ3dCLGNBQWhDLENBQStDZixNQUEvQyxDQUFOO0FBQ0EsYUFBT3JCLEdBQUcsQ0FBQzhCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRCxjQUFNLEVBQUU7QUFBVixPQUFyQixDQUFQO0FBQ0MsS0FORCxDQU9BLE9BQU9FLEtBQVAsRUFBYztBQUNaLGFBQU9oQyxHQUFHLENBQUM4QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJELGNBQU0sRUFBRSxPQURrQjtBQUUxQmYsWUFBSSxFQUFFO0FBQUdpQixlQUFLLEVBQUVBLEtBQUssQ0FBQ0UsUUFBTjtBQUFWO0FBRm9CLE9BQXJCLENBQVA7QUFJRDtBQUNGO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FLQTs7QUFDQSxNQUFNekIsSUFBSSxHQUFHWixvRUFBYyxFQUN6QjtBQUNBd0MsMkNBQUksQ0FBQztBQUNIO0FBQ0FDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXNCLFFBQXRCLEVBQStCLFNBQS9CO0FBRk4sQ0FBRCxDQUZxQixDQUEzQjtBQU9lN0IsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNiQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxRjs7Ozs7Ozs7Ozs7QUNBQSxrRyIsImZpbGUiOiJwYWdlcy9hcGkvY2FtcGFpZ24vb3duY2FtcGFpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jYW1wYWlnbi9vd25jYW1wYWlnbi5qc1wiKTtcbiIsIi8vIEhlbHBlciBtZXRob2QgdG8gd2FpdCBmb3IgYSBtaWRkbGV3YXJlIHRvIGV4ZWN1dGUgYmVmb3JlIGNvbnRpbnVpbmdcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4gIHJldHVybiAocmVxLCByZXMpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG59XG4iLCJpbXBvcnQgY29ycyBmcm9tIFwiLi4vY29yc1wiO1xyXG5pbXBvcnQge0ZhY3RvcnlMb2dpY30gZnJvbSBcInJhZGlvdHJhc21pdHRlci9SYWRpb1RyYW5zbWl0dGVyL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCI7XHJcbmltcG9ydCB7T3duQ2FtcGFpZ259IGZyb20gXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L3NoYXJlZC9lbnRpdHlzaGFyZWQvT3duQ2FtcGFpZ25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG5cclxuICBpZihyZXEubWV0aG9kPT09XCJHRVRcIilcclxuICB7XHJcbiAgICBjb25zdCB7IHB0aXRsZSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgIGNvbnN0IGNhbXA9YXdhaXQgRmFjdG9yeUxvZ2ljLmdldExvZ2ljQ2FtcGFpZ24oKS5nZXRDYW1wYWlnbihwdGl0bGUpO1xyXG4gICAgcmVzLnNlbmQoY2FtcCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaWYocmVxLm1ldGhvZD09PVwiUE9TVFwiKVxyXG4gIHtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGdldGFkPWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY0FkdmVydGlzZXIoKS5nZXRBZHZlcnRpc2VyKGRhdGEucnV0KTtcclxuICAgIGNvbnN0IGR0Y2FtcD1uZXcgT3duQ2FtcGFpZ24oZGF0YS50aXRsZSxkYXRhLmRhdGVpLGRhdGEuZGF0ZWYsZGF0YS5kdXJhdGlvbixkYXRhLm1lbnRpb25zLGdldGFkLGRhdGEuY29zdCxbXSk7XHJcbiAgIGF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY0NhbXBhaWduKCkuYWRkQ2FtcGFpZ24oZHRjYW1wKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJTdWNjZXNzXCIgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBzdGF0dXM6IFwiRXJyb3JcIixcclxuICAgICAgICBkYXRhOiB7IG1zZzogXCJDb3VsZCBub3QgYWRkIGNhbXBhaWduXCIsIGVycm9yOiBlcnJvci50b1N0cmluZygpIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIlBVVFwiKVxyXG4gIHtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGdldGFkPWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMb2dpY0FkdmVydGlzZXIoKS5nZXRBZHZlcnRpc2VyKGRhdGEucnV0KTtcclxuICAgIGNvbnN0IGR0Y2FtcD1uZXcgT3duQ2FtcGFpZ24oZGF0YS50aXRsZSxkYXRhLmRhdGVpLGRhdGEuZGF0ZWYsZGF0YS5kdXJhdGlvbixkYXRhLm1lbnRpb25zLGdldGFkLGRhdGEuY29zdCxbXSk7XHJcbiAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNDYW1wYWlnbigpLnVwZGF0ZUNhbXBhaWduKGR0Y2FtcCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyBtc2c6IFwiQ291bGQgbm90IHVwZGF0ZSBjYW1wYWlnblwiLCBlcnJvcjplcnJvci50b1N0cmluZygpIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKHJlcS5tZXRob2Q9PT1cIkRFTEVURVwiKVxyXG4gIHtcclxuICAgIGF3YWl0IGNvcnMocmVxLCByZXMpO1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgdHJ5XHJcbiAgICB7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGR0Y2FtcD1uZXcgT3duQ2FtcGFpZ24oZGF0YS50aXRsZSxcIlwiLFwiXCIsMCwwLG51bGwsMCxbXSk7XHJcbiAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TG9naWNDYW1wYWlnbigpLmRlbGV0ZUNhbXBhaWduKGR0Y2FtcCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiU3VjY2Vzc1wiIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOiBcIkVycm9yXCIsXHJcbiAgICAgICAgZGF0YTogeyAgZXJyb3I6IGVycm9yLnRvU3RyaW5nKCkgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG5cclxuICIsImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vbGliL2luaXQtbWlkZGxld2FyZSdcblxuXG5cbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IGluaXRNaWRkbGV3YXJlKFxuICAvLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuICBDb3JzKHtcbiAgICAvLyBPbmx5IGFsbG93IHJlcXVlc3RzIHdpdGggR0VULCBQT1NULFBVVCxERUxFVEUgYW5kIE9QVElPTlNcbiAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsJ0RFTEVURScsJ09QVElPTlMnXSxcbiAgfSlcbilcbmV4cG9ydCBkZWZhdWx0IGNvcnNcblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L2xvZ2ljL0ZhY3RvcnlMb2dpY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYWRpb3RyYXNtaXR0ZXIvUmFkaW9UcmFuc21pdHRlci9kaXN0L3NoYXJlZC9lbnRpdHlzaGFyZWQvT3duQ2FtcGFpZ25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==