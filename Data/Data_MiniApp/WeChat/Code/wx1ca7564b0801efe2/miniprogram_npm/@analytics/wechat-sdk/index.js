require("../../../b/helpers/Arrayincludes");

var t = require("../../../b/helpers/typeof");

function e(n) {
    return (e = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
        return t(e);
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
    })(n);
}

function n(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

function r(t, e) {
    var n, r = Object.keys(t);
    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r.push.apply(r, n)), r;
}

function i(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? r(Object(i), !0).forEach(function(e) {
            n(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
    }
    return t;
}

function a(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [], r = !0, i = !1, a = void 0;
            try {
                for (var o, c = t[Symbol.iterator](); !(r = (o = c.next()).done) && (n.push(o.value), 
                !e || n.length !== e); r = !0) ;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                i = !0, a = t;
            } finally {
                try {
                    r || null == c.return || c.return();
                } finally {
                    if (i) throw a;
                }
            }
            return n;
        }
    }(t, e) || function(t, e) {
        if (t) {
            if ("string" == typeof t) return o(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
        }
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function o(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
}

var c, u, s = "undefined", l = !1;

("undefined" == typeof mmp ? "undefined" : e(mmp)) !== s ? (c = mmp, u = "MT", l = !0) : u = ("undefined" == typeof swan ? "undefined" : e(swan)) !== s ? (c = swan, 
"Baidu") : ("undefined" == typeof tt ? "undefined" : e(tt)) !== s ? (c = tt, "TouTiao") : ("undefined" == typeof ks ? "undefined" : e(ks)) !== s ? (c = ks, 
"KuaiShou") : ("undefined" == typeof my ? "undefined" : e(my)) !== s ? (c = my, 
"AliPay") : (c = wx, "WX");

var f = {
    autoUTM: !0,
    autoASAQ: !1,
    hasAS: !1,
    hasAQ: !1
}, d = void 0, p = (Q = Object.prototype).toString, h = Q.hasOwnProperty, v = "_lx_sdk_";

function g(t, n) {
    return e(t) === n;
}

function m(t) {
    return g(t, "function");
}

function y(t) {
    return g(t, "number");
}

function _(t) {
    return t && g(t, "string");
}

function x(t) {
    return t && "[object Object]" === p.call(t);
}

function S() {
    return +new Date();
}

var b = Array.isArray || function(t) {
    return "[object Array]" === p.call(t);
};

function w(t) {
    if (t) {
        var e = t.length;
        return b(t) || t && y(e) && 0 <= e && (!x(t) || !(1 < e) || e - 1 in t);
    }
}

function T(t, e, n) {
    var r, i, a;
    if (t) if (w(t)) for (i = 0, a = t.length; i < a && !1 !== e.call(n, t[i], i, t); i++) ; else for (r in t) if (h.call(t, r) && !1 === e.call(n, t[r], r, t)) break;
}

function A(t, e, n) {
    var r, i = !0 === t;
    return i || (n = e, e = t), e && x(e) || (e = {}), n && x(n) || (n = {}), T(n, function(t, a) {
        i && x(n[a]) ? (r = x(e[a]) ? e[a] = e[a] || {} : e[a] = {}, A(i, r, n[a])) : e[a] = n[a];
    }), e;
}

function k(t, e, n) {
    var r = [];
    return w(t) && T(t, function(t) {
        r.push(e ? e.call(n, t) : t);
    }, n), r;
}

function C() {
    return Math.ceil(65535 * Math.random()).toString(16);
}

function O() {
    var t = k(arguments);
    t.unshift("[LX SDK]");
}

function P() {
    var t = k(arguments);
    t.unshift("[LX SDK]");
}

function D(t) {
    throw new Error("灵犀SDK: " + t);
}

function j() {
    return S().toString(16) + "-" + C() + "-" + C();
}

function M(t) {
    t = v + t;
    try {
        return "AliPay" === u ? c.getStorageSync({
            key: t
        }).data : c.getStorageSync(t);
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return O("getStorageSync error :", t), d;
    }
}

var E = v + "commonData", I = {}, q = !1;

function L() {
    var t;
    return q || (t = getApp({
        allowDefault: !0
    })) && (t[E] = t[E] || {}, A(t[E], I), I = t[E], q = !0), I;
}

function N(t) {
    var e = L();
    return t ? e[t] || "" : e;
}

function U(t, e, n) {
    var r = L();
    r[t] = e, n || (r._dirty = !0);
}

function R(t) {
    var e = L();
    e[t] && "tag" == t ? e[t] = [ {} ] : e[t] = d;
}

function V(t, e) {
    t = v + t;
    try {
        "AliPay" === u ? c.setStorageSync({
            key: t,
            data: e
        }) : c.setStorageSync(t, e);
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return O("setStorageSync error :", t), d;
    }
}

function B(t) {
    t = v + t;
    try {
        "AliPay" === u ? c.removeStorageSync({
            key: t
        }) : c.removeStorageSync(t);
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        return O("removeStorageSync error :", t), d;
    }
}

function J(t) {
    var e = Math;
    return e.ceil(e.min(1e3 * (.5 + e.random()) * e.pow(2, t), 15e3));
}

var W = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(t) {
        var e, n, r, i, a, o, c = "", u = 0;
        for (t = W._utf8_encode(t); u < t.length; ) r = (o = t.charCodeAt(u++)) >> 2, i = (3 & o) << 4 | (e = t.charCodeAt(u++)) >> 4, 
        a = (15 & e) << 2 | (n = t.charCodeAt(u++)) >> 6, o = 63 & n, isNaN(e) ? a = o = 64 : isNaN(n) && (o = 64), 
        c = c + this._keyStr.charAt(r) + this._keyStr.charAt(i) + this._keyStr.charAt(a) + this._keyStr.charAt(o);
        return c;
    },
    decode: function(t) {
        var e, n, r, i, a, o = "", c = 0;
        for (t = t.replace(/[^A-Za-z0-9+/=]/g, ""); c < t.length; ) e = this._keyStr.indexOf(t.charAt(c++)) << 2 | (r = this._keyStr.indexOf(t.charAt(c++))) >> 4, 
        n = (15 & r) << 4 | (i = this._keyStr.indexOf(t.charAt(c++))) >> 2, r = (3 & i) << 6 | (a = this._keyStr.indexOf(t.charAt(c++))), 
        o += String.fromCharCode(e), 64 != i && (o += String.fromCharCode(n)), 64 != a && (o += String.fromCharCode(r));
        return W._utf8_decode(o);
    },
    _utf8_encode: function(t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n);
            r < 128 ? e += String.fromCharCode(r) : (127 < r && r < 2048 ? e += String.fromCharCode(r >> 6 | 192) : (e += String.fromCharCode(r >> 12 | 224), 
            e += String.fromCharCode(r >> 6 & 63 | 128)), e += String.fromCharCode(63 & r | 128));
        }
        return e;
    },
    _utf8_decode: function(t) {
        for (var e, n, r = "", i = 0, a = 0; i < t.length; ) (e = t.charCodeAt(i)) < 128 ? (r += String.fromCharCode(e), 
        i++) : 191 < e && e < 224 ? (a = t.charCodeAt(i + 1), r += String.fromCharCode((31 & e) << 6 | 63 & a), 
        i += 2) : (a = t.charCodeAt(i + 1), n = t.charCodeAt(i + 2), r += String.fromCharCode((15 & e) << 12 | (63 & a) << 6 | 63 & n), 
        i += 3);
        return r;
    },
    safeUrlEncode: function(t) {
        return t.replace(/=/g, ".").replace(/\+/g, "*").replace(/\//g, "_");
    },
    safeUrlDecode: function(t) {
        return t.replace(/\./g, "=").replace(/\*/g, "+").replace(/_/g, "/");
    }
};

function X(t, e) {
    try {
        return JSON.parse(t);
    } catch (n) {
        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
        return e ? t : d;
    }
}

var Q, F = {
    hasBuiltRTTEnv: !1,
    nativeReport: !1
};

(Q = (s = function() {
    this.event = {}, this.maxListerners = 10;
}).prototype).on = function(t, e) {
    this.event[t] ? this.event[t].length >= this.maxListerners || this.event[t].push(e) : this.event[t] = [ e ];
}, Q.emit = function(t) {
    for (var e = this, n = arguments.length, r = new Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    this.event[t] && this.event[t].map(function(t) {
        return t.apply(e, r);
    });
}, Q.removeListener = function(t) {
    this.event[t] && delete this.event[t];
}, Q.removeAllListener = function() {
    this.event = {};
};

var K = new s(), $ = "AS", H = "AQ", z = "PV", G = "PD", Z = "BO", Y = "BP", et = "MVL", nt = "pageView", rt = "pageDisappear", it = "moduleView", at = "systemCheck", ot = "moduleClick", ct = "moduleEdit", ut = "order", st = "moduleViewList", lt = "onShow", ft = "onHide", dt = "onUnload", pt = "onLoad", ht = "onLaunch", vt = "category", gt = "rtt_env", mt = "rtt_env", yt = "utm", _t = "utm_source", xt = "data_sdk_", St = "sdk_env", bt = "online", wt = "offline", Tt = "_lx_validcode", At = "tag", kt = "ntag", Ct = "app_session", Ot = "lch", Pt = "globalManualReport", Dt = "msid", jt = "lx_inner_data", Mt = "lastEventTimestamp", Et = "val_cid", It = "req_id", qt = "initState", Lt = setTimeout, Nt = clearTimeout, Ut = "block_list", Rt = [], Vt = !1, Bt = !!(N(At) || []).length, Jt = function(t) {
    x(t) ? U(kt, t) : _(t) && U(kt, X(t, !0));
}, Wt = {
    ctx: d,
    setCurrentCtx: function(t) {
        this.ctx = t;
    },
    push: function(t) {
        var e, r, i = t.ctx, a = t.key, o = t.val, c = (i = i || this.ctx, N(At) || []);
        if (0 <= (t = c.findIndex(function(t) {
            return t.ctx === i;
        })) && (e = c[t]), e) {
            if (!a || !o) return;
            if (r = e.tag || {}, x(o)) for (var u in r[a] = r[a] || {}, o) r[a][u] = o[u];
            e.tag = r;
        } else a && o && (r = n({}, a, o)), e = {
            ctx: i,
            tag: r
        }, c.push(e);
        Bt = !0, U(At, c);
    },
    back: function(t) {
        var e = N(At) || [], n = (r = e.findIndex(function(e) {
            return e.ctx === t;
        })) <= 0 ? -1 : 1 == r ? r - 1 : r - 2, r = (null === (r = e[n]) || void 0 === r || r.ctx, 
        e[n]);
        n < 0 && e.length && e.pop(), 0 <= n && (Bt = !0, e.splice(n, e.length - n), e.push(r)), 
        e.length || e.push({}), U(At, e);
    },
    get: function(t) {
        var e = this.getAll();
        return _(t) ? e[t] : e;
    },
    getAll: function() {
        var t, e, n = N(At) || [];
        n = Bt ? Rt = n.length ? (e = !(t = {}), T(n, function(n) {
            (n = n.tag) && (t = A(e = !0, t, n));
        }), e ? t : d) : d : Rt;
        return Vt ? n : function(t, e) {
            for (var n in e) x(t[n]) ? A(!0, t[n], e[n]) : t[n] = e[n];
            return t;
        }(A(!0, {}, N(kt)), n);
    },
    clear: function() {
        R(At), R(kt), Vt = !0;
    }
}, Xt = {
    hasMMPInternalLX: Qt(),
    tryNative: function() {
        return Xt.toNative("cmd").then(function(t) {
            return Promise.resolve(t.code <= 400);
        });
    },
    toNative: function(t, e) {
        return t ? new Promise(function(n) {
            Xt.hasMMPInternalLX ? (Xt.internalLX = Xt.internalLX || requirePrivate("lx"), "cmd" !== t ? Xt.internalLX.requireUpdate({
                method: t
            }, function(t) {
                var e = t["mmp.status"], r = t.code;
                if ("success" !== e || 200 !== r) return n({
                    code: 400
                });
                n({
                    data: t.data,
                    code: 200
                });
            }) : Xt.internalLX.requireCMD(e || {}, function(t, e) {
                n(t);
            })) : n({
                code: 400
            });
        }) : Promise.resolve({
            code: 400
        });
    }
};

function Qt() {
    if (c._lx_usingOldMMP) return !1;
    if ("undefined" == typeof mmp || "undefined" == typeof requirePrivate) return !1;
    var t = requirePrivate("lx");
    return t && t.requireUpdate;
}

var Ft, Kt = null, $t = [], Ht = "send_cache_data", zt = "https://report.meituan.com/?_lxsdk=1", Gt = d, Zt = [], Yt = [], te = {}, ee = null, ne = {}, re = [], ie = !1;

function ae(t, e) {
    t === et ? e <= 3 ? Lt(function() {
        ce(Yt, t, e);
    }, J(++e)) : (Yt = [], clearTimeout(ee), ee = null, le(et)) : e <= 3 ? Lt(function() {
        T($t, function(t) {
            T(t.evs, function(t) {
                var e = t[jt];
                e && ((e = t[jt] = JSON.parse(JSON.stringify(e))).isRetry = !0);
            });
        }), ce($t, t, e);
    }, J(++e)) : (t === H && (B(Ht), clearTimeout(ee), ee = null), $t = [], Kt = null, 
    de() && le());
}

function oe(t) {
    var e = t.url, n = t.data, r = t.success, i = t.fail;
    c.request({
        method: "POST",
        url: e,
        data: n,
        success: function(t) {
            (t = t.statusCode || t.status) < 400 ? r && r() : i(t);
        },
        fail: function() {
            i(0);
        }
    });
}

function ce(t, e, n) {
    var r;
    t && t.length && ($t = [].concat(t)).length && ((r = $t[$t.length - 1].evs) && r.length || $t.pop(), 
    b($t) && t.length && (t = JSON.stringify($t), oe({
        url: zt,
        data: t,
        success: function() {
            !function(t) {
                if (t === et) return clearTimeout(ee), ee = null, Yt = [], le(et);
                t === H && (clearTimeout(ee), ee = null, B(Ht)), Kt = null, de() && le();
            }(e);
        },
        fail: function() {
            ae(e, n || 0), he("report.js", "wx-request-fail", "report fail");
        }
    }), Zt = [], pe()));
}

function ue() {
    var t;
    Nt(Ft), re.length && (ie || (t = function(t) {
        try {
            var e, n = [];
            return T(t, function(t) {
                var r = t.evs;
                delete t.evs;
                var i, a = JSON.stringify(t);
                a === e ? (i = n.length - 1, n[i].evs = (n[i].evs || []).concat(r)) : (t.evs = r, 
                n.push(t), e = a);
            }), n;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return he(loc.href, "", "", e.stack || e.message), t;
        }
    }(re), ie = !0, oe({
        url: zt,
        data: JSON.stringify(t),
        success: function() {
            ie = !(re = []);
        },
        fail: function() {
            ae(eventType, retryTime || 0), he("report.js", "wx-request-manualData-fail", "report fail"), 
            ie = !1;
        }
    })));
}

function se() {
    var t = new Date();
    return t.setHours(23), t.setMinutes(59), t.setSeconds(59), t.setMilliseconds(999), 
    t;
}

function le(t) {
    t !== et ? Kt = Lt(function() {
        return de() ? void ce(Zt) : (clearTimeout(Kt), void (Kt = null));
    }, 500) : ee = Lt(function() {
        var t = fe();
        t.length && (Yt = Yt.concat(t)), Yt.length ? ce(Yt, et) : (clearTimeout(ee), ee = null);
    }, 5e3);
}

function fe() {
    var t = {}, e = [];
    return T(te, function(e, n) {
        var r, i = e.category;
        e.evs, e.mvlId, t[i] || ((r = A(!0, {
            evs: []
        }, je(null, !0)))[vt] = xt + i, r[gt] && (r[gt][vt] = r[vt]), t[i] = r), t[i].evs.push(e.evs);
    }), T(t, function(t) {
        e.push(t);
    }), te = {}, e;
}

function de() {
    return Zt.length && Zt[0] && Zt[0].evs && Zt[0].evs.length;
}

function pe() {
    var t = A(!0, {}, je(null, !0));
    t.evs = [], Zt.length && 0 === (Zt[Zt.length - 1].evs || []).length ? Zt[Zt.length - 1] = t : Zt.push(t);
}

function he(t, e, r, i) {
    if (ne.url) try {
        var a = "app.js";
        (o = getCurrentPages()).length && o[o.length - 1] && (a = o[o.length - 1].__route__);
        var o = [ {
            project: "com.sankuai.analytics." + ("MT" == u ? "mmp" : "WX" == u ? "wxmp" : ""),
            pageUrl: a,
            resourceUrl: t,
            category: i ? "jsError" : "ajaxError",
            sec_category: e || "",
            level: "error",
            unionId: je("lxcuid"),
            timestamp: S(),
            content: "" + r || ""
        } ];
        a = "AliPay" === u ? "headers" : "header";
        c.request((n(o = {
            method: "POST",
            url: ne.url,
            data: "c=".concat(encodeURIComponent(JSON.stringify(o)))
        }, a, {
            "content-type": "application/x-www-form-urlencoded"
        }), n(o, "success", function() {}), n(o, "fail", function(t) {
            O("cat report error:", t);
        }), o));
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        O("reportError error:", t);
    }
}

function ve() {
    var t;
    if (ne.initUrl = "https://catfront.dianping.com/api/metric?", t = 100, 100 === Math.ceil(100 * Math.random())) try {
        var e = "MT" == u ? "mmp" : "WX" == u ? "wxmp" : "", r = {
            kvs: {
                initTimes: [ 1 ]
            },
            tags: {},
            ts: parseInt(new Date().getTime() / 1e3)
        }, i = "AliPay" === u ? "headers" : "header";
        c.request((n(r = {
            method: "POST",
            url: ne.initUrl + "p=".concat("com.sankuai.analytics." + e, "&v=1"),
            data: "data=".concat(encodeURIComponent(JSON.stringify(r)))
        }, i, {
            "content-type": "application/x-www-form-urlencoded"
        }), n(r, "success", function() {}), n(r, "fail", function(t) {
            O("cat report error:", t);
        }), r));
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        O("reportError error:", t);
    }
}

var ge = Xt.toNative, me = [ "category", Tt ], ye = {
    sdk_ver: "3.4.4",
    ch: "weixin",
    lch: "wx",
    rtt: "mp"
};

ye.lxcuid = function(t) {
    var e = M("lxcuid");
    if (e) return e;
    var n, r, i = function() {
        for (var t = +new Date(), e = 0; t === +new Date() && e < 200; ) e++;
        return t.toString(16) + e.toString(16);
    }, a = +(Math.random() + "").slice(2), o = t.ua || "", c = [], u = 0;
    function s(t, e) {
        for (var n = 0, r = 0; r < e.length; r++) n |= c[r] << 8 * r;
        return t ^ n;
    }
    for (n = 0; n < o.length; n++) r = o.charCodeAt(n), c.unshift(255 & r), 4 <= c.length && (u = s(u, c), 
    c = []);
    return 0 < c.length && (u = s(u, c)), o = u, e = 0, t.sc && (e = +(e = t.sc.split("*"))[0] * +e[1]), 
    V("lxcuid", i = [ i(), a, o, e, i() ].map(function(t) {
        return t.toString(16);
    }).join("-")), i;
}(ye);

var _e, xe, Se = [ yt, Ot ], be = [ "sdk_ver", "lxcuid", "lat", "lng", "latitude", "longitude", "android_id", "idfa", "idfv", "meidmac", "imei", "imei2", "imsi", "did", "meid", "sn", "dtk", "bht", "bluetooth", "net", "network", "wifi", "Wi-Fi", "bssid", "apn", "mno", "phone", "phone_num" ], we = [ St, Tt ], Te = bt;

function Ae() {
    return qe("oldmmp", "1"), new Promise(function(t) {
        var e = !1;
        setTimeout(function() {
            e || t({});
        }, 100), c.getLxEnvironment({
            success: function(n) {
                var r = (i = 0 < arguments.length && void 0 !== n ? n : {}).env, i = i.tag;
                e = !0, r ? (ke(i = {
                    nativeEnv: r,
                    nativeTag: i,
                    type: "old"
                }), t(i)) : t({});
            }
        });
    });
}

function ke(t) {
    _e = t, setTimeout(function() {
        _e = null;
    }, 1e3);
}

function Ce() {
    return _e ? Promise.resolve(i(i({}, _e), {}, {
        fromCache: !0
    })) : Qt() ? Promise.all([ ge("getEnv"), ge("getTag") ]).then(function(t) {
        var e = t[0].data;
        t = t[1].data;
        return e ? (ke(t = {
            nativeEnv: e,
            nativeTag: t
        }), Promise.resolve(t)) : c.getLxEnvironment ? Ae() : void 0;
    }) : c.getLxEnvironment ? Ae() : Promise.resolve({});
}

function Oe(t, e) {
    delete (F.hasBuiltRTTEnv ? ye[mt] : ye)[t], e && delete ye[t];
}

function Pe(t, e, n) {
    var r = F.hasBuiltRTTEnv ? ye[mt] : ye;
    r[t] !== e && (-1 < be.indexOf(t) || (vt === t && (e = "data_sdk_" + e, ye[t] = e), 
    "wxid" !== t && "wxunionid" !== t || V(t, e), Dt === t && ye.scene && Oe("scene"), 
    -1 <= Se.indexOf(t) && U(t, e), -1 < we.indexOf(t) ? ye[t] = e : r[t] = e, n && n({})));
}

function De() {
    var t = Te !== wt && xe !== wt ? bt : wt;
    ye[St] = t, pe();
}

function je(t, e) {
    var n = F.hasBuiltRTTEnv ? ye[mt] : ye;
    n = e ? ye : n;
    return t ? n[t] : n;
}

function Me(t) {
    if (F.hasBuiltRTTEnv && ye[mt] && x(t)) {
        var e, n = ye[mt][vt];
        for (e in xe = t[St] || bt, t) t[e] && (ye[e] = t[e]);
        ye[vt] = n, De();
    }
}

function Ee() {
    var t = [], e = S();
    return t.push(e.toString(16)), t.push(C()), t.push(C()), t.push(C()), t.join("-");
}

var Ie = {};

function qe(t, e) {
    e ? Ie[t] = e : delete Ie[t];
}

var Le = [ "uid", "uuid", "union_id", "sdk_ver", Dt, "ct", "os", "appnm", "app", vt, yt ], Ne = [ "val_bid", "val_cid", "ji", "jf", "wi", "wf", "val_lab", "req_id", "nm", "val_ref", "seq", "tm" ], Ue = [], Re = {}, Ve = 0;

function Be(t, e) {
    var n = {};
    T(Ne, function(e) {
        n["evs." + e] = t[e] || "";
    }), n["evs.fseq"] = Ve++;
    var r = A(!0, {}, je());
    A(!0, r, e || {}), T(Le, function(t) {
        var e = r[t];
        t === vt && (e = xt + e.replace(xt, "")), n[t] = e || "";
    }), Ue.push(n), 30 === Ue.length && (We(Ue, 1), Ue = []);
}

function Je(t, e) {
    e <= 3 && (e++, setTimeout(function() {
        We(t, e);
    }, J(e)));
}

function We(t, e) {
    0 !== t.length && c.request({
        method: "POST",
        url: "https://hreport.meituan.com",
        data: t,
        success: function(n) {
            (n.statusCode || n.status) < 400 || Je(t, e);
        },
        fail: function() {
            Je(t, e);
        }
    });
}

var Xe, Qe = !0, Fe = M("interceptData"), Ke = {
    cnt: 0,
    list: {
        cid: [],
        bid: [],
        bid_null: 0
    },
    ut: Fe ? Fe.ut : ""
}, $e = "intercept";

function He(t, e) {
    try {
        if (!Qe) return;
        if (!Fe) return;
        var n = Fe.bid, r = Fe.cid, i = Fe.empty_bid_blk;
        if (e) {
            if (r.includes(e)) return Ke.list.cid.some(function(t, n) {
                if (t.id === e) return t["M*"]++, !0;
            }) || Ke.list.cid.push({
                id: e,
                "M*": 1
            }), Ke.cnt++, 1;
            if (t) {
                if (t in n) {
                    if (!n[t].length) return Ke.list.bid.some(function(e, n) {
                        if (e.id === t) return e.cnt++, !0;
                    }) || Ke.list.bid.push({
                        id: t,
                        cnt: 1
                    }), Ke.cnt++, 1;
                    if (n[t].includes(e)) return Ke.list.bid.some(function(e, n) {
                        if (e.id === t) return e.cnt++, !0;
                    }) || Ke.list.bid.push({
                        id: t,
                        cnt: 1
                    }), Ke.cnt++, 1;
                }
            } else if (i) return Ke.list.bid_null++, Ke.cnt++, 1;
        } else if (t) {
            if (t in n && !n[t].length) return Ke.list.bid.some(function(e, n) {
                if (e.id === t) return e.cnt++, !0;
            }) || Ke.list.bid.push({
                id: t,
                cnt: 1
            }), Ke.cnt++, 1;
        } else if (i) return Ke.list.bid_null++, Ke.cnt++, 1;
        return;
    } catch (n) {
        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
        he($e, "lx-needInterception-error", n.message, !0), O(n.message);
    }
}

function ze(t, e) {
    t ? Pe(Tt, Xe = e) : Oe(Tt), pe();
}

U(Mt, Date.now(), !0);

var Ge, Ze, Ye, tn, en, nn = new Map(), rn = {}, an = [];

function on(t, e) {
    var n, r;
    e = e || {}, f.quickReportOptions && (n = e.category, r = f[vt], function(t, e) {
        if (x(Re)) {
            b(Re.envInfo) && (Le = Le.concat(Re.envInfo)), b(Re.evsInfo) && (Ne = Ne.concat(Re.evsInfo));
            var n = t.nm;
            switch (n) {
              case $:
                Re.hasAS && Be(t, e);
                break;

              case H:
                Re.hasAQ && Be(t, e);
                break;

              case z:
              case G:
                b(Re.PV) && -1 < Re.PV.indexOf(t.val_cid) && Be(t, e);
                break;

              default:
                (function(t, e) {
                    return !!(b(t) && -1 < t.indexOf(e.val_bid));
                })(Re[n], t) && Be(t, e);
            }
        }
    }(t, {
        category: _(n) && n || r
    })), t.nm !== z && (t[jt] = A({}, t[jt] || {}), t[jt].cid_quality = e.cid ? 1 : 0);
}

function cn(t) {
    var e = t || {}, n = e.keepTag, r = e.appSession;
    t = e.setNewAppSession;
    Ve = 0, Oe(yt), Oe(Ot), Oe("oauid"), Oe("sunion_id"), Oe("tc"), Oe("tn"), r ? (Pe(Dt, r.split("|")[0]), 
    Pe(Ct, N(Ct))) : (Pe(Dt, (e = Ee(), U("s", e + "|0"), {
        msid: e,
        seq: 0
    }).msid), R(Ot), R(yt)), n || Wt.clear(), t && !r && Pe(Ct, (r = Ee(), U(Ct, r), 
    {
        msid: r
    }).msid);
}

function un(t, e, n, r) {
    if ("clear" === t) {
        var i = e;
        return Object.keys(rn).forEach(function(t) {
            rn[t] > i && (rn.bid = 0, N(Ut).push(t));
        }), rn = {}, void (i = e);
    }
    if (n) {
        if (-1 < N(Ut).indexOf(n)) {
            var o = !1;
            return an.forEach(function(t) {
                t.bid === n && (t.num = t.num + 1, o = !0);
            }), o || an.push({
                bid: n,
                num: 1
            }), void qe("bid_blacklist", an);
        }
        var c = rn[n];
        rn[n] = c ? c + 1 : 1;
    }
    qe("bid_blacklist", an);
    var u = this;
    r = r || {}, 18e5 < S() - N(Mt) && (cn({
        keepTag: !0,
        setNewAppSession: !0
    }), pe()), U(Mt, S(), !0);
    var s, d, p, h = A((h = {
        nm: t,
        tm: S(),
        nt: l ? 4 : 3,
        seq: (d = N("s").split("|"), p = N(Ct), s = d[0], d = d[1], d = parseInt(d) + 1, 
        U("s", s + "|" + d, !0), U(Ct, p, !0), parseInt(d)),
        isauto: 7,
        req_id: u[It]
    }) || {}, f.coord);
    if (h = A(h || {}, f.onceCoord), f.onceCoord = {}, (h.lat || h.lng) && (c = h.lat, 
    s = h.lng, d = (p = a(c.toString().split("."), 2))[0], c = p[1], s = (p = a(s.toString().split("."), 2))[0], 
    p = p[1], p = {
        wi: d = 999 * +d,
        wf: c = c ? c.replace(/3/g, "c").replace(/7/g, "g").replace(/9/g, "i") : "0",
        ji: s = 777 * +s,
        jf: p = p ? p.replace(/2/g, "b").replace(/4/g, "d").replace(/6/g, "f") : "0"
    }, h.ji = p.ji, h.jf = p.jf, h.wi = p.wi, h.wf = p.wf, delete h.lat, delete h.lng), 
    r.cid ? h[Et] = r.cid : u._isDefault && Ze ? h[Et] = Ze : u.cid ? h[Et] = u.cid : h[Et] = fn(), 
    t === z ? (tn = Ze, en = Ye, Ze = h[Et], Ye = u[It]) : t === $ ? h[It] = Ge = j() : t === H ? h[It] = Ge : u._isDefault && (h[It] = Ye), 
    h.val_ref = tn, h.refer_req_id = en, (r = Wt.getAll()) && (h.tag = r), e) {
        var v = 0;
        try {
            v = JSON.stringify(e).length;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            he("index.js", "lx-error-EvsWrapper", t.message, !0), O(t.message);
        }
        1e4 <= v && (e = {
            overlen_cutoff: 1,
            overlen_length: v
        }), h.val_lab = e;
    }
    return n && (h.val_bid = n), h[jt] = A({}, Ie || {}), u._isDefault || (h[jt].isInstance = 1), 
    t !== z && t !== H || Ke.cnt && (h[jt].dc_cnt = JSON.parse(JSON.stringify(Ke)), 
    Ke.cnt = 0, Ke.list = {
        cid: [],
        bid: [],
        bid_null: 0
    }), h;
}

function sn() {
    var t = getCurrentPages();
    if (t && t.length && t[t.length - 1]) return (t = t[t.length - 1].__route__) || "";
}

function ln(t) {
    var e = sn();
    t && nn.set(e, t);
}

function fn() {
    var t = sn();
    return nn.get(t) || t;
}

var dn, pn, hn = "lx_sdk_eventemitter_sendkey", vn = [];

function gn() {
    T(vn, function(t) {
        var e = t.ctx, n = t.type;
        t = t.args;
        e[n].apply(e, t);
    }), vn = [];
}

function mn(t, e) {
    try {
        if (!t || !m(t)) return;
        var n = JSON.parse(JSON.stringify(je("", !0))), r = JSON.parse(JSON.stringify(e));
        n.evs = r, t(n, r);
    } catch (r) {
        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
        he("index.js", "lx-function-error-execCallBack", r.message, !0), O(r.message);
    }
}

function yn(t) {
    (t.wi && t.wf || 0 == t.wi) && (t.lat = t.wi / 999 + "." + t.wf.replace(/c/g, "3").replace(/g/g, "7").replace(/i/g, "9"), 
    delete t.wi, delete t.wf), (t.ji && t.jf || 0 == t.ji) && (t.lng = t.ji / 777 + "." + t.jf.replace(/b/g, "2").replace(/d/g, "4").replace(/f/g, "6"), 
    delete t.ji, delete t.jf);
}

function _n(t, e) {
    var n, r, i, a = (e = e || {}).category, o = f[vt];
    (i = N())._dirty && (Pe(Ct, i[Ct]), Pe(Dt, i[Dt]), Pe(Ot, i.lch), Pe(yt, i.utm), 
    pe(), i._dirty = !1), "MVL" === t.nm ? (i = {
        category: r = _(a) && a || f[vt],
        mvlId: n = t.val_bid + t.req_id + r,
        evs: t
    }, yn((r = {
        category: r,
        mvlId: n,
        evs: A({}, t)
    }).evs), bn(r), (n = x(n = i) ? n : {}).mvlId && n.evs && (r = n.mvlId, (i = n.evs.val_lab || {})._tm = n.evs.tm, 
    i._seq = n.evs.seq, te[r] ? te[r].evs.val_lab.mv_list.push(i) : (n.evs.val_lab = {
        mv_list: [ i ]
    }, te[r] = n)), ee || le(et)) : (_(a) ? dn !== a && Pe(vt, dn = a, pe) : dn && (dn = d, 
    Pe(vt, o, pe)), yn((o = {
        category: dn,
        evs: A({}, t)
    }).evs), bn(o), function(t, e) {
        e = e || {};
        var n = !!f[Pt] || !!e.manualReport;
        if (Gt || (Gt = M(Ht) || []) && Gt.length && (Kt = !0, ce(Zt = Gt)), t) {
            var r = Zt[Zt.length - 1];
            e = t.nm;
            if (n && se() - +new Date() > 1e4) (n = A(!0, {}, r)).evs = [ t ], re.push(n), n = +new Date(), 
            Nt(Ft), Ft = Lt(ue, se() - n - 1e4); else switch (r.evs.push(t), e) {
              case G:
              case H:
                Zt = Zt.concat(fe()), Yt = [], e === H && V(Ht, Zt), Kt && (clearTimeout(Kt), Kt = null), 
                ce(Zt, e);
                break;

              case Z:
              case Y:
                Kt && (clearTimeout(Kt), Kt = null), Kt = !0, ce(Zt, G);
                break;

              default:
                Kt || le();
            }
        }
    }(t, e));
}

function xn(t) {
    var e = (t = t || {}).cid, n = this;
    e && (n.cid = e, ln(n.cid)), n.pvTime = d, n.sentPV = !1, n.sentPD = !1, n._isDefault = t._isDefault, 
    n[It] = j();
}

(s = xn.prototype)[nt] = function(t, e, n) {
    var r = this, i = (e = e || {}).cid;
    return f[qt] < 4 ? vn.push({
        ctx: r,
        type: nt,
        args: [ t, e, n ]
    }) : (r._isDefault ? r[It] = j() : (r.sentPV && D("同一个实例最多只可发送一次PV"), r.sentPV = !0), 
    4 === f[qt] ? a() : (f[qt] = 2, void Ce().then(function(t) {
        var e = t.nativeEnv;
        t.fromCache || Me(e), f[qt] = 5, a(), gn();
    })));
    function a() {
        r.valLab = x(t) ? t : {}, r._isDefault && (r.cid = i || fn(), ln(r.cid)), r.pvTime = Date.now(), 
        r._isDefault && (r.sentPD = !1);
        var a = un.apply(pn = r, [ z, r.valLab, "", {
            cid: i
        } ]);
        a && (on(a, e), _n(a, e), n && mn(n, a));
    }
}, s[rt] = function(t, e) {
    if ((this._isDefault || this.sentPV && !this.sentPD) && pn && !pn.sentPD) try {
        if (f[qt] < 4) return vn.push({
            ctx: pn,
            type: rt,
            args: [ t, e ]
        });
        delete (t = x(t) ? t : {}).ctx, n = pn.pvTime, pn.sentPD = !0, n && (t = A({
            duration: "" + (Date.now() - n)
        }, t));
        var n = un.apply(pn, [ G, t ]);
        t._isauto ? n.isauto = 6 : n.isauto = 7, n && _n(n), e && mn(e, n), pn = d;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        he("index.js", "lx-api-error-pageDisappear", t.message, !0), O(t.message);
    }
}, s[it] = function(t, e) {
    var n, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, i = 3 < arguments.length ? arguments[3] : void 0;
    if (f[qt] < 4) return vn.push({
        ctx: this,
        type: it,
        args: [ t, e, r, i ]
    });
    He(t, r.cid) || (n = un.apply(this, [ "MV", e, t, r ])) && (on(n, r), _n(n, r), 
    i && mn(i, n));
}, s[at] = function(t, e) {
    var n, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, i = 3 < arguments.length ? arguments[3] : void 0;
    if (f[qt] < 4) return vn.push({
        ctx: this,
        type: at,
        args: [ t, e, r, i ]
    });
    He(t, r.cid) || ((n = un.apply(this, [ "SC", e, t, r ])) && _n(n, r), i && mn(i, n));
}, s[ot] = function(t, e) {
    var n, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, i = 3 < arguments.length ? arguments[3] : void 0;
    if (f[qt] < 4) return vn.push({
        ctx: this,
        type: ot,
        args: [ t, e, r, i ]
    });
    He(t, r.cid) || (n = un.apply(this, [ "MC", e, t, r ])) && (on(n, r), _n(n, r), 
    i && mn(i, n));
}, s[ct] = function(t, e) {
    var n, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, i = 3 < arguments.length ? arguments[3] : void 0;
    if (f[qt] < 4) return vn.push({
        ctx: this,
        type: [ ct ],
        args: [ t, e, r, i ]
    });
    He(t, r.cid) || (n = un.apply(this, [ "ME", e, t, r ])) && (on(n, r), _n(n, r), 
    i && mn(i, n));
}, s[ut] = function(t, e, n) {
    var r, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, a = 4 < arguments.length ? arguments[4] : void 0;
    if (f[qt] < 4) return vn.push({
        ctx: this,
        type: [ ut ],
        args: [ t, e, n, i, a ]
    });
    He(t, i.cid) || (n = A(n || {}, {
        order_id: e
    }), (r = un.apply(this, [ Z, n, t, i ])) && (on(r, i), _n(r, i), a && mn(a, r)));
}, s.pay = function(t, e, n) {
    var r, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, a = 4 < arguments.length ? arguments[4] : void 0;
    if (f[qt] < 4) return vn.push({
        ctx: this,
        type: [ "pay" ],
        args: [ t, e, n, i, a ]
    });
    He(t, i.cid) || (n = A(n || {}, {
        order_id: e
    }), (r = un.apply(this, [ Y, n, t, i ])) && (on(r, i), _n(r, i), a && mn(a, r)));
}, s[st] = function(t, e) {
    var n, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, i = 3 < arguments.length ? arguments[3] : void 0;
    if (f[qt] < 4) return vn.push({
        ctx: this,
        type: st,
        args: [ t, e, r, i ]
    });
    He(t, r.cid) || t && _(t) && (n = un.apply(this, [ et, e, t, r ])) && (on(n, r), 
    _n(n, r), i && mn(i, n));
}, s.sendInfoTakeOn = function(t, e) {
    var n;
    "bluesdk" === t && (t = hn, n = function(t) {
        return t = i({
            msid: je("msid", !1) || ""
        }, t), e(t);
    }, K.on(t, function(t) {
        return n(t);
    }));
};

var Sn, bn = function(t) {
    t = t, K && K.emit("lx_sdk_eventemitter_sendkey", t);
}, wn = "valid_info", Tn = [ "lxcuid", "appnm", Dt, "wxid", "scene", Ot, yt, _t, "utm_content", "utm_medium", "utm_term", "utm_campaign", "union_id", "uuid", "dpid", "wxunionid" ], An = !1, kn = Date.now();

f.coord = {};

var Cn, On, Pn, Dn, jn = (f.onceCoord = {}, 0), Mn = [], En = !1, In = !1, qn = [ yt, Ot ], Ln = new Map(), Nn = new xn({
    _isDefault: !0
});

Ln.set({}, Nn);

var Un = {};

function Rn(t) {
    var e = !1;
    return En = !0, "init" === t && Pn && (Un.init.apply(Un, Pn), Pn = d), "set" === t && (e = !!Mn.length, 
    T(Mn, function(t) {
        var e = t.type;
        t = t.args;
        Un[e] && Un[e].apply(Un, t);
    }), Mn = []), "quit" === t && On && (Un.quit(On), On = null), En = !1, e;
}

f[qt] = 0, qe("t_load", S()), Un._autoSetUTM = function(t) {
    if (f[qt] < 2) return Mn.push({
        type: "_autoSetUTM",
        args: [ t ]
    });
    f.autoUTM && Un.setUTM(t);
}, Un.init = function(t, e, n) {
    var r, i, a, o = this;
    qe("t_init", S()), n = n || {};
    try {
        if (A(f, n), f[qt] < 1) {
            Pn = [ t, e, n ];
            var u = e.appnm;
            return void (e.appnm = u);
        }
        if (c.request({
            url: "https://portal-portm.meituan.com/horn/v1/modules/lxsdk_mp_config?os=android_test",
            data: {
                app_name: e.appnm || "",
                app_version: e.app || ""
            },
            success: function(t) {
                var e;
                Sn && clearInterval(Sn), r = 1e3 * (null === (e = t.data) || void 0 === e ? void 0 : e.bid_high_flow_limit_time) || 1e4, 
                un("clear", i = (null === (t = t.data) || void 0 === t ? void 0 : t.bid_high_flow_limit_max) || 1e3), 
                setInterval(function() {
                    un("clear", i);
                }, r);
            }
        }), a = e.appnm, c.request({
            url: "https://report.meituan.com/wxapi/trackblk/wxapp/config",
            data: {
                appnm: a
            },
            success: function(t) {
                var e = "", n = void 0;
                try {
                    var r = t.data;
                    Qe = r.enable, e = r.url, n = r.ver;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return;
                }
                if (Qe && e) {
                    if (Ke.ut) {
                        if (!(n > Ke.ut)) return;
                        Ke.ut = n;
                    } else Ke.ut = n;
                    c.request({
                        url: e,
                        success: function(t) {
                            (t = t.data).app_name === a && V("interceptData", Fe = t);
                        },
                        fail: function(t) {
                            he($e, "lx-request-error", t.errMsg, !0), O(t.errMsg);
                        }
                    });
                }
            },
            fail: function(t) {
                he($e, "lx-request-error", t.errMsg, !0), O(t.errMsg);
            }
        }), An) return;
        An = !0, zt = t, n.catMode && (l = t, "domainReport" === (s = n).catMode ? (ne.url = "https://catfront.dianping.com/api/log?v=1", 
        ne.initUrl = "https://catfront.dianping.com/api/metric") : !l || "nginxReport" !== s.catMode || (l = l.match(/^(https:\/\/)[^\/]+/)) && (ne.url = l[0] + "/lx-cat", 
        ne.initUrl = l[0] + "/lx-cat")), n[Pt] && (f[Pt] = !0);
        var s = e.appnm, l = e.category;
        s || O("没有设置应用标识（appnm）!"), l || (e[vt] = s), e.appnm = s, f[vt] = e[vt], (s = N(yt)) && Pe(yt, s), 
        ve(), (s = N(Ot)) && Pe(Ot, s), T(e || {}, function(t, e) {
            return _(e) && d !== t ? (o.set(e, t), void (f[e] = t)) : f[e];
        });
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        he("index.js", "lx-api-error", t.message, !0), O(t.message);
    }
}, Un.quit = function(t) {
    f[qt] < 4 ? On = t || {} : (t = x(t) ? t : {}, t = A({
        duration: "" + (Date.now() - kn)
    }, t), t = un.apply(this, [ H, t ]), f.autoASAQ && (t.isauto = 6), _n(t), ue(), 
    f.hasAQ = !0);
}, Un.setLch = function(t) {
    if (f[qt] < 2) return Mn.push({
        type: "setLch",
        args: [ t ]
    });
    var e = N(Ot);
    e && e === t || (!En && 5 <= f[qt] && cn(), U(Ot, t), this.set(Ot, t));
}, Un.setUTM = function(t, e) {
    if (f[qt] < 2) return Mn.push({
        type: "setUTM",
        args: [ t, e ]
    });
    if (t) {
        var n, r = t || {}, i = (this.get(yt), r.query || {}), a = r.referrerInfo || {}, o = (t = [ _t, "utm_medium", "utm_term", "utm_content", "utm_campaign" ], 
        {});
        if ("clear" === r && !En) return 5 <= f[qt] && cn(), void pe();
        i && T(t, function(t) {
            _(i[t]) && (o[t] = i[t]);
        }), a.extraData && (_(n = a.extraData) && (n = X(n)), T(t, function(t) {
            _(n[t]) && (o[t] = n[t]);
        })), T(t, function(t) {
            _(r[t]) && (o[t] = r[t]);
        }), a = parseInt(r.scene), o[_t] || isNaN(a) || 1037 !== a && 1038 !== a || r.referrerInfo && r.referrerInfo.appId && (o[_t] = r.referrerInfo.appId, 
        o.utm_medium = "otherApp"), 0 < Object.keys(o).length ? (a = (t = N(yt)) && t[_t], 
        o[_t] && a !== o[_t] && !En && 5 <= f[qt] && cn(), e && (o = A(!0, A(!0, {}, t), o)), 
        this.set(yt, o), U(yt, o)) : P("没有设置utm(站外来源)!");
    }
}, Un.get = function(t) {
    return je(t);
}, Un.set = function(t, e) {
    if (f[qt] < 2) return Mn.push({
        type: "set",
        args: [ t, e ]
    });
    _(t) && 0 !== t.replace(/(^\s*)|(\s*$)/g, "").length && Pe(t, e, !En && pe);
}, Un.resetGeolocation = function(t, e) {
    t = parseFloat(t), e = parseFloat(e), t && (f.coord.lng = t), e && (f.coord.lat = e);
}, Un.debug = function(t, e) {
    jn = !!t, e = (e = e || {}).code && e.code.toString() || "", jn ? /^\d{6,8}$/.test(e) && ze(!0, e) : ze(!1);
}, Un.setCanaryReleaseVersion = function(t) {
    t && this.set("canary_release", t + "");
}, Un.getValidationState = function() {
    return Promise.resolve().then(function(t) {
        return {
            validating: !!je(Tt),
            code: Xe
        };
    });
}, Un.onLoad = function(t) {
    if (Dn = t, In) try {
        Dn(A(!0, {}, je(null, !0)));
    } catch (t) {}
}, Un.updateQuickConfig = function(t) {
    x(t) && (f.quickReportOptions = t || null, V("quickOptions", t || {}), t = (t = f.quickReportOptions) || M("quickOptions"), 
    x(Re = t.quickReport || {}) && (b(Re.envInfo) && T(Re.envInfo, function(t) {
        -1 === Le.indexOf(t) && Le.push(t);
    }), b(Re.evsInfo) && T(Re.evsInfo, function(t) {
        -1 === Ne.indexOf(t) && Ne.push(t);
    })), setInterval(function() {
        We(Ue, 1), Ue = [];
    }, 500));
}, Un.setTagWithCtx = function(t, e, n) {
    if (e) {
        if (f[qt] < 2) return Mn.push({
            type: "setTagWithCtx",
            args: [ t, e, n ]
        });
        var r = this;
        _(e) ? Wt.push({
            ctx: t,
            key: e,
            val: n
        }) : x(e) && T(e, function(e, n) {
            r.setTagWithCtx(t, n, e);
        });
    }
}, Un.setTag = function(t, e) {
    if (f[qt] < 2) return Mn.push({
        type: "setTag",
        args: [ t, e ]
    });
    var n = (n = getCurrentPages())[n.length - 1];
    this.setTagWithCtx(n, t, e);
}, Un.setTagFromWV = function(t) {
    try {
        if (!t) return;
        var e = X(W.decode(W.safeUrlDecode(t))), n = (n = getCurrentPages())[n.length - 2];
        this.setTagWithCtx(n, e);
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        he("index.js", "lx-api-error-setTagFromWV", t.message, !0), O(t.message);
    }
}, Un.clearTag = function(t) {
    if (f[qt] < 2) return Mn.push({
        type: "clearTag",
        args: [ t ]
    });
    t ? Wt.back(t) : Wt.clear(1);
}, Un.getTag = function(t) {
    var e = Wt.getAll() || {};
    return _(t) ? e[t] : e;
}, Un.getCurrentInstance = function(t) {
    return t || (t = (t = getCurrentPages())[t.length - 1]), Ln.get(t);
}, Un.start = function(t, e) {
    var n, r, i, a = this;
    e || !f.hasAS || En ? f[qt] < 3 ? Cn = t || {} : (f[qt] = 1, m(c.getEnterOptionsSync) && ((i = c.getEnterOptionsSync().referrerInfo) && i.extraData ? n = i.extraData[Tt] : (r = N(wn).split(",")) && (e = +new Date(), 
    i = r[0], e < parseInt(r[1]) + 18e5 ? n = i : R(wn)), n && (ze(!0, n), U(wn, [ n, +new Date() ].join(",")))), 
    Ce().then(function(e) {
        var n = e.nativeEnv, r = e.nativeTag;
        e.fromCache || (Me(n), Jt(r)), t = x(t) ? t : d, kn = Date.now(), r = un.apply(a, [ $, t ]), 
        f.autoASAQ && (r.isauto = 6), _n(r), function() {
            f[qt] = 2;
            var t = Rn("set");
            f[qt] = 3, t && pe(), f[qt] = 4, gn(), Rn("quit"), f[qt] = 5;
        }();
    })) : P("AS（应用启动）灵犀集成自动上报，请注释灵犀 start 接口调用！");
}, Un.setCurrentCid = function(t) {
    t ? (ln(t), Nn.cid = t) : O("调用setCurrentCid方法请必传cid参数");
}, T([ it, at, ot, ct, ut, "pay", st, rt, "sendInfoTakeOn" ], function(t) {
    Un[t] = function() {
        Nn[t].apply(Nn, arguments);
    };
}), Un[nt] = function(t, e, n, r) {
    (n = n || {}).cid = t, Nn[nt](e, n, r);
}, s = function() {}, Un.sendEvsAsyncBefore = s, Un.sendEvsAsycBefore = s, s = function() {}, 
Un.sendEvsAsyncAfter = s, Un.sendEvsAsycAfter = s, Un.presetGeolocation = function(t, e) {
    return t = parseFloat(t), e = parseFloat(e), t && (f.onceCoord.lng = t), e && (f.onceCoord.lat = e), 
    Un;
}, Un.getBase64LXParams = function(t) {
    t = (e = t || {}).withEnvKeys || [];
    var e = e.mmpNativeFirstKeys, n = je(), r = je(null, !0), i = [];
    return b(e) && (qn = qn.concat(e)), T(Tn, function(t) {
        var e = n[t] || r[t];
        0 <= qn.indexOf(t) && (e = r[t] || n[t]), e && (t === yt && x(e) ? T(e, function(t, e) {
            e && i.push("".concat(e, ":").concat(t));
        }) : i.push("".concat(t, ":").concat(e)));
    }), e = r[St], i.push("".concat(St, ":").concat(e || bt)), Xe && i.push("v:".concat(Xe)), 
    b(t) && 0 < t.length && T(t, function(t) {
        var e = n[t] || r[t];
        0 <= qn.indexOf(t) && (e = r[t] || n[t]), t && (_(e) || y(e) || g(e, "boolean")) && (0 <= Tn.indexOf(t) || (e = e.toString(), 
        i.push("".concat(t, ":").concat(W.encode(e)))));
    }), i = W.safeUrlEncode(W.encode(i.join(";"))), (t = Wt.getAll()) && ("{}" === (t = JSON.stringify(t)) || (t = W.safeUrlEncode(W.encode(t))).length < 5e3 && (i = i + "&_lx_tag=" + t)), 
    i + "&_lx_ver=3.4.4";
}, Un.collectParamsToWeb = Un.setURLEnv = Un.getBase64LXParams, Un.flushManualData = function() {
    ue();
}, Un.dev = function(t) {
    Te = t ? wt : bt, F.hasBuiltRTTEnv ? (ye[mt][St] = Te, De()) : (ye[St] = Te, pe());
}, Un.appLifeCycleInterceptor = function(t) {
    var e = this;
    return function(t) {
        return function(t, e) {
            try {
                [ lt, ft, ht ].forEach(function(n) {
                    function r(t, e) {
                        i && i.apply(t, e);
                    }
                    var i = e[n];
                    n === ht && (e[n] = function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        r(this, e);
                    }), n === lt && (e[n] = function(e) {
                        f.hasAS = !1, f.hasAQ = !1, f.autoASAQ = !0;
                        var n, i = void 0 === (i = (n = e || {}).query) ? {} : i;
                        (n = n.scene) && t.set("scene", n), i.lch && t.setLch(i.lch), i.oauid && t.set("oauid", i.oauid), 
                        i.sunion_id && t.set("sunion_id", i.sunion_id), i.tc && t.set("tc", i.tc), i.tn && t.set("tn", i.tn), 
                        e && t._autoSetUTM(e), t.start(e ? {
                            custom: e
                        } : null), f.hasAS = !0;
                        for (var a = arguments.length, o = new Array(1 < a ? a - 1 : 0), c = 1; c < a; c++) o[c - 1] = arguments[c];
                        r(this, [ e ].concat(o));
                    }), n === ft && (e[n] = function() {
                        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        r(this, n), f.hasAQ ? P("PD（页面离开）灵犀集成自动上报，请注释灵犀 quit 接口调用！") : t.quit();
                    });
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                he("index.js", "lx-api-error", t.message, !0), O(t.message);
            }
            return e;
        }(e, t);
    };
}, Un.pageLifeCycleInterceptor = function() {
    var t = this;
    return function(e) {
        return function(t, e) {
            try {
                [ dt, lt, ft, pt ].forEach(function(n) {
                    function r(t, e) {
                        i && i.apply(t, e);
                    }
                    var i = e[n];
                    switch (n) {
                      case pt:
                        e[pt] = function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            r(this, e), Wt.push({
                                ctx: this
                            });
                        };
                        break;

                      case lt:
                        e[lt] = function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            r(this, e);
                        };
                        break;

                      case ft:
                        e[ft] = function() {
                            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            r(this, n), t.pageDisappear({
                                _isauto: !0,
                                ctx: this
                            }), Wt.push({
                                ctx: this
                            });
                        };
                        break;

                      case dt:
                        e[dt] = function() {
                            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            r(this, n), t.pageDisappear({
                                _isauto: !0,
                                ctx: this
                            }), Wt.back(this);
                        };
                    }
                });
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                he("index.js", "lx-api-error", t.message, !0), O(t.message);
            }
            return e;
        }(t, e);
    };
}, Un.getPage = function(t, e) {
    return e = e || {}, t || e.cid || D("获取灵犀SDK实例时缺少参数：cid"), e.cid = t, t = new xn(e), 
    e = (e = getCurrentPages())[e.length - 1], Ln.set(e, t), t;
}, cn({
    appSession: N("s"),
    keepTag: !0,
    setNewAppSession: !0
}), function(t) {
    try {
        var e = c.getSystemInfoSync(), n = "MicroMessenger" + u + "A (" + e.model + "; " + e.system + "; " + e.pixelRatio + "dpr; language/" + e.language + ") " + e.platform + "/" + e.version + " NetType/";
        ye.ct = e.platform.toLowerCase(), "ios" === ye.ct && (ye.ct = (e.model || "").replace(/^.*(iPad|iPhone|iPod).*$/, "$1"), 
        /^(iPad|iPhone|iPod)$/.test(ye.ct) || (ye.ct = "ios"), ye.ct && (ye.ct = ye.ct.toLowerCase())), 
        ye.os = e.system, ye.sc = e.screenWidth + "*" + e.screenHeight, ye.ua = n, ye.brand = e.brand, 
        ye.dm = e.model, ye.bml = e.benchmarkLevel, ye.locate_permission = e.locationAuthorized, 
        ye.locate_status = e.locationEnabled, "MT" !== u && (ye.bht = e.bluetoothEnabled, 
        ye.wifi = e.wifiEnabled), qe("mmp", e.mmpSDKVersion);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        ye.ua = ye.ct = ye.os = ye.sc = "";
    }
    return new Promise(function(e) {
        var n = M("wxid"), r = M("wxunionid");
        n && (ye.wxid = n), r && (ye.wxunionid = r), Ce().then(function(n) {
            var r = n.nativeEnv, i = n.nativeTag;
            "old" === n.type ? T(r || {}, function(e, n) {
                t.set(n, e);
            }) : r && function(t) {
                if (!F.hasBuiltRTTEnv) {
                    var e, n, r = {}, i = ye[vt];
                    for (e in xe = (t = t || {})[St] || bt, ye) r[e] = ye[e], me.includes(e) && (t[e] = ye[e]), 
                    delete ye[e];
                    for (n in ye[mt] = r, t) t[n] && (n !== yt || x(t[n]) ? ye[n] = t[n] : ye[n] = X(t[n]));
                    ye[vt] = i, F.hasBuiltRTTEnv = !0, De();
                }
            }(r), i && Jt(i), e(ye);
        });
    }).then(function() {
        var t = F.hasBuiltRTTEnv ? ye[mt] : ye;
        return new Promise(function(e) {
            try {
                c.getNetworkType({
                    success: function(n) {
                        n = (n.networkType || "").toUpperCase(), "MT" !== u && (t.net = n), t.ua = t.ua.replace(/(NetType\/).*/, "$1" + n), 
                        e(t);
                    },
                    fail: function() {
                        e(t);
                    }
                });
            } catch (n) {
                n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                e(t);
            }
        });
    });
}(Nn).then(function() {
    f[qt] = 1, Rn("init"), f[qt] = 2, Rn("set"), f[qt] = 3, pe(), Cn && Un.start(Cn, !0);
    try {
        Dn && Dn(A(!0, {}, je(null, !0))), In = !0;
    } catch (t) {}
}), U(Ut, []), qe("app_launch_id", Ee()), Sn = setInterval(function() {
    un("clear", 1e3);
}, 1e4), module.exports = Un;