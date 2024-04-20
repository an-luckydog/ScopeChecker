var e = require("../../../../b/helpers/interopRequireDefault");

require("../../../../b/helpers/Arrayincludes");

var a = require("../../../../b/helpers/objectSpread2"), t = e(require("../../../@limo/core/index.js")), o = require("../../../@limo/container/behaviors/index"), s = e(require("../../../../api/rmsStorage")), i = e(require("../../../../lib/mix/log")), n = require("../common-lib/report"), r = require("../../../../constants/bizConstants"), l = i.default;

Component({
    behaviors: [ o.commonBehavior, o.limoShim ],
    properties: {
        takeCouponData: {
            type: Object,
            value: {},
            observer: function(e) {
                e && Object.keys(e).length && this.initData(e);
            }
        },
        shopId: {
            type: String,
            value: ""
        }
    },
    data: {
        showDialog: !0,
        showNormalConfig: !1,
        showFailConfig: !1,
        isNoLogin: !1,
        TAKE_COUPON_RESULT: r.TAKE_COUPON_RESULT,
        appliedType: r.COUPON_ITEM_STYLE.PANEL_TYPE
    },
    observers: {
        "showDialog, showNormalConfig, showFailConfig": function(e, a, t) {
            e && (a || t) || this.triggerEvent("closeTakeCouponDialog");
        }
    },
    methods: {
        initData: function(e) {
            var t, o;
            this.setData(a({}, e));
            var i, n = s.default.getCardInfo() || "{}";
            try {
                i = JSON.parse(n);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                l.addError("TakeCpupon JSON.parse Err"), i = {};
            }
            var u = e.couponDisplayInfos, h = e.givePointInfo, d = e.resultCode, _ = e.activityTypeList, c = void 0 === _ ? [] : _, p = u && u.length ? u.length : 0, m = h && h.point ? 1 : 0, C = Number(p) + Number(m), g = "normal-content", T = "container";
            d > r.TAKE_COUPON_RESULT.SUCCESS ? T = "fail-container" : 1 === C ? (g += " normal-content-1", 
            T += " one-coupon") : 2 === C && (g += " normal-content-2", T += " two-coupon"), 
            this.setData({
                contentStyle: g,
                containerStyle: T,
                memberId: null == (t = i) ? void 0 : t.memberId,
                title: c && c.includes(2) ? "注册会员送好礼" : "会员专享红包"
            }), this.handleResutCode(d, null == (o = i) ? void 0 : o.memberId, c);
        },
        handleResutCode: function(e, a, t) {
            var o = this.data.shopId, i = t && t.includes(2) ? "register" : "";
            switch (e) {
              case r.TAKE_COUPON_RESULT.NO_DATA:
                this.setData({
                    showDialog: !1
                });
                break;

              case r.TAKE_COUPON_RESULT.NO_LOGIN:
                s.default.getHasShowReceiveCouponAtMenu(o) ? this.setData({
                    showDialog: !1
                }) : (s.default.setHasShowReceiveCouponAtMenu(o, !0), this.setData({
                    isNoLogin: !0,
                    showNormalConfig: !0
                })), this.setData({
                    isNoLogin: !0,
                    showNormalConfig: !0
                }), (0, n.sendMV)(i ? "b_saaspay_mrl0831s_mv" : "b_saaspay_6o4dlfh8_mv");
                break;

              case r.TAKE_COUPON_RESULT.SUCCESS:
                this.setData({
                    isNoLogin: !1,
                    showNormalConfig: !0
                }), i ? (0, n.sendMV)("b_saaspay_os54g4on_mv", null, {}, {
                    member_id: a
                }) : (0, n.sendMV)("b_saaspay_49yul6z5_mv"), s.default.setHasTakeCouponAtMenu(this.data.shopId, !0);
                break;

              case r.TAKE_COUPON_RESULT.FAIL:
              case r.TAKE_COUPON_RESULT.OUT_OF_LIMIT:
              case r.TAKE_COUPON_RESULT.END:
                switch (s.default.getHasClickTakeCouponAtMenu(this.data.shopId) ? (s.default.setHasClickTakeCouponAtMenu(this.data.shopId, !1), 
                this.setData({
                    showFailConfig: !0,
                    showNormalConfig: !1
                })) : this.setData({
                    showFailConfig: !1,
                    showNormalConfig: !1
                }), e) {
                  case r.TAKE_COUPON_RESULT.OUT_OF_LIMIT:
                    (0, n.sendMV)("b_saaspay_z8q6grvi_mv");
                    break;

                  case r.TAKE_COUPON_RESULT.END:
                    (0, n.sendMV)("b_saaspay_79xlhyxs_mv");
                    break;

                  default:
                    (0, n.sendMV)("b_saaspay_mn78oh08_mv");
                }
            }
        },
        closeDialog: function() {
            this.setData({
                showDialog: !1
            });
        },
        getActivityType: function() {
            var e = (this.data.activityTypeList || []).activityTypeList, a = void 0 === e ? [] : e;
            return a && a.includes(2) ? "register" : "";
        },
        clickSubmitBtn: function() {
            var e = this.getActivityType(), a = this.data.memberId, o = this.data.resultCode;
            s.default.setHasClickTakeCouponAtMenu(this.data.shopId, !0), o === r.TAKE_COUPON_RESULT.SUCCESS ? e ? (0, 
            n.sendMC)("b_saaspay_os54g4on_mc", null, {}, {
                member_id: a
            }) : (0, n.sendMC)("b_saaspay_6o4dlfh8_mc") : (0, n.sendMC)(e ? "b_saaspay_mrl0831s_mc" : "b_saaspay_49yul6z5_mc"), 
            this.data.isNoLogin && this.data.loginURL ? (t.default.getLimoRuntime().navigateTo({
                url: this.data.loginURL
            }), this.triggerEvent("takeCouponHandleFn")) : this.setData({
                showDialog: !1
            });
        },
        viewCouponList: function() {
            var e = this.data.couponListURL;
            e && t.default.getLimoRuntime().navigateTo({
                url: e
            });
        }
    }
});