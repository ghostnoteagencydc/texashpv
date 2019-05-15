webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blog_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog.css */ "./pages/blog.css");
/* harmony import */ var _blog_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_blog_css__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "/Users/apoc/Documents/work/texashpv/pages/blog.js";







var Blog =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Blog, _Component);

  function Blog() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Blog);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Blog).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Blog, [{
    key: "render",
    value: function render() {
      console.log(this.props.posts);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Go Home")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Blog"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "posts-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.posts.map(function (p, i) {
        var imgurl = '';

        if (p.media) {
          imgurl = p.media.medium;
        } else {
          imgurl = 'https://designshack.net/wp-content/uploads/placeholder-image.png';
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/post?slug=".concat(p.slug),
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "post-box",
          key: i,
          "data-id": p.id,
          "data-slug": p.slug,
          "data-tags-ids": _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p.tag_ids),
          "data-tags": _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p.tag_names),
          "data-category-ids": _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p.category_ids),
          "data-categories": _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p.category_names),
          "data-author-name": p.author,
          "data-author-id": p.author_id,
          "data-author-nicename": p.author_nicename,
          "data-posted-date": p.date,
          "data-modified-date": p.date_modified,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "post-box-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "post-box-image",
          style: {
            backgroundImage: "url(".concat(imgurl, ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "post-box-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "post-box-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_11___default()(p.date).format('D  MMMM YYYY')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
          className: "post-box-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, p.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "post-box-author",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "By: ", p.author_nicename), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "post-box-excerpt",
          dangerouslySetInnerHTML: {
            __html: p.excerpt
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "post-box-read-button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Read Post"), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          class: "fas fa-arrow-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        })))));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/posts?media=true');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                console.log(data);
                return _context.abrupt("return", {
                  posts: data
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.c10d33b94e29913b36a7.hot-update.js.map