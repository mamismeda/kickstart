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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignShow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignShow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignShow);\n    function CampaignShow() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, CampaignShow);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(CampaignShow, [\n        {\n            key: \"renderCards\",\n            value: function renderCards() {\n                var _props = this.props, balance = _props.balance, manager = _props.manager, minimumContribution = _props.minimumContribution, requestsCount = _props.requestsCount, approversCount = _props.approversCount;\n                var items = [\n                    {\n                        header: manager,\n                        meta: \"Addres of Manager\",\n                        description: \"The Manager created the campaign!\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    },\n                    {\n                        header: minimumContribution,\n                        meta: \"Minimum Contribution (wei)\",\n                        description: \"You must contribute at least this much wei to become an approver\"\n                    },\n                    {\n                        header: requestsCount,\n                        meta: \"Number of Requests\",\n                        description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n                    },\n                    {\n                        header: approversCount,\n                        meta: \"Number of Approvvers\",\n                        description: \"Number of people who have already donated to this campaign\"\n                    },\n                    {\n                        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.fromWei(balance, \"ether\"),\n                        meta: \"Campaign Balance (ether)\",\n                        description: \"The balance is how much money this campaign has left spend\"\n                    }, \n                ];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 65,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Campaign Show\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Column, {\n                                children: this.renderCards()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(function() {\n                    var campaign, summary;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.query.address);\n                                return [\n                                    4,\n                                    campaign.methods.getSummary().call()\n                                ];\n                            case 1:\n                                summary = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        minimumContribution: summary[0],\n                                        balance: summary[1],\n                                        requestsCount: summary[2],\n                                        approversCount: summary[3],\n                                        manager: summary[4]\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return CampaignShow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztxQ0FDcEI7a0NBQUM7OztnQkFDSixDQUFDO2FBQUE7OztXQWJHdEIsWUFBWTtDQXdFakIsQ0F4RTBCUCw0Q0FBUyxDQXdFbkM7QUFFRCwrREFBZU8sWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2IwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XHJcblxyXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcblxyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcclxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYXJkcygpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYmFsYW5jZSxcclxuICAgICAgbWFuYWdlcixcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgcmVxdWVzdHNDb3VudCxcclxuICAgICAgYXBwcm92ZXJzQ291bnQsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBtZXRhOiBcIkFkZHJlcyBvZiBNYW5hZ2VyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIE1hbmFnZXIgY3JlYXRlZCB0aGUgY2FtcGFpZ24hXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92dmVyc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxyXG4gICAgICAgIG1ldGE6IFwiQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgc3BlbmRcIixcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8Q29udHJpYnV0ZUZvcm0gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtcGFpZ25TaG93IiwicmVuZGVyQ2FyZHMiLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJHcm91cCIsInJlbmRlciIsImgzIiwiQ29sdW1uIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ24iLCJzdW1tYXJ5IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n"));

/***/ })

});