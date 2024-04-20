var e = require("../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var s = require("../../../../b/helpers/objectSpread2"), t = e(require("../../../@limo/core/index.js")), a = require("../../../../modules/LXHelper"), i = require("../../../../modules/menu/dish/expose"), d = require("../../../../constants/bizConstants"), n = require("../../../../constants/lxConstants"), o = Behavior({
    properties: {
        mpUserInfo: {
            type: Object,
            value: {}
        },
        reportConfig: {
            type: Object
        },
        addFrom: {
            type: String,
            value: ""
        }
    },
    data: {
        CLICKTYPE: {
            ADD: "ADD",
            MINUS: "MINUS",
            SELECT: "SELECT"
        }
    },
    methods: {
        commonBehaviorsCommon_limoAttached: function() {},
        doAction: function(e) {
            "number" === e && this.addDish();
        },
        clickReport: function(e, t, o) {
            var r, u, _ = this;
            if (t) {
                var l = [], p = e || {}, m = p.fromRecommend, c = p.fromDishList, E = p.fromSearch, T = p.addFrom, h = p.recommendReportParams;
                if (c || m || T) {
                    var I = {
                        ADD: "b_saaspay_q03j1tqs_mc",
                        MINUS: "b_saaspay_9tpv3ev7_mc",
                        SELECT: "b_saaspay_bj6jkfqo_mc"
                    };
                    I[o] && l.push(I[o]);
                } else if (E) {
                    var D = {
                        ADD: "b_saaspay_uzban5cg_mc",
                        MINUS: "b_saaspay_fv86ah1e_mc",
                        SELECT: "b_saaspay_tdqn41gx_mc"
                    };
                    D[o] && l.push(D[o]);
                }
                var S = t.skuMenuItems || [];
                l.forEach(function(i) {
                    var d;
                    (0, a.sendMC)(i, null, null, {
                        clickData: s(s({
                            isRecommend: !!m
                        }, e || {}), {}, {
                            spuId: t.spuId,
                            skuId: o !== _.data.CLICKTYPE.SELECT && S[0] ? S[0].skuId : "",
                            spuName: t.spuName,
                            addFrom: _.data.addFrom,
                            isFirstScreen: (null == h || null == (d = h.firstScreenSpuIds) ? void 0 : d.indexOf(null == t ? void 0 : t.spuId)) > -1 ? 1 : 0
                        })
                    });
                });
                var C = n.OP_TYPE.OTHER, f = n.OP_NAME.OTHER, y = "", N = (null == e ? void 0 : e.index) || 0;
                e && e.addFrom === i.EXPOSE_DISH_TYPE.CART && (C = n.OP_TYPE.CART), e && 1 === e.fromNetRecommend && (C = n.OP_TYPE.RECOMMEND_DISH, 
                f = n.OP_NAME.RECOMMEND_NET, y = d.TITLE_CONTENT.NET, N = null == e ? void 0 : e.index, 
                (0, a.sendMC)("b_saaspay_psxksd3d_mc", null, null, {
                    clickData: {
                        recommend_type: d.RECOMMEND_CATEGORY.NET,
                        show_type: h && h.recommendShowType,
                        show_title: y,
                        dish_quantity: h && h.dish_quantity,
                        sn: N,
                        spu_id: t.spuId
                    }
                })), e && 0 === e.fromNetRecommend && (C = n.OP_TYPE.RECOMMEND_DISH, f = n.OP_NAME.RECOMMEND_BOSS, 
                y = d.TITLE_CONTENT.BOSS, N = null == e ? void 0 : e.index, (0, a.sendMC)("b_saaspay_psxksd3d_mc", null, null, {
                    clickData: {
                        recommend_type: d.RECOMMEND_CATEGORY.BOSS,
                        is_defined_title: h && h.bossRecommendText ? d.DEFINED_TITLE.DEFINED : d.DEFINED_TITLE.DEFAULT,
                        show_type: h && h.recommendShowType,
                        show_title: y,
                        dish_quantity: h && h.dish_quantity,
                        sn: N,
                        spu_id: t.spuId
                    }
                })), e && e.fromSearch && (C = n.OP_TYPE.SEARCH_LIST);
                var O = s({}, {
                    op_type: C,
                    dish_details_func_area: d.DISH_DETAIL.MAIN_DISH,
                    op_name: f,
                    recommend_mode: t.recommendType,
                    sn: N,
                    algorithm: "",
                    sku_id_list: t.skuId || (null == (r = t.skuMenuItems) || null == (r = r[0]) ? void 0 : r.skuId) || "",
                    spu_id_list: t.spuId,
                    dish_name_list: t.spuName || t.skuName,
                    dish_type: t.dishType,
                    add_dish_quantity: "",
                    isFirstScreen: (null == h || null == (u = h.firstScreenSpuIds) ? void 0 : u.indexOf(null == t ? void 0 : t.spuId)) > -1 ? 1 : 0
                });
                y && (O = s({
                    show_title: y
                }, O)), o === this.data.CLICKTYPE.ADD && (0, a.sendMC)("b_saaspay_bsz9zphw_mc", null, null, {
                    clickData: s({}, O)
                });
            }
        },
        onTapHandle: function(e) {
            this.properties.disabled ? t.default.getLimoRuntime().showToast({
                title: "限".concat(this.data.count, "份，不能再选了"),
                icon: "none"
            }) : ((null == e ? void 0 : e.stopPropagation) && e.stopPropagation(), this.doAction(e.currentTarget.type || e.currentTarget.dataset.type || ""));
        }
    }
});

exports.default = o;