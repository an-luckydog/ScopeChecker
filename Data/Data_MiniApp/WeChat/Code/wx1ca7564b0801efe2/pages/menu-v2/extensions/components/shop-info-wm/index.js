var e = require("../../../../../b/helpers/interopRequireDefault"), t = e(require("../../../../../b/regenerator")), n = require("../../../../../b/helpers/asyncToGenerator"), a = e(require("../../../../../miniprogram_npm/@limo/core/index.js")), r = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), s = e(require("../../../../../commons/component")), i = require("../../../../../commons/constants");

(0, s.default)({
    behaviors: [ r.commonBehavior, r.limoShim ],
    properties: {
        shopName: {
            type: String,
            value: ""
        },
        selectedAddress: {
            type: String,
            value: ""
        },
        deliveryTimeText: {
            type: String,
            value: ""
        }
    },
    data: {
        collectStatus: !1,
        address: ""
    },
    observers: {
        collected: function(e, t) {
            e !== t && this.setData({
                collectStatus: e
            });
        }
    },
    lifetimes: {
        attached: function() {
            this.getLocationToAddress();
        }
    },
    methods: {
        getLocationToAddress: function() {
            var e = this;
            return n(t.default.mark(function n() {
                var a, r, s, o, c, d;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return a = {}, t.prev = 1, t.next = 4, null == (r = e.entity) ? void 0 : r.get(i.EVENTS.GET_LOCATION)({
                            canUseSessionCache: !0,
                            defaultTimeout: 5e5,
                            showAuthSettingDialog: !1
                        });

                      case 4:
                        s = t.sent, o = s.lat, c = s.lng, a = {
                            lat: o,
                            lng: c
                        }, t.next = 13;
                        break;

                      case 10:
                        t.prev = 10, t.t0 = t.catch(1), console.error(t.t0);

                      case 13:
                        return t.next = 15, e.entity.get(i.TYPES.SHOP).resolveLocationToAddress(a);

                      case 15:
                        d = t.sent, e.setData({
                            address: d
                        });

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, n, null, [ [ 1, 10 ] ]);
            }))();
        },
        selectAddress: function() {
            var e = this, t = this.entity.get(i.TYPES.OPTIONS), n = t.get("poiId") || "", r = t.get("bizType") || "", s = t.get("tenantId") || "";
            a.default.getLimoRuntime().navigateTo({
                url: "/orderPackages/pages/address/index?pageFrom=".concat(i.PAGE_FROM.MENU, "&tenantId=").concat(s, "&poiId=").concat(n, "&bizType=").concat(r),
                events: {
                    setAddressId: function(t) {
                        e.entity.get(i.TYPES.GLOBAL_OPTIONS).set("addressId", t);
                    }
                }
            });
        },
        selectShop: function() {
            this.entity.get(i.TYPES.LX).sendMC("b_saaspay_kup08hdt_mc");
            var e = this.entity.get(i.TYPES.OPTIONS), t = e.get("tenantId") || "", n = e.get("bizType") || "", r = e.get("addressId") || "";
            a.default.getLimoRuntime().navigateTo({
                url: "/orderPackages/pages/shop-list/index?tenantId=".concat(t, "&bizType=").concat(n, "&addressId=").concat(r)
            });
        }
    }
});