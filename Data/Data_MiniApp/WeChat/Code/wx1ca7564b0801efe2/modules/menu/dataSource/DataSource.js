var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hitPreloadDuration = exports.fetchMenuData = void 0;

require("../../../b/helpers/slicedToArray");

var r = e(require("../../../b/regenerator")), t = require("../../../b/helpers/objectSpread2"), a = require("../../../b/helpers/asyncToGenerator"), n = require("../../../types/newMenu/MenuData"), o = require("../../../lib/wx/util"), u = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), i = e(require("../../../lib/mix/log")), p = require("../../../types/IResponse"), s = require("./LocalDataSource"), d = require("../../../lib/wx/app-info"), l = require("../../../constants/decorate"), c = require("./RemoteDataSource"), m = e(require("../../../api/rmsStorage")), f = require("../../../constants/bizConstants"), b = require("../../commonHelper"), v = require("../../../lib/env"), h = (e(require("../shop/shopService")), 
e(require("../I18n/I18nService")), e(require("../../../api/menuApi")), i.default), I = function(e, r) {
    var t = Date.now();
    return e && e > 0 && h.addPerformance(r, t - e, (0, o.getWxPathName)()), t;
};

exports.hitPreloadDuration = I;

var w = function() {
    var e = a(r.default.mark(function e(a) {
        var o, d, l, b, v, h, w, g, S, T, C, q, x, D, M, P;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (l = (d = a).mtShopId, b = d.tableNum, v = d.reserveMode, h = d.userGeoPoint, 
                !(g = (0, s.fmpCacheInterceptor)(a)) || !(0, n.isCacheMenuData)(g)) {
                    e.next = 9;
                    break;
                }
                return S = g.preloadTime, I(S, 16), e.next = 7, (0, c.updateFmpInfo)({
                    mtShopId: l,
                    tableNum: b,
                    userGeoPoint: h,
                    reserveMode: v
                }, g);

              case 7:
                return w = e.sent, e.abrupt("return", w);

              case 9:
                return T = m.default.getHasTakeCouponAtMenu(l), C = m.default.getActivityTypeList(), 
                !T && C && (a = t(t({}, a), {}, {
                    actTypes: C,
                    timestamp: Date.now()
                })), a = t({}, a), e.next = 14, (0, c.getMenuFmp)(a);

              case 14:
                if (w = e.sent) {
                    e.next = 17;
                    break;
                }
                return e.abrupt("return", void i.default.addError("菜单页白屏", null == (q = w) ? void 0 : q.errorType));

              case 17:
                if (w !== p.ResponseState.REDIRECT && !(0, p.isErrorTips)(w)) {
                    e.next = 19;
                    break;
                }
                return e.abrupt("return", w);

              case 19:
                return x = null == (o = w) ? void 0 : o.openTableInfo, Number(v) !== f.DISH_SOURCE.RESERVE || x && x.peopleCount && !(x.peopleCount <= 0) || (M = (D = a).peopleCount, 
                P = D.selectedTime, x = {
                    peopleCount: M,
                    selectedTime: P
                }, w = u.default.setIn(w, [ "openTableInfo" ], x)), e.abrupt("return", w);

              case 22:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), g = function() {
    var e = a(r.default.mark(function e(t) {
        var a, n, o, u, i, p, s, d, l, m, f, v, h, I, w, g;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.shopId, n = t.tableNum, o = t.reserveMode, u = void 0 === o ? 0 : o, 
                i = t.bizType, p = t.userGeoPoint, s = t.tenantId, d = t.restaurantViewId, l = t.brandId, 
                m = t.shopCache, f = (0, b.getPreOrderInfo)(a, u), v = f.peopleCount, h = f.selectedTime, 
                I = {
                    mtShopId: a,
                    tableNum: n,
                    reserveMode: +u,
                    peopleCount: v,
                    selectedTime: h,
                    pageNum: 1,
                    timestamp: Date.now(),
                    bizType: i,
                    userGeoPoint: p,
                    tenantId: s,
                    brandId: l,
                    restaurantViewId: d,
                    shopCache: m
                }, e.next = 16, (0, c.getPageSpu)(I);

              case 16:
                if (w = e.sent) {
                    e.next = 19;
                    break;
                }
                return e.abrupt("return");

              case 19:
                return g = w.spuDetail, e.abrupt("return", g);

              case 21:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), S = function() {
    var e = a(r.default.mark(function e(a) {
        var n, o, u, i, s, c, f, h, I, S, T, C, q, x, D, M, P, R, E, N, y, A;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = a.shopId, o = a.tableNum, u = a.reserveMode, i = void 0 === u ? 0 : u, 
                s = a.orderBizTag, c = a.spuId, f = a.multiShop, h = void 0 === f ? "" : f, I = a.userGeoPoint, 
                S = a.restaurantViewId, T = a.brandId, C = a.tenantId, q = a.orderViewId, x = void 0 === q ? "" : q, 
                D = a.orderScene, M = void 0 === D ? 1 : D, P = (0, b.getValidateAllowOdAfterClose)(), 
                R = !1, E = "", N = m.default.getShopCache(), R = (0, d.getNewApp)().diancanGlobalData.getPreview(l.CONTAINER_NAME.OD_MENU), 
                E = (0, d.getNewApp)().diancanGlobalData.getPreviewParam(), v.isMpWebview && a.previewParam && (E = decodeURIComponent(a.previewParam), 
                R = !0), y = g(t({
                    shopCache: N
                }, a)), e.next = 7, w(t(t({
                    mtShopId: n,
                    tableNum: o,
                    reserveMode: +i
                }, (0, b.getPreOrderInfo)(n, i)), {}, {
                    fromMenu: !0,
                    orderBizTag: s,
                    explodeSpuId: c,
                    timestamp: Date.now(),
                    preview: !!R,
                    previewParam: E,
                    multiShop: h + "" || m.default.getMultiShop(),
                    userGeoPoint: I,
                    restaurantViewId: S,
                    brandId: T,
                    tenantId: C,
                    orderViewId: x,
                    shopCache: N,
                    orderScene: M,
                    validateAllowOdAfterClose: P,
                    buffetLimitMealTipsFlag: m.default.getBuffetLimitMealTipsFlag(n)
                }));

              case 7:
                return A = e.sent, e.abrupt("return", A === p.ResponseState.REDIRECT ? p.ResponseState.REDIRECT : t({
                    spuPromise: y
                }, A));

              case 9:
              case "end":
                return e.stop();
            }
        }, e);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}();

exports.fetchMenuData = S;