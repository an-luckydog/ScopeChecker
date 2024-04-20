var e = require("../../../b/helpers/interopRequireDefault"), r = e(require("../../../b/regenerator")), t = require("../../../b/helpers/asyncToGenerator");

require("../../../b/helpers/Arrayincludes");

var n = e(require("../../../miniprogram_npm/@limo/core/index.js")), a = require("../../../miniprogram_npm/@limo/container/behaviors/index"), o = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), s = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), u = e(require("../../../miniprogram_npm/@mtfe/saas-user-auth/index.js"));

function i(e) {
    return "number" != typeof e && !e || [ "undefined", "null" ].includes(e) ? "" : e;
}

Component({
    behaviors: [ a.commonBehavior, a.limoShim ],
    properties: {
        rulesParams: {
            type: Object,
            value: null,
            observer: function(e) {
                e && this.checkCouponRules();
            }
        },
        safePadding: {
            type: Number,
            value: 0
        },
        requestHeader: {
            type: Object,
            value: {}
        }
    },
    data: {
        couponRules: [],
        loadingRules: !1,
        collect: !1
    },
    lifetimes: {
        show: function() {
            n.default.getLimoRuntime().sendPV("b_saaspay_xq6u69os_mv");
        }
    },
    methods: {
        checkCouponRules: function() {
            var e = this;
            return t(r.default.mark(function t() {
                var n, a;
                return r.default.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        null != (a = e.properties.rulesParams) && null != (n = a.rules) && n.length ? e.setData({
                            couponRules: a.rules,
                            loadingRules: !1,
                            collect: !0
                        }) : e.requestCouponRules(a);

                      case 2:
                      case "end":
                        return r.stop();
                    }
                }, t);
            }))();
        },
        requestCouponRules: function(e) {
            var r = this;
            try {
                var t = e || {}, n = t.id, a = t.type, l = this.data.couponRules;
                if (!l || 0 === l.length) {
                    var d;
                    this.setData({
                        loadingRules: !0
                    });
                    var p = 1 === a ? "/api/v1/crm/frontend/coupon/query-coupon-display-rule" : "/api/v1/crm/frontend/coupon-template/query-coupon-display-rule", c = 1 == a ? {
                        couponIds: [ n ],
                        styleVersion: 1
                    } : {
                        templateIds: [ n ],
                        styleVersion: 1
                    }, m = {};
                    if (null != (d = this.properties.requestHeader) && d.tenantId) m = this.properties.requestHeader; else if (s.default.isNativeMp) {
                        var g = "undefined" != typeof getCurrentPages ? getCurrentPages() : [];
                        g.length && (m = g[g.length - 1].options || {});
                    } else m = {
                        poiId: s.default.getH5UrlParam("poiId"),
                        orgId: s.default.getH5UrlParam("orgId"),
                        tenantId: s.default.getH5UrlParam("tenantId"),
                        poiType: s.default.getH5UrlParam("poiType")
                    };
                    m.tenantId || o.Log.addError({
                        name: "[coupon-rules-standard][页面参数缺少tenantId]",
                        msg: JSON.stringify(m)
                    });
                    var f = (0, o.getMemberHost)(), h = {
                        poiId: i(m.poiId),
                        orgId: i(m.orgId),
                        tenantId: i(m.tenantId),
                        poiType: i(m.poiType)
                    };
                    s.default.isNativeMp && (h["X-token"] = u.default.getMemberToken()), (0, o.request)({
                        url: f + p,
                        method: "POST",
                        header: h,
                        data: c,
                        success: function(e) {
                            r.handleResponse(null == e ? void 0 : e.data);
                        },
                        fail: function(e) {
                            r.setData({
                                loadingRules: !1
                            }), o.Log.addError({
                                name: "[coupon-rules-standard][券规则]请求失败",
                                msg: JSON.stringify(e)
                            });
                        },
                        complete: function(e) {
                            r.handleResponse(null == e ? void 0 : e.data);
                        }
                    });
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                o.Log.addError({
                    name: "[coupon-rules-standard]jsError",
                    msg: JSON.stringify(e)
                });
            }
        },
        handleResponse: function(e) {
            var r, t = (null == e || null == (r = e.data) ? void 0 : r.couponDisplayRules) || [];
            0 === (null == e ? void 0 : e.code) && t && (this.setData({
                couponRules: t
            }), o.Log.addLog("[coupon-rules-standard][券规则]请求成功", {
                extraInfo: e
            })), this.setData({
                loadingRules: !1
            });
        },
        redictRules: function(e) {
            n.default.getLimoRuntime().sendMC("b_saaspay_vczzfuxj_mc");
            var r = e.currentTarget.dataset.redirectUrl || e.currentTarget.redirectUrl;
            r && (n.default.getLimoRuntime().navigateTo({
                url: r
            }), o.Log.addLog("[coupon-rules-standard][跳转到其他页面]", {
                extraInfo: r
            }));
        },
        closePopup: function() {
            this.closeDialog("coupon-rules-standard"), n.default.getLimoRuntime().sendMC("b_saaspay_zt11rs8d_mc"), 
            o.Log.addLog("[coupon-rules-standard][点击关闭券规则弹窗]");
        },
        preventPropagation: function(e) {
            e.stopPropagation && e.stopPropagation();
        }
    }
});