var e = require("../../b/helpers/interopRequireDefault"), t = e(require("../../b/regenerator")), a = require("../../b/helpers/asyncToGenerator"), n = e(require("../../miniprogram_npm/@limo/core/index.js")), i = require("../../miniprogram_npm/@limo/container/behaviors/index"), o = e(require("../../commons/component")), r = require("../../commons/constants");

(0, o.default)({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        shop: {
            type: Object,
            value: {}
        },
        index: {
            type: Number,
            value: -1
        },
        active: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        collected: !1
    },
    observers: {
        shop: function(e) {
            var t;
            this.setData({
                collected: null != (t = e.collected) && t
            });
        }
    },
    methods: {
        clickCard: function() {
            var e;
            null == (e = this.entity) || e.get(r.TYPES.LX).sendMC("b_saaspay_dx7yxo2v_mc");
            var t = this.data.shop.poiId;
            this.triggerEvent("selectShop", {
                poiId: t
            });
        },
        makePhone: function() {
            var e, t = this;
            null == (e = this.entity) || e.get(r.TYPES.LX).sendMC("b_saaspay_lexkgfb3_mc");
            var a = this.data.shop.phone;
            n.default.getLimoRuntime().makePhoneCall({
                phoneNumber: a,
                success: function() {
                    var e;
                    null == (e = t.entity) || e.get(r.TYPES.LX).sendMC("b_saaspay_yh0yj906_mc");
                },
                fail: function() {
                    var e;
                    null == (e = t.entity) || e.get(r.TYPES.LX).sendMC("b_saaspay_w5uc7kkl_mc");
                }
            });
        },
        makeAddress: function() {
            var e;
            null == (e = this.entity) || e.get(r.TYPES.LX).sendMC("b_saaspay_vn354b6y_mc");
            var t = this.data.shop, a = t.latitude, i = t.longitude, o = t.name, s = void 0 === o ? "暂无名称" : o, l = t.address, u = void 0 === l ? "暂无简介" : l;
            n.default.getLimoRuntime().openLocation({
                latitude: +a,
                longitude: +i,
                name: s,
                address: u,
                scale: 15
            });
        },
        collect: function() {
            var e = this;
            return a(t.default.mark(function a() {
                var i, o, s, l, u;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (i = e.data, o = i.collected, s = i.shop, (l = s.poiId) && !e.requesting) {
                            t.next = 3;
                            break;
                        }
                        return t.abrupt("return");

                      case 3:
                        return n.default.getLimoRuntime().showLoading({
                            title: "加载中..."
                        }), e.requesting = !0, t.next = 6, e.entity.get(r.TYPES.SHOP).saveCollectShop({
                            poiId: l,
                            type: o ? 2 : 1
                        });

                      case 6:
                        u = t.sent, n.default.getLimoRuntime().hideLoading(), u && (e.setData({
                            collected: !o
                        }), o && e.triggerEvent("cancelCollectShop", {
                            poiId: l
                        })), e.requesting = !1;

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, a);
            }))();
        }
    }
});