var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/objectSpread2"), i = e(require("../../../@limo/core/index.js")), n = require("../../../@limo/container/behaviors/index"), o = e(require("../../../seamless-immutable/index.js")), s = e(require("../../../../store/menu")), a = e(require("../common-behaviors/storeBehavior")), r = require("../../limo-common/biz-constants/index"), l = require("../../../../constants/lxConstants"), d = require("../../../../modules/menu/dish/expose"), u = e(require("../../../@mtfe/rms-triangle-c/index.js")), m = {
    BOSS: 1,
    NET: 2
};

Component({
    behaviors: [ a.default, n.commonBehavior, n.limoShim ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        urlParams: {
            type: Object,
            value: {}
        },
        recommendShowType: {
            type: Number,
            value: 0
        },
        recommendTabs: {
            type: Array,
            value: []
        },
        spuInfos: {
            type: Array,
            value: []
        },
        mpUserInfo: {
            type: Object
        },
        menuUpdateTime: {
            type: Number,
            value: 0
        }
    },
    data: {
        recommendData: [],
        selectedType: m.BOSS,
        isHorizontalMode: !0,
        RECOMMEND_CATEGORY: m,
        refactorCartDishMap: {},
        isLogin: !1
    },
    created: function() {
        this.store = s.default;
    },
    attached: function() {
        this.limoAttached();
    },
    observers: {
        "refactorCartDishMap.**, showDishOperation": function(e) {
            this.getRecommendData(e);
        }
    },
    methods: {
        limoAttached: function() {
            var e, t, i = this.data, n = i.recommendShowType, o = i.refactorCartDishMap, s = this.getRecommendData(o);
            if ((null == s ? void 0 : s.length) > 0) {
                var a, r = s[0];
                this.recommendReportParams = {
                    firstScreenSpuIds: [ r.spuIds ],
                    dish_quantity: Number(null == (a = r.spuIds) ? void 0 : a.length),
                    recommendShowType: 1 === r.recommendShowType ? null == r ? void 0 : r.recommendShowType : 0,
                    bossRecommendText: (null == r ? void 0 : r.title) || "老板推荐"
                };
            }
            this.setData({
                selectedType: (null == s || null == (e = s[0]) ? void 0 : e.type) || 0,
                isHorizontalMode: 0 === n,
                isLogin: !(null == (t = this.store.getState().extraInfo) || null == (t = t.headInfo) || null == (t = t.memberInfo) || !t.memberId)
            });
        },
        limoReady: function() {
            this.commonBehaviorsStoreBehavior_limoReady();
        },
        mapToState: function(e) {
            return {
                refactorCartDishMap: o.default.getIn(e, [ "cart", "refactorLocalCart", "refactorCartDishMap" ]) || {},
                showDishOperation: o.default.getIn(e, [ "extraInfo", "headInfo", "fmpBizData", "showDishOperation" ]) || !1
            };
        },
        getRecommendData: function(e) {
            var n, o, s = this.data, a = s.recommendTabs, r = s.urlParams, l = s.spuInfos, d = s.selectedType, u = s.recommendData, p = i.default.getLimoRuntime().limoUseCustomHandler || {}, c = p.Cart, h = p.rmsStorage, _ = p.MustDishSdk, f = (null == h ? void 0 : h.getDishList((null == r ? void 0 : r.shopId) || "")) || l, T = a.map(function(n) {
                var o, s = n.spuIds, a = n.type === m.NET ? 5 : 6, r = null == s || null == (o = s.map(function(t) {
                    var n, o, s = f[t];
                    if (s) {
                        var a = null == c ? void 0 : c.computeCount(s.spuId, e), r = null == c ? void 0 : c.computeWeight(s.spuId, e), l = null == _ ? void 0 : _.getMustCount(s.skuMenuItems[0]);
                        return {
                            spuId: s.spuId,
                            operationData: null != (n = i.default.getLimoRuntime().limoUseCustomHandler) && n.dealOperationData ? null == (o = i.default.getLimoRuntime().limoUseCustomHandler) ? void 0 : o.dealOperationData(s, a, r, l) : function() {}
                        };
                    }
                })) ? void 0 : o.filter(function(e) {
                    return !!e;
                }), l = n.type === m.NET && (null == r ? void 0 : r.length) > 5;
                return t(t({}, n), {}, {
                    showMore: l,
                    spuInfos: r.splice(0, a)
                });
            });
            return (T = null == (n = T) ? void 0 : n.filter(function(e) {
                var t;
                return null == e || null == (t = e.spuInfos) ? void 0 : t.length;
            })).find(function(e) {
                return e.type === d;
            }) || this.setData({
                selectedType: (null == (o = T) || null == (o = o[0]) ? void 0 : o.type) || 0
            }), JSON.stringify(T) !== JSON.stringify(u) && this.setData({
                recommendData: T
            }), JSON.parse(JSON.stringify(T));
        },
        toggleRecommendListFunc: function(e) {
            var t = e.currentTarget.type || e.currentTarget.dataset.type;
            this.setData({
                selectedType: Number(t)
            });
        },
        jumpToRecommendList: function() {
            var e = this.data.urlParams, t = u.default.stringify(e, !0);
            this.isH5 ? window.location.href = "./recommend-list?" + t : i.default.getLimoRuntime().navigateTo({
                url: "/diancan-menu/pages/recommend-list/index?" + t
            });
        },
        menuDetail: function(e) {
            var t, n = null == (t = e.detail) ? void 0 : t.dish;
            this.triggerEvent("openDishDetailTop", n, {
                bubbles: !0,
                composed: !0
            });
            var o, s, a = this.recommendReportParams;
            this.data.selectedType === m.NET ? i.default.getLimoRuntime().limoUseCustomHandler.sendMC("b_saaspay_psxksd3d_mc", null, null, {
                clickData: {
                    recommend_type: m.NET,
                    show_type: a && a.recommendShowType,
                    show_title: r.TITLE_CONTENT.NET,
                    dish_quantity: a && a.dish_quantity,
                    sn: null == (o = n.__reportConfig__) ? void 0 : o.index,
                    spu_id: n.spuId
                }
            }) : i.default.getLimoRuntime().limoUseCustomHandler.sendMC("b_saaspay_psxksd3d_mc", null, null, {
                clickData: {
                    recommend_type: m.BOSS,
                    is_defined_title: null != a && a.bossRecommendText ? 1 : 0,
                    show_type: null == a ? void 0 : a.recommendShowType,
                    show_title: (null == a ? void 0 : a.bossRecommendText) || r.TITLE_CONTENT.BOSS,
                    dish_quantity: null == a ? void 0 : a.dish_quantity,
                    sn: null == (s = n.__reportConfig__) ? void 0 : s.index,
                    spu_id: n.spuId
                }
            });
        },
        operationPanel: function(e) {
            this.triggerEvent("dealPanelData", t({}, e.detail));
        },
        operationCount: function(e) {
            this.triggerEvent("operateDish", t({}, e.detail));
        },
        collectFirstScreenDishEnd: function(e) {
            e.stopPropagation && e.stopPropagation(), this.firstScreenCollectEnd = !0;
        },
        exposeDish: function(e) {
            var n, o = e.currentTarget.dataset.exposeDish || e.currentTarget.exposeDish, s = this.data, a = s.selectedType, u = s.recommendTabInfo;
            if (u) {
                var p = u.boss, c = u.net;
                if (p || c) {
                    var h;
                    this.firstScreenCollectEnd || (this.recommendReportParams.recommendReportParams = ((null == (h = this.recommendReportParams) ? void 0 : h.firstScreenSpuIds) || []).concat(null == o ? void 0 : o.spuId)), 
                    i.default.getLimoRuntime().limoUseCustomHandler.appendExposeDishItem(d.EXPOSE_DISH_TYPE.BOSSRECOMMEND, t({
                        item: o
                    }, o.__reportConfig__)), i.default.getLimoRuntime().limoUseCustomHandler.exposeDishItemNew({
                        op_type: l.OP_TYPE.RECOMMEND_DISH,
                        op_name: a === m.NET ? l.OP_NAME.RECOMMEND_NET : l.OP_NAME.RECOMMEND_BOSS,
                        sn: null == (n = o.__reportConfig__) ? void 0 : n.index,
                        dish_details_func_area: r.DISH_DETAIL.MAIN_DISH,
                        algorithm: "",
                        is_defined_title: null != p && p.title ? 1 : 0,
                        show_title: a === m.NET ? r.TITLE_CONTENT.NET : r.TITLE_CONTENT.BOSS,
                        sku_id_list: o.skuMenuItems[0].skuId,
                        spu_id_list: null == o ? void 0 : o.spuId,
                        dish_name_list: o.spuName,
                        dish_type: o.dishType
                    });
                    var _ = a === m.BOSS ? null == p ? void 0 : p.spuInfos : null == c ? void 0 : c.spuInfos;
                    a === m.NET ? i.default.getLimoRuntime().limoUseCustomHandler.sendMV("b_saaspay_psxksd3d_mv", null, null, {
                        recommend_type: m.NET,
                        show_type: null == p ? void 0 : p.recommendShowType,
                        show_title: r.TITLE_CONTENT.NET,
                        dish_quantity: _
                    }) : i.default.getLimoRuntime().limoUseCustomHandler.sendMV("b_saaspay_psxksd3d_mv", null, null, {
                        recommend_type: m.BOSS,
                        show_type: null == p ? void 0 : p.recommendShowType,
                        is_defined_title: null != p && p.title ? 1 : 0,
                        show_title: (null == p ? void 0 : p.title) || r.TITLE_CONTENT.BOSS,
                        dish_quantity: _
                    });
                }
            }
        },
        showDishTimeInfoModal: function(e) {
            this.triggerEvent("showDishTimeInfoModalFn", e.detail);
        }
    },
    ready: function() {
        this.limoReady();
    }
});