var e = require("../../../b/helpers/interopRequireDefault"), t = e(require("../../../b/regenerator")), i = require("../../../b/helpers/asyncToGenerator"), a = require("../../../b/helpers/objectSpread2"), r = require("../../../b/helpers/defineProperty"), o = e(require("../../../miniprogram_npm/@limo/core/index.js")), n = require("../../../miniprogram_npm/@limo/container/behaviors/index"), s = require("../../../constants/bizConstants"), l = require("../../../constants/lxConstants"), u = require("../../../modules/LXHelper"), d = require("../../../modules/menu/dish/expose"), c = require("../../../constants/menu"), h = require("../../../modules/menu/dish/util"), p = require("../../../ui/lib/util"), g = require("../../../modules/menu/category/util"), I = e(require("../../../miniprogram_npm/seamless-immutable/index.js")), y = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), m = require("../../../modules/collocation/collocation"), f = require("../../../types/panel/dishDetail/DealCollocationDataParams.d.js"), _ = e(require("../../../api/rmsStorage")), D = e(require("../../../store/menu")), v = require("../../../modules/menu/dish/PropertyUtil"), C = require("../../../modules/menu/dish/DishDataTransfer"), T = e(require("../../../store/helpers/storeBehavior")), L = require("../../../miniprogram_npm/@components/limo-common/common-operation/constants"), S = require("../../../modules/menu/scrollAnimation/index");

Component({
    behaviors: [ T.default, n.commonBehavior, n.limoShim ],
    properties: {
        reachBoundary: {
            type: String,
            value: ""
        },
        firstScreenCollectEnd: {
            type: Boolean,
            value: !1
        },
        allDishList: {
            type: Array,
            value: []
        },
        finishSetDishList: {
            type: Boolean
        },
        pageTitle: {
            type: String,
            value: "欢迎点餐"
        },
        userInfo: {
            type: Object,
            value: {}
        },
        memberInfo: {
            type: Object,
            value: {}
        },
        pageOptions: {
            type: Object,
            value: {}
        },
        navigationBarTitle: {
            type: String,
            value: ""
        },
        menuType: {
            type: Number,
            value: 0
        },
        mpUserInfo: {
            type: Object,
            value: {}
        },
        spuMatchRecommendPages: {
            type: Object,
            value: {}
        },
        dealCoupons: {
            type: Array,
            value: []
        },
        horizontal: {
            type: Boolean,
            value: !1
        },
        categoriesList: {
            type: Array,
            value: [],
            observer: function(e) {
                this.initCurCategoryIds(e);
            }
        },
        cartDishList: {
            type: Object,
            value: {}
        },
        column: {
            type: Number
        },
        dishShowType: {
            type: String,
            value: c.DISH_ITEM_TYPE_VAL.DEFAULT,
            observer: function(e) {
                if (e) {
                    var t = this.getItemSize(e) || {};
                    this.setData({
                        colloCationDishItem: "collocation-dish-item-" + e,
                        dishRowCount: c.DISH_ITEM_ROW_NUMBER[e] || 1,
                        dishBackground: "background-image:url(".concat(c.DISH_ITEM_DEFAULT_IMG[e], ");background-size:").concat(t.w, "rpx ").concat(t.h, "rpx"),
                        supportSpreadType: e === c.DISH_ITEM_TYPE_VAL.DEFAULT || e === c.DISH_ITEM_TYPE_VAL.RIGHT_LARGE
                    });
                }
            }
        },
        categoryHasIcon: {
            type: Boolean,
            value: !1
        },
        hasTabBar: {
            type: Boolean,
            value: !1
        },
        winWidth: {
            type: Number,
            value: 0
        },
        collocationListDishMap: {
            type: Object,
            value: {}
        },
        menuUpdateTime: {
            type: Number,
            value: 0
        },
        categoryStickyTop: {
            type: Number,
            value: S.FIXED_HEAD_POSITION_MP
        },
        showCouponPackage: {
            type: Boolean,
            value: !1
        },
        payCouponDecoInfo: {
            type: Object,
            value: {}
        },
        shopMarketings: {
            type: Array,
            value: []
        },
        couponAssistantStyle: {
            type: Object,
            value: {},
            observer: function(e, t) {
                !e || t && e.position === t.position || e && "category" === e.position && (0, u.sendMV)("b_eco_fybgtj10_mv");
            }
        },
        coupons: {
            type: Array,
            value: []
        }
    },
    data: {
        curCategoryIds: [ -1, -1 ],
        showSection: [ [ !0 ] ],
        DISH_ITEM_TYPE_VAL: c.DISH_ITEM_TYPE_VAL,
        DISH_CATEGORY_ID: s.DISH_CATEGORY_ID,
        categorySticky: !1,
        collocationListDishMap: {},
        showCollocationModuleList: [],
        showMoreCategory: !1,
        reportParams: {
            firstScreenSpuIds: []
        },
        supportSpreadType: !1,
        PLUGIN_CATEGORY: s.PLUGIN_CATEGORY,
        emptyCartTag: !1
    },
    created: function() {
        this.store = D.default, this.listItemContainer = null, this.categoryDishContainer = null;
    },
    attached: function() {
        this.limoAttached();
    },
    detached: function() {
        this.preCartCountMap = {}, this.curCartCountMap = {}, this.preCartPointCountMap = {};
    },
    observers: {
        reachBoundary: function(e) {
            this.calculateCurCategoryIds(e) && this.setData(this.calculateCurCategoryIds(e));
        },
        cartDishList: function(e) {
            if (e && 0 !== Object.keys(e).length) {
                if (e) {
                    this.setData({
                        emptyCartTag: !1
                    }), this.curCartCountMap = (0, h.computeItemCount)(e);
                    var t = (0, h.getChangedMaps)(this.curCartCountMap, this.preCartCountMap);
                    this.changeDishes(t, e), this.changeCategoryList(e), this.preCartCountMap = this.curCartCountMap;
                }
            } else this.preCartCountMap = {}, this.curCartCountMap = {}, this.setData({
                emptyCartTag: !0
            }), this.changeDishes(), this.changeCategoryList();
        },
        finishSetDishList: function(e) {
            var t = this;
            if (e) {
                var i = y.default.MPInfo.getSystemInfo().windowHeight || 812, a = this.data.categoryStickyTop || 143, n = i - a - 48 - 150 + 0;
                this.listItemContainer = o.default.getLimoRuntime().createIntersectionObserver(this, {
                    observeAll: !0
                }), this.listItemContainer.relativeToViewport({
                    top: -(a + 48),
                    bottom: -n
                }).observe(".menu-list-item", function(e) {
                    t.dishScrollTimer && clearTimeout(t.dishScrollTimer), t.dishScrollTimer = setTimeout(function() {
                        if (e.intersectionRatio > 0) {
                            var i = e.dataset, a = i.categoryid, r = i.parentid, o = t.data.curCategoryIds, n = r || a;
                            n === o[0] ? o[1] !== a && t.setData({
                                "curCategoryIds[1]": a
                            }) : t.setData({
                                curCategoryIds: [ n, a ]
                            });
                        }
                    });
                }), this.categoryItemContainer = o.default.getLimoRuntime().createIntersectionObserver(this, {
                    observeAll: !0
                }), this.categoryItemContainer.relativeToViewport({
                    top: 2 * i,
                    bottom: 2 * i
                }).observe(".dish-slice", function(e) {
                    var i = e.intersectionRatio, a = e.dataset, o = a.categoryindex, n = a.vindex, s = void 0 === n ? 0 : n;
                    t.setData(r({}, "showSection[".concat(o, "][").concat(s, "]"), 0 !== i));
                });
            }
        }
    },
    methods: {
        limoAttached: function() {
            (0, u.sendMV)("b_eco_aolar5n6_mv");
        },
        limoReady: function() {
            this.helpersStoreBehavior_limoReady();
        },
        mapToState: function(e) {
            return {
                couponCount: I.default.getIn(e, [ "coupon", "couponExtra", "totalCouponNum" ]),
                couponList: I.default.getIn(e, [ "coupon", "couponList" ]),
                refactorLocalCart: I.default.getIn(e, [ "cart", "refactorLocalCart" ]) || (0, I.default)([])
            };
        },
        getItemSize: function(e) {
            switch (e) {
              case c.DISH_ITEM_TYPE_VAL.LARGE:
                return {
                    w: 340,
                    h: 464
                };

              case c.DISH_ITEM_TYPE_VAL.SUPER_LARGE:
                return {
                    w: 690,
                    h: 558
                };

              case c.DISH_ITEM_TYPE_VAL.SMALL:
                return {
                    w: 229,
                    h: 372
                };

              case c.DISH_ITEM_TYPE_VAL.ORDERED:
                return {
                    w: 550,
                    h: 100
                };

              case c.DISH_ITEM_TYPE_VAL.DEFAULT:
                return {
                    w: 580,
                    h: 250
                };

              case c.DISH_ITEM_TYPE_VAL.RIGHT_LARGE:
                return {
                    w: 580,
                    h: 528
                };

              default:
                return {
                    w: 580,
                    h: 250
                };
            }
        },
        initCurCategoryIds: function(e) {
            if (Array.isArray(e) && e.length) {
                var t, i, a = e[0];
                t = a.categoryId, i = a.childDishCategories && a.childDishCategories.length ? a.childDishCategories[0].categoryId : e[0], 
                this.setData({
                    curCategoryIds: [ t, i ]
                });
            }
        },
        changeCategoryList: function(e) {
            var t = this.data.categoriesList, i = (0, g.computeCategoryChange)(e, t);
            this.setData(i);
        },
        changeDishes: function(e, t) {
            for (var i = this, a = {}, o = 0; o < this.properties.allDishList.length; o++) if (this.properties.allDishList[o] && this.properties.allDishList[o].dishInfo) for (var n = 0; n < this.properties.allDishList[o].dishInfo.length && this.properties.allDishList[o].dishInfo[n]; n++) for (var s = function(s) {
                var l = i.properties.allDishList[o].dishInfo[n].content[s];
                if (!l) return "break";
                var d = "allDishList[".concat(o, "].dishInfo[").concat(n, "].content[").concat(s, "].operationData"), c = void 0 !== (null == (u = l.operationData) ? void 0 : u.weight) ? "changedWeight" : "changedCount";
                if (e) Object.keys(e).forEach(function(i) {
                    var o;
                    i === l.id && (a[d] = (0, p.translateOperationType)((r(o = {
                        element: l
                    }, c, e[i]), r(o, "cartDishMap", t), o)));
                }); else {
                    var h, g = l.operationData || {}, I = g.count, y = void 0 === I ? 0 : I, m = g.weight;
                    (y > 0 || (void 0 === m ? 0 : m) > 0) && (a[d] = (0, p.translateOperationType)((r(h = {
                        element: l
                    }, c, 0), r(h, "cartDishMap", t), h)));
                }
            }, l = 0; l < this.properties.allDishList[o].dishInfo[n].content.length; l++) {
                var u;
                if ("break" === s(l)) break;
            }
            this.setData(a);
        },
        openDetail: function(e) {
            var t, i = e.detail.dish;
            this.triggerEvent("openDishDetail", {
                dish: i,
                isFirstScreen: (null == (t = this.data.reportParams) || null == (t = t.firstScreenSpuIds) ? void 0 : t.indexOf(i.spuId || i.id)) > -1 ? 1 : 0
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        getDishPositionInfos: function(e) {
            for (var t = e.currentTarget.dataset, i = t.dishdata, a = void 0 === i ? {} : i, r = t.categoryindex, o = t.tindex, n = void 0 === o ? 0 : o, s = t.vindex, l = void 0 === s ? 0 : s, u = 0, d = 0; d < r; d++) this.properties.allDishList && this.properties.allDishList[d].dishCount && (u += this.properties.allDishList[d].dishCount);
            var c = _.default.getSliceStep();
            return u = u + c * l + n, {
                dishRowIndex: (c * l + n) % this.data.dishRowCount,
                categoryId: a.parentId || a.categoryId,
                childCategoryId: a.categoryId,
                spuId: a.id,
                categoryDishIndex: u,
                categoryindex: r,
                tindex: n,
                vindex: l
            };
        },
        operateDish: function(e) {
            var t = this.getDishPositionInfos(e), i = e.detail, r = i.type, o = void 0 === r ? "" : r, n = i.id;
            "plus" === o && this.handleCollocationDishModule(t), this.triggerEvent("operateDish", a({}, e.detail), {
                bubbles: !0,
                composed: !0
            }), this.sendDishMC({
                id: n,
                type: o
            });
        },
        getElInfo: function(e, t, i) {
            var a = null;
            if (null != e && e.length) {
                var r = e.filter(function(e) {
                    return e && e.id === t;
                });
                if (r.length) {
                    var o = r.find(function(e) {
                        return void 0 !== e[i];
                    });
                    a = o ? o[i] : null;
                }
            }
            return a;
        },
        switchCategoryTab: function(e) {
            var r = this;
            return i(t.default.mark(function i() {
                var o, n, s, l, u, d, c, h;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        o = e.detail, (n = (o || {}).categoryId) && (s = r.properties.allDishList.reduce(function(e, t) {
                            return e.concat(t);
                        }, []), (l = s ? s.findIndex(function(e) {
                            return e.categoryId === n;
                        }) : -1) > -1 && (u = {
                            showMoreCategory: !1
                        }, r.triggerEvent("switchCategory", n), d = r.data.curCategoryIds, n === d[0] ? d[1] !== n && (u = a(a({}, u), {}, {
                            "curCategoryIds[1]": n
                        })) : (h = (null == (c = s[l]) ? void 0 : c.parentId) || n, u = a(a({}, u), {}, {
                            curCategoryIds: [ h, n ]
                        })), r.setData(u)));

                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, i);
            }))();
        },
        exposeDish: function(e) {
            var t, i = e.currentTarget.dataset, r = this.getDishItemFromRecycleList({
                key: null == i ? void 0 : i.key
            }) || {}, o = r.dish, n = r.__reportConfig__;
            if (this.properties.firstScreenCollectEnd || this.setData({
                "reportParams.firstScreenSpuIds": ((null == (t = this.data.reportParams) ? void 0 : t.firstScreenSpuIds) || []).concat(null == o ? void 0 : o.id)
            }), o) {
                var h, p = Number((null == o ? void 0 : o.operationData.type) === c.DISH_OPERATION_TYPE_VAL.TEXT);
                (0, u.sendMV)("b_saaspay_hlznku1a_mv", null, null, {
                    tab_id: o.categoryId,
                    dishes_id: o.spuId,
                    dishes_name: o.name,
                    dishes_price: Number(o.currentPrice),
                    dishes_index: null == n ? void 0 : n.index,
                    dishes_status: p
                }), o.operationData.panelType === c.PANEL_TYPE_VAL.SPEC && (0, u.sendMV)("b_saaspay_fs50iy1u_mv", null, null, {
                    tab_id: o.categoryId,
                    dishes_id: o.spuId,
                    dishes_name: o.name,
                    dishes_price: Number(o.currentPrice),
                    dishes_index: null == n ? void 0 : n.index,
                    dishes_status: p
                }), (0, d.appendExposeDishItem)(d.EXPOSE_DISH_TYPE.DISHLIST, a({
                    item: o
                }, n)), (0, d.exposeDishItemNew)({
                    op_type: l.OP_TYPE.RECOMMEND_CLASS,
                    op_name: o && o.categoryId < 0 ? l.OP_NAME.RECOMMEND_DISH : l.OP_NAME.RECOMMEND_CLASS,
                    sn: null == n ? void 0 : n.index,
                    dish_details_func_area: s.DISH_DETAIL.MAIN_DISH,
                    algorithm: "",
                    show_title: null == n || null == (h = n.belongCategory) ? void 0 : h.parentName,
                    sku_id_list: null == n ? void 0 : n.skuId,
                    spu_id_list: o.spuId || (null == n ? void 0 : n.spuId),
                    dish_name_list: o.spuName || (null == n ? void 0 : n.spuName),
                    dish_type: o.dishType || (null == n ? void 0 : n.dishType)
                });
            }
        },
        dealPanelData: function(e) {
            var t = this.getDishPositionInfos(e);
            this.handleCollocationDishModule(t);
            var i = (this.getDishItemFromRecycleList({
                id: e.detail.operationData.id
            }) || {}).__reportConfig__;
            this.triggerEvent("operationPanelFn", a(a({}, e.detail), {}, {
                exposeDishType: d.EXPOSE_DISH_TYPE.DISHLIST,
                menuReportConfig: i
            }), {
                bubbles: !0,
                composed: !0
            }), this.sendDishMC({
                id: e.detail.operationData.id,
                type: e.detail.operationData.type,
                panelType: e.detail.operationData.panelType
            });
        },
        sendDishMC: function(e) {
            var t, i = e.id, r = e.type, o = e.panelType, n = this.getDishItemFromRecycleList({
                id: i
            }) || {}, s = n.dish, l = n.__reportConfig__;
            if ((0, u.sendMC)(L.OPERATION_BID.MENU[r.toUpperCase()], null, null, {
                clickData: a(a({}, l), {}, {
                    t: Date.now(),
                    isFirstScreen: (null == (t = this.data.reportParams) || null == (t = t.firstScreenSpuIds) ? void 0 : t.indexOf(i)) > -1 ? 1 : 0
                })
            }), o === c.PANEL_TYPE_VAL.SPEC) {
                var d = Number((null == s ? void 0 : s.operationData.type) === c.DISH_OPERATION_TYPE_VAL.TEXT);
                (0, u.sendMC)("b_saaspay_fs50iy1u_mc", null, null, {
                    tab_id: l.categoryId,
                    tab_name: l.categoryName,
                    dishes_id: i,
                    dishes_index: l.index,
                    dish_name: s.spuName,
                    dishes_price: Number(s.currentPrice),
                    dishes_status: d
                });
            }
        },
        getDishItemFromRecycleList: function(e) {
            var t = this, i = e.key, a = e.id, r = this.properties.allDishList.reduce(function(e, t) {
                return e.concat(t);
            }, []), o = {};
            return r.find(function(e, r) {
                var n, s;
                return e && e.key === i || a && e.id === a ? (o.dish = e, o.__reportConfig__ = (0, 
                v.dealReportConfig)({
                    itemDetail: e,
                    skuId: null != e && e.skuMenuItems ? null == e || null == (n = e.skuMenuItems[0]) ? void 0 : n.skuId : 0,
                    index: r,
                    dishType: t.data.dishShowType,
                    isLogin: !(null == (s = t.data.memberInfo) || !s.cardId),
                    parentName: e.parentName,
                    categoryName: e.categoryName,
                    parentIndex: r,
                    categoryId: e.categoryId
                }), o) : e && e.dishInfo && e.dishInfo.length ? !!e.dishInfo.find(function(n) {
                    var s;
                    return !(null == n || null == (s = n.content) || !s.find(function(n, s) {
                        var l, u;
                        return ((null == n ? void 0 : n.key) === i || a && (null == n ? void 0 : n.id) === a) && (o.dish = n, 
                        o.__reportConfig__ = (0, v.dealReportConfig)({
                            itemDetail: n,
                            skuId: null != n && n.skuMenuItems ? null == n || null == (l = n.skuMenuItems[0]) ? void 0 : l.skuId : 0,
                            index: s,
                            dishType: t.data.menuType,
                            isLogin: !(null == (u = t.data.memberInfo) || !u.cardId),
                            parentName: e.parentName,
                            categoryName: e.categoryName,
                            parentIndex: r,
                            categoryId: e.categoryId
                        })), !!o.dish;
                    }));
                }) : !!o.dish;
            }), o;
        },
        calculateCurCategoryIds: function(e) {
            if (e && this.properties.allDishList && this.properties.allDishList.length) {
                var t = {}, i = this.data.curCategoryIds, a = this.properties.allDishList.filter(function(e) {
                    return !(!e || !e.dishInfo);
                }), r = "top" === e ? 0 : a.length - 1, o = a[r].dishInfo;
                if (!o[0] || !o[0].content || !o[0].content.length) return [ a[r].categoryId, a[r].categoryId ];
                var n = o[0].content[0], s = n.parentId, l = n.categoryId, u = s || l;
                return u === i[0] ? i[1] !== l && (t["curCategoryIds[1]"] = l) : t.curCategoryIds = [ u, l ], 
                t;
            }
            return null;
        },
        handleCollocationDishModule: function(e) {
            var a = this;
            return i(t.default.mark(function i() {
                var o, n, s, l, u, d, c, h, p, g, I, y, D, v, C, T, L, S, b, E, M, A;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (o = a.data, n = o.collocationListDishMap, s = void 0 === n ? {} : n, l = o.refactorLocalCart, 
                        u = o.dishShowType, d = o.spuMatchRecommendPages, c = o.pageOptions, h = (c || {}).shopId, 
                        !((p = _.default.getDishList(h, !1)) && d && Object.keys(e).length > 0)) {
                            t.next = 18;
                            break;
                        }
                        if (g = e.categoryId, I = e.childCategoryId, y = e.spuId, D = e.dishRowIndex, v = e.categoryDishIndex, 
                        C = e.categoryindex, T = e.tindex, L = e.vindex, !(0, m.judgeCollocationModule)(f.COLLOCATION_FROM.DISH_LIST, d, s, g)) {
                            t.next = 18;
                            break;
                        }
                        return b = {}, t.prev = 5, t.next = 8, (0, m.getCollocationData)(y, l, f.COLLOCATION_FROM.DISH_LIST);

                      case 8:
                        b = t.sent, t.next = 13;
                        break;

                      case 11:
                        t.prev = 11, t.t0 = t.catch(5);

                      case 13:
                        if (E = (0, m.getMenuListCollocationRenderData)({
                            collocationResData: b,
                            categoryId: g,
                            childCategoryId: I,
                            spuId: y,
                            dishRowIndex: D,
                            dishList: p,
                            dishShowType: u,
                            categoryDishIndex: v
                        })) {
                            t.next = 16;
                            break;
                        }
                        return t.abrupt("return");

                      case 16:
                        null != (M = E[g] && E[g][I]) && null != (S = M.list) && S.length && (s[e.categoryId] = E[e.categoryId], 
                        A = "allDishList[".concat(C, "].dishInfo[").concat(L, "].content[").concat(T, "].showRelationDishes"), 
                        a.setData(r({
                            collocationListDishMap: s
                        }, A, !0)));

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, i, null, [ [ 5, 11 ] ]);
            }))();
        },
        showMoreCategory: function(e) {
            var t = e.detail.showMoreCategory;
            this.setData({
                showMoreCategory: t
            });
        },
        changeSpreadFn: function(e) {
            var t = e.detail.categoryId, i = (0, C.getSetObj)(this.properties.allDishList, t, this.data.dishShowType);
            this.setData(i);
        },
        showDishTimeInfoModalFn: function(e) {
            this.triggerEvent("showDishTimeInfoModalFn", {
                spuId: e.detail.spuId
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        onCouponAssistantCheckMore: function() {
            (0, u.sendMC)("b_eco_k6t9qwlq_mc"), this.triggerEvent("onCouponAssistantCheckMore");
        },
        onUseCoupon: function(e) {
            var t = e.detail;
            this.triggerEvent("useCoupon", t);
        }
    },
    ready: function() {
        this.limoReady();
    }
});