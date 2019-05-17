webpackHotUpdate("static\\development\\pages\\resources.js",{

/***/ "./pages/resources.js":
/*!****************************!*\
  !*** ./pages/resources.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Resources_resourcesearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Resources/resourcesearch */ "./components/Resources/resourcesearch.js");
/* harmony import */ var _components_Resources_resourcebuttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Resources/resourcebuttons */ "./components/Resources/resourcebuttons.js");
/* harmony import */ var _components_Resources_resourcecatgories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Resources/resourcecatgories */ "./components/Resources/resourcecatgories.js");
/* harmony import */ var _css_resources_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/resources.css */ "./css/resources.css");
/* harmony import */ var _css_resources_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_resources_css__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "D:\\Ghost Note React\\texashpv\\pages\\resources.js";







var Resources =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Resources, _React$Component);

  function Resources(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Resources);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Resources).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Resources, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Resources_resourcesearch__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Resources_resourcebuttons__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: this.props.filtersdata,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "resources-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.resources.map(function (item) {
        var termArr = [];

        if (item.terms) {
          item.terms.forEach(function (term) {
            termArr.push(term.slug);
          });
        }

        var termStr = termArr.join(' ');
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: item.permalink,
          className: "resource-item ".concat(termStr),
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          className: "resource-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, item.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Resources_resourcecatgories__WEBPACK_IMPORTED_MODULE_11__["default"], {
          data: item.terms,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        })));
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, filters, data, filtersdata;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/resource');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource_type');

              case 5:
                filters = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                data = _context.sent;
                _context.next = 11;
                return filters.json();

              case 11:
                filtersdata = _context.sent;
                return _context.abrupt("return", {
                  resources: data,
                  filtersdata: filtersdata
                });

              case 13:
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

  return Resources;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ })

})
//# sourceMappingURL=resources.js.177d6647031d82b19a19.hot-update.js.map