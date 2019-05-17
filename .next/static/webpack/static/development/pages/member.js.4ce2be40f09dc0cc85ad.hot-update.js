webpackHotUpdate("static/development/pages/member.js",{

/***/ "./pages/member.js":
/*!*************************!*\
  !*** ./pages/member.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/apoc/Documents/work/texashpv/pages/member.js";




var Content =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Content, _Component);

  function Content() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Content);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Content).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Content, [{
    key: "render",
    value: function render() {
      console.log(this.props);

      if (this.props) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/members",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, "Back to Members"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, this.props.router.query.id), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, "Member page"));
      } else {
        console.log(this.props);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/members",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, "Back to Members"));
      }
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(function (props) {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    id: props.router.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Post); // Post.getInitialProps = async function(props) {
//   const res = await fetch(
//     `https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/post/${
//       props.query.slug
//     }`
//   )
//   const data = await res.json()
//   return { data: data }
// }

/***/ })

})
//# sourceMappingURL=member.js.4ce2be40f09dc0cc85ad.hot-update.js.map