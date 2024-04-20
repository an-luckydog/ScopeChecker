var t = require("../../../b/helpers/interopRequireDefault"), e = require("../../../miniprogram_npm/@limo/container/behaviors/index"), a = require("../../../constants/bizConstants"), i = require("../../../miniprogram_npm/@components/limo-ui/ui-constant/enum"), r = t(require("../../../miniprogram_npm/seamless-immutable/index.js")), n = t(require("../../../api/rmsStorage")), s = t(require("../../../api/cartPike")), o = require("../../../modules/LXHelper"), u = require("../../../lib/imageProcess"), l = require("../../../lib/jsBridge"), c = require("../../../lib/mix/util"), h = require("../../../constants/cartConstants"), d = require("../../../lib/wx/app-info"), g = require("../../../lib/number"), E = {
    SCAN_QRCODE: a.SCAN_QRCODE_TEXT,
    REQUIRE_MUST_DISH: a.REQUIRE_MUST_DISH_TEXT,
    ORDER_DONE: a.ORDER_DONE_TEXT,
    MUST_DISH_SOUP_BASE: "下单锅底"
};

Component({
    behaviors: [ e.commonBehavior, e.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        cartToast: {
            type: Object,
            value: {}
        },
        showCartPanel: {
            type: Boolean
        },
        mustDishPanelStatus: {
            type: h.MUSTDISH_PANEL_STATUS,
            value: h.MUSTDISH_PANEL_STATUS.CLOSE
        },
        cartCount: {
            type: Number,
            value: 0
        },
        shopConfig: {
            type: Object,
            value: null
        },
        isMustDishEnough: {
            type: Boolean,
            value: !1
        },
        options: {
            type: Object,
            value: {}
        },
        tableNum: {
            type: String,
            value: ""
        },
        cartPrice: {
            type: Object,
            value: {}
        },
        discountAmount: {
            type: Number,
            value: 0
        },
        cartItemPrice: {
            type: Object,
            value: {}
        },
        cartPriceInfo: {
            type: Object,
            value: {}
        },
        cartToastInfo: {
            type: Object,
            value: {}
        },
        posOrderId: {
            type: String
        },
        hasPageError: {
            type: Boolean,
            value: !1
        },
        deliveryInfo: {
            type: Object,
            value: {}
        },
        userSelectedAddress: {
            type: Object,
            value: {}
        },
        pageFrom: {
            type: String,
            value: a.PAGE_FROM.MENU
        },
        customClass: {
            type: String,
            value: ""
        },
        hideCartBarWhenEmpty: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        cartIcon: "",
        BUTTON_TYPE: i.BUTTON_TYPE,
        UI_SIZE: i.UI_SIZE,
        BIZ_TYPE_MAP: a.BIZ_TYPE_MAP,
        cartBtnClickable: !0,
        cartBarShowState: !0
    },
    observers: {
        "options.**, isMustDishEnough,cartPriceInfo.**, deliveryInfo.**": function(t, e, a, i) {
            this.dealCartStatus(t, e, a, i);
        },
        shopConfig: function(t) {
            this.dealShopConfig(t);
        },
        cartCount: function(t) {
            var e = this;
            setTimeout(function() {
                e.setData({
                    newCartCount: t
                });
            }, 0);
        },
        "isMustDishEnough,cartCount,isShopOffline": function(t, e, a) {
            var i = this.data.hideCartBarWhenEmpty && !e && t && !a;
            this.setData({
                cartBarShowState: !i
            }), this.triggerEvent("setCartBarShowState", {
                cartBarShowState: !i
            });
        }
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var t = this.data, e = t.options, a = t.isMustDishEnough, i = t.shopConfig, r = t.cartPriceInfo, n = t.deliveryInfo;
            this.dealCartStatus(e, a, r, n), this.dealShopConfig(i);
        },
        dealCartStatus: function(t, e, i, r) {
            var n, s = this.data.pageFrom, o = !0, u = E.ORDER_DONE;
            u = (Number.isNaN(t.orderBizTag) ? 0 : +t.orderBizTag) !== a.ORDER_BIZ_TAG.AHEAD || t.tableNum ? e ? E.ORDER_DONE : E.REQUIRE_MUST_DISH : E.SCAN_QRCODE;
            var l = Number(t.bizType), c = 0, h = (null == r || null == (n = r.takeAwayDeliveryFeeRule) ? void 0 : n.deliveryFee) || 0;
            if (l === a.BIZ_TYPE_MAP.TAKEAWAY) {
                var d, p = (null == r || null == (d = r.takeAwayDeliveryFeeRule) ? void 0 : d.basicPrice) || 0, S = (null == i ? void 0 : i.actualTotalPriceTxt) || 0, _ = (null == i ? void 0 : i.cartCount) || 0;
                0 === (c = (c = _ > 0 ? (0, g.roundFloat)(p - S, 2) : p) <= 0 ? 0 : c) ? u = e ? E.ORDER_DONE : E.REQUIRE_MUST_DISH : (0 === _ || 0 === S) && p > 0 ? u = "¥".concat(c, "起送") : _ > 0 && p > 0 && c > 0 && (u = "差 ¥".concat(c, " 起送"));
            }
            l === a.BIZ_TYPE_MAP.PICKUP && (u = e ? E.ORDER_DONE : E.REQUIRE_MUST_DISH), s === a.PAGE_FROM.MUST_DISH && (u = E.MUST_DISH_SOUP_BASE, 
            o = e), this.setData({
                orderText: u,
                bizType: l,
                lackOfDeliveryMoney: c,
                deliveryFee: h,
                cartBtnClickable: o
            });
        },
        dealShopConfig: function(t) {
            var e, i, n = r.default.getIn(t, [ "cartConfig", "showTotalPrice" ]) || !1, s = r.default.getIn(t, [ "status" ]) === a.SHOP_STATUS.ONLINE, o = r.default.getIn(t, [ "status" ]) === a.SHOP_STATUS.OFFLINE, l = "https://p1.meituan.net/scarlett/4a366e35b6989fa0b7d22e4164b2e5547292.png";
            null != t && null != (e = t.cartConfig) && e.cartIcon && (l = (0, u.getOneOneImageUrl)(null == t || null == (i = t.cartConfig) ? void 0 : i.cartIcon, 90, 90)), 
            this.setData({
                cartIcon: l,
                showTotalPrice: n,
                isShopOpen: s,
                isShopOffline: o
            });
        },
        mustDishEnoughFunc: function() {
            this.triggerEvent("isMustDishEnough");
        },
        toggleCartPanel: function() {
            var t = this.data, e = t.showCartPanel, a = t.mustDishPanelStatus;
            this.data.cartCount > 0 && (e ? a === h.MUSTDISH_PANEL_STATUS.CLOSE ? this.triggerEvent("closeCart") : this.triggerEvent("toggleCartAndMustDish") : this.triggerEvent("openCart"), 
            (0, o.sendMC)("b_saaspay_67hysq0d_mc"));
        },
        check: function() {
            this.triggerEvent("check");
        },
        openCartFunc: function() {
            this.triggerEvent("openCart");
        },
        getRecommend: function() {
            this.triggerEvent("get");
        },
        addMustDish: function() {
            this.triggerEvent("addDish");
        },
        addAliPayQuery: function(t) {
            (0, d.getNewApp)().qrCode = t;
        },
        gotoOrder: function() {
            var t = this.data, e = t.cartCount, i = t.showTotalPrice, u = t.showCartPanel, h = t.lackOfDeliveryMoney;
            if (t.pageFrom === a.PAGE_FROM.MUST_DISH) return this.data.isMustDishEnough ? void this.triggerEvent("mustDishPostOrder") : void this.triggerEvent("addStableMust");
            if (!h) if (this.data.orderText === E.ORDER_DONE && ((0, o.sendMC)("b_saaspay_st445ch8_mc"), 
            (0, o.sendMC)("b_saaspay_8htasx81_mc", null, null, {
                clickData: {
                    sku_quantity: e,
                    is_show_price_cart: i ? 1 : 0,
                    is_show_cart_panel: u ? 1 : 0
                }
            })), (Number.isNaN(+this.data.options.orderBizTag) ? 0 : +this.data.options.orderBizTag) !== a.ORDER_BIZ_TAG.AHEAD || this.data.options.tableNum) this.data.isMustDishEnough ? this.data.cartCount > 0 && (s.default.close(), 
            this.check(), n.default.setFirstAddDishTime(null)) : this.triggerEvent("addStableMust"); else if (this.data.cartCount > 0) {
                var d, g = this.data.shopConfig, p = r.default.getIn(g, [ "forceRegister" ]), S = (null == (d = this.data) || null == (d = d.options) ? void 0 : d.shopId) || (0, 
                c.getMixUrlParam)("shopId") || 0, _ = n.default.getShowRegisterPanelTag(S);
                p && !_ ? (n.default.setShowRegisterPanelTag(S, !0), this.triggerEvent("toggleRegisterPanelFn")) : (n.default.setFirstEnterOrderConfirmFlag(!0), 
                (0, l.scanQRCode)("扫码失败"));
            }
        }
    }
});