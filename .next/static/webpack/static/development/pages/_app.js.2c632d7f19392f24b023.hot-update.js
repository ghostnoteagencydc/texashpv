webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
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
/* harmony import */ var _submenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submenu */ "./components/submenu.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.css */ "./components/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/apoc/Documents/work/texashpv/components/header.js";





var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      if (this.props.menudata) {
        var menu = {};
        this.props.menudata.forEach(function (item) {
          if (item.menu_item_parent == 0) {
            if (!menu['parentMenu']) {
              menu['parentMenu'] = [{
                id: item.ID,
                title: item.title,
                url: item.url
              }];
              menu[item.ID] = [];
            } else {
              menu['parentMenu'].push({
                id: item.ID,
                title: item.title,
                url: item.url
              });
              menu[item.ID] = [];
            }
          } else {
            menu[item.menu_item_parent].push({
              title: item.title,
              url: item.url
            });
          }
        });
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
          integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
          crossorigin: "anonymous",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "HPV Roundtable"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "navmenu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, menu.parentMenu.map(function (menuitem) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: menuitem.id,
            className: "parentnav-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: menuitem.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, menuitem.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_submenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
            data: menu[menuitem.id],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }));
        })));
      } else {
        return null;
      }
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.2c632d7f19392f24b023.hot-update.js.map