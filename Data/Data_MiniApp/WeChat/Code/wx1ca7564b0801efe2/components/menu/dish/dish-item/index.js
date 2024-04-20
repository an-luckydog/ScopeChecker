var t = require("../../../../b/helpers/toConsumableArray"), e = require("../../../../b/helpers/objectSpread2"), i = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), a = require("../../../../constants/menu"), s = require("../../../../modules/menu/dish/util"), r = require("../../../../modules/menu/dish/DishSdk"), n = require("../../../../lib/util"), d = require("../../../../miniprogram_npm/@components/limo-ui/ui-constant/enum");

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    options: {
        multipleSlots: !0
    },
    properties: {
        type: {
            type: String,
            value: a.DISH_ITEM_TYPE_VAL.DEFAULT
        },
        categoryId: {
            type: Number,
            value: -1
        },
        itemIndex: {
            type: Number,
            value: -1
        },
        spuId: {
            type: String
        },
        skuId: {
            type: String
        },
        dish: {
            type: Object,
            value: {}
        },
        ifPropertyRender: {
            type: Boolean,
            value: !1
        },
        menuUpdateTime: {
            type: Number,
            value: 0
        },
        shopId: {
            type: String
        },
        customClass: {
            type: String,
            value: ""
        },
        emptyCartTag: {
            type: Boolean,
            value: !0
        },
        fromComponent: {
            type: String,
            value: ""
        },
        isLogin: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        cssType: a.DISH_ITEM_CSS_TYPE_VAL.DEFAULT,
        priceSmallFont: !1,
        tagListSize: d.UI_SIZE.SMALL,
        tagListWithoutMemberPrice: [],
        tagListOnlyMemberPrice: [],
        DGFStyleType: 0,
        DGFStyles: a.DGFStyles
    },
    observers: {
        "shopId, spuId, skuId, type, menuUpdateTime": function(t, e, i) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.DISH_ITEM_TYPE_VAL.DEFAULT;
            this.initDishData(t, e, i, s);
        }
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var t = this.data, e = t.shopId, i = t.spuId, a = t.skuId, s = t.type;
            this.initDishData(e, i, a, s), this.dealDGfStyle();
        },
        initDishData: function(t, e, i, a) {
            var d;
            if (!this.data.ifPropertyRender && (t && !this.dishSdk && (this.dishSdk = r.DishSdk.init({
                shopId: t,
                type: a,
                categoryId: this.data.categoryId,
                itemIndex: this.data.itemIndex
            })), e && i ? d = this.getDish(e, i) : e && (d = this.getDish(e)), d)) {
                var o = (0, s.filterItemKeys)(this.data.type, this.data);
                (0, n.isEqual)(o, d) || this.setData(d);
            }
        },
        menuDetail: function() {
            var t, i = this.data, a = i.spuId;
            (t = i.ifPropertyRender ? e(e({}, this.data.dish), {}, {
                spuId: a
            }) : this.dishSdk.findOriginalSpuDetail(a)) && this.triggerEvent("openDishDetail", {
                dish: t
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        getDish: function(t, e) {
            var i, a, r = this.data, n = r.categoryId, d = r.itemIndex, o = r.type;
            null == (i = this.dishSdk) || i.setDishCategoryInfo({
                categoryId: n,
                itemIndex: d,
                type: o
            });
            var l = t ? null == (a = this.dishSdk) ? void 0 : a.findTransferredSpuDetail(t) : void 0;
            if (l) {
                if (e) {
                    var h, u = null == (h = this.dishSdk) ? void 0 : h.findTransferredSkuDetail(t, e);
                    return (0, s.filterItemKeys)(this.data.type, u);
                }
                return (0, s.filterItemKeys)(this.data.type, l);
            }
        },
        dealDGfStyle: function() {
            var e, i, s;
            if (null != (e = this.data.dish) && null != (e = e.sampleTagList) && e.length || null != (i = this.data.sampleTagList) && i.length) {
                var r = null != (s = this.data.fromComponent) && s.length ? a.DGFStyleTypeEnum[this.data.fromComponent] : 0, n = (this.data.ifPropertyRender ? this.data.dish.sampleTagList : this.data.sampleTagList) || [], d = [], o = (null == n ? void 0 : n.reduce(function(e, i) {
                    if (16 !== i.colorType) return [].concat(t(e || []), [ i ]);
                    d = [ i ];
                }, [])) || [];
                this.setData({
                    DGFStyleType: r,
                    tagListOnlyMemberPrice: d,
                    tagListWithoutMemberPrice: o
                });
            }
        }
    }
});