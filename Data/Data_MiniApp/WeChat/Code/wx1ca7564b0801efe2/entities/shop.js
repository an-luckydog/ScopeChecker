var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, n = e(require("../b/regenerator")), i = require("../b/helpers/asyncToGenerator"), o = require("../b/helpers/classCallCheck"), r = require("../b/helpers/createClass"), s = require("../commons/inversify"), a = require("../commons/constants"), u = require("../commons/storage"), c = e(require("../miniprogram_npm/@limo/core/index.js")), p = (0, 
s.injectable)()(t = function(e) {
    return (0, s.inject)(a.TYPES.REQUEST)(e, void 0, 0);
}(t = function(e) {
    return (0, s.inject)(a.TYPES.EMITTER)(e, void 0, 1);
}(t = function(e) {
    return (0, s.inject)(a.TYPES.TRIANGLE)(e, void 0, 2);
}(t = function(e) {
    return (0, s.inject)(a.TYPES.OPTIONS)(e, void 0, 3);
}(t = function(e) {
    return (0, s.inject)(a.EVENTS.SET_OPTION)(e, void 0, 4);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof Request ? Object : Request, "undefined" == typeof EventEmitter ? Object : EventEmitter, void 0, void 0, void 0 ])(t = function() {
    function e(t, n, i, r, s) {
        o(this, e), this.request = t, this.emitter = n, this.triangle = i, this.options = r, 
        this.setOption = s, this.shopCache = void 0, this.shopCache = new Map();
    }
    var t, s, p;
    return r(e, [ {
        key: "toShopList",
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = this.options.get("tenantId") || "", i = this.options.get("bizType") || "", o = c.default.getLimoRuntime().navigateTo;
            e && (o = c.default.isAlipay ? c.default.getLimoRuntime().reLaunch : c.default.getLimoRuntime().redirectTo), 
            o({
                url: t || "/orderPackages/pages/shop-list/index?tenantId=".concat(n, "&bizType=").concat(i)
            });
        }
    }, {
        key: "saveCollectShop",
        value: (p = i(n.default.mark(function e(t) {
            var i, o, r, s;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, this.request.post("/@biz/user/shop/collect", t);

                  case 3:
                    if (i = e.sent, o = i.code, r = i.msg, s = void 0 === r ? "接口失败" : r, 200 !== o) {
                        e.next = 9;
                        break;
                    }
                    return e.abrupt("return", (c.default.getLimoRuntime().showToast({
                        title: (2 === t.type ? "取消" : "") + "收藏成功",
                        icon: "none"
                    }), !0));

                  case 9:
                    c.default.getLimoRuntime().showToast({
                        title: s,
                        icon: "none"
                    }), e.next = 15;
                    break;

                  case 12:
                    e.prev = 12, e.t0 = e.catch(0), c.default.getLimoRuntime().showToast({
                        title: e.t0.msg,
                        icon: "none"
                    });

                  case 15:
                    return e.abrupt("return", !1);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 12 ] ]);
        })), function(e) {
            return p.apply(this, arguments);
        })
    }, {
        key: "fetchShopInfo",
        value: (s = i(n.default.mark(function e(t) {
            var i, o, r, s, a;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (i = "".concat(t, "_").concat(this.options.get("bizType")), !this.shopCache.has(i)) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", this.shopCache.get(i));

                  case 3:
                    return e.prev = 3, e.next = 6, this.request.post("/@biz/shop/detail", {
                        poiId: t
                    });

                  case 6:
                    if (o = e.sent, r = o.code, s = o.data, a = o.msg, 200 !== r) {
                        e.next = 12;
                        break;
                    }
                    return e.abrupt("return", (this.shopCache.set(i, s), s));

                  case 12:
                    c.default.getLimoRuntime().showToast({
                        title: a,
                        icon: "none"
                    }), e.next = 18;
                    break;

                  case 15:
                    e.prev = 15, e.t0 = e.catch(3), c.default.getLimoRuntime().showToast({
                        title: e.t0.msg,
                        icon: "none"
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 3, 15 ] ]);
        })), function(e) {
            return s.apply(this, arguments);
        })
    }, {
        key: "resolveLocationToAddress",
        value: (t = i(n.default.mark(function e(t) {
            var i, o, r, s, u, c, p;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = {
                        key: a.SEARCH_ADDRESS_KEY,
                        location: "".concat(t.lng, ",").concat(t.lat),
                        radius: 500,
                        scenario: "WAIMAI",
                        show_fields: "poi"
                    }, o = this.triangle.stringify(i), e.prev = 1, e.next = 4, this.request.get("https://lbsapi.meituan.com/v1/location/regeo?".concat(o));

                  case 4:
                    return c = e.sent, p = c.regeocode, e.abrupt("return", (null == p || null == (r = p[0]) || null == (s = r.pois) || null == (u = s[0]) ? void 0 : u.name) || "请新增或选择收货地址");

                  case 9:
                    return e.prev = 9, e.t0 = e.catch(1), e.abrupt("return", "请新增或选择收货地址");

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 9 ] ]);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "updateShopCache",
        value: function() {
            var e = this.options.get("poiId"), t = this.options.get("addressId"), n = this.options.get("tableNum");
            e && u.storage.set(this.cacheKey, e, 30), t && u.storage.set("ADDRESS_CACHE", t, 30), 
            n && u.storage.set("TABLE_CACHE", n, 30);
        }
    }, {
        key: "applyShopCache",
        value: function() {
            if (!this.options.get("poiId")) {
                var e = u.storage.get(this.cacheKey);
                e && (this.setOption("poiId", e), this.options.get("addressId") || this.setOption("addressId", u.storage.get("ADDRESS_CACHE") || ""));
            }
            if (!this.options.get("tableNum")) {
                var t = u.storage.get("TABLE_CACHE");
                t && this.setOption("tableNum", t);
            }
        }
    }, {
        key: "changeMenuHeadLoading",
        value: function(e) {
            this.emitter.emit(a.EVENTS.MENU_HEAD_LOADING, e);
        }
    }, {
        key: "cacheKey",
        get: function() {
            return this.triangle.getReportKey("@biz_".concat("SHOP_CACHE"), this.options);
        }
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t) || t;

exports.default = p;