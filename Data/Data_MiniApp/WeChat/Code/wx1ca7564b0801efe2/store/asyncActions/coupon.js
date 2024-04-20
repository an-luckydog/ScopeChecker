var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCoupons = void 0;

var t = e(require("../../b/regenerator")), r = require("../../b/helpers/objectSpread2"), o = require("../../b/helpers/toConsumableArray"), u = require("../../b/helpers/asyncToGenerator"), n = e(require("../../api/rmsStorage")), a = e(require("../../miniprogram_npm/seamless-immutable/index.js")), s = e(require("../../api/menuApi")), p = require("../actions/coupon"), i = require("../../modules/menu/limo/ComponentsViewModel"), c = require("../reducers/coupon"), l = require("../../constants/ajaxResCode"), d = !1;

exports.getCoupons = function(e) {
    var f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return function() {
        var m = u(t.default.mark(function u(m, C) {
            var h, I, b, S, q, g, x, v, A, E, y, P, _, L, j, k;
            return t.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!d) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    if (h = a.default.getIn(C(), [ "coupon", "couponParams" ]) || {}, (I = a.default.merge(h, e) || {}).mtShopId && I.cardId) {
                        t.next = 5;
                        break;
                    }
                    return t.abrupt("return");

                  case 5:
                    if ((I.mtShopId !== h.mtShopId || f) && m((0, p.resetCouponDataAction)()), b = a.default.getIn(C(), [ "coupon", "couponParams" ]) || {}, 
                    S = a.default.getIn(C(), [ "coupon", "couponExtra" ]) || {}, q = a.default.getIn(C(), [ "coupon", "couponList" ]) || [], 
                    !((g = a.default.merge(b, e)).offset > S.totalItemSize)) {
                        t.next = 9;
                        break;
                    }
                    return t.abrupt("return");

                  case 9:
                    return d = !0, t.next = 12, s.default.queryCouponList(g).catch(function(e) {
                        d = !1;
                    });

                  case 12:
                    x = t.sent, d = !1, x && x.code === l.RES_CODE.SUCCESS && x.data && (v = x.data, 
                    A = v.totalItemSize, E = v.totalCouponNum, y = v.itemList, P = v.url, _ = v.cacheId, 
                    (L = 0 === g.offset ? [] : o(q)).push.apply(L, o(y)), m((0, p.setCouponParamsAction)(r(r({}, g), {}, {
                        cacheId: _,
                        offset: g.offset + c.COUPON_PAGE_SIZE
                    }))), m((0, p.setCouponExtraAction)(r(r({}, e), {}, {
                        url: P,
                        cacheId: _,
                        totalItemSize: A,
                        totalCouponNum: E
                    }))), j = n.default.getDealCoupons(g.mtShopId), k = (0, i.formatCouponAssistantSwiper)({
                        dealCoupons: j,
                        couponList: L
                    }), m((0, p.setCouponListAction)(k)));

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, u);
        }));
        return function(e, t) {
            return m.apply(this, arguments);
        };
    }();
};