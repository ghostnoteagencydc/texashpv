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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_Resources_resourcecatgories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Resources/resourcecatgories */ "./components/Resources/resourcecatgories.js");
/* harmony import */ var _css_resources_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/resources.css */ "./css/resources.css");
/* harmony import */ var _css_resources_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_resources_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Resources_resourcebuttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Resources/resourcebuttons */ "./components/Resources/resourcebuttons.js");


var _jsxFileName = "D:\\Ghost Note React\\texashpv\\pages\\resources.js";








var Resources = function Resources(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menudata: props.menudata,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "resources-filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Resources_resourcebuttons__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: props.filtersdata,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "resources-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, console.log(props.filtersdata), props.resources.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: item.permalink,
      className: "resource-item ",
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Resources_resourcecatgories__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: item.terms,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  })));
};

Resources.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, menu, filters, data, menudata, filtersdata, filteredres;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/resource');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main');

        case 5:
          menu = _context.sent;
          _context.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource_type');

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
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource?filter[resource_type]=resource-type-2');

        case 20:
          filteredres = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            resources: data,
            menudata: menudata,
            filtersdata: filtersdata
          });

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ })

})
//# sourceMappingURL=resources.js.3de7c37d6194f24397ea.hot-update.js.map