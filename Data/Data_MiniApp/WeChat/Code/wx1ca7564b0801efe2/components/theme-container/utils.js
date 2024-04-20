var e = require("../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, r = e(require("../../b/regenerator")), i = require("../../b/helpers/objectSpread2"), s = require("../../b/helpers/asyncToGenerator"), a = require("../../b/helpers/classCallCheck"), o = require("../../b/helpers/createClass"), n = require("../../b/helpers/defineProperty"), u = e(require("../../miniprogram_npm/@limo/core/index.js")), d = require("../../miniprogram_npm/@mtfe/rms-sdk/index.js"), p = (n(t = {}, 1, "0"), 
n(t, 2, "1"), n(t, 3, "2"), n(t, 4, "4"), t), c = function() {
    function e(t) {
        a(this, e), this.options = void 0, this.location = void 0, this.storageKey = void 0, 
        this.resolved = void 0, this.themeModel = void 0, this.extraRequestParams = void 0;
        var r = t.options, i = t.location, s = void 0 !== i && i, o = t.extraRequestParams;
        this.options = r, this.extraRequestParams = o, s && (this.location = s);
        var n = r.shopId, u = r.bizType;
        n && (void 0 === u ? 1 : u) && (this.storageKey = "rms_decor_".concat(n, "_").concat(this.transferReserveMode())), 
        this.resolved = !1, this.themeModel = d.ThemeModel.getInstance();
    }
    var t, n;
    return o(e, [ {
        key: "transferReserveMode",
        value: function() {
            var e = this.options.reserveMode || p[1];
            return this.options.bizType > 0 && (e = p[this.options.bizType]), e;
        }
    }, {
        key: "getCachedTheme",
        value: function() {
            var e;
            return this.storageKey ? (u.default.getLimoRuntime().isH5 ? e = JSON.parse(sessionStorage.getItem(this.storageKey) || "{}") : (u.default.getLimoRuntime().isNativeMp || u.default.getLimoRuntime().isAliPayMp || u.default.getLimoRuntime().isByteDanceMicroApp) && (e = JSON.parse(u.default.getLimoRuntime().getStorageSync(this.storageKey) || "{}")), 
            e && Object.keys(e).length ? this.themeModel.getOldShopTheme(e) : "") : "";
        }
    }, {
        key: "getLatestTheme",
        value: (n = s(r.default.mark(function e() {
            var t, s, a = this;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!(t = this.getCachedTheme())) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 3:
                    return e.prev = 3, e.next = 6, new Promise(function(e, t) {
                        var r = a.options, s = r.restaurantViewId, o = void 0 === s ? "" : s, n = r.qrcode, p = void 0 === n ? "" : n, c = r.q, h = void 0 === c ? "" : c, l = r.perception, m = void 0 === l ? "" : l, v = r.p, f = void 0 === v ? "" : v, g = r.tenantId, y = void 0 === g ? "" : g, b = r.shopId, R = void 0 === b ? "" : b, q = r.brandId, M = void 0 === q ? "" : q, S = r.multiShop, x = void 0 === S ? 0 : S;
                        a.resolved = !1, u.default.getLimoRuntime().request({
                            url: (0, d.getDefaultHost)() + "/api/v1/rmsmina/c/getDecoration",
                            method: "POST",
                            data: i(i({
                                mtShopId: R,
                                restaurantViewId: o,
                                qrcode: p || h,
                                perception: m || f,
                                tenantId: y,
                                reserveMode: a.transferReserveMode(),
                                brandId: M,
                                enterByMatchShop: 1 == x && !R
                            }, a.location), a.extraRequestParams),
                            success: function(t) {
                                a.resolved = !0, e(t.data);
                            },
                            fail: function(e) {
                                a.resolved = !0, t(e);
                            },
                            complete: function(t) {
                                a.resolved || e(t.data);
                            }
                        });
                    });

                  case 6:
                    return s = e.sent, e.abrupt("return", 200 === s.code && s.data ? (this.storageKey && (u.default.getLimoRuntime().isH5 ? sessionStorage.setItem(this.storageKey, JSON.stringify(s.data)) : (u.default.getLimoRuntime().isNativeMp || u.default.getLimoRuntime().isAliPayMp || u.default.getLimoRuntime().isByteDanceMicroApp) && u.default.getLimoRuntime().setStorageSync(this.storageKey, JSON.stringify(s.data))), 
                    this.themeModel.getOldShopTheme(s.data)) : "");

                  case 10:
                    return e.prev = 10, e.t0 = e.catch(3), e.abrupt("return", "");

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 3, 10 ] ]);
        })), function() {
            return n.apply(this, arguments);
        })
    }, {
        key: "useTheme",
        value: (t = s(r.default.mark(function e() {
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.getLatestTheme();

                  case 2:
                    return e.abrupt("return", e.sent);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return t.apply(this, arguments);
        })
    } ]), e;
}();

exports.default = c;