var t = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, require("../b/helpers/Objectvalues");

var e, i = require("../b/helpers/objectSpread2"), r = t(require("../b/regenerator")), a = require("../b/helpers/asyncToGenerator"), n = require("../b/helpers/classCallCheck"), s = require("../b/helpers/createClass"), c = t(require("../miniprogram_npm/@limo/core/index.js")), u = require("../commons/inversify"), o = require("../commons/constants"), h = t(require("../lib/mix/log")), l = require("../miniprogram_npm/@mtfe/rms-sdk/index.js"), d = t(require("./dish")), f = 0;

var p = (0, u.injectable)()(e = function(t) {
    return (0, u.inject)(o.TYPES.LIMO_FACTORY)(t, void 0, 0);
}(e = function(t) {
    return (0, u.inject)(o.TYPES.OPTIONS)(t, void 0, 1);
}(e = function(t) {
    return (0, u.inject)(o.TYPES.EMITTER)(t, void 0, 2);
}(e = function(t) {
    return (0, u.inject)(o.TYPES.REQUEST)(t, void 0, 3);
}(e = function(t) {
    return (0, u.inject)(o.TYPES.RULE)(t, void 0, 4);
}(e = function(t) {
    return (0, u.inject)(o.TYPES.TRIANGLE)(t, void 0, 5);
}(e = function(t) {
    return (0, u.inject)(o.TYPES.MENU_COUPON)(t, void 0, 6);
}(e = function(t) {
    return (0, u.optional)()(t, void 0, 6);
}(e = Reflect.metadata("design:type", Function)(e = Reflect.metadata("design:paramtypes", [ Function, "undefined" == typeof Map ? Object : Map, "undefined" == typeof EventEmitter ? Object : EventEmitter, "undefined" == typeof Request ? Object : Request, "undefined" == typeof RuleEntity ? Object : RuleEntity, void 0, "undefined" == typeof MenuCouponEntity ? Object : MenuCouponEntity ])(e = function() {
    function t(e, i, r, a, s, c, u) {
        n(this, t), this.limoFactory = e, this.options = i, this.emitter = r, this.request = a, 
        this.rule = s, this.triangle = c, this.menuCoupon = u, this.cartOrderId = "", this.cartDish = void 0, 
        this.cartDisplayDish = void 0, this.cartListData = {
            dishCount: 0,
            cartTips: [],
            actualPrice: "",
            discountPrice: "",
            dishSectionList: [],
            campaignDiscount: ""
        }, this.cartCalculateThrottle = void 0, this.calculateRequestTick = 0, this.calculateRequest = null, 
        this.warnTipCache = new Map(), this._cartStyle = null, this.cartDish = new Map(), 
        this.cartDisplayDish = new Map(), this.cartCalculateThrottle = function(t, e) {
            var i = null, r = null;
            return function() {
                for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) n[s] = arguments[s];
                var c = this, u = Date.now();
                null === r || u - r >= e ? (r = u, t.apply(c, n)) : null === i && (i = setTimeout(function() {
                    r = Date.now(), i = null, t.apply(c, n);
                }, e - (u - r)));
            };
        }(this.cartCalculate, 1e3);
    }
    var e, u, p, m, v;
    return s(t, [ {
        key: "getCartDataBySpu",
        value: function() {
            var t = {}, e = 0;
            return this.cartDish.forEach(function(i) {
                e += i.count;
                var r = d.default.getId(i);
                t[r] = (t[r] || 0) + i.count;
            }), this.menuCoupon && this.menuCoupon.updateDealCouponCount(this.cartDishList), 
            {
                dishCountMap: t,
                dishCount: e
            };
        }
    }, {
        key: "getCartCountBySku",
        value: function(t) {
            return this.cartDishList.filter(function(e) {
                return e.skuId === t;
            }).reduce(function(t, e) {
                return t + e.count;
            }, 0);
        }
    }, {
        key: "getCartBarData",
        value: function() {
            var t = this.cartListData || {}, e = t.cartTips, i = void 0 === e ? [] : e, r = t.actualPrice, a = void 0 === r ? "" : r, n = t.discountPrice, s = void 0 === n ? "" : n, c = 0;
            return this.cartDish.forEach(function(t) {
                c += t.count;
            }), {
                cartTips: i,
                actualPrice: a,
                discountPrice: s,
                dishCount: c
            };
        }
    }, {
        key: "hash",
        value: function(t) {
            for (var e = 5381, i = t.length; i; ) e = 33 * e ^ t.charCodeAt(--i);
            return "" + (e >>> 0);
        }
    }, {
        key: "getDishKey",
        value: function(t) {
            var e, i, r, a, n = this, s = [ t.skuId ];
            for (var c in null == (e = t.methods) || e.forEach(function(t) {
                t.items.sort(function(t, e) {
                    return +t.skuId - +e.skuId;
                }), t.items.forEach(function(t) {
                    s.push("".concat(t.skuId, "_").concat(t.count || 0));
                });
            }), null == (i = t.tastes) || i.forEach(function(t) {
                t.items.sort(function(t, e) {
                    return +t.skuId - +e.skuId;
                }), t.items.forEach(function(t) {
                    s.push("".concat(t.skuId, "_").concat(t.count || 0));
                });
            }), null == (r = t.packages) || r.forEach(function(t) {
                t.items.sort(function(t, e) {
                    return +t.skuId - +e.skuId;
                }), t.items.forEach(function(t) {
                    s.push("".concat(n.getDishKey(t), "_").concat(t.count || 0));
                });
            }), t.plugins) (Array.isArray(t.plugins[c]) ? t.plugins[c] : [ t.plugins[c] ]).forEach(function(t) {
                t.itemNo && (console.log("[Attention] plugin data has [itemNo], which will create new dish."), 
                s.push(t.itemNo));
            });
            if (t.extendList) {
                var u = t.extendList.map(function(t) {
                    return t && t[1] && t[1].displayId || "";
                }).join("");
                u && s.push(u);
            }
            if (null != t && null != (a = t.dishRemarks) && a.length) {
                var o = t.dishRemarks.join("");
                o && s.push(o);
            }
            var h = this.options.get("rmsUserId");
            return h && s.push(h), this.hash(s.join("")).padStart(32, "0");
        }
    }, {
        key: "clearCart",
        value: function() {
            return this.cartOrderId = "", this.cartDish.clear(), this.refreshDish(), this.emitter.emit(o.EVENTS.CART_CHANGE, {
                actualPrice: "",
                discountPrice: ""
            }), !0;
        }
    }, {
        key: "resetCartDish",
        value: function() {
            var t = this, e = ((this.cartListData || {}).dishSectionList || []).flatMap(function(t) {
                return t.dishItems;
            }).reduce(function(t, e) {
                var i, r, a = e.sourceItemNo || e.itemNo;
                return t[a] = null != (i = t[a]) ? i : 0 + Number(null != (r = e.count) ? r : 0), 
                t;
            }, {});
            this.cartDish.forEach(function(i) {
                if (i.itemNo) {
                    var r = e[i.itemNo];
                    r ? i.count !== r && (i.count = r) : t.cartDish.delete(i.itemNo);
                }
            }), this.refreshDish(), this.refreshCart();
        }
    }, {
        key: "afterAddToCart",
        value: function(t) {
            return this.refreshDish(), this.refreshCart(), h.default.sendInfo({
                name: "[V2][addToCart]",
                content: {
                    dish: t
                }
            }), !0;
        }
    }, {
        key: "addToCart",
        value: (v = a(r.default.mark(function t(e) {
            var i;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return i = this.addDish(e), t.abrupt("return", !!i && this.afterAddToCart([ i ]));

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function(t) {
            return v.apply(this, arguments);
        })
    }, {
        key: "addBatchDishes",
        value: function(t) {
            var e = this, i = [];
            return t.forEach(function(t) {
                var r = e.addDish(t);
                r && i.push(r);
            }), this.afterAddToCart(i);
        }
    }, {
        key: "addDish",
        value: function(t) {
            if (!(this.emitter.emit(o.CART_PROCESS_EVENT.ADD_TO_CART_PROCESS, t) || []).some(function(t) {
                return !t;
            })) {
                var e = this.getDishKey(t), r = t.skuId, a = t.itemNo, n = t.count, s = this.cartDish.get(e), c = (null == s ? void 0 : s.count) || 0, u = Date.now();
                t.updateTime = u, t.createTime = (null == s ? void 0 : s.createTime) || u;
                var h = c + n;
                if (!(h < 0)) {
                    var l = a ? this.cartDish.get(a) : void 0;
                    a && (a === e && (h = n), this.cartDish.delete(a));
                    var d = i(i({
                        name: (null == s ? void 0 : s.name) || ""
                    }, t), {}, {
                        count: h
                    });
                    this.cartDish.set(e, d);
                    var f = l ? l.count : 0, p = this.cartDishList, m = !this.rule.checkDishLimit(p);
                    return !m && this.menuCoupon && (m = !this.menuCoupon.check(i(i({}, t), {}, {
                        itemNo: e,
                        delCount: f
                    }))), !m && h < c && (m = !this.rule.checkMandatoryDishLimit(p, r)), m ? (this.cartDish.delete(e), 
                    (null == l ? void 0 : l.itemNo) && this.cartDish.set(l.itemNo, l), void (s && this.cartDish.set(e, s))) : d;
                }
            }
        }
    }, {
        key: "refreshCart",
        value: function() {
            this.cartCalculateThrottle();
        }
    }, {
        key: "refreshDish",
        value: function() {
            this.emitter.emit(o.EVENTS.DISH_CHANGE, this.getCartDataBySpu());
        }
    }, {
        key: "fetchCart",
        value: (m = a(r.default.mark(function t() {
            var e, i, a, n = this;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!this.cartOrderId) {
                        t.next = 15;
                        break;
                    }
                    return t.prev = 1, t.next = 4, this.getCloudCartInfo({
                        cartOrderId: this.cartOrderId
                    });

                  case 4:
                    if (t.t0 = t.sent, t.t0) {
                        t.next = 7;
                        break;
                    }
                    t.t0 = {};

                  case 7:
                    e = t.t0, i = e.dishItems, a = e.warnTip, i ? (this.cartDish.forEach(function(t) {
                        var e = t || {}, r = e.itemNo, a = e.count;
                        if (r) {
                            var s = (i || []).find(function(t) {
                                return t.itemNo === r;
                            });
                            s ? s.count !== a && (t.count = s.count) : n.cartDish.delete(r);
                        }
                    }), i.forEach(function(t) {
                        var e = t.itemNo;
                        e && !n.cartDishList.find(function(t) {
                            return t.itemNo === e;
                        }) && n.cartDish.set(e, t);
                    }), this.refreshDish(), this.refreshCart()) : this.clearCart(), a && this.dealCartWarnTip(a), 
                    t.next = 15;
                    break;

                  case 13:
                    t.prev = 13, t.t1 = t.catch(1);

                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 1, 13 ] ]);
        })), function() {
            return m.apply(this, arguments);
        })
    }, {
        key: "mergeCart",
        value: (p = a(r.default.mark(function t(e) {
            var i, a, n, s, c = this;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!Object.keys(e).length) {
                        t.next = 25;
                        break;
                    }
                    return e.cartOrderId && (this.cartOrderId = e.cartOrderId), t.prev = 2, t.next = 5, 
                    this.getCloudCartInfo(e);

                  case 5:
                    if (t.t0 = t.sent, t.t0) {
                        t.next = 8;
                        break;
                    }
                    t.t0 = {};

                  case 8:
                    if (i = t.t0, a = i.dishItems, n = i.warnTip, a && (s = a.reduce(function(t, e) {
                        var i;
                        return e.itemNo = c.getDishKey(e), e.count = (null != (i = (t[e.itemNo] || {}).count) ? i : 0) + e.count, 
                        t[e.itemNo] = e, t;
                    }, {}), Object.values(s).forEach(function(t) {
                        var e = t.itemNo, i = c.cartDishList.find(function(t) {
                            return t.itemNo === e;
                        });
                        i ? i.count = Math.max(i.count, t.count) : e && c.cartDish.set(e, t);
                    }), this.refreshDish(), this.cartCalculate()), t.t1 = e.againOrderViewId, !t.t1) {
                        t.next = 19;
                        break;
                    }
                    if (t.t2 = this.calculateRequest, !t.t2) {
                        t.next = 18;
                        break;
                    }
                    return t.next = 18, this.calculateRequest;

                  case 18:
                    this.cartListData.dishCount && this.emitter.emit(o.EVENTS.OPEN_CART_LIST);

                  case 19:
                    this.dealCartWarnTip(n), t.next = 25;
                    break;

                  case 22:
                    t.prev = 22, t.t3 = t.catch(2), console.log(t.t3);

                  case 25:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 2, 22 ] ]);
        })), function(t) {
            return p.apply(this, arguments);
        })
    }, {
        key: "validateDish",
        value: function(t, e) {
            var r = this.getCartCountBySku(t.skuId);
            return this.rule.checkDishRule(i(i({}, t), {}, {
                count: r,
                deltaCount: e
            }));
        }
    }, {
        key: "cartStyle",
        get: function() {
            return this._cartStyle;
        }
    }, {
        key: "setCartStyle",
        value: (u = a(r.default.mark(function t(e) {
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    this._cartStyle = e;

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function(t) {
            return u.apply(this, arguments);
        })
    }, {
        key: "cartCalculate",
        value: function() {
            var t = this, e = [], i = 0;
            this.cartDish.forEach(function(t, r) {
                t.count > 0 && (t.itemNo = r, e.push(t), i += +t.count);
            }), 0 === i && this.emitter.emit(o.EVENTS.CART_CHANGE, {
                actualPrice: "",
                discountPrice: "",
                cartTips: ""
            });
            var r = "/@biz/cart/cartcal";
            if (this.options.get("poiId")) {
                var a = new l.Transaction(this.triangle.getReportKey(r, this.options)), n = ++this.calculateRequestTick;
                this.calculateRequest = this.request.post(r, {
                    dishItems: e,
                    cartOrderId: this.cartOrderId
                }).then(function(e) {
                    var r = e.code, s = e.data, u = e.message;
                    if (n < t.calculateRequestTick) return a.fail(423), n;
                    if (t.calculateRequest = null, 200 === r) {
                        var h = s.cartTips, l = s.cartOrderId, d = s.actualPrice, f = s.discountPrice, p = s.dishSectionList, m = s.dishNum, v = s.cartWarnTip, C = s.campaignDiscount, D = s.aftCalDishItems;
                        t.cartOrderId = l, t.cartListData = {
                            dishCount: m || i,
                            actualPrice: "".concat(d || ""),
                            discountPrice: "".concat(f || ""),
                            cartTips: h,
                            dishSectionList: p,
                            campaignDiscount: C || ""
                        }, D && t.rebuildLocalCart(D), (null != m ? m : 0) !== i && t.resetCartDish(), t.dealCartWarnTip(v), 
                        a.success();
                    } else t.emitter.emit(o.EVENTS.CART_CAL_ERROR, {
                        code: r,
                        message: u
                    }), c.default.getLimoRuntime().showToast({
                        title: u,
                        icon: "none"
                    }), a.fail(r);
                    return t.emitter.emit(o.EVENTS.CART_CHANGE, {
                        actualPrice: t.cartListData.actualPrice,
                        discountPrice: t.cartListData.discountPrice,
                        cartTips: t.cartListData.cartTips,
                        dishSectionList: t.cartListData.dishSectionList,
                        campaignDiscount: t.cartListData.campaignDiscount
                    }), n;
                }).catch(function() {
                    a.fail(500);
                });
            }
        }
    }, {
        key: "rebuildLocalCart",
        value: function(t) {
            var e = this, i = new Map();
            t.forEach(function(t) {
                var r = t.itemNo, a = e.getDishKey(t), n = i.get(a);
                n ? n.count = n.count + t.count : (t.itemNo = a, i.set(a, t));
                var s = (e.cartListData.dishSectionList || []).flatMap(function(t) {
                    return t.dishItems;
                }).find(function(t) {
                    return (t.sourceItemNo || t.itemNo) === r;
                });
                s && (s.sourceItemNo = a);
            }), this.cartDish = i, this.refreshDish();
        }
    }, {
        key: "dealCartWarnTip",
        value: function(t) {
            if (t) {
                var e = t.type, i = t.warnTip, r = t.warnTitle, a = t.extend, n = i.length > 8 ? 3e3 : 1500;
                e !== f || this.warnTipCache.get(this.cartOrderId) || this.warnTipCache.set(this.cartOrderId, i), 
                a && Object.keys(a).length ? this.limoFactory().limoShowDialog("cart-warn-modal", {
                    title: r,
                    content: i,
                    extend: a
                }, {
                    maskClosable: !1
                }) : this.limoFactory().limoShowToast({
                    title: i,
                    duration: n
                });
            }
        }
    }, {
        key: "cartDishList",
        get: function() {
            return Array.from(this.cartDish.values());
        }
    }, {
        key: "getCloudCartInfo",
        value: (e = a(r.default.mark(function t(e) {
            var i, a, n;
            return r.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, this.request.post("/@biz/cart/info", e);

                  case 2:
                    if (t.t0 = t.sent, t.t0) {
                        t.next = 5;
                        break;
                    }
                    t.t0 = {};

                  case 5:
                    if (i = t.t0, a = i.code, n = i.data, 200 === a && n) {
                        t.next = 10;
                        break;
                    }
                    throw new Error();

                  case 10:
                    return t.abrupt("return", n);

                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        })), function(t) {
            return e.apply(this, arguments);
        })
    } ]), t;
}()) || e) || e) || e) || e) || e) || e) || e) || e) || e) || e) || e;

exports.default = p;