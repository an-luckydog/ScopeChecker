var e = require("../b/helpers/interopRequireDefault"), t = require("../b/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getTenantId = exports.getPageId = exports.getBizType = exports.fromEntries = exports.default = void 0, 
exports.transformUrl = N, require("../b/helpers/Objectentries");

var n = e(require("../b/regenerator")), r = require("../b/helpers/asyncToGenerator"), i = require("../b/helpers/objectWithoutProperties"), a = require("../b/helpers/objectSpread2"), o = require("../b/helpers/slicedToArray"), u = require("../b/helpers/toConsumableArray");

require("./reflection");

var c = require("./inversify"), l = require("./constants"), s = e(require("./emitter")), d = e(require("../miniprogram_npm/@limo/core/index.js")), f = e(require("../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), p = e(require("../lib/mix/log")), g = e(require("../lib/mix/request")), T = require("../lib/wx/app-info"), E = t(require("../miniprogram_npm/@mtfe/rms-sdk/index.js")), S = e(require("../miniprogram_npm/@mtfe/saas-user-auth/index.js")), m = [ "name" ], v = new c.Container(), b = function(e) {
    return "null" === e || "undefined" === e ? "" : e;
}, O = function(e) {
    return l.IS_NATIVE_MP ? e.getPageId() : e.$page ? e.$page.$id : e.$id;
};

exports.getPageId = O;

var h = function() {
    var e = "";
    return function() {
        if (e) return e;
        var t = d.default.getExtConfigSync();
        return e = t.tenantId || "";
    };
};

exports.getTenantId = h;

var P = function() {
    var e = "";
    return function() {
        if (e) return e;
        var t = d.default.getExtConfigSync();
        return e = t.bizType || "";
    };
};

exports.getBizType = P;

function I(e) {
    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map(), i = b(r.get("poiId")), a = b(r.get("jointOrderId")), o = b(r.get("tableNum")), u = null != (t = b(r.get("tenantId"))) ? t : h()(), c = null != (n = b(r.get("bizType"))) ? n : P()();
    i && !e.poiId && (e.poiId = i), e.shopId = e.poiId, u && !e.tenantId && (e.tenantId = u), 
    c && !e.bizType && (e.bizType = c), o && !e.tableNum && (e.tableNum = o), a && !e.jointOrderId && (e.jointOrderId = a);
}

function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    t instanceof Map ? t.forEach(function(t, n) {
        e.set(n, b("".concat(t)));
    }) : Object.keys(t).forEach(function(n) {
        e.set(n, b("".concat(t[n])));
    });
}

function N(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map();
    if (e.indexOf("@biz") > -1) {
        var n, r = +(null != (n = b(t.get("bizType"))) ? n : P()()), i = l.TRANSFER_BIZ_TYPE_TO_ROUTE[r] || "zt";
        return e.replace("@biz", i);
    }
    return e;
}

exports.fromEntries = function(e) {
    return u(e).reduce(function(e, t) {
        var n = o(t, 2), r = n[0], i = n[1];
        return e[r] = i, e;
    }, {});
}, f.default.getReportKey = function(e, t) {
    return "V2" + N(e, t).toLocaleUpperCase().replace(/\//g, "_");
}, v.bind(l.TYPES.LOG).toConstantValue(p.default), v.bind(l.TYPES.LX).toConstantValue(E.LXReporter), 
v.bind(l.TYPES.TRIANGLE).toConstantValue(f.default), v.bind(l.TYPES.RMS_SDK).toConstantValue(E), 
v.bind(l.TYPES.SAAS_USER).toConstantValue(S.default);

var V = new Map();

v.bind(l.TYPES.REQUEST).toDynamicValue(function(e) {
    var t, n = null != (t = _.get(e.container.id)) ? t : new Map();
    return a(a({}, g.default), {}, {
        post: function(e, t, r) {
            var i, a;
            if (I(t, n), V.get(e) && (null == (i = V.get(e)) ? void 0 : i.key) === JSON.stringify(t) && null != (a = V.get(e)) && a.responsePromise) {
                var o, u = null == (o = V.get(e)) ? void 0 : o.responsePromise;
                return V.set(e, null), u;
            }
            var c = g.default.post(N(e, n), t, r);
            return null != r && r.cacheData && V.set(e, {
                key: JSON.stringify(t),
                responsePromise: c
            }), c;
        },
        get: function(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null != r.params || (r.params = {}), I(r.params, n), V.get(e) && null != (t = V.get(e)) && t.responsePromise) {
                var i, a = null == (i = V.get(e)) ? void 0 : i.responsePromise;
                return V.set(e, null), a;
            }
            var o = g.default.get(N(e, n), r);
            return null != r && r.cacheData && V.set(e, {
                responsePromise: o
            }), o;
        }
    });
});

var _ = new Map(), x = new Map();

v.bind(l.TYPES.EMITTER).toDynamicValue(function(e) {
    return x.get(e.container.id) || x.set(e.container.id, new s.default()), x.get(e.container.id);
}), v.bind(l.EVENTS.SET_EMITTER).toDynamicValue(function(e) {
    return function(t) {
        x.set(e.container.id, t || new s.default());
    };
}), v.bind(l.TYPES.GLOBAL_OPTIONS).toConstantValue(new Map()), v.bind(l.EVENTS.SET_GLOBAL_OPTIONS).toFunction(function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    y(v.get(l.TYPES.GLOBAL_OPTIONS), e);
}), v.bind(l.TYPES.OPTIONS).toDynamicValue(function(e) {
    return _.get(e.container.id) || _.set(e.container.id, new Map()), _.get(e.container.id);
}), v.bind(l.TYPES.LIMO_FACTORY).toFactory(function() {
    return function() {
        var e = getCurrentPages(), t = e[e.length - 1], n = v.children.get(O(t));
        return null == n ? void 0 : n.get(l.TYPES.LIMO);
    };
}), v.bind(l.EVENTS.INIT).toDynamicValue(function(e) {
    return function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e.container.get(l.EVENTS.SET_OPTIONS)(n), e.container.storeChild(O(t)), e.container.bind(l.TYPES.LIMO).toConstantValue(t);
    };
}), v.bind(l.EVENTS.DESTROY).toDynamicValue(function(e) {
    return function(t) {
        _.set(e.container.id, new Map()), x.set(e.container.id, new s.default()), e.container.removeChild(O(t));
    };
}), v.bind(l.EVENTS.SET_OPTIONS).toDynamicValue(function(e) {
    return function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        y(e.container.get(l.TYPES.OPTIONS), t);
    };
}), v.bind(l.EVENTS.SET_OPTION).toDynamicValue(function(e) {
    return function(t, n) {
        e.container.get(l.TYPES.OPTIONS).set(t, b("".concat(n)));
    };
}), v.bind(l.EVENTS.CLEAR_OPTIONS).toDynamicValue(function(e) {
    return function() {
        e.container.get(l.TYPES.OPTIONS).clear();
    };
}), v.bind(l.EVENTS.RUN_EXTENDS).toDynamicValue(function(e) {
    return function(t) {
        t.forEach(function(t) {
            var n = t.name, r = i(t, m);
            if (e.container.isBound(Symbol.for(n))) {
                var a = e.container.get(Symbol.for(n));
                a && "function" == typeof a.run && a.run(r);
            }
        });
    };
}), v.bind(l.EVENTS.GET_LOCATION).toDynamicValue(function(e) {
    return r(n.default.mark(function t() {
        var r, i, o, u = arguments;
        return n.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = u.length > 0 && void 0 !== u[0] ? u[0] : {}, i = function() {}, o = function() {}, 
                t.prev = 2, t.next = 5, f.default.getLocation(a({
                    authDialogConfig: {
                        title: "您未开启地理位置授权",
                        content: "商家需要获取您的位置，用于匹配附近门店或提供其它线上服务",
                        confirmText: "去授权",
                        cancelText: "取消"
                    },
                    userSettingAuthSuccess: i,
                    userSettingAuthRefuse: o
                }, r));

              case 5:
                return t.abrupt("return", t.sent);

              case 8:
                throw t.prev = 8, t.t0 = t.catch(2), "USER_AUTHORIZED" !== t.t0.type && "SYS_UNAUTHORIZE" !== t.t0.type || !r.hiddenModalTag && e.container.get(l.TYPES.LIMO).limoShowModal({
                    title: "无法获取地理位置",
                    content: "请前往“手机设置-隐私-定位服务”开启当前 APP 位置信息权限。",
                    confirmText: "确定",
                    showCancel: !1
                }), p.default.addLog("获取地理位置失败", "error：".concat(JSON.stringify(t.t0))), t.t0;

              case 11:
              case "end":
                return t.stop();
            }
        }, t, null, [ [ 2, 8 ] ]);
    }));
}), v.bind(l.EVENTS.GET_USER_GEO).toDynamicValue(function(e) {
    return r(n.default.mark(function t() {
        var r, i, o, u, c = arguments;
        return n.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return r = c.length > 0 && void 0 !== c[0] ? c[0] : {}, t.prev = 1, t.next = 4, 
                e.container.get(l.EVENTS.GET_LOCATION)(a({
                    canUseSessionCache: !0,
                    defaultTimeout: 5e5,
                    showAuthSettingDialog: !1
                }, r));

              case 4:
                return i = t.sent, o = i.lat, u = i.lng, t.abrupt("return", {
                    latitude: o,
                    longitude: u,
                    gisType: 3
                });

              case 10:
                return t.prev = 10, t.t0 = t.catch(1), t.abrupt("return", {});

              case 13:
              case "end":
                return t.stop();
            }
        }, t, null, [ [ 1, 10 ] ]);
    }));
}), v.bind(l.TYPES.THEME).toFunction(function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light", t = "dark" === e ? l.darkThemeColor : l.lightThemeColor, n = [];
    for (var r in t) n.push("".concat(r, ":").concat(t[r]));
    return n.join(";");
}), v.bind(l.EVENTS.JUMP_PAGE).toDynamicValue(function(e) {
    return function(t) {
        var n, r = getCurrentPages(), i = function(t) {
            var n = f.default.parse(t);
            Object.entries(n).forEach(function(t) {
                var n = o(t, 2), r = n[0], i = n[1];
                e.container.get(l.TYPES.GLOBAL_OPTIONS).set(r, i);
            });
        };
        if (r.length > 1 && t.indexOf(r[r.length - 2].route) > -1) return i(t), void d.default.getLimoRuntime().navigateBack();
        (0, T.isNativeTabbarPage)(null == (n = t.split("?")) ? void 0 : n[0]) ? (i(t), d.default.getLimoRuntime().switchTab({
            url: t
        })) : d.default.getLimoRuntime().redirectTo({
            url: t
        });
    };
});

var C = v;

exports.default = C;