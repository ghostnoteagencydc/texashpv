webpackHotUpdate("static/development/pages/members.js",{

/***/ "./pages/members.js":
/*!**************************!*\
  !*** ./pages/members.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dummymemberdata_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dummymemberdata.json */ "./pages/dummymemberdata.json");
var _dummymemberdata_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dummymemberdata.json */ "./pages/dummymemberdata.json", 1);
/* harmony import */ var _members_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members.css */ "./pages/members.css");
/* harmony import */ var _members_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_members_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/apoc/Documents/work/texashpv/pages/members.js";




var Members =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Members, _Component);

  function Members() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Members);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Members).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Members, [{
    key: "render",
    // static async getInitialProps() {
    //   const res = await fetch(
    //     'https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/users?media=true'
    //   )
    //   const data = await res.json()
    //   console.log(data)
    //   return { posts: data }
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "member-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Members"), _dummymemberdata_json__WEBPACK_IMPORTED_MODULE_6__.map(function (m, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: i,
          className: "member-list-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "member-list-box-image",
          style: {
            backgroundImage: "url".concat(m.avatar)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, m.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, m.title));
      }));
    }
  }]);

  return Members;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Members);

/***/ })

})
//# sourceMappingURL=members.js.53daeaf50dea5e83e5eb.hot-update.js.map