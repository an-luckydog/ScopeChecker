var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createOrderListRequest = void 0;

var r = e(require("../b/regenerator")), t = require("../b/helpers/asyncToGenerator"), n = e(require("../lib/mix/request")), a = require("../lib/env");

exports.createOrderListRequest = function(e) {
    var o, i = e.restaurantViewId, u = e.tenantId, s = void 0 === u ? 0 : u, d = e.minaId, c = e.userId, p = e.userType, l = e.merchantPublicAccountId, f = e.pageFrom, I = e.shopId, m = void 0 === I ? 0 : I, v = e.bizDataType, b = void 0 === v ? 0 : v, h = e.offset, q = void 0 === h ? "" : h;
    return (o = t(r.default.mark(function e(t) {
        var o, i;
        return r.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, n.default.get("/personalcenter/orderList", {
                    params: t
                });

              case 2:
                return o = e.sent, a.isWXH5 && 800 === o.code && (i = (o.data || "").replace("WXAUTH", encodeURIComponent(encodeURIComponent(encodeURIComponent(window.location.href))))) && window.location.replace(i), 
                e.abrupt("return", o);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e) {
        return o.apply(this, arguments);
    })({
        tenantId: s,
        restaurantViewId: i,
        minaId: d,
        userId: c,
        userType: p,
        merchantPublicAccountId: l,
        pageFrom: f,
        mtShopId: m,
        bizDataType: b,
        limit: 20,
        offset: q
    });
};