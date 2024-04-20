var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.entities = void 0;

var n = e(require("../../../b/regenerator")), t = require("../../../b/helpers/asyncToGenerator"), i = e(require("../../../miniprogram_npm/@limo/core/index.js")), r = require("../../../commons/constants"), o = require("../../../commons/inversify"), u = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), c = e(require("../../../entities/rule")), s = e(require("../../../entities/cart")), a = e(require("../../../entities/dish")), l = e(require("../../../entities/shop")), S = e(require("../extensions/logic/shopRecommend")), p = e(require("../../../extensions/logic/menuExtra")), d = e(require("../../../entities/cartCheck")), f = e(require("../extensions/logic/selectPeople")), g = e(require("./privacyAgreement")), E = e(require("../../../entities/menuCoupon")), m = e(require("../../../extensions/logic/member")), q = e(require("../../../extensions/logic/dishMandatory")), T = e(require("../../../extensions/logic/cartCache")), C = new o.ContainerModule(function() {
    var e = t(n.default.mark(function e(o) {
        var C, P;
        return n.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o(r.TYPES.RULE).to(c.default).inSingletonScope(), o(r.TYPES.DISH).to(a.default).inSingletonScope(), 
                o(r.TYPES.CART).to(s.default).inSingletonScope(), o(r.TYPES.SHOP).to(l.default).inSingletonScope(), 
                o(r.TYPES.SHOP_RECOMMEND).to(S.default).inSingletonScope(), o(r.TYPES.MENU_EXTRA).to(p.default).inSingletonScope(), 
                o(r.TYPES.CART_CHECK).to(d.default).inSingletonScope(), o(r.TYPES.SELECT_PEOPLE).to(f.default).inSingletonScope(), 
                o(r.TYPES.PRIVACY_AGREEMENT).to(g.default).inSingletonScope(), o(r.TYPES.MENU_COUPON).to(E.default).inSingletonScope(), 
                o(r.TYPES.MEMBER).to(m.default).inSingletonScope(), o(r.LOGICS.DISH_MANDATORY).to(q.default).inSingletonScope(), 
                o(r.LOGICS.CART_CACHE).to(T.default).inSingletonScope(), o(r.EVENTS.CHECK_LOCATION_AUTH).toFunction(t(n.default.mark(function e() {
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", new Promise(function(e) {
                                try {
                                    i.default.getLimoRuntime().getSetting({
                                        success: function(n) {
                                            e(!(null == n || !n.authSetting["scope.userLocation"]) || !(null == n || !n.authSetting.location));
                                        },
                                        fail: function() {
                                            e(!1);
                                        }
                                    });
                                } catch (n) {
                                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                                    e(!1);
                                }
                            }));

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))), e.prev = 1, e.next = 4, u.LazyLoad.requireAsync("../../../async-campaign-dc/logic/menu.js");

              case 4:
                C = e.sent, (P = C.MenuLogic).extendKey && o(P.extendKey).to(P).inSingletonScope(), 
                e.next = 12;
                break;

              case 9:
                e.prev = 9, e.t0 = e.catch(1), console.error(e.t0);

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }));
    return function(n) {
        return e.apply(this, arguments);
    };
}());

exports.entities = C;