var e = require("../../../b/helpers/interopRequireDefault")(require("../../../b/regenerator"));

require("../../../b/helpers/Arrayincludes");

var t, r, n, o, a, c, i, s, u, f = require("../../../b/helpers/asyncToGenerator"), R = require("../../../b/helpers/slicedToArray"), p = require("../../../b/helpers/typeof"), l = require("../../../b/helpers/defineProperty"), d = require("../../../b/helpers/objectSpread2");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), function(e) {
    e.BEFORE_ADD_PARAMS = "before-add-params", e.AFTER_ADD_PARAMS = "after-add-params", 
    e.BEFORE_REQUEST = "before-request", e.AFTER_REQUEST = "after-request", e.BEFORE_VERIFY = "before-verify", 
    e.AFTER_VERIFY = "after-verify";
}(t || (t = {})), function(e) {
    e.INIT_OPTIONS = "INIT_OPTIONS", e.INIT_PARAMS = "INIT_PARAMS", e.SDK_INITED = "SDK_INITED", 
    e.HORN_CONFIG = "HORN_CONFIG";
}(r || (r = {})), function(e) {
    e.ADDAPI = "ADDAPI", e.ADDERROR = "ADDERROR";
}(n || (n = {})), function(e) {
    e.NO_OWL = "1000", e.INVALID_PARAMS = "1001", e.HORN_ERROR = "1002", e.NO_JSGUARD = "1003", 
    e.SHORT_PARAMS = "1004", e.NO_YODAPATH = "1005", e.APP_NO_READY = "1006", e.YODA_CB_REGISTERED = "1007", 
    e.NO_GLOBALDARA = "1008", e.INIT_ERROR = "1009", e.NO_REQUESTCODE = "1010", e.ADD_PARAMS_ERROR = "1011", 
    e.LIFE_CYCLE_ERROR = "1012", e.REQUEST_SEND_ERROR = "1013", e.ORIGIN_REQUEST_SEND_ERROR = "1014", 
    e.OPEN_YODA_ERROR = "1015", e.REDIRECT_ERROR = "1016", e.USER_VERIFY_TIMEOUT = "1017", 
    e.USER_VERIFY_FAIL = "1018", e.BLOCK_STATUS_CODE = "1019";
}(o || (o = {})), function(e) {
    e.PARAMS_TIME = "c_sec_params_time", e.YODA_CHECK = "c_sec_yoda_check", e.PARAMS_ERR = "c_sec_params_error", 
    e.YODA_ERR = "c_sec_yoda_error", e.YODA_TIMEOUT = "c_sec_yoda_timeout", e.YODA_SUCC = "c_sec_auth_success", 
    e.YODA_FAIL = "c_sec_auth_fail", e.BLOCK_STATUS_CODE = "c_sec_error_code", e.SDK_VERSION = "c_sec_sdk_version";
}(a || (a = {})), function(e) {
    e.WX = "wx", e.MMP = "mmp";
}(c || (c = {})), function(e) {
    e[e.WX = 3] = "WX", e[e.MMP = 5] = "MMP";
}(i || (i = {})), function(e) {
    e.DEV = "dev", e.PROD = "prod";
}(s || (s = {})), function(e) {
    e.BLOCK = "block", e.PASS = "pass";
}(u || (u = {}));

var _ = {
    header: [ "token", "csecuuid", "csecdpid", "csecuserid", "openId", "openIdCipher", "eptoken", "csecepuid" ],
    url: [ "yodaReady", "csecappid", "csecplatform", "csecversionname", "csecversion" ]
}, O = {
    env: s.PROD,
    yodaEnv: s.PROD,
    yodaTimeout: 1e4
};

var E = d({
    csecversion: "1.4.0"
}, "undefined" != typeof mmp ? {
    yodaReady: c.MMP,
    csecplatform: i.MMP
} : "undefined" != typeof wx ? {
    yodaReady: c.WX,
    csecplatform: i.WX
} : void 0), D = {};

function I(e) {
    var t;
    D[e] = D[e] || (l(t = {}, r.INIT_OPTIONS, d({}, O)), l(t, r.HORN_CONFIG, {}), l(t, r.SDK_INITED, !1), 
    t);
}

function A(e, t, n) {
    switch (D[e] || I(e), t) {
      case r.INIT_OPTIONS:
        D[e][t] = d(d({}, O), n);
        break;

      default:
        D[e][t] = n;
    }
}

function h(e, t) {
    return D[e] || I(e), D[e][t];
}

function v(e) {
    return null == e;
}

function g(e) {
    return "function" == typeof e;
}

var S = {}, y = {};

function T(e, t, r) {
    setTimeout(function() {
        S[e] && S[e](t, r);
    }, 0);
}

function m(e, t, r) {
    setTimeout(function() {
        y[e] && y[e](t, r);
    }, 0);
}

function N(e, t) {
    var a = h(e, r.INIT_OPTIONS).lifeCycleListener, c = void 0 === a ? function() {} : a;
    setTimeout(function() {
        try {
            c(t);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            t instanceof Error && T(e, n.ADDERROR, {
                sec_category: o.LIFE_CYCLE_ERROR,
                content: t && t.stack
            });
        }
    }, 0);
}

function b(e) {
    return "string" == typeof e ? e : "number" == typeof e && isFinite(e) ? "" + e : "boolean" == typeof e ? e ? "true" : "false" : "object" === p(e) ? JSON.stringify(e) : e;
}

var P = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function C(e) {
    if (0 === e.length) return [];
    if (1 === e.length) return [ e.charCodeAt(0) ];
    for (var t = [], r = 0; r < e.length; ++r) t[t.length] = e.charCodeAt(r);
    return t;
}

var k = [ 38 ], w = [ 61 ];

function x(e, t, r) {
    var n = {};
    if ("string" != typeof e || 0 === e.length) return n;
    for (var o = t ? C(t + "") : k, a = r ? C(r + "") : w, c = o.length, i = a.length, s = decodeURIComponent, u = [], f = 0, R = 0, p = 0, l = "", d = "", _ = !1, O = !1, E = 0, D = 0; D < e.length; ++D) {
        var I = e.charCodeAt(D);
        if (I === o[R]) {
            if (++R === c) {
                var A = D - R + 1;
                if (p < i) {
                    if (!(f < A)) {
                        f = D + 1, R = p = 0;
                        continue;
                    }
                    l += e.slice(f, A), _ && (l = s(l));
                } else f < A && (d += e.slice(f, A), O && (d = s(d))), _ && (l = s(l));
                if (-1 === u.indexOf(l)) n[l] = d, u[u.length] = l; else {
                    var h = n[l];
                    h.pop ? h[h.length] = d : n[l] = [ h, d ];
                }
                _ = O = !1, l = d = "", E = 0, f = D + 1, R = p = 0;
            }
        } else {
            if (R = 0, p < i) {
                if (I === a[p]) {
                    if (++p === i) {
                        var v = D - p + 1;
                        f < v && (l += e.slice(f, v)), E = 0, f = D + 1;
                    }
                    continue;
                }
                if (p = 0, !_) {
                    if (37 === I) {
                        E = 1;
                        continue;
                    }
                    if (E > 0) {
                        if (P[I]) {
                            3 == ++E && (_ = !0);
                            continue;
                        }
                        E = 0;
                    }
                }
                if (43 === I) {
                    f < D && (l += e.slice(f, D)), l += " ", f = D + 1;
                    continue;
                }
            }
            43 === I ? (f < D && (d += e.slice(f, D)), d += " ", f = D + 1) : O || (37 === I ? E = 1 : E > 0 && (P[I] ? 3 == ++E && (O = !0) : E = 0));
        }
    }
    if (f < e.length) p < i ? l += e.slice(f) : R < c && (d += e.slice(f)); else if (0 === p) return n;
    if (_ && (l = s(l)), O && (d = s(d)), -1 === u.indexOf(l)) n[l] = d, u[u.length] = l; else {
        var g = n[l];
        g.pop ? g[g.length] = d : n[l] = [ g, d ];
    }
    return n;
}

var M = function(e) {
    var t = e.match(/^(https?:)?(\/\/)?([^/?#]+)?(\/[^?#]*)?(\?([^#]*))?#?(.*)$/);
    if (!t) throw new Error("[urlSDK]parse error: wrong url".concat(e));
    var r = R(t, 8), n = r[1], o = r[3], a = r[4], c = void 0 === a ? "" : a, i = r[5], s = r[6], u = r[7];
    return {
        protocol: n,
        host: o,
        hostname: o.split(":")[0],
        search: i,
        pathname: c,
        hash: u,
        href: e,
        query: x(s),
        getSearch: function() {
            var e = function(e, t) {
                var r = t || {}, n = r.sep, o = void 0 === n ? "&" : n, a = r.eq, c = void 0 === a ? "=" : a, i = r.encode, s = void 0 === i ? encodeURIComponent : i;
                if (null !== e && "object" === p(e)) {
                    for (var u = Object.keys(e), f = u.length, R = f - 1, l = "", d = 0; d < f; ++d) {
                        var _ = u[d], O = e[_], E = s(b(_)) + c;
                        if (Array.isArray(O)) {
                            for (var D = O.length, I = D - 1, A = 0; A < D; ++A) l += E + s(b(O[A])), A < I && (l += o);
                            D && d < R && (l += o);
                        } else l += E + s(b(O)), d < R && (l += o);
                    }
                    return l;
                }
                return "";
            }(this.query);
            return e && "?" + e || "";
        },
        format: function() {
            var e = this.getSearch();
            return this.href = "".concat(n, "//").concat(this.host).concat(c).concat(e).concat(this.hash ? "#".concat(this.hash) : ""), 
            this.href;
        }
    };
};

function F(e, t) {
    var n = h(e, r.HORN_CONFIG) || {}, o = n.white_host || [], a = n.black_host || [], c = n.black_url || [], i = !1;
    o.length > 0 && (o.some(function(e) {
        return t.host.trim().endsWith(e.trim());
    }) && (i = !0));
    a.length > 0 && (a.some(function(e) {
        return t.host.trim() === e.trim();
    }) && (i = !1));
    c.length > 0 && (c.some(function(e) {
        return "".concat(t.host).concat(t.pathname).trim().startsWith(e.trim());
    }) && (i = !1));
    return i;
}

function U(e, t) {
    var r = !1;
    return e.forEach(function(e) {
        e.toLowerCase() === t.toLowerCase() && (r = !0);
    }), r;
}

function L(e) {
    var t = e.getWxIdsSync() || {}, r = t.openId, n = t.openIdCipher;
    return r && n ? {
        openId: r,
        openIdCipher: n
    } : {};
}

function q(e) {
    var t = e.getAuthInfoSync() || {};
    return {
        token: t.token,
        csecuserid: t.userId
    };
}

function Y(e) {
    return e.getBizInfo().then(function(e) {
        if (0 === e.code) {
            var t = e.data;
            return {
                eptoken: t.bizlogintoken,
                csecepuid: t.bizAcctId
            };
        }
        return {};
    }).catch(function() {
        return {};
    });
}

function K(e) {
    return j.apply(this, arguments);
}

function j() {
    return (j = f(e.default.mark(function t(i) {
        var s, u, f, R, p, l, O, D, I, g, S, y, N, b, P, C, k, w, x, K, j, G = arguments;
        return e.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (s = G.length > 1 && void 0 !== G[1] ? G[1] : "main", u = Date.now(), e.prev = 2, 
                h(s, r.SDK_INITED)) {
                    e.next = 6;
                    break;
                }
                return e.abrupt("return", i);

              case 6:
                if (f = M(i.url), F(s, f)) {
                    e.next = 10;
                    break;
                }
                return e.abrupt("return", i);

              case 10:
                if (R = h(s, r.INIT_OPTIONS), p = d({}, i), l = f.query, O = p.header = p.header ? d({}, p.header) : {}, 
                D = {}, R.loginSDK && (I = L(R.loginSDK), g = q(R.loginSDK), D = d(d({}, I), g)), 
                !R.epLoginSDK) {
                    e.next = 22;
                    break;
                }
                return e.next = 19, Y(R.epLoginSDK);

              case 19:
                e.t0 = e.sent, e.next = 23;
                break;

              case 22:
                e.t0 = {};

              case 23:
                if (S = e.t0, !((y = R.params()) instanceof Promise)) {
                    e.next = 31;
                    break;
                }
                return e.next = 28, y;

              case 28:
                N = e.sent, e.next = 32;
                break;

              case 31:
                N = y;

              case 32:
                if (b = d(d(d(d({}, D), S), E), N), P = Object.keys(l), C = Object.keys(O), _.url.forEach(function(e) {
                    var t = b[e];
                    -1 !== P.indexOf(e) || v(t) || (f.query[e] = t);
                }), _.header.forEach(function(e) {
                    var t = b[e];
                    U(C, e) || v(t) || (O[e] = t);
                }), k = f.format(), w = {}, i.cloudFunction && (w.path = k.replace("".concat(f.protocol, "//").concat(f.host), "")), 
                x = d(d(d({}, p), w), {}, {
                    url: k,
                    header: O
                }), b.yodaReady !== c.MMP) {
                    e.next = 43;
                    break;
                }
                return e.abrupt("return", d(d({}, x), {}, {
                    mtSecuritySign: !0,
                    mtSecuritySiua: !0
                }));

              case 43:
                if (R.jsGuardInstant) {
                    e.next = 45;
                    break;
                }
                throw Error(o.NO_JSGUARD);

              case 45:
                if (!(R.jsGuardInstant instanceof Promise)) {
                    e.next = 52;
                    break;
                }
                return e.next = 48, R.jsGuardInstant;

              case 48:
                K = e.sent, A(s, r.INIT_OPTIONS, d(d({}, h(s, r.INIT_OPTIONS)), {}, {
                    jsGuardInstant: K
                })), e.next = 53;
                break;

              case 52:
                K = R.jsGuardInstant;

              case 53:
                return e.abrupt("return", K.signWithSiua(x));

              case 56:
                return e.prev = 56, e.t1 = e.catch(2), e.t1 instanceof Error && (T(s, n.ADDERROR, {
                    sec_category: o.ADD_PARAMS_ERROR,
                    content: e.t1 && e.t1.stack,
                    tags: {
                        options: i
                    }
                }), m(s, n.ADDERROR, {
                    name: a.PARAMS_ERR,
                    error: e.t1
                })), e.abrupt("return", i);

              case 60:
                return e.prev = 60, j = Date.now() - u, m(s, n.ADDAPI, {
                    name: a.PARAMS_TIME,
                    dur: j,
                    sample: .001
                }), T(s, n.ADDAPI, {
                    name: a.PARAMS_TIME,
                    responseTime: j
                }), e.finish(60);

              case 65:
              case "end":
                return e.stop();
            }
        }, t, null, [ [ 2, 56, 60, 65 ] ]);
    }))).apply(this, arguments);
}

var G = {}, B = "wxSafetyRequestYodaCb";

function V(e) {
    G[e] = G[e] || {
        yodaVerifingLock: !1,
        yodaCbName: "".concat(B).concat(e),
        pageUrl: "",
        timer: 0
    };
}

function H(e) {
    var t = (e || {}).statusCode, r = e && e.data || {};
    return 418 === t && 406 === r.yodaCode && "native" !== r.yodaReady;
}

function Q(e, t, r) {
    setTimeout(function() {
        var c = (r || {}).statusCode, i = r && r.data || {};
        if ([ 403, 414, 418, 431 ].includes(c)) {
            var s = t && t.url, u = function(e) {
                var t = e || {}, r = t.statusCode, n = t.header, o = void 0 === n ? {} : n;
                return 403 === r && (void 0 !== o["X-UFE-Forbidden"] ? "403-1" : void 0 !== o["X-Forbid-Reason"] && "403-2");
            }(r) || c;
            T(e, n.ADDERROR, {
                sec_category: "".concat(o.BLOCK_STATUS_CODE, "-").concat(u),
                content: s,
                tags: {
                    data: i
                }
            }), m(e, n.ADDERROR, {
                name: "".concat(a.BLOCK_STATUS_CODE, "-").concat(u),
                error: JSON.stringify({
                    url: s,
                    data: i
                })
            });
        }
    });
}

function W(e, c) {
    if (!g(h(e, r.INIT_OPTIONS).customCrawelCallback)) {
        if (!getApp()) throw Error(o.APP_NO_READY);
        getApp().globalData || (getApp().globalData = {}), getApp().globalData["".concat(B).concat(e)] = function(r) {
            1 === r.status ? m(e, n.ADDAPI, {
                name: a.YODA_SUCC
            }) : (m(e, n.ADDAPI, {
                name: a.YODA_FAIL,
                scode: 9401
            }), T(e, n.ADDERROR, {
                sec_category: o.USER_VERIFY_FAIL,
                content: r,
                tags: d({}, c)
            })), N(e, {
                stage: t.AFTER_VERIFY,
                yodaData: r
            }), G[e].yodaVerifingLock = !1, clearTimeout(G[e].timer), function(e, t) {
                wx.redirectTo({
                    url: t,
                    fail: function(r) {
                        var a = r && r.errMsg;
                        wx.switchTab({
                            url: t,
                            fail: function(r) {
                                T(e, n.ADDERROR, {
                                    sec_category: o.REDIRECT_ERROR,
                                    content: r && r.errMsg,
                                    tags: {
                                        url: t,
                                        redirectErrorMsg: a
                                    }
                                });
                            }
                        });
                    }
                });
            }(e, G[e].pageUrl);
        };
    }
}

function J(e, t) {
    clearTimeout(G[e].timer);
    var c = h(e, r.INIT_OPTIONS).yodaTimeout;
    G[e].timer = setTimeout(function() {
        G[e].yodaVerifingLock = !1, T(e, n.ADDERROR, {
            sec_category: o.USER_VERIFY_TIMEOUT,
            level: "warn",
            content: t
        }), m(e, n.ADDERROR, {
            name: a.YODA_TIMEOUT,
            error: t
        });
    }, c);
}

function X(e) {
    var t = h(e, r.INIT_OPTIONS).urlParamsEncode, n = getCurrentPages ? getCurrentPages() : [];
    if (n.length > 0) {
        var o = n[n.length - 1] || {}, a = o.route || "", c = o.options || {}, i = Object.keys(c).map(function(e) {
            var r = t ? encodeURIComponent(c[e]) : c[e];
            return "".concat(e, "=").concat(r);
        }), s = i.length > 0 ? "?".concat(i.join("&")) : "";
        return "/".concat(a).concat(s);
    }
    return "";
}

function z(e, t, r) {
    return $.apply(this, arguments);
}

function $() {
    return ($ = f(e.default.mark(function t(a, c, i) {
        var s, u, f, R;
        return e.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (s = h(a, r.INIT_OPTIONS), u = s.jsGuardInstant, f = s.yodaEnv, R = s.yodaPath, 
                W(a, c), G[a].yodaVerifingLock) {
                    e.next = 11;
                    break;
                }
                if (G[a].yodaVerifingLock = !0, G[a].pageUrl = X(a), u) {
                    e.next = 7;
                    break;
                }
                throw Error(o.NO_JSGUARD);

              case 7:
                return e.next = 9, u;

              case 9:
                e.sent.finger.g(function(e) {
                    var t = "".concat(R, "?requestCode=").concat(i, "&env=").concat(f, "&appletsfp=").concat(e, "&callbackName=").concat(B).concat(a);
                    wx.redirectTo({
                        url: t,
                        fail: function(e) {
                            T(a, n.ADDERROR, {
                                sec_category: o.OPEN_YODA_ERROR,
                                content: e && e.errMsg,
                                tags: {
                                    url: t
                                }
                            });
                        }
                    }), J(a, t);
                });

              case 11:
              case "end":
                return e.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function Z(e, t, r) {
    return ee.apply(this, arguments);
}

function ee() {
    return (ee = f(e.default.mark(function c(i, s, f) {
        var R, p, l, _, O, E, D, I, A, v, S, y, b, P;
        return e.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (p = (R = f || {}).crawelBlockMode, l = void 0 === p ? u.BLOCK : p, _ = R.successCb, 
                O = R.ns, E = void 0 === O ? "main" : O, D = R.requestOptions, I = void 0 === D ? {} : D, 
                A = 200, v = i, l === u.BLOCK && (v = new Promise(function() {})), e.prev = 4, N(E, {
                    stage: t.BEFORE_VERIFY,
                    responseData: s
                }), S = s.customData || {}, y = S.requestCode) {
                    e.next = 9;
                    break;
                }
                throw Error(o.NO_REQUESTCODE);

              case 9:
                if (b = h(E, r.INIT_OPTIONS), !g(P = b.customCrawelCallback)) {
                    e.next = 13;
                    break;
                }
                return P(s, I), e.abrupt("return", v);

              case 13:
                return e.next = 16, z(E, I, y);

              case 16:
                return e.abrupt("return", v);

              case 17:
                e.next = 25;
                break;

              case 19:
                return e.prev = 19, e.t0 = e.catch(4), A = 9401, G[E].yodaVerifingLock = !1, e.t0 instanceof Error && (T(E, n.ADDERROR, {
                    sec_category: o.OPEN_YODA_ERROR,
                    content: e.t0 && e.t0.stack,
                    tags: d({
                        result: i
                    }, I)
                }), m(E, n.ADDERROR, {
                    name: a.YODA_ERR,
                    error: e.t0
                })), e.abrupt("return", v);

              case 25:
                return e.prev = 25, m(E, n.ADDAPI, {
                    name: a.YODA_CHECK,
                    scode: A
                }), l !== u.BLOCK && _ && _(i), e.finish(25);

              case 29:
              case "end":
                return e.stop();
            }
        }, c, null, [ [ 4, 19, 25, 29 ] ]);
    }))).apply(this, arguments);
}

function te(e, t) {
    return re.apply(this, arguments);
}

function re() {
    return (re = f(e.default.mark(function t(n, o) {
        var a, c, i, s, u, f, R, p, l, d, _;
        return e.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (c = (a = o || {}).responseFilter, i = void 0 === c ? function(e) {
                    return e || {};
                } : c, s = a.successCb, u = a.ns, f = void 0 === u ? "main" : u, R = a.requestOptions, 
                p = void 0 === R ? {} : R, V(f), h(f, r.SDK_INITED)) {
                    e.next = 6;
                    break;
                }
                return s && s(n), e.abrupt("return", n);

              case 6:
                if (l = i(n) || {}, Q(f, p, l), !H(l)) {
                    e.next = 14;
                    break;
                }
                return d = l.data || {}, e.next = 12, Z(n, d, o);

              case 12:
                return _ = e.sent, e.abrupt("return", _);

              case 14:
                return s && s(n), e.abrupt("return", n);

              case 16:
              case "end":
                return e.stop();
            }
        }, t);
    }))).apply(this, arguments);
}

function ne(e, t, r) {
    try {
        for (var a = arguments.length, c = new Array(a > 3 ? a - 3 : 0), i = 3; i < a; i++) c[i - 3] = arguments[i];
        return t.apply(void 0, [ r ].concat(c));
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        t instanceof Error && T(e, n.ADDERROR, {
            sec_category: o.ORIGIN_REQUEST_SEND_ERROR,
            content: t && t.stack,
            tags: {
                options: r
            }
        });
    }
}

var oe = {
    white_host: [ ".dianping.com", ".meituan.com", ".sankuai.com", ".maoyan.com", ".meituan.net", ".neixin.cn" ]
}, ae = {}, ce = {};

function ie(e) {
    var t = h(e, r.INIT_OPTIONS).env, a = t && t !== s.PROD, c = a ? "white_black_list_test" : "white_black_list", i = a ? "_test" : "";
    wx.request({
        method: "GET",
        url: "https://portal-portm.meituan.com/horn",
        data: {
            version: "v1",
            os: "android".concat(i),
            from: c
        },
        success: function(t) {
            var a = (t || {}).data, c = a && a.customer;
            c && "object" === p(c) && (A(e, r.HORN_CONFIG, c), wx.setStorage({
                key: "wx-safety-request-horn",
                data: c,
                fail: function(t) {
                    !function(e, t) {
                        T(e, n.ADDERROR, {
                            sec_category: o.HORN_ERROR,
                            content: t && t.errMsg
                        });
                    }(e, t);
                }
            }), ce[e] = !0);
        },
        fail: function() {}
    });
}

exports.addCommonParams = K, exports.getSaftyRequest = function(a, c) {
    var i = a;
    return function() {
        var a = f(e.default.mark(function a(s) {
            var f, R, p, l, d, _, O, E, D, I, A, v, g, S, y, m, b = arguments;
            return e.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (R = (f = c || {}).crawelBlockMode, p = void 0 === R ? u.BLOCK : R, l = f.responseFilter, 
                    d = void 0 === l ? function(e) {
                        return e || {};
                    } : l, _ = f.ns, O = void 0 === _ ? "main" : _, E = b.length, D = new Array(E > 1 ? E - 1 : 0), 
                    I = 1; I < E; I++) D[I - 1] = b[I];
                    if (e.prev = 2, h(O, r.SDK_INITED) && !s.noSaftyRequest) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return", ne.apply(void 0, [ O, i, s ].concat(D)));

                  case 6:
                    return N(O, {
                        stage: t.BEFORE_ADD_PARAMS,
                        originOptions: s
                    }), e.next = 9, K(s, O);

                  case 9:
                    if (A = e.sent, v = A.success || function() {}, g = s.fail, S = s.success, y = s.complete, 
                    (g || S || y) && (A.success = function(e) {
                        var r = this;
                        te(e, {
                            requestOptions: A,
                            crawelBlockMode: p,
                            responseFilter: d,
                            successCb: function(e) {
                                v.call(r, e);
                            },
                            ns: O
                        });
                        var n = d(e);
                        N(O, {
                            stage: t.AFTER_REQUEST,
                            originOptions: s,
                            finalOptions: A,
                            responseData: n
                        });
                    }), N(O, {
                        stage: t.AFTER_ADD_PARAMS,
                        originOptions: s,
                        finalOptions: A
                    }), N(O, {
                        stage: t.BEFORE_REQUEST,
                        originOptions: s,
                        finalOptions: A
                    }), m = i.apply(void 0, [ A ].concat(D)), g || S || y || !(m instanceof Promise)) {
                        e.next = 18;
                        break;
                    }
                    return e.abrupt("return", m.then(function(e) {
                        var r = d(e);
                        return N(O, {
                            stage: t.AFTER_REQUEST,
                            originOptions: s,
                            finalOptions: A,
                            responseData: r
                        }), te(e, {
                            requestOptions: A,
                            crawelBlockMode: p,
                            responseFilter: d,
                            ns: O
                        });
                    }));

                  case 18:
                    return e.abrupt("return", m);

                  case 21:
                    return e.prev = 21, e.t0 = e.catch(2), e.t0 instanceof Error && T(O, n.ADDERROR, {
                        sec_category: o.REQUEST_SEND_ERROR,
                        content: e.t0 && e.t0.stack,
                        tags: {
                            options: s
                        }
                    }), e.abrupt("return", ne.apply(void 0, [ O, i, s ].concat(D)));

                  case 25:
                  case "end":
                    return e.stop();
                }
            }, a, null, [ [ 2, 21 ] ]);
        }));
        return function(e) {
            return a.apply(this, arguments);
        };
    }();
}, exports.init = function(e) {
    var t = e.ns = e.ns || "main";
    try {
        if (h(t, r.SDK_INITED)) return;
        !function(e) {
            var t = e.owlInstant, r = e.jsGuardInstant, n = e.params;
            if (!t) throw Error(o.NO_OWL);
            if (!r) throw Error(o.NO_JSGUARD);
            if (!g(n)) throw Error(o.INVALID_PARAMS);
        }(e), I(t), function(e, t, o) {
            S[e] = function(o, a) {
                try {
                    if (o === n.ADDERROR) {
                        var c = a.content, i = {
                            sec_category: "".concat("wx-safety-request", "-").concat(a.sec_category),
                            content: (p = c, "[object Object]" === Object.prototype.toString.call(p) ? JSON.stringify(c) : c),
                            level: a.level || "error",
                            tags: a.tags || {}
                        };
                        t.error.pushError(i, !1);
                        var u = h(e, r.INIT_OPTIONS), f = u.env, R = u.errorReport;
                        f === s.DEV && console.error("".concat("wx-safety-request", "-errorReport"), c), 
                        R && R(i);
                    } else o === n.ADDAPI && t.resource.addApi(d({
                        responseTime: 0,
                        networkCode: 200,
                        statusCode: 200
                    }, a), !1);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error("".concat("wx-safety-request", "-errorReport"), e);
                }
                var p;
            }, Promise.resolve(o).then(function(t) {
                y[e] = function(e, r) {
                    try {
                        e === n.ADDAPI ? t.addApiObj && t.addApiObj(r) : e === n.ADDERROR && t.addErrorObj && t.addErrorObj(r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error("".concat("wx-safety-request", "-guardReport"), e);
                    }
                }, Math.random() <= .01 && y[e](n.ADDERROR, {
                    name: "".concat(a.SDK_VERSION, "-").concat("1.4.0"),
                    error: {}
                });
            });
        }(t, e.owlInstant, e.jsGuardInstant), A(t, r.INIT_OPTIONS, e), function(e, t) {
            if (V(e), !g(t.customCrawelCallback) && !t.yodaPath) throw Error(o.NO_YODAPATH);
        }(t, e), function(e) {
            if (!ae[e]) {
                A(e, r.HORN_CONFIG, oe), wx.getStorage({
                    key: "wx-safety-request-horn",
                    success: function(t) {
                        var n = t.data;
                        n && "object" === p(n) && !ce[e] && A(e, r.HORN_CONFIG, t.data);
                    }
                }), ae[e] = !0, setTimeout(function() {
                    ie(e);
                });
                var t = !0;
                wx.onAppHide && wx.onAppShow && (wx.onAppHide(function() {
                    t = !1;
                }), wx.onAppShow(function() {
                    t || ie(e);
                }));
            }
        }(t), A(t, r.SDK_INITED, !0);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        A(t, r.SDK_INITED, !1), e instanceof Error && T(t, n.ADDERROR, {
            sec_category: o.INIT_ERROR,
            content: e && e.stack
        });
    }
}, exports.responseBizCode = te;