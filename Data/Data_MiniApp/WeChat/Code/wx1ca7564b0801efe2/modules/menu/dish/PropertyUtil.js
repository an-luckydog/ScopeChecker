var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dealPicLabel = exports.dealOriginalPrice = exports.dealOrderedSize = exports.dealOperationUnitStr = exports.dealOperationData = exports.dealHotSellingTag = exports.dealHotRank = exports.dealHiddenDishDesc = exports.dealDescription = exports.dealCurrentPrice = void 0, 
exports.dealPicLabelStyleType = _, exports.dealUnit = exports.dealTagListSize = exports.dealTagList = exports.dealSkuOperationData = exports.dealSkuName = exports.dealSaleQuantity = exports.dealReportConfig = exports.dealPreventSale = exports.dealPicUrl = exports.dealPicTag = void 0;

var t = require("../../../b/helpers/objectSpread2"), n = require("../../../constants/bizConstants"), r = require("../../dishHelper"), o = require("../../../miniprogram_npm/@components/limo-ui/ui-constant/enum"), a = require("../../../constants/menu"), i = require("./expose"), u = e(require("../shop/shopService")), l = require("../../cartHelper"), s = require("./util"), E = require("../../../types/newMenu/MenuData"), c = e(require("../I18n/I18nService")), T = {
    DEFAULT: 0,
    LARGE: 1,
    SMALL: 1,
    DETAIL: 1,
    SUPER_LARGE: 2,
    ADD_ON: 0,
    RECOMMEND_DEFAULT: 1,
    RECOMMEND_LARGE: 2,
    SEARCH: 0,
    RIGHT_LARGE: 2
}, p = function(e) {
    return null == e ? "" : e && e > 9999 ? "月售 9999+" : "月售 " + e;
};

function _(e) {
    return e === E.PIC_LABEL_STYLE_TYPE.THEME ? "theme" : "";
}

exports.dealPicLabel = function(e) {
    var t = e.ordered, r = e.stockCount, o = void 0 === r ? 0 : r, a = e.unit, i = e.picLabelStyleType;
    return t ? {
        text: "已点",
        styleClass: _(i)
    } : o < n.MAX_SHOW_STOCK_COUNT && o > 0 ? {
        text: "仅剩".concat(o).concat(a),
        styleClass: _(i)
    } : void 0;
}, exports.dealDescription = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = "";
    return e && (n += e), t && (n += e ? "；" + t : t), n;
}, exports.dealSaleQuantity = p, exports.dealPicUrl = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.DISH_ITEM_TYPE_VAL.DEFAULT;
    return e[T[t]] || n.PLACEHOLDER_DISH_PIC[t];
}, exports.dealPicTag = function(e) {
    return e;
};

var d = function(e, n, i) {
    var u, l, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "DEFAULT", E = [];
    i ? l = i : e && e.tagList && (l = e.tagList);
    var c = (null == e ? void 0 : e.recommendTags) || [];
    return null != (u = l) && u.length || s !== a.DISH_ITEM_TYPE_VAL.RIGHT_LARGE && s !== a.DISH_ITEM_TYPE_VAL.SUPER_LARGE && s !== a.DISH_ITEM_TYPE_VAL.RECOMMEND_LARGE && s !== a.DISH_ITEM_TYPE_VAL.RECOMMEND_DEFAULT || !(c.length > 0) || (l = Array.isArray(l) ? l.concat(c) : c), 
    l && 0 !== l.length ? E = l.map(function(a) {
        var i = a.tagDesc, u = a.tagLabel;
        switch (a.colorType) {
          case 16:
          case o.LABEL_TYPE.BKG_PRICE_1:
            var l = (0, r.getMemberTagNew)(e, n);
            return t(t({}, a), {}, {
                colorType: a.colorType,
                tagDesc: l || a.tagDesc,
                tagLabel: a.tagLabel
            });

          case o.LABEL_TYPE.BKG_PRICE_2:
            return i || u ? t(t({}, a), {}, {
                tagLabel: null != u ? u : "",
                tagDesc: null != i ? i : ""
            }) : {
                colorType: a.colorType,
                tagDesc: ""
            };

          default:
            return a;
        }
    }) || [] : E;
}, I = function(e) {
    var t = {
        text: "",
        start: ""
    };
    return e.unit && (t.text += "/" + e.unit), (0, r.isAddPrice)(e) && (t.start = "起"), 
    t;
}, L = function(e) {
    return (null == e ? void 0 : e.length) > 4 ? (e + "").substring(0, 4).concat("…") : e;
}, g = function(e, t, r, o) {
    var i, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", E = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "DEFAULT", c = arguments.length > 6 ? arguments[6] : void 0;
    if (e) {
        var T = u.default.getShopServiceData(), p = T.fmpBizData, _ = {
            id: e.spuId,
            count: t,
            mustCount: o,
            unit: I(e),
            maxCount: e.stockCount,
            minCount: e.minBoughtCount,
            incCount: e.incBoughtCount,
            showMultipleInput: e.showMultipleInput,
            mini: -1 !== [ a.DISH_ITEM_TYPE_VAL.SMALL, a.DISH_ITEM_TYPE_VAL.COLLOCATION ].indexOf(E) && c !== n.DISH_CATEGORY_ID.ORDERED,
            showDishOperation: null == (i = null == p ? void 0 : p.showDishOperation) || i
        };
        if ((0, l.judgeMultiDish)(e) || (0, l.judgeComplexSpuDish)(e)) _.type = a.DISH_OPERATION_TYPE_VAL.BUTTON, 
        _.panelType = a.PANEL_TYPE_VAL.SPEC, _.text = "选规格"; else if ((0, l.judgePackageSpuDish)(e)) {
            var d = (0, l.judgeFixedPackage)(e);
            _.type = d ? a.DISH_OPERATION_TYPE_VAL.NUMBER : a.DISH_OPERATION_TYPE_VAL.BUTTON, 
            d || (_.text = "选套餐", _.panelType = a.PANEL_TYPE_VAL.PACKAGE);
        } else _.type = a.DISH_OPERATION_TYPE_VAL.NUMBER;
        return e.canWeight && (_.type = a.DISH_OPERATION_TYPE_VAL.BUTTON, _.weight = r, 
        _.panelType = a.PANEL_TYPE_VAL.WEIGHT, _.text = r ? "".concat(r).concat(L(e.unit)) : "选重量", 
        delete _.count), e.minBoughtCount > 1 && 0 === t && (_.type = "ADDON" === s && t > 0 ? a.DISH_OPERATION_TYPE_VAL.NUMBER : a.DISH_OPERATION_TYPE_VAL.BUTTON, 
        _.text = "".concat(e.minBoughtCount).concat(e.unit || "份", "起售"), e.canWeight && t && (_.text = "".concat(t).concat(e.unit))), 
        e.soldOut && (_.type = a.DISH_OPERATION_TYPE_VAL.TEXT, _.text = n.SOLD_OUT_TEXT), 
        e.canSaleNow || e.validity || (_.type = a.DISH_OPERATION_TYPE_VAL.TEXT, _.text = n.NOT_CAN_SALE, 
        _.needHelp = !0), _;
    }
};

exports.dealHiddenDishDesc = function(e, t) {
    var n = !1;
    if (t !== a.DISH_ITEM_TYPE_VAL.DEFAULT && t !== a.DISH_ITEM_TYPE_VAL.SEARCH) return n;
    var r = e.estimatedPrice, o = e.dishDescribeTag, i = e.recommendTags, u = d(e);
    return p(e.saleQuantity) && r && (i && i.length || o && o.length) && u && u.length && (n = !0), 
    n;
}, exports.dealReportConfig = function(e) {
    var t, n = e.itemDetail, r = e.skuId, o = e.index, a = e.dishType, u = e.isLogin, l = e.parentName, E = e.categoryName, c = e.parentIndex, T = e.categoryId;
    return {
        dishShowType: a,
        dishType: a,
        index: o,
        spuId: n && n.id,
        spuName: n && n.name,
        belongCategory: {
            parentName: l || E,
            parentIndex: l ? c : o,
            name: l ? E : "",
            index: l ? o : ""
        },
        fromDishList: 1,
        hotSaleTag: (0, s.dealHotSaleTag)(null == n || null == (t = n.hotSellingTag) ? void 0 : t.type),
        categoryId: T,
        addFrom: T < 0 ? i.EXPOSE_DISH_TYPE.DISHLIST : i.EXPOSE_DISH_TYPE.CATEGORY,
        skuId: r,
        isLogin: u
    };
}, exports.dealSkuName = function(e) {
    var t;
    if (e) {
        var n = e.specAttrs, r = null == n || null == (t = n[0]) ? void 0 : t.value;
        return r ? "".concat(e.skuName, "(").concat(r, ")") : e.skuName;
    }
}, exports.dealHotSellingTag = function(e, t, n) {
    if (e) {
        var r = "", i = 1, u = [], l = o.HOT_SELLING_TYPE.PRICE_WITH_PIC.some(function(t) {
            return t === (null == e ? void 0 : e.type);
        }), s = c.default.getCurrency();
        return l && t ? (r = e.tagDesc, u = [ s, t ], (i = t.split(".").join("").length) < 2 && (i = 2)) : i = (r = e.tagDesc).length, 
        {
            type: e.type,
            textCount: i,
            text: r,
            prices: u,
            size: n === a.DISH_ITEM_TYPE_VAL.SEARCH ? a.DISH_ITEM_TYPE_VAL.DEFAULT : n
        };
    }
}, exports.dealOrderedSize = function(e) {
    return e;
}, exports.dealSkuOperationData = function(e, n, r, o, i) {
    var u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : a.DISH_ITEM_TYPE_VAL.DEFAULT;
    if (e) {
        var s = e.skuMenuItems.find(function(e) {
            return e.skuId === n;
        });
        if (s) {
            var E = (0, l.getSingleSpu)(e, s), c = s.stockCount, T = s.soldOut, p = s.validity;
            return E = t(t({}, E), {}, {
                stockCount: c || E.stockCount,
                soldOut: T,
                validity: p
            }), t(t({}, g(E, r, o, i, "", u) || {}), {}, {
                skuId: n
            });
        }
    }
}, exports.dealOperationData = g, exports.dealOperationUnitStr = L, exports.dealHotRank = function(e, t) {
    return e && t < 3 ? (0, r.getRankIcon)(t + 1) : "";
}, exports.dealPreventSale = function(e) {
    return !(!e || e.validity && !e.soldOut);
}, exports.dealOriginalPrice = function(e, t) {
    return e.grouponCouponCount && e.grouponCouponCount > 0 ? "" + (0, r.getPriceText)(!1, e, !1) : e.originalPrice && (e.originalPrice !== e.currentPrice || t) ? "" + e.originalPrice : void 0;
}, exports.dealUnit = I, exports.dealCurrentPrice = function(e) {
    return "" + (0, r.getPriceText)(!1, e, e.grouponCouponCount && e.grouponCouponCount > 0);
}, exports.dealTagListSize = function(e) {
    switch (e) {
      case a.DISH_ITEM_TYPE_VAL.SUPER_LARGE:
      case a.DISH_ITEM_TYPE_VAL.RECOMMEND_LARGE:
      case a.DISH_ITEM_TYPE_VAL.RIGHT_LARGE:
        return o.UI_SIZE.MIDDLE;

      default:
        return o.UI_SIZE.SMALL;
    }
}, exports.dealTagList = d;