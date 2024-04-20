var e = require("../../b/helpers/interopRequireDefault"), t = e(require("../../b/regenerator")), i = require("../../b/helpers/asyncToGenerator");

require("../../b/helpers/Objectentries"), require("../../b/helpers/Arrayincludes");

var n = require("../../b/helpers/slicedToArray"), r = require("../../b/helpers/createForOfIteratorHelper"), a = require("../../b/helpers/toConsumableArray"), l = e(require("../../commons/page")), s = require("./entities/page"), o = require("./limo"), u = e(require("../../miniprogram_npm/@limo/core/index.js")), d = require("../../commons/constants"), E = e(require("../../lib/mix/request"));

(0, l.default)({
    entities: s.entities,
    moduleDefaultLayout: o.moduleDefaultLayout,
    fmpUrl: "/@biz/menu/fmp",
    first: !0,
    cid: "c_saaspay_gzi8cqe9",
    data: {
        errorInfo: null
    },
    onLoad: function() {
        var e, t, i, n, r = this;
        this.__limoCore = u.default.LimoCoreFactory(), null == u.default || u.default.getLimoRuntime().proxy({
            limoUseCustomHandler: {
                openDish: function(e, t) {
                    var i;
                    null == (i = r.entity) || i.get(d.TYPES.EMITTER).emit(d.EVENTS.DISH_OPEN, e, t);
                },
                openCate: function(e, t) {
                    var i;
                    null == (i = r.entity) || i.get(d.TYPES.EMITTER).emit(d.EVENTS.CATE_NAVIGATE, e, t);
                },
                advertiseReporter: null == (e = this.entity) ? void 0 : e.get(d.TYPES.RMS_SDK).advertiseReporter,
                panelGlobalData: {
                    derivedZIndex: 10001
                }
            },
            request: E.default
        }), this.getLimoAdapter().layout = this, this.getLimoAdapter().linked = function() {}, 
        this.loginAdapterEvent = {}, this.getLimoAdapter().registerEvent = function(e, t) {
            r.loginAdapterEvent[e] = t;
        }, this.getLimoAdapter().revoke = function(e, t) {
            var i, n;
            null == (i = r.loginAdapterEvent) || null == (n = i[e]) || n.call(i, t);
        }, this.getLimoAdapter().registerEvent("universalLogin-uniLoginSuccess", function() {
            r.refreshPage();
        }), null == (t = this.entity) || t.get(d.TYPES.EMITTER).on(d.EVENTS.REFRESH_PAGE, this.refreshPage, this), 
        null != (i = this.entity) && i.get(d.TYPES.TRIANGLE).isWxNative || null == (n = this.entity) || n.get(d.TYPES.PRIVACY_AGREEMENT).getAgreement();
    },
    onShow: function() {
        var e, t;
        if (!(this.first || null != (e = this.entity) && e.isBound(d.TYPES.JOINT_ORDER))) {
            var i = null == (t = this.entity) ? void 0 : t.get(d.TYPES.GLOBAL_OPTIONS);
            if (null != i && i.size) {
                var l, s, o = new Map(a(i));
                if (i.clear(), o.get("reload")) return null == (s = this.entity) || s.get(d.TYPES.CART).clearCart(), 
                this.reload(o), void o.delete("reload");
                var u, E = !1, h = [ "bizType", "poiId", "addressId", "cardId", "againOrderViewId" ], T = null == (l = this.entity) ? void 0 : l.get(d.TYPES.OPTIONS), g = r(o);
                try {
                    for (g.s(); !(u = g.n()).done; ) {
                        var c = n(u.value, 2), f = c[0], S = c[1];
                        if (h.includes(f) && S !== (null == T ? void 0 : T.get(f))) {
                            E = !0;
                            break;
                        }
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    g.e(e);
                } finally {
                    g.f();
                }
                E ? this.refreshPage(o) : this.eventsHandle(o);
            } else if (!this.data.loading) {
                var p, v, P, y;
                (null == (p = this.entity) ? void 0 : p.isBound(d.TYPES.MENU_COUPON)) && (null == (v = this.entity) || v.get(d.TYPES.MENU_COUPON).loginCheck()), 
                (null == (P = this.entity) ? void 0 : P.isBound(d.TYPES.CART)) && (null == (y = this.entity) || y.get(d.TYPES.CART).fetchCart());
            }
        }
    },
    reload: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.setData({
            loading: !0
        }), this.refreshPage(e);
    },
    onHide: function() {
        this.first = !1;
    },
    onUnload: function() {
        var e;
        null == (e = this.entity) || e.get(d.TYPES.EMITTER).off(d.EVENTS.REFRESH_PAGE, this.refreshPage, this);
    },
    refreshPage: function() {
        var e, t, i, n, r, a, l, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], u = s instanceof Map ? s : new Map(Object.entries(s));
        u.size && (null == (t = this.entity) || t.get(d.EVENTS.SET_OPTIONS)(u), null == (i = this.entity) || i.get(d.TYPES.SHOP).changeMenuHeadLoading(!0), 
        null == (n = this.entity) || n.get(d.TYPES.RULE).clearRules(), null == (r = this.entity) || r.get(d.TYPES.DISH).clearCache(), 
        null == (a = this.entity) || a.get(d.TYPES.MENU_COUPON).clearDealCouponCate(), null == (l = this.entity) || l.get(d.TYPES.MENU_EXTRA).clear()), 
        null == (e = this.fetchFmpData) || e.call(this, o);
    },
    prepareFmpParams: function() {
        var e = this;
        return i(t.default.mark(function i() {
            var n, r, a, l, s, o, u, E;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (null == (n = e.entity) || n.get(d.TYPES.SHOP).applyShopCache(), a = null == (r = e.entity) ? void 0 : r.get(d.TYPES.OPTIONS), 
                    l = a.get("bizType"), s = !0, t.t0 = l === d.BIZ_TYPE.SC, !t.t0) {
                        t.next = 8;
                        break;
                    }
                    return t.next = 7, null == (o = e.entity) ? void 0 : o.get(d.EVENTS.CHECK_LOCATION_AUTH)();

                  case 7:
                    s = t.sent;

                  case 8:
                    if (u = {}, t.t1 = s, !t.t1) {
                        t.next = 14;
                        break;
                    }
                    return t.next = 13, null == (E = e.entity) ? void 0 : E.get(d.EVENTS.GET_USER_GEO)({
                        hiddenModalTag: l === d.BIZ_TYPE.SC
                    });

                  case 13:
                    u = t.sent;

                  case 14:
                    return t.abrupt("return", {
                        userGeo: u,
                        reco: a.get("reco"),
                        addressId: a.get("addressId"),
                        againOrderViewId: a.get("againOrderViewId")
                    });

                  case 15:
                  case "end":
                    return t.stop();
                }
            }, i);
        }))();
    },
    beforeExtend: function() {
        var e = this;
        return i(t.default.mark(function i() {
            var n, r;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.t0 = null == (n = e.entity) ? void 0 : n.isBound(d.TYPES.CART), !t.t0) {
                        t.next = 4;
                        break;
                    }
                    return t.next = 4, null == (r = e.entity) ? void 0 : r.get(d.TYPES.CART).fetchCart();

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, i);
        }))();
    },
    fmpSuccess: function() {
        var e, t, i;
        null == (e = this.entity) || e.get(d.TYPES.SHOP).changeMenuHeadLoading(!1), null == (t = this.entity) || t.get(d.TYPES.SHOP).updateShopCache(), 
        this.setData({
            errorInfo: null
        }), this.eventsHandle(null == (i = this.entity) ? void 0 : i.get(d.TYPES.OPTIONS));
    },
    eventsHandle: function(e) {
        if (null != e && e.size) {
            var t, i = e.get("spuId"), n = e.get("dishType"), r = e.get("spuName");
            if (i) null == (t = this.entity) || t.get(d.TYPES.EMITTER).emit(d.EVENTS.DISH_OPEN, i, r, n); else {
                var a, l, s = e.get("cateId"), o = e.get("cateName");
                if (s) null == (a = this.entity) || a.get(d.TYPES.EMITTER).emit(d.EVENTS.CATE_NAVIGATE, s, o); else "pd" === e.get("autoOp") && (null == (l = this.entity) || l.get(d.TYPES.EMITTER).emit(d.EVENTS.PD_OPEN));
            }
        }
    },
    fmpError: function(e) {
        var t = e.data, i = e.code, n = e.msg;
        switch (this.setData({
            loading: !1
        }), i) {
          case 1200:
            var r;
            null == (r = this.entity) || r.get(d.TYPES.SHOP).toShopList(!0, null == t ? void 0 : t.redirectUrl);
            break;

          case 403:
            this.setData({
                errorInfo: {
                    errorTitle: n,
                    errorType: i,
                    btnText: "选择门店"
                }
            });
            break;

          default:
            var a;
            null == (a = this.entity) || a.get(d.TYPES.LOG).addError("菜单首屏失败", {
                data: t,
                code: i,
                msg: n
            }), this.setData({
                errorInfo: {
                    errorTitle: "网络异常，请重试",
                    btnText: "重新加载"
                }
            });
        }
    },
    onShareAppMessage: function(e) {
        var t = this, i = e || {}, n = i.from, r = i.target, a = null;
        if ("button" === n && r) {
            var l, s = (r.dataset || {}).spuid;
            s && (a = null == (l = this.entity) ? void 0 : l.get(d.TYPES.DISH).getSpecDetail(s).then(function(e) {
                return null == e ? void 0 : e.dishShareInfo;
            }));
        } else {
            var o;
            a = null == (o = this.entity) ? void 0 : o.get(d.TYPES.REQUEST).get("/@biz/share/info").then(function(e) {
                var i;
                return null == (i = t.entity) || i.get(d.TYPES.LX).sendMC("b_saaspay_yp2l5zdx_mc"), 
                e.data;
            });
        }
        return {
            title: "点餐",
            path: "/pages/index/index",
            promise: a
        };
    }
});