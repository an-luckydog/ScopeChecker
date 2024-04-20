Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.LimoPage = exports.LimoCoreFactory = exports.LimoApp = void 0;

var e = require("../../../b/helpers/typeof"), t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, o = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, u = /^\s+|\s+$/g;

function s(e) {
    return e ? e.replace(u, "") : "";
}

function l(e, t) {
    void 0 === t && (t = "rem");
    var n = Number(e), o = 0;
    if (!Number.isNaN(n)) switch (t) {
      case "vw":
        o = .1333333 * n;
        break;

      case "px":
        o = n / 2;
        break;

      case "rem":
        o = n / 28;
        break;

      default:
        o = n;
    }
    return o + t;
}

var p = function(e) {
    var u, l = {};
    try {
        if (!e || "string" != typeof e) return l;
        for (var p = function(e) {
            if (!e) return [];
            var u = 1, l = 1;
            function p(e) {
                var t = e.match(n);
                t && (u += t.length);
                var o = e.lastIndexOf("\n");
                l = ~o ? e.length - o : l + e.length;
            }
            function f() {
                var e = {
                    line: u,
                    column: l
                };
                return function(t) {
                    return t.position = new g(e), d(), t;
                };
            }
            function g(e) {
                this.start = e, this.end = {
                    line: u,
                    column: l
                };
            }
            function h(t) {
                var n = t.exec(e);
                if (n) {
                    var o = n[0];
                    return p(o), e = e.slice(o.length), n;
                }
            }
            function d() {
                h(o);
            }
            function v(e) {
                var t;
                for (e = e || []; t = y(); ) !1 !== t && e.push(t);
                return e;
            }
            function y() {
                var t = f();
                if ("/" === e.charAt(0) && "*" === e.charAt(1)) {
                    for (var n = 2; "" !== e.charAt(n) && ("*" !== e.charAt(n) || "/" !== e.charAt(n + 1)); ) ++n;
                    if (n += 2, "" === e.charAt(n - 1)) throw new Error("End of comment missing");
                    var o = e.slice(2, n - 2);
                    return l += 2, p(o), e = e.slice(n), l += 2, t({
                        type: "comment",
                        comment: o
                    });
                }
            }
            function w() {
                var e = f(), n = h(r);
                if (n) {
                    if (y(), !h(i)) throw new Error("property missing ':'");
                    var o = h(a), u = e({
                        type: "declaration",
                        property: s(n[0].replace(t, "")),
                        value: o ? s(o[0].replace(t, "")) : ""
                    });
                    return h(c), u;
                }
            }
            return g.prototype.content = e, d(), function() {
                var e, t = [];
                for (v(t); e = w(); ) !1 !== e && (t.push(e), v(t));
                return t;
            }();
        }(e), f = 0, g = p.length; f < g; f++) {
            var h, d = p[f], v = d.property;
            v && (v.startsWith("--") ? (h = d.value) && (l[v] = h) : (h = d.value) && (l[(u = v, 
            u.split("-").reduce(function(e, t, n) {
                return t = t.toLowerCase(), e + (n ? function(e) {
                    return e[0].toLocaleUpperCase() + e.slice(1);
                }(t) : t);
            }, ""))] = h));
        }
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.warn(e);
    }
    return l;
};

function f(e, t) {
    if (void 0 === t && (t = "rem"), "string" != typeof e && "rem" === t) return e;
    var n = p(e);
    return Object.keys(n).forEach(function(e) {
        n[e].indexOf("rpx") > -1 && (n[e].match(/([0-9|.]+?)\s*(rpx)/g) || []).forEach(function(o) {
            var r = o.replace("rpx", "").trim();
            isNaN(Number(r)) ? (console.warn("cannot convert ".concat(n[e])), delete n[e]) : n[e] = n[e].replace(o, l(r, t));
        });
    }), n;
}

var g, h = function() {
    return "undefined" != typeof getCurrentPages && getCurrentPages() || [];
}, d = function() {
    var e = h();
    return e.length > 0 ? e[e.length - 1] : {
        route: "app",
        options: my.getEnterOptionsSync && my.getEnterOptionsSync() && my.getEnterOptionsSync().query || {}
    };
}, v = function() {
    var e, t, n, o = {};
    if (window) {
        var r = null === (e = window.location.search) || void 0 === e ? void 0 : e.split("?")[1];
        null === (t = null == r ? void 0 : r.split("&")) || void 0 === t || t.forEach(function(e) {
            var t = null == e ? void 0 : e.split("="), n = t[0], r = decodeURIComponent(t[1]);
            o[n] = r;
        });
    } else {
        if ("undefined" != typeof wx && wx.getSystemInfo) return (n = h(), n.length > 0 ? n[n.length - 1] : {
            route: "app",
            options: wx.getEnterOptionsSync && wx.getEnterOptionsSync() && wx.getEnterOptionsSync().query || {}
        }).options;
        if ("undefined" != typeof my && my.getSystemInfo) return void 0 === d().options && console.warn("getPageParams失败，请在页面onload中获取options参数后赋值给this.options"), 
        d().options;
    }
    return o;
}, y = function() {
    return (y = Object.assign || function(e) {
        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
    }).apply(this, arguments);
}, w = function(e, t, n, o) {
    return new (n || (n = Promise))(function(r, i) {
        function a(e) {
            try {
                u(o.next(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i(e);
            }
        }
        function c(e) {
            try {
                u(o.throw(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                e(t);
            })).then(a, c);
        }
        u((o = o.apply(e, t || [])).next());
    });
}, m = function(e, t) {
    var n, o, r, i, a = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: c(0),
        throw: c(1),
        return: c(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function c(i) {
        return function(c) {
            return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 
                    0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                    switch (o = 0, r && (i = [ 2 & i[0], r.value ]), i[0]) {
                      case 0:
                      case 1:
                        r = i;
                        break;

                      case 4:
                        return a.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        a.label++, o = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                            a.label = i[1];
                            break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                            a.label = r[1], r = i;
                            break;
                        }
                        if (r && a.label < r[2]) {
                            a.label = r[2], a.ops.push(i);
                            break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    i = [ 6, e ], o = 0;
                } finally {
                    n = r = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([ i, c ]);
        };
    }
}, x = function() {
    function t() {
        var t = this;
        this._getCurrentRuntimeCore = function() {}, this._getContainer = function() {}, 
        this._getLayout = function() {}, this._getLimoRuntime = function() {}, this._request = function(e) {
            console.log("params", e);
        }, this._getLX = function() {}, this._getOWL = function() {}, this.getLimoRuntime = function() {
            return t._getCurrentRuntimeCore() || t._getLimoRuntime() || t;
        }, this._cacheEvents = {}, this._cacheDialogs = {}, this.clearCaches = function() {
            t.clearEventCaches(), t.clearDialogCaches();
        }, this.clearEventCaches = function() {
            Object.keys(t.getLimoRuntime()._cacheEvents).forEach(function(e) {
                t.registerEvent(e, t.getLimoRuntime()._cacheEvents[e]);
            }), t.getLimoRuntime()._cacheEvents = {};
        }, this.clearDialogCaches = function() {
            Object.keys(t.getLimoRuntime()._cacheDialogs).forEach(function(e) {
                t.showDialog(e, t.getLimoRuntime()._cacheDialogs[e].data, t.getLimoRuntime()._cacheDialogs[e].options);
            }), t.getLimoRuntime()._cacheDialogs = {};
        }, this.use = function(n, o) {
            "string" == typeof n && o && (t[n] = o), "object" == e(n) && Object.keys(n).forEach(function(e) {
                n[e] && (t[e] = n[e]);
            });
        }, this.proxy = function(n, o) {
            var r = t.getLimoRuntime();
            "string" == typeof n && o && (r[n] = o), "object" == e(n) && Object.keys(n).forEach(function(e) {
                n[e] && (r[e] = n[e]);
            });
        }, this.registerEvent = function(e, n) {
            var o = t._getContainer();
            o && "function" == typeof o.registerEvent ? o.registerEvent(e, n) : t.getLimoRuntime() && (t.getLimoRuntime()._cacheEvents[e] = n);
        }, this.triggerEvent = function(e, n) {
            var o = t._getContainer();
            o && "function" == typeof o.revoke && o.revoke(e, n);
        }, this.ttResetDialogFunctionProperties = function(e, n) {
            var o;
            if (t.isByteDanceMicroApp) {
                var r = null === (o = getApp()._ttDialogFunctionPropertiesMap) || void 0 === o ? void 0 : o[e];
                r && r.forEach(function(e) {
                    e.pathList.reduce(function(t, n, o) {
                        return t[n] || (o < e.pathList.length - 1 ? t[n] = "number" == typeof e.pathList[o + 1] ? [] : {} : o === e.pathList.length - 1 && (t[n] = e.value)), 
                        t[n];
                    }, n);
                });
            }
        }, this.setLayoutStyle = function(e, n) {
            var o = t._getLayout();
            o && "function" == typeof o.limoSetLayoutStyle && o.limoSetLayoutStyle(e, n);
        }, this.setModuleData = function(e, n, o) {
            return w(t, void 0, void 0, function() {
                var t, r;
                return m(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return (t = this._getContainer()) && "function" == typeof t.selectModule ? [ 4, t.selectModule(e) ] : [ 3, 4 ];

                      case 1:
                        return (r = i.sent()) ? "function" != typeof o && (null == o ? void 0 : o.reflect) && "function" == typeof t.updateLastModuleData ? [ 4, t.updateLastModuleData(e, n) ] : [ 3, 3 ] : [ 3, 4 ];

                      case 2:
                        i.sent(), i.label = 3;

                      case 3:
                        r.didLimoUpdate(n, !1, "function" == typeof o ? o : null == o ? void 0 : o.callback), 
                        i.label = 4;

                      case 4:
                        return [ 2 ];
                    }
                });
            });
        }, this.request = function(e) {
            var n, o = t._getContainer();
            return o && (null === (n = null == o ? void 0 : o.properties) || void 0 === n ? void 0 : n.config) && o.properties.config.header && (e.header = y(y({}, o.properties.config.header), e.header)), 
            t._request(e);
        }, this.transformStyleUnit = l, this.transformStyle = f, this.lx = null, this.sendPV = function(e, n, o) {
            var r = t._getLX();
            r ? r.pageView(e, n, o) : console.warn("lx未配置");
        }, this.sendMC = function(e, n, o) {
            var r = t._getLX();
            r ? r.moduleClick(e, n, o) : console.warn("lx未配置");
        }, this.sendMV = function(e, n, o) {
            var r = t._getLX();
            r ? r.moduleView(e, n, o) : console.warn("lx未配置");
        }, this.owl = null, this.addError = function(e, n) {
            var o = t._getOWL();
            o ? o.addError(e, n) : console.warn("Owl未配置");
        }, this.getPageParams = v;
    }
    return t.prototype.showDialog = function(e, t, n) {
        var o = this._getLayout();
        if (this.isByteDanceMicroApp) {
            getApp()._ttDialogFunctionPropertiesMap = {}, getApp()._ttDialogFunctionPropertiesMap[e] = [];
            this.isByteDanceMicroApp && function t(n, o) {
                void 0 === o && (o = []), n && Object.keys(n).length && Object.keys(n).forEach(function(r) {
                    var i = Array.isArray(n) ? Number(r) : r;
                    "[object Function]" === Object.prototype.toString.call(n[r]) || "[object AsyncFunction]" === Object.prototype.toString.call(n[r]) ? getApp()._ttDialogFunctionPropertiesMap[e].push({
                        pathList: o.concat(i),
                        value: n[r]
                    }) : ("[object Object]" === Object.prototype.toString.call(n[r]) || Array.isArray(n[r])) && t(n[r], o.concat(i));
                });
            }(t);
        }
        o && "function" == typeof o.limoShowDialog ? o.limoShowDialog(e, t, n) : this.getLimoRuntime()._cacheDialogs[e] = {
            data: t,
            options: n
        };
    }, t.prototype.closeDialog = function(e) {
        var t;
        this.isByteDanceMicroApp && (null === (t = getApp()._ttDialogFunctionPropertiesMap) || void 0 === t ? void 0 : t[e]) && (getApp()._ttDialogFunctionPropertiesMap[e] = []);
        var n = this._getLayout();
        n && "function" == typeof n.limoCloseDialog && n.limoCloseDialog(e);
    }, t.prototype.collectModuleData = function(e) {
        return w(this, void 0, void 0, function() {
            var t;
            return m(this, function(n) {
                switch (n.label) {
                  case 0:
                    return (t = this._getContainer()) && "function" == typeof t.collectModuleData ? [ 4, t.collectModuleData(e) ] : [ 3, 2 ];

                  case 1:
                    return [ 2, n.sent() ];

                  case 2:
                    return [ 2, null ];
                }
            });
        });
    }, t.prototype.collectModulesData = function() {
        return w(this, void 0, void 0, function() {
            var e;
            return m(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (e = this._getContainer()) && "function" == typeof e.collectModulesData ? [ 4, e.collectModulesData() ] : [ 3, 2 ];

                  case 1:
                    return [ 2, t.sent() ];

                  case 2:
                    return [ 2, {} ];
                }
            });
        });
    }, t.prototype.getPageId = function(e) {
        var t = this;
        return function() {
            if ("function" == typeof e.getPageId) return e.getPageId();
            if (t.isH5) {
                var n = window.location.href.split("#"), o = n[0], r = void 0 === o ? "" : o, i = n[1], a = void 0 === i ? "" : i;
                return [ r.split("?")[0], a.split("?")[0] ].join("#");
            }
            if (t.isAliPayNative) {
                var c = e.$page ? e.$page : e;
                if (!c.$id) throw new Error("getPageId 调用上下文异常，请在组件or页面的声明周期内调用");
                return c.$id;
            }
            if (t.isByteDanceMicroApp || t.isWxNative) throw new Error("getPageId 调用上下文异常，请在组件or页面的声明周期内调用");
        };
    }, t;
}(), b = function() {
    return window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : "";
}, S = function() {
    return b().indexOf("micromessenger") > -1 || O();
}, O = function() {
    return "undefined" != typeof wx && !!wx.getSystemInfoSync && !!wx.showToast;
}, L = null, P = function() {
    if (L) return L;
    try {
        var e, t = wx.getSystemInfoSync().system;
        return L = t;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.log(e);
    }
    return "";
}, A = function() {
    return b().indexOf("meituan") > -1;
}, _ = function() {
    return b().indexOf("dianping") > -1;
};

S() && b().indexOf("miniprogram") > -1 || window && window.__wxjs_environment, (g = b()).indexOf("alipayclient") > -1 && g.indexOf("miniprogram"), 
b().indexOf("alipayclient"), O(), S();

var C, M = (C = b(), !!(O() && P() && P().toLowerCase().indexOf("ios") > -1) || -1 === C.indexOf("android"));

A(), _(), _() || A(), "undefined" != typeof my && my.getSystemInfoSync, b().indexOf("unionpay"), 
function() {
    var e = b();
    S() && e.indexOf("windowswechat");
}();

var D = O();

b().indexOf("toutiaomicroapp");

var E = function(e, t, n, o) {
    return new (n || (n = Promise))(function(r, i) {
        function a(e) {
            try {
                u(o.next(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i(e);
            }
        }
        function c(e) {
            try {
                u(o.throw(e));
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                e(t);
            })).then(a, c);
        }
        u((o = o.apply(e, t || [])).next());
    });
}, k = function(e, t) {
    var n, o, r, i, a = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    };
    return i = {
        next: c(0),
        throw: c(1),
        return: c(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function c(i) {
        return function(c) {
            return function(i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (;a; ) try {
                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 
                    0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                    switch (o = 0, r && (i = [ 2 & i[0], r.value ]), i[0]) {
                      case 0:
                      case 1:
                        r = i;
                        break;

                      case 4:
                        return a.label++, {
                            value: i[1],
                            done: !1
                        };

                      case 5:
                        a.label++, o = i[1], i = [ 0 ];
                        continue;

                      case 7:
                        i = a.ops.pop(), a.trys.pop();
                        continue;

                      default:
                        if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            a = 0;
                            continue;
                        }
                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                            a.label = i[1];
                            break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                            a.label = r[1], r = i;
                            break;
                        }
                        if (r && a.label < r[2]) {
                            a.label = r[2], a.ops.push(i);
                            break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    i = [ 6, e ], o = 0;
                } finally {
                    n = r = 0;
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                };
            }([ i, c ]);
        };
    }
}, T = function(e, t, n) {
    if (n || 2 === arguments.length) for (var o, r = 0, i = t.length; r < i; r++) !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)), 
    o[r] = t[r]);
    return e.concat(o || Array.prototype.slice.call(t));
}, R = Object.assign({}, {
    AppOnLaunch: "onLaunch",
    AppOnShow: "onShow",
    AppOnHide: "onHide",
    AppOnError: "onError",
    AppOnPageNotFound: "onPageNotFound",
    AppOnUnhandledRejection: "onUnhandledRejection"
}, {
    AppOnThemeChange: "onThemeChange"
}, {}, {
    AppOnShareAppMessage: "onShareAppMessage"
}), I = Object.assign({}, {
    PageOnLoad: "onLoad",
    PageOnShow: "onShow",
    PageOnReady: "onReady",
    PageOnHide: "onHide",
    PageOnUnload: "onUnload",
    PageOnPullDownRefresh: "onPullDownRefresh",
    PageOnReachBottom: "onReachBottom",
    PageOnShareAppMessage: "onShareAppMessage",
    PageOnPageScroll: "onPageScroll",
    PageOnResize: "onResize"
}, {
    PageOnRouteDone: "onRouteDone",
    PageOnShareTimeline: "onShareTimeline",
    PageOnAddToFavorites: "onAddToFavorites",
    PageOnTabItemTap: "onTabItemTap",
    PageOnSaveExitState: "onSaveExitState"
}, {
    PageOnUploadDouyinVideo: "onUploadDouyinVideo"
}, {
    PageOnTitleClick: "onTitleClick",
    PageOnOptionMenuClick: "onOptionMenuClick",
    PageOnTabItemTap: "onTabItemTap"
}), j = Object.assign({}, R, I), $ = function() {
    function e() {
        this.taps = [];
    }
    return e.prototype.tap = function(e, t) {
        var n, o;
        o = "string" == typeof e ? 0 : null !== (n = e.stage) && void 0 !== n ? n : 0, this.taps.push({
            stage: o,
            fn: t
        });
    }, e.prototype.call = function(e) {
        for (var t, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
        for (var r = this.taps.sort(function(e, t) {
            return e.stage - t.stage;
        }), i = 0, a = r; i < a.length; i++) {
            var c = a[i];
            (t = c.fn).call.apply(t, T([ e ], n, !1));
        }
    }, e;
}(), B = function() {
    return getApp().$$GlobalLimoHooks;
}, N = function(e, t) {
    return function() {
        for (var n, o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
        return E(this, void 0, void 0, function() {
            var r, i, a, c;
            return k(this, function(u) {
                switch (u.label) {
                  case 0:
                    r = ((null === (n = t[e]) || void 0 === n ? void 0 : n.taps) || []).sort(function(e, t) {
                        return e.stage - t.stage;
                    }).map(function(e) {
                        return e.fn;
                    }), i = 0, a = r, u.label = 1;

                  case 1:
                    return i < a.length ? "function" != typeof (null == (c = a[i]) ? void 0 : c.call) ? [ 3, 3 ] : [ 4, c.call.apply(c, T([ this ], o, !1)) ] : [ 3, 4 ];

                  case 2:
                    u.sent(), u.label = 3;

                  case 3:
                    return i++, [ 3, 1 ];

                  case 4:
                    return [ 2 ];
                }
            });
        });
    };
}, F = function(e, t) {
    return function() {
        for (var n, o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
        return E(this, void 0, void 0, function() {
            var r, i, a, c;
            return k(this, function(u) {
                switch (u.label) {
                  case 0:
                    r = ((null === (n = (t || B())[e]) || void 0 === n ? void 0 : n.taps) || []).sort(function(e, t) {
                        return e.stage - t.stage;
                    }).map(function(e) {
                        return e.fn;
                    }), i = 0, a = r, u.label = 1;

                  case 1:
                    return i < a.length ? "function" != typeof (null == (c = a[i]) ? void 0 : c.call) ? [ 3, 3 ] : [ 4, c.call.apply(c, T([ this ], o, !1)) ] : [ 3, 4 ];

                  case 2:
                    u.sent(), u.label = 3;

                  case 3:
                    return i++, [ 3, 1 ];

                  case 4:
                    return [ 2 ];
                }
            });
        });
    };
}, H = function(e, t) {
    var n = t[e];
    return function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return E(this, void 0, void 0, function() {
            return k(this, function(t) {
                switch (t.label) {
                  case 0:
                    return n && "function" == typeof n ? [ 4, n.call.apply(n, T([ this ], e, !1)) ] : [ 3, 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 ];
                }
            });
        });
    };
};

function W(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return E(this, void 0, void 0, function() {
            var n, o, r;
            return k(this, function(i) {
                switch (i.label) {
                  case 0:
                    n = 0, o = e, i.label = 1;

                  case 1:
                    return n < o.length ? (r = o[n], "[object Function]" !== Object.prototype.toString.call(r) ? [ 3, 3 ] : [ 4, r.call.apply(r, T([ this ], t, !1)) ]) : [ 3, 4 ];

                  case 2:
                    i.sent(), i.label = 3;

                  case 3:
                    return n++, [ 3, 1 ];

                  case 4:
                    return [ 2 ];
                }
            });
        });
    };
}

function U() {
    return Object.keys(j).reduce(function(e, t) {
        return e[t] = new $(), e;
    }, {});
}

var q, G = (q = function(e, t) {
    return (q = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(e, t);
}, function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
        this.constructor = e;
    }
    q(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
    new n());
}), X = function(e) {
    return function(t) {
        var n = (t || {}).fail;
        return (void 0 === n ? function(e) {
            return console.log(e);
        } : n)("".concat(e, " 方法在当前环境不存在"));
    };
}, V = function(e) {
    function t() {
        var n = null !== e && e.apply(this, arguments) || this;
        return n._getCurrentRuntimeCore = function() {
            var e, t = getCurrentPages();
            return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.__limoCore;
        }, n._getContainer = function() {
            var e, t = getCurrentPages();
            return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.limoContainer;
        }, n._getLayout = function() {
            var e;
            return null === (e = n._getContainer()) || void 0 === e ? void 0 : e.layout;
        }, n._getLimoRuntime = function() {
            var e, t = null === (e = n._getLayout()) || void 0 === e ? void 0 : e.__getContainerLimoCore;
            if (t) return t();
        }, n._getLX = function() {
            return n.lx;
        }, n._getOWL = function() {
            return null;
        }, n._request = wx.request, n.setRem = X("setRem"), n.setTheme = X("setTheme"), 
        n.isH5 = !1, n.isWXH5 = !1, n.isWx = !0, n.isNativeMp = !0, n.isIOS = M, n.isAlipay = !1, 
        n.isWeb = !1, n.isMpWebview = !1, n.isAliPayMp = !1, n.isWxMp = !0, n.isWeChatMiniProgram = !0, 
        n.isAliPayWebview = !1, n.isMTApp = !1, n.isDPApp = !1, n.isHybridGroupApp = !1, 
        n.isAliPayNative = !1, n.isUnionPay = !1, n.isPCWX = !1, n.isWxNative = !0, n.isByteDance = !1, 
        n.isByteDanceMicroApp = !1, n.isByteDanceMicroAppWebview = !1, n.navigateToMiniProgram = wx.navigateToMiniProgram, 
        n.setClipboardData = wx.setClipboardData, n.getClipboardData = wx.getClipboardData, 
        n.onMemoryWarning = wx.onMemoryWarning, n.getPerformance = wx.getPerformance, n.getUpdateManager = wx.getUpdateManager, 
        n.getAccountInfoSync = wx.getAccountInfoSync, n.getEnterOptionsSync = wx.getEnterOptionsSync, 
        n.getExtConfigSync = wx.getExtConfigSync, n.setNavigationBarColor = wx.setNavigationBarColor, 
        n.setNavigationBarTitle = wx.setNavigationBarTitle, n.getMenuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect, 
        n.showNavigationBarLoading = wx.showNavigationBarLoading, n.hideNavigationBarLoading = wx.hideNavigationBarLoading, 
        n.onAppShow = wx.onAppShow, n.offAppShow = wx.offAppShow, n.getStorage = wx.getStorage, 
        n.getStorageSync = wx.getStorageSync || "", n.setStorage = wx.setStorage, n.setStorageSync = wx.setStorageSync, 
        n.removeStorage = wx.removeStorage, n.removeStorageSync = wx.removeStorageSync, 
        n.getStorageInfoSync = wx.getStorageInfoSync, n.clearStorageSync = wx.clearStorageSync, 
        n.navigateBack = wx.navigateBack, n.navigateTo = wx.navigateTo, n.reLaunch = wx.reLaunch, 
        n.redirectTo = wx.redirectTo, n.switchTab = wx.switchTab, n.requestSubscribeMessage = wx.requestSubscribeMessage, 
        n.getUserProfile = wx.getUserProfile, n.getSystemInfo = wx.getSystemInfo, n.getSystemInfoSync = wx.getSystemInfoSync, 
        n.requestPayment = wx.requestPayment, n.openLocation = wx.openLocation, n.getLocation = wx.getLocation, 
        n.getSetting = wx.getSetting, n.openSetting = wx.openSetting, n.makePhoneCall = wx.makePhoneCall, 
        n.scanCode = wx.scanCode, n.createIntersectionObserver = wx.createIntersectionObserver, 
        n.createSelectorQuery = wx.createSelectorQuery, n.hideHomeButton = wx.hideHomeButton, 
        n.pageScrollTo = wx.pageScrollTo, n.showToast = wx.showToast, n.hideToast = wx.hideToast, 
        n.showLoading = wx.showLoading, n.hideLoading = wx.hideLoading, n.showModal = wx.showModal, 
        n.hideModal = X("hideModal"), n.showActionSheet = wx.showActionSheet, n.showShareMenu = wx.showShareMenu, 
        n.hideShareMenu = wx.hideShareMenu, n.previewImage = wx.previewImage, n.chooseMedia = wx.chooseMedia, 
        n.getImageInfo = wx.getImageInfo, n.uploadFile = wx.uploadFile, n.createInnerAudioContext = wx.createInnerAudioContext, 
        n.chooseAddress = wx.chooseAddress, n.LimoCoreFactory = function() {
            return new t();
        }, n;
    }
    return G(t, e), t;
}(x);

exports.LimoPage = function(e, t, n) {
    var o, r;
    void 0 === n && (n = Page), e.$$PageLimoHooks = U(), null === (o = t.plugins) || void 0 === o || o.forEach(function(t) {
        return t.apply(e.$$PageLimoHooks, e);
    }), null === (r = t.solutions) || void 0 === r || r.forEach(function(t) {
        return t.forEach(function(t) {
            return t.apply(e.$$PageLimoHooks, e);
        });
    }), Object.keys(I).forEach(function(t) {
        var n = I[t];
        e[n] = W([ F(t), N(t, e.$$PageLimoHooks), H(n, e) ]);
    });
    var i = getApp({
        allowDefault: !0
    }).$$extendPage;
    i ? i(e) : n(e);
}, exports.LimoApp = function(e, t, n) {
    var o, r;
    void 0 === n && (n = App), e.$$GlobalLimoHooks = U(), null === (o = t.plugins) || void 0 === o || o.forEach(function(t) {
        return t.apply(e.$$GlobalLimoHooks, e);
    }), null === (r = t.solutions) || void 0 === r || r.forEach(function(t) {
        return t.forEach(function(t) {
            return t.apply(e.$$GlobalLimoHooks, e);
        });
    }), Object.keys(R).forEach(function(t) {
        var n = R[t];
        e[n] = W([ F(t, e.$$GlobalLimoHooks), H(n, e) ]);
    }), t.app ? t.app(e) : n(e), t.page && getApp({
        allowDefault: !0
    }) && (getApp({
        allowDefault: !0
    }).$$extendPage = t.page);
};

var z = D ? new V() : {};

exports.default = z;

exports.LimoCoreFactory = function() {
    return new V();
};