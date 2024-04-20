var e = require("../../../b/helpers/interopRequireDefault"), t = e(require("../../../b/regenerator")), n = require("../../../b/helpers/objectSpread2"), i = require("../../../b/helpers/asyncToGenerator"), r = require("../../../miniprogram_npm/@limo/container/behaviors/index"), s = e(require("../../../commons/component")), a = require("../../../commons/constants"), o = function(e, t) {
    var n = e.spuId, i = e.skuId, r = e.name, s = e.extendList;
    return {
        spuId: n,
        skuId: i,
        name: r,
        count: t.count,
        extendList: s
    };
};

(0, s.default)({
    behaviors: [ r.commonBehavior, r.limoShim ],
    properties: {
        dish: {
            type: Object,
            value: {}
        },
        count: {
            type: Number,
            value: 0
        },
        preventDefault: {
            type: Boolean,
            value: !1
        },
        extras: {
            type: Object,
            value: {}
        },
        size: {
            type: String,
            value: ""
        },
        forceTitle: {
            type: String,
            value: ""
        },
        disablePlus: {
            type: Boolean,
            value: !1
        }
    },
    observers: {
        "dish.dishType,dish.minBoughtCount,dish.unit,count,extras,forceTitle": function(e, t, n, i, r, s) {
            var o = "";
            r && r.extendList && r.extendList.find(function(e) {
                return "deal-dish-extend" === e[0];
            }) && 0 === i ? o = "使用" : +t > 1 && 0 === i ? o = "".concat(t).concat(n, "起售") : +e === a.DISH_TYPE.COMPLEX_SPU ? o = "选规格" : +e !== a.DISH_TYPE.COMPLEX_COMBO && +e !== a.DISH_TYPE.SIMPLE_COMBO || (o = "选套餐"), 
            s && (o = s), o !== this.data.opTitle && this.setData({
                opTitle: o
            });
        }
    },
    data: {
        opTitle: ""
    },
    methods: {
        onCount: function() {
            console.log(1);
        },
        onAdd: function() {
            var e = this;
            return i(t.default.mark(function i() {
                var r, s, u, d, c, p, h, l, v, m, g, T, f;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (null == (r = e.entity) || r.get(a.TYPES.LX).sendMC("b_saaspay_q03j1tqs_mc"), 
                        s = e.data, u = s.dish, d = s.count, c = s.preventDefault, p = s.extras, h = u.spuId, 
                        l = u.skuId, v = u.minBoughtCount, m = u.incBoughtCount, g = u.stockCount, T = u.addType, 
                        !c) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return", void e.triggerEvent("operationBtnClick", {
                            operation: "plus"
                        }));

                      case 4:
                        if (+T === a.ADD_TYPE.DIRECT) {
                            t.next = 6;
                            break;
                        }
                        return t.abrupt("return", void e.onOperation());

                      case 6:
                        f = d > 0 ? +m : +v, e.entity.get(a.TYPES.CART).validateDish({
                            spuId: h,
                            skuId: l,
                            stockCount: g
                        }, f) && (e.getRecommendDish(), e.entity.get(a.TYPES.CART).addToCart(o(u, n(n({}, p), {}, {
                            count: f
                        }))));

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, i);
            }))();
        },
        onReduce: function() {
            var e;
            null == (e = this.entity) || e.get(a.TYPES.LX).sendMC("b_saaspay_9tpv3ev7_mc");
            var t = this.data, i = t.dish, r = t.count, s = t.preventDefault, u = t.extras;
            if (s) this.triggerEvent("operationBtnClick", {
                operation: "minus"
            }); else {
                var d = i.minBoughtCount, c = i.incBoughtCount, p = r > +d ? +c : +d, h = (this.entity.get(a.TYPES.CART).cartDishList.reverse().find(function(e) {
                    return e.skuId === i.skuId && e.spuId === i.spuId && e.count > 0;
                }) || {}).dishRemarks, l = void 0 === h ? [] : h;
                this.entity.get(a.TYPES.CART).addToCart(n(n({}, o(i, n(n({}, u), {}, {
                    count: -1 * p
                }))), {}, {
                    dishRemarks: l
                }));
            }
        },
        onOperation: function() {
            var e = this.data, t = e.dish, i = e.extras;
            if (e.preventDefault) this.triggerEvent("operationBtnClick", {
                operation: "button"
            }); else {
                var r = t.dishType;
                if (+t.addType === a.ADD_TYPE.DIRECT) this.onAdd(); else {
                    var s = t.spuId, o = t.extendList;
                    this.getRecommendDish(), this.entity.get(a.TYPES.DISH).openDish(r, {
                        spuId: s,
                        extraParams: n(n({}, i), {}, {
                            extendList: o
                        }),
                        autoScroll: !0
                    });
                }
            }
        },
        getRecommendDish: function() {
            var e, t = this.data, n = t.dish, i = t.extras, r = i.showRecommendPairing, s = i.categoriesId;
            if ((null == (e = n.extendList) || !e.length) && r && s) {
                var o = this.entity.get(a.TYPES.CART).cartOrderId;
                this.entity.get(a.TYPES.DISH).getRecommendMatchDish({
                    spuId: n.spuId,
                    cartOrderId: o,
                    categoriesId: s,
                    pageFrom: 10
                });
            }
        }
    }
});