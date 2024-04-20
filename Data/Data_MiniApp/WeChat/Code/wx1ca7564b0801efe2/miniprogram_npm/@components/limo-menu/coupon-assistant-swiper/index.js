var e = require("../../../../b/helpers/interopRequireDefault"), o = e(require("../../../../b/regenerator")), r = require("../../../../b/helpers/asyncToGenerator"), t = require("../../../@limo/container/behaviors/index"), n = e(require("../../../../store/menu")), i = e(require("../common-behaviors/storeBehavior")), u = require("../../../../modules/LXHelper");

Component({
    behaviors: [ i.default, t.commonBehavior, t.limoShim ],
    properties: {
        couponStyle: {
            type: Object,
            value: {}
        }
    },
    data: {
        name: "coupon-assistant-swiper"
    },
    lifetimes: {
        created: function() {
            this.store = n.default;
        },
        attached: function() {
            (0, u.sendMV)("b_eco_921yn9hy_mv");
        }
    },
    methods: {
        limoReady: function() {
            this.commonBehaviorsStoreBehavior_limoReady();
        },
        mapToState: function(e) {
            return {
                couponCount: e.coupon && e.coupon.couponExtra.totalCouponNum,
                couponList: e.coupon && e.coupon.couponList
            };
        },
        onCheckMore: function() {
            this.triggerEvent("checkMore");
        },
        onUseCoupon: function(e) {
            this.triggerEvent("useCoupon", e.detail);
        },
        onScrollToLower: function() {
            var e = this;
            return r(o.default.mark(function r() {
                return o.default.wrap(function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        e.triggerEvent("loadMore");

                      case 1:
                      case "end":
                        return o.stop();
                    }
                }, r);
            }))();
        }
    },
    ready: function() {
        this.limoReady();
    }
});