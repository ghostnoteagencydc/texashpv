webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utilities_cookies_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utilities/cookies_functions */ "./utilities/cookies_functions.js");
/* harmony import */ var _components_shared_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/shared.css */ "./components/shared.css");
/* harmony import */ var _components_shared_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_shared_css__WEBPACK_IMPORTED_MODULE_15__);










var _jsxFileName = "/Users/apoc/Documents/work/texashpv/pages/_app.js";







var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, _App);

  function MyApp() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp).call(this));
    _this.state = {
      userToken: '',
      isLoggedIn: false,
      userData: {},
      loginErrorMessage: ''
    };
    _this.getLogin = _this.getLogin.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, [{
    key: "checkTokenFromCookie",
    value: function () {
      var _checkTokenFromCookie = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var token, res, cleanRes;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = _utilities_cookies_functions__WEBPACK_IMPORTED_MODULE_14__["default"].getCookie('hpv_usertoken39200');

                if (!token) {
                  _context.next = 11;
                  break;
                }

                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('https://hpvtexas.wpengine.com/wp-json/jwt-auth/v1/token/validate', {
                  method: 'POST',
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                cleanRes = _context.sent;

                if (cleanRes.code = 'jwt_auth_valid_token') {
                  console.log(cleanRes);
                  this.setstate = {
                    userToken: token,
                    isLoggedIn: true
                  };
                  this.getUserInfo(token);
                }

                _context.next = 12;
                break;

              case 11:
                console.log('cookie not found with token');

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkTokenFromCookie() {
        return _checkTokenFromCookie.apply(this, arguments);
      }

      return checkTokenFromCookie;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkTokenFromCookie();
    }
  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(token) {
        var rawResponse, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('https://hpvtexas.wpengine.com/wp-json/wp/v2/users/me', {
                  method: 'POST',
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 2:
                rawResponse = _context2.sent;
                _context2.next = 5;
                return rawResponse.json();

              case 5:
                res = _context2.sent;
                console.log(res);

                if (!res.data || !res.data.status) {
                  this.setState({
                    userData: res
                  });
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserInfo(_x) {
        return _getUserInfo.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: "getLogin",
    value: function () {
      var _getLogin = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(user, pass) {
        var rawResponse, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('https://hpvtexas.wpengine.com/wp-json/jwt-auth/v1/token', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    username: user,
                    password: pass
                  })
                });

              case 2:
                rawResponse = _context3.sent;
                _context3.next = 5;
                return rawResponse.json();

              case 5:
                res = _context3.sent;

                if (!res.data || !res.data.status) {
                  this.setState({
                    userToken: res.token,
                    isLoggedIn: true
                  });

                  _utilities_cookies_functions__WEBPACK_IMPORTED_MODULE_14__["default"].setCookie('hpv_usertoken39200', res.token, 30);
                } else if (res.message) {
                  console.log(res.message);
                  this.setState({
                    loginErrorMessage: res.message
                  });
                }

                console.log(res);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getLogin(_x2, _x3) {
        return _getLogin.apply(this, arguments);
      }

      return getLogin;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        menudata: this.props.menudata,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        getLogin: this.getLogin,
        loginData: {
          isLoggedIn: this.state.isLoggedIn,
          userToken: this.state.userToken,
          loginErrorMessage: this.state.loginErrorMessage,
          userData: this.state.userData
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(_ref) {
        var Component, ctx, pageProps, res, menu, data, menudata;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context4.sent;

              case 6:
                _context4.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/pages');

              case 8:
                res = _context4.sent;
                _context4.next = 11;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main');

              case 11:
                menu = _context4.sent;
                _context4.next = 14;
                return res.json();

              case 14:
                data = _context4.sent;
                _context4.next = 17;
                return menu.json();

              case 17:
                menudata = _context4.sent;
                return _context4.abrupt("return", {
                  pageProps: pageProps,
                  menudata: menudata
                });

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getInitialProps(_x4) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.604f22fcc2ec9f7c983f.hot-update.js.map