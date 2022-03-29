"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/scholarship",{

/***/ "./components/header/index.jsx":
/*!*************************************!*\
  !*** ./components/header/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ \"./components/header/icon.jsx\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\t\\t\\tbackground-color: white;\\n\\t\\t\\tbox-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);\\n\\t\\t\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\theight: 90px;\\n\\tdisplay: flex;\\n\\tpadding: 0 40px;\\n\\tjustify-content: space-between;\\n\\t\",\n        \"\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\tdisplay: flex;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\theight: 100%;\\n\\tfont-weight: 500;\\n\\tfont-size: 14px;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tcolor: #787878;\\n\\tmargin-left: 18px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].header(_templateObject1(), function(props) {\n    return props.whiteBg && (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(_templateObject());\n});\n_c = HeaderStyled;\nvar UserIconAndAuthStatus = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c1 = UserIconAndAuthStatus;\nvar AuthStatus = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a(_templateObject3());\n_c2 = AuthStatus;\nfunction Header(param) {\n    var whiteBg = param.whiteBg;\n    _s();\n    var authState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.AuthContext).authState;\n    console.log(authState);\n    var logInOrOut = (authState === null || authState === void 0 ? void 0 : authState.data) ? \"Log out\" : \"Log in\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyled, {\n        whiteBg: whiteBg,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vargevorgyan/Desktop/bold-eng-frontend/client/components/header/index.jsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserIconAndAuthStatus, {\n                children: [\n                    (authState === null || authState === void 0 ? void 0 : authState.data) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/auth/userIcon.svg\",\n                        alt: \"\",\n                        width: 36,\n                        height: 36\n                    }, void 0, false, {\n                        fileName: \"/Users/vargevorgyan/Desktop/bold-eng-frontend/client/components/header/index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/auth\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthStatus, {\n                            children: logInOrOut\n                        }, void 0, false, {\n                            fileName: \"/Users/vargevorgyan/Desktop/bold-eng-frontend/client/components/header/index.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vargevorgyan/Desktop/bold-eng-frontend/client/components/header/index.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vargevorgyan/Desktop/bold-eng-frontend/client/components/header/index.jsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vargevorgyan/Desktop/bold-eng-frontend/client/components/header/index.jsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, this);\n}\n_s(Header, \"Ug60Z8/ZAi6ZPSFdhTQL1oAPoE8=\");\n_c3 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"HeaderStyled\");\n$RefreshReg$(_c1, \"UserIconAndAuthStatus\");\n$RefreshReg$(_c2, \"AuthStatus\");\n$RefreshReg$(_c3, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBY00sQ0FHSjs7Ozs7Ozs7O1FBVmlDLENBS2xDO1FBS0csQ0FDSjs7Ozs7Ozs7O1FBQ3lDLENBRXpDOzs7Ozs7Ozs7UUFFNEIsQ0FRNUI7Ozs7Ozs7O0FBL0I4QjtBQUNGO0FBQ1c7QUFDTTtBQUNKO0FBQ2hCOztBQUV6QixHQUFLLENBQUNRLFlBQVksR0FBR0osZ0VBQWEscUJBSy9CTSxRQUFRLENBQVJBLEtBQUs7V0FDTkEsS0FBSyxDQUFDQyxPQUFPLElBQ2JOLHNEQUFHOztLQVBDRyxZQUFZO0FBWWxCLEdBQUssQ0FBQ0kscUJBQXFCLEdBQUdSLDZEQUFVO01BQWxDUSxxQkFBcUI7QUFJM0IsR0FBSyxDQUFDRSxVQUFVLEdBQUdWLDJEQUFRO01BQXJCVSxVQUFVO1NBVVBFLE1BQU0sQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFYTCxPQUFPLEdBQVIsS0FBUyxDQUFSQSxPQUFPOztJQUN2QixHQUFLLENBQUVNLFNBQVMsR0FBSWQsaURBQVUsQ0FBQ0csaURBQVcsRUFBbkNXLFNBQVM7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixTQUFTO0lBQ3JCLEdBQUssQ0FBQ0csVUFBVSxJQUFHSCxTQUFTLGFBQVRBLFNBQVMsY0FBVEEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLFNBQVMsQ0FBRUksSUFBSSxJQUFHLENBQVMsV0FBRyxDQUFRO0lBQ3pELE1BQU0sNkVBQ0piLFlBQVk7UUFBQ0csT0FBTyxFQUFFQSxPQUFPOzt3RkFDNUJKLDZDQUFJOzs7Ozt3RkFDSksscUJBQXFCOztxQkFDcEJLLFNBQVMsYUFBVEEsU0FBUyxjQUFUQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsU0FBUyxDQUFFSSxJQUFJLGlGQUFLckIsbURBQUs7d0JBQUNzQixHQUFHLEVBQUMsQ0FBb0I7d0JBQUNDLEdBQUcsRUFBQyxDQUFFO3dCQUFDQyxLQUFLLEVBQUUsRUFBRTt3QkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OztnR0FDL0V4QixrREFBSTt3QkFBQ3lCLElBQUksRUFBQyxDQUFPO3dCQUFDQyxRQUFROzhHQUN6QmIsVUFBVTtzQ0FBRU0sVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUIsQ0FBQztHQWZRSixNQUFNO01BQU5BLE1BQU07QUFpQmYsK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanN4PzIyNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQge0F1dGhDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dFwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9pY29uXCJcblxuY29uc3QgSGVhZGVyU3R5bGVkID0gc3R5bGVkLmhlYWRlcmBcblx0aGVpZ2h0OiA5MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRwYWRkaW5nOiAwIDQwcHg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0JHtwcm9wcyA9PlxuXHRcdHByb3BzLndoaXRlQmcgJiZcblx0XHRjc3NgXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuXHRcdGB9XG5gXG5jb25zdCBVc2VySWNvbkFuZEF1dGhTdGF0dXMgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuYFxuXG5jb25zdCBBdXRoU3RhdHVzID0gc3R5bGVkLmFgXG5cdGhlaWdodDogMTAwJTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb2xvcjogIzc4Nzg3ODtcblx0bWFyZ2luLWxlZnQ6IDE4cHg7XG5gXG5cbmZ1bmN0aW9uIEhlYWRlcih7d2hpdGVCZ30pIHtcblx0Y29uc3Qge2F1dGhTdGF0ZX0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuXHRjb25zb2xlLmxvZyhhdXRoU3RhdGUpXG5cdGNvbnN0IGxvZ0luT3JPdXQgPSBhdXRoU3RhdGU/LmRhdGEgPyBcIkxvZyBvdXRcIiA6IFwiTG9nIGluXCJcblx0cmV0dXJuIChcblx0XHQ8SGVhZGVyU3R5bGVkIHdoaXRlQmc9e3doaXRlQmd9PlxuXHRcdFx0PEljb24gLz5cblx0XHRcdDxVc2VySWNvbkFuZEF1dGhTdGF0dXM+XG5cdFx0XHRcdHthdXRoU3RhdGU/LmRhdGEgJiYgPEltYWdlIHNyYz1cIi9hdXRoL3VzZXJJY29uLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPXszNn0gaGVpZ2h0PXszNn0gLz59XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvYXV0aFwiIHBhc3NIcmVmPlxuXHRcdFx0XHRcdDxBdXRoU3RhdHVzPntsb2dJbk9yT3V0fTwvQXV0aFN0YXR1cz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0PC9Vc2VySWNvbkFuZEF1dGhTdGF0dXM+XG5cdFx0PC9IZWFkZXJTdHlsZWQ+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJ1c2VDb250ZXh0Iiwic3R5bGVkIiwiY3NzIiwiQXV0aENvbnRleHQiLCJJY29uIiwiSGVhZGVyU3R5bGVkIiwiaGVhZGVyIiwicHJvcHMiLCJ3aGl0ZUJnIiwiVXNlckljb25BbmRBdXRoU3RhdHVzIiwiZGl2IiwiQXV0aFN0YXR1cyIsImEiLCJIZWFkZXIiLCJhdXRoU3RhdGUiLCJjb25zb2xlIiwibG9nIiwibG9nSW5Pck91dCIsImRhdGEiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImhyZWYiLCJwYXNzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/index.jsx\n");

/***/ })

});