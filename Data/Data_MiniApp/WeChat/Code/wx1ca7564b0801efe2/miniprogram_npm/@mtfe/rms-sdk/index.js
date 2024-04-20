var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.initHeaderVersion = exports.initEnv = exports.getTakeAwayHost = exports.getReviewHost = exports.getMemberHost = exports.getLoginHost = exports.getEnvHeader = exports.getEnv = exports.getDefaultHost = exports.advertiseReporter = exports.Transaction = exports.ThemeModel = exports.ThemeControl = exports.Theme = exports.Shark = exports.Observer = exports.Log = exports.LazyLoad = exports.LXReporter = exports.LOCALE = void 0, 
exports.isAppMockEnable = Ne, exports.request = void 0, exports.standardDate = function(e, t) {
    var n = t || {}, r = n.locale, a = void 0 === r ? pt.DEFAULT : r, o = n.time, i = void 0 !== o && o, s = u(e || [], 2), c = s[0], d = s[1], l = yt(c, a, i), f = yt(d, a, i);
    return l + (f ? gt[a].connector + f : "");
}, exports.standardPoint = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = e || 0;
    if ((n + "").includes("+") || (n + "").includes(".")) return n;
    if (t) {
        var r = Number(e);
        r >= 0 && r <= 100 ? n = r.toFixed(2) : r > 100 && r <= 1e3 ? n = r.toFixed(1) : r > 1e3 && r <= 1e4 ? n = r.toFixed(0) : r > 1e4 && (n = "9999+");
    }
    return n;
}, exports.standardPrice = function(e, t) {
    var n = t || {}, r = n.unitType, a = void 0 === r ? 1 : r, o = n.displayType, i = void 0 === o ? 1 : o, s = n.split, c = void 0 !== s && s, d = Number(e) / ft[a];
    if (i === st.Billing && (d = d.toFixed(2)), c) {
        var l = (d + "").split("."), f = u(l, 2), p = f[0], h = f[1];
        return [ p, h ];
    }
    return d + "";
}, exports.switchMock = function(e) {
    g.default.setStorageSync("RMS_APP_MOCK", e);
}, exports.updateApp = exports.transactionOnce = exports.transaction = exports.tapActionHandler = void 0, 
require("../../../b/helpers/Objectentries"), require("../../../b/helpers/Arrayincludes");

var n, r, a, o, i, s, u = require("../../../b/helpers/slicedToArray"), c = require("../../../b/helpers/defineProperty"), d = e(require("../../../b/regenerator")), l = require("../../../b/helpers/classCallCheck"), f = require("../../../b/helpers/createClass"), p = require("../../@dp/owl-wxapp/index.js"), h = e(require("../rms-triangle-c/index.js")), v = require("../weapp-safety-request/index.js"), g = e(require("../../@limo/core/index.js")), m = t(require("../saas-user-auth/index.js"));

(s = o || (o = {})).WX = "1", s.MT = "2", s.DP = "3", s.AP = "4", s.CP = "5", s.PAB = "6", 
s.CMB = "7", s.TT = "8", s.OTHER = "99", function(e) {
    e.MP = "1", e.WEBVIEW = "2", e.WEB = "3";
}(i || (i = {}));

var y = new (function() {
    function e() {
        l(this, e);
    }
    return f(e, [ {
        key: "init",
        value: function(e, t) {
            t && (this.loganInstance = t, this.loganInstance.startWithOptions({
                topic: e.topic,
                devMode: e.devMode || !1,
                owl: p.owl,
                userConfig: e.userConfig
            }));
        }
    }, {
        key: "getLoganInstance",
        value: function() {
            return this.loganInstance;
        }
    }, {
        key: "addError",
        value: function(e, t) {
            var n, r;
            if ("info" !== (null == t ? void 0 : t.level)) {
                var a = {
                    sec_category: "",
                    content: "",
                    category: (null == t ? void 0 : t.category) || "jsError",
                    level: (null == t ? void 0 : t.level) || "error",
                    tags: Object.assign({
                        tenantId: (null === (r = null === (n = g.default.getExtConfigSync) || void 0 === n ? void 0 : n.call(g.default)) || void 0 === r ? void 0 : r.tenantId) || ""
                    }, (null == t ? void 0 : t.tags) || {})
                };
                "string" == typeof e ? a.sec_category = e : e instanceof Error ? (a.sec_category = e.message || "", 
                a.content = e.stack || "") : (a.sec_category = e.name || "", a.content = e.msg || "");
                var o = !(null == t ? void 0 : t.comb);
                p.owl.error.pushError(a, o);
            }
        }
    }, {
        key: "addLog",
        value: function(e, t) {
            if (this.loganInstance) try {
                var n = (null == t ? void 0 : t.level) || "INFO", r = (null == t ? void 0 : t.extraInfo) || JSON.stringify(t), a = (null == t ? void 0 : t.tags) || [], o = (null == t ? void 0 : t.isImmediate) || !1;
                this.loganInstance.log(n, e, {
                    extraInfo: r,
                    openId: m.default.getOpenId()
                }, a), o && this.loganInstance.onHide();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                p.owl.error.pushError({
                    sec_category: "logan-rtl上报失败",
                    content: (null == e ? void 0 : e.message) || "",
                    category: "jsError",
                    level: "error"
                });
            }
        }
    }, {
        key: "addPerf",
        value: function(e, t, n) {
            p.owl.pageSpeed.addPoint({
                position: e,
                duration: t
            }, n);
        }
    }, {
        key: "addApi",
        value: function(e, t, n, r) {
            p.owl.resource.addApi({
                name: e,
                networkCode: t,
                statusCode: n,
                responseTime: r
            });
        }
    }, {
        key: "addCustom",
        value: function(e, t, n) {
            var r, a;
            p.owl.setMetric(e, t, Object.assign({
                tenantId: (null === (a = null === (r = g.default.getExtConfigSync) || void 0 === r ? void 0 : r.call(g.default)) || void 0 === a ? void 0 : a.tenantId) || ""
            }, n || {}));
        }
    } ]), e;
}())();

exports.Log = y;

var I = "", C = "", x = "", E = "", O = function(e) {
    var t = "";
    return e === i.MP ? x ? t = x : (t = h.default.MPInfo.getAppId(), x = t) : i.WEBVIEW, 
    t;
}, b = function() {
    try {
        var e = h.default.isNativeMp ? i.MP : h.default.isMpWebview || h.default.isAliPayWebview || h.default.isByteDanceMicroAppWebview ? i.WEBVIEW : i.WEB, t = {
            "app-platform": h.default.isWX ? o.WX : h.default.isMTApp ? o.MT : h.default.isDPApp ? o.DP : h.default.isAliPay ? o.AP : h.default.h5Ua.indexOf("cloudpay") > -1 ? o.CP : h.default.h5Ua.indexOf("pabank") > -1 ? o.PAB : h.default.h5Ua.indexOf("cmblife") > -1 ? o.CMB : h.default.isByteDance ? o.TT : o.OTHER,
            "app-container": e,
            "app-id": O(e),
            "app-template": ""
        };
        return C && (t.versionCode = C), e === i.WEB ? t["app-version"] = "" : e !== i.WEBVIEW && (I && (t["app-version"] = I), 
        E && (t["app-template"] = E)), t;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        var n = e instanceof Error ? e.message : JSON.stringify(e);
        return y.addError({
            name: "设置通用环境上下文异常",
            msg: n
        }), {};
    }
}, P = {
    getLxBizParams: function() {
        try {
            var e = g.default.getStorageSync("RMS_APP_LX_PARAMS");
            return e && JSON.parse(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return null;
        }
    },
    setLxBizParams: function(e) {
        g.default.setStorageSync("RMS_APP_LX_PARAMS", JSON.stringify(e));
    },
    getLxBizParams_v2: function() {
        try {
            var e = g.default.getStorageSync("RMS_APP_LX_PARAMS_V2");
            return e && JSON.parse(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return null;
        }
    },
    setLxBizParams_v2: function(e) {
        g.default.setStorageSync("RMS_APP_LX_PARAMS_V2", JSON.stringify(e || {}));
    }
}, L = function() {
    return getApp({
        allowDefault: !0
    });
};

exports.initHeaderVersion = function(e, t, n) {
    C = e || "", I = t || "", E = n || "1";
}, exports.getEnvHeader = b;

var S = function() {
    var e = "undefined" != typeof getCurrentPages && getCurrentPages() || [];
    return e.length > 0 && e[e.length - 1] || {};
}, w = function() {
    return S().route || "Unknown";
}, M = function(e) {
    var t = S().options || {};
    return e ? decodeURIComponent(t[e] || "") : t;
}, _ = function() {
    var e = +M("bizType") || 0, t = 51;
    return 3 === e ? t = 61 : 4 === e && (t = 67), t;
};

function k(e) {
    return "function" == typeof e;
}

var A = function() {
    return w();
}, T = function(e) {
    return M(e);
}, R = h.default.isAliPay, N = h.default.isDPApp, D = h.default.isIOS, j = h.default.isMTApp, q = h.default.isNativeMp, B = h.default.isWX, H = null, V = null, J = null, W = null, z = null, U = function() {
    return L().rmsGlobalLxBizParams || {};
}, F = function(e) {
    var t = L();
    q && !t.rmsGlobalLxBizParams && (t.rmsGlobalLxBizParams = {});
    var n = [ "account_id", "request_id" ];
    e && (P && P.getLxBizParams(), Object.keys(e).forEach(function(r) {
        !e[r] && 0 !== e[r] && !1 !== e[r] || "null" === e[r] || U()[r] && !(n.indexOf(r) < 0) || (t.rmsGlobalLxBizParams[r] = e[r]);
    }));
}, G = function(e, t) {
    e || (e = {});
    var n = U();
    return e.custom = Object.assign(Object.assign(Object.assign(Object.assign({}, e.custom), {
        common: n
    }), t || {}), {
        channel_id: (null == V ? void 0 : V()) || "",
        tenant_id: (null == J ? void 0 : J()) || ""
    }), e;
};

function X(e, t, n, r) {
    return new (n || (n = Promise))(function(a, o) {
        function i(e) {
            try {
                u(r.next(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                o(e);
            }
        }
        function s(e) {
            try {
                u(r.throw(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                o(e);
            }
        }
        function u(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                e(t);
            })).then(i, s);
        }
        u((r = r.apply(e, t || [])).next());
    });
}

var K = h.default.isAliPay, $ = h.default.isDPApp, Z = h.default.isWXH5, Q = h.default.isWxNative, Y = h.default.isMpWebview, ee = h.default.isMTApp, te = h.default.isNativeMp, ne = h.default.isWX, re = h.default.isAliPayNative, ae = h.default.isAliPayWebview, oe = h.default.isByteDance, ie = h.default.isByteDanceMicroApp, se = h.default.isByteDanceMicroAppWebview, ue = h.default.isUnionPay, ce = null, de = null, le = function() {
    var e = "", t = "";
    return {
        set: function(t) {
            e = t || A();
        },
        setPreview: function() {
            t = e;
        },
        get: function() {
            return t;
        },
        clear: function() {
            e = "";
        }
    };
}(), fe = function() {
    return L().rmsGlobalLxBizParams_v2 || {};
}, pe = function(e) {
    var t = L();
    te && !t.rmsGlobalLxBizParams_v2 && (t.rmsGlobalLxBizParams_v2 = {});
    var n = [];
    e && (P && P.getLxBizParams_v2(), Object.keys(e).forEach(function(r) {
        !e[r] && 0 !== e[r] && !1 !== e[r] || "null" === e[r] || fe()[r] && !(n.indexOf(r) < 0) || (t.rmsGlobalLxBizParams_v2[r] = e[r]);
    }));
}, he = function(e, t) {
    var n;
    return n = t ? t[e] : T(e), !ce || n && "null" !== n && "undefined" !== n || (n = (ce({}, S().route) || {})[e] || n), 
    n;
}, ve = function(e, t) {
    [ "refer_page", "tenant_Id", "shop_Id" ].forEach(function(e) {
        !function(e) {
            var t = L();
            t.rmsGlobalLxBizParams_v2 && t.rmsGlobalLxBizParams_v2[e] && delete t.rmsGlobalLxBizParams_v2[e];
        }(e);
    }), le.setPreview(), ce = ce || (null == t ? void 0 : t.getTabbarPageOptions), de = de || (null == t ? void 0 : t.getMemberId);
    var n, r, a, o, i = {};
    fe().app_platform || (i.app_platform = ne || Z || Q || Y ? 1 : ee ? 2 : $ ? 3 : K || re || ae ? 4 : h.default.h5Ua.indexOf("pabank") > -1 ? 6 : h.default.h5Ua.indexOf("cmblife") > -1 ? 7 : ue ? 5 : oe || ie || se ? 8 : "其他", 
    i.app_container = te ? 1 : Y || se || ae ? 2 : 3, i.app_id = h.default.MPInfo.getAppId() || ""), 
    i.promotion_monitoring = getApp({
        allowDefault: !0
    }).promotionMonitoring || "", i.source_type = function() {
        var e, t, n, r, a, o = (null === (n = null === (t = (e = g.default).getEnterOptionsSync) || void 0 === t ? void 0 : t.call(e)) || void 0 === n ? void 0 : n.scene) || "";
        return h.default.isAliPayNative ? (a = "ali", o = o || (null === (r = null === my || void 0 === my ? void 0 : my.getLaunchOptionsSync()) || void 0 === r ? void 0 : r.scene)) : h.default.isByteDanceMicroApp ? a = "tt" : h.default.isNativeMp && (a = "wx"), 
        "".concat(a, "-").concat(o);
    }(), i.qrcode_url = (null === (r = null === (n = g.default.getEnterOptionsSync) || void 0 === n ? void 0 : n.query) || void 0 === r ? void 0 : r.q) || (null === (o = null === (a = g.default.getEnterOptionsSync) || void 0 === a ? void 0 : a.query) || void 0 === o ? void 0 : o.p), 
    i.refer_page = le.get(), i.tenant_id = function(e) {
        var t;
        return h.default.MPInfo.isMerchant() && (t = function(e) {
            var t, n = (null === (t = null == g.default ? void 0 : g.default.getExtConfigSync) || void 0 === t ? void 0 : t.call(g.default)) || {};
            return n[e];
        }("tenantId")), t || he("tenantId", e) || he("tenantid", e);
    }(), i.shop_id = function(e) {
        return he("shopId", e) || he("shopid", e) || he("poiid", e) || he("poiId", e);
    }(), i.member_id = de && de(), X(void 0, void 0, void 0, d.default.mark(function e() {
        return d.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", new Promise(function(e, t) {
                    h.default.isNativeMp ? m.default.getUserInfoSync().then(function(t) {
                        e(t.userToken);
                    }) : e(h.default.Cookie.getCookie("RMS-USER"));
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    })).then(function(e) {
        pe({
            account_token: null == e ? void 0 : e.token
        });
    }), X(void 0, void 0, void 0, d.default.mark(function e() {
        return d.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.abrupt("return", new Promise(function(e, t) {
                    h.default.isNativeMp ? m.default.getUserInfoSync().then(function(t) {
                        e(t.openId);
                    }) : e(h.default.Cookie.getCookie("RMS-USER"));
                }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
    })).then(function(e) {
        pe({
            account_id: e
        });
    }), pe(i);
}, ge = function(e, t) {
    e || (e = {});
    var n = fe();
    return e.custom = Object.assign(Object.assign(Object.assign({}, e.custom), t || {}), {
        common_v2: n
    }), e;
}, me = le.set, ye = le.clear, Ie = {
    cid: "",
    sendPV: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0;
        this.cid = e, n.pageView(e, t);
    },
    sendPD: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 ? arguments[1] : void 0;
        t.pageDisappear(e);
    },
    sendMC: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = arguments.length > 3 ? arguments[3] : void 0;
        this.cid && (n = Object.assign({
            cid: this.cid
        }, n), r.moduleClick(e, t, n));
    },
    sendMV: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = arguments.length > 3 ? arguments[3] : void 0;
        this.cid && (n = Object.assign({
            cid: this.cid
        }, n), r.moduleView(e, t, n));
    },
    sendME: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = arguments.length > 3 ? arguments[3] : void 0;
        this.cid && (n = Object.assign({
            cid: this.cid
        }, n), r.moduleEdit(e, t, n));
    }
}, Ce = Ie.sendPV.bind(Ie), xe = Ie.sendMV.bind(Ie), Ee = Ie.sendMC.bind(Ie), Oe = Ie.sendME.bind(Ie), be = Ie.sendPD.bind(Ie), Pe = function() {
    var e = {};
    return {
        checkPvReport: function(t) {
            try {
                if (void 0 === e[A()]) return void y.addError({
                    name: "pv 上报异常",
                    msg: "页面 ".concat(A(), ", cid: ").concat(t, " pv上报前未正常进行初始化")
                });
                if (0 === e[A()]) return void y.addError({
                    name: "pv 上报异常",
                    msg: "页面 ".concat(A(), ", cid: ").concat(t, " 存在重复上报")
                });
                e[A()] = 0;
            } catch (e) {}
        },
        checkPageShow: function() {
            try {
                var t = A();
                e[t] = 1, setTimeout(function() {
                    1 === e[t] && y.addError({
                        name: "page lost pv send",
                        msg: t
                    }, {
                        level: "info"
                    });
                }, 0);
            } catch (e) {}
        }
    };
}(), Le = new (function() {
    function e() {
        l(this, e), this._getMixRMSGlobalLxBizParams = U, this.getMixRMSGlobalLxBizParams = fe, 
        this.sendPV = this.sendPV.bind(this), this.sendPD = this.sendPD.bind(this), this.sendMC = this.sendMC.bind(this), 
        this.sendMV = this.sendMV.bind(this), this.sendME = this.sendME.bind(this), this.clearLxBizParams = this.clearLxBizParams.bind(this), 
        this.appendCommonParam = this.appendCommonParam.bind(this), this.pageShowInit = this.pageShowInit.bind(this), 
        this.pageLoadInit = this.pageLoadInit.bind(this), this._getMixRMSGlobalLxBizParams = this._getMixRMSGlobalLxBizParams.bind(this);
    }
    return f(e, [ {
        key: "mpOnLaunch",
        value: function(e) {
            this.lx = null == e ? void 0 : e.lx, ve();
        }
    }, {
        key: "pageLoadInit",
        value: function(e, t, n) {
            try {
                this.initAppPromotionMonitoring(), this.lx = this.lx || (null == t ? void 0 : t.lx), 
                n && function(e, t) {
                    H = H || (null == t ? void 0 : t.lx), V = V || (null == t ? void 0 : t.getCustomChannel), 
                    J = J || (null == t ? void 0 : t.getTenantId), W = W || (null == t ? void 0 : t.getUserIdWithPlatform), 
                    z = z || (null == t ? void 0 : t.getTabbarPageOptions);
                    var n = {}, r = function(t) {
                        var n;
                        return n = e ? e[t] : T(t), !z || n && "null" !== n && "undefined" !== n || (n = (z({}, S().route) || {})[t] || n), 
                        n;
                    }, a = r("payOpenId"), o = r("tableNum"), i = r("shopId"), s = r("funcMode"), u = null == W ? void 0 : W();
                    if (n.qrUUid = r("uuid"), n.bizMode = r("bizMode"), n.payMode = r("payMode"), n.bizType = r("bizType"), 
                    n.newBizType = r("dishSource"), n.autoTakeOrder = r("autoTakeOrder"), n.accountMode = r("accountMode"), 
                    n.is_login = "", n.tenantId = r("tenantId"), n.qrcodeType = r("qrcodeType"), n.mtShopId = i, 
                    n.tableNum = o, n.funcMode = s, n.page_type = q ? 2 : 1, n.os = D ? 1 : 2, n.mp_type = h.default.MPInfo.isMerchant() ? 0 : 1, 
                    q) {
                        var c = h.default.MPInfo.getSystemInfo().system;
                        n.os = c && c.toLocaleLowerCase().indexOf("android") < 0 ? 1 : 2;
                    }
                    n.account_type = "", n.account_id = "", n.request_id = "".concat(function(e) {
                        var t = "";
                        try {
                            t = null == e ? void 0 : e.get("lxcuid");
                        } catch (e) {}
                        return t;
                    }(H) || u, "-").concat(Date.now()), B || q ? (n.account_type = 1, q ? m.default.getUserInfoSync().then(function(e) {
                        var t = e.openId;
                        n.account_id = t, F(n);
                    }) : n.account_id = u || "") : (N || j) && window.KNB ? (n.account_type = N ? 4 : 3, 
                    function(e) {
                        try {
                            window.KNB && window.KNB.ready(e);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            e();
                        }
                    }(function() {
                        window.KNB.getUserInfo({
                            success: function(e) {
                                n.account_id = e.userId, F(n);
                            }
                        });
                    })) : R ? (n.account_id = a || u, n.account_type = 2) : (n.account_id = u, n.account_type = 5), 
                    F(n);
                }(e, Object.assign(Object.assign({}, t), n)), ve(0, Object.assign({}, t)), h.default.isNativeMp || this.pageShowInit();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "pageLoadInit error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "initAppPromotionMonitoring",
        value: function(e) {
            h.default.isNativeMp && getApp && (getApp({
                allowDefault: !0
            }).promotionMonitoring = e || T("promotionMonitoring") || getApp({
                allowDefault: !0
            }).promotionMonitoring);
        }
    }, {
        key: "getPromotionMonitoring",
        value: function() {
            return h.default.isNativeMp && getApp && getApp({
                allowDefault: !0
            }).promotionMonitoring || "";
        }
    }, {
        key: "pageShowInit",
        value: function() {
            try {
                (function() {
                    var e, t, n, r, a;
                    if (te) me(); else if (Y || ae || se) try {
                        var o = {
                            data: {
                                action: "setCurrentViewH5Page",
                                data: document.location.href
                            }
                        };
                        Y ? null === (t = null === (e = null === wx || void 0 === wx ? void 0 : wx.miniProgram) || void 0 === e ? void 0 : e.postMessage) || void 0 === t || t.call(e, o) : ae ? null === (n = null === my || void 0 === my ? void 0 : my.postMessage) || void 0 === n || n.call(my, o) : se && (null === (a = null === tt || void 0 === tt ? void 0 : (r = tt.miniProgram).postMessage) || void 0 === a || a.call(r, o));
                    } catch (e) {}
                })(), Pe.checkPageShow();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "pageShowInit error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "appendCommonParam",
        value: function(e) {
            try {
                pe(e), F(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "appendCommonParam error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "clearLxBizParams",
        value: function() {
            try {
                (function() {
                    var e = L();
                    e.rmsGlobalLxBizParams_v2 = {
                        request_id: e.rmsGlobalLxBizParams_v2 && e.rmsGlobalLxBizParams_v2.request_id || ""
                    };
                })(), function() {
                    var e = L();
                    e.rmsGlobalLxBizParams = {
                        request_id: e.rmsGlobalLxBizParams && e.rmsGlobalLxBizParams.request_id || ""
                    };
                }();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "clearLxBizParams error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "clearCurrentVisitPage",
        value: function() {
            try {
                ye();
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "clearCurrentVisitPage error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "setCurrentVisitPage",
        value: function(e) {
            try {
                me(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "setCurrentVisitPage error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "sendPV",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = arguments.length > 3 ? arguments[3] : void 0;
            try {
                var a = G(t, n);
                a = ge(a, n), Ce(e, a, this.lx), r && r.ignoreCheck || Pe.checkPvReport(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "sendPV error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "sendPD",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                var t = G(e);
                t = ge(t), be(t, this.lx);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "sendPD error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "sendMC",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                var a = G(t, r);
                a = ge(a, r), Ee(e, a, n, this.lx);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "sendMC error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "sendMV",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                var a = G(t, r);
                a = ge(a, r), xe(e, a, n, this.lx);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "sendMV error",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "sendME",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                var a = G(t, r);
                a = ge(a, r), Oe(e, a, n, this.lx);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "sendME error",
                    msg: JSON.stringify(e)
                });
            }
        }
    } ]), e;
}())();

exports.LXReporter = Le;

var Se = function(e) {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, b()), {
        "promotion-monitoring": Le.getPromotionMonitoring()
    }), function() {
        var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.tenantId, a = void 0 === r ? "" : r;
        return a ? {
            "x-cardId": null !== (t = null === (e = m.default.getCardId) || void 0 === e ? void 0 : e.call(m.default, a)) && void 0 !== t ? t : ""
        } : {};
    }(e)), function(e) {
        try {
            var t = e || {};
            return {
                tenantId: (t.tenantId ? "" + t.tenantId : "") || (h.default.isNativeMp ? "" + ((null === (a = null === (r = g.default.getExtConfigSync) || void 0 === r ? void 0 : r.call(g.default)) || void 0 === a ? void 0 : a.tenantId) || "") : "")
            };
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            var n = e instanceof Error ? e.message : JSON.stringify(e);
            return y.addError({
                name: "设置商户上下文异常",
                msg: n
            }), {};
        }
        var r, a;
    }(e));
}, we = function(e) {
    var t = e.header || e.headers || {};
    t["app-container"] !== i.WEB && ("string" == typeof t["app-id"] && t["app-id"] || y.addError({
        name: "请求header缺少app-id字段或者字段类型有误！！！",
        msg: JSON.stringify(e)
    }, {
        category: "ajaxError"
    }), "string" == typeof t["app-version"] && t["app-version"] || y.addError({
        name: "请求header缺少app-version字段或者字段类型有误！！！",
        msg: JSON.stringify(e)
    }, {
        category: "ajaxError"
    })), "string" == typeof t.versionCode && t.versionCode || y.addError({
        name: "请求header缺少versionCode字段或者字段类型有误！！！",
        msg: JSON.stringify(e)
    }, {
        category: "ajaxError"
    }), t["app-container"] !== i.MP || !h.default.MPInfo.isMerchant() || "string" == typeof t.tenantId && t.tenantId || y.addError({
        name: "请求header缺少tenantId字段或者字段类型有误！！！",
        msg: JSON.stringify(e)
    }, {
        category: "ajaxError"
    });
}, Me = [ "oa-app-id" ], _e = [ "utm_source", "utm_campaign", "utm_content", "utm_media", "utm_term", "utm_extends" ], ke = function() {
    return Object.assign(Object.assign({}, function() {
        try {
            var e = {};
            return Me.forEach(function(t) {
                var n = T(t);
                n && (e[t] = n);
            }), e;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return y.addError({
                name: "设置公众号query参数异常",
                msg: JSON.stringify(e)
            }), {};
        }
    }()), function() {
        try {
            var e = {};
            return _e.forEach(function(t) {
                var n = T(t);
                n && (e[t] = n);
            }), e;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return y.addError({
                name: "设置UTM query参数异常",
                msg: JSON.stringify(e)
            }), {};
        }
    }());
}, Ae = h.default.isNativeMp, Te = h.default.isAliPayNative, Re = new (function() {
    function e() {
        l(this, e), this.requestConfig = {};
    }
    return f(e, [ {
        key: "init",
        value: function(e) {
            return this.requestConfig = e, Ae ? Te ? this.alipayRequest() : this.mpRequest() : this.webRequest();
        }
    }, {
        key: "mpRequest",
        value: function() {
            var e = this.requestConfig, t = e.url, n = e.method, r = e.header;
            return this.requestConfig = Object.assign(Object.assign({}, this.requestConfig), {
                url: h.default.urlAddQueryParams(t, ke()),
                method: n ? n.toUpperCase() : "GET",
                header: Object.assign(Object.assign({}, r), Se(r))
            }), we(this.requestConfig), this.requestConfig;
        }
    }, {
        key: "alipayRequest",
        value: function() {
            var e = this.requestConfig, t = e.method, n = e.header, r = e.url, a = e.fail, o = e.reportError;
            return this.requestConfig = Object.assign(Object.assign({}, this.requestConfig), {
                url: h.default.urlAddQueryParams(r, ke()),
                method: t ? t.toUpperCase() : "GET",
                headers: Object.assign(Object.assign({}, n), Se(n)),
                fail: function(e) {
                    e && e.errorMessage && (e.errMsg = e.errorMessage), a(e);
                }
            }), o && (this.requestConfig.reportError = function(e) {
                return e && (e.errMsg = e.errorMessage || ""), o(e);
            }), delete this.requestConfig.header, we(this.requestConfig), this.requestConfig;
        }
    }, {
        key: "webRequest",
        value: function() {
            var e = this.requestConfig, t = e.method, n = e.header, r = e.data, a = e.headers, o = e.params, i = Object.assign({}, n, a);
            return this.requestConfig = Object.assign(Object.assign({}, this.requestConfig), {
                method: t ? t.toLowerCase() : "get",
                headers: Object.assign(Object.assign({}, i), Se(i))
            }), "get" === this.requestConfig.method ? this.requestConfig.params = Object.assign(Object.assign({}, o || r), ke()) : (this.requestConfig.params = Object.assign(Object.assign({}, o || {}), ke()), 
            this.requestConfig.data = r), delete this.requestConfig.header, we(this.requestConfig), 
            this.requestConfig;
        }
    } ]), e;
}())();

function Ne() {
    return g.default.getStorageSync("RMS_APP_MOCK") || !1;
}

var De = new (function() {
    function e() {
        l(this, e);
    }
    return f(e, [ {
        key: "init",
        value: function(e, t) {
            if (h.default.isWxNative && t) try {
                this.sharkInstance = new t({
                    bizToken: e.appKey,
                    env: e.env || "product",
                    awaitConnectTime: e.awaitConnectTime || 700,
                    logLevel: e.logLevel || "warn",
                    owl: p.owl,
                    isOwlReport: !e.ignoreOwlReport
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "shark实例初始化异常",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "request",
        value: function(e, t) {
            return X(this, void 0, void 0, d.default.mark(function n() {
                return d.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!h.default.isWxNative || !this.sharkInstance) {
                            n.next = 2;
                            break;
                        }
                        return n.abrupt("return", this.sharkInstance.isOpen() ? this.sharkInstance.request(e, t) : Promise.resolve());

                      case 2:
                        return n.abrupt("return", Promise.resolve());

                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n, this);
            }));
        }
    } ]), e;
}())();

exports.Shark = De;

var je = function(e, t) {
    return new Promise(function(n, r) {
        if (Ne()) {
            var a = function(e, t, n, r) {
                var a = null;
                if (!e) return null;
                var o = "https://appmock.sankuai.com/";
                try {
                    var i, s = /https?:\/\/?(.+com)\//i, u = "", c = "", d = e.match(s), l = o.match(s);
                    if (d && (u = d[1] || "", c = d[2] || ""), !l || !l[1]) throw Error("Invalid Mock Domain");
                    i = l[1];
                    var f = e.match(/^(https?):\/\//), p = f && f[1] || "https", v = {
                        MKOriginHost: u,
                        MKOriginPort: c,
                        MKUnionId: m.default.getOpenId(),
                        MKScheme: p,
                        MKAppID: h.default.MPInfo.getAppId()
                    };
                    u !== i && (e = e.replace(u, i)), a = {
                        url: e,
                        header: v
                    };
                } catch (e) {}
                return a;
            }(e.url);
            a && (e.url = a.url, e.header = Object.assign(Object.assign({}, a.header), e.header));
        }
        var o = e.complete && k(e.complete), i = {}, s = Object.assign(Object.assign({}, e), {
            isRequest: !0,
            enableHttp2: !0,
            success: function(t) {
                var r = (null == t ? void 0 : t.statusCode) || (null == t ? void 0 : t.status);
                200 !== r && y.addError({
                    name: "[".concat(r, "]请求statusCode异常"),
                    msg: JSON.stringify({
                        method: i.method || "",
                        url: i.url || "",
                        header: i.header || "",
                        response: JSON.stringify(t)
                    })
                }, {
                    category: "ajaxError"
                }), !o && e.success && k(e.success) && e.success(t), n(t);
            },
            fail: function(t) {
                !o && e.fail && k(e.fail) ? (e.fail(t), n(t)) : r(t);
            },
            complete: function(t) {
                o && e.complete(t);
            }
        });
        t && (s.reportError = function(e) {
            return t(e);
        }), i = Re.init(s);
        var u = h.default.isWxNative ? (0, v.getSaftyRequest)(p.request) : p.request;
        if (e.openShark) {
            var c = i.url ? i.url.split("?")[0] : "";
            y.addCustom("sharkTotalCount", 1, {
                url: c
            });
            var d = Date.now();
            De.request(i).then(function(e) {
                e && e.req ? e.req.isFailover && y.addCustom("sharkFailCount", Date.now() - d, {
                    url: c,
                    reason: "降级"
                }) : (y.addCustom("sharkFailCount", Date.now() - d, {
                    url: c,
                    reason: h.default.isWxNative ? "建连失败" : "非微信环境"
                }), u(i));
            }).catch(function() {
                y.addCustom("sharkFailCount", Date.now() - d, {
                    url: c,
                    reason: "内部异常"
                }), u(i);
            });
        } else u(i);
    });
};

exports.request = je;

var qe, Be = {
    clearThemeCache: function(e) {
        var t = e.options;
        if (e.forceClear || (null == t ? void 0 : t.q) || (null == t ? void 0 : t.p) || (null == t ? void 0 : t.s)) try {
            ((g.default.getStorageInfoSync() || {}).keys || []).forEach(function(e) {
                e.includes("rms_decor") && g.default.removeStorageSync(e);
            });
        } catch (e) {}
    }
};

exports.Theme = Be, function(e) {
    e.LIGHT = "1", e.DARK = "2";
}(qe || (qe = {}));

var He = (c(n = {}, qe.LIGHT, "#333333"), c(n, qe.DARK, "#ffffff"), n), Ve = (c(r = {}, qe.LIGHT, "#222222"), 
c(r, qe.DARK, "#ffffff"), r), Je = "https://p0.meituan.net/scarlett/932659e7a41db4a4c1f52a87b0dce2be157687.gif", We = "https://p1.meituan.net/travelcube/1575d69653e044c55d828c18502c648012181.png", ze = "linear-gradient(to right bottom, #FFD100 0%, #FFC60C 100%)", Ue = {
    themeColor: [ 6, 10, 20, 30, 50, 70 ],
    themeFontColor: [ 30 ]
}, Fe = [ "themeColor" ];

function Ge(e) {
    for (var t, n = [], r = function() {
        var e = u(o[a], 2), r = e[0], i = e[1], s = (t = r) ? "--" + t.replace(/[A-Z]+/g, function(e) {
            return "-" + e.toLowerCase();
        }) : "";
        "themeColor" !== r && "themeFontColor" !== r || Ue[r].forEach(function(e) {
            n.push("".concat(s, "-transparent-").concat(e, ": ").concat(function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return "rgba(".concat([ e.slice(1, 3), e.slice(3, 5), e.slice(5) ].map(function(e) {
                    return parseInt("0x" + e, 16);
                }).join(", "), ", ").concat(t / 100, ")");
            }(i, e)));
        }), "themeBgColor" === r && n.push("--theme-bg:" + i), "themeLoadingIcon" !== r ? n.push("".concat(s, ":").concat(i)) : n.push("".concat(s, ":url(").concat(i, ")"));
    }, a = 0, o = Object.entries(e); a < o.length; a++) r();
    return n;
}

function Xe(e) {
    return !e || Fe.find(function(t) {
        return !e[t];
    });
}

var Ke = function() {
    function e() {
        l(this, e), this.brand = {
            brandColor: "#FFD100",
            brandColorBorder: "#FFD100",
            brandColorBg: "#FFF8D9",
            brandColorBgLinear: ze,
            brandColorText: Ve[qe.LIGHT],
            themeLoadingIcon: Je
        }, this.orderDish = {
            themeColor: "#ffc700",
            themeBgColor: "linear-gradient(134deg, #ffde87 0%, #ffc400 100%)",
            themeFontColor: He[qe.LIGHT],
            themeLoadingIcon: Je
        }, this.member = {
            defaultHeadImg: We
        }, this.cssVar = "", this.updateCssVar();
    }
    return f(e, [ {
        key: "update",
        value: function(e) {
            var t = e || {}, n = t.themeColor, r = t.suitType, a = t.loadingIcon, o = t.lightColor, i = t.defaultHeadImg;
            Xe(e) || (this.brand = {
                brandColor: n,
                brandColorBorder: n,
                brandColorBg: o,
                brandColorText: Ve[r],
                brandColorBgLinear: "FFD100" === n ? ze : "linear-gradient(to right bottom, ".concat(n, " 0%, ").concat(n, " 100%)"),
                themeLoadingIcon: a
            }, this.orderDish = {
                themeColor: n,
                themeBgColor: n,
                themeFontColor: He[r],
                themeLoadingIcon: a
            }, this.member = {
                defaultHeadImg: null != i ? i : We
            }), this.updateCssVar();
        }
    }, {
        key: "updateCssVar",
        value: function() {
            var e = Ge(this.orderDish), t = Ge(this.brand);
            this.cssVar = e.concat(t).join(";");
        }
    }, {
        key: "getTheme",
        value: function() {
            return this.cssVar;
        }
    }, {
        key: "getOldShopTheme",
        value: function(e) {
            var t = e || {}, n = t.themeColor, r = t.suitType, a = t.loadingIcon, o = {
                themeColor: n,
                themeBgColor: n,
                themeFontColor: He[r],
                themeLoadingIcon: a
            };
            return Ge(Xe(o) ? this.orderDish : o).join(";");
        }
    } ], [ {
        key: "getInstance",
        value: function() {
            return e.instance || (e.instance = new e()), e.instance;
        }
    } ]), e;
}();

exports.ThemeModel = Ke;

var $e = new (function() {
    function e() {
        l(this, e), this.model = Ke.getInstance();
    }
    return f(e, [ {
        key: "initTheme",
        value: function(e) {
            var t = (e || {}).fail, n = (g.default.getExtConfigSync && g.default.getExtConfigSync() || {}).decorationConfig, r = void 0 === n ? {} : n;
            this.model.update(r), !r && t("全局装修配置读取失败");
        }
    } ]), e;
}())();

exports.ThemeControl = $e;

var Ze = function() {
    function e() {
        l(this, e), this.topics = {};
    }
    return f(e, [ {
        key: "subscribe",
        value: function(e, t) {
            this.topics[e] || (this.topics[e] = []), this.topics[e].push(t);
        }
    }, {
        key: "unsubscribe",
        value: function(e, t) {
            if (this.topics[e]) {
                var n = this.topics[e].findIndex(function(e) {
                    return e === t;
                });
                n >= 0 && this.topics[e].splice(n, 1);
            }
        }
    }, {
        key: "publish",
        value: function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            this.topics[e] && this.topics[e].forEach(function(e) {
                e && e.apply(void 0, n);
            });
        }
    } ], [ {
        key: "getInstance",
        value: function() {
            return e.instance || (e.instance = new e()), e.instance;
        }
    } ]), e;
}();

exports.Observer = Ze;

var Qe = y, Ye = function() {
    function e(t, n) {
        l(this, e), this.name = t, this.status = 0, this.startTime = Date.now(), this.isFinish = !1, 
        this.silence = !!n;
    }
    return f(e, [ {
        key: "success",
        value: function() {
            this.report(200);
        }
    }, {
        key: "fail",
        value: function(e) {
            this.report(e);
        }
    }, {
        key: "report",
        value: function(e) {
            if (this.isFinish) return !1;
            if (this.status = e, this.isFinish = !0, !this.silence) {
                var t = Date.now() - this.startTime;
                Qe.addApi("Transaction-" + this.name, 200, this.status, t);
            }
            return !0;
        }
    } ]), e;
}();

exports.Transaction = Ye;

var et = function(e, t, n, r) {
    return X(this, void 0, void 0, d.default.mark(function a() {
        var o, i;
        return d.default.wrap(function(a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                return o = new Ye(e, !!r), a.prev = 1, a.next = 4, t(o);

              case 4:
                return i = a.sent, a.abrupt("return", (n ? setTimeout(function() {
                    o.fail(451);
                }, 1e4) : o.success(), i));

              case 8:
                return a.prev = 8, a.t0 = a.catch(1), a.abrupt("return", (Qe.addError("Transaction-".concat(e, "-").concat((null == a.t0 ? void 0 : a.t0.message) || (null == a.t0 ? void 0 : a.t0.name) || ""), a.t0), 
                o.fail(450), null));

              case 11:
              case "end":
                return a.stop();
            }
        }, a, null, [ [ 1, 8 ] ]);
    }));
}, nt = function() {
    return h.default.MPEnv.get();
}, rt = function() {
    return (0, m.getMenuOrderHost)(nt());
};

exports.updateApp = function(e, t) {
    try {
        var n = g.default.getUpdateManager();
        n.onUpdateReady(function() {
            y.addLog("forceUpdateWxAppSuccess", {
                extraInfo: "".concat(e ? "强制" : "", "更新小程序成功,logOptions:").concat(JSON.stringify(t))
            }), e ? n.applyUpdate() : g.default.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启应用？",
                success: function(e) {
                    e.confirm ? n.applyUpdate() : e.cancel && y.addLog("cancel_update", {
                        extraInfo: "用户取消更新,logOptions:" + JSON.stringify(t)
                    });
                }
            });
        }), n.onUpdateFailed(function() {
            y.addError({
                name: "更新小程序失败",
                msg: JSON.stringify(t)
            });
        });
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        y.addError(e);
    }
}, exports.getReviewHost = function() {
    var e = "https://canyin-openapi.meituan.com";
    switch (nt()) {
      case "production":
        break;

      case "ST":
      case "staging":
        e = "https://rmsreview.st.meituan.com";
        break;

      default:
        e = "https://rmsreview.test.meituan.com";
    }
    return e;
}, exports.getLoginHost = function() {
    var e = nt(), t = "https://rms.sjst.test.meituan.com";
    switch (e) {
      case "production":
        t = "https://pos.meituan.com";
        break;

      case "development":
      case "test":
        t = "https://rms.sjst.test.meituan.com";
        break;

      case "ST":
      case "staging":
        t = "https://rms.sjst.st.meituan.com";
        break;

      default:
        t = t.replace(/^(.*\/\/)?(.*?)\./, "$1".concat(e, "-sl-$2."));
    }
    return t;
}, exports.getMemberHost = function() {
    return (0, m.getLoginHost)(nt());
}, exports.getTakeAwayHost = function() {
    var e = nt(), t = "https://canting.sjst.test.meituan.com";
    switch (e) {
      case "production":
        t = "https://rmstakeaway.meituan.com";
        break;

      case "test":
        t = "https://canting.sjst.test.meituan.com";
        break;

      case "ST":
      case "staging":
        t = "https://canting.sjst.st.meituan.com";
        break;

      default:
        t = t.replace(/^(.*\/\/)?(.*?)\./, "$1".concat(e, "-sl-$2."));
    }
    return t;
}, exports.getDefaultHost = rt, exports.getEnv = nt, exports.initEnv = function(e) {
    h.default.MPEnv.set(e || "production");
    var t = nt();
    p.owl.config({
        devMode: "production" !== t
    });
}, exports.transactionOnce = function(e) {
    return e.__transactionCache || (e.__transactionCache = {}), function(t, n, r) {
        return X(this, void 0, void 0, d.default.mark(function a() {
            var o;
            return d.default.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return o = et(t, n, r, !!e.__transactionCache[t]), e.__transactionCache[t] = !0, 
                    a.next = 4, o;

                  case 4:
                    return a.abrupt("return", a.sent);

                  case 5:
                  case "end":
                    return a.stop();
                }
            }, a);
        }));
    };
}, exports.transaction = et;

var at, ot = new (function() {
    function e() {
        l(this, e), this.stack = [], this.timer = null, this.maxSize = 2, this.maxRetryTimes = 3, 
        this.source = 0;
    }
    return f(e, [ {
        key: "init",
        value: function(e) {
            this.stack = [], this.timeout = e.timeout || 2e3, this.maxSize = e.maxSize || 2, 
            this.source = e.source;
        }
    }, {
        key: "startTimer",
        value: function() {
            var e = this;
            this.timer = setTimeout(function() {
                e.clearStuck();
            }, this.timeout);
        }
    }, {
        key: "clearStuck",
        value: function() {
            this.stack.length && (this.request(), this.timer && clearTimeout(this.timer));
        }
    }, {
        key: "report",
        value: function(e) {
            var t = e.moduleId, n = void 0 === t ? "" : t, r = e.eventType, a = void 0 === r ? 1 : r, o = e.extend, i = void 0 === o ? {} : o;
            this.stack.length >= this.maxSize ? this.clearStuck() : (this.timer && clearTimeout(this.timer), 
            this.stack.push({
                ts: Date.now(),
                moduleId: n,
                eventType: a,
                extend: JSON.stringify(i)
            }), this.startTimer());
        }
    }, {
        key: "request",
        value: function() {
            return X(this, void 0, void 0, d.default.mark(function e() {
                var t, n, r, a;
                return d.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.stack.concat([]), this.stack = [], n = {
                            source: this.source,
                            events: t
                        }, e.next = 5, m.default.getUserInfoSync();

                      case 5:
                        r = e.sent, a = r.userTokenStr, je({
                            method: "POST",
                            url: rt() + "/api/v1/rmsmina/c/useraction/upload",
                            header: {
                                poiId: M("shopId") || "",
                                tenantId: M("tenantId") || "",
                                "X-appId": h.default.MPInfo.getAppId(),
                                "X-user": a,
                                appCode: _()
                            },
                            data: n
                        });

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
        }
    } ]), e;
}())();

exports.advertiseReporter = ot, function(e) {
    e[e.Timeout = 0] = "Timeout", e[e.Fail = 1] = "Fail";
}(at || (at = {}));

var it, st, ut = [ "异步组件分包下载超时", "异步组件分包下载失败" ], ct = [ "async-main/", "async-review/" ], dt = [ "async-main" ], lt = new (function() {
    function e() {
        var t = this;
        l(this, e), this.listener = function(e) {
            var n = e.errMsg, r = e.subpackage, a = n.includes("timeout") ? at.Timeout : at.Fail, o = ut[a];
            a && r && Array.isArray(r) && r.some(function(e) {
                return !ct.includes(e);
            }) && t.showRelaunchTip(), y.addError({
                name: o,
                msg: JSON.stringify(e)
            }, {
                category: "resourceError"
            });
        }, this.componentLoadInfo = {}, this.jsLoadInfo = {}, this.hasLoadPackageList = [], 
        this.hasShowRelaunchTip = !1, this.requireAsync = this.requireAsync.bind(this), 
        this.simpleLoadJS = this.simpleLoadJS.bind(this), this.loadJS = this.loadJS.bind(this);
    }
    return f(e, [ {
        key: "showRelaunchTip",
        value: function() {
            var e = this;
            this.hasShowRelaunchTip || (this.hasShowRelaunchTip = !0, g.default.getLimoRuntime().showToast({
                title: "网络异常，请点击右上角【...】重新进入小程序",
                icon: "none",
                duration: 5e3,
                complete: function() {
                    e.hasShowRelaunchTip = !1;
                }
            }));
        }
    }, {
        key: "onError",
        value: function() {
            h.default.isWxNative && wx.onLazyLoadError && wx.onLazyLoadError(this.listener);
        }
    }, {
        key: "offError",
        value: function() {
            h.default.isWxNative && wx.offLazyLoadError && wx.offLazyLoadError(this.listener);
        }
    }, {
        key: "reportComponentMountedTotal",
        value: function(e) {
            var t = this;
            if (h.default.isWxNative) try {
                var n = w(), r = Date.now();
                e && e.length && e.forEach(function(e) {
                    var a = {
                        page: n,
                        start: r
                    };
                    t.componentLoadInfo[e] ? (t.componentLoadInfo[e] = t.componentLoadInfo[e].filter(function(e) {
                        return e.page !== n;
                    }), t.componentLoadInfo[e].push(a)) : t.componentLoadInfo[e] = [ a ], y.addCustom("asyncComponentMountedTotalCount", 1, {
                        component: e,
                        page: n
                    });
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "上报小程序异步组件挂载方法异常",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "reportComponentMountedSuccess",
        value: function(e) {
            if (h.default.isWxNative) try {
                var t = w(), n = Date.now();
                if (this.componentLoadInfo[e]) {
                    var r = this.componentLoadInfo[e].find(function(e) {
                        return e.page === t;
                    });
                    r && (y.addCustom("asyncComponentMountedSuccessCount", n - r.start, {
                        component: e,
                        page: t
                    }), this.componentLoadInfo[e] = this.componentLoadInfo[e].filter(function(e) {
                        return e.page !== t;
                    }));
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                y.addError({
                    name: "上报小程序异步组件挂载success方法异常",
                    msg: JSON.stringify(e)
                });
            }
        }
    }, {
        key: "requireAsync",
        value: function(e) {
            return X(this, void 0, void 0, d.default.mark(function t() {
                var n, r, a, o;
                return d.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (h.default.isWxNative, n = Date.now(), r = e.match(/^(\.\.\/)+(\S[^/]+)\/(\S+\/)*(.+)\.js$/)[2], 
                        a = {
                            start: n,
                            retry: 0
                        }, !(h.default.compareVersion(h.default.MPInfo.getSystemInfo().SDKVersion, "2.19.2") < 0)) {
                            t.next = 12;
                            break;
                        }
                        return t.prev = 3, t.next = 6, this.simpleLoadJS(r, e);

                      case 6:
                        return t.abrupt("return", t.sent);

                      case 9:
                        return t.prev = 9, t.t0 = t.catch(3), t.abrupt("return", Promise.reject(t.t0));

                      case 12:
                        if (!this.hasLoadPackageList.includes(r)) {
                            t.next = 15;
                            break;
                        }
                        return o = require(e), t.abrupt("return", (y.addCustom("asyncPackageLoadSuccess", Date.now() - a.start, {
                            packageName: r,
                            retry: 0,
                            isPackageFirst: !1
                        }), o));

                      case 15:
                        return this.jsLoadInfo[r] && this.jsLoadInfo[r].requirePromise || (a.requirePromise = this.loadJS(r, e), 
                        this.jsLoadInfo[r] = a), t.prev = 16, t.next = 19, this.jsLoadInfo[r].requirePromise;

                      case 19:
                        return t.abrupt("return", require(e));

                      case 22:
                        return t.prev = 22, t.t1 = t.catch(16), t.abrupt("return", Promise.reject(t.t1));

                      case 25:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 3, 9 ], [ 16, 22 ] ]);
            }));
        }
    }, {
        key: "simpleLoadJS",
        value: function(e, t) {
            return X(this, void 0, void 0, d.default.mark(function n() {
                var r, a;
                return d.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return r = Date.now(), n.prev = 1, n.next = 4, require.async(t);

                      case 4:
                        return a = n.sent, n.abrupt("return", (y.addCustom("asyncJSLoadSuccess", Date.now() - r, {
                            jsPath: t
                        }), a));

                      case 8:
                        return n.prev = 8, n.t0 = n.catch(1), n.abrupt("return", (dt.includes(e) || this.showRelaunchTip(), 
                        y.addError({
                            name: t + "加载失败",
                            msg: JSON.stringify(n.t0)
                        }, {
                            category: "resourceError"
                        }), y.addCustom("asyncJSLoadFail", Date.now() - r, {
                            jsPath: t
                        }), Promise.reject(n.t0)));

                      case 11:
                      case "end":
                        return n.stop();
                    }
                }, n, this, [ [ 1, 8 ] ]);
            }));
        }
    }, {
        key: "loadJS",
        value: function(e, t) {
            return X(this, void 0, void 0, d.default.mark(function n() {
                var r;
                return d.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.prev = 0, n.next = 3, require.async(t);

                      case 3:
                        return r = n.sent, n.abrupt("return", (y.addCustom("asyncPackageLoadSuccess", Date.now() - this.jsLoadInfo[e].start, {
                            packageName: e,
                            retry: this.jsLoadInfo[e].retry,
                            isPackageFirst: !0
                        }), this.hasLoadPackageList.push(e), delete this.jsLoadInfo[e], r));

                      case 7:
                        return n.prev = 7, n.t0 = n.catch(0), n.abrupt("return", this.jsLoadInfo[e].retry < 3 ? (this.jsLoadInfo[e].retry += 1, 
                        this.loadJS(e, t)) : (dt.includes(e) || this.showRelaunchTip(), y.addError({
                            name: e + "分包加载失败",
                            msg: JSON.stringify(n.t0)
                        }, {
                            category: "resourceError"
                        }), y.addCustom("asyncPackageLoadFail", Date.now() - this.jsLoadInfo[e].start, {
                            packageName: e,
                            isPackageFirst: !0
                        }), delete this.jsLoadInfo[e], Promise.reject(n.t0)));

                      case 10:
                      case "end":
                        return n.stop();
                    }
                }, n, this, [ [ 0, 7 ] ]);
            }));
        }
    } ]), e;
}())();

exports.LazyLoad = lt, function(e) {
    e[e.Normal = 1] = "Normal", e[e.Hundredth = 2] = "Hundredth";
}(it || (it = {})), function(e) {
    e[e.Common = 1] = "Common", e[e.Billing = 2] = "Billing";
}(st || (st = {}));

var ft = (c(a = {}, it.Normal, 1), c(a, it.Hundredth, 100), a);

var pt, ht, vt, gt = {
    default: {
        year: "-",
        month: "-",
        day: "",
        connector: " 至 "
    },
    "zh-cn": {
        year: "年",
        month: "月",
        day: "日",
        connector: " - "
    }
};

function mt(e, t) {
    return t !== pt.ZH_CN && e < 10 ? "0" + e : e;
}

function yt(e, t, n) {
    if (!e) return "";
    var r = new Date(e), a = r.getFullYear(), o = mt(r.getMonth() + 1, t), i = mt(r.getDate(), t), s = mt(r.getHours(), pt.DEFAULT), u = mt(r.getMinutes(), pt.DEFAULT), c = mt(r.getSeconds(), pt.DEFAULT), d = gt[t];
    return a + d.year + o + d.month + i + d.day + (n ? " ".concat(s, ":").concat(u, ":").concat(c) : "");
}

exports.LOCALE = pt, function(e) {
    e.DEFAULT = "default", e.ZH_CN = "zh-cn";
}(pt || (exports.LOCALE = pt = {})), function(e) {
    e[e.DIRECT = 1] = "DIRECT", e[e.LOGIN = 2] = "LOGIN", e[e.OTHER_MIN_APP = 3] = "OTHER_MIN_APP", 
    e[e.LOCAL_MIN_APP = 4] = "LOCAL_MIN_APP", e[e.CALL = 5] = "CALL", e[e.WX_VIDEO_LIVE = 6] = "WX_VIDEO_LIVE", 
    e[e.WX_VIDEO_MAIN = 7] = "WX_VIDEO_MAIN", e[e.WX_VIDEO = 8] = "WX_VIDEO", e[e.WECHAT = 9] = "WECHAT", 
    e[e.ENTERPRISE = 10] = "ENTERPRISE", e[e.TO_DISH_DETAIL = 11] = "TO_DISH_DETAIL", 
    e[e.TO_DISH_CATE = 12] = "TO_DISH_CATE", e[e.SCAN_CODE = 13] = "SCAN_CODE", e[e.COMP_CLICK = 14] = "COMP_CLICK";
}(ht || (ht = {})), function(e) {
    e[e.MEMBER = 10] = "MEMBER", e[e.RECHARGE = 30] = "RECHARGE", e[e.VOUCHER = 50] = "VOUCHER";
}(vt || (vt = {}));

var It = "portal-user", Ct = "decorate-user", xt = function(e) {
    if (!e) return [ "", {} ];
    var t = {}, n = e.split("?"), r = u(n, 2), a = r[0];
    return r[1].split("&").forEach(function(e) {
        var n = e.split("="), r = u(n, 2), a = r[0], o = r[1];
        o && (t[a] = o);
    }), [ a, t ];
}, Et = function(e) {
    return e && Object.keys(e).length ? Object.entries(e).map(function(e) {
        var t = u(e, 2), n = t[0], r = t[1];
        return "".concat(n, "=").concat(r);
    }).join("&") : "";
};

exports.tapActionHandler = function(e) {
    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = e || {}, o = a.actionType, i = a.actionValue, s = a.extraParams, c = r.compInst;
    switch (o) {
      case ht.LOGIN:
        var d, l, f = "", p = {};
        s && Object.keys(s).length ? p = s : i && (d = xt(i), f = (l = u(d, 2))[0], p = l[1]), 
        f = "".concat(f, "?").concat(Et(p));
        var v = {
            sceneType: vt.MEMBER
        };
        return delete p.bizType, void (c && c.showDialog("universal-login", {
            isDialog: !0,
            useNewAuthVersion: !0,
            commonHeaders: p,
            agreementParams: [ v ],
            hasAgreed: !1,
            useRevoke: !0,
            revokePrefix: "universalLogin"
        }, {
            position: "bottom"
        }));

      case ht.DIRECT:
        if (!i) return;
        var m = i.indexOf("cardId") > -1, I = function() {
            var e = [ It, "user", Ct ];
            if (!g.default.isH5 && (g.default.isNativeMp || g.default.isAliPayMp || g.default.isByteDanceMicroApp)) {
                var t = "undefined" != typeof getCurrentPages && getCurrentPages() || [], n = (t.length > 0 ? t[t.length - 1] : {
                    route: "app",
                    options: g.default.getEnterOptionsSync && g.default.getEnterOptionsSync() && g.default.getEnterOptionsSync().query || {}
                }).route;
                return e.some(function(e) {
                    return n.indexOf(e) > -1;
                });
            }
            return e.some(function(e) {
                return window.location.pathname.indexOf(e) > -1;
            });
        }();
        if (m && I) {
            var C = xt(i), x = u(C, 2), E = x[0], O = x[1];
            O.decorationDefaultCardId && (O.cardId = O.decorationDefaultCardId), c && c.revoke("onJumpWithCardId", "".concat(E, "?").concat(Et(O)));
        } else h.default.navigateTo({
            url: i
        });
        return;

      case ht.OTHER_MIN_APP:
        var b = JSON.parse(i || "{}"), P = b.appId, L = b.path;
        return P ? void g.default.navigateToMiniProgram({
            appId: P,
            path: L
        }) : void y.addError({
            name: "tapActionHandler-ERROR",
            msg: "跳转appId为空"
        });

      case ht.LOCAL_MIN_APP:
        var S = JSON.parse(i || "{}"), w = S.path;
        return w ? void h.default.navigateTo({
            url: w
        }) : void y.addError({
            name: "tapActionHandler-ERROR",
            msg: "跳转path为空"
        });

      case ht.CALL:
        var M = JSON.parse(i || "{}"), _ = M.phoneNumber;
        return _ ? void (g.default && g.default.makePhoneCall({
            phoneNumber: _
        })) : void y.addError({
            name: "tapActionHandler-ERROR",
            msg: "phoneNumber为空"
        });

      case ht.WX_VIDEO_LIVE:
        var k = JSON.parse(i || "{}"), A = k.videoAccount;
        return A ? void (g.default && wx.getChannelsLiveInfo && wx.getChannelsLiveInfo({
            finderUserName: A,
            success: function(e) {
                g.default && wx.openChannelsLive && wx.openChannelsLive({
                    finderUserName: A,
                    feedId: e.feedId,
                    nonceId: e.nonceId
                });
            },
            fail: function(e) {
                (e.errno || e.err_code) && (y.addLog("WX_VIDEO_LIVE跳转错误", {
                    level: "ERROR",
                    extraInfo: e
                }), g.default.showToast({
                    title: "抱歉，跳转链接出错啦~",
                    icon: "none"
                }));
            }
        })) : void y.addError({
            name: "tapActionHandler-ERROR",
            msg: "WX_VIDEO_LIVE-videoAccount为空"
        });

      case ht.WX_VIDEO_MAIN:
        var T = JSON.parse(i || "{}"), R = T.videoAccount;
        return R ? void (g.default && wx.openChannelsUserProfile && wx.openChannelsUserProfile({
            finderUserName: R,
            fail: function(e) {
                (e.errno || e.err_code) && (y.addLog("WX_VIDEO_MAIN跳转错误", {
                    level: "ERROR",
                    extraInfo: e
                }), g.default.showToast({
                    title: "抱歉，跳转链接出错啦~",
                    icon: "none"
                }));
            }
        })) : void y.addError({
            name: "tapActionHandler-ERROR",
            msg: "WX_VIDEO_MAIN-videoAccount为空"
        });

      case ht.WX_VIDEO:
        var N = JSON.parse(i || "{}"), D = N.videoAccount, j = N.videoId;
        return j && D ? void (g.default && wx.openChannelsActivity && wx.openChannelsActivity({
            finderUserName: D,
            feedId: j,
            fail: function(e) {
                (e.errno || e.err_code) && (y.addLog("WX_VIDEO跳转错误", {
                    level: "ERROR",
                    extraInfo: e
                }), g.default.showToast({
                    title: "抱歉，跳转链接出错啦~",
                    icon: "none"
                }));
            }
        })) : void y.addError({
            name: "tapActionHandler-ERROR",
            msg: "WX_VIDEO: videoId or videoAccount为空"
        });

      case ht.WECHAT:
        return;

      case ht.ENTERPRISE:
        var q = JSON.parse(i || "{}"), B = q.path, H = q.enterpriseId;
        return B && H ? void (g.default && wx.openCustomerServiceChat && wx.openCustomerServiceChat({
            extInfo: {
                url: B
            },
            corpId: H,
            fail: function(e) {
                e && (y.addLog("ENTERPRISE跳转错误", {
                    level: "ERROR",
                    extraInfo: e
                }), g.default.showToast({
                    title: "抱歉，跳转链接出错啦~",
                    icon: "none"
                }));
            }
        })) : void y.addError({
            name: "tapActionHandler-ERROR",
            msg: "ENTERPRISE: path or enterpriseId为空"
        });

      case ht.TO_DISH_DETAIL:
        var V = JSON.parse(i || "{}"), J = V.spuId, W = V.spuName;
        return void ((null === (t = g.default.getLimoRuntime().limoUseCustomHandler) || void 0 === t ? void 0 : t.openDish) && g.default.getLimoRuntime().limoUseCustomHandler.openDish(J, W));

      case ht.TO_DISH_CATE:
        var z = JSON.parse(i || "{}"), U = z.cateId, F = z.cateName;
        return void ((null === (n = g.default.getLimoRuntime().limoUseCustomHandler) || void 0 === n ? void 0 : n.openCate) && g.default.getLimoRuntime().limoUseCustomHandler.openCate(U, F));

      case ht.SCAN_CODE:
        return void (g.default && g.default.scanCode({
            success: function(e) {
                h.default.navigateTo({
                    url: "/pages/splash/index?q=" + encodeURIComponent(e.result),
                    fail: function(e) {
                        e && (y.addLog("SCAN_CODE跳转错误", {
                            level: "ERROR",
                            extraInfo: e
                        }), g.default.showToast({
                            title: "抱歉，跳转链接出错啦~",
                            icon: "none"
                        }));
                    }
                });
            },
            fail: function(e) {
                e && (y.addLog("SCAN_CODE扫码错误", {
                    level: "ERROR",
                    extraInfo: e
                }), g.default.showToast({
                    title: "抱歉，出错啦~",
                    icon: "none"
                }));
            }
        }));

      case ht.COMP_CLICK:
        return void (c && c.triggerEvent("decorationCompClick", JSON.parse(i || "{}")));

      default:
        return;
    }
};