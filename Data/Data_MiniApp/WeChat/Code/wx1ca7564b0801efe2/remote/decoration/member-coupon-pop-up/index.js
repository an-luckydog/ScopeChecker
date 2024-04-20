var e = require("../../../b/helpers/interopRequireDefault"), o = require("../../../b/helpers/objectSpread2"), t = e(require("../../../b/regenerator")), n = require("../../../b/helpers/asyncToGenerator"), r = e(require("../../../miniprogram_npm/@limo/core/index.js")), i = require("../../../miniprogram_npm/@limo/container/behaviors/index"), c = e(require("../../../miniprogram_npm/@mtfe/rms-triangle-c/index.js")), a = require("../common-helpers/memberHelper"), u = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), p = "#FF4B10", l = "#FFFFFF", s = "#222222", m = "#FFDED3";

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        businessData: {
            type: Object,
            value: {}
        },
        componentConfigJSON: {
            type: String,
            value: "",
            observer: function(e) {
                this.setCouponStyle(e);
            }
        },
        showModal: {
            type: Boolean,
            value: !1
        },
        couponList: {
            type: Array,
            value: []
        },
        showViewAll: {
            type: Boolean,
            value: !1
        },
        couponRedirection: {
            type: Object,
            value: {}
        },
        redirection: {
            type: Object,
            value: {}
        }
    },
    data: {
        compBgStyle: "",
        buttonStyle: "",
        writerStyle: "",
        writer: "",
        couponStyle: []
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            var e = this.properties, o = e.showModal, t = e.businessData, n = e.componentConfigJSON;
            this.setCouponStyle(n), o || this.getCouponInfo(t);
        },
        setCache: function(e, o, t, n) {
            2 === e && r.default.getLimoRuntime().setStorageSync(o, {
                value: t,
                expire: void 0 !== n ? new Date().getTime() + n : null
            });
        },
        getCache: function(e) {
            var o = r.default.getLimoRuntime().getStorageSync(e);
            if (o) {
                if (null === o.expire || new Date().getTime() < o.expire) return o.value;
                this.removeCache(e);
            }
            return null;
        },
        removeCache: function(e) {
            r.default.getLimoRuntime().removeStorageSync(e);
        },
        getCouponInfo: function(e) {
            var o = this;
            return n(t.default.mark(function n() {
                var r, i, u, p, l, s;
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        i = c.default.MPInfo.getAppId(), u = o.getCache("".concat(i, "_COUPON_POP")), p = null != (r = o.isJSONString(o.properties.componentConfigJSON)) ? r : {}, 
                        l = p.option, s = p.interval, e && Object.keys(e).length && (0, a.request)({
                            url: "/api/v1/rmsmina/c/comp/member/membercoupon",
                            params: e,
                            method: "POST",
                            completeCallbacks: function(e) {
                                if ((1 === l || !u) && null != e && e.couponDisplayVOList.length) {
                                    var t = null == e ? void 0 : e.couponDisplayVOList;
                                    t.length > 3 && (t = null == e ? void 0 : e.couponDisplayVOList.slice(0, 3)), o.showPopup(t, !0), 
                                    o.setCache(l, "".concat(i, "_COUPON_POP"), "COUPON_EXPIRE_POP_UP", 6e4 * s);
                                }
                            }
                        });

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, n);
            }))();
        },
        setCouponStyle: function(e) {
            var t, n = null != (t = this.isJSONString(e)) ? t : {}, r = n.bgImgUrl, i = n.bgColor, c = n.popText, a = n.textColor, u = void 0 === a ? s : a, d = n.buttonBgColor, g = void 0 === d ? p : d, h = n.buttonTextColor, f = void 0 === h ? l : h, v = n.couponColor, b = "";
            r ? b = "background: url(".concat(r, ") 0% 0%/ cover  no-repeat;background-size:cover;") : i && i !== l && (b = "background: ".concat(i, ";"));
            var y = (this.properties || {}).couponList.map(function(e) {
                var t = o({}, e.displayStyle);
                return t.couponWrapperStyle = "background:".concat(v, ";border: 1px solid ").concat(v === l ? v : m, ";--border-color:").concat(v === l ? v : m, ";"), 
                t;
            });
            this.setData({
                writer: null != c ? c : "优惠券快过期了，快去使用吧～",
                compBgStyle: b,
                buttonStyle: "background-color:".concat(g, "; color:").concat(f, ";"),
                writerStyle: "color:".concat(u, ";"),
                couponStyle: y
            });
        },
        isJSONString: function(e) {
            try {
                return JSON.parse(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        },
        showPopup: function(e, o) {
            var t = this.properties || {}, n = t.couponRedirection, i = t.componentConfigJSON, c = t.redirection;
            r.default.getLimoRuntime().showDialog("member-coupon-pop-up", {
                showModal: !0,
                couponList: e,
                showViewAll: o,
                redirection: c,
                couponRedirection: n,
                componentConfigJSON: i
            }, {
                position: "bottom"
            }), r.default.getLimoRuntime().sendMV("b_eco_ksy7iqxt_mv");
        },
        closePopup: function() {
            r.default.getLimoRuntime().closeDialog("member-coupon-pop-up");
        },
        skipMean: function(e) {
            var o = (("allText" === e.currentTarget.dataset.type ? this.properties.couponRedirection : this.properties.redirection) || {}).action, t = void 0 === o ? {} : o;
            r.default.getLimoRuntime().sendMC("b_eco_ksy7iqxt_mc"), 15 !== (null == t ? void 0 : t.actionType) ? t && (0, 
            u.tapActionHandler)(t, {
                compInst: this
            }) : this.closePopup();
        }
    }
});