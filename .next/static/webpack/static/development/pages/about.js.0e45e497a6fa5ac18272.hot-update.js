webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
var _jsxFileName = "/home/gwl/SAMANDAR/next-training/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var initialState = {
  count: 0
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      };

    case 'decrement':
      return {
        count: state.count - 1
      };

    default:
      throw new Error();
  }
};

var about = function about() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Count : ", state.count, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "This is the about page "), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: 'decrement'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "-"), __jsx("button", {
    onClick: function onClick() {
      return dispatch({
        type: 'increment'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "+"));
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ })

})
//# sourceMappingURL=about.js.0e45e497a6fa5ac18272.hot-update.js.map