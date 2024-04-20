var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateDishListSingleton = exports.getChangedMaps = exports.getCategoryType = exports.filterItemKeys = exports.dealHotSaleTag = exports.computeItemCount = exports.categoryDisplay = exports.GetDishListSingleton = void 0, 
require("../../../b/helpers/Arrayincludes");

require("../../../b/helpers/defineProperty");

var r = require("../../../b/helpers/typeof"), t = require("../../../constants/bizConstants"), i = require("../../../constants/menu"), n = (require("../../../lib/wx/transfer-rpx"), 
require("../../dishHelper"), require("../../../miniprogram_npm/@components/limo-ui/ui-constant/enum")), s = e(require("../../../api/rmsStorage")), o = e(require("../../../store/menu")), a = e(require("../../../lib/mix/log")), u = [ "cssType", "rank", "picTag", "picUrl", "picLabel", "hotSellingTag", "name", "desc", "recommendTags", "saleQuantity", "saleQuantityStr", "sampleTagList", "currency", "currentPrice", "priceSmallFont", "originalPrice", "unit", "orderedSize", "preventSale", "tagListSize", "dishDescribeTag", "hiddenCurrency", "isPointPurchaseCategory", "estimatedPrice" ], c = a.default, p = [ t.DISH_CATEGORY_ID.COUPON ];

exports.categoryDisplay = function(e, r, t) {
    var i = r || {}, n = i.childDishCategories, s = i.spuIds, o = void 0 === s ? [] : s, a = i.categoryId;
    if (p.includes(a)) return {
        display: !0,
        spuIdArr: o || []
    };
    if (e) {
        var u = [];
        return null == n || n.forEach(function(e) {
            e.spuIds && e.spuIds.length > 0 && (u = Array.prototype.concat(u, e.spuIds));
        }), {
            display: !0,
            spuIdArr: Array.prototype.concat(o || [], u)
        };
    }
    var c = null == o ? void 0 : o.filter(function(e) {
        return t && t[e];
    });
    return n && n.length ? {
        display: !0,
        spuIdArr: o || []
    } : c && 0 !== c.length ? {
        display: !0,
        spuIdArr: c
    } : {
        display: !1,
        spuIdArr: []
    };
}, exports.dealHotSaleTag = function(e) {
    return void 0 === e ? "" : n.HOT_SELLING_TYPE.PRICE_WITH_PIC.some(function(r) {
        return r === e;
    }) ? "priceTag" : "recTag";
}, exports.getCategoryType = function(e) {
    var r = "text";
    return e !== t.DISH_CATEGORY_ID.HOT && e !== t.DISH_CATEGORY_ID.RECOMMEND && e !== t.DISH_CATEGORY_ID.COUPON || (r = "icon"), 
    r;
}, exports.getChangedMaps = function(e, r) {
    var t = {};
    return e && Object.keys(e).forEach(function(i) {
        r && r[i] && e[i] === r[i] || (t[i] = e[i]);
    }), r && Object.keys(r).forEach(function(r) {
        e[r] || (t[r] = 0);
    }), t;
}, exports.computeItemCount = function(e) {
    var t = {};
    return e && "object" == r(e) && Object.keys(e).forEach(function(r) {
        e[r].forEach(function(e) {
            e.canWeight || e.weight ? t[+e.spuId] = e.weight : t[e.spuId] ? t[+e.spuId] += e.count : t[+e.spuId] = e.count;
        });
    }), t;
};

var l = function(e) {
    return this.instance || (this.instance = function(e) {
        var r, t = s.default.getDishList(e);
        if (t && Object.keys(t).length) return t;
        c.addError("获取rmsStorage菜品里的菜品数据为空");
        var i = o.default.getState();
        return t = (null == i || null == (r = i.dish) ? void 0 : r.dishList) || {};
    }(e)), this.instance;
};

exports.filterItemKeys = function(e, r) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], n = {
        cssType: i.DISH_ITEM_CSS_TYPE_VAL[e]
    };
    return (t.length ? u.concat(t) : u).forEach(function(e) {
        r && r[e] && (n[e] = r[e]);
    }), n;
}, exports.updateDishListSingleton = function(e, r) {
    new l(e);
    return r;
}, exports.GetDishListSingleton = l;