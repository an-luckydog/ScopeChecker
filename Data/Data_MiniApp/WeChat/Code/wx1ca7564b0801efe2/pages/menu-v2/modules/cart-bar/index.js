var t = require("../../../../b/helpers/interopRequireDefault"), i = t(require("../../../../miniprogram_npm/@limo/core/index.js")), e = require("../../../../miniprogram_npm/@limo/container/behaviors/index"), a = t(require("../../../../commons/component")), n = require("../../../../commons/constants");

(0, a.default)({
    behaviors: [ e.commonBehavior, e.limoShim ],
    options: {
        multipleSlots: !0
    },
    properties: {
        cartIcon: {
            type: String,
            value: "https://p0.meituan.net/ingee/e2e1684c6d987339c45687df2fd0d57d2211.png"
        },
        cartTipBgImg: {
            type: String,
            value: ""
        },
        cartTipsBgColor: {
            type: String,
            value: ""
        },
        cartTipsStyles: {
            type: Object,
            value: {}
        },
        confirmButton: {
            type: Object,
            value: {}
        },
        actEntrance: {
            type: Object,
            value: {}
        },
        hideTips: {
            type: Boolean,
            value: !1
        },
        cartStyles: {
            type: Object,
            value: {}
        }
    },
    observers: {
        confirmButton: function(t) {
            var i = this.data.actualPrice, e = Number(i || "") < Number((t || {}).basicPrice || "");
            this.setData({
                isBtnDisabled: e
            });
        },
        "cartTipsBgColor,cartTipBgImg": function(t, i) {
            var e = [ "background-color:".concat(t || "#FFF8D9") ];
            i && e.push("background-image:url('".concat(i, "')")), this.setData({
                cartTipBg: e.join(";")
            });
        },
        cartStyles: function(t) {
            this.setData({
                cartDecorationStyles: this.getCartDecoration(t || {})
            });
        },
        "cartTips,hideTips,showTips,cartStyles.**": function(t, i, e, a) {
            this.setData({
                displayTips: (null == t ? void 0 : t.length) && !i && e && a && a.tipSwitch
            });
        }
    },
    lifetimes: {
        attached: function() {
            if (this.setData({
                tabbar: !!this.getTabBar()
            }), this.entity.isBound(n.TYPES.CART)) {
                var t = this.entity.get(n.TYPES.CART).getCartBarData(), i = t.cartTips, e = t.dishCount, a = t.actualPrice, s = t.discountPrice, o = this.data.confirmButton, r = Number(a || "") < Number((null == o ? void 0 : o.basicPrice) || "");
                this.setData({
                    cartTips: i,
                    dishCount: e,
                    actualPrice: a,
                    discountPrice: s,
                    isBtnDisabled: r
                });
            }
            this.entity.isBound(n.TYPES.CART_CHECK) && this.setData({
                btnText: this.entity.get(n.TYPES.CART_CHECK).btnText
            }), this.changeCartStyles(), this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.DISH_CHANGE, this.onDishChange, this), 
            this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.CART_CHANGE, this.onCartChange, this), 
            this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.MENU_HEAD_LOADING, this.changeCartBarLoading, this), 
            this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.OPEN_CART_LIST, this.openCart, this), 
            this.entity.get(n.TYPES.EMITTER).on(n.EVENTS.MENU_HEAD_LOADING, this.changeCartStyles, this);
        },
        detached: function() {
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.DISH_CHANGE, this.onDishChange, this), 
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.CART_CHANGE, this.onCartChange, this), 
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.MENU_HEAD_LOADING, this.changeCartBarLoading, this), 
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.OPEN_CART_LIST, this.openCart, this), 
            this.entity.get(n.TYPES.EMITTER).off(n.EVENTS.MENU_HEAD_LOADING, this.changeCartStyles, this);
        }
    },
    data: {
        showTips: !0,
        displayTips: !0,
        cartTips: [],
        dishCount: 0,
        actualPrice: "",
        discountPrice: "",
        isBtnDisabled: !1,
        tabbar: !0,
        loading: !1,
        btnText: "去结算",
        cartTipBg: "",
        btnStyleType: "",
        cartDecorationStyles: "",
        campaignDiscount: ""
    },
    methods: {
        onDishChange: function(t) {
            var i, e, a, s = t.dishCount, o = {
                dishCount: s
            };
            0 === s && (o.cartTips = []);
            var r = (null == (i = this.entity) || null == (e = (a = i.get(n.TYPES.CART_CHECK)).checkMandatoryDish) ? void 0 : e.call(a)) || this.entity.get(n.TYPES.CART_CHECK).btnText;
            r !== this.data.btnText && (o.btnText = r), this.setData(o);
        },
        onCartChange: function(t) {
            var i = t.cartTips, e = void 0 === i ? [] : i, a = t.actualPrice, n = t.discountPrice, s = t.campaignDiscount, o = void 0 === s ? "" : s, r = this.data.confirmButton, c = Number(a || "") < Number((null == r ? void 0 : r.basicPrice) || "");
            this.setData({
                cartTips: e,
                actualPrice: a,
                discountPrice: n,
                isBtnDisabled: c,
                campaignDiscount: o
            });
        },
        triggerCart: function() {
            this.data.showTips ? this.openCart() : (this.entity.get(n.TYPES.LIMO).limoCloseDialog("cart-list"), 
            this.setData({
                showTips: !0
            }));
        },
        openCart: function() {
            var t = this, i = this.data, e = i.cartTipsStyles, a = i.cartTipBg;
            this.setData({
                showTips: !1
            }), this.entity.get(n.TYPES.LIMO).limoShowDialog("cart-list", {
                cartTipsStyles: e,
                cartTipBg: a
            }, {
                position: "bottom",
                zIndex: 111,
                afterClose: function() {
                    t.setData({
                        showTips: !0
                    });
                }
            });
        },
        onSelected: function() {
            var t, e, a = this;
            null == (t = this.entity) || t.get(n.TYPES.LX).sendMC("b_saaspay_8htasx81_mc"), 
            this.entity.get(n.TYPES.CART).calculateRequest ? (i.default.getLimoRuntime().showLoading({
                title: "加载中"
            }), null == (e = this.entity.get(n.TYPES.CART).calculateRequest) || e.then(function() {
                i.default.getLimoRuntime().hideLoading(), a.goToNext();
            })) : this.goToNext();
        },
        goToNext: function() {
            var t = this, i = this.data, e = i.confirmButton;
            i.loading || (this.changeCartBarLoading(!0), this.entity.get(n.TYPES.CART_CHECK).checkCart(e, function() {
                t.changeCartBarLoading(!1);
            }));
        },
        actEntranceClick: function() {
            var t = this.data.actEntrance;
            2 === t.actType && (t.redirectUrl ? i.default.getLimoRuntime().navigateTo({
                url: t.redirectUrl
            }) : i.default.getLimoRuntime().showToast({
                title: "付费会员卡路径错误",
                icon: "none"
            }));
        },
        changeCartBarLoading: function(t) {
            this.setData({
                loading: t
            });
        },
        getCartDecoration: function(t) {
            var i = {
                "--cart-bg": t.bg || "linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, #ffffff 100%)",
                "--cart-price-color": t.priceColor || "#333",
                "--cart-sub-price-color": t.subPriceColor || "#999",
                "--cart-sub-opacity": t.subOpacity || "1"
            }, e = [];
            for (var a in i) e.push("".concat(a, ":").concat(i[a]));
            return e.join(";");
        },
        changeCartStyles: function() {
            if (this.entity.isBound(n.TYPES.CART)) {
                var t = this.data, i = t.cartIcon, e = t.cartTipBgImg, a = t.cartTipsBgColor, s = t.cartTipsStyles, o = t.confirmButton, r = t.cartStyles;
                this.entity.get(n.TYPES.CART).setCartStyle({
                    cartIcon: i,
                    cartTipBgImg: e,
                    cartTipsBgColor: a,
                    cartTipsStyles: s,
                    confirmButton: o,
                    cartStyles: r
                });
            }
        }
    }
});