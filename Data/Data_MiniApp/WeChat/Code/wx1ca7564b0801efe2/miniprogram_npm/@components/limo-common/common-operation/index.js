var t = require("../../../../b/helpers/interopRequireDefault"), e = require("../../../../b/helpers/objectSpread2"), i = require("../../../@limo/container/behaviors/index"), a = require("../../../../constants/menu"), o = require("../../../../constants/lxConstants"), n = require("../biz-constants/index"), s = require("../../limo-ui/ui-constant/enum"), u = require("./constants"), r = require("../../../../modules/menu/dish/DishDataUtil"), l = t(require("../../../../lib/mix/toast")), d = t(require("../../../../lib/mix/log")), p = require("../../../../modules/LXHelper"), h = t(require("../../../../modules/menu/shop/shopService")), m = require("../../../../modules/dishHelper"), c = t(require("../../../@mtfe/rms-triangle-c/index.js"));

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        operationData: {
            type: Object,
            value: {},
            observer: function(t, e) {
                var i = !1;
                e && t && Object.keys(t).forEach(function(a) {
                    t[a] !== e[a] && (i = !0);
                }), i && this.dealData(t);
            }
        },
        mini: {
            type: Boolean,
            value: !1
        },
        isBigSize: {
            type: Boolean,
            value: !1
        },
        size: {
            type: String,
            value: s.UI_SIZE.SMALL
        },
        pageFrom: {
            type: String,
            value: u.PAGE_NAME.MENU
        },
        moduleFrom: {
            type: String,
            value: u.MODULE_NAME.DISH
        },
        lxData: {
            type: Object,
            value: {}
        },
        reportParams: {
            type: Object,
            value: {}
        },
        disableAddReport: {
            type: Boolean,
            value: !1
        },
        preventTransform: {
            type: Boolean,
            value: !1
        },
        customHandleOperationEvent: {
            type: Boolean,
            value: !1
        },
        needBase: {
            type: Boolean,
            value: !1
        },
        canClickCountNum: {
            type: Boolean,
            value: !1
        },
        customClass: {
            type: String,
            value: ""
        },
        menuUpdateTime: {
            type: Number,
            value: 0
        }
    },
    data: {
        DISH_OPERATION_TYPE_VAL: a.DISH_OPERATION_TYPE_VAL,
        UI_SIZE: s.UI_SIZE,
        showCount: 0,
        displayMinus: !1,
        miniPlusRedPoint: !1,
        disablePlus: !1,
        needHelp: !1,
        showCountStyle: !1,
        showDishOperation: !0
    },
    observers: {
        menuUpdateTime: function() {
            var t = this.data.operationData;
            t && this.dealData(t);
        }
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.dealData(this.data.operationData);
        },
        dealData: function(t) {
            if (t) {
                var i, a = h.default.getShopServiceData().fmpBizData;
                this.sameSkuAllCount = t.count;
                var o = t.count, n = !!o && o > 0 && !this.data.operationData.mini;
                this.setData(e(e({}, t), {}, {
                    showCount: o,
                    showCountStyle: (0, r.dealOperationCountStyle)(t.id || "", this.data.canClickCountNum),
                    displayMinus: n,
                    miniPlusRedPoint: !n && this.data.operationData.mini,
                    disablePlus: t.disablePlus || o === t.maxCount,
                    showDishOperation: null == (i = null == a ? void 0 : a.showDishOperation) || i
                }));
            }
        },
        operationClick: function(t) {
            var e = t.currentTarget.dataset.operation, i = this.data, a = i.operationData, o = i.pageFrom, n = i.moduleFrom, s = i.customHandleOperationEvent;
            if (e) if (s) this.triggerEvent("operationBtnClick", {
                operation: e
            }); else {
                if (null != a && a.discount && !(0, r.verifyMemberLogin)()) return;
                d.default.sendInfo({
                    name: "[wxapp][operation]",
                    content: {
                        page: o,
                        module: n,
                        method: e,
                        operationData: a
                    }
                }), "plus" === e ? this.plusEvent() : "minus" === e ? this.minusEvent() : "button" === e && this.buttonEvent();
            }
        },
        clickReport: function(t) {
            var i, s, r = (null == (i = this.data) ? void 0 : i.lxData) || {}, l = r.categoryId, d = r.spuId, h = r.id, m = r.spuName, c = r.dishType, E = r.adFrom, C = r.index, v = r.skuId, D = r.belongCategory, _ = r.fromNetRecommend, I = r.bossRecommendText, P = this.data.operationData;
            if (u.OPERATION_BID[this.data.pageFrom]) {
                (0, p.sendMC)(u.OPERATION_BID[this.data.pageFrom][t], null, null, {
                    clickData: e(e({}, this.data.lxData), {}, {
                        t: Date.now(),
                        isFirstScreen: (null == (s = this.data.reportParams) || null == (s = s.firstScreenSpuIds) ? void 0 : s.indexOf(d || h)) > -1 ? 1 : 0
                    })
                });
                var T, b = o.OP_NAME.OTHER, f = o.OP_TYPE.OTHER, O = "";
                l < 0 && (b = o.OP_NAME.RECOMMEND_DISH, O = null == D ? void 0 : D.parentName, f = o.OP_TYPE.RECOMMEND_CLASS), 
                l > 0 && (b = o.OP_NAME.RECOMMEND_CLASS, O = null == D ? void 0 : D.parentName, 
                f = o.OP_TYPE.RECOMMEND_CLASS), 1 === _ ? (f = o.OP_TYPE.RECOMMEND_DISH, b = o.OP_NAME.RECOMMEND_NET, 
                O = n.TITLE_CONTENT.NET) : 0 === _ && (f = o.OP_TYPE.RECOMMEND_DISH, b = o.OP_NAME.RECOMMEND_BOSS, 
                O = I || n.TITLE_CONTENT.BOSS), 0 === E && (f = o.OP_TYPE.BANNER), 1 === E && (f = o.OP_TYPE.AD_MODE), 
                this.data.disableAddReport || (null == P ? void 0 : P.panelType) === a.PANEL_TYPE_VAL.WEIGHT || (null == P ? void 0 : P.panelType) === a.PANEL_TYPE_VAL.SPEC || (null == P ? void 0 : P.panelType) === a.PANEL_TYPE_VAL.PACKAGE || t === u.CLICK_TYPE.MINUS || (0, 
                p.sendMC)("b_saaspay_bsz9zphw_mc", null, null, {
                    clickData: {
                        op_type: f,
                        dish_details_func_area: n.DISH_DETAIL.MAIN_DISH,
                        op_name: b,
                        algorithm: "",
                        sku_id_list: v,
                        spu_id_list: d || h,
                        show_title: O,
                        dish_name_list: m,
                        dish_type: c,
                        add_dish_quantity: "",
                        sn: C,
                        isFirstScreen: (null == (T = this.data.reportParams) || null == (T = T.firstScreenSpuIds) ? void 0 : T.indexOf(d || h)) > -1 ? 1 : 0
                    }
                });
            }
        },
        plusEvent: function() {
            var t = this.data.operationData, i = void 0 === t ? {} : t;
            if (this.clickReport(u.CLICK_TYPE.PLUS), this.data.disablePlus) this.triggerEvent("operationCount", {
                type: "plus",
                id: i.id
            }, {
                bubbles: !0,
                composed: !0,
                discount: i.discount
            }); else {
                var a = +i.incCount || 1, o = 0 == +this.data.showCount ? 1 : +this.data.showCount + a, n = !!o && 0 !== o && !this.data.mini, s = 0 === this.sameSkuAllCount ? 1 : this.sameSkuAllCount + a, d = i.maxCount;
                if (d && s > d && -1 !== d) l.default.show({
                    content: "当前库存不足"
                }); else {
                    var p = (0, r.verifyLimitCountRuleInOperation)({
                        spuDishId: i.id,
                        showCount: this.sameSkuAllCount,
                        skuDishId: i.skuId,
                        temporaryDishCount: i.temporaryDishCount,
                        promoDishLimitCount: i.promoDishLimitCount
                    }), h = p.passVerification, E = p.errorMessage, C = p.promptType;
                    h ? i.panelType ? this.triggerEvent("operationPanel", {
                        operationData: e(e({}, i), {}, {
                            count: o
                        })
                    }, {
                        bubbles: !0,
                        composed: !0
                    }) : (i.preventPlus || this.setData({
                        showCount: o,
                        displayMinus: n,
                        miniPlusRedPoint: !n && this.data.mini,
                        disablePlus: this.data.disablePlus || o === d
                    }), this.triggerEvent("operationCount", {
                        type: "plus",
                        count: o,
                        id: i.id,
                        discount: i.discount,
                        skuId: i.skuId || ""
                    }, {
                        bubbles: !0,
                        composed: !0
                    })) : "confirm" === C ? c.default.showModal({
                        title: "温馨提示",
                        content: E,
                        showCancel: !1,
                        confirmText: "我知道了",
                        confirmColor: "#fe8c00"
                    }) : l.default.show({
                        content: E,
                        duration: m.LIMIT_COUNT_MESSAGE_DURATION
                    });
                }
            }
        },
        minusEvent: function() {
            var t, i = null != (t = this.data.operationData) ? t : {};
            this.clickReport(u.CLICK_TYPE.MINUS);
            var o = i.incCount || 1, n = this.data.showCount - o, s = n < 0 ? 0 : n, r = !!s && 0 !== s && !this.data.mini;
            s < i.minCount && i.minCount > 1 ? (!i.preventMinus && s > i.mustCount && this.setData(e(e({}, i), {}, {
                showCount: 0,
                displayMinus: r,
                count: 0,
                type: a.DISH_OPERATION_TYPE_VAL.BUTTON
            })), this.triggerEvent("operationCount", {
                type: "minus",
                count: s,
                id: i.id,
                discount: i.discount,
                skuId: i.skuId || ""
            }, {
                bubbles: !0,
                composed: !0
            })) : (!i.preventMinus && s > i.mustCount && this.setData({
                showCount: Math.max(0, s),
                displayMinus: r,
                disablePlus: this.data.disablePlus || s === i.maxCount
            }), this.triggerEvent("operationCount", {
                type: "minus",
                count: s,
                id: i.id,
                discount: i.discount,
                skuId: i.skuId || ""
            }, {
                bubbles: !0,
                composed: !0
            }));
        },
        buttonEvent: function() {
            var t = this.data.operationData, i = void 0 === t ? {} : t;
            this.clickReport(u.CLICK_TYPE.BUTTON);
            var o = i.minCount;
            i.cartCount > 0 && (o = i.incCount);
            var n = !!o && 0 !== o && !this.data.mini, s = i.maxCount;
            if (s && o > s && -1 !== s) l.default.show({
                content: "当前库存不足"
            }); else if (i.panelType || this.data.preventTransform) {
                var d, p;
                this.triggerEvent("operationPanel", {
                    operationData: e(e({}, i), {}, {
                        reportConfig: e(e({}, (null == (d = this.data) ? void 0 : d.lxData) || {}), (null == (p = this.data) ? void 0 : p.reportParams) || {})
                    })
                }, {
                    bubbles: !0,
                    composed: !0
                });
            } else {
                i.id, i.minCount, i.skuId;
                var h = (0, r.verifyLimitCountRuleInOperation)({
                    spuDishId: i.id,
                    promoDishLimitCount: i.promoDishLimitCount
                }), E = h.passVerification, C = h.errorMessage, v = h.promptType;
                if (!E) return void ("confirm" === v ? c.default.showModal({
                    title: "温馨提示",
                    content: C,
                    showCancel: !1,
                    confirmText: "我知道了",
                    confirmColor: "#fe8c00"
                }) : l.default.show({
                    content: C,
                    duration: m.LIMIT_COUNT_MESSAGE_DURATION
                }));
                this.setData({
                    type: a.DISH_OPERATION_TYPE_VAL.NUMBER,
                    showCount: o,
                    displayMinus: n,
                    disablePlus: this.data.disablePlus || o === i.maxCount
                }), this.triggerEvent("operationCount", {
                    type: "plus",
                    count: o,
                    id: i.id,
                    discount: i.discount,
                    skuId: i.skuId || ""
                }, {
                    bubbles: !0,
                    composed: !0
                });
            }
        },
        showDishTimeInfoModal: function() {
            var t = this.data, e = t.id;
            t.needHelp && this.triggerEvent("showDishTimeInfoModalFn", {
                spuId: e
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        numberClick: function() {
            this.data.operationData.showMultipleInput && this.triggerEvent("operationCount", {
                type: "plus",
                showCal: !0,
                count: this.data.showCount,
                id: this.data.operationData.id,
                discount: this.data.operationData.discount,
                skuId: this.data.operationData.skuId || ""
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});