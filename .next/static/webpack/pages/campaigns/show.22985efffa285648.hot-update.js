"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignShow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignShow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CampaignShow);\n    function CampaignShow() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, CampaignShow);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignShow, [\n        {\n            key: \"renderCards\",\n            value: function renderCards() {\n                var _props = this.props, balance = _props.balance, manager = _props.manager, minimumContribution = _props.minimumContribution, requestsCount = _props.requestsCount, approversCount = _props.approversCount;\n                var items = [\n                    {\n                        header: manager,\n                        meta: \"Addres of Manager\",\n                        description: \"The Manager created the campaign!\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    },\n                    {\n                        header: minimumContribution,\n                        meta: \"Minimum Contribution (wei)\",\n                        description: \"You must contribute at least this much wei to become an approver\"\n                    },\n                    {\n                        header: requestsCount,\n                        meta: \"Number of Requests\",\n                        description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n                    },\n                    {\n                        header: approversCount,\n                        meta: \"Number of Approvvers\",\n                        descr: descr\n                    }, \n                ];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 56,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Campaign Show\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this),\n                        this.renderCards()\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n                    var campaign, summary;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.query.address);\n                                return [\n                                    4,\n                                    campaign.methods.getSummary().call()\n                                ];\n                            case 1:\n                                summary = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        minimumContribution: summary[0],\n                                        balance: summary[1],\n                                        requestsCount: summary[2],\n                                        approversCount: summary[3],\n                                        manager: summary[4]\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return CampaignShow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXlDO0FBQ0E7QUFDSTtBQUNFO0FBRS9DLGdCQUFrQixpQkErRGpCOzs4RUEvREtLLFlBQVk7K0ZBQVpBLFlBQVk7YUFBWkEsWUFBWTtnR0FBWkEsWUFBWTs7O2tGQUFaQSxZQUFZOztZQWVoQkMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFNSSxNQUFVLEdBQVYsSUFBSSxDQUFDQyxLQUFLLEVBTFpDLE9BQU8sR0FLTCxNQUFVLENBTFpBLE9BQU8sRUFDUEMsT0FBTyxHQUlMLE1BQVUsQ0FKWkEsT0FBTyxFQUNQQyxtQkFBbUIsR0FHakIsTUFBVSxDQUhaQSxtQkFBbUIsRUFDbkJDLGFBQWEsR0FFWCxNQUFVLENBRlpBLGFBQWEsRUFDYkMsY0FBYyxHQUNaLE1BQVUsQ0FEWkEsY0FBYztnQkFHaEIsSUFBTUMsS0FBSyxHQUFHO29CQUNaO3dCQUNFQyxNQUFNLEVBQUVMLE9BQU87d0JBQ2ZNLElBQUksRUFBRSxtQkFBbUI7d0JBQ3pCQyxXQUFXLEVBQUUsbUNBQW1DO3dCQUNoREMsS0FBSyxFQUFFOzRCQUFFQyxZQUFZLEVBQUUsWUFBWTt5QkFBRTtxQkFDdEM7b0JBQ0Q7d0JBQ0VKLE1BQU0sRUFBRUosbUJBQW1CO3dCQUMzQkssSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENDLFdBQVcsRUFDVCxrRUFBa0U7cUJBQ3JFO29CQUNEO3dCQUNFRixNQUFNLEVBQUVILGFBQWE7d0JBQ3JCSSxJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQkMsV0FBVyxFQUNULDZGQUE2RjtxQkFDaEc7b0JBQ0Q7d0JBQ0VGLE1BQU0sRUFBRUYsY0FBYzt3QkFDdEJHLElBQUksRUFBRSxzQkFBc0I7d0JBQzVCSSxLQUFLLEVBQUxBLEtBQUs7cUJBQ047aUJBQ0Y7Z0JBRUQscUJBQU8sOERBQUNqQix5REFBVTtvQkFBQ1csS0FBSyxFQUFFQSxLQUFLOzs7Ozt3QkFBSSxDQUFDO1lBQ3RDLENBQUM7OztZQUVEUSxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxxQkFDRSw4REFBQ2xCLDBEQUFNOztzQ0FDTCw4REFBQ21CLElBQUU7c0NBQUMsZUFBYTs7Ozs7Z0NBQUs7d0JBQ3JCLElBQUksQ0FBQ2hCLFdBQVcsRUFBRTs7Ozs7O3dCQUNaLENBQ1Q7WUFDSixDQUFDOzs7O1lBM0RZaUIsR0FBZSxFQUFmQSxpQkFBZTttQkFBNUIsU0FBYUEsZUFBZSxDQUFDaEIsS0FBSzt1QkFBbEMsK0ZBQW9DO3dCQUM1QmlCLFFBQVEsRUFFUkMsT0FBTzs7OztnQ0FGUEQsUUFBUSxHQUFHcEIsOERBQVEsQ0FBQ0csS0FBSyxDQUFDbUIsS0FBSyxDQUFDQyxPQUFPLENBQUMsQ0FBQztnQ0FFL0I7O29DQUFNSCxRQUFRLENBQUNJLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFLENBQUNDLElBQUksRUFBRTtrQ0FBQTs7Z0NBQXBETCxPQUFPLEdBQUcsYUFBMEM7Z0NBRTFEOztvQ0FBTzt3Q0FDTGYsbUJBQW1CLEVBQUVlLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQy9CakIsT0FBTyxFQUFFaUIsT0FBTyxDQUFDLENBQUMsQ0FBQzt3Q0FDbkJkLGFBQWEsRUFBRWMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3Q0FDekJiLGNBQWMsRUFBRWEsT0FBTyxDQUFDLENBQUMsQ0FBQzt3Q0FDMUJoQixPQUFPLEVBQUVnQixPQUFPLENBQUMsQ0FBQyxDQUFDO3FDQUNwQjtrQ0FBQzs7O2dCQUNKLENBQUM7YUFBQTs7O1dBYkdwQixZQUFZO0NBNkRqQixDQTdEMEJKLDRDQUFTLENBNkRuQztBQUVELCtEQUFlSSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YjBkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcclxuICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FyZHMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGJhbGFuY2UsXHJcbiAgICAgIG1hbmFnZXIsXHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIHJlcXVlc3RzQ291bnQsXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgbWV0YTogXCJBZGRyZXMgb2YgTWFuYWdlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBNYW5hZ2VyIGNyZWF0ZWQgdGhlIGNhbXBhaWduIVwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcclxuICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBSZXF1ZXN0c1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgQXBwcm92dmVycycsXHJcbiAgICAgICAgZGVzY3JcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhbXBhaWduU2hvdyIsInJlbmRlckNhcmRzIiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZGVzY3IiLCJHcm91cCIsInJlbmRlciIsImgzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ24iLCJzdW1tYXJ5IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n"));

/***/ })

});