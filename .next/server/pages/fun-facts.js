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
exports.id = "pages/fun-facts";
exports.ids = ["pages/fun-facts"];
exports.modules = {

/***/ "./pages/fun-facts.tsx":
/*!*****************************!*\
  !*** ./pages/fun-facts.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HelpPage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticProps = async ()=>{\n    try {\n        const res = await fetch(`${process.env.APP_ENDPOINT_URL}/api/ping`);\n        const data = await res.json();\n        return {\n            props: {\n                data\n            }\n        };\n    } catch (error) {\n        return {\n            props: {\n                data: []\n            }\n        };\n    }\n};\nfunction HelpPage({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"Fun facts about scotland   \",\n                JSON.stringify(data)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hibrid/AiProjects/trivia-front/pages/fun-facts.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hibrid/AiProjects/trivia-front/pages/fun-facts.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mdW4tZmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUFPLE1BQU1BLGlCQUFpQixVQUFZO0lBQ3RDLElBQUk7UUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUNsRSxNQUFNQyxPQUFRLE1BQU1MLElBQUlNLElBQUk7UUFDNUIsT0FBTztZQUNIQyxPQUFPO2dCQUNIRjtZQUNKO1FBQ0o7SUFDSixFQUFFLE9BQU9HLE9BQU87UUFDWixPQUFPO1lBQ0hELE9BQU87Z0JBQ0hGLE1BQUssRUFBRTtZQUNYO1FBQ0o7SUFDSjtBQUNKLEVBQUU7QUFNYSxTQUFTSSxTQUFXLEVBQUNKLEtBQUksRUFBTyxFQUFFO0lBQzdDLHFCQUNJLDhEQUFDSztrQkFDRyw0RUFBQ0M7O2dCQUFHO2dCQUE0QkMsS0FBS0MsU0FBUyxDQUFDUjs7Ozs7Ozs7Ozs7O0FBRzNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cml2YWwtZnJvbnQvLi9wYWdlcy9mdW4tZmFjdHMudHN4PzI5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBQX0VORFBPSU5UX1VSTH0vYXBpL3BpbmdgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXMuanNvbigpKSBhcyBzdHJpbmc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGRhdGE6W11cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBkYXRhOiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbHBQYWdlICAoe2RhdGF9OlByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5GdW4gZmFjdHMgYWJvdXQgc2NvdGxhbmQgICB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQUF9FTkRQT0lOVF9VUkwiLCJkYXRhIiwianNvbiIsInByb3BzIiwiZXJyb3IiLCJIZWxwUGFnZSIsImRpdiIsImgxIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/fun-facts.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/fun-facts.tsx"));
module.exports = __webpack_exports__;

})();