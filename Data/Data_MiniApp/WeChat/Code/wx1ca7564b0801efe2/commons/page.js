var t = require("../b/helpers/interopRequireWildcard"), e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(t) {
    var e = t.entities, d = t.loadEntities, c = t.fmpUrl, p = t.moduleDefaultProperties, f = t.moduleDefaultLayout, h = t.layoutData, m = t.extendEntity, g = t.data, T = t.onLoad, y = t.onShow, E = t.onReady, b = t.onUnload, P = t.ignoreGlobalOptions, S = t.beforeUnload;
    t.data = i({
        loading: !0,
        layoutStyle: "",
        hasTabBar: !0,
        modules: [],
        dialogs: [],
        modal: null,
        toast: null,
        tooltip: null
    }, g), t.getLimoAdapter = function() {
        return this.limoContainer = this.limoContainer || {}, this.limoContainer;
    }, t.getGLobalTabBarParams = function() {
        var t, e, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = null == (t = getApp().miniProgramData) || null == (e = t.tabbarPageParams) ? void 0 : e["/".concat(this.route)];
        return !a && delete getApp().miniProgramData.tabbarPageParams["/".concat(this.route)], 
        n;
    }, t.onLoad = function(t) {
        var a, n, i, o;
        if (l.LXReporter.pageLoadInit(), this.entity = s.default.createChild(), e && this.entity.load(e), 
        null != (a = this.entity) && a.isBound(r.TYPES.EVENT_CHANNEL) && this.entity.get(r.TYPES.EVENT_CHANNEL).init(this.getOpenerEventChannel()), 
        t.tenantId || (t.tenantId = (0, s.getTenantId)()()), t.bizType || (t.bizType = (0, 
        s.getBizType)()()), this.entity.get(r.EVENTS.INIT)(this, t), "function" == typeof d && d(this, s.default), 
        this.moduleDefaultProperties = p || {}, this.moduleDefaultLayout = f || {}, this.lastModules = [], 
        !P) {
            var u, c = null == (u = this.entity) ? void 0 : u.get(r.TYPES.GLOBAL_OPTIONS);
            this.entity.get(r.EVENTS.SET_OPTIONS)(c), this.entity.get(r.TYPES.GLOBAL_OPTIONS).clear();
        }
        null == (n = this.entity) || n.get(r.EVENTS.SET_OPTIONS)(null == (i = this.getGLobalTabBarParams) ? void 0 : i.call(this)), 
        this.options = (0, s.fromEntries)(this.entity.get(r.TYPES.OPTIONS)), null == (o = this.fetchFmpData) || o.call(this), 
        T && T.call(this, t);
    }, t.fetchFmpData = n(a.default.mark(function t() {
        var e, i, o, u, d, p, f, g = this, T = arguments;
        return a.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (e = !(T.length > 0 && void 0 !== T[0]) || T[0], c) {
                    t.next = 3;
                    break;
                }
                return t.abrupt("return");

              case 3:
                if (u = "string" == typeof c ? c : c(), d = (0, s.transformUrl)(u, null == (i = this.entity) ? void 0 : i.get(r.TYPES.OPTIONS)).toLocaleUpperCase().replace(/\//g, "_"), 
                t.prev = 4, t.t0 = "function" == typeof this.prepareFmpParams, !t.t0) {
                    t.next = 10;
                    break;
                }
                return t.next = 9, this.prepareFmpParams();

              case 9:
                t.t0 = t.sent;

              case 10:
                p = t.t0, t.next = 16;
                break;

              case 13:
                return t.prev = 13, t.t1 = t.catch(4), t.abrupt("return", (console.error(t.t1), 
                void ("function" == typeof this.fmpError && this.fmpError({
                    code: 400,
                    msg: t.t1.message,
                    type: t.t1.type
                }))));

              case 16:
                f = new l.Transaction("V2".concat(d)), null == (o = this.entity) || o.get(r.TYPES.REQUEST).post(u, p || {}).then(function(t) {
                    var i = t.code, o = t.data, l = t.msg;
                    if (200 === i) {
                        var s, u, d, c, p, T = o.moduleData;
                        null == (s = g.entity) || s.get(r.EVENTS.SET_OPTIONS)((null == T || null == (u = T["page-1"]) ? void 0 : u.data) || (null == T || null == (d = T.page) ? void 0 : d.data) || {});
                        var y = (null == T || null == (c = T["page-1"]) ? void 0 : c.extendList) || (null == T || null == (p = T.page) ? void 0 : p.extendList), E = "function" == typeof g.getProcessModuleData ? g.getProcessModuleData(T) : T;
                        g.initRender({
                            moduleData: E,
                            layoutData: "function" == typeof h ? h.call(g) : h || o.layoutData
                        }, n(a.default.mark(function t() {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (g.setData({
                                        loading: !1
                                    }), f.success(), t.t0 = "function" == typeof g.beforeExtend, !t.t0) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.next = 6, g.beforeExtend();

                                  case 6:
                                    e && Array.isArray(y) && (null == (n = g.entity) || n.get(r.EVENTS.RUN_EXTENDS)(y, m)), 
                                    "function" == typeof g.fmpSuccess && g.fmpSuccess();

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        })));
                    } else f.fail(i), "function" == typeof g.fmpError && g.fmpError({
                        data: o,
                        code: i,
                        msg: l
                    });
                }).catch(function(t) {
                    f.fail(500), "function" == typeof g.fmpError && g.fmpError({
                        code: 500,
                        msg: t.message
                    });
                });

              case 18:
              case "end":
                return t.stop();
            }
        }, t, this, [ [ 4, 13 ] ]);
    })), t.onShow = function() {
        var t, e, a, n, i;
        l.LXReporter.pageShowInit(), this.cid && (null == (i = this.entity) || i.get(r.TYPES.LX).sendPV(this.cid, null, {
            cidAppVersion: "2.0"
        }));
        var o, s = null == (t = getApp()) || null == (e = t.miniProgramData) || null == e.isNativeTabbarPage ? void 0 : e.isNativeTabbarPage(this.route);
        "function" == typeof this.getTabBar && s && (null == (o = this.getTabBar()) || null == o.changeTabbarIndex || o.changeTabbarIndex(s - 1)), 
        r.IS_NATIVE_ALIPAY && my.hideBackHome(), null == (a = this.entity) || a.get(r.EVENTS.SET_GLOBAL_OPTIONS)(null == (n = this.getGLobalTabBarParams) ? void 0 : n.call(this)), 
        y && y.call(this);
    }, t.onReady = function() {
        E && E.call(this);
    }, t.onUnload = function() {
        var t, a;
        S && S.call(this), this.toastQueue = [], this.toastTimer && clearTimeout(this.toastTimer), 
        e && (null == (t = this.entity) || t.unload(e)), null == (a = this.entity) || a.get(r.EVENTS.DESTROY)(this), 
        b && b.call(this);
    }, t.closeDialog = function() {
        var t;
        null == (t = this.entity) || t.get(r.TYPES.LIMO).limoCloseDialog();
    }, delete t.entities, delete t.fmpUrl, delete t.moduleDefaultProperties, delete t.moduleDefaultLayout, 
    delete t.layoutData, (0, o.page)(i(i({}, t), u.default));
};

var a = e(require("../b/regenerator")), n = require("../b/helpers/asyncToGenerator"), i = require("../b/helpers/objectSpread2"), r = require("./constants"), o = require("../miniprogram_npm/@dp/owl-wxapp/index.js"), l = require("../miniprogram_npm/@mtfe/rms-sdk/index.js"), s = t(require("./entity")), u = e(require("./renderLib"));