var e, t = require("../../../../../b/helpers/interopRequireDefault"), r = t(require("../../../../../b/regenerator")), n = require("../../../../../b/helpers/asyncToGenerator"), i = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), o = t(require("../../../../../commons/component")), s = require("../../../../../commons/constants");

(0, o.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        isBind: {
            type: Boolean,
            value: !1
        }
    },
    observers: {
        isBind: (e = n(r.default.mark(function e(t) {
            var n, i;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    return e.next = 4, this.entity.get(s.TYPES.MENU_COUPON).fetchDealCoupon();

                  case 4:
                    n = e.sent, i = !!this.entity.get(s.TYPES.CART).cartListData.dishCount, n && i && this.entity.get(s.TYPES.CART).refreshCart();

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(t) {
            return e.apply(this, arguments);
        })
    },
    methods: {
        toLogin: function() {
            this.entity.get(s.TYPES.MENU_COUPON).toLogin();
        }
    }
});