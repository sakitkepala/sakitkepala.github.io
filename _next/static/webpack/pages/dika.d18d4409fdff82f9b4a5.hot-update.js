webpackHotUpdate_N_E("pages/dika",{

/***/ "./components/navigasi.js":
/*!********************************!*\
  !*** ./components/navigasi.js ***!
  \********************************/
/*! exports provided: MenuNavigasi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuNavigasi\", function() { return MenuNavigasi; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_sakitkepala_CommonData_a_dev_sakitkepala_dev_site_dev_sakitkepaladotdev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/MenuNavigasi.module.scss */ \"./styles/MenuNavigasi.module.scss\");\n/* harmony import */ var _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/media/sakitkepala/CommonData/@a/@dev/sakitkepala.dev/site/dev/sakitkepaladotdev/components/navigasi.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar hamburger = {// sembunyi: { display: \"none\" },\n  // tampil: { display: \"block\" },\n};\n\nfunction MenuNavigasi() {\n  _s();\n\n  var layarKecil = useMedia([\"(max-width: 600px)\"], [true], false);\n\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"])(true, false),\n      _useCycle2 = Object(_media_sakitkepala_CommonData_a_dev_sakitkepala_dev_site_dev_sakitkepaladotdev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCycle, 2),\n      toggleHamburger = _useCycle2[0],\n      cycleToggle = _useCycle2[1];\n\n  var isTampilHamburger = layarKecil && toggleHamburger;\n\n  function onClickHamburger() {\n    if (!layarKecil) {\n      return;\n    }\n\n    cycleToggle();\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {\n    // selalu reset toggle waktu mount pertama\n    console.log(\"mount?\");\n    return function () {\n      return console.log(\"unmount?\");\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.navigasi,\n    children: [!layarKecil && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.listMenu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"link\"],\n          children: \"Depan\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/lab\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,\n          children: \"Lab\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/dika\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,\n          children: \"Dika\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.hamburger,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tombolToggle,\n        onClick: onClickHamburger,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          viewBox: \"0 0 100 40\",\n          width: \"30\",\n          height: \"30\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n            width: \"100\",\n            height: \"10\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n            y: \"30\",\n            width: \"70\",\n            height: \"10\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), isTampilHamburger && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.screenMenu,\n      onClick: function onClick() {\n        return cycleToggle();\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          viewBox: \"0 0 24 24\",\n          width: \"24\",\n          height: \"24\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"link\"],\n            children: \"Depan\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/lab\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,\n            children: \"Lab\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/dika\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_MenuNavigasi_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,\n            children: \"Dika\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MenuNavigasi, \"Ha66puHkQrBHPUCJ11H+ZPi1ckc=\", false, function () {\n  return [useMedia, framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useCycle\"]];\n});\n\n_c = MenuNavigasi;\n\nfunction useMedia(queries, values, defaultValue) {\n  _s2();\n\n  var mediaQueryLists = true ? queries.map(function (q) {\n    return window.matchMedia(q);\n  }) : undefined;\n\n  var getValue = function getValue() {\n    var index = mediaQueryLists.findIndex(function (mql) {\n      return mql.matches;\n    });\n    return typeof values[index] !== \"undefined\" ? values[index] : defaultValue;\n  };\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(getValue),\n      _React$useState2 = Object(_media_sakitkepala_CommonData_a_dev_sakitkepala_dev_site_dev_sakitkepaladotdev_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      value = _React$useState2[0],\n      setValue = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {\n    var handler = function handler() {\n      return setValue(getValue);\n    };\n\n    mediaQueryLists.forEach(function (mql) {\n      return mql.addListener(handler);\n    });\n    return function () {\n      return mediaQueryLists.forEach(function (mql) {\n        return mql.removeListener(handler);\n      });\n    };\n  }, []);\n  return value;\n}\n\n_s2(useMedia, \"Rhr99LFzrwN+33aE+tLJ9L1r5sM=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuNavigasi\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2FzaS5qcz81Y2MxIl0sIm5hbWVzIjpbImhhbWJ1cmdlciIsIk1lbnVOYXZpZ2FzaSIsImxheWFyS2VjaWwiLCJ1c2VNZWRpYSIsInVzZUN5Y2xlIiwidG9nZ2xlSGFtYnVyZ2VyIiwiY3ljbGVUb2dnbGUiLCJpc1RhbXBpbEhhbWJ1cmdlciIsIm9uQ2xpY2tIYW1idXJnZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJuYXZpZ2FzaSIsImxpc3RNZW51IiwibGluayIsInRvbWJvbFRvZ2dsZSIsInNjcmVlbk1lbnUiLCJjbG9zZSIsInF1ZXJpZXMiLCJ2YWx1ZXMiLCJkZWZhdWx0VmFsdWUiLCJtZWRpYVF1ZXJ5TGlzdHMiLCJtYXAiLCJxIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImdldFZhbHVlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJtcWwiLCJtYXRjaGVzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImZvckVhY2giLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDaEI7QUFDQTtBQUZnQixDQUFsQjs7QUFLQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQ3RCLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxFQUF5QixDQUFDLElBQUQsQ0FBekIsRUFBaUMsS0FBakMsQ0FBM0I7O0FBRHNCLGtCQUVpQkMsOERBQVEsQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUZ6QjtBQUFBO0FBQUEsTUFFZkMsZUFGZTtBQUFBLE1BRUVDLFdBRkY7O0FBR3RCLE1BQU1DLGlCQUFpQixHQUFHTCxVQUFVLElBQUlHLGVBQXhDOztBQUVBLFdBQVNHLGdCQUFULEdBQTRC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TixDQUFnQixZQUFNO0FBQ3BCLFFBQU0wQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLGFBQU1ELFFBQVEsQ0FBQ1AsUUFBRCxDQUFkO0FBQUEsS0FBaEI7O0FBQ0FMLG1CQUFlLENBQUNjLE9BQWhCLENBQXdCLFVBQUNOLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNPLFdBQUosQ0FBZ0JGLE9BQWhCLENBQVQ7QUFBQSxLQUF4QjtBQUNBLFdBQU87QUFBQSxhQUFNYixlQUFlLENBQUNjLE9BQWhCLENBQXdCLFVBQUNOLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNRLGNBQUosQ0FBbUJILE9BQW5CLENBQVQ7QUFBQSxPQUF4QixDQUFOO0FBQUEsS0FBUDtBQUNELEdBSkQsRUFJRyxFQUpIO0FBTUEsU0FBT0YsS0FBUDtBQUNEOztJQXBCUS9CLFE7O0FBc0JUIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZpZ2FzaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQ3ljbGUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWVudU5hdmlnYXNpLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGhhbWJ1cmdlciA9IHtcbiAgLy8gc2VtYnVueWk6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgLy8gdGFtcGlsOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxufTtcblxuZnVuY3Rpb24gTWVudU5hdmlnYXNpKCkge1xuICBjb25zdCBsYXlhcktlY2lsID0gdXNlTWVkaWEoW1wiKG1heC13aWR0aDogNjAwcHgpXCJdLCBbdHJ1ZV0sIGZhbHNlKTtcbiAgY29uc3QgW3RvZ2dsZUhhbWJ1cmdlciwgY3ljbGVUb2dnbGVdID0gdXNlQ3ljbGUodHJ1ZSwgZmFsc2UpO1xuICBjb25zdCBpc1RhbXBpbEhhbWJ1cmdlciA9IGxheWFyS2VjaWwgJiYgdG9nZ2xlSGFtYnVyZ2VyO1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tIYW1idXJnZXIoKSB7XG4gICAgaWYgKCFsYXlhcktlY2lsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGN5Y2xlVG9nZ2xlKCk7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNlbGFsdSByZXNldCB0b2dnbGUgd2FrdHUgbW91bnQgcGVydGFtYVxuICAgIGNvbnNvbGUubG9nKFwibW91bnQ/XCIpO1xuXG4gICAgcmV0dXJuICgpID0+IGNvbnNvbGUubG9nKFwidW5tb3VudD9cIik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhc2l9PlxuICAgICAgeyFsYXlhcktlY2lsICYmIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0TWVudX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzW1wibGlua1wiXX0+RGVwYW48L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGFiXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5MYWI8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGlrYVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+RGlrYTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oYW1idXJnZXJ9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnRvbWJvbFRvZ2dsZX0gb25DbGljaz17b25DbGlja0hhbWJ1cmdlcn0+XG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCA0MFwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPlxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMFwiPjwvcmVjdD5cbiAgICAgICAgICAgIDxyZWN0IHk9XCIzMFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCIxMFwiPjwvcmVjdD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzVGFtcGlsSGFtYnVyZ2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW5NZW51fSBvbkNsaWNrPXsoKSA9PiBjeWNsZVRvZ2dsZSgpfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfT5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2LjE5MiA2LjM0NEwxMS45NDkgMTAuNTg2IDcuNzA3IDYuMzQ0IDYuMjkzIDcuNzU4IDEwLjUzNSAxMiA2LjI5MyAxNi4yNDIgNy43MDcgMTcuNjU2IDExLjk0OSAxMy40MTQgMTYuMTkyIDE3LjY1NiAxNy42MDYgMTYuMjQyIDEzLjM2NCAxMiAxNy42MDYgNy43NTh6XCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNbXCJsaW5rXCJdfT5EZXBhbjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGFiXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkxhYjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGlrYVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5EaWthPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZU1lZGlhKHF1ZXJpZXMsIHZhbHVlcywgZGVmYXVsdFZhbHVlKSB7XG4gIGNvbnN0IG1lZGlhUXVlcnlMaXN0cyA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyBxdWVyaWVzLm1hcCgocSkgPT4gd2luZG93Lm1hdGNoTWVkaWEocSkpXG4gICAgICA6IFtdO1xuXG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbWVkaWFRdWVyeUxpc3RzLmZpbmRJbmRleCgobXFsKSA9PiBtcWwubWF0Y2hlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZXNbaW5kZXhdICE9PSBcInVuZGVmaW5lZFwiID8gdmFsdWVzW2luZGV4XSA6IGRlZmF1bHRWYWx1ZTtcbiAgfTtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGdldFZhbHVlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBzZXRWYWx1ZShnZXRWYWx1ZSk7XG4gICAgbWVkaWFRdWVyeUxpc3RzLmZvckVhY2goKG1xbCkgPT4gbXFsLmFkZExpc3RlbmVyKGhhbmRsZXIpKTtcbiAgICByZXR1cm4gKCkgPT4gbWVkaWFRdWVyeUxpc3RzLmZvckVhY2goKG1xbCkgPT4gbXFsLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IHsgTWVudU5hdmlnYXNpIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigasi.js\n");

/***/ })

})