/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./components/cookies.js":
/*!*******************************!*\
  !*** ./components/cookies.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IS_USE_COOKIE_KEY\": function() { return /* binding */ IS_USE_COOKIE_KEY; },\n/* harmony export */   \"Cookies\": function() { return /* binding */ Cookies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/paulameng/Documents/PYology/paula-iomesh-demo/components/cookies.js\";\n\n\nconst IS_USE_COOKIE_KEY = \"IS_USE_COOKIE_KEY\";\nconst Cookies = () => {\n  const isUseCookie =  false ? 0 : null;\n  const {\n    0: isVisible,\n    1: setIsVisible\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    if (isUseCookie === null) {\n      setIsVisible(true);\n    }\n  }, [isUseCookie]);\n\n  const handleCookieAuthorization = accept => {\n    if (typeof gtag !== \"undefined\") {\n      // eslint-disable-next-line no-undef\n      gtag(\"consent\", \"default\", {\n        ad_storage: accept ? \"granted\" : \"denied\",\n        analytics_storage: accept ? \"granted\" : \"denied\"\n      });\n    }\n\n    setIsVisible(false);\n    localStorage.setItem(IS_USE_COOKIE_KEY, `${accept}`);\n  };\n\n  return isVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"fixed rounded-2xl bg-black bg-opacity-90 hover:bg-opacity-100 text-white right-2 bottom-2 w-80 p-6 hover:shadow-2xl\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"text-lg font-bold text-gray-400 mb-2\",\n      children: \"This Website Uses Cookies\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-sm mb-4\",\n      children: [\"We use cookies to improve your experience and analyze web usage. For more information, please visit the cookies section of\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/privacy\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"link\",\n          children: \"IOMesh Privacy Policy\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, undefined), \".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"space-x-4 text-right\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => handleCookieAuthorization(true),\n        className: \"rounded-lg bg-iopurple hover:bg-iopurple-dark px-3 py-1 font-bold\",\n        children: \"Accept\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => handleCookieAuthorization(false),\n        className: \"text-sm text-gray-500 hover:text-white\",\n        children: \"Reject\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 7\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2Nvb2tpZXMuanM/OGQ5ZCJdLCJuYW1lcyI6WyJJU19VU0VfQ09PS0lFX0tFWSIsIkNvb2tpZXMiLCJpc1VzZUNvb2tpZSIsIndpbmRvdyIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlQ29va2llQXV0aG9yaXphdGlvbiIsImFjY2VwdCIsImd0YWciLCJhZF9zdG9yYWdlIiwiYW5hbHl0aWNzX3N0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQzNCLFFBQU1DLFdBQVcsR0FDZixTQUNJQyxDQURKLEdBRUksSUFITjtBQUlBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlMLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4Qkcsa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDSCxXQUFELENBSk0sQ0FBVDs7QUFNQSxRQUFNTSx5QkFBeUIsR0FBSUMsTUFBRCxJQUFZO0FBQzVDLFFBQUksT0FBT0MsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQjtBQUNBQSxVQUFJLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUI7QUFDekJDLGtCQUFVLEVBQUVGLE1BQU0sR0FBRyxTQUFILEdBQWUsUUFEUjtBQUV6QkcseUJBQWlCLEVBQUVILE1BQU0sR0FBRyxTQUFILEdBQWU7QUFGZixPQUF2QixDQUFKO0FBSUQ7O0FBQ0RKLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FRLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUJkLGlCQUFyQixFQUF5QyxHQUFFUyxNQUFPLEVBQWxEO0FBQ0QsR0FWRDs7QUFZQSxTQUNFTCxTQUFTLGlCQUNQO0FBQUssYUFBUyxFQUFDLHFIQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsK0lBRXdELEdBRnhELGVBR0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFZRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDhCQUNFO0FBQ0UsZUFBTyxFQUFFLE1BQU1JLHlCQUF5QixDQUFDLElBQUQsQ0FEMUM7QUFFRSxpQkFBUyxFQUFDLG1FQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFDRSxlQUFPLEVBQUUsTUFBTUEseUJBQXlCLENBQUMsS0FBRCxDQUQxQztBQUVFLGlCQUFTLEVBQUMsd0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBK0JELENBeERNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb29raWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IElTX1VTRV9DT09LSUVfS0VZID0gXCJJU19VU0VfQ09PS0lFX0tFWVwiO1xuXG5leHBvcnQgY29uc3QgQ29va2llcyA9ICgpID0+IHtcbiAgY29uc3QgaXNVc2VDb29raWUgPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKElTX1VTRV9DT09LSUVfS0VZKVxuICAgICAgOiBudWxsO1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVXNlQ29va2llID09PSBudWxsKSB7XG4gICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XG4gICAgfVxuICB9LCBbaXNVc2VDb29raWVdKTtcblxuICBjb25zdCBoYW5kbGVDb29raWVBdXRob3JpemF0aW9uID0gKGFjY2VwdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZ3RhZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBndGFnKFwiY29uc2VudFwiLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBhZF9zdG9yYWdlOiBhY2NlcHQgPyBcImdyYW50ZWRcIiA6IFwiZGVuaWVkXCIsXG4gICAgICAgIGFuYWx5dGljc19zdG9yYWdlOiBhY2NlcHQgPyBcImdyYW50ZWRcIiA6IFwiZGVuaWVkXCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShJU19VU0VfQ09PS0lFX0tFWSwgYCR7YWNjZXB0fWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgaXNWaXNpYmxlICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcm91bmRlZC0yeGwgYmctYmxhY2sgYmctb3BhY2l0eS05MCBob3ZlcjpiZy1vcGFjaXR5LTEwMCB0ZXh0LXdoaXRlIHJpZ2h0LTIgYm90dG9tLTIgdy04MCBwLTYgaG92ZXI6c2hhZG93LTJ4bFwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBtYi0yXCI+XG4gICAgICAgICAgVGhpcyBXZWJzaXRlIFVzZXMgQ29va2llc1xuICAgICAgICA8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbWItNFwiPlxuICAgICAgICAgIFdlIHVzZSBjb29raWVzIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlIGFuZCBhbmFseXplIHdlYiB1c2FnZS4gRm9yXG4gICAgICAgICAgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpc2l0IHRoZSBjb29raWVzIHNlY3Rpb24gb2Z7XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcml2YWN5XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+SU9NZXNoIFByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29va2llQXV0aG9yaXphdGlvbih0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctaW9wdXJwbGUgaG92ZXI6YmctaW9wdXJwbGUtZGFyayBweC0zIHB5LTEgZm9udC1ib2xkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBY2NlcHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb29raWVBdXRob3JpemF0aW9uKGZhbHNlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWplY3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cookies.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cookies */ \"./components/cookies.js\");\n\nvar _jsxFileName = \"/Users/paulameng/Documents/PYology/paula-iomesh-demo/pages/_document.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst GA_MEASUREMENT_ID = \"G-VLRD9FE1LH\";\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n  static async getInitialProps(ctx) {\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n    return _objectSpread({}, initialProps);\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n          async: true,\n          src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n          dangerouslySetInnerHTML: {\n            __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n\n            const isUseCookie =\n              typeof window !== \"undefined\"\n                ? window.localStorage.getItem('${_components_cookies__WEBPACK_IMPORTED_MODULE_3__.IS_USE_COOKIE_KEY}')\n                : null;\n            const consent = isUseCookie === \"true\" ? \"granted\" : \"denied\";\n\n            gtag('consent', 'default', {\n              'ad_storage': consent,\n              'analytics_storage': consent\n            });\n\n            gtag('js', new Date());\n            gtag('config', '${GA_MEASUREMENT_ID}');\n        `\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDocument);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fZG9jdW1lbnQuanM/ZTcwZCJdLCJuYW1lcyI6WyJHQV9NRUFTVVJFTUVOVF9JRCIsIk15RG9jdW1lbnQiLCJEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImluaXRpYWxQcm9wcyIsInJlbmRlciIsIl9faHRtbCIsIklTX1VTRV9DT09LSUVfS0VZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGlCQUFpQixHQUFHLGNBQTFCOztBQUVBLE1BQU1DLFVBQU4sU0FBeUJDLHNEQUF6QixDQUFrQztBQUNoQyxlQUFhQyxlQUFiLENBQTZCQyxHQUE3QixFQUFrQztBQUNoQyxVQUFNQyxZQUFZLEdBQUcsTUFBTUgsb0VBQUEsQ0FBeUJFLEdBQXpCLENBQTNCO0FBQ0EsNkJBQVlDLFlBQVo7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOERBQUMsK0NBQUQ7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBLGdDQUNFO0FBQ0UsZUFBSyxNQURQO0FBRUUsYUFBRyxFQUFHLCtDQUE4Q04saUJBQWtCO0FBRnhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRTtBQUNFLGlDQUF1QixFQUFFO0FBQ3ZCTyxrQkFBTSxFQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaURDLGtFQUFrQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEJSLGlCQUFrQjtBQUNoRDtBQWxCcUM7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQTZCRTtBQUFBLGdDQUNFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQW9DRDs7QUEzQytCOztBQThDbEMsK0RBQWVDLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgSHRtbCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJU19VU0VfQ09PS0lFX0tFWSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Nvb2tpZXNcIjtcblxuY29uc3QgR0FfTUVBU1VSRU1FTlRfSUQgPSBcIkctVkxSRDlGRTFMSFwiO1xuXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIHJldHVybiB7IC4uLmluaXRpYWxQcm9wcyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtHQV9NRUFTVVJFTUVOVF9JRH1gfVxuICAgICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuXG4gICAgICAgICAgICBjb25zdCBpc1VzZUNvb2tpZSA9XG4gICAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnJHtJU19VU0VfQ09PS0lFX0tFWX0nKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnNlbnQgPSBpc1VzZUNvb2tpZSA9PT0gXCJ0cnVlXCIgPyBcImdyYW50ZWRcIiA6IFwiZGVuaWVkXCI7XG5cbiAgICAgICAgICAgIGd0YWcoJ2NvbnNlbnQnLCAnZGVmYXVsdCcsIHtcbiAgICAgICAgICAgICAgJ2FkX3N0b3JhZ2UnOiBjb25zZW50LFxuICAgICAgICAgICAgICAnYW5hbHl0aWNzX3N0b3JhZ2UnOiBjb25zZW50XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke0dBX01FQVNVUkVNRU5UX0lEfScpO1xuICAgICAgICBgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_document.js"); });
module.exports = __webpack_exports__;

})();