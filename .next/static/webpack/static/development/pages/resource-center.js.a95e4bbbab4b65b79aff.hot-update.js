webpackHotUpdate("static\\development\\pages\\resource-center.js",{

/***/ "./components/Resources/resourcesection.js":
/*!*************************************************!*\
  !*** ./components/Resources/resourcesection.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResourceSection; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resourcecatgories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resourcecatgories */ "./components/Resources/resourcecatgories.js");
/* harmony import */ var _resourcebuttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resourcebuttons */ "./components/Resources/resourcebuttons.js");





var _jsxFileName = "D:\\Ghost Note React\\texashpv\\components\\Resources\\resourcesection.js";




var ResourceSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ResourceSection, _React$Component);

  function ResourceSection() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceSection);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ResourceSection).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceSection, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "resources-filters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_resourcebuttons__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: this.props.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.props.clickButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Hello"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "resources-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, console.log(this.props), this.props.resources.map(function (item) {
        var termArr = []; // item.terms.forEach(term => {
        //     termArr.push(term);
        // })

        var termStr = termArr.join(' ');
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: item.permalink,
          className: "resource-item ".concat(termStr),
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, item.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_resourcecatgories__WEBPACK_IMPORTED_MODULE_6__["default"], {
          data: item.terms,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        })));
      })));
    }
  }]);

  return ResourceSection;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=resource-center.js.a95e4bbbab4b65b79aff.hot-update.js.map