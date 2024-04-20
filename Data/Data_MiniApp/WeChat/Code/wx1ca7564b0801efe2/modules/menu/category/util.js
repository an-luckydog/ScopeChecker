var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dealCategorySubTitle = exports.dealCategoryIcons = exports.dealCategoryActive = exports.computeCategoryCount = exports.computeCategoryChange = void 0;

var t = require("../../../b/helpers/objectSpread2"), r = (e(require("../../../miniprogram_npm/seamless-immutable/index.js")), 
require("../../../constants/bizConstants"));

exports.dealCategoryIcons = function(e) {
    var o, n;
    return null != e && null != (o = e.categoryMultimediaList) && o.length && e.categoryMultimediaList.forEach(function(e) {
        n = e.selected ? t(t({}, n), {}, {
            selectedUrl: e.url
        }) : t(t({}, n), {}, {
            unSelectedUrl: e.url
        });
    }), (null == e ? void 0 : e.categoryId) === r.DISH_CATEGORY_ID.MT_SPECIAL_DISCOUNT && (n = t(t({}, n), {}, {
        selectedUrl: r.MT_SPECIAL_DISCOUNT_ICON,
        unSelectedUrl: r.MT_SPECIAL_DISCOUNT_ICON
    })), (null == e ? void 0 : e.categoryId) === r.DISH_CATEGORY_ID.COUPON && (n = {
        selectedUrl: e.selectedUrl,
        unSelectedUrl: e.unSelectedUrl
    }), n;
}, exports.dealCategoryActive = function(e, t) {
    return 0 === t.length && t.push(e), t.some(function(t) {
        return e === t;
    });
};

var o = function(e, t) {
    if (t.iconType !== r.DISH_CATEGORY_ICON_TYPE.NONE) return 0;
    if (t.categoryId === r.PLUGIN_CATEGORY) return 0;
    var o, n = 0;
    return null != t && t.childDishCategories && t.childDishCategories.length > 0 ? t.childDishCategories.forEach(function(t) {
        t.spuIds && t.spuIds.map(function(t) {
            var r = e[t];
            return r && r.map(function(e) {
                n += e.count;
            }), null;
        });
    }) : null == t || null == (o = t.spuIds) || o.forEach(function(t) {
        var r = e[t];
        r && r.forEach(function(e) {
            n += e.count;
        });
    }), n;
};

exports.dealCategorySubTitle = function(e, t) {
    return e === r.DISH_CATEGORY_ID.DISCOUNT ? r.OVER_PRICE_TITLE : e !== r.DISH_CATEGORY_ID.MEMBER || t ? "" : r.MEMBER_TITLE;
}, exports.computeCategoryChange = function(e, t) {
    var r, n = {};
    return t ? (e && null != (r = Object.keys(e)) && r.length ? t.forEach(function(t, r) {
        var c = o(e, t);
        t.count !== c && (n["categoriesList[".concat(r, "].count")] = c, null != t && t.childDishCategories && t.childDishCategories.length > 0 && t.childDishCategories.forEach(function(t, c) {
            var i = o(e, t);
            t.count !== i && (n["categoriesList[".concat(r, "].childDishCategories[").concat(c, "].count")] = i);
        }));
    }) : t.forEach(function(e, t) {
        e.count && (n["categoriesList[".concat(t, "].count")] = 0, null != e && e.childDishCategories && e.childDishCategories.length > 0 && e.childDishCategories.forEach(function(e, r) {
            e.count && (n["categoriesList[".concat(t, "].childDishCategories[").concat(r, "].count")] = 0);
        }));
    }), n) : n;
}, exports.computeCategoryCount = o;