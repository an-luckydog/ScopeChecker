var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.calculateNewProperDishCount = exports.LIMIT_COUNT_MESSAGE_DURATION = void 0, 
exports.computeSkuDishListInCart = function(e, t) {
    var r = [];
    return {
        skusCountInCart: e.reduce(function(e, u) {
            for (var i = 0, o = 0, a = Object.keys(t || {}); o < a.length; o++) {
                var s = a[o], l = t[s].filter(function(e) {
                    return +e.skuId == +u;
                });
                if (l.length > 0) {
                    var c, d = n(l);
                    try {
                        for (d.s(); !(c = d.n()).done; ) {
                            var m, p, f = c.value, v = f.skuName, h = f.specAttrs, g = f.count, C = void 0 === g ? 0 : g, I = v;
                            Array.isArray(h) && null != (m = h[0]) && m.value && (I += "-" + (null == (p = h[0]) ? void 0 : p.value)), 
                            -1 === r.indexOf(I) && r.push(I), i += C;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        d.e(e);
                    } finally {
                        d.f();
                    }
                }
            }
            return e + i;
        }, 0),
        skuNames: r
    };
}, exports.convertAssociatedSkuLimitData = function(e) {
    var t = e.limitCount, n = void 0 === t ? 1 / 0 : t, r = e.incBoughtCount, u = void 0 === r ? 1 : r, i = e.minBoughtCount, o = void 0 === i ? 1 : i, a = e.skusCountInCart, s = void 0 === a ? 0 : a;
    return e.isSkuIdDishInCart ? {
        usedCount: s,
        delta: -1 === o ? u : o,
        limitCount: n
    } : {
        usedCount: s,
        delta: u,
        limitCount: n
    };
}, exports.convertComplexSpuToSimpleSpu = function(e, n) {
    var r = e.skuMenuItems.find(function(e) {
        return e.skuId === n;
    });
    if (!r) return null;
    var u = t(t({}, r), {}, {
        tastes: [],
        methods: []
    });
    return t(t({}, e), {}, {
        specAttrs: [],
        skuMenuItems: [ u ],
        tastes: [],
        methods: []
    });
}, exports.dealNormalDetail = function(e, t) {
    var n, u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = e.skuMenuItems.find(function(e) {
        return e.skuId === t.skuId;
    }), o = [], a = r.default.getIn(i, [ "specAttrs", "0", "valueId" ]), s = "";
    null == (n = e.specAttrs) || n.find(function(e) {
        var t;
        return null == (t = e.specValues) ? void 0 : t.find(function(e) {
            return +e.key == +a && (s = e.value, !0);
        });
    });
    var c = t.methods || (0, r.default)([]), d = t.tastes || (0, r.default)([]), m = [];
    if (s && e.skuMenuItems.length > 1 && o.push(s), c.forEach(function(e) {
        o.push(e.items.map(function(e) {
            return e.name;
        }).join("；"));
    }), d.forEach(function(e) {
        e.items.forEach(function(e) {
            var t = e.count > 1 ? "".concat(e.name, "x").concat(e.count) : e.name;
            m.push(t);
        });
    }), m.length > 0) {
        var p = "加料：" + m.join("、");
        o.push(p);
    }
    return void 0 !== t.mustCount && t.mustCount >= 0 && !o.length && (0, l.judgeComplexSpuDish)(e) && o.push("请选择做法/加料"), 
    t.remark && "string" == typeof t.remark ? o.push("备注：" + t.remark) : !(0, l.judgeComplexSpuDish)(e) || o.length || e.canWeight || !u || t.manualCampaigns || o.push("添加备注"), 
    o.join("；");
}, exports.getDishListFromStore = function(e, t) {
    var n = e ? r.default.getIn(e, [ "dish", "dishList" ]) : null, i = t || r.default.getIn(e, [ "cart", "shopId" ]);
    return n && Object.keys(n).length > 0 ? n : u.default.getDishList(i);
}, exports.getMemberTagNew = function(e) {
    var t, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    if (!e) return;
    if (!(null == e || null == (t = e.tagList) ? void 0 : t.some(function(e) {
        return (null == e ? void 0 : e.colorType) === a.LABEL_TYPE.BKG_PRICE_1 || 16 === (null == e ? void 0 : e.colorType);
    }))) return;
    var s = e.tagList.find(function(e) {
        return (null == e ? void 0 : e.colorType) === a.LABEL_TYPE.BKG_PRICE_1 || 16 === (null == e ? void 0 : e.colorType);
    }), l = Number(s.tagDesc);
    return (l = u ? l ? (0, i.plusFloat)((0, i.multiFloat)(l, e.weight), e.extraPrice) : null : l ? (0, 
    i.plusFloat)(l, e.extraPrice) : null) && r.default.getIn(e, [ "promotionTag", "type" ]) !== o.SHOP_PROMOTION_TYPE.SPECIAL_PRICE && (n = l), 
    n;
}, exports.getPriceText = function(e, t, n) {
    var u;
    return u = e && t.memberPrice && r.default.getIn(t, [ "promotionTag", "type" ]) !== o.SHOP_PROMOTION_TYPE.SPECIAL_PRICE && t.memberPrice < t.currentPrice ? t.memberPrice : t.currentPrice, 
    n ? 0 : u;
}, exports.getRankIcon = function(e) {
    switch (e) {
      case 1:
        return "https://p0.meituan.net/scarlett/d7edf25db174be7cd88b7e63b347a93c5721.png";

      case 2:
        return "https://p0.meituan.net/scarlett/0d2de36a70e1820fa4e1eba896bdd6405810.png";

      case 3:
        return "https://p1.meituan.net/scarlett/1bd8d63be7694a92e6b94a8637e79aee5814.png";

      default:
        return "";
    }
}, exports.getRecommendTag = function(e) {
    if (!e) return "";
    var t = e.labelCode;
    return 50 === t ? "" : 20 === t ? '"'.concat(e.labelName, '"') : e.labelName || "";
}, exports.isAddPrice = p, exports.jointExceedLimitCountMessage = void 0, exports.limitOrderDishHandle = function(e, t, n) {
    u.default.getLimitOrderDishTag() && !n || (u.default.setLimitOrderDishTag(!0), (0, 
    s.default)({
        title: "温馨提示",
        body: e,
        buttons: [ {
            text: o.CONFIRM_TEXT,
            type: "submit",
            callback: function() {
                u.default.setLimitOrderDishTag(!1), t && t();
            }
        } ]
    }));
}, exports.verifyLimitCount = f, exports.verifySimpleSkuLimitCount = function(e) {
    var t = e.limitCount, n = void 0 === t ? 1 / 0 : t, r = e.orderedCount, u = void 0 === r ? 0 : r, i = e.incBoughtCount, o = void 0 === i ? 1 : i, a = e.minBoughtCount, s = void 0 === a ? 1 : a, l = e.skuIdDishCountInCart, c = void 0 === l ? 0 : l;
    return 0 === c ? f({
        usedCount: u,
        delta: -1 === s ? o : s,
        limitCount: n
    }) : c > 0 && f({
        usedCount: u + c,
        delta: o,
        limitCount: n
    });
};

var t = require("../b/helpers/objectSpread2"), n = require("../b/helpers/createForOfIteratorHelper"), r = e(require("../miniprogram_npm/seamless-immutable/index.js")), u = e(require("../api/rmsStorage")), i = require("../lib/number"), o = require("../constants/bizConstants"), a = require("../miniprogram_npm/@components/limo-ui/ui-constant/enum"), s = e(require("../lib/mix/confirm")), l = require("./cartHelper");

function c(e) {
    var t = !1, n = e.methods;
    return n && n.length > 0 && n.map(function(e) {
        return e && e.items && e.items.length > 0 && e.items.map(function(e) {
            return e.price > 0 && (t = !0), null;
        }), null;
    }), t;
}

function d(e) {
    var t = !1, n = e.tastes;
    return n && n.length > 0 && n.map(function(e) {
        return e && e.items && e.items.length > 0 && e.items.map(function(e) {
            return e.price > 0 && (t = !0), null;
        }), null;
    }), t;
}

function m(e) {
    var t = !1;
    return e && e.length > 0 && e.map(function(e) {
        return e && e.groupSkus && e.groupSkus.length > 0 && e.groupSkus.map(function(e) {
            return c(e) && (t = !0), d(e) && (t = !0), e.addPrice && (t = !0), null;
        }), null;
    }), t;
}

function p(e) {
    var t, n = null == e ? void 0 : e.currentPrice, u = !1;
    (null == e ? void 0 : e.dishType) === o.DISH_TYPE.NORMAL ? (u = null == e || null == (t = e.skuMenuItems) ? void 0 : t.some(function(e) {
        return e.currentPrice !== n;
    }), c(e) && (u = !0), d(e) && (u = !0)) : m(r.default.getIn(e, [ "skuMenuItems", 0, "packageGroups" ])) && (u = !0);
    return u;
}

exports.LIMIT_COUNT_MESSAGE_DURATION = 1500;

exports.jointExceedLimitCountMessage = function(e) {
    var t = e.dishName, n = e.limitCount, r = e.orderedCount, u = e.limitValuePerPerson, i = e.limitMessageTpl, o = Array.isArray(t) ? t.join("，") : t;
    if (i) {
        var a = i.replace("{limit}", "" + n);
        return a = a.replace("{list}", o), u && u > 0 && (a = a.replace("{limitValuePerPerson}", "" + u)), 
        a;
    }
    return 0 === r ? "[".concat(o, "]限购 ").concat(n, " 份哦～") : "[".concat(o, "]已达到限购数量～");
};

function f(e) {
    var t = e.usedCount, n = e.delta, r = e.limitCount, u = e.newUsedCount;
    return r = -1 === r || null === r ? 1 / 0 : r, void 0 !== u ? u <= r : t + n <= r;
}

exports.calculateNewProperDishCount = function(e) {
    var t = e.maximumRestrictCount, n = e.incBoughtCount, r = e.minBoughtCount, u = e.orderedCount, i = t - u - r;
    return i % n != 0 ? Math.floor(i / n) * n + r : t - u;
};