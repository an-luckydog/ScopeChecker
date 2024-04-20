var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../miniprogram_npm/@limo/container/behaviors/index"), a = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), o = require("../../../miniprogram_npm/@components/limo-ui/member-label/type"), r = require("../../../store/actions/panel"), l = e(require("../../../store/menu")), i = e(require("../../../store/helpers/storeBehavior")), n = require("../../../modules/yellowStripHelper"), s = require("../../../types/common/misc"), u = require("../../../lib/navigator");

Component({
    behaviors: [ i.default, t.commonBehavior, t.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        options: {
            type: Object,
            value: {}
        },
        showCartPanel: {
            type: Boolean,
            value: !1
        },
        needBuyFreeBtn: {
            type: Boolean,
            value: !0
        },
        isDishDetail: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        excutedText: [],
        showBuyFreeBtn: !1,
        memberLabelCustomClass: "yellow-strip-label-middle",
        memberLabelType: o.MEMBER_LABEL_TYPE.CART,
        svipCardPromotionTip: [],
        svipTextView: [],
        svipCardDetailUrlView: "",
        yellowStripClass: ""
    },
    observers: {
        "cartDiscountData.**, svipCardPromotionTip.**, posOrderId.**": function(e, t) {
            var a, o, r, l = this.data, i = l.posOrderId, u = l.memberTexts, d = !1, p = (null == e ? void 0 : e.cartTipMessages) || [], c = 0 === p.length, m = !u || u.length <= 0, h = t.length <= 0;
            if ((c && m || i) && h) this.setData({
                excutedText: []
            }); else {
                var v = null == e || null == (a = e.cartYellowText) || null == (a = a[0]) ? void 0 : a.discountText, f = null == e || null == (o = e.cartYellowText) || null == (o = o[0]) ? void 0 : o.additionGoods, T = t.length > 0 ? "with-svip-text" : "", g = t, y = [];
                p.length ? y = p : v ? (y = (0, n.convertYellowTextArrayToRichText)(v), null != f && f.length && this.data.needBuyFreeBtn && (d = !0)) : t.length && (y = t, 
                g = [ {
                    text: "立即省钱",
                    type: s.RICH_ITEM_TEXT_TYPE.NORMAL
                } ], T = "only-svip-text");
                var C = "yellow-strip-label";
                null != (r = y) && r.length || (C = "yellow-strip-label-middle"), this.data.showCartPanel && (C += " label-border-radius"), 
                this.setData({
                    excutedText: y,
                    showBuyFreeBtn: d,
                    memberLabelCustomClass: C,
                    svipTextView: g,
                    yellowStripClass: T
                });
            }
        },
        svipCardDetailUrl: function(e) {
            var t = this.data.options;
            this.setData({
                svipCardDetailUrlView: (0, u.concatUrlWithCallbackUrl)({
                    callBackUrlPageName: "menu",
                    distUrl: e,
                    callBackUrlPageQuery: t
                })
            });
        }
    },
    created: function() {
        this.store = l.default;
    },
    methods: {
        limoReady: function() {
            this.helpersStoreBehavior_limoReady();
        },
        mapToState: function(e) {
            return {
                shopPromotions: a.default.getIn(e, [ "extraInfo", "headInfo", "shopInfo", "shopPromotions" ]),
                posOrderId: a.default.getIn(e, [ "extraInfo", "headInfo", "orderInfo", "posOrderId" ]) || "",
                svipCardPromotionTip: a.default.getIn(e, [ "extraInfo", "headInfo", "memberInfo", "svipCardPromotionTip" ]) || (0, 
                a.default)([]),
                svipCardDetailUrl: a.default.getIn(e, [ "extraInfo", "headInfo", "memberInfo", "svipCardDetailUrl" ]) || "",
                cartPrice: a.default.getIn(e, [ "cart", "cartPrice" ]) || (0, a.default)({}),
                cartDiscountData: a.default.getIn(e, [ "cart", "cartDiscountData" ]) || (0, a.default)({}),
                memberTexts: a.default.getIn(e, [ "panel", "registerActivity", "richTextTag" ]) || (0, 
                a.default)([])
            };
        },
        showTakeCouponPanelAction: function(e) {
            this.store.dispatch((0, r.showTakeCouponPanelAction)(e));
        },
        checkedBuyFreeFn: function() {
            var e, t = this.data.cartDiscountData, a = null == t || null == (e = t.cartYellowText) || null == (e = e[0]) ? void 0 : e.campaignId;
            this.triggerEvent("checkedBuyFree", {
                campaignId: a
            });
        },
        collectCouponAction: function() {
            this.showTakeCouponPanelAction({
                takeCouponPanelTag: !0,
                sourceType: "cart"
            });
        }
    },
    ready: function() {
        this.limoReady();
    }
});