var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.GetDishSdkSingleton = exports.DishSdk = void 0;

var t, i = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), r = require("./DishDataTransfer"), s = require("../../../constants/menu"), n = require("../../../constants/bizConstants"), a = e(require("../../../api/rmsStorage")), u = require("./util"), d = require("../../../lib/mix/util"), o = {
    shopId: 0,
    spuDetail: null,
    type: s.DISH_ITEM_TYPE_VAL.DEFAULT,
    categoryId: 0,
    itemIndex: -1,
    init: function(e) {
        return this.setDishCategoryInfo(e), this.shopId = e.shopId, this.spuDetail = new u.GetDishListSingleton(e.shopId), 
        this;
    },
    setDishCategoryInfo: function(e) {
        var t;
        this.type = e.type || s.DISH_ITEM_TYPE_VAL.DEFAULT, this.itemIndex = (t = e.itemIndex) + "" == "0" || t && /^([1-9]\d+|[1-9])$/.test(t) ? Number(e.itemIndex) : -1, 
        this.categoryId = e.categoryId || 0;
    },
    setDishList: function(e, t) {
        e && (this.shopId = e), t && (a.default.setDishList(e, t), this.spuDetail = t, (0, 
        u.updateDishListSingleton)(e, t));
    },
    getDishList: function() {
        return this.spuDetail;
    },
    findOriginalSpuDetail: function(e) {
        var t = this.spuDetail;
        if (t && Object.keys(t).length && e) return t[e];
    },
    findTransferredSpuDetail: function(e) {
        var t = this.findOriginalSpuDetail(e), s = (0, r.transferItemData)({
            item: t,
            dishType: this.type,
            hotRankFromIndex: this.categoryId === n.DISH_CATEGORY_ID.HOT,
            itemIndex: this.itemIndex,
            categoryId: this.categoryId
        });
        return s ? i.default.asMutable(s, {
            deep: !0
        }) : void 0;
    },
    findOriginalSkuDetail: function(e, t) {
        var i;
        if (e && t) {
            var r = this.findOriginalSpuDetail(e);
            if (r) return null == (i = r.skuMenuItems) ? void 0 : i.find(function(e) {
                return e.skuId === t;
            });
        }
    },
    findTransferredSkuDetail: function(e, t) {
        var i = this.findOriginalSpuDetail(e), s = this.findOriginalSkuDetail(e, t);
        if (i && s) return (0, r.transferSkuData)({
            item: i,
            sku: s,
            dishType: this.type
        });
    },
    getRenderDishData: function(e, t) {
        var i = e ? this.findTransferredSpuDetail(e) : void 0;
        if (i) {
            if (t) {
                var r = this.findTransferredSkuDetail(e, t);
                return (0, u.filterItemKeys)(this.type, r, s.EXTRA_FILTER_KEYS);
            }
            return (0, u.filterItemKeys)(this.type, i, s.EXTRA_FILTER_KEYS);
        }
    }
}, h = function(e) {
    if (!t) {
        var i = (0, d.getMixUrlParam)("shopId");
        t = o.init({
            shopId: e || i || ""
        });
    }
    return t;
};

exports.GetDishSdkSingleton = h, exports.DishSdk = o;