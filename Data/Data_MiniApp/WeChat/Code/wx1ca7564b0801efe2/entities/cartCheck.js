var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.CartCheck = void 0, require("../b/helpers/Arrayincludes");

var t, n = e(require("../b/regenerator")), i = require("../b/helpers/asyncToGenerator"), r = require("../b/helpers/createClass"), o = require("../b/helpers/classCallCheck"), s = e(require("../miniprogram_npm/@limo/core/index.js")), a = require("../commons/constants"), u = require("../commons/inversify"), c = require("../lib/wx/app-info"), d = r(function e() {
    o(this, e), this.btnText = void 0;
});

exports.CartCheck = d;

var l = 1, p = (0, u.injectable)()(t = function(e) {
    return (0, u.inject)(a.TYPES.CART)(e, void 0, 0);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.OPTIONS)(e, void 0, 1);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.LIMO)(e, void 0, 2);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.TRIANGLE)(e, void 0, 3);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.RULE)(e, void 0, 4);
}(t = function(e) {
    return (0, u.optional)()(e, void 0, 4);
}(t = function(e) {
    return (0, u.inject)(a.LOGICS.DISH_MANDATORY)(e, void 0, 5);
}(t = function(e) {
    return (0, u.optional)()(e, void 0, 5);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.GLOBAL_OPTIONS)(e, void 0, 6);
}(t = function(e) {
    return (0, u.inject)(a.EVENTS.GET_LOCATION)(e, void 0, 7);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.REQUEST)(e, void 0, 8);
}(t = function(e) {
    return (0, u.inject)(a.TYPES.LOG)(e, void 0, 9);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof CartEntity ? Object : CartEntity, "undefined" == typeof Map ? Object : Map, "undefined" == typeof ILimo ? Object : ILimo, void 0, "undefined" == typeof RuleEntity ? Object : RuleEntity, "undefined" == typeof DishMandatory ? Object : DishMandatory, "undefined" == typeof Map ? Object : Map, Object, "undefined" == typeof Request ? Object : Request, Object ])(t = function() {
    function e(t, n, i, r, s, a, u, c, d, l) {
        o(this, e), this.cart = t, this.options = n, this.limo = i, this.triangle = r, this.rule = s, 
        this.dishMandatory = a, this.globalOptions = u, this.getLocation = c, this.request = d, 
        this.log = l, this.btnText = "去结算";
    }
    var t;
    return r(e, [ {
        key: "checkMandatoryDish",
        value: function() {
            return !this.rule || this.rule.checkMandatoryDishLimit(Array.from(this.cart.cartDish.values())) ? "" : "请选必点菜";
        }
    }, {
        key: "checkCart",
        value: function(e, t) {
            (e || {}).buttonType === l ? this.scanCode(t) : this.toOrderConfirm(e, t);
        }
    }, {
        key: "toOrderConfirm",
        value: (t = i(n.default.mark(function e(t, i) {
            var r, o, a, u, c, d = this;
            return n.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = (t || {}).basicPrice, !this.checkMandatoryDish()) {
                        e.next = 3;
                        break;
                    }
                    return e.abrupt("return", (null == (o = this.dishMandatory) || o.openDishMandatoryPanel(), 
                    void (null == i || i())));

                  case 3:
                    if (a = this.cart.getCartBarData(), u = a.actualPrice, !(Number(u || "") < Number(r || ""))) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return", void (null == i || i()));

                  case 6:
                    if (c = {
                        cartOrderId: this.cart.cartOrderId || "",
                        bizType: +(this.options.get("bizType") || 0),
                        tenantId: this.options.get("tenantId") || "",
                        poiId: this.options.get("poiId") || "",
                        addressId: this.options.get("addressId") || "",
                        tableNum: this.options.get("tableNum") || "",
                        peopleCount: this.options.get("peopleCount") || "",
                        diningType: this.options.get("diningType") || null
                    }, [ "0", "2", "4", "6", "8" ].includes(String(c.tenantId).slice(-1))) try {
                        this.getLocation({
                            canUseSessionCache: !0,
                            onlyUseCacheLoc: !0,
                            canUsePreviousCacheTime: 6e5,
                            showAuthSettingDialog: !1
                        }).then(function(e, t) {
                            e && t && d.request.post("/@biz/order/confirm", {
                                cartOrderId: d.cart.cartOrderId,
                                addressId: d.options.get("addressId") || "",
                                peopleCount: d.options.get("peopleCount") || "",
                                diningType: d.options.get("diningType") || null,
                                latitude: e,
                                longitude: t
                            }, {
                                cacheData: !0
                            });
                        });
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        this.log.addError("点餐页接口预请求异常", e);
                    }
                    s.default.getLimoRuntime().navigateTo({
                        url: "/orderPackages/pages/order-confirm/index?".concat(this.triangle.stringify(c)),
                        error: function(e) {
                            console.log(e);
                        },
                        complete: function() {
                            null == i || i();
                        },
                        events: {
                            setAddressId: function(e) {
                                d.globalOptions.set("addressId", e);
                            },
                            setBizType: function(e) {
                                d.globalOptions.set("bizType", e);
                            },
                            setCardId: function(e) {
                                d.globalOptions.set("cardId", e);
                            },
                            setDiningType: function(e) {
                                d.options.set("diningType", e);
                            }
                        }
                    });

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e, n) {
            return t.apply(this, arguments);
        })
    }, {
        key: "scanCode",
        value: function(e) {
            var t = this;
            s.default.getLimoRuntime().scanCode({
                success: function(e) {
                    t.triangle.isAliPayNative && ((0, c.getNewApp)().qrCode = e.result), s.default.getLimoRuntime().redirectTo({
                        url: "/pages/splash/index?q=".concat(encodeURIComponent(e.result)),
                        fail: function(e) {
                            e && s.default.getLimoRuntime().showToast({
                                title: "抱歉，跳转链接出错啦~",
                                icon: "none"
                            });
                        }
                    });
                }
            }), null == e || e();
        }
    } ]), e;
}()) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t) || t;

exports.default = p;