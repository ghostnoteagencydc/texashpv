webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _post_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post.css */ "./pages/post.css");
/* harmony import */ var _post_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_post_css__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "/Users/apoc/Documents/work/texashpv/pages/post.js";






var Content =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Content, _Component);

  function Content() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Content);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Content).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Content, [{
    key: "openShareBox",
    value: function openShareBox(link) {
      var leftPos = window.innerWidth / 2;
      window.open(link, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=400, top=0, left=' + leftPos.toString());
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (this.props.data) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
          property: "og:url",
          content: window.location.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
          property: "og:type",
          content: "post",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
          property: "og:title",
          content: this.props.data.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
          property: "og:description",
          content: this.props.data.excerpt,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
          property: "og:image",
          content: "http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/blog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "Back to Blog"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, this.props.data.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "By: ", this.props.data.author_nicename), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "post-content-container",
          dangerouslySetInnerHTML: {
            __html: this.props.data.content
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          class: "blog-post-social-icons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: function onClick() {
            return _this.openShareBox("https://twitter.com/intent/tweet?text=".concat(_this.props.data.title, ":").concat(window.location.href));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          class: "fab fa-twitter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: function onClick() {
            return _this.openShareBox("https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURI(window.location.href), "&title=").concat(_this.props.data.title, "&source=HPVTexas"));
          },
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          class: "fab fa-linkedin-in",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: function onClick() {
            return _this.openShareBox("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href), "&quote=").concat(encodeURI(_this.props.data.title)));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          class: "fab fa-facebook",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: function onClick() {
            return _this.openShareBox("mailto:?subject=".concat(_this.props.data.title, "&body=").concat(window.location.href));
          },
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          class: "fas fa-envelope",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }))));
      } else {
        console.log(this.props);
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/blog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Back to Blog"));
      }
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Content, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    id: props.router.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Post);

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/post/".concat(props.query.slug));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=post.js.15937e1b0c176fef804b.hot-update.js.map