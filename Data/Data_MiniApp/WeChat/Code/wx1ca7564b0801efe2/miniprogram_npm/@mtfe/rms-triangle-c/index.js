var t = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../../../b/helpers/Arrayincludes"), require("../../../b/helpers/Objectentries"), 
require("../../../b/helpers/Objectvalues");

var e, n, i = t(require("../../@limo/core/index.js")), o = function() {
    return (o = Object.assign || function(t) {
        for (var e, n = 1, i = arguments.length; n < i; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
    }).apply(this, arguments);
};

function r(t, e, n, i) {
    function o(t) {
        return t instanceof n ? t : new n(function(e) {
            e(t);
        });
    }
    return new (n || (n = Promise))(function(n, r) {
        function a(t) {
            try {
                u(i.next(t));
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                r(t);
            }
        }
        function s(t) {
            try {
                u(i.throw(t));
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                r(t);
            }
        }
        function u(t) {
            t.done ? n(t.value) : o(t.value).then(a, s);
        }
        u((i = i.apply(t, e || [])).next());
    });
}

function a(t, e) {
    var n, i, o, r, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    return r = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this;
    }), r;
    function s(t) {
        return function(e) {
            return u([ t, e ]);
        };
    }
    function u(r) {
        if (n) throw new TypeError("Generator is already executing.");
        for (;a; ) try {
            if (n = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 
            0) : i.next) && !(o = o.call(i, r[1])).done) return o;
            switch (i = 0, o && (r = [ 2 & r[0], o.value ]), r[0]) {
              case 0:
              case 1:
                o = r;
                break;

              case 4:
                return a.label++, {
                    value: r[1],
                    done: !1
                };

              case 5:
                a.label++, i = r[1], r = [ 0 ];
                continue;

              case 7:
                r = a.ops.pop(), a.trys.pop();
                continue;

              default:
                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                    a = 0;
                    continue;
                }
                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                    a.label = r[1];
                    break;
                }
                if (6 === r[0] && a.label < o[1]) {
                    a.label = o[1], o = r;
                    break;
                }
                if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(r);
                    break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            r = e.call(t, a);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            r = [ 6, t ], i = 0;
        } finally {
            n = o = 0;
        }
        if (5 & r[0]) throw r[1];
        return {
            value: r[0] ? r[1] : void 0,
            done: !0
        };
    }
}

(n = e || (e = {}))[n.VERSION_EQUAL = 0] = "VERSION_EQUAL", n[n.VERSION_GREATER = 1] = "VERSION_GREATER", 
n[n.VERSION_FEWER = -1] = "VERSION_FEWER", n[n.VERSION_UNDEFINE = -2] = "VERSION_UNDEFINE";

var s, u, l, c, d, f = e, h = function(t, e) {
    void 0 === t && (t = ""), void 0 === e && (e = !1);
    var n = {};
    if (function(t) {
        return /^(http|https):\/\//.test(t);
    }(t)) t = t.split("?")[1] || ""; else {
        var i = t.split("?");
        i.length > 1 && (t = i[1]);
    }
    return (t = t.split("#")[0]).split("&").forEach(function(t) {
        if (t) {
            var i = t.split("="), o = i[1] || "";
            n[i[0]] = e ? decodeURIComponent(o) : o;
        }
    }), n;
}, p = function(t, e) {
    return void 0 === t && (t = {}), void 0 === e && (e = !0), Object.keys(t).map(function(n) {
        return n + "=" + (e ? encodeURIComponent(t[n]) : t[n]);
    }).join("&");
}, g = Object.freeze({
    __proto__: null,
    parse: h,
    getSchemaParam: function(t, e, n) {
        return void 0 === n && (n = !1), h(t, n)[e] || "";
    },
    stringify: p,
    appendQuery: function(t, e) {
        if (void 0 === t && (t = ""), !t) return "";
        if (!e) return t;
        var n = t.split("#"), i = n[0].split("?")[0], o = h(n[0], !0), r = n[1];
        o = Object.assign(o, e);
        var a = p(o, !0);
        return i + (a ? "?" + a : "") + (r ? "#" + r : "");
    }
});

(d = s || (s = {})).WXMPNATIVE_PLATFORM = "71", d.WX_PLATFORM = "20", d.ALIPAY_PLATFORM = "41", 
d.MTAPP_PLATFORM = "51", d.DP_PLATFORM = "61", d.OTHER_PLATFORM = "81", function(t) {
    t.WX_APP = "WX_APP", t.MP_WEBVIEW = "MP_WEBVIEW", t.WX = "WX", t.ALIPAY = "ALIPAY", 
    t.ALIPAY_WEBVIEW = "ALIPAY_WEBVIEW", t.MTAPP = "MTAPP", t.DP = "DP", t.ALIPAY_APP = "ALIPAY_APP", 
    t.TT_APP = "TT_APP", t.TT_APP_WEBVIEW = "TT_APP_WEBVIEW";
}(u || (u = {})), (l || (l = {})).UNDEFINED = "-1", function(t) {
    t.MINI_APPID = "miniAppId", t.PLUGIN_ID = "pluginId", t.PLUGIN_VERSION = "pluginVersion";
}(c || (c = {}));

var v, w, m = i.default.isMpWebview, y = window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : "", P = i.default.isIOS, S = i.default.isMTApp, A = i.default.isDPApp, E = i.default.isHybridGroupApp, T = i.default.isAlipay, b = i.default.isAliPayWebview, _ = i.default.isAliPayNative, I = i.default.isUnionPay, L = i.default.isWx, R = i.default.isPCWX, C = i.default.isByteDanceMicroApp, O = i.default.isByteDanceMicroAppWebview, N = i.default.isByteDance, x = i.default.isWxNative || i.default.isAliPayNative || i.default.isByteDanceMicroApp, D = i.default.isWxNative, M = i.default.isWXH5, U = function() {
    return i.default.isByteDanceMicroApp ? u.TT_APP : i.default.isByteDanceMicroAppWebview ? u.TT_APP_WEBVIEW : i.default.isAliPayNative ? u.ALIPAY_APP : i.default.isAliPayWebview ? u.ALIPAY_WEBVIEW : i.default.isWxNative ? u.WX_APP : i.default.isMpWebview ? u.MP_WEBVIEW : i.default.isWx ? u.WX : i.default.isAlipay ? u.ALIPAY : i.default.isMTApp ? u.MTAPP : i.default.isDPApp ? u.DP : "";
}, W = Object.freeze({
    __proto__: null,
    isMpWebview: m,
    h5Ua: y,
    isIOS: P,
    isMTApp: S,
    isDPApp: A,
    isHybridGroupApp: E,
    isAliPay: T,
    isAliPayWebview: b,
    isAliPayNative: _,
    isUnionPay: I,
    isWX: L,
    isPCWX: R,
    isByteDanceMicroApp: C,
    isByteDanceMicroAppWebview: O,
    isByteDance: N,
    isNativeMp: x,
    isWxNative: D,
    isWXH5: M,
    getPlatformType: U,
    getXPlatform: function() {
        return i.default.isWxNative ? s.WXMPNATIVE_PLATFORM : i.default.isWx ? s.WX_PLATFORM : i.default.isAlipay ? s.ALIPAY_PLATFORM : i.default.isMTApp ? s.MTAPP_PLATFORM : i.default.isDPApp ? s.DP_PLATFORM : s.OTHER_PLATFORM;
    }
}), k = new (function() {
    function t() {
        this.registerList = [], this.preloadResList = [];
    }
    return t.prototype.clearPreloadResList = function() {
        this.preloadResList = [];
    }, t.prototype.register = function(t) {
        Array.isArray(t) ? this.registerList = this.registerList.concat(t) : this.registerList.push(t);
    }, t.prototype.activePreload = function(t, e) {
        void 0 === e && (e = {});
        try {
            if (/https:|http:/.test(t)) return;
            var n = t.split("?"), i = n[0], r = n[1], a = (null == r ? void 0 : r.split("&").map(function(t) {
                return t.split("=");
            }).reduce(function(t, e) {
                return t[e[0]] = decodeURIComponent(e[1]), t;
            }, {})) || {}, s = this.registerList.filter(function(t) {
                return t.path === i;
            }).map(function(t) {
                return {
                    path: i,
                    key: t.key,
                    reloadExpireTime: t.reloadExpireTime || 5e3,
                    t: Date.now(),
                    value: t.jumpBefore(o(o({}, a), e))
                };
            });
            (null == s ? void 0 : s.length) ? this.preloadResList = s : this.preloadResList = [];
        } catch (t) {}
    }, t.prototype.getPreloadData = function(t) {
        var e = this.preloadResList.findIndex(function(e) {
            return e.path === t.path && e.key === t.key;
        }), n = this.preloadResList[e];
        if (n && this.preloadResList.splice(e, 1), n && !(n.reloadExpireTime && Date.now() - n.t > n.reloadExpireTime)) return n.value;
    }, t;
}())(), F = {
    rate: 5
};

!function(t) {
    t.DEV = "dev", t.STAGING = "staging", t.PROD = "prod", t.TEST = "test", t.CUSTOM = "custom";
}(v || (v = {})), function(t) {
    t[t.CAT_NODE_LOGCENTER = 0] = "CAT_NODE_LOGCENTER", t[t.CAT_NODE = 1] = "CAT_NODE", 
    t[t.LOGCENTER = 2] = "LOGCENTER";
}(w || (w = {}));

var j, B = [ "env", "auto", "userAgent", "tableNum", "network", "shopId" ], V = function(t, e) {
    return t = t || {}, "string" == typeof e && (e = e.split(/ +/)), e.reduce(function(e, n) {
        return null == t[n] || (e[n] = t[n]), e;
    }, {});
}, H = function() {
    function t() {
        this.cache = !1, this.env = v.PROD, this.userAgent = null, this.auto = !1, this.network = null;
    }
    return t.prototype.init = function(t) {
        this.env = t.env, this.shopId = t.shopId ? t.shopId : "", this.tableNum = t.tableNum ? t.tableNum : "";
    }, t.prototype.setAuto = function(t) {
        this.auto = t;
    }, t.prototype.setAsyncCommon = function(t, e) {
        "shopId" === t ? this.setShopId(e) : "tableNum" === t && this.setTableNum(e);
    }, t.prototype.setTableNum = function(t) {
        this.shopId = t;
    }, t.prototype.setShopId = function(t) {
        this.tableNum = t;
    }, t.prototype.setNetwork = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return a(this, function(e) {
                switch (e.label) {
                  case 0:
                    return this.network ? [ 3, 2 ] : (t = this, [ 4, Y() ]);

                  case 1:
                    t.network = e.sent(), e.label = 2;

                  case 2:
                    return [ 2 ];
                }
            });
        });
    }, t.prototype.setUseragent = function() {
        return r(this, void 0, void 0, function() {
            var t;
            return a(this, function(e) {
                switch (e.label) {
                  case 0:
                    return this.userAgent ? [ 3, 2 ] : (t = this, [ 4, G() ]);

                  case 1:
                    t.userAgent = e.sent(), e.label = 2;

                  case 2:
                    return [ 2 ];
                }
            });
        });
    }, t.prototype.getData = function(t) {
        return r(this, void 0, void 0, function() {
            return a(this, function(e) {
                switch (e.label) {
                  case 0:
                    return this.setAuto(t), D ? [ 4, this.setNetwork() ] : [ 3, 3 ];

                  case 1:
                    return e.sent(), [ 4, this.setUseragent() ];

                  case 2:
                    e.sent(), e.label = 3;

                  case 3:
                    return this.cache = !0, [ 2, V(this, B) ];
                }
            });
        });
    }, t;
}();

function Y() {
    return r(this, void 0, void 0, function() {
        return a(this, function(t) {
            switch (t.label) {
              case 0:
                t.label = 1;

              case 1:
                return t.trys.push([ 1, 3, , 4 ]), [ 4, new Promise(function(t, e) {
                    D ? wx && wx.getNetworkType({
                        success: t,
                        fail: e
                    }) : C && tt && tt.getNetworkType({
                        success: t,
                        fail: e
                    });
                }) ];

              case 2:
                return [ 2, {
                    connection: t.sent().networkType
                } ];

              case 3:
                return t.sent(), [ 2, {} ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function G() {
    return r(this, void 0, void 0, function() {
        var t;
        return a(this, function(e) {
            if (D || _ || C) try {
                return [ 2, "system:" + (t = i.default.getSystemInfoSync() || {}).system + ",model:" + t.model ];
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                return [ 2, "" ];
            }
            return [ 2, y ];
        });
    });
}

!function(t) {
    t.PV = "pv", t.PD = "pd", t.MV = "mv", t.MC = "mc", t.AJAX = "xhr", t.RESOURCE = "resource", 
    t.Error = "error", t.REPORT = "jsReport", t.ME = "me", t.TRIANGLE_REPORT = "TRIANGLE_REPORT";
}(j || (j = {}));

var X = j, q = 200, J = 450, Q = 451;

function z(t, e, n) {
    var i, o = t.reporter, r = o.sendInfo, a = o.wxOwl, s = e.stack || e.message || e.errMsg || "";
    r({
        level: "ERROR",
        name: n,
        content: {
            catch: s
        }
    }), null === (i = null == a ? void 0 : a.error) || void 0 === i || i.pushError({
        sec_category: n,
        content: s,
        category: "jsError",
        level: "warn",
        tags: {}
    }, !0);
}

function Z(t, e) {
    var n;
    if (!x) {
        var i = e || window && window.location.search, o = h(i, !1);
        return t ? decodeURIComponent((null === (n = o[t]) || void 0 === n ? void 0 : n.toString()) || "") : o;
    }
}

var $ = Object.freeze({
    __proto__: null,
    getH5UrlParam: Z,
    urlAddQueryParams: function(t, e) {
        var n = t.split("#")[0];
        n = n.replace(/[?&]$/, "");
        var i = h(n, !0);
        i = Object.assign(i, e);
        var o = t.split("#")[1];
        return t.split("?")[0] + "?" + p(i, !0) + (o ? "#" + o : "");
    }
}), K = function() {
    function t(t) {
        this.options = o(o({}, F), t), this.runtime = new H(), this.wxOwl = t.wxOwl, this.wxLLog = t.wxLLog, 
        this.wxLx = t.wxLx, this.init = this.init.bind(this), this.setAsyncOptions = this.setAsyncOptions.bind(this), 
        this.sendInfo = this.sendInfo.bind(this), this.sendSavedInfo = this.sendSavedInfo.bind(this), 
        this.init(t);
    }
    return t.prototype.init = function(t) {
        this.runtime.init(t);
    }, t.prototype.setAsyncOptions = function(t, e) {
        this.runtime.setAsyncCommon(t, e);
    }, t.prototype.sendInfo = function(t, e, n) {
        return void 0 === e && (e = !1), void 0 === n && (n = !1), r(this, void 0, void 0, function() {
            var o, r, s, u, l, c;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    return [ 4, this.runtime.getData(n) ];

                  case 1:
                    if (o = a.sent(), r = n ? X.REPORT : X.TRIANGLE_REPORT, s = t.url || (x ? function() {
                        var t = "undefined" != typeof getCurrentPages && getCurrentPages() || [];
                        return t && t.length > 0 ? t[t.length - 1] : {
                            route: "app",
                            options: D || _ || C ? i.default.getEnterOptionsSync : {}
                        };
                    }().route || "Unknown" : window.location.href), this.wxLLog) try {
                        u = (null == t ? void 0 : t.level) || "INFO", l = JSON.stringify(o), c = [ null == t ? void 0 : t.name, r, s ], 
                        this.wxLLog.log(u, JSON.stringify(t.content), {
                            extraInfo: l,
                            env: (null == o ? void 0 : o.env) || "unknown",
                            userAgent: (null == o ? void 0 : o.userAgent) || "unknown"
                        }, c), e && this.wxLLog.onHide();
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        this.wxOwl.error.pushError({
                            sec_category: "Triangle：logan-rtl上报失败",
                            content: JSON.stringify(t),
                            category: "jsError",
                            level: "error"
                        });
                    }
                    return [ 2 ];
                }
            });
        });
    }, t.prototype.sendSavedInfo = function() {
        try {
            this.wxLLog && this.wxLLog.onHide();
        } catch (t) {}
    }, t;
}(), et = null, nt = function(t, e, n, i) {
    if (void 0 === e && (e = ""), void 0 === n && (n = {
        level: "error"
    }), void 0 === i && (i = {}), et) {
        var r = et.wxOwl, a = et.wxLx.get("lxcuid"), s = t, u = e;
        e instanceof Error ? (s = e.message || e.name || "", u = e.stack || e.message || "") : "string" == typeof e && (u = e);
        try {
            var l = et.runtime, c = l.shopId, d = l.tableNum, f = {
                sec_category: s,
                content: JSON.stringify(u),
                category: n.category || "resourceError",
                level: n.level || "error",
                tags: o(o({}, i), {
                    lxcuid: a,
                    shopId: c,
                    tableNum: d
                })
            };
            r.error.pushError(f, !0);
        } catch (t) {}
    }
}, it = function(t, e, n) {
    var i, r;
    if (void 0 === n && (n = {}), et) try {
        var a = et.wxLx.get("lxcuid");
        e instanceof Error || (e = {
            name: t,
            msg: JSON.stringify(e)
        }), null === (i = window.Owl) || void 0 === i || i.addError(e, o({
            category: "resourceError",
            tags: {
                shopId: Z("shopId"),
                tableNum: Z("tableNum"),
                lxcuid: a
            }
        }, n));
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        a = et.wxLx.get("lxcuid"), null === (r = window.Owl) || void 0 === r || r.addError(e, o({
            category: "resourceError",
            tags: {
                shopId: Z("shopId"),
                tableNum: Z("tableNum"),
                lxcuid: a
            }
        }, n));
    }
}, ot = function(t) {
    nt("navigateTo跳转失败", {
        msg: t
    }, {
        category: "jsError"
    });
}, rt = function(t) {
    nt("relaunch跳转失败", {
        msg: t
    }, {
        category: "jsError"
    });
}, at = function(t) {
    nt("redirect跳转失败", {
        msg: t
    }, {
        category: "jsError"
    });
}, st = function(t) {
    it("webviewNavigate跳转失败", {
        msg: t
    });
}, ut = function(t) {
    it("webviewRedirect跳转失败", {
        msg: t
    });
}, lt = function(t) {
    var e = {
        url: ""
    };
    for (var n in t) t[n] && (e[n] = t[n]);
    return e;
}, ct = function(t) {
    var e = getCurrentPages(), n = [ "pages/webview/index", "pages/takeaway/index" ].find(function(e) {
        return -1 !== t.indexOf(e);
    }) ? 9 : 10;
    return !!(e && e.length >= n);
};

function dt(t, e) {
    if (e === u.MP_WEBVIEW || e === u.ALIPAY_WEBVIEW) switch (e) {
      case u.MP_WEBVIEW:
        wx.miniProgram.switchTab({
            url: t
        });
        break;

      case u.ALIPAY_WEBVIEW:
        my.switchTab({
            url: t
        });
    }
}

function ft(t, e) {
    var n, o, r, a, s, l, c, d;
    if (e === u.WX_APP || e === u.ALIPAY_APP || e === u.TT_APP) {
        var f = getApp({
            allowDefault: !0
        }), p = t.split("?")[0], g = "" === h(t)[p] ? {} : h(t);
        null === (o = null === (n = null == f ? void 0 : f.miniProgramData) || void 0 === n ? void 0 : n.setTabbarPageParams) || void 0 === o || o.call(n, p, g || {});
        var v = [];
        if (null === (r = null == f ? void 0 : f.miniProgramData) || void 0 === r ? void 0 : r.tabbarInfo) v = null !== (l = null === (s = null === (a = null == f ? void 0 : f.miniProgramData) || void 0 === a ? void 0 : a.tabbarInfo) || void 0 === s ? void 0 : s.tabbar) && void 0 !== l ? l : []; else {
            var w = i.default && i.default.getExtConfigSync ? i.default.getExtConfigSync() : {};
            v = null !== (d = null === (c = null == w ? void 0 : w.tabbarInfo) || void 0 === c ? void 0 : c.tabbar) && void 0 !== d ? d : [];
        }
        if (v.some(function(e) {
            return (0 === t.indexOf("pages") || 0 === t.indexOf("/pages")) && t.indexOf(e.pagePath) > -1;
        })) {
            switch (k.activePreload(t), t = null == t ? void 0 : t.split("?")[0], e) {
              case u.WX_APP:
                wx.switchTab({
                    url: t,
                    fail: function(e) {
                        return function(t, e) {
                            nt("switchTab跳转" + t + "失败", {
                                msg: e
                            }, {
                                category: "jsError"
                            });
                        }(t, e);
                    }
                });
                break;

              case u.ALIPAY_APP:
                my.switchTab({
                    url: t
                });
                break;

              case u.TT_APP:
                tt.switchTab({
                    url: t
                });
            }
            return !0;
        }
        return !1;
    }
}

function ht(t, e) {
    var n = null, i = null, o = null, r = null, a = !1;
    "string" == typeof t ? (n = t, i = e) : (n = t.url, i = t.fail || at, o = t.success, 
    r = t.complete, a = t.newAlipay || !1);
    var s = lt({
        url: n,
        fail: i,
        success: o,
        complete: r
    }), l = U();
    if (!ft(n, l)) try {
        switch (l) {
          case u.TT_APP:
            k.activePreload(n), tt.redirectTo(s);
            break;

          case u.TT_APP_WEBVIEW:
            if (/^(http|https):\/\/.+$/.test(n)) window.location.href = n; else try {
                tt.miniProgram.redirectTo({
                    url: n,
                    fail: i || ut
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                window.location.href = n;
            }
            break;

          case u.WX_APP:
            k.activePreload(n), wx.redirectTo(s);
            break;

          case u.MP_WEBVIEW:
            if (/^(http|https):\/\/.+$/.test(n)) window.location.href = n; else try {
                wx.miniProgram.redirectTo({
                    url: n,
                    fail: i || ut
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                window.location.href = n;
            }
            break;

          case u.ALIPAY_WEBVIEW:
            if (!/^(http|https):\/\/.+$/.test(n)) try {
                my.redirectTo({
                    url: n
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                window.location.href = n;
            }
            if (window && window.ap && window.ap.redirectTo) try {
                window.ap.redirectTo(n);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                window.location.href = n;
            } else window.location.href = n;
            break;

          case u.ALIPAY:
            if (a) try {
                window.history.replaceState ? (window.history.replaceState(null, "", n), window.history.go(0)) : window.location.replace(n);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                window.location.href = n;
            } else if (window && window.ap && window.ap.redirectTo) try {
                window.ap.redirectTo(n);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                ut("catch支付宝跳转错误"), window.location.href = n;
            } else try {
                window.history.replaceState({}, "", n), window.location.reload();
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                window.location.href = n, ut("catch未知环境跳转错误");
            }
            break;

          case u.ALIPAY_APP:
            k.activePreload(n);
            try {
                my.redirectTo({
                    url: n
                });
            } catch (t) {}
            break;

          default:
            try {
                window.history.replaceState ? (window.history.replaceState(null, "", n), window.history.go(0)) : window.location.replace(n);
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                window.location.href = n;
            }
        }
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        dt(n, l);
    }
}

var pt, gt = function(t, e, n, i) {
    var o = e.relaunch, r = void 0 !== o && o, a = e.toNewWebview, s = void 0 !== a && a, l = e.toWebviewType, c = void 0 === l ? "DIRECT" : l, d = "/diancan-menu/pages/webview/index?url=" + encodeURIComponent(t) + "&type=" + (c || "DIRECT");
    if (r && s) {
        if (i === u.TT_APP_WEBVIEW) return void tt.miniProgram.reLaunch({
            url: d
        });
        if (i === u.ALIPAY_WEBVIEW) return void my.reLaunch({
            url: d
        });
        wx.reLaunch({
            url: d,
            success: e.success || function() {},
            fail: e.fail || rt
        });
    } else if (s) {
        if (i === u.TT_APP_WEBVIEW) return void tt.miniProgram.navigateTo({
            url: d,
            fail: e.fail || st
        });
        if (i === u.ALIPAY_WEBVIEW) return void window.ap.redirectTo(t);
        wx.miniProgram.navigateTo({
            url: d,
            fail: e.fail || st
        });
    } else n ? wx.navigateTo({
        url: d,
        fail: e.fail || ot
    }) : i === u.ALIPAY_APP ? my.navigateTo({
        url: d
    }) : window.location.href = t;
}, vt = {
    relaunch: !1,
    toNewWebview: !1,
    toWebviewType: "DIRECT"
}, wt = Object.freeze({
    __proto__: null,
    redirectTo: ht,
    navigateTo: function(t, e) {
        var n, i;
        void 0 === e && (e = vt);
        var o, r, a, s = {};
        "string" == typeof t ? (n = t, i = e) : (n = t.url, i = t.options || vt, s = t.events || {}, 
        o = t.success, r = t.fail || ot, a = t.complete);
        var l = U();
        if (!ft(n, l)) {
            var c = i.relaunch, d = void 0 !== c && c, f = /^(http|https):\/\/.+$/.test(n), h = lt({
                url: n,
                fail: r,
                success: o,
                complete: a,
                events: s
            });
            try {
                switch (l) {
                  case u.TT_APP:
                    k.activePreload(n), ct(n) ? ht(h) : tt.navigateTo(h);
                    break;

                  case u.TT_APP_WEBVIEW:
                    f ? gt(n, i, !1) : tt.miniProgram.navigateTo(h);
                    break;

                  case u.WX_APP:
                    if (f) {
                        gt(n, i, !0);
                        break;
                    }
                    if (k.activePreload(n), d) {
                        wx.reLaunch(h);
                        break;
                    }
                    ct(n) ? ht(h) : wx.navigateTo(h);
                    break;

                  case u.ALIPAY_APP:
                    k.activePreload(n), my.navigateTo(h);
                    break;

                  case u.MP_WEBVIEW:
                    f && gt(n, i, !1), d ? wx.miniProgram.reLaunch({
                        url: n
                    }) : wx.miniProgram.navigateTo({
                        url: n
                    });
                    break;

                  case u.ALIPAY_WEBVIEW:
                    f && gt(n, i, !1, l), d ? window.ap.redirectTo(n) : my.navigateTo({
                        url: n
                    });
                    break;

                  case u.ALIPAY_APP:
                    if (k.activePreload(n), d) {
                        my.reLaunch({
                            url: n
                        });
                        break;
                    }
                    ct(n) ? ht(h) : my.navigateTo(h);
                    break;

                  default:
                    window.location.href = n;
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                dt(n, l);
            }
        }
    },
    navigateBack: function(t) {
        var e = U(), n = /^(http|https):\/\/.+$/.test(t);
        switch (e) {
          case u.TT_APP:
            tt.navigateBack({});
            break;

          case u.TT_APP_WEBVIEW:
            tt.miniProgram.navigateBack({});
            break;

          case u.WX_APP:
            wx.navigateBack();
            break;

          case u.ALIPAY_APP:
            my.navigateBack();
            break;

          case u.ALIPAY_WEBVIEW:
            !n && t ? window.ap.redirectTo(t) : window.history.back();
            break;

          case u.MP_WEBVIEW:
            if (!n) {
                wx.miniProgram && wx.miniProgram.navigateBack();
                break;
            }
            window.history.back();

          default:
            window.history.back();
        }
    }
}), mt = function(t, e, n) {
    var i;
    try {
        (null === (i = null == et ? void 0 : et.wxOwl) || void 0 === i ? void 0 : i.setMetric) && et.wxOwl.setMetric(t, e, n);
    } catch (t) {}
};

!function(t) {
    t[t.USER_SETTING_REFUSE_AUTH = 0] = "USER_SETTING_REFUSE_AUTH", t[t.USER_SETTING_ACCEPT_AUTH = 1] = "USER_SETTING_ACCEPT_AUTH", 
    t[t.USER_REFUSE_AUTH = 2] = "USER_REFUSE_AUTH", t[t.USER_AUTHORIZED = 3] = "USER_AUTHORIZED", 
    t[t.SYS_UNAUTHORIZE = 4] = "SYS_UNAUTHORIZE", t[t.TIMEOUT = 5] = "TIMEOUT", t[t.OTHER = 6] = "OTHER";
}(pt || (pt = {}));

var yt, Pt, St = function(t) {
    var e, n = t.canUsePreviousCacheTime, o = t.canUseSessionCache;
    try {
        var r = "", a = "";
        x || _ || C ? (r = i.default.getStorageSync("saas_geo_sdk_location") || "", a = (null === (e = getApp({
            allowDefault: !0
        })) || void 0 === e ? void 0 : e.saas_geo_sdk_location) || "") : (r = window.localStorage.getItem("saas_geo_sdk_location") || "", 
        a = window.sessionStorage.getItem("saas_geo_sdk_location") || "");
        var s = r.split(","), u = s[0], l = s[1], c = s[2], d = a.split(","), f = d[0], h = d[1], p = d[2];
        if (l && c && u && n && +u > +Date.now() - n) return {
            lat: Number(l),
            lng: Number(c),
            latitude: Number(l),
            longitude: Number(c)
        };
        if (h && p && f && o) return {
            lat: Number(h),
            lng: Number(p),
            latitude: Number(h),
            longitude: Number(p)
        };
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return;
    }
}, At = function(t) {
    var e = t.userSettingAuthSuccess, n = t.userSettingAuthRefuse, o = t.authDialogConfig, s = void 0 === o ? {} : o;
    return r(void 0, void 0, void 0, function() {
        var t, o;
        return a(this, function(r) {
            switch (r.label) {
              case 0:
                return t = i.default.showModal, o = i.default.openSetting, [ 4, Tt() ];

              case 1:
                return r.sent() === pt.USER_AUTHORIZED || t({
                    title: s.title || "您未开启地理位置授权",
                    content: s.content || '"美团"需要获取你的位置',
                    cancelText: s.cancelText || "取消",
                    confirmText: s.confirmText || "确定",
                    confirmButtonText: s.confirmText || "确定",
                    cancelButtonText: s.cancelText || "取消",
                    success: function(t) {
                        t.confirm ? o({
                            success: function(t) {
                                t.authSetting["scope.userLocation"] ? e && e() : n && n();
                            },
                            fail: function() {
                                n && n();
                            }
                        }) : n && n();
                    }
                }), [ 2 ];
            }
        });
    });
}, Et = function(t) {
    (x || _) && (getApp({
        allowDefault: !0
    }).saas_geo_sdk_location_auth_status = t);
}, Tt = function() {
    return r(void 0, void 0, void 0, function() {
        return a(this, function(t) {
            return [ 2, new Promise(function(t) {
                _ || C || x ? i.default.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userLocation"] ? (Et(pt.USER_AUTHORIZED), t(pt.USER_AUTHORIZED)) : t(pt.USER_REFUSE_AUTH);
                    },
                    fail: function() {
                        t(pt.OTHER);
                    }
                }) : t(pt.SYS_UNAUTHORIZE);
            }) ];
        });
    });
}, bt = function(t) {
    var e = !1, n = t || {}, o = n.defaultTimeout, s = void 0 === o ? 5e3 : o, u = n.showAuthSettingDialog, l = n.userSettingAuthSuccess, c = n.userSettingAuthRefuse, d = n.authDialogConfig, f = n._mt;
    return new Promise(function(t, n) {
        return r(void 0, void 0, void 0, function() {
            var o, h;
            return a(this, function(p) {
                return o = function(t, e) {
                    return r(void 0, void 0, void 0, function() {
                        var i;
                        return a(this, function(o) {
                            switch (o.label) {
                              case 0:
                                return [ 4, Tt() ];

                              case 1:
                                return i = o.sent(), (_ || x) && i === pt.USER_REFUSE_AUTH && Et(pt.USER_REFUSE_AUTH), 
                                n({
                                    type: e ? pt.TIMEOUT : i,
                                    err: t
                                }), [ 2 ];
                            }
                        });
                    });
                }, h = function(e) {
                    !function(t) {
                        try {
                            if (!t || !t.lat || !t.lng) return;
                            x || _ || C ? (i.default.setStorageSync("saas_geo_sdk_location", Date.now() + "," + t.lat + "," + t.lng), 
                            getApp({
                                allowDefault: !0
                            }).saas_geo_sdk_location = Date.now() + "," + t.lat + "," + t.lng) : (window.localStorage.setItem("saas_geo_sdk_location", Date.now() + "," + t.lat + "," + t.lng), 
                            window.sessionStorage.setItem("saas_geo_sdk_location", Date.now() + "," + t.lat + "," + t.lng));
                        } catch (t) {}
                    }(e), t(e);
                }, _ || x || C ? i.default.getLocation({
                    _mt: f || {
                        sceneToken: "dd-05854d04ff441044"
                    },
                    type: "gcj02",
                    success: function(t) {
                        Et(pt.USER_AUTHORIZED), h({
                            lat: t.latitude,
                            lng: t.longitude,
                            latitude: t.latitude,
                            longitude: t.longitude
                        }), e && u && l && l();
                    },
                    fail: function(t) {
                        o(t), u && At({
                            userSettingAuthSuccess: l,
                            userSettingAuthRefuse: c,
                            authDialogConfig: d
                        });
                    }
                }) : T ? function(t) {
                    window.AlipayJSBridge ? t && t() : document.addEventListener("AlipayJSBridgeReady", t, !1);
                }(function() {
                    window.AlipayJSBridge.call("getLocation", {
                        requestType: 2
                    }, function(t) {
                        t.error ? o(t.error) : h({
                            lat: t.latitude,
                            lng: t.longitude,
                            latitude: t.latitude,
                            longitude: t.longitude
                        });
                    });
                }) : L ? function(t) {
                    try {
                        window.wx.ready(t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        t(e);
                    }
                }(function(t) {
                    t instanceof Error ? o(t) : window.wx.getLocation({
                        type: "gcj02",
                        success: function(t) {
                            h({
                                lat: t.latitude,
                                lng: t.longitude,
                                latitude: t.latitude,
                                longitude: t.longitude
                            });
                        },
                        fail: function(t) {
                            o(t);
                        }
                    });
                }) : window.KNB ? function(t) {
                    try {
                        window.KNB.ready(t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        t(e);
                    }
                }(function(t) {
                    t instanceof Error ? o(t) : window.KNB.getPromiseInstance().getLocation({
                        type: "gcj02"
                    }).then(function(t) {
                        h({
                            lat: t.lat,
                            lng: t.lng,
                            latitude: t.lat,
                            longitude: t.lng
                        });
                    }).catch(function(t) {
                        o(t);
                    });
                }) : i.default.getLocation ? i.default.getLocation({
                    success: function(t) {
                        var e, n, i, o;
                        h({
                            lat: Number(null === (e = null == t ? void 0 : t.coords) || void 0 === e ? void 0 : e.latitude),
                            lng: Number(null === (n = null == t ? void 0 : t.coords) || void 0 === n ? void 0 : n.longitude),
                            latitude: Number(null === (i = null == t ? void 0 : t.coords) || void 0 === i ? void 0 : i.latitude),
                            longitude: Number(null === (o = null == t ? void 0 : t.coords) || void 0 === o ? void 0 : o.longitude)
                        });
                    },
                    fail: function(t) {
                        o(t);
                    }
                }) : o(Error("获取定位失败，浏览器缺少navigator.geolocation")), s && setTimeout(function() {
                    e = !0, o(Error("定位超时"), !0);
                }, s), [ 2 ];
            });
        });
    });
}, _t = Object.freeze({
    __proto__: null,
    getCacheLocation: St,
    getLocation: function(t) {
        return r(void 0, void 0, void 0, function() {
            var e, n, i, o, r, s, u, l, c, d, f, h, p, g, v, w, m, y, P;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    n = (e = t || {}).defaultTimeout, i = void 0 === n ? 5e3 : n, o = e.showAuthSettingDialog, 
                    r = void 0 === o || o, s = e.onlyUseCacheLoc, u = void 0 !== s && s, l = e.canUsePreviousCacheTime, 
                    c = void 0 === l ? 0 : l, d = e.canUseSessionCache, f = void 0 !== d && d, h = e.userSettingAuthSuccess, 
                    p = e.userSettingAuthRefuse, g = e.authDialogConfig, v = void 0 === g ? {} : g, 
                    w = e._mt, y = Date.now(), mt("GeoCallStart", 1, {
                        callWithCache: c || f ? 1 : 0
                    }), a.label = 1;

                  case 1:
                    return a.trys.push([ 1, 5, , 6 ]), (c || f) && (m = St({
                        canUsePreviousCacheTime: c,
                        canUseSessionCache: f
                    })), m || u ? (m && m.lat ? mt("GeoCallSuccess", Date.now() - y, {
                        callSuccessType: 1
                    }) : mt("GeoCallSuccess", Date.now() - y, {
                        callSuccessType: 2
                    }), [ 2, {
                        lat: (null == m ? void 0 : m.lat) || null,
                        lng: (null == m ? void 0 : m.lng) || null,
                        latitude: (null == m ? void 0 : m.lat) || null,
                        longitude: (null == m ? void 0 : m.lng) || null
                    } ]) : _ && function() {
                        var t;
                        return x || _ ? null === (t = getApp({
                            allowDefault: !0
                        })) || void 0 === t ? void 0 : t.saas_geo_sdk_location_auth_status : "";
                    }() === pt.USER_REFUSE_AUTH ? [ 4, Tt() ] : [ 3, 3 ];

                  case 2:
                    if (a.sent() === pt.USER_REFUSE_AUTH) throw r && At({
                        userSettingAuthSuccess: h,
                        userSettingAuthRefuse: p,
                        authDialogConfig: v
                    }), mt("GeoCallFail", Date.now() - y, {
                        type: pt[pt.USER_REFUSE_AUTH]
                    }), {
                        type: pt.USER_REFUSE_AUTH,
                        e: Error("用户已拒绝授权")
                    };
                    a.label = 3;

                  case 3:
                    return [ 4, bt({
                        defaultTimeout: i,
                        showAuthSettingDialog: r,
                        userSettingAuthSuccess: h,
                        userSettingAuthRefuse: p,
                        authDialogConfig: v,
                        _mt: w
                    }) ];

                  case 4:
                    if (!(m = a.sent()).lat && S) throw mt("GeoCallFail", Date.now() - y, {
                        type: "FailWithZeroMt"
                    }), {
                        type: pt.SYS_UNAUTHORIZE,
                        e: Error("点评获取经纬度为0")
                    };
                    return mt("GeoCallSuccess", Date.now() - y, {
                        callSuccessType: 3
                    }), [ 2, m ];

                  case 5:
                    throw P = a.sent(), mt("GeoCallFail", Date.now() - y, {
                        type: pt[P.type]
                    }), {
                        type: pt[P.type],
                        err: P.err || P
                    };

                  case 6:
                    return [ 2 ];
                }
            });
        });
    }
}), It = new (function() {
    function t() {
        this.env = "production";
    }
    return t.prototype.get = function() {
        return this.env;
    }, t.prototype.set = function(t, e) {
        var n = t;
        e ? i.default.setStorageSync("rms_env", n) : n = i.default.getStorageSync("rms_env") || t, 
        this.env !== n && (this.env = n);
    }, t;
}())();

!function(t) {
    t[t.WECHAT = 1] = "WECHAT", t[t.ALIPAY = 2] = "ALIPAY", t[t.BYTEDANCE = 3] = "BYTEDANCE";
}(Pt || (Pt = {}));

var Lt = ((yt = {})[Pt.WECHAT] = "https://p0.meituan.net/travelcube/64523903b9fb594ee2958846169b0eb254524.png", 
yt[Pt.ALIPAY] = "https://p0.meituan.net/travelcube/e30b502c7d36630ce366004df47adcba30997.png", 
yt[Pt.BYTEDANCE] = "", yt[-1] = "", yt);

function Rt(t) {
    return t && t.length ? new Promise(function(e, n) {
        i.default.getSetting({
            withSubscriptions: !0,
            success: function(n) {
                n && n.subscriptionsSetting && (Object.entries(n.subscriptionsSetting).some(function(e) {
                    var n = e[0];
                    return e[1], t.includes(n);
                }) && e(!1));
                e(!0);
            },
            fail: function() {
                e(!0);
            }
        });
    }) : Promise.resolve(!1);
}

function Ct(t) {
    return t && t.length ? new Promise(function(e, n) {
        i.default.getSetting({
            withSubscriptions: !0,
            success: function(n) {
                if (n && n.subscriptionsSetting) {
                    if (!1 === n.subscriptionsSetting.mainSwitch) return void e({
                        code: -1,
                        msg: "订阅失败，请前往小程序通知管理开启接收通知选项"
                    });
                    var i = Object.entries(n.subscriptionsSetting.itemSettings || {}), o = [];
                    i.forEach(function(e) {
                        var n = e[0], i = e[1];
                        t.includes(n) && "reject" === i && o.push(n);
                    }), o.length === t.length && e({
                        code: -1,
                        msg: "订阅失败，请前往小程序通知管理开启接收通知选项"
                    });
                }
                e({
                    code: 200,
                    msg: "两种check均已通过"
                });
            },
            fail: function(t) {
                nt("getSetting执行失败", {
                    msg: JSON.stringify(t)
                }, {
                    category: "jsError"
                }), e({
                    code: 200,
                    msg: "获取setting失败，默认尝试调用"
                });
            }
        });
    }) : Promise.resolve({
        code: -1,
        msg: "没有可以订阅的模版"
    });
}

function Ot() {
    for (var t = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "p", "Q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "2", "3", "4", "5", "6", "7", "8", "9" ], e = "", n = 0; n < 60; n++) e += t[Math.floor(57 * Math.random())];
    return e;
}

var Nt = "showToast", xt = "showModal", Dt = "showActionSheet", Mt = "showLoading", Ut = function() {
    function t() {
        this.queue = [], this.isStopRun = !1, this.timer = null, this.runTimer = null, this.gloablaDuration = 0, 
        this.pushQueue = this.pushQueue.bind(this), this.showToast = this.showToast.bind(this), 
        this.showModal = this.showModal.bind(this), this.showActionSheet = this.showActionSheet.bind(this), 
        this.showLoading = this.showLoading.bind(this), this.getLoadingIndex = this.getLoadingIndex.bind(this), 
        this.hideLoading = this.hideLoading.bind(this), this.getIsShowLoading = this.getIsShowLoading.bind(this), 
        this.setShowLoading = this.setShowLoading.bind(this), this.run = this.run.bind(this), 
        this.popShow = this.popShow.bind(this), this.doShowToast = this.doShowToast.bind(this), 
        this.doShowModal = this.doShowModal.bind(this), this.doShowLoading = this.doShowLoading.bind(this);
    }
    return t.prototype.pushQueue = function(t, e, n) {
        e ? this.queue.splice(0, 0, t) : n && n > 0 ? this.queue.splice(n - 1, 0, t) : (this.queue.push(t), 
        this.run());
    }, t.prototype.showToast = function(t, e, n) {
        this.pushQueue({
            id: Ot(),
            key: Nt,
            opt: t,
            level: n || -1
        }, e, n);
    }, t.prototype.showModal = function(t, e, n) {
        this.pushQueue({
            id: Ot(),
            key: xt,
            opt: t,
            level: n || -1
        }, e, n);
    }, t.prototype.showActionSheet = function(t, e, n) {
        this.pushQueue({
            id: Ot(),
            key: Dt,
            opt: t,
            level: n || -1
        }, e, n);
    }, t.prototype.showLoading = function(t, e, n) {
        this.pushQueue({
            id: Ot(),
            key: Mt,
            opt: t,
            level: n || -1
        }, e, n);
    }, t.prototype.getLoadingIndex = function() {
        var t = this.queue, e = [];
        if (t) return t.forEach(function(t, n) {
            t && t.key === Mt && e.push(n);
        }), e;
    }, t.prototype.setDefaultLoadingFail = function(t) {
        return t && !t.fail ? o(o({}, t), {
            fail: function(t) {}
        }) : {
            fail: function(t) {}
        };
    }, t.prototype.hideLoading = function(t) {
        var e = this, n = this.getLoadingIndex(), o = this.queue;
        if (this.setIsStopRun(!0), n && (n.forEach(function(t) {
            e.queue && e.queue[t] && e.queue[t].key === Mt && o.splice(t, 1);
        }), 0 === o.length || this.getIsShowLoading())) {
            var r = this.setDefaultLoadingFail(t);
            (D || C || _) && i.default.hideLoading(r), this.setShowLoading(!1), this.setIsStopRun(!1);
        }
    }, t.prototype.setGloableDuration = function(t) {
        this.gloablaDuration = t || 0;
    }, t.prototype.run = function() {
        var t = this, e = this.queue;
        if (!(e.length < 1)) {
            if (this.isStopRun) return this.runTimer && clearInterval(this.runTimer), void (this.runTimer = setInterval(function() {
                t.run();
            }, 500));
            if (this.runTimer && clearInterval(this.runTimer), this.gloablaDuration && !this.isStopRun) {
                var n = e.shift(), i = this.getDuration(n), o = (null == n ? void 0 : n.key) === Mt ? Number(this.gloablaDuration) + 500 : this.gloablaDuration;
                if (!this.getIsShowLoading() && (null == n ? void 0 : n.key) === Mt) return;
                this.setGloableDuration(i), this.setIsStopRun(!0), this.timer && clearTimeout(this.timer), 
                this.timer = setTimeout(function() {
                    t.popShow(n), t.setIsStopRun(!1);
                }, o);
            } else if (!this.isStopRun) {
                var r = e.shift();
                i = this.getDuration(r), this.setGloableDuration(i), i > 0 && (this.setIsStopRun(!0), 
                setTimeout(function() {
                    t.setGloableDuration(0), t.setIsStopRun(!1);
                }, i)), this.popShow(r);
            }
        }
    }, t.prototype.getDuration = function(t) {
        var e, n;
        return t ? (null === (e = null == t ? void 0 : t.opt) || void 0 === e ? void 0 : e.duration) ? null === (n = null == t ? void 0 : t.opt) || void 0 === n ? void 0 : n.duration : (null == t ? void 0 : t.key) === Nt ? 1500 : null : null;
    }, t.prototype.getIsShowLoading = function() {
        return this.isShowLoading;
    }, t.prototype.setShowLoading = function(t) {
        this.isShowLoading = t;
    }, t.prototype.setIsStopRun = function(t) {
        this.isStopRun = t;
    }, t.prototype.doShowToast = function(t) {
        if (D || _ || C) try {
            i.default.showToast(t);
        } catch (t) {}
    }, t.prototype.doShowModal = function(t) {
        if (D || _ || C) try {
            i.default.showModal(t);
        } catch (t) {}
    }, t.prototype.doShowLoading = function(t) {
        if (D || _ || C) try {
            i.default.showLoading(t);
        } catch (t) {}
    }, t.prototype.popShow = function(t) {
        if (t) {
            switch (t.key) {
              case Nt:
                this.setShowLoading(!1), this.doShowToast(t.opt);
                break;

              case xt:
                this.setShowLoading(!1), this.doShowModal(t.opt);
                break;

              case Dt:
                this.setShowLoading(!1);
                try {
                    i.default && i.default.showActionSheet(t.opt);
                } catch (t) {}
                break;

              case Mt:
                this.setShowLoading(!0), this.doShowLoading(t.opt);
            }
            this.run();
        }
    }, t;
}(), Wt = null, kt = function() {
    return Wt || (Wt = new Ut()), Wt;
}, Ft = new (function() {
    function t() {
        this.accountInfo = null, this.systemInfo = null, this.systemPromise = null;
    }
    return t.prototype.getAccountInfo = function() {
        if (this.accountInfo) return this.accountInfo;
        try {
            return this.accountInfo = i.default.getAccountInfoSync(), this.accountInfo || {};
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return {};
        }
    }, t.prototype.getAppId = function() {
        var t;
        return (null === (t = this.getAccountInfo().miniProgram) || void 0 === t ? void 0 : t.appId) || "";
    }, t.prototype.getSystemInfoAsync = function() {
        var t = this;
        return this.systemPromise || (this.systemPromise = new Promise(function(e) {
            if (t.systemInfo) e(t.systemInfo); else {
                var n = {
                    success: function(n) {
                        t.systemInfo = n, e(n);
                    },
                    fail: function() {
                        t.systemPromise = null, e({});
                    }
                };
                i.default.getSystemInfoAsync ? i.default.getSystemInfoAsync(n) : i.default.getSystemInfo(n);
            }
        })), this.systemPromise;
    }, t.prototype.getSystemInfo = function() {
        if (this.systemInfo) return this.systemInfo;
        try {
            return this.systemInfo = i.default.getSystemInfoSync(), this.systemInfo || {};
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return {};
        }
    }, t.prototype.isMerchant = function() {
        switch (this.getAppId()) {
          case "wxde8ac0a21135c07d":
          case "wx1fde2c33280d64b6":
          case "wx06a469c9bcc9f1ea":
          case "2021003124677450":
          case "2021003126656384":
            return !1;

          default:
            return !0;
        }
    }, t;
}())(), jt = Object.freeze({
    __proto__: null,
    throttle: function(t, e) {
        var n = 0;
        return function() {
            var i = Date.now();
            i - n > e && (t(), n = i);
        };
    },
    multiThrottle: function(t, e, n) {
        var i, o, r, a = 0;
        n || (n = {});
        var s = function() {
            a = !1 === n.leading ? 0 : new Date().getTime(), i = null, t.apply(o, r), i || (o = null, 
            r = null);
        };
        return function() {
            var u = new Date().getTime();
            a || !1 !== n.leading || (a = u);
            var l = e - (u - a);
            o = this, r = arguments, l <= 0 || l > e ? (i && (clearTimeout(i), i = null), a = u, 
            t.apply(o, r), i || (o = null, r = null)) : i || !1 === n.trailing || (i = setTimeout(s, l));
        };
    }
}), Bt = Object.freeze({
    __proto__: null,
    filterEmojiReg: /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/gi
}), Vt = decodeURIComponent, Ht = encodeURIComponent, Yt = /; */, Gt = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Xt = function(t, e) {
    try {
        return e(t);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        return t;
    }
}, qt = Object.freeze({
    __proto__: null,
    setCookie: function(t, e, n, i, o) {
        void 0 === o && (o = "/");
        var r = new Date();
        r.setDate(r.getDate() + n), document.cookie = t + "=" + e + (null == n ? "" : ";expires=" + r.toUTCString()) + (null == i ? "" : ";domain=" + i) + "; path=" + o;
    },
    getCookie: function(t) {
        return ((document && document.cookie || "").split(";").find(function(e) {
            return e.indexOf(t) > -1;
        }) || "").split("=")[1] || "";
    },
    parse: function(t, e) {
        if (t) {
            if ("string" != typeof t) throw new TypeError("argument str must be a string");
            for (var n = {}, i = e || {}, o = t.split(Yt), r = i.decode || Vt, a = 0; a < o.length; a++) {
                var s = o[a], u = s.indexOf("=");
                if (!(u < 0)) {
                    var l = s.substr(0, u).trim(), c = s.substr(++u, s.length).trim();
                    '"' == c[0] && (c = c.slice(1, -1)), null == n[l] && (n[l] = Xt(c, r));
                }
            }
            return n;
        }
    },
    serialize: function(t, e, n) {
        var i = n || {}, o = i.encode || Ht;
        if ("function" != typeof o) throw new TypeError("option encode is invalid");
        if (!Gt.test(t)) throw new TypeError("argument name is invalid");
        var r = o(e);
        if (r && !Gt.test(r)) throw new TypeError("argument val is invalid");
        var a = t + "=" + r;
        if (null != i.maxAge) {
            var s = i.maxAge - 0;
            if (isNaN(s)) throw Error("maxAge should be a Number");
            a += "; Max-Age=" + Math.floor(s);
        }
        if (i.domain) {
            if (!Gt.test(i.domain)) throw new TypeError("option domain is invalid");
            a += "; Domain=" + i.domain;
        }
        if (i.path) {
            if (!Gt.test(i.path)) throw new TypeError("option path is invalid");
            a += "; Path=" + i.path;
        }
        if (i.expires) {
            if ("function" != typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
            a += "; Expires=" + i.expires.toUTCString();
        }
        if (i.httpOnly && (a += "; HttpOnly"), i.secure && (a += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
          case !0:
            a += "; SameSite=Strict";
            break;

          case "lax":
            a += "; SameSite=Lax";
            break;

          case "strict":
            a += "; SameSite=Strict";
            break;

          default:
            throw new TypeError("option sameSite is invalid");
        }
        return a;
    }
});

function Jt(t, e) {
    try {
        if (0 === t) return t;
        var n = t.toString().split("."), i = n[0].length, o = n[1] ? n[1].length : 0;
        if (void 0 === e) return parseFloat(n[0] + n[1]);
        if (0 === e) return t;
        if (e > 0) for (var r = e - o; r > 0; ) r -= 1, n.push(0); else for (r = Math.abs(e) - i; r > 0; ) r -= 1, 
        n.unshift(0);
        var a = i + e;
        return (n = n.join("").split("")).splice(a > 0 ? a : 0, 0, "."), parseFloat(n.join(""));
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return 0;
    }
}

function Qt(t) {
    try {
        return Math.floor(t) === t ? 0 : t.toString().split(".")[1].length;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return 0;
    }
}

function zt(t, e) {
    return void 0 === e && (e = 15), +parseFloat(Number(t).toPrecision(e));
}

function Zt(t) {
    var e = t.toString().split(/[eE]/), n = (e[0].split(".")[1] || "").length - +(e[1] || 0);
    return n > 0 ? n : 0;
}

function $t(t) {
    if (-1 === t.toString().indexOf("e")) return Number(t.toString().replace(".", ""));
    var e = Zt(t);
    return e > 0 ? zt(Number(t) * Math.pow(10, e)) : Number(t);
}

function Kt(t) {
    return function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var i = e[0];
        return e.slice(1).reduce(function(e, n) {
            return t(e, n);
        }, i);
    };
}

var te = Kt(function(t, e) {
    var n = $t(t), i = $t(e), o = Zt(t) + Zt(e);
    return n * i / Math.pow(10, o);
}), ee = Kt(function(t, e) {
    var n = $t(t), i = $t(e);
    return te(n / i, zt(Math.pow(10, Zt(e) - Zt(t))));
}), ne = Object.freeze({
    __proto__: null,
    scaleNum: Jt,
    minusFloat: function(t, e) {
        var n = Qt(t), i = Qt(e), o = Math.max(n, i), r = Math.pow(10, o);
        return (Jt(t, o) - Jt(e, o)) / r;
    },
    roundFloat: function(t, e) {
        return Math.round(Jt(t, e)) / Math.pow(10, e);
    },
    plusFloat: function(t, e) {
        var n = Qt(t), i = Qt(e), o = Math.max(n, i), r = Math.pow(10, o);
        return (Jt(t, o) + Jt(e, o)) / r;
    },
    multiFloat: function(t, e) {
        var n = Number(t.toString().replace(".", "")), i = Number(e.toString().replace(".", "")), o = Qt(t) + Qt(e);
        return n * i / Math.pow(10, o);
    },
    priceNumValid: function(t) {
        return !!t || 0 === t;
    },
    divide: ee
}), ie = Object.freeze({
    __proto__: null,
    flatDeep: function t(e, n) {
        return n > 0 ? e.reduce(function(e, i) {
            return e.concat(Array.isArray(i) ? t(i, n - 1) : i);
        }, []) : e.slice();
    },
    findLastIndex: function(t, e, n) {
        if (!Array.isArray(t)) return -1;
        for (var i = t.length - 1; i >= 0; i--) if (e.call(n, t[i], i, t)) return i;
        return -1;
    }
}), oe = Object.freeze({
    __proto__: null,
    get: function(t, e, n) {
        return void 0 === n && (n = null), t.reduce(function(t, e) {
            return t && t[e] ? t[e] : null;
        }, e) || n;
    },
    getIn: function(t, e, n) {
        void 0 === n && (n = void 0);
        var i = e.reduce(function(t, e) {
            return t && void 0 !== t[e] ? t[e] : void 0;
        }, t);
        return void 0 !== i ? i : n;
    },
    isEmptyObject: function(t) {
        return t && 0 === Object.keys(t).length;
    },
    isNullOrUndefined: function(t) {
        return null == t;
    },
    removeInvalidValue: function(t) {
        return Object.keys(t).forEach(function(e) {
            return (null === t[e] || void 0 === t[e] || "undefined" === t[e]) && delete t[e];
        }), t;
    },
    filterMap: function(t, e) {
        return Object.keys(t).filter(function(n) {
            return e(n, t[n]);
        }).reduce(function(e, n) {
            return e[n] = t[n], e;
        }, {});
    }
}), re = o(o(o(o(o(o(o(o(o(o(o({
    compareVersion: function(t, e) {
        if (!t || !e) return f.VERSION_UNDEFINE;
        for (var n = t.split("."), i = e.split("."), o = Math.max(n.length, i.length); n.length < o; ) n.push("0");
        for (;i.length < o; ) i.push("0");
        for (var r = 0; r < o; r++) {
            var a = parseInt(n[r], 10), s = parseInt(i[r], 10);
            if (a > s) return f.VERSION_GREATER;
            if (a < s) return f.VERSION_FEWER;
            if (a === s && r === o - 1) return f.VERSION_EQUAL;
        }
        return f.VERSION_UNDEFINE;
    },
    PLATFORM_TYPE: u,
    APP_VERSION_TYPE: l,
    ID_TYPE: c
}, g), W), _t), wt), jt), $), Bt), ne), ie), oe), {
    Reporter: function(t) {
        return et || (et = new K(t)), et;
    },
    SubPage: function(t, e) {
        e && "function" == typeof e && e();
        var n = t.onLoad, i = t.onShow;
        return t.onLoad = function(t) {
            n && n.call(this, t);
        }, t.onShow = function(t) {
            i && i.call(this, t);
        }, t;
    },
    Page: function(t) {
        function e(e, n, i) {
            return t.apply(this, arguments);
        }
        return e.toString = function() {
            return t.toString();
        }, e;
    }(function(t, e, n) {
        void 0 === n && (n = Page), et && function(t, e, n) {
            void 0 === n && (n = Page);
            var i = t.reporter, o = i.sendInfo, s = void 0 === o ? function() {} : o, u = i.sendSavedInfo, l = i.wxOwl, c = e.onLoad, d = e.onShow, f = e.onReady, h = e.onHide, p = e.onUnload, g = e.onPullDownRefresh, v = t.plugins || {};
            v && v.beforeAll && v.beforeAll(), e.basePageConfigs = {
                isLoadSuccessSend: !1,
                loadCondition: [],
                loadStartTime: 0,
                pageRouteStartTime: 0,
                fmpTimeMap: {},
                isCustomFmpSend: !1
            }, e._sendLoad = function(t) {
                var e;
                this.basePageConfigs.isLoadSuccessSend || this.basePageConfigs.loadCondition.length > 0 || (this.basePageConfigs.isLoadSuccessSend = !0, 
                null === (e = null == l ? void 0 : l.resource) || void 0 === e || e.addApi({
                    name: "LoadSuccessRate-" + this.route,
                    networkCode: 200,
                    statusCode: t,
                    responseTime: Date.now() - this.basePageConfigs.loadStartTime
                }));
            }, e._setFmpCondition = function(t, e) {
                var n;
                void 0 === t && (t = []), void 0 === e && (e = 1), 0 === t.length && (t = [ this.route ]), 
                this.basePageConfigs.loadCondition = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var i = Array(t), o = 0;
                    for (e = 0; e < n; e++) for (var r = arguments[e], a = 0, s = r.length; a < s; a++, 
                    o++) i[o] = r[a];
                    return i;
                }(t), null === (n = null == l ? void 0 : l.pageSpeed) || void 0 === n || n.createFirstContentfulPaint(t, e);
            }, e._setCustomFmpCondition = function() {
                var t = this;
                this.basePageConfigs.loadCondition.forEach(function(e) {
                    t.basePageConfigs.fmpTimeMap[e] = 0;
                });
            }, e._addCustomFmpCondition = function(t) {
                this.basePageConfigs.fmpTimeMap[t] = Date.now();
            }, e._calPageFmpEndTime = function() {
                var t = Object.values(this.basePageConfigs.fmpTimeMap);
                return Math.max.apply(Math, t);
            }, e._reportCustomFmp = function() {
                var e = this;
                try {
                    if (this.basePageConfigs.isCustomFmpSend) return;
                    this.basePageConfigs.isCustomFmpSend = !0;
                    var n = getApp().report.routePerfList && getApp().report.routePerfList.filter(function(t) {
                        return t.path === e.route;
                    }).slice(-1);
                    n && n[0] && (this.basePageConfigs.pageRouteStartTime = n[0].startTime, this._reportPageRouteTime(), 
                    this._reportPageFmpTime()), this._reportPageLaunchTime();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    z(t, e, "reportCustomFmp-catch-jsError");
                }
            }, e._reportPageRouteTime = function() {
                var t;
                null === (t = null == l ? void 0 : l.pageSpeed) || void 0 === t || t.addPoint({
                    position: 28,
                    duration: this.basePageConfigs.loadStartTime - this.basePageConfigs.pageRouteStartTime
                });
            }, e._reportPageFmpTime = function() {
                var t;
                if (!(this.basePageConfigs.loadCondition.length > 0)) {
                    var e = this._calPageFmpEndTime();
                    e > 0 && (null === (t = null == l ? void 0 : l.pageSpeed) || void 0 === t || t.addPoint({
                        position: 29,
                        duration: e - this.basePageConfigs.pageRouteStartTime
                    }));
                }
            }, e._reportPageLaunchTime = function() {
                var t, e, n = getApp();
                if (n.report.launchStartTime && !(this.basePageConfigs.loadCondition.length > 0)) {
                    var i = this._calPageFmpEndTime();
                    i > 0 && !n.report.appDirectLaunchRoute.includes("splash") && n.report.appDirectLaunchRoute === this.route && (null === (t = null == l ? void 0 : l.pageSpeed) || void 0 === t || t.addPoint({
                        position: 26,
                        duration: i - n.report.launchStartTime
                    }), n.report.launchStartTime = 0), i > 0 && n.report.appRedirectLaunchRoute === this.route && (null === (e = null == l ? void 0 : l.pageSpeed) || void 0 === e || e.addPoint({
                        position: 27,
                        duration: i - n.report.launchStartTime
                    }), n.report.launchStartTime = 0);
                }
            }, e.loadFail = function(t) {
                this.basePageConfigs.loadCondition = [], this._sendLoad(t);
            }, e.loadSuccess = function(t) {
                var e;
                t || (t = this.route);
                var n = this.basePageConfigs.loadCondition.indexOf(t);
                -1 !== n && (this.basePageConfigs.loadCondition.splice(n, 1), null === (e = null == l ? void 0 : l.pageSpeed) || void 0 === e || e.addFirstContentfulPaint(t), 
                this._addCustomFmpCondition(t), this._sendLoad(q));
            }, e.onLoad = function(n) {
                var i;
                return r(this, void 0, void 0, function() {
                    var o, r, u, d, f, h;
                    return a(this, function(a) {
                        switch (a.label) {
                          case 0:
                            try {
                                v.onLoad && v.onLoad(n);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                z(t, e, "onLoad-plugin-jsError");
                            }
                            s({
                                name: "onLoad",
                                content: {
                                    options: n
                                }
                            }), a.label = 1;

                          case 1:
                            return a.trys.push([ 1, 4, , 5 ]), this.basePageConfigs.loadStartTime = Date.now(), 
                            e.defineFmpCondition ? (o = e.defineFmpCondition.call(this), r = o.conditions, u = o.point, 
                            this._setFmpCondition(r, u)) : this._setFmpCondition(), this._setCustomFmpCondition(), 
                            (d = c && c.call(this, n)) && d.then ? [ 4, d ] : [ 3, 3 ];

                          case 2:
                            a.sent(), a.label = 3;

                          case 3:
                            return [ 3, 5 ];

                          case 4:
                            return f = a.sent(), this.loadFail(J), h = f, null === (i = null == l ? void 0 : l.error) || void 0 === i || i.pushError({
                                sec_category: "!!onLoad流程jserror!!-" + (h.message || h.name || h.errMsg || ""),
                                content: h.stack || h.message || h.errMsg || "",
                                category: "jsError",
                                level: "error",
                                tags: {}
                            }, !0), [ 3, 5 ];

                          case 5:
                            return [ 2 ];
                        }
                    });
                });
            }, e.onShow = function() {
                try {
                    v.onShow && v.onShow.call(this);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    z(t, e, "onShow-plugin-jsError");
                }
                s({
                    name: "onShow"
                }), d && d.call(this);
            }, e.onReady = function(e) {
                try {
                    v.onReady && v.onReady(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    z(t, e, "onReady-plugin-jsError");
                }
                s({
                    name: "onReady",
                    content: {
                        options: e
                    }
                }), f && f.call(this, e);
            }, e.onHide = function(e) {
                try {
                    v.onHide && v.onHide.call(this);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    z(t, e, "onHide-plugin-jsError");
                }
                s({
                    name: "onHide",
                    content: {
                        options: e
                    }
                }, !1, !0), u && u(), this._reportCustomFmp(), h && h.call(this, e);
            }, e.onUnload = function(e) {
                try {
                    v.onUnload && v.onUnload();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    z(t, e, "onUnload-plugin-jsError");
                }
                s({
                    name: "onUnload",
                    content: {
                        options: e
                    }
                }, !1, !0), this._reportCustomFmp(), p && p.call(this, e), this.loadFail(Q);
            }, e.onPullDownRefresh = function(e) {
                try {
                    v.onUnload && v.onUnload();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    z(t, e, "onPullDownRefresh-onUnload-plugin-jsError");
                }
                s({
                    name: "onPullDownRefresh",
                    content: {
                        options: e
                    }
                }), g && g.call(this, e);
            }, n(e);
        }({
            owl: (null == et ? void 0 : et.wxOwl) || {
                pageSpeed: null,
                pvManager: null,
                error: null,
                resource: null,
                logManager: null,
                metricV2: null,
                cfgManager: null
            },
            reporter: et,
            plugins: e
        }, t, n);
    }),
    showToast: kt().showToast,
    showModal: kt().showModal,
    showLoading: kt().showLoading,
    hideLoading: kt().hideLoading,
    showActionSheet: kt().showActionSheet,
    Cookie: o({}, qt),
    MPInfo: Ft,
    MPEnv: It,
    preload: k,
    requestSubscribeMessage: function(t) {
        return r(this, void 0, void 0, function() {
            var e, n, r, s, u, l, c, d, f, h, p, g, v, w, m;
            return a(this, function(a) {
                switch (a.label) {
                  case 0:
                    if (n = (e = t || {}).tmplIds, r = e.success, s = e.fail, u = e.complete, l = e.showPrompt, 
                    c = void 0 === l || l, d = e.explicit, f = void 0 !== d && d, h = D ? Pt.WECHAT : _ ? Pt.ALIPAY : C ? Pt.BYTEDANCE : -1, 
                    p = Lt[h], -1 === h) return s && s({
                        error: -1,
                        errorMessage: "method not supported"
                    }), u && u(), [ 2 ];
                    if (g = {
                        tmplIds: n,
                        success: r,
                        fail: s,
                        complete: u
                    }, h === Pt.ALIPAY && (v = It.get(), g.thirdTypeAppId = "production" === v ? "2021003124669044" : "2021003174631352"), 
                    !f) return [ 3, 4 ];
                    a.label = 1;

                  case 1:
                    return a.trys.push([ 1, 3, , 4 ]), [ 4, Ct(n) ];

                  case 2:
                    return -1 === (w = a.sent()).code ? (i.default.showToast({
                        icon: "none",
                        title: w.msg,
                        duration: 2500
                    }), s && s({
                        error: -1,
                        errorMessage: w.msg
                    }), [ 2 ]) : [ 3, 4 ];

                  case 3:
                    return m = a.sent(), s && s({
                        error: -1,
                        errorMessage: JSON.stringify(m)
                    }), nt("检查订阅设置失败", {
                        msg: JSON.stringify(m)
                    }, {
                        category: "jsError"
                    }), [ 2 ];

                  case 4:
                    return a.trys.push([ 4, 7, , 8 ]), c && h !== Pt.ALIPAY ? [ 4, Rt(n) ] : [ 3, 6 ];

                  case 5:
                    a.sent() && i.default.showDialog("subscription-prompt", {
                        platform: h,
                        promptSrc: p
                    }, {
                        position: "top"
                    }), a.label = 6;

                  case 6:
                    return i.default.requestSubscribeMessage(o(o({}, g), {
                        success: function(t) {
                            h === Pt.ALIPAY && t.show && c && i.default.showDialog("subscription-prompt", {
                                platform: h,
                                promptSrc: p
                            }, {
                                position: "top"
                            });
                            var e = function(t, e) {
                                var n, i, o = {};
                                if (!t) return {};
                                switch (e) {
                                  case Pt.WECHAT:
                                    return o = t;

                                  case Pt.ALIPAY:
                                    return null === (n = null == t ? void 0 : t.result) || void 0 === n || n.subscribedEntityIds.forEach(function(t) {
                                        o[t] = "accept";
                                    }), null === (i = null == t ? void 0 : t.result) || void 0 === i || i.unsubscribedEntityIds.forEach(function(t) {
                                        o[t] = "reject";
                                    }), o;

                                  default:
                                    return {};
                                }
                            }(t, h);
                            r && r(e);
                        },
                        fail: function(t) {
                            nt("订阅唤起失败", {
                                msg: JSON.stringify(t)
                            }), s && s(t);
                        },
                        complete: function() {
                            u && u(), i.default.closeDialog("subscription-prompt");
                        }
                    })), [ 3, 8 ];

                  case 7:
                    return a.sent(), s && s({
                        error: -1,
                        errorMessage: "check getSetting failed"
                    }), u && u(), [ 3, 8 ];

                  case 8:
                    return [ 2 ];
                }
            });
        });
    }
});

exports.default = re;