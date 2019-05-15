webpackHotUpdate("static\\development\\pages\\resource-center.js",{

/***/ "./pages/resource-center.js":
/*!**********************************!*\
  !*** ./pages/resource-center.js ***!
  \**********************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_Resources_resourcebuttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Resources/resourcebuttons */ "./components/Resources/resourcebuttons.js");
/* harmony import */ var _components_Resources_resourcecatgories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Resources/resourcecatgories */ "./components/Resources/resourcecatgories.js");
/* harmony import */ var _css_resources_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/resources.css */ "./css/resources.css");
/* harmony import */ var _css_resources_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_resources_css__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "D:\\Ghost Note React\\texashpv\\pages\\resource-center.js";








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
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        menudata: this.props.menudata,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "resources-filters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Resources_resourcebuttons__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: this.props.filtersdata,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "resources-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, item.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Resources_resourcecatgories__WEBPACK_IMPORTED_MODULE_12__["default"], {
          data: item.terms,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
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
        var res, menu, filters, data, menudata, filtersdata, filteredres;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/resource');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main');

              case 5:
                menu = _context.sent;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource_type');

              case 8:
                filters = _context.sent;
                _context.next = 11;
                return res.json();

              case 11:
                data = _context.sent;
                _context.next = 14;
                return menu.json();

              case 14:
                menudata = _context.sent;
                _context.next = 17;
                return filters.json();

              case 17:
                filtersdata = _context.sent;
                _context.next = 20;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource?filter[resource_type]=resource-type-2');

              case 20:
                filteredres = _context.sent;
                return _context.abrupt("return", {
                  resources: data,
                  menudata: menudata,
                  filtersdata: filtersdata
                });

              case 22:
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
Resources.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, menu, filters, data, menudata, filtersdata, filteredres;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/resource');

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main');

        case 5:
          menu = _context2.sent;
          _context2.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource_type');

        case 8:
          filters = _context2.sent;
          _context2.next = 11;
          return res.json();

        case 11:
          data = _context2.sent;
          _context2.next = 14;
          return menu.json();

        case 14:
          menudata = _context2.sent;
          _context2.next = 17;
          return filters.json();

        case 17:
          filtersdata = _context2.sent;
          _context2.next = 20;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource?filter[resource_type]=resource-type-2');

        case 20:
          filteredres = _context2.sent;
          return _context2.abrupt("return", {
            resources: data,
            menudata: menudata,
            filtersdata: filtersdata
          });

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ })

})
//# sourceMappingURL=resource-center.js.69ba5a44d0426192ec17.hot-update.js.map