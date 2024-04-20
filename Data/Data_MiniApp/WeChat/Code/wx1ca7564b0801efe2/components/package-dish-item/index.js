var e = require("../../b/helpers/interopRequireDefault"), i = e(require("../../b/regenerator")), t = require("../../b/helpers/objectSpread2"), a = require("../../b/helpers/asyncToGenerator"), o = e(require("../../miniprogram_npm/@limo/core/index.js")), s = require("../../miniprogram_npm/@limo/container/behaviors/index"), u = e(require("../../commons/component")), r = require("../../commons/constants");

(0, u.default)({
    behaviors: [ s.commonBehavior, s.limoShim ],
    options: {},
    properties: {
        comboRuleMap: {
            type: Object,
            value: {}
        },
        groupData: {
            type: Object,
            value: {}
        },
        dish: {
            type: Object,
            value: {}
        },
        stockCount: {
            type: Number,
            value: -1
        },
        includeMethodPrice: {
            type: Boolean,
            value: !1
        },
        includeTastePrice: {
            type: Boolean,
            value: !1
        },
        sudokuType: {
            type: Number,
            value: 1
        }
    },
    lifetimes: {
        attached: function() {
            var e = this.properties, i = e.sudokuType, t = e.groupData, a = e.dish;
            this.sudokuSwitch(i, t.groupChoiceType, a.dishType, t.groupType);
        }
    },
    data: {
        DISH_TYPE: r.DISH_TYPE,
        GROUP_CHOICE_TYPE: r.GROUP_CHOICE_TYPE,
        DISH_STATUS: r.DISH_STATUS,
        SOLD_OUT_TEXT: r.SOLD_OUT_TEXT,
        NOT_CAN_SALE: r.NOT_CAN_SALE,
        GROUP_TYPE: r.GROUP_TYPE,
        pkgClassName: ""
    },
    methods: {
        checkRadio: function() {
            this.data.dish.selectedNum > 0 ? this.minusDishFromPackage() : this.addDishToPackage();
        },
        addDishToPackage: function() {
            var e = arguments, s = this;
            return a(i.default.mark(function a() {
                var u, n, c, d, l, h, p, m, P, T;
                return i.default.wrap(function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        if (u = e.length > 0 && void 0 !== e[0] ? e[0] : r.SUB_DISH_ADD_TYPE.ADD, n = s.data, 
                        c = n.dish, d = n.groupData, l = n.stockCount, h = n.comboRuleMap, p = d.groupId, 
                        m = d.groupLimit, P = (d.groupSkus || []).flatMap(function(e) {
                            return e.skuDishList;
                        }), u === r.SUB_DISH_ADD_TYPE.ADD && (P = P.concat(t(t({}, c), {}, {
                            count: 1
                        }))), !(m > 1) || s.entity.get(r.TYPES.RULE).checkPackageGroups({
                            comboRuleMap: h
                        }, [ {
                            groupId: p,
                            items: P
                        } ], 0)) {
                            i.next = 5;
                            break;
                        }
                        return i.abrupt("return");

                      case 5:
                        T = l > 0 ? l : 1 / 0, c.selectedNum >= T ? o.default.getLimoRuntime().showToast({
                            title: "库存不足，请选择其他加料~",
                            icon: "none"
                        }) : c.dishType !== r.DISH_TYPE.COMPLEX_SPU ? s.triggerEvent("addToPackage", c) : s.addPanelSku(u);

                      case 7:
                      case "end":
                        return i.stop();
                    }
                }, a);
            }))();
        },
        minusDishFromPackage: function() {
            var e, i, t = this.data, a = t.dish, o = t.groupData.groupChoiceType, s = a.dishType, u = a.selectedNum;
            if (s === r.DISH_TYPE.COMPLEX_SPU && o === r.GROUP_CHOICE_TYPE.REPEATABLE && u > 1 && (null == a || null == (e = a.skuDishList) ? void 0 : e.length) > 1) this.clickSpecInfoFn(); else {
                var n = null;
                1 === (null == a || null == (i = a.skuDishList) ? void 0 : i.length) && (n = a.skuDishList[0]), 
                this.triggerEvent("minusFromPackage", {
                    dish: a,
                    skuItem: n
                });
            }
        },
        dishHandleFn: function(e) {
            var i = e.detail.operation;
            "plus" === i ? this.addDishToPackage() : "minus" === i && this.minusDishFromPackage();
        },
        addPanelSku: function(e) {
            var i = this.data, t = i.dish, a = i.groupData, o = i.includeMethodPrice, s = i.includeTastePrice, u = t.spuId, n = t.skuId, c = t.skuDishList, d = null == a ? void 0 : a.groupId;
            this.entity.get(r.TYPES.LIMO).limoShowDialog("add-multi-panel", {
                spuId: u,
                autoScroll: !0,
                cartDishInfo: e && c[0] || {},
                addType: r.SPEC_ADD_TYPE.PACKAGE,
                callbackInfo: {
                    groupId: d,
                    type: e
                },
                extraParams: {
                    focusSkuId: n,
                    includeMethodPrice: o,
                    hasRecommendMatch: 1,
                    includeTastePrice: s,
                    disableCache: !0
                }
            }, {
                position: "bottom",
                maskClosable: !0
            });
        },
        clickSpecInfoFn: function() {
            var e = this.data.dish;
            e.selectedNum > 1 ? this.entity.get(r.TYPES.LIMO).limoShowDialog("desc-operate-panel", {
                dishInfo: e
            }, {
                position: "bottom",
                maskClosable: !0,
                header: {
                    closeable: !0
                }
            }) : this.addDishToPackage(r.SUB_DISH_ADD_TYPE.REPLACE);
        },
        sudokuSwitch: function(e, i, t, a) {
            var o = "", s = 2 === e;
            s && t === r.DISH_TYPE.COMPLEX_SPU && a === r.GROUP_TYPE.FIXED ? o = "dish-item-sudoku-radio fixation" : s && 1 === i ? o = "dish-item-sudoku-radio" : s && 2 === i && (o = "dish-item-sudoku-multi"), 
            this.setData({
                pkgClassName: o
            });
        },
        clickCard: function() {
            var e = this.data.groupData || {}, i = e.groupType;
            e.groupChoiceType !== r.GROUP_CHOICE_TYPE.REPEATABLE && i === r.GROUP_TYPE.OPTIONAL && this.checkRadio();
        }
    }
});