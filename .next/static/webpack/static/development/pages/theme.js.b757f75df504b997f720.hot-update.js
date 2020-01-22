webpackHotUpdate("static/development/pages/theme.js",{

/***/ "./pages/theme.js":
/*!************************!*\
  !*** ./pages/theme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/gwl/SAMANDAR/next-training/pages/theme.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(themes.light);

var theme = function theme() {
  return __jsx(ThemeContext.Provider, {
    value: themes.dark,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("toolbar", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));

  var Toolbar = function Toolbar(props) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ThemedButton, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  };

  var ThemedButton = function ThemedButton() {
    var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
    return __jsx("button", {
      style: {
        background: themeContext.background,
        color: themeContext.foreground
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=theme.js.b757f75df504b997f720.hot-update.js.map