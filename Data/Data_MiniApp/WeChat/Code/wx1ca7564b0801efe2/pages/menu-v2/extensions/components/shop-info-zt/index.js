var e = require("../../../../../b/helpers/interopRequireDefault"), t = e(require("../../../../../b/regenerator")), r = require("../../../../../b/helpers/asyncToGenerator"), n = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), a = e(require("../../../../../commons/component")), o = require("../../../../../commons/constants");

(0, a.default)({
    behaviors: [ n.commonBehavior, n.limoShim ],
    properties: {
        shopName: {
            type: String,
            value: ""
        },
        distance: {
            type: String,
            value: ""
        },
        collectIcon: {
            type: String,
            value: ""
        },
        collectIconActive: {
            type: String,
            value: ""
        },
        collectTitle: {
            type: String,
            value: ""
        },
        errTip: {
            type: String,
            value: ""
        },
        collected: {
            type: Boolean,
            value: !1
        },
        collectStyle: {
            type: Number,
            value: 0
        }
    },
    data: {
        collectStatus: !1
    },
    observers: {
        collected: function(e, t) {
            e !== t && this.setData({
                collectStatus: e
            });
        }
    },
    methods: {
        collectShop: function() {
            var e = this;
            return r(t.default.mark(function r() {
                var n;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (n = e.data.collectStatus, !e.requesting) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        return e.requesting = !0, t.next = 6, e.entity.get(o.TYPES.SHOP).saveCollectShop({
                            type: n ? 2 : 1
                        });

                      case 6:
                        if (t.t0 = t.sent, !t.t0) {
                            t.next = 9;
                            break;
                        }
                        e.setData({
                            collectStatus: !n
                        });

                      case 9:
                        e.requesting = !1;

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, r);
            }))();
        },
        selectShop: function() {
            this.entity.get(o.TYPES.LX).sendMC("b_saaspay_kup08hdt_mc"), this.entity.get(o.TYPES.SHOP).toShopList();
        }
    }
});