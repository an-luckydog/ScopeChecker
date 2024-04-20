var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getMenuOrderHost = exports.getLoginHost = exports.default = exports.STORAGE_KEY = exports.LOGIN_RES_CODE = exports.BizPathType = exports.API_PATH = void 0;

var t = require("../../../b/helpers/typeof"), n = e(require("../rms-triangle-c/index.js")), r = [ "originTenantId", "changeBindingToken", "changeBindingFlag", "registerToken", "memberId" ];

function o(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, i(e, t);
}

function i(e, t) {
    return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function s(e, t) {
    if (null == e) return {};
    var n, r, o = {}, i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o;
}

function a() {
    return (a = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }).apply(this, arguments);
}

function u() {
    u = function() {
        return e;
    };
    var e = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(e, t, n) {
        e[t] = n.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
    function d(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), e[t];
    }
    try {
        d({}, "");
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        d = function(e, t, n) {
            return e[t] = n;
        };
    }
    function h(e, t, n, r) {
        var i = t && t.prototype instanceof p ? t : p, s = Object.create(i.prototype), a = new E(r || []);
        return o(s, "_invoke", {
            value: w(e, n, a)
        }), s;
    }
    function l(e, t, n) {
        try {
            return {
                type: "normal",
                arg: e.call(t, n)
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return {
                type: "throw",
                arg: e
            };
        }
    }
    e.wrap = h;
    var f = {};
    function p() {}
    function v() {}
    function g() {}
    var m = {};
    d(m, s, function() {
        return this;
    });
    var I = Object.getPrototypeOf, y = I && I(I(P([])));
    y && y !== n && r.call(y, s) && (m = y);
    var b = g.prototype = p.prototype = Object.create(m);
    function x(e) {
        [ "next", "throw", "return" ].forEach(function(t) {
            d(e, t, function(e) {
                return this._invoke(t, e);
            });
        });
    }
    function k(e, n) {
        function i(o, s, a, u) {
            var c = l(e[o], e, s);
            if ("throw" !== c.type) {
                var d = c.arg, h = d.value;
                return h && "object" == t(h) && r.call(h, "__await") ? n.resolve(h.__await).then(function(e) {
                    i("next", e, a, u);
                }, function(e) {
                    i("throw", e, a, u);
                }) : n.resolve(h).then(function(e) {
                    d.value = e, a(d);
                }, function(e) {
                    return i("throw", e, a, u);
                });
            }
            u(c.arg);
        }
        var s;
        o(this, "_invoke", {
            value: function(e, t) {
                function r() {
                    return new n(function(n, r) {
                        i(e, t, n, r);
                    });
                }
                return s = s ? s.then(r, r) : r();
            }
        });
    }
    function w(e, t, n) {
        var r = "suspendedStart";
        return function(o, i) {
            if ("executing" === r) throw Error("Generator is already running");
            if ("completed" === r) {
                if ("throw" === o) throw i;
                return {
                    value: void 0,
                    done: !0
                };
            }
            for (n.method = o, n.arg = i; ;) {
                var s = n.delegate;
                if (s) {
                    var a = T(s, n);
                    if (a) {
                        if (a === f) continue;
                        return a;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var u = l(e, t, n);
                if ("normal" === u.type) {
                    if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                    return {
                        value: u.arg,
                        done: n.done
                    };
                }
                "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg);
            }
        };
    }
    function T(e, t) {
        var n = t.method, r = e.iterator[n];
        if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", 
        t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", 
        t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
        var o = l(r, e.iterator, t.arg);
        if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
        f;
        var i = o.arg;
        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
        t.arg = void 0), t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
        t.delegate = null, f);
    }
    function L(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
        this.tryEntries.push(t);
    }
    function C(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
    }
    function E(e) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], e.forEach(L, this), this.reset(!0);
    }
    function P(e) {
        if (e) {
            var t = e[s];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var n = -1, o = function t() {
                    for (;++n < e.length; ) if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                    return t.value = void 0, t.done = !0, t;
                };
                return o.next = o;
            }
        }
        return {
            next: S
        };
    }
    function S() {
        return {
            value: void 0,
            done: !0
        };
    }
    return v.prototype = g, o(b, "constructor", {
        value: g,
        configurable: !0
    }), o(g, "constructor", {
        value: v,
        configurable: !0
    }), v.displayName = d(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
    }, e.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, d(e, c, "GeneratorFunction")), 
        e.prototype = Object.create(b), e;
    }, e.awrap = function(e) {
        return {
            __await: e
        };
    }, x(k.prototype), d(k.prototype, a, function() {
        return this;
    }), e.AsyncIterator = k, e.async = function(t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var s = new k(h(t, n, r, o), i);
        return e.isGeneratorFunction(n) ? s : s.next().then(function(e) {
            return e.done ? e.value : s.next();
        });
    }, x(b), d(b, c, "Generator"), d(b, s, function() {
        return this;
    }), d(b, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(e) {
        var t = Object(e), n = [];
        for (var r in t) n.push(r);
        return n.reverse(), function e() {
            for (;n.length; ) {
                var r = n.pop();
                if (r in t) return e.value = r, e.done = !1, e;
            }
            return e.done = !0, e;
        };
    }, e.values = P, E.prototype = {
        constructor: E,
        reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
            this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), 
            !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
        },
        dispatchException: function(e) {
            if (this.done) throw e;
            var t = this;
            function n(n, r) {
                return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), 
                !!r;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o], s = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                    var a = r.call(i, "catchLoc"), u = r.call(i, "finallyLoc");
                    if (a && u) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    } else if (a) {
                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var s = i ? i.completion : {};
            return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
            f) : this.complete(s);
        },
        complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
            this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
            f;
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), f;
            }
        },
        catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var o = r.arg;
                        C(n);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function(e, t, n) {
            return this.delegate = {
                iterator: P(e),
                resultName: t,
                nextLoc: n
            }, "next" === this.method && (this.arg = void 0), f;
        }
    }, e;
}

function c(e, t, n, r, o, i, s) {
    try {
        var a = e[i](s), u = a.value;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return void n(e);
    }
    a.done ? t(u) : Promise.resolve(u).then(r, o);
}

function d(e) {
    return function() {
        var t = this, n = arguments;
        return new Promise(function(r, o) {
            var i = e.apply(t, n);
            function s(e) {
                c(i, r, o, s, a, "next", e);
            }
            function a(e) {
                c(i, r, o, s, a, "throw", e);
            }
            s(void 0);
        });
    };
}

var h = {
    openId: "rms-openId",
    unionId: "rms-unionId",
    sessionKey: "rms-sessionKey",
    userProfile: "rms-userInfo",
    userToken: "rms-user-token",
    memberToken: "rms-member-token",
    cardId: "rms-cardId",
    loginParams: "rms-member-loginParams",
    env: "rms-env",
    cardInfo: "CARD_INFO"
}, l = 200, f = "/api/v1/adapters/crm", p = {
    MEMBER_PRE_LOGIN: "/api/v1/crm/frontend/customer/auth/create-member-token-by-relation",
    APP_INFO: "/api/v1/crm/mini/app/tenant/query",
    MP_LOGIN: "/user/api/login",
    MEMBER_LOGOUT: "/diancan/api/user/member/logout",
    SAVE_USER_INFO: "/diancan/user/wx/mp/saveUserInfo",
    MEMBER_LOGIN: f + "/member/login",
    GET_AGREEMENT_LIST: "/api/v1/crm/frontend/config/agreement/common/query",
    MEMBER_BIND: f + "/member/bind",
    USER_BIND: f + "/member/bindUser",
    SEND_VERIFY_CODE: f + "/member/verifycode/send",
    CHECK_SMS_QUOTA: "/api/v1/crm/frontend/control/verify/sms/quota/check",
    QUERY_CARD_TYPE: f + "/v2/cardtypes/querylist",
    ATTACH_TOKEN: f + "/member/token/sync",
    REGISTER: f + "/member/register"
}, v = {
    openId: "",
    userToken: {
        token: "",
        expiresIn: null
    },
    unionId: "",
    userTokenStr: "",
    sessionKey: ""
}, g = 0, m = 1, I = function(e) {
    return e[e.current = 1] = "current", e[e.last = 2] = "last", e;
}(I || {});

exports.BizPathType = I, exports.API_PATH = p, exports.LOGIN_RES_CODE = {
    SUCCESS: 0,
    ERROR: 1,
    SYS_ERROR: 500,
    PWD_ERROR: 1003005,
    NOT_SUPPORT_REGISTER_VIRTUAL_CARD: 6017,
    CARD_STOPPED: 6018,
    CARD_LOST: 6019,
    CARD_EXPIRED: 6020,
    CARD_NON_SUPPORT: 72313,
    ALL_CARDS_UNAVAILABLE: 6021,
    CHECK_CARD: 72308,
    CHECK_SHOP: 72300,
    CHECK_SAAS_CONTROL: 300004,
    BIND_FAILED: 1000001,
    NEED_SLIDER_VALID: 121060
}, exports.STORAGE_KEY = h;

var y = function() {};

function b(e, t) {
    return "function" == typeof e ? e : "function" == typeof t ? t : y;
}

n.default.PLATFORM_TYPE;

var x = n.default.isByteDance, k = function() {
    return n.default.MPInfo.isMerchant();
}, w = n.default.stringify, T = function(e) {
    var t, n = "https://canting.sjst.test.meituan.com";
    switch (null != (t = null == e || null == e.toLowerCase ? void 0 : e.toLowerCase()) ? t : "") {
      case "prod":
      case "production":
        n = "https://rms.meituan.com";
        break;

      case "test":
        n = "https://canting.sjst.test.meituan.com";
        break;

      case "st":
      case "staging":
        n = "https://canting.sjst.st.meituan.com";
        break;

      case "dev":
      case "development":
      case "local":
        n = "";
        break;

      default:
        n = n.replace(/^(.*\/\/)?(.*?)\./, "$1" + e + "-sl-$2.");
    }
    return n;
}, L = function(e) {
    var t, n = "https://rms.sjst.test.meituan.com";
    switch (null != (t = null == e || null == e.toLowerCase ? void 0 : e.toLowerCase()) ? t : "") {
      case "prod":
      case "production":
        n = "https://pos.meituan.com";
        break;

      case "test":
        n = "https://rms.sjst.test.meituan.com";
        break;

      case "st":
      case "staging":
        n = "https://rms.sjst.st.meituan.com";
        break;

      case "dev":
      case "development":
      case "local":
        n = "";
        break;

      default:
        n = n.replace(/^(.*\/\/)?(.*?)\./, "$1" + e + "-sl-$2.");
    }
    return n;
};

function C(e) {
    var t, n = "prod";
    switch (null != (t = null == e || null == e.toLowerCase ? void 0 : e.toLowerCase()) ? t : "prod") {
      case "production":
      case "prod":
        n = "prod";
        break;

      case "st":
      case "staging":
        n = "stage";
        break;

      default:
        n = "test";
    }
    return n;
}

exports.getLoginHost = L, exports.getMenuOrderHost = T;

var E = function() {
    function e(e, t, n, r, o, i, s, a, u, c, d, h, l, f) {
        void 0 === t && (t = !1), void 0 === n && (n = v), void 0 === r && (r = null), void 0 === o && (o = -1), 
        void 0 === i && (i = "production"), void 0 === s && (s = 0), void 0 === a && (a = ""), 
        void 0 === u && (u = ""), void 0 === c && (c = Promise.resolve()), void 0 === d && (d = 1), 
        void 0 === h && (h = {
            getPromotionMonitoring: function() {
                return "";
            }
        }), void 0 === l && (l = function() {
            return {};
        }), void 0 === f && (f = {
            logo: "",
            name: ""
        }), this.storageInstance = e, this.authInited = t, this.userInfo = n, this.cardIdList = r, 
        this.lastRequestTime = o, this.env = i, this.bizType = s, this.bizPath = a, this.url = u, 
        this.memberSilentLoginPromise = c, this.restType = d, this.LXReporter = h, this.getEnvHeader = l, 
        this.appInfo = f, this.addError = y, this.addCustom = y, this.addPerformance = y, 
        this.sendMv = y, this.initOpenId = y, this.loginPromise = null, this.cachedLoginCode = "", 
        this.isLoginCodeLocking = !1;
    }
    var t = e.prototype;
    return t.initProps = function(e) {
        var t;
        if (e) {
            var n = e || {}, r = n.env, o = void 0 === r ? "production" : r, i = n.LXReporter, s = n.getEnvHeader, a = n.Log, u = n.sendLxHelper, c = void 0 === u ? {} : u, d = n.bizType, h = void 0 === d ? 0 : d, l = n.url, f = void 0 === l ? "" : l, p = c.sendMv, v = c.sendMV;
            o && (this.env = o), i && (this.LXReporter = i), s && (this.getEnvHeader = s), null != a && a.addError && (this.addError = b(a.addError)), 
            null == (t = this.storageInstance) || t.setError(this.addError), (p || v) && (this.sendMv = b(v, p)), 
            null != a && a.addCustom && (this.addCustom = b(a.addCustom)), null != a && a.addPerformance && (this.addPerformance = b(a.addPerformance)), 
            null != a && a.initOpenId && (this.initOpenId = b(a.initOpenId)), this.bizType = h, 
            this.url = f;
        }
    }, t.saveAppInfo = function(e) {
        var t = this;
        this.request({
            url: L(this.env) + p.APP_INFO,
            method: "POST",
            timeout: 5e3,
            data: {
                appId: e,
                restType: this.restType
            },
            success: function(e) {
                var n, r = null != (n = null == e ? void 0 : e.data) ? n : {};
                if (0 === r.code && r.data) {
                    var o = r.data, i = o.headImg, s = o.nickname;
                    i && s && (t.appInfo.logo = i, t.appInfo.name = s);
                }
            },
            fail: function(e) {
                t.addError("获取小程序名称、logo失败", e);
            }
        });
    }, t.getAppInfo = function() {
        return this.appInfo;
    }, t.initSilenceLogin = function(e, t) {
        var n = this;
        return e.then(function(e) {
            return n.loginPromise = null, n.onLoginSuccess(e), t && n.onLoginSuccessReload(), 
            e;
        }).catch(function(e) {
            return n.loginPromise = null, n.onLoginFail(e), v;
        });
    }, t.silenceLogin = function() {
        var e = d(u().mark(function e() {
            var t = this;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.authInited = !0, !(Date.now() - this.lastRequestTime < 5e3 && null !== this.loginPromise)) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", this.loginPromise);

                  case 3:
                    return this.loginPromise = new Promise(function() {
                        var e = d(u().mark(function e(r, o) {
                            var i, s, a, c;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.lastRequestTime = Date.now(), i = t.getAppId(), e.next = 4, t.getCode();

                                  case 4:
                                    if (s = e.sent, a = v, s) {
                                        e.next = 9;
                                        break;
                                    }
                                    return r(a), e.abrupt("return");

                                  case 9:
                                    c = Date.now(), t.sendMv("b_saaspay_60of8h0e_mv"), t.addCustom("authCount", 1);
                                    try {
                                        t.request({
                                            url: T(t.env) + p.MP_LOGIN,
                                            method: "POST",
                                            timeout: 5e3,
                                            header: {
                                                "X-Platform": n.default.isAliPayNative ? 42 : n.default.isAliPay ? 41 : n.default.isWxNative ? 71 : n.default.isByteDanceMicroApp ? 82 : void 0
                                            },
                                            data: {
                                                code: s,
                                                appId: i
                                            },
                                            success: function(e) {
                                                var n = null == e ? void 0 : e.data;
                                                if ((null == n ? void 0 : n.code) === l) {
                                                    var o = n.data;
                                                    if (o) {
                                                        t.sendMv("b_saaspay_gktnmyjb_mv"), t.addCustom("authSuccessCount", 1);
                                                        var i = Date.now() - c;
                                                        t.sendMv("b_saaspay_i3tazxht_mv", null, null, {
                                                            duration: i
                                                        }), t.addPerformance(g, i, "all");
                                                    }
                                                    var s = o || {}, u = s.openId, d = s.user, h = s.unionId, f = s.sessionKey;
                                                    a = {
                                                        openId: u,
                                                        unionId: h,
                                                        userToken: d,
                                                        userTokenStr: (null == d ? void 0 : d.token) || "",
                                                        sessionKey: f
                                                    };
                                                }
                                                r(a);
                                            },
                                            fail: function(e) {
                                                t.addError("/user/api/login调用失败", e), o(e);
                                            }
                                        });
                                    } catch (e) {}

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()), e.abrupt("return", this.loginPromise);

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(), t.handleMemberPreLogin = function() {
        var e = this;
        return new Promise(function(t) {
            if (k()) {
                if (e.hasToken()) {
                    if (e.getMemberToken()) return void t();
                    var n = e.userInfo.userTokenStr, r = e.getAppId();
                    return e.saveAppInfo(r), x ? void t() : void e.request({
                        url: L(e.env) + p.MEMBER_PRE_LOGIN,
                        method: "POST",
                        timeout: 5e3,
                        header: {
                            "X-appId": r,
                            "X-user": n
                        },
                        data: {},
                        success: function(n) {
                            var r, o = null != (r = null == n ? void 0 : n.data) ? r : {};
                            if (o.code === l && o.data) {
                                var i = o.data, s = i.memberToken, a = i.tenantId;
                                s && a && e.setMemberToken(s, a);
                            }
                            t();
                        },
                        fail: function(n) {
                            e.addError("会员静默登录失败", n), t();
                        }
                    });
                }
                t();
            } else t();
        });
    }, t.setLocalUserInfo = function(e) {
        this.userInfo = e;
    }, t.clearLocalUserInfo = function() {
        this.userInfo = v;
    }, t.hasToken = function() {
        var e;
        return (null == (e = this.userInfo) ? void 0 : e.userToken) && !!this.userInfo.userToken.token;
    }, t.onLoginSuccess = function(e) {
        var t = e.userToken, n = e.openId, r = e.unionId, o = e.userTokenStr, i = e.sessionKey;
        this.setUserInfo({
            userToken: t,
            openId: n,
            unionId: r,
            userTokenStr: o,
            sessionKey: i
        }), this.handleSuccessLog();
    }, t.onLoginFail = function(e) {
        throw this.handleFailLog(e), e;
    }, t.logout = function() {
        var e = this;
        this.request({
            url: T(this.env) + p.MEMBER_LOGOUT,
            method: "POST",
            header: {
                "X-appId": this.getAppId(),
                "X-user": this.getToken()
            },
            success: function(t) {
                var n = t.data, r = t.statusCode, o = (n || {}).msg, i = void 0 === o ? "登出失败" : o;
                r === l ? (e.clearUserInfo(), e.showToast({
                    title: "登出成功",
                    duration: 1e3
                })) : e.showToast({
                    title: i,
                    duration: 1e3
                }), e.addCustom("login_success", 1);
            },
            fail: function() {
                e.showToast({
                    title: "登出异常",
                    duration: 1e3
                }), e.addCustom("login_fail", 1);
            }
        });
    }, t.initUserInfo = function(e, t) {
        var n = e.userToken, r = e.openId, o = e.unionId, i = e.userTokenStr, s = e.sessionKey;
        this.initProps(t), this.authInited = !0, this.setLocalUserInfo(e), this.setUserInfo({
            userToken: n,
            openId: r,
            unionId: o,
            userTokenStr: i,
            sessionKey: s
        });
    }, t.setUserInfo = function(e) {
        var t, n, r, o, i, s, a, u = e.userToken, c = e.openId, d = e.unionId, l = e.userTokenStr, f = e.sessionKey;
        if (null == u || !u.token || (null == (t = this.userInfo) || null == (n = t.userToken) ? void 0 : n.token) !== (null == u ? void 0 : u.token)) {
            var p, v = {
                userToken: u,
                openId: c,
                unionId: d,
                userTokenStr: l,
                sessionKey: f
            };
            this.setLocalUserInfo(v), null == (r = this.storageInstance) || r.set(h.userToken, u), 
            null == (o = this.storageInstance) || o.set(h.openId, c), null == (i = this.storageInstance) || i.set(h.unionId, d), 
            null == (s = this.storageInstance) || s.set(h.sessionKey, f), (null == (a = this.storageInstance) ? void 0 : a.get(h.openId)) !== c && (null == (p = this.initOpenId) || p.call(this, c));
        }
    }, t.clearUserInfo = function() {
        var e, t, n, r, o;
        this.clearLocalUserInfo(), null == (e = this.storageInstance) || e.remove(h.openId), 
        null == (t = this.storageInstance) || t.remove(h.userToken), null == (n = this.storageInstance) || n.remove(h.memberToken), 
        null == (r = this.storageInstance) || r.remove(h.unionId), null == (o = this.storageInstance) || o.remove(h.sessionKey);
    }, t.handleSuccessLog = function() {
        this.addCustom("silence_login_success", 1), this.lastRequestTime = -1;
    }, t.handleFailLog = function(e) {
        this.addCustom("silence_login_fail", 1), this.lastRequestTime = -1;
    }, t.getUserInfo = function() {
        var e, t, n, r, o;
        if (this.hasToken()) return a({}, null != (e = this.userInfo) ? e : {});
        if (!this.authInited) return v;
        var i = (null == (t = this.storageInstance) ? void 0 : t.get(h.userToken)) || v.userToken;
        if (!i.token) return v;
        var s = {
            openId: (null == (n = this.storageInstance) ? void 0 : n.get(h.openId)) || v.openId,
            userToken: i,
            unionId: (null == (r = this.storageInstance) ? void 0 : r.get(h.unionId)) || v.unionId,
            userTokenStr: i.token,
            sessionKey: (null == (o = this.storageInstance) ? void 0 : o.get(h.sessionKey)) || v.sessionKey
        };
        return this.setLocalUserInfo(s), s;
    }, t.getUserInfoSync = function() {
        var e = d(u().mark(function e() {
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", this.getUserInfo());

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(), t.getUserToken = function() {
        return this.getUserInfo().userToken;
    }, t.getOpenId = function() {
        return this.getUserInfo().openId;
    }, t.getUnionId = function() {
        return this.getUserInfo().unionId || v.unionId;
    }, t.getToken = function() {
        var e, t;
        return (null == (e = this.getUserInfo()) || null == (t = e.userToken) ? void 0 : t.token) || "";
    }, t.getSessionKey = function() {
        var e;
        return null == (e = this.getUserInfo()) ? void 0 : e.sessionKey;
    }, t.getCardInfo = function() {
        var e;
        return (null == (e = this.storageInstance) ? void 0 : e.get(h.cardInfo)) || "";
    }, t.setCardInfo = function(e) {
        var t;
        return null == (t = this.storageInstance) ? void 0 : t.set(h.cardInfo, e);
    }, t.getMemberToken = function() {
        var e;
        return (null == (e = this.storageInstance) ? void 0 : e.get(h.memberToken)) || "";
    }, t.getMemberTokenSync = function() {
        var e = d(u().mark(function e() {
            var t = this;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", this.memberSilentLoginPromise.then(function() {
                        return t.getMemberToken();
                    }).catch(function() {
                        return t.getMemberToken();
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(), t.setMemberToken = function(e, t) {
        var n;
        if (e && t) {
            var r = this.getMemberToken().split(";"), o = r.findIndex(function(e) {
                return e.indexOf(t) > -1;
            });
            o > -1 && r.splice(o, 1), r.unshift("UNI-TOKEN-" + t + ":" + e);
            var i = r.slice(0, 5).join(";");
            null == (n = this.storageInstance) || n.set(h.memberToken, i), this.setCardId("", t);
        }
    }, t.getCardId = function(e) {
        var t, n, r;
        return void 0 === e && (e = ""), this.cardIdList || (this.cardIdList = (null == (t = this.storageInstance) ? void 0 : t.get(h.cardId)) || []), 
        e ? (e += "", null != (n = null == (r = this.cardIdList.find(function(t) {
            return t.tenantId === e;
        })) ? void 0 : r.cardId) ? n : "") : this.cardIdList;
    }, t.setCardId = function(e, t) {
        var n;
        if (void 0 === e && (e = ""), t) {
            e += "", t += "";
            var r = this.getCardId(), o = r.findIndex(function(e) {
                return e.tenantId === t;
            });
            if (o > -1) r.splice(o, 1); else if ("" === e) return;
            e && r.unshift({
                tenantId: t,
                cardId: e
            }), r = r.slice(0, 5), this.cardIdList = r, null == (n = this.storageInstance) || n.set(h.cardId, r);
        }
    }, t.getUserProfileByStorage = function(e) {
        var t, n = this.getOpenId() + "_" + e;
        return null == (t = this.storageInstance) ? void 0 : t.get(h.userProfile, n);
    }, t.commonRequest = function(e, t) {
        var n = this, r = t.tenantId, o = t.poiId, i = t.poiType, s = t.orgId, u = t.customChannel, c = t.appCode, d = void 0 === c ? 51 : c, h = t.businessLine, l = void 0 === h ? 600 : h, f = t.restaurantViewId, p = t.bizPath, v = {};
        f && 1 == +i && (v.restaurantViewId = f), p && (v.bizPath = p);
        try {
            v["promotion-monitoring"] = this.LXReporter.getPromotionMonitoring() || "", v["app-type"] = k() ? 1 : 2, 
            Object.assign(v, this.getEnvHeader());
        } catch (e) {}
        return new Promise(function(t, c) {
            n.request(a({
                header: a({
                    tenantId: r,
                    poiId: o,
                    poiType: i,
                    orgId: s,
                    customChannel: u,
                    appCode: null != d ? d : 51,
                    businessLine: null != l ? l : 600,
                    "X-appId": n.getAppId(),
                    "X-user": n.getToken()
                }, v),
                success: function(e) {
                    t(e.data);
                },
                fail: function(e) {
                    c(e);
                }
            }, e));
        });
    }, t.queryCardType = function(e) {
        return this.commonRequest({
            url: L(this.env) + p.QUERY_CARD_TYPE
        }, e);
    }, t.getAgreementList = function(e, t) {
        var n = e.bizId, r = void 0 === n ? "" : n, o = e.sceneType, i = void 0 === o ? 10 : o, s = e.needContent, a = void 0 !== s && s;
        return this.commonRequest({
            method: "GET",
            url: L(this.env) + p.GET_AGREEMENT_LIST,
            dataType: "json",
            data: {
                bizId: r,
                sceneType: i,
                needContent: a
            }
        }, t);
    }, t.sendVerifyCode = function(e, t) {
        var n = e.mobile, r = e.businessType, o = e.smsType, i = void 0 === o ? 0 : o;
        return this.commonRequest({
            method: "POST",
            url: L(this.env) + p.SEND_VERIFY_CODE,
            data: {
                mobile: n,
                businessType: r,
                smsType: i
            }
        }, t);
    }, t.checkSMSQuota = function(e, t) {
        return void 0 === e && (e = {}), this.commonRequest({
            method: "POST",
            url: L(this.env) + p.CHECK_SMS_QUOTA,
            data: a({}, e, {
                restType: this.restType
            })
        }, t);
    }, t.loginCallBack = function(e) {
        if (e && 0 === e.code) {
            var t = e.data, n = t.token, r = t.originTenantId;
            n && this.setMemberToken(n, r);
        }
    }, t.handleLoginRes = function() {
        var e = d(u().mark(function e(t, n) {
            var o, i, c, h, l, f, p, v, g, m, I, y, b, x, k = this;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    o = n.success, i = n.fail, c = n.commonHeader, l = (h = t || {}).code, f = h.data, 
                    p = h.message, g = (v = f || {}).originTenantId, m = v.changeBindingToken, I = v.changeBindingFlag, 
                    y = v.registerToken, b = v.memberId, x = s(v, r), e.t0 = l, e.next = 0 === e.t0 ? 6 : 72308 === e.t0 ? 8 : 72300 === e.t0 ? 11 : 14;
                    break;

                  case 6:
                    if (I) try {
                        this.showModal({
                            title: "提示",
                            content: "该手机号已绑定其他设备，是否重新绑定？（重新绑定将解绑其他设备上已绑定的会员）",
                            cancelText: "取消",
                            confirmText: "重新绑定",
                            success: function() {
                                var e = d(u().mark(function e(t) {
                                    var n, r;
                                    return u().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            if (!t.confirm) {
                                                e.next = 13;
                                                break;
                                            }
                                            return e.next = 3, k.userBind({
                                                memberId: b,
                                                changeBindingToken: m
                                            }, c);

                                          case 3:
                                            if (0 !== (null == (r = e.sent) ? void 0 : r.code) || null == r || null == (n = r.data) || !n.token) {
                                                e.next = 11;
                                                break;
                                            }
                                            return k.setMemberToken(r.data.token, g), k.showToast({
                                                icon: "none",
                                                title: "绑定成功"
                                            }), null == o || o(a({}, x, {
                                                memberId: b
                                            })), e.abrupt("return");

                                          case 11:
                                            k.showToast({
                                                icon: "none",
                                                title: r.message || "绑定失败"
                                            }), null == i || i({
                                                code: 1000001,
                                                message: null == r ? void 0 : r.message
                                            });

                                          case 13:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                return function(t) {
                                    return e.apply(this, arguments);
                                };
                            }()
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        this.showToast({
                            icon: "none",
                            title: "绑定失败:-1"
                        }), null == i || i({
                            code: 1000001,
                            message: null == e ? void 0 : e.message
                        });
                    } else null == o || o(a({}, x, {
                        memberId: b
                    }));
                    return e.abrupt("break", 16);

                  case 8:
                    return this.showToast({
                        icon: "none",
                        title: "请选择合适的卡"
                    }), null == i || i({
                        code: l,
                        message: p
                    }), e.abrupt("break", 16);

                  case 11:
                    return this.showToast({
                        icon: "none",
                        title: "请选择合适的门店"
                    }), null == i || i({
                        code: l,
                        registerToken: y,
                        message: p
                    }), e.abrupt("break", 16);

                  case 14:
                    this.showToast({
                        icon: "none",
                        title: p || "登录失败，请重试"
                    }), null == i || i({
                        code: l,
                        message: p
                    });

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), t.register = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i, s, c;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, this.commonRequest({
                        method: "POST",
                        url: L(this.env) + p.REGISTER,
                        data: a({
                            verifyType: 7
                        }, t)
                    }, a({}, n, {
                        bizPath: this.bizPath
                    }));

                  case 3:
                    if (0 !== (null == (r = e.sent) ? void 0 : r.code)) {
                        e.next = 8;
                        break;
                    }
                    return i = null != (o = null == r ? void 0 : r.data) ? o : {}, s = i.token, c = i.cardId, 
                    null != n && n.tenantId ? this.setMemberToken(s, n.tenantId) : this.addError("【会员登录】注册选门店header未传入tenantId"), 
                    e.abrupt("return", {
                        token: s,
                        cardId: c
                    });

                  case 8:
                    return this.addError("【会员登录】注册选门店接口resp.code异常", r), e.abrupt("return", {});

                  case 12:
                    return e.prev = 12, e.t0 = e.catch(0), this.addError("【会员登录】注册选门店接口调用失败", e.t0), 
                    e.abrupt("return", {});

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 12 ] ]);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), t.getBizPath = function(e) {
        void 0 === e && (e = 1);
        var t = [], n = "";
        try {
            if (t = getCurrentPages().slice(-2).map(function(e) {
                return e.route;
            }), 1 === e) n = t[t.length - 1]; else if (2 === e && (n = t[0]).includes("/webview/")) {
                var r, o = getCurrentPages().slice(-2)[0];
                null != o && null != (r = o.options) && r.url && (n = decodeURIComponent(o.options.url).split("?")[0].replace(/https?:\/\/[^\/]+/, ""));
            }
        } catch (e) {}
        return n || "";
    }, t.setBizPath = function(e) {
        void 0 === e && (e = 1), this.bizPath = this.getBizPath(e);
    }, e;
}(), P = function() {
    var e = "undefined" != typeof getCurrentPages && getCurrentPages() || [];
    return e && e.length > 0 ? e[e.length - 1] : {
        route: "app",
        options: wx.getEnterOptionsSync && wx.getEnterOptionsSync().query || {}
    };
}, S = function(e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    o(t, e);
    var n = t.prototype;
    return n.setStorageInstance = function(e) {
        return wx.setStorageSync(e.key, e.data);
    }, n.getStorageSyncInstance = function(e) {
        return wx.getStorageSync(e);
    }, n.getStorageInfoSyncInstance = function() {
        return wx.getStorageInfoSync();
    }, n.removeStorageSyncInstance = function(e) {
        return wx.removeStorageSync(e);
    }, t;
}(function() {
    function e(e) {
        this.addError = e;
    }
    var t = e.prototype;
    return t.setError = function(e) {
        this.addError = e;
    }, e.getDynamicKey = function(e, t, n) {
        return void 0 === t && (t = ""), void 0 === n && (n = ""), (t ? t + "_" : "") + e + (n ? "_" + n : "");
    }, t.set = function(t, n, r, o) {
        void 0 === r && (r = 1 / 0), void 0 === o && (o = "");
        var i = {
            value: n,
            expiredTime: r
        };
        try {
            this.setStorageInstance({
                key: e.getDynamicKey(t, "new_rms_menuorder", o),
                data: JSON.stringify(i)
            }), this.setStorageInstance({
                key: e.getDynamicKey(t, "", o),
                data: JSON.stringify(i)
            });
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            var s;
            null == (s = this.addError) || s.call(this, "[API-setStorage]调用失败: " + t, e);
        }
    }, t.get = function(t, n) {
        void 0 === n && (n = "");
        var r = e.getDynamicKey(t, "new_rms_menuorder", n), o = e.getDynamicKey(t, "", n);
        try {
            var i = this.getStorageSyncInstance(o) || this.getStorageSyncInstance(r);
            try {
                var s = JSON.parse(i);
                if (!s.expiredTime || s.expiredTime > Date.now()) return s.value;
                this.remove(o, n);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return;
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            var a;
            null == (a = this.addError) || a.call(this, "[API-getStorageSync]调用失败: " + o, e);
        }
    }, t.remove = function(t, n) {
        void 0 === n && (n = "");
        var r = e.getDynamicKey(t, "new_rms_menuorder", n), o = e.getDynamicKey(t, "", n);
        try {
            this.removeStorageSyncInstance(r), this.removeStorageSyncInstance(o);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            var i;
            null == (i = this.addError) || i.call(this, "[API-removeStorage]调用失败: " + o, e);
        }
    }, e;
}()), _ = function(e) {
    function t() {
        return e.call(this, new S()) || this;
    }
    o(t, e), t.getInstance = function() {
        return this.instance || (this.instance = new t()), this.instance;
    };
    var r = t.prototype;
    return r.getTenantId = function() {
        return ((null == wx.getExtConfigSync ? void 0 : wx.getExtConfigSync()) || {}).tenantId || "";
    }, r.init = function(e) {}, r.initDefaultSilenceLogin = function() {
        var e = d(u().mark(function e(t) {
            var n, r, o, i;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.initProps(t), n = this.getUserInfo(), r = n.userToken, o = r.token, !(i = r.expiresIn)) {
                        e.next = 14;
                        break;
                    }
                    if (!(Date.now() < i)) {
                        e.next = 11;
                        break;
                    }
                    return this.authInited = !0, e.abrupt("return", n);

                  case 11:
                  case 19:
                    return e.abrupt("return", this.initSilenceLogin(this.silenceLogin(), !1));

                  case 12:
                    e.next = 20;
                    break;

                  case 14:
                    if (!o) {
                        e.next = 19;
                        break;
                    }
                    return this.authInited = !0, e.abrupt("return", n);

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), r.initRequestSilenceLogin = function() {
        var e = d(u().mark(function e() {
            var t;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = P(), "1" !== t.options.silenceLogin) {
                        e.next = 6;
                        break;
                    }
                    return this.addError("静默登录失败: 已经刷新过了"), e.abrupt("return");

                  case 6:
                    return e.abrupt("return", this.initSilenceLogin(this.silenceLogin(), !0));

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(), r.handleWxPrefetch = function() {
        var e = d(u().mark(function e(t) {
            var n, r, o = this;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.memberSilentLoginPromise = new Promise(function(e) {
                        return n = e;
                    }), setTimeout(n, 5e3), wx.canIUse("getBackgroundFetchData")) {
                        e.next = 18;
                        break;
                    }
                    return e.prev = 3, e.next = 6, this.handleLoginPreFetchFail(t);

                  case 6:
                    return e.next = 8, this.handleMemberPreLogin();

                  case 8:
                    n(), null == (r = t.prefetchCallback) || r(), e.next = 17;
                    break;

                  case 13:
                    e.prev = 13, e.t0 = e.catch(3), n(), this.addError("微信预拉取失败重新登录又失败", e.t0);

                  case 17:
                    return e.abrupt("return");

                  case 18:
                    return e.abrupt("return", wx.getBackgroundFetchData({
                        fetchType: "pre",
                        success: function() {
                            var e = d(u().mark(function e(r) {
                                var i, s, a, c, d, h, l, f, p;
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (e.prev = 0, i = r.fetchedData || "{}", s = JSON.parse(i), a = s.code, c = s.data, 
                                        d = c.loginResult, h = c.timestamp, l = c.env, f = Date.now(), h && !(f - h < 6e4)) {
                                            e.next = 17;
                                            break;
                                        }
                                        if (p = C(o.env), l !== p) {
                                            e.next = 12;
                                            break;
                                        }
                                        return e.next = 10, o.handleLoginPreFetchSuccess({
                                            code: a,
                                            loginResult: d
                                        }, t);

                                      case 10:
                                        e.next = 15;
                                        break;

                                      case 12:
                                        return e.next = 14, o.handleLoginPreFetchFail(t);

                                      case 14:
                                        o.addError("微信预拉取数据env错误", {
                                            localEnv: p,
                                            env: l
                                        });

                                      case 15:
                                        e.next = 20;
                                        break;

                                      case 17:
                                        return e.next = 19, o.handleLoginPreFetchFail(t);

                                      case 19:
                                        o.addError("微信预拉取数据超时", {
                                            timestamp: h,
                                            now: f
                                        });

                                      case 20:
                                        return e.next = 22, o.handleMemberPreLogin();

                                      case 22:
                                        e.next = 36;
                                        break;

                                      case 24:
                                        return e.prev = 24, e.t0 = e.catch(0), e.prev = 26, e.next = 29, o.handleLoginPreFetchFail(t);

                                      case 29:
                                        return e.next = 31, o.handleMemberPreLogin();

                                      case 31:
                                        e.next = 36;
                                        break;

                                      case 33:
                                        e.prev = 33, e.t1 = e.catch(26), o.addError("微信预拉取失败重新登录又失败", e.t1);

                                      case 36:
                                        n();

                                      case 37:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, null, [ [ 0, 24 ], [ 26, 33 ] ]);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }(),
                        fail: function() {
                            var e = d(u().mark(function e() {
                                return u().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.prev = 0, e.next = 3, o.handleLoginPreFetchFail(t);

                                      case 3:
                                        return e.next = 5, o.handleMemberPreLogin();

                                      case 5:
                                        e.next = 10;
                                        break;

                                      case 7:
                                        e.prev = 7, e.t0 = e.catch(0), o.addError("微信预拉取失败重新登录又失败", e.t0);

                                      case 10:
                                        n();

                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, null, [ [ 0, 7 ] ]);
                            }));
                            return function() {
                                return e.apply(this, arguments);
                            };
                        }(),
                        complete: function() {
                            var e = t.prefetchCallback;
                            e && "function" == typeof e && e();
                        }
                    }));

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 3, 13 ] ]);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), r.handleLoginPreFetchSuccess = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i, s, a, c, d, h;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = t.code, o = t.loginResult, i = o.openId, s = o.user, a = o.unionId, c = void 0 === a ? "" : a, 
                    d = o.sessionKey, h = {
                        openId: i,
                        unionId: c,
                        userToken: s,
                        userTokenStr: null != s && s.token ? null == s ? void 0 : s.token : "",
                        sessionKey: d
                    }, !(r === l && i && s && s.token)) {
                        e.next = 8;
                        break;
                    }
                    this.initUserInfo(h, n), this.addCustom("prefetch_success", 1), e.next = 9;
                    break;

                  case 8:
                    return e.abrupt("return", this.handleLoginPreFetchFail(n));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.handleLoginPreFetchFail = function() {
        var e = d(u().mark(function e(t) {
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return this.addCustom("prefetch_fail", 1), e.abrupt("return", this.initDefaultSilenceLogin(t));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), r.showToast = function(e) {
        wx.showToast(e);
    }, r.showModal = function(e) {
        wx.showModal(e);
    }, r.getAppId = function() {
        return (e = (wx.getAccountInfoSync() || {}).miniProgram) && e.appId;
        var e;
    }, r.onLoginSuccessReload = function() {
        !function(e) {
            void 0 === e && (e = {});
            var t, r = P(), o = r.route, i = r.options;
            "app" !== o && "Unknown" !== o && n.default.redirectTo({
                url: "/" + o + "?" + w((t = e, t && 0 === Object.keys(t).length ? i : e), !1)
            });
        }(a({}, P().options, {
            silenceLogin: 1
        }));
    }, r.request = function(e) {
        return wx.request(e);
    }, r.handleSuccessLog = function() {
        var t = Date.now() - this.lastRequestTime;
        this.addPerformance(m, t, "success"), e.prototype.handleSuccessLog.call(this);
    }, r.getUserInfoSync = function() {
        var t = d(u().mark(function t() {
            return u().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this.authInited && this.getOpenId() && this.getToken()) {
                        t.next = 4;
                        break;
                    }
                    return t.next = 3, this.initDefaultSilenceLogin();

                  case 3:
                    return t.abrupt("return", t.sent);

                  case 4:
                    return t.abrupt("return", e.prototype.getUserInfoSync.call(this));

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(), r.getCode = function() {
        var e = d(u().mark(function e() {
            var t;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, this.addCustom("getCodeCount", 1), e.next = 4, new Promise(function(e, t) {
                        wx.login({
                            success: function(n) {
                                n.code ? e(n.code) : t({
                                    errMsg: "no auth code"
                                });
                            },
                            fail: function(e) {
                                t(e);
                            }
                        });
                    });

                  case 4:
                    return t = e.sent, this.addCustom("getCodeSuccessCount", 1), e.abrupt("return", t);

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0), this.addError("[WX-API-login]调用失败", e.t0);

                  case 12:
                    return e.abrupt("return", "");

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 9 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(), r.wxLogin = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i, s, c, d, h, l, f, v, g, m, I;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, r = this.getAppId(), e.next = 4, this.getUserInfoSync();

                  case 4:
                    if (e.t0 = e.sent, e.t0) {
                        e.next = 7;
                        break;
                    }
                    e.t0 = {};

                  case 7:
                    return o = e.t0, i = o.openId, s = void 0 === i ? "" : i, c = t.wxLoginCode, d = t.account, 
                    h = t.verifyCode, l = t.verifyType, f = t.agreements, v = void 0 === f ? {} : f, 
                    g = t.extraParams, m = void 0 === g ? {} : g, this.setBizPath(), e.next = 14, this.commonRequest({
                        method: "POST",
                        url: L(this.env) + p.MEMBER_LOGIN,
                        data: a({
                            wxAppId: r,
                            wxOpenId: s,
                            appId: r,
                            wxLoginCode: c,
                            account: d,
                            verifyCode: h,
                            verifyType: l
                        }, v, m)
                    }, a({
                        bizPath: this.bizPath
                    }, n));

                  case 14:
                    return I = e.sent, this.loginCallBack(I), e.abrupt("return", I);

                  case 19:
                    return e.prev = 19, e.t1 = e.catch(0), this.addError("微信调用会员登录接口失败", e.t1), e.abrupt("return", {});

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 19 ] ]);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.memberBind = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = this.getAppId(), e.next = 3, this.getCode();

                  case 3:
                    return o = e.sent, e.abrupt("return", this.commonRequest({
                        method: "POST",
                        url: L(this.env) + p.MEMBER_BIND,
                        data: {
                            wxAppId: r,
                            wxLoginCode: o
                        }
                    }, a({}, n, t)));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.userBind = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.memberId, o = t.changeBindingToken, e.next = 3, this.getCode();

                  case 3:
                    return i = e.sent, e.abrupt("return", this.commonRequest({
                        method: "POST",
                        url: L(this.env) + p.USER_BIND,
                        data: {
                            memberId: r,
                            changeBindingToken: o,
                            appType: 1,
                            appId: this.getAppId(),
                            loginCode: i
                        }
                    }, n));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.mobileAuthLogin = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i, s, a, c;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = t.account, o = t.verifyCode, i = t.loginCode, s = t.agreements, a = t.extraParams, 
                    e.t0 = i, e.t0) {
                        e.next = 6;
                        break;
                    }
                    return e.next = 5, this.getCode();

                  case 5:
                    e.t0 = e.sent;

                  case 6:
                    return c = e.t0, e.abrupt("return", this.wxLogin({
                        wxLoginCode: c,
                        account: r,
                        verifyCode: o,
                        verifyType: 3,
                        agreements: s,
                        extraParams: a
                    }, n));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.phoneCodeLogin = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i, s, a;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.account, o = t.verifyCode, i = t.verifyType, s = t.agreements, a = t.extraParams, 
                    e.abrupt("return", this.wxLogin({
                        account: r,
                        verifyCode: o,
                        verifyType: i,
                        agreements: s,
                        extraParams: a
                    }, n));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.phoneCodeAuthLogin = function() {
        var e = d(u().mark(function e(t, n) {
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    throw Error("此方法暂时只支持抖音小程序");

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.newAuthLogin = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i, s, c, d, h, l, f, v;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, r = this.getAppId(), o = t.verifyCode, i = t.agreements, s = void 0 === i ? {} : i, 
                    c = t.extraParams, d = void 0 === c ? {} : c, e.next = 5, this.getUserInfoSync();

                  case 5:
                    if (e.t0 = e.sent, e.t0) {
                        e.next = 8;
                        break;
                    }
                    e.t0 = {};

                  case 8:
                    return h = e.t0, l = h.openId, f = void 0 === l ? "" : l, this.setBizPath(), e.next = 14, 
                    this.commonRequest({
                        method: "POST",
                        url: L(this.env) + p.MEMBER_LOGIN,
                        data: a({
                            appId: r,
                            wxOpenId: f,
                            verifyCode: o,
                            verifyType: 3
                        }, s, d)
                    }, a({
                        bizPath: this.bizPath
                    }, n));

                  case 14:
                    return v = e.sent, this.loginCallBack(v), e.abrupt("return", v);

                  case 19:
                    return e.prev = 19, e.t1 = e.catch(0), this.addError("微信调用会员登录接口失败", e.t1), e.abrupt("return", {});

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 19 ] ]);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.phoneNumberAuthLogin = function() {
        var e = d(u().mark(function e(t, n) {
            var r, o, i, s, c, d, h, l, f, p, v, g, m, I, y, b, x, k, w, T, L;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (i = t.event, s = t.loginCode, c = t.agreements, d = t.extraParams, h = t.success, 
                    l = t.fail, f = t.complete, p = t.wxAuthVersion, c) {
                        e.next = 4;
                        break;
                    }
                    return this.showToast({
                        icon: "none",
                        title: "未勾选同意《会员技术服务协议》"
                    }), e.abrupt("return");

                  case 4:
                    if (v = 1 === p, (null != i && null != (r = i.detail) && r.encryptedData || v) && (null != i && null != (o = i.detail) && o.code || !v)) {
                        e.next = 8;
                        break;
                    }
                    return this.showToast({
                        icon: "none",
                        title: "授权手机号失败"
                    }), e.abrupt("return");

                  case 8:
                    if (this.sendMv("b_saaspay_g22ixwvh_mv", null, null, {
                        appId: this.getAppId(),
                        tenantId: n.tenantId
                    }), this.isLoginCodeLocking = !0, wx.showLoading({
                        title: "加载中"
                    }), e.prev = 11, g = a({
                        loginExtraInfo: {}
                    }, null != d ? d : {}), m = {}, !v) {
                        e.next = 22;
                        break;
                    }
                    return I = null == i ? void 0 : i.detail, y = I.code, g.loginExtraInfo.identificationAuthParseCode = p, 
                    e.next = 19, this.newAuthLogin({
                        extraParams: g,
                        agreements: c,
                        verifyCode: y
                    }, n);

                  case 19:
                    m = e.sent, e.next = 28;
                    break;

                  case 22:
                    return x = null != (b = null == i ? void 0 : i.detail) ? b : {}, k = x.encryptedData, 
                    w = x.iv, T = k, L = w, e.next = 27, this.mobileAuthLogin({
                        account: T,
                        verifyCode: L,
                        loginCode: s,
                        agreements: c,
                        extraParams: d
                    }, n);

                  case 27:
                    m = e.sent;

                  case 28:
                    return wx.hideLoading(), e.next = 31, this.handleLoginRes(m, {
                        success: h,
                        fail: l,
                        commonHeader: n
                    });

                  case 31:
                    e.next = 38;
                    break;

                  case 33:
                    e.prev = 33, e.t0 = e.catch(11), wx.hideLoading(), null == l || l(e.t0), this.showToast({
                        icon: "none",
                        title: "登录失败"
                    });

                  case 38:
                    return e.prev = 38, this.isLoginCodeLocking = !1, e.next = 42, this.refreshLoginCode();

                  case 42:
                    return e.finish(38);

                  case 43:
                    null == f || f();

                  case 44:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 11, 33, 38, 43 ] ]);
        }));
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), r.getCachedLoginCode = function() {
        var e = d(u().mark(function e() {
            var t = this;
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.getAndCachedLoginCodeInterval) {
                        e.next = 4;
                        break;
                    }
                    return e.abrupt("return", this.cachedLoginCode);

                  case 4:
                    return this.getAndCachedLoginCodeInterval = setInterval(d(u().mark(function e() {
                        return u().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (e.prev = 0, t.isLoginCodeLocking) {
                                    e.next = 5;
                                    break;
                                }
                                return e.next = 4, t.getCode();

                              case 4:
                                t.cachedLoginCode = e.sent;

                              case 5:
                                e.next = 10;
                                break;

                              case 7:
                                e.prev = 7, e.t0 = e.catch(0), t.cachedLoginCode = "";

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 7 ] ]);
                    })), 24e4), e.prev = 5, e.next = 8, this.getCode();

                  case 8:
                    this.cachedLoginCode = e.sent, e.next = 14;
                    break;

                  case 11:
                    e.prev = 11, e.t0 = e.catch(5), this.cachedLoginCode = "";

                  case 14:
                    return e.abrupt("return", this.cachedLoginCode);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 5, 11 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(), r.stopGetLoginCode = function() {
        this.getAndCachedLoginCodeInterval && (clearInterval(this.getAndCachedLoginCodeInterval), 
        this.cachedLoginCode = "", this.getAndCachedLoginCodeInterval = void 0);
    }, r.refreshLoginCode = function() {
        var e = d(u().mark(function e() {
            return u().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return this.stopGetLoginCode(), e.abrupt("return", this.getCachedLoginCode());

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(), t;
}(E).getInstance();

exports.default = _;