var t = require("../../../../b/helpers/interopRequireDefault")(require("../../../@limo/core/index.js")), o = require("../../../@limo/container/behaviors/index"), n = require("../../../../constants/bizConstants");

Component({
    behaviors: [ o.commonBehavior, o.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        coupon: {
            type: Object,
            value: {}
        }
    },
    data: {
        SOLD_OUT_TEXT: n.SOLD_OUT_TEXT,
        NOT_CAN_SALE: n.NOT_CAN_SALE,
        skuDish: {},
        minBoughtCount: -1,
        stockCount: -1
    },
    methods: {
        useGrouponCouponEvent: function() {
            var o, n = this.data.coupon, e = n.couponStatusList.length;
            if ((null == n || null == (o = n.couponStatusList) ? void 0 : o.filter(function(t) {
                return 1 === t.selectStatus;
            }).length) === e) t.default.getLimoRuntime().showToast({
                icon: "none",
                title: "限".concat(e, "份，不能再选了")
            }); else {
                var u = n.couponStatusList, i = n.spuId, s = n.skuId, r = u.find(function(t) {
                    return 0 === t.selectStatus;
                }).discountTempId;
                this.triggerEvent("useGrouponCoupon", {
                    discountTempId: r,
                    spuId: i,
                    skuId: s
                });
            }
        },
        cancelGrouponCouponEvent: function() {
            var t, o = this.data.coupon, n = o.spuId, e = null == (t = o.couponStatusList.find(function(t) {
                return 1 === t.selectStatus;
            })) ? void 0 : t.discountTempId;
            this.triggerEvent("cancelGrouponCoupon", {
                discountTempId: e,
                spuId: n
            });
        }
    }
});