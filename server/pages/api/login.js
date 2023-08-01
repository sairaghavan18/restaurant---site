"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        if (username === \"admin\" && password === \"username\") {\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", process.env.TOKEN, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json(\"Succesfull\");\n        } else {\n            res.status(400).json(\"Wrong Credentials!\");\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBRTNCLEtBQUssQ0FBQ0MsT0FBTyxJQUFJQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQzdCLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxHQUFFQyxRQUFRLEVBQUMsQ0FBQyxHQUFHSixHQUFHLENBQUNLLElBQUk7UUFDdkMsRUFBRSxFQUNBRixRQUFRLEtBQUssQ0FBTyxVQUNwQkMsUUFBUSxLQUFLLENBQVUsV0FDdkIsQ0FBQztZQUNESCxHQUFHLENBQUNLLFNBQVMsQ0FDWCxDQUFZLGFBQ1pSLHVEQUFnQixDQUFDLENBQU8sUUFBRVUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUM1Q0MsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUNmQyxRQUFRLEVBQUUsQ0FBUTtnQkFDbEJDLElBQUksRUFBRSxDQUFHO1lBQ1gsQ0FBQztZQUVIWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFZO1FBQ25DLENBQUMsTUFBTSxDQUFDO1lBQ05kLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQW9CO1FBQzNDLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlaEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xuXG5jb25zdCBoYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICBpZiAoXG4gICAgICB1c2VybmFtZSA9PT0gXCJhZG1pblwiICYmXG4gICAgICBwYXNzd29yZCA9PT0gXCJ1c2VybmFtZVwiXG4gICAgKSB7XG4gICAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgICBcIlNldC1Db29raWVcIixcbiAgICAgICAgY29va2llLnNlcmlhbGl6ZShcInRva2VuXCIsIHByb2Nlc3MuZW52LlRPS0VOLCB7XG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxuICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwiU3VjY2VzZnVsbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oXCJXcm9uZyBDcmVkZW50aWFscyFcIik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImNvb2tpZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTiIsIm1heEFnZSIsInNhbWVTaXRlIiwicGF0aCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();