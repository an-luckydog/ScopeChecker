var t = require("../../b/helpers/interopRequireDefault"), e = t(require("../../b/regenerator")), i = require("../../b/helpers/defineProperty"), n = require("../../b/helpers/objectSpread2"), s = require("../../b/helpers/asyncToGenerator"), a = require("../../miniprogram_npm/@limo/container/behaviors/index"), r = t(require("../../commons/component")), o = require("../../commons/constants");

(0, r.default)({
    behaviors: [ a.commonBehavior, a.limoShim ],
    properties: {
        cartTipsStyles: {
            type: Object,
            value: {}
        },
        cartTipBg: {
            type: String,
            value: ""
        }
    },
    data: {
        dishCount: 0,
        cartTips: [],
        dishSectionList: [],
        hasTabBar: !0,
        cartStyles: {}
    },
    lifetimes: {
        attached: function() {
            var t, e = this.entity.get(o.TYPES.CART).cartListData || {}, i = e.dishCount, n = void 0 === i ? 0 : i, s = e.cartTips, a = void 0 === s ? [] : s, r = e.dishSectionList, c = void 0 === r ? [] : r, u = (this.entity.get(o.TYPES.CART).cartStyle || {}).cartStyles, h = {
                dishCount: n,
                cartTips: a,
                dishSectionList: c,
                cartStyles: void 0 === u ? {} : u
            }, d = !(null == (t = this.getTabBar) || !t.call(this));
            this.data.hasTabBar !== d && (h.hasTabBar = d), this.setData(h), this.entity.get(o.TYPES.EMITTER).on(o.EVENTS.DISH_CHANGE, this.onDishChange, this), 
            this.entity.get(o.TYPES.EMITTER).on(o.EVENTS.CART_CHANGE, this.renderDishList, this);
        },
        detached: function() {
            this.entity.get(o.TYPES.EMITTER).off(o.EVENTS.DISH_CHANGE, this.onDishChange, this), 
            this.entity.get(o.TYPES.EMITTER).off(o.EVENTS.CART_CHANGE, this.renderDishList, this);
        }
    },
    methods: {
        onDishChange: function(t) {
            var e = t.dishCount;
            0 === e ? this.entity.get(o.TYPES.LIMO).limoCloseDialog("cart-list") : this.setData({
                dishCount: e
            });
        },
        renderDishList: function() {
            var t = this.entity.get(o.TYPES.CART).cartListData || {}, e = t.cartTips, i = void 0 === e ? [] : e, n = t.dishSectionList, s = void 0 === n ? [] : n, a = t.dishCount;
            this.setData({
                cartTips: i,
                dishSectionList: s,
                dishCount: a
            });
        },
        onReduce: function(t) {
            var a = this;
            return s(e.default.mark(function s() {
                var r, c, u, h, d, T, g, l, S, C, m;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = t.currentTarget.dataset, c = r.section, u = r.index, h = a.getDish(t)) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        return d = h.count, T = h.incBoughtCount, g = h.minBoughtCount, l = h.name, S = +d > +g ? +T || 1 : +g || 1, 
                        C = h.sourceItemNo || h.itemNo, delete (m = n(n({}, a.entity.get(o.TYPES.CART).cartDish.get(C)), {}, {
                            count: -1 * S,
                            name: l
                        })).itemNo, e.next = 7, a.entity.get(o.TYPES.CART).addToCart(m);

                      case 7:
                        if (e.t0 = e.sent, !e.t0) {
                            e.next = 10;
                            break;
                        }
                        a.setData(i({}, "dishSectionList[".concat(c, "].dishItems[").concat(u, "].count"), +d + -1 * S));

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, s);
            }))();
        },
        onAdd: function(t) {
            var a = this;
            return s(e.default.mark(function s() {
                var r, c, u, h, d, T, g, l, S, C, m, E, f, p;
                return e.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = t.currentTarget.dataset, c = r.section, u = r.index, h = a.getDish(t)) {
                            e.next = 3;
                            break;
                        }
                        return e.abrupt("return");

                      case 3:
                        if (d = h.spuId, T = h.skuId, g = h.count, l = h.incBoughtCount, S = h.minBoughtCount, 
                        C = h.stockCount, m = h.name, E = +g > 0 ? +l || 1 : +S || 1, f = h.sourceItemNo || h.itemNo, 
                        delete (p = n(n({}, a.entity.get(o.TYPES.CART).cartDish.get(f)), {}, {
                            count: E,
                            name: m
                        })).itemNo, e.t0 = a.entity.get(o.TYPES.CART).validateDish({
                            spuId: d,
                            skuId: T,
                            stockCount: C
                        }, E), !e.t0) {
                            e.next = 10;
                            break;
                        }
                        return e.next = 9, a.entity.get(o.TYPES.CART).addToCart(p);

                      case 9:
                        e.t0 = e.sent;

                      case 10:
                        if (e.t1 = e.t0, !e.t1) {
                            e.next = 13;
                            break;
                        }
                        a.setData(i({}, "dishSectionList[".concat(c, "].dishItems[").concat(u, "].count"), +g + E));

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, s);
            }))();
        },
        onDesc: function(t) {
            var e = this.getDish(t);
            if (e) {
                var i = e.sourceItemNo || e.itemNo, s = n({}, this.entity.get(o.TYPES.CART).cartDish.get(i)), a = s.spuId, r = s.extendList, c = s.skuId;
                if (a) {
                    var u = {};
                    r && Object.assign(u, {
                        extendList: r,
                        focusSkuId: c
                    }), this.entity.get(o.TYPES.DISH).openDish(e.dishType, {
                        spuId: a,
                        cartDishInfo: s,
                        extraParams: u,
                        autoScroll: !0
                    });
                }
            }
        },
        onCount: function() {},
        getDish: function(t) {
            var e = t.currentTarget.dataset, i = e.section, n = e.index, s = (this.data.dishSectionList[i] || {}).dishItems;
            if (s) return s[n];
        },
        onDelete: function() {
            var t, e;
            this.entity.get(o.TYPES.LX).sendMC("b_saaspay_lxmzp99s_mc");
            var i = this.entity.get(o.TYPES.CART).cartDish, s = Array.from(i.values()).map(function(t) {
                return n(n({}, t), {}, {
                    count: 0
                });
            }), a = this.entity.get(o.TYPES.RULE);
            a && s.some(function(t) {
                return !a.checkMandatoryDishLimit(s, t.skuId, "必点菜不允许删除");
            }) || (this.entity.get(o.TYPES.CART).clearCart(), this.entity.get(o.TYPES.LIMO).limoCloseDialog("cart-list"), 
            null == (t = (e = this.entity.get(o.TYPES.CART_CHECK)).clearCart) || t.call(e));
        }
    }
});