var t = require("../../../b/helpers/interopRequireDefault"), e = require("../../../b/helpers/objectSpread2"), a = require("../../../miniprogram_npm/@limo/container/behaviors/index"), s = t(require("../../../miniprogram_npm/seamless-immutable/index.js")), i = require("../../../store/actions/cart"), n = require("../../../store/actions/baseCart"), o = require("../../../store/actions/add-on"), r = require("../../../store/asyncActions/cart"), u = require("../../../modules/cartBarHelper"), c = require("../../../modules/minicartHelper"), d = t(require("../../../store/menu")), l = t(require("../../../store/helpers/storeBehavior")), h = require("../../../constants/bizConstants");

Component({
    behaviors: [ l.default, a.commonBehavior, a.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        cartDishList: {
            type: Object,
            value: {}
        },
        options: {
            type: Object,
            value: {}
        },
        hasPageError: {
            type: Boolean
        },
        cartToast: {
            type: Object,
            value: {}
        },
        isShowBigBtn: {
            type: Boolean,
            value: !1
        },
        pageFrom: {
            type: String,
            value: h.PAGE_FROM.MENU
        },
        isDishDetail: {
            type: Boolean,
            value: !1
        },
        hideCartBarWhenEmpty: {
            type: Boolean,
            value: !1
        },
        hasTabBar: {
            type: Boolean,
            value: !1
        },
        isNativeTabbarPage: {
            type: Number,
            value: 0
        }
    },
    data: {
        showCartPanel: !1,
        discountAmount: 0,
        posOrderId: "",
        bottomTipsInfo: u.INITIAL_BOTTOM_TIPS_INFO,
        customClass: "",
        needBuyFreeBtn: !0,
        cartBarShowState: !1,
        tipsBannerFixedBottom: !1
    },
    observers: {
        "totalInfo.**, discountAmount, cartItemPrice.**, posOrderId, cartToastOperateDishData.**, cartToastClearDishData.**,fmpBizData.**, deliveryInfo.**,pointTotalDiscountAmount": function(t, e, a, s, i, n, o, r, c) {
            var d = (0, u.getCartPriceInfo)(t, e, a, s, c), l = (0, u.getCartToastInfo)(i, n), h = (0, 
            u.getBottomTipsInfo)(o, r);
            this.setData({
                cartPriceInfo: d,
                cartToastInfo: l,
                bottomTipsInfo: h
            });
        },
        pageFrom: function(t) {
            var e = "", a = !0;
            t === h.PAGE_FROM.MUST_DISH && (e = "must-dish-cart", a = !1), this.setData({
                customClass: e,
                needBuyFreeBtn: a
            });
        },
        "hasTabBar,cartBarShowState,isNativeTabbarPage": function(t, e, a) {
            this.setTipsBannerFixedBottom({
                hasTabBar: t,
                cartBarShowState: e,
                isNativeTabbarPage: a
            });
        }
    },
    ready: function() {
        this.limoReady();
    },
    created: function() {
        this.store = d.default;
    },
    methods: {
        limoReady: function() {
            this.helpersStoreBehavior_limoReady(), this.clearUserAvatars();
        },
        mapToState: function(t) {
            return e(e({}, (0, c.cartViewModelAdapter)(t)), {}, {
                cartItemPrice: s.default.getIn(t, [ "cart", "cartPrice", "cartItemPrice" ]) || (0, 
                s.default)({}),
                showCartPanel: s.default.getIn(t, [ "cart", "showCartPanel" ]),
                mustDishPanelStatus: s.default.getIn(t, [ "mustDish", "mustDishPanelStatus" ]),
                cartVisible: s.default.getIn(t, [ "cart", "cartVisible" ]),
                isMustDishEnough: s.default.getIn(t, [ "mustDish", "isMustDishEnough" ]),
                shopConfig: s.default.getIn(t, [ "extraInfo", "headInfo", "shopConfig" ]),
                discountAmount: s.default.getIn(t, [ "cart", "cartPrice", "discountAmount" ]),
                posOrderId: s.default.getIn(t, [ "extraInfo", "headInfo", "orderInfo", "posOrderId" ]),
                cartToast: s.default.getIn(t, [ "cartToast" ]) || (0, s.default)({}),
                cartToastOperateDishData: s.default.getIn(t, [ "cartToast", "operateDish" ]),
                cartToastClearDishData: s.default.getIn(t, [ "cartToast", "clearDish" ]),
                addOnList: s.default.getIn(t, [ "addOn", "addOnList" ]) || (0, s.default)([]),
                isShowAddOn: s.default.getIn(t, [ "addOn", "isShow" ]) || !1,
                cartDiscountData: s.default.getIn(t, [ "cart", "cartDiscountData" ]) || (0, s.default)({}),
                deliveryInfo: s.default.getIn(t, [ "takeaway", "deliveryInfo" ]),
                userSelectedAddress: s.default.getIn(t, [ "takeaway", "userSelectedAddress" ]),
                fmpBizData: s.default.getIn(t, [ "extraInfo", "headInfo", "fmpBizData" ]),
                pointTotalDiscountAmount: s.default.getIn(t, [ "cart", "cartPrice", "pointTotalDiscountAmount" ])
            });
        },
        openCartPanel: function() {
            this.store.dispatch((0, i.openCartPanel)());
        },
        closeCartPanel: function() {
            this.store.dispatch((0, i.closeCartPanel)());
        },
        closeMustDishPanel: function() {
            this.store.dispatch((0, i.closeMustDishPanel)());
        },
        toggleCartAndMustDishPanel: function() {
            this.store.dispatch((0, i.toggleCartAndMustDishPanel)());
        },
        checkDish: function() {
            this.store.dispatch((0, r.checkDish)());
        },
        addStableMustDish: function() {
            this.store.dispatch((0, r.addStableMustDish)());
        },
        toggleRegisterPanelAction: function(t) {
            this.store.dispatch((0, i.toggleRegisterPanelAction)(t));
        },
        updateCartUserInfo: function(t) {
            this.store.dispatch((0, n.updateCartUserInfo)(t));
        },
        setAddOnList: function(t, e) {
            this.store.dispatch((0, o.setAddOnList)(t, e));
        },
        setAddOnShow: function(t) {
            this.store.dispatch((0, o.setAddOnShowAction)(t));
        },
        dealPanelData: function(t) {
            this.triggerEvent("operationPanel", e({}, t.detail), {
                bubbles: !0,
                composed: !0
            });
        },
        operateDish: function(t) {
            this.triggerEvent("operateDish", e({}, t.detail), {
                bubbles: !0,
                composed: !0
            });
        },
        closeCartFunc: function() {
            this.closeCartPanel();
        },
        openCartFunc: function() {
            this.openCartPanel();
        },
        closeMustPanel: function() {
            this.closeMustDishPanel();
        },
        toggleCartAndMustDishFunc: function() {
            this.toggleCartAndMustDishPanel();
        },
        addStableMustFunc: function(t) {
            this.addStableMustDish(t.detail);
        },
        check: function(t) {
            this.checkDish(t.detail);
        },
        addMustDish: function(t) {
            this.addStableMustDish(t.detail);
        },
        tapTipsBannerButtonFunc: function(t) {
            this.triggerEvent("tapTipsBannerButton", e({}, t.detail), {
                bubbles: !0,
                composed: !0
            });
        },
        toggleRegisterPanelFunc: function() {
            this.toggleRegisterPanelAction(!0);
        },
        clearUserAvatars: function() {
            this.updateCartUserInfo((0, s.default)([]));
        },
        checkedBuyFree: function(t) {
            var e, a, s = t.detail.campaignId, i = this.data.cartDiscountData, n = null == i || null == (e = i.buyFreeSuit) ? void 0 : e.find(function(t) {
                return t.campaignId === s;
            });
            null != n && null != (a = n.additionGoods) && a.length && (this.setAddOnShow(!0), 
            this.setAddOnList(n.additionGoods, s));
        },
        gotoMustDishPostOrder: function() {
            this.triggerEvent("gotoMustDishPostOrderFun");
        },
        setCartBarShowState: function(t) {
            var e, a = null == (e = t.detail) ? void 0 : e.cartBarShowState;
            this.setData({
                cartBarShowState: a
            });
        },
        setTipsBannerFixedBottom: function(t) {
            var e = t.cartBarShowState, a = t.isNativeTabbarPage, s = t.hasTabBar;
            e || a || s ? this.setData({
                tipsBannerFixedBottom: !1
            }) : this.setData({
                tipsBannerFixedBottom: !0
            });
        }
    }
});