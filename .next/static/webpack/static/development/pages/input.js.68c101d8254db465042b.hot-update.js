webpackHotUpdate("static/development/pages/input.js",{

/***/ "./pages/input.js":
/*!************************!*\
  !*** ./pages/input.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/gwl/SAMANDAR/next-training/pages/input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var input = function input() {
  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var onButtonClick = function onButtonClick() {
    inputEl.current.focus();
  };

  return __jsx(MyLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("input", {
    ref: inputEl,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("button", {
    onClick: onButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Focus the input"));
};

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ })

})
//# sourceMappingURL=input.js.68c101d8254db465042b.hot-update.js.map