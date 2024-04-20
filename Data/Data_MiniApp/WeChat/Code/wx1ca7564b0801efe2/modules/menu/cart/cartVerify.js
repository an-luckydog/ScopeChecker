var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.handleInvalidDishes = void 0;

var r = require("../../../b/helpers/objectSpread2");

require("../../../b/helpers/Objectvalues");

var a, n = require("../../../b/helpers/toConsumableArray"), t = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), u = ((a = u || {})[a.Mutex = 1031] = "Mutex", 
a);

exports.handleInvalidDishes = function(e, a) {
    var i, s = [], o = e.campaignDishes, c = e.saleableDishList, l = (i = []).concat.apply(i, n(Object.values(a)));
    (c || []).forEach(function(e) {
        var r = e.goodsNo;
        if (e.code === u.Mutex) {
            var a = l.find(function(e) {
                return e.goodsNo === r;
            });
            a && s.push({
                skuDish: a,
                addCount: -((null == a ? void 0 : a.count) || 0)
            });
        }
    });
    var f = {};
    if (!Array.isArray(o)) return s;
    o.forEach(function(e) {
        var r = e.skuId, a = e.quantity, n = f[r] || 0;
        f[r] = n + a;
    });
    try {
        l.forEach(function(e) {
            if (e.manualCampaigns) for (var a = e.count || 0, n = 0; n < a; n++) {
                if (!Object.keys(f)) throw Error();
                var u = !1, i = e.manualCampaigns.map(function(e) {
                    var a = (e.campaignSkus || []).map(function(e) {
                        var a = e.skuId, n = e.count, t = f[a];
                        if (!t) return e;
                        var i = n - t;
                        return u = !0, i > 0 ? (delete f[a], r(r({}, e), {}, {
                            count: i
                        })) : void (f[a] -= n);
                    }).filter(function(e) {
                        return !!e;
                    });
                    if (a.length) return r(r({}, e), {}, {
                        campaignSkus: a
                    });
                }).filter(function(e) {
                    return !!e;
                });
                if (!u) break;
                var o = t.default.set(e, "manualCampaigns", i);
                s = s.concat([ {
                    skuDish: e,
                    addCount: -1
                }, {
                    skuDish: o,
                    addCount: 1
                } ]);
            }
        });
    } catch (e) {}
    return s;
};