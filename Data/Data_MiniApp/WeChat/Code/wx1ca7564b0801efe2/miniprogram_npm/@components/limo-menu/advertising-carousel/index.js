var e = require("../../../../b/helpers/objectSpread2"), t = require("../../../@limo/container/behaviors/index"), n = require("../common-lib/dish"), a = require("../menu-constants/lxConstants"), s = require("../menu-constants/constants"), i = require("../common-lib/report");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    properties: {
        banners: {
            type: Array,
            value: []
        },
        heightImg: {
            type: Number
        },
        layout: {
            type: Object,
            value: {}
        },
        shopId: {
            type: String
        },
        bannerInterval: {
            type: Number,
            value: 3
        },
        advId: {
            type: String,
            value: ""
        },
        autoplay: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        defaultClass: "",
        DEFAULT_INTERVAL: 3
    },
    attached: function() {
        this.limoAttached();
    },
    ready: function() {
        this.limoReady();
    },
    methods: {
        limoAttached: function() {
            var e = this.data.layout;
            this.adShow = [], e && Object.keys(e).length || this.setData({
                defaultClass: "advertising-carousel-container"
            });
        },
        limoReady: function() {
            this.showAdvertiseReport(0);
        },
        swiperRedirectEvent: function(t) {
            var o, d = t.detail.index;
            if (void 0 !== d) {
                var r = this.data, u = r.banners, p = r.shopId, l = null == u ? void 0 : u[d];
                if (l) {
                    var c = l.adType, h = l.spuId, v = l.activityType, y = l.activityId, m = (0, n.getSpuById)(p, h), _ = m ? e(e(e({}, m.reportConfig || {}), m.__reportConfig__ || {}), {}, {
                        index: d,
                        adFrom: s.EXPOSE_DISH_TYPE.BANNER,
                        dishType: m.dishType,
                        spuName: m.spuName,
                        spuId: h,
                        skuId: m.skuMenuItems ? null == (o = m.skuMenuItems[0]) ? void 0 : o.skuId : 0,
                        isFirstScreen: 0 === d ? 1 : 0,
                        sn: d
                    }) : null;
                    c === s.AD_TYPE.SPU && m && this.revoke && this.revoke("openAdSpuDetailEvent", {
                        adType: c,
                        exposeDishType: s.EXPOSE_DISH_TYPE.ADMODE,
                        spu: m,
                        reportConfig: _
                    }), (0, i.sendMC)("b_saaspay_2nqz9mp9_mc", null, {}, {
                        index: d,
                        adType: c,
                        spuId: h,
                        spuName: null == m ? void 0 : m.spuName
                    }), (0, i.sendMC)("b_saaspay_07f5smqn_mc", null, {}, {
                        clickData: {
                            sn: d,
                            content_type: c,
                            content_subtype: v,
                            content_title: h || y,
                            spuName: null == m ? void 0 : m.spuName
                        }
                    }), (0, i.sendMC)("b_saaspay_hlznku1a_mc", null, {}, {
                        clickData: {
                            sn: d,
                            op_type: a.OP_TYPE.BANNER,
                            spu_id: h,
                            sku_id: ""
                        }
                    });
                }
            }
        },
        swiperSwitchChangeEvent: function(e) {
            var t = e.detail.index;
            void 0 !== t && this.showAdvertiseReport(t);
        },
        showAdvertiseReport: function(e) {
            var t = this.data.banners;
            if (e < (null == t ? void 0 : t.length) && !this.adShow[e]) {
                var n = t[e], a = n.adType, s = n.spuId, o = n.activityId, d = n.activityType;
                (0, i.sendMV)("b_saaspay_2nqz9mp9_mv", null, {}, {
                    index: e,
                    adType: a,
                    spuId: s
                }), (0, i.sendMV)("b_saaspay_07f5smqn_mv", null, {}, {
                    sn: e,
                    content_type: a,
                    content_subtype: d,
                    content_title: s || o
                }), this.adShow[e] = !0;
            }
        }
    }
});