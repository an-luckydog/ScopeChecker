var o = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../../../b/helpers/objectSpread2"), t = o(require("../../../@limo/core/index.js")), n = require("../../../@limo/container/behaviors/index");

Component({
    behaviors: [ n.commonBehavior, n.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        shopId: {
            type: String,
            value: ""
        },
        grouponCouponList: {
            type: Array,
            value: [],
            observer: function(o) {
                var n = this.data.shopId;
                if (o) {
                    var i = t.default.getLimoRuntime().limoUseCustomHandler.rmsStorage.getDishList(n), r = o.map(function(o) {
                        var t, n = o.spuId, r = o.skuId, u = i[n], s = (null == u || null == (t = u.skuMenuItems) ? void 0 : t.find(function(o) {
                            return o.skuId === r;
                        })) || {};
                        return e(e({}, o), {}, {
                            skuDish: s,
                            minBoughtCount: (null == u ? void 0 : u.minBoughtCount) || -1,
                            stockCount: (null == u ? void 0 : u.stockCount) || -1
                        });
                    });
                    this.setData({
                        couponList: r
                    });
                }
            }
        },
        mtUserName: {
            type: String,
            value: ""
        },
        couponStyle: {
            type: Object,
            value: {}
        },
        coupons: {
            type: Array,
            value: []
        }
    },
    data: {
        showGroupCouponTips: !1,
        couponList: [],
        usableCoupons: []
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var o;
            if (null == (o = t.default.getLimoRuntime().limoUseCustomHandler) || !o.rmsStorage) throw Error("\n        未注入rmsStorage, 请在页面加载前，通过以下路径注入依赖\n        import rmsStorage from '@api/rmsStorage';\n        Limo.use({\n          limoUseCustomHandler: {\n            rmsStorage,\n          }\n        })\n      ");
        },
        showCouponPopTip: function() {
            var o = this;
            this.setData({
                showGroupCouponTips: !0
            }, function() {
                setTimeout(function() {
                    o.setData({
                        showGroupCouponTips: !1
                    });
                }, 5e3);
            });
        },
        useGrouponCouponEvent: function(o) {
            this.triggerEvent("useGrouponCoupon", (null == o ? void 0 : o.detail) || {});
        },
        cancelGrouponCouponEvent: function(o) {
            this.triggerEvent("cancelGrouponCoupon", (null == o ? void 0 : o.detail) || {});
        },
        onCouponAssistantCheckMore: function() {
            this.triggerEvent("checkMore");
        },
        onCouponAssistantLoadMore: function() {
            this.triggerEvent("loadMore");
        },
        onUseCoupon: function(o) {
            var e = o.detail;
            this.triggerEvent("useCoupon", e);
        }
    }
});