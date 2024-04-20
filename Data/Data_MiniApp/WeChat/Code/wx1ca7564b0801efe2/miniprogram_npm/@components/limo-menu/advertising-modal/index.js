var e = require("../../../../b/helpers/interopRequireDefault"), t = require("../../../../b/helpers/objectSpread2"), a = require("../../../@limo/container/behaviors/index"), s = require("../common-lib/dish"), i = require("../../../../constants/lxConstants"), o = require("../../../../modules/menu/dish/expose"), n = require("../common-lib/report"), u = require("../../../../constants/bizConstants"), r = e(require("../../../@mtfe/rms-triangle-c/index.js"));

Component({
    behaviors: [ a.commonBehavior, a.limoShim ],
    properties: {
        shopId: {
            type: String
        },
        layout: {
            type: Object
        },
        show: {
            type: Boolean
        },
        preview: {
            type: Boolean
        },
        ad: {
            type: Object,
            value: {},
            observer: function(e) {
                var t = !(null == e || !e.imgUrl), a = this.data.layout || {
                    radius: 20
                };
                this.setData({
                    showModal: t,
                    layout: a
                }, function() {
                    if (t) {
                        var a = e.adType, s = e.spuId, i = e.activityType, o = e.activityId;
                        (0, n.sendMV)("b_saaspay_vdiulcif_mv", null, {}, {
                            adType: a,
                            spuId: s
                        }), (0, n.sendMV)("b_saaspay_f4akjy2p_mv", null, {}, {
                            content_type: a,
                            content_subtype: i,
                            content_title: s || o
                        });
                    }
                });
            }
        },
        advId: {
            type: String,
            value: ""
        },
        modalConfigResource: {
            type: Object,
            value: {}
        }
    },
    data: {
        showModal: !1
    },
    methods: {
        clickAdvertise: function(e) {
            var a, p = this.data, d = p.ad, l = p.shopId;
            if (d) {
                var c, y = e.detail, _ = y.action, v = y.adType;
                try {
                    c = JSON.parse(_.actionValue).spuId;
                } catch (e) {}
                var m = (0, s.getSpuById)(l, c), h = m ? t(t(t({}, m.reportConfig || {}), m.__reportConfig__ || {}), {}, {
                    adFrom: o.EXPOSE_DISH_TYPE.ADMODE,
                    dishType: m.dishType,
                    spuName: m.spuName,
                    spuId: c,
                    skuId: m.skuMenuItems ? null == (a = m.skuMenuItems[0]) ? void 0 : a.skuId : 0
                }) : null;
                v === u.AD_TYPE.SPU && (this.setData({
                    ad: {}
                }), m || r.default.showToast({
                    icon: "none",
                    title: "菜品已售完, 看看其他菜品吧~",
                    duration: 3e3
                }), m && this.revoke && this.revoke("openAdSpuDetailEvent", {
                    adType: v,
                    exposeDishType: o.EXPOSE_DISH_TYPE.ADMODE,
                    spu: m,
                    reportConfig: h
                })), (0, n.sendMC)("b_saaspay_vdiulcif_mc", null, {}, {
                    adType: v,
                    spuId: c,
                    spuName: null == m ? void 0 : m.spuName
                }), (0, n.sendMC)("b_saaspay_f4akjy2p_mc", null, {}, {
                    clickData: {
                        content_type: v,
                        content_subtype: d.activityType,
                        content_title: c || d.activityId,
                        spuName: null == m ? void 0 : m.spuName
                    }
                }), (0, n.sendMC)("b_saaspay_hlznku1a_mc", null, {}, {
                    clickData: {
                        op_type: i.OP_TYPE.AD_MODE,
                        spu_id: c,
                        sku_id: ""
                    }
                });
            }
        },
        closeAdvertise: function() {
            this.triggerEvent("closeAdModalEvent");
        }
    }
});