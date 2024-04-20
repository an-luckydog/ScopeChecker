Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, e = require("../../b/helpers/classCallCheck"), n = require("../../b/helpers/createClass"), i = require("../../commons/inversify"), a = require("../../commons/constants"), r = (0, 
i.injectable)()(t = function(t) {
    return (0, i.inject)(a.TYPES.LIMO)(t, void 0, 0);
}(t = function(t) {
    return (0, i.inject)(a.TYPES.CART)(t, void 0, 1);
}(t = Reflect.metadata("design:type", Function)(t = Reflect.metadata("design:paramtypes", [ "undefined" == typeof ILimo ? Object : ILimo, "undefined" == typeof CartEntity ? Object : CartEntity ])(t = function() {
    function t(n, i) {
        e(this, t), this.limo = n, this.cart = i, this.mandatoryRules = [];
    }
    return n(t, [ {
        key: "run",
        value: function(t) {
            this.mandatoryRules = t.mandatoryRules || [];
            var e = this.mandatoryRules.filter(function(t) {
                return t.autoAdd;
            }), n = 0, i = [];
            if (e.forEach(function(t) {
                var e = t.items;
                n += e.length;
                var r = e.filter(function(t) {
                    return t.dishType === a.DISH_TYPE.SIMPLE_SPU && 1 === t.status;
                });
                i = i.concat(r || []);
            }), i.length > 0) {
                var r = i.map(function(t) {
                    return {
                        spuId: t.spuId,
                        skuId: t.skuId,
                        name: t.name,
                        count: +t.minBoughtCount
                    };
                }), o = Array.from(this.cart.cartDish.values()), u = r.filter(function(t) {
                    var e = o.find(function(e) {
                        return e.skuId === t.skuId;
                    });
                    if (e) {
                        if (e.count >= t.count) return !1;
                        t.count = t.count - e.count;
                    }
                    return !0;
                }), s = new Set(), c = u.reduce(function(t, e) {
                    return s.has(e.skuId) || (s.add(e.skuId), t.push(e)), t;
                }, []);
                c.length > 0 && (this.limo.limoShowToast({
                    title: "已加入" + c.map(function(t) {
                        return "".concat(t.name, "x").concat(t.count);
                    }).join("、"),
                    duration: 2e3
                }), this.cart.addBatchDishes(c));
            }
            e.length === this.mandatoryRules.length && n === i.length || this.openDishMandatoryPanel();
        }
    }, {
        key: "openDishMandatoryPanel",
        value: function() {
            var t, e = this;
            0 !== this.mandatoryRules.length && (null == (t = this.limo) || t.limoShowDialog("mandatory-dish-panel", {
                solutions: this.mandatoryRules
            }, {
                header: {
                    closeable: !0,
                    title: "请选必点菜"
                },
                position: "bottom",
                afterClose: function() {
                    var t;
                    null == (t = e.cart) || t.refreshDish();
                }
            }));
        }
    } ]), t;
}()) || t) || t) || t) || t) || t;

exports.default = r;