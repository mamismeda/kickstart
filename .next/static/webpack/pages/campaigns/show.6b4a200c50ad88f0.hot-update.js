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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignShow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CampaignShow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignShow);\n    function CampaignShow() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, CampaignShow);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(CampaignShow, [\n        {\n            key: \"renderCards\",\n            value: function renderCards() {\n                var _props = this.props, balance = _props.balance, manager = _props.manager, minimumContribution = _props.minimumContribution, requestsCount = _props.requestsCount, approversCount = _props.approversCount;\n                var items = [\n                    {\n                        header: manager,\n                        meta: \"Addres of Manager\",\n                        description: \"The Manager created the campaign!\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    },\n                    {\n                        header: minimumContribution,\n                        meta: \"Minimum Contribution (wei)\",\n                        description: \"You must contribute at least this much wei to become an approver\"\n                    },\n                    {\n                        header: requestsCount,\n                        meta: \"Number of Requests\",\n                        description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n                    },\n                    {\n                        header: approversCount,\n                        meta: \"Number of Approvvers\",\n                        description: \"Number of people who have already donated to this campaign\"\n                    },\n                    {}\n                ];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 60,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Campaign Show\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this),\n                        this.renderCards()\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n                    var campaign, summary;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.query.address);\n                                return [\n                                    4,\n                                    campaign.methods.getSummary().call()\n                                ];\n                            case 1:\n                                summary = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        minimumContribution: summary[0],\n                                        balance: summary[1],\n                                        requestsCount: summary[2],\n                                        approversCount: summary[3],\n                                        manager: summary[4]\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return CampaignShow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQUF5QztBQUNBO0FBQ0k7QUFDRTtBQUNSO0FBRXZDLGdCQUFrQixpQkFrRWpCOzs4RUFsRUtNLFlBQVk7K0ZBQVpBLFlBQVk7YUFBWkEsWUFBWTtnR0FBWkEsWUFBWTs7O2tGQUFaQSxZQUFZOztZQWVoQkMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFNSSxNQUFVLEdBQVYsSUFBSSxDQUFDQyxLQUFLLEVBTFpDLE9BQU8sR0FLTCxNQUFVLENBTFpBLE9BQU8sRUFDUEMsT0FBTyxHQUlMLE1BQVUsQ0FKWkEsT0FBTyxFQUNQQyxtQkFBbUIsR0FHakIsTUFBVSxDQUhaQSxtQkFBbUIsRUFDbkJDLGFBQWEsR0FFWCxNQUFVLENBRlpBLGFBQWEsRUFDYkMsY0FBYyxHQUNaLE1BQVUsQ0FEWkEsY0FBYztnQkFHaEIsSUFBTUMsS0FBSyxHQUFHO29CQUNaO3dCQUNFQyxNQUFNLEVBQUVMLE9BQU87d0JBQ2ZNLElBQUksRUFBRSxtQkFBbUI7d0JBQ3pCQyxXQUFXLEVBQUUsbUNBQW1DO3dCQUNoREMsS0FBSyxFQUFFOzRCQUFFQyxZQUFZLEVBQUUsWUFBWTt5QkFBRTtxQkFDdEM7b0JBQ0Q7d0JBQ0VKLE1BQU0sRUFBRUosbUJBQW1CO3dCQUMzQkssSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbENDLFdBQVcsRUFDVCxrRUFBa0U7cUJBQ3JFO29CQUNEO3dCQUNFRixNQUFNLEVBQUVILGFBQWE7d0JBQ3JCSSxJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQkMsV0FBVyxFQUNULDZGQUE2RjtxQkFDaEc7b0JBQ0Q7d0JBQ0VGLE1BQU0sRUFBRUYsY0FBYzt3QkFDdEJHLElBQUksRUFBRSxzQkFBc0I7d0JBQzVCQyxXQUFXLEVBQUUsNERBQTREO3FCQUMxRTtvQkFDRCxFQUVDO2lCQUNGO2dCQUVELHFCQUFPLDhEQUFDZix5REFBVTtvQkFBQ1ksS0FBSyxFQUFFQSxLQUFLOzs7Ozt3QkFBSSxDQUFDO1lBQ3RDLENBQUM7OztZQUVETyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxxQkFDRSw4REFBQ2xCLDBEQUFNOztzQ0FDTCw4REFBQ21CLElBQUU7c0NBQUMsZUFBYTs7Ozs7Z0NBQUs7d0JBQ3JCLElBQUksQ0FBQ2YsV0FBVyxFQUFFOzs7Ozs7d0JBQ1osQ0FDVDtZQUNKLENBQUM7Ozs7WUE5RFlnQixHQUFlLEVBQWZBLGlCQUFlO21CQUE1QixTQUFhQSxlQUFlLENBQUNmLEtBQUs7dUJBQWxDLGdHQUFvQzt3QkFDNUJnQixRQUFRLEVBRVJDLE9BQU87Ozs7Z0NBRlBELFFBQVEsR0FBR3BCLDhEQUFRLENBQUNJLEtBQUssQ0FBQ2tCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Z0NBRS9COztvQ0FBTUgsUUFBUSxDQUFDSSxPQUFPLENBQUNDLFVBQVUsRUFBRSxDQUFDQyxJQUFJLEVBQUU7a0NBQUE7O2dDQUFwREwsT0FBTyxHQUFHLGFBQTBDO2dDQUUxRDs7b0NBQU87d0NBQ0xkLG1CQUFtQixFQUFFYyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dDQUMvQmhCLE9BQU8sRUFBRWdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQ25CYixhQUFhLEVBQUVhLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQ3pCWixjQUFjLEVBQUVZLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQzFCZixPQUFPLEVBQUVlLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUNBQ3BCO2tDQUFDOzs7Z0JBQ0osQ0FBQzthQUFBOzs7V0FiR25CLFlBQVk7Q0FnRWpCLENBaEUwQkwsNENBQVMsQ0FnRW5DO0FBRUQsK0RBQWVLLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9iMGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcblxyXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcblxyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcclxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYXJkcygpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYmFsYW5jZSxcclxuICAgICAgbWFuYWdlcixcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgcmVxdWVzdHNDb3VudCxcclxuICAgICAgYXBwcm92ZXJzQ291bnQsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBtZXRhOiBcIkFkZHJlcyBvZiBNYW5hZ2VyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIE1hbmFnZXIgY3JlYXRlZCB0aGUgY2FtcGFpZ24hXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBBcHByb3Z2ZXJzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDYW1wYWlnblNob3ciLCJyZW5kZXJDYXJkcyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsIkdyb3VwIiwicmVuZGVyIiwiaDMiLCJnZXRJbml0aWFsUHJvcHMiLCJjYW1wYWlnbiIsInN1bW1hcnkiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n"));

/***/ })

});