var e = require("../../../b/helpers/interopRequireDefault"), t = e(require("../../../b/regenerator")), o = require("../../../b/helpers/asyncToGenerator");

require("../../../b/helpers/Arrayincludes");

var r, a = require("../../../b/helpers/objectSpread2"), n = e(require("../../../miniprogram_npm/@limo/core/index.js")), i = require("../../../miniprogram_npm/@limo/container/behaviors/index"), s = e(require("../decor-comp-behavior/index")), l = require("../common-helpers/memberHelper"), m = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), u = require("../common-helpers/formatStyle"), c = [ {
    textColor: "#FFE7CA",
    buttonColor: "linear-gradient(-16deg, #FFD89C 0%, #FFF0DF 100%)",
    buttonTextColor: "#404142",
    assetNumberColor: "#FFE7CA",
    progressBarColor: "linear-gradient(90deg, #FFE6BA 0%, #FFD087 100%);"
}, {
    textColor: "#333333",
    buttonColor: "linear-gradient(-16deg, #FFD89C 0%, #FFF0DF 100%)",
    buttonTextColor: "#404142",
    assetNumberColor: "#333333",
    progressBarColor: "linear-gradient(90deg, #FFE6BA 0%, #FFD087 100%);"
} ], d = "member-info-cache";

Component({
    behaviors: [ s.default, i.commonBehavior, i.limoShim ],
    properties: {
        memberCardInfo: {
            type: Object,
            value: {},
            observer: function(e) {
                this.setCardData(e);
            }
        },
        overallStyle: {
            type: Number,
            value: 0
        },
        theme: {
            type: Object,
            value: {
                preset: 1,
                custom: {}
            },
            observer: function(e) {
                this.formatCustomStyle(e);
            }
        },
        animationStyle: {
            type: String,
            value: ""
        },
        businessData: {
            type: Object,
            value: {},
            observer: function(e, t) {
                e && JSON.stringify(e) !== JSON.stringify(t) && this.getMemberInfo(e);
            }
        },
        needSecondRequest: {
            type: Boolean,
            value: !1,
            observer: function(e, t) {
                e && e !== t && this.getMemberInfo(this.properties.businessData);
            }
        },
        showNickName: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.setData({
                    labelCardTitle: e ? "label-card-title" : ""
                });
            }
        },
        showCardTitle: {
            type: Boolean,
            value: !0,
            observer: function(e) {
                this.setData({
                    isCardTitleGrade: this.properties.showMemberGrade || e
                });
            }
        },
        showMemberGrade: {
            type: Boolean,
            value: !0,
            observer: function(e) {
                this.setData({
                    isCardTitleGrade: e || this.properties.showCardTitle
                });
            }
        },
        styleType: {
            type: Number,
            value: 3,
            observer: function(e) {
                this.updateStyleType(e);
            }
        },
        cardId: {
            type: Number,
            value: 0,
            observer: function(e) {
                this.setData({
                    isLogin: +e > 0
                }), this.notLoginStyle(this.properties.notLoginConfig, e);
            }
        },
        notLoginConfig: {
            type: Object,
            value: {},
            observer: function(e) {
                e && this.notLoginStyle(e, this.properties.cardId);
            }
        },
        defaultNickName: {
            type: String,
            value: ""
        }
    },
    data: {
        formattedCustomStyle: "",
        doubleLined: "",
        marginCompacted: "",
        textColor: "",
        assetNumberColor: "",
        formattedRichTexts: "",
        barProgress: null,
        memberCardData: {},
        labelCardTitle: "",
        isCardTitleGrade: !0,
        memberNewStyle: "",
        isLogin: !1,
        assetNewStyle: "",
        titleBarStyle: "",
        showCodeText: !0,
        assetNumberFontStyle: "",
        textFontStyle: "",
        cardNameFontStyle: "",
        notLoginType: 1,
        notLoginBtnStyle: "",
        notLoginCustom: "",
        notLoginText: "",
        notLoginBgStyle: "",
        showProgressIcon: !1,
        showCodeFont: !0,
        memberCodeFont: ""
    },
    isLoading: !1,
    sendedCouponMV: !1,
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    attached: function() {
        this.limoAttached(), this.limoPageShow();
    },
    detached: function() {
        this.properties.isH5Preview || m.Observer.getInstance().unsubscribe("updateMemberCardId", r);
    },
    methods: {
        limoPageShow: function() {
            this.getMemberInfo(this.properties.businessData), n.default.getLimoRuntime().sendMV("b_eco_72ef9j52_mv");
        },
        limoAttached: function() {
            var e = this, t = this.properties, o = t.memberCardInfo, i = t.theme, s = t.showMemberGrade, l = t.showCardTitle, u = t.cardId, c = t.notLoginConfig;
            if (this.formatCustomStyle(i), this.notLoginStyle(c, u), !this.properties.isH5Preview) {
                var d = m.Observer.getInstance();
                r = function(t) {
                    var o;
                    e.getMemberInfo(a(a({}, null == (o = e.properties) ? void 0 : o.businessData), {}, {
                        cardId: t
                    }));
                }, d.subscribe("updateMemberCardId", r);
            }
            this.getInfoFormStorage(), this.setData({
                isCardTitleGrade: s || l
            });
            var p = o || {}, g = p.hasCouponActivity, b = p.memberCodeUrl;
            g && n.default.getLimoRuntime().sendMV("b_saaspay_5wtvwj42_mv"), b && n.default.getLimoRuntime().sendMV("b_eo_g55f2nwt_mv");
        },
        formatCustomStyle: function(e) {
            var t = this, o = e || {
                preset: 1,
                custom: {
                    backgroundColor: null,
                    textColor: null,
                    buttonColor: null,
                    buttonTextColor: null
                }
            }, r = o.preset, n = void 0 === r ? 1 : r, i = o.custom, s = void 0 === i ? {} : i, l = c[n - 1], m = a(a({}, l), s), d = Object.keys(m), p = [], g = [ "backgroundImg", "cardBgImg", "memberCodeIcon", "progressBarIcon" ], b = [ "assetNumberFontStyle", "textFontStyle", "cardNameFontStyle" ];
            null == d || d.forEach(function(e) {
                var o = t.kebabize(e), r = m[e];
                if (r && !b.includes(e)) g.includes(e) ? p.push("".concat(o, ": url(").concat(r, ");")) : p.push("".concat(o, ": ").concat(r, ";")); else {
                    var a = l[e];
                    a && p.push("".concat(o, ": ").concat(a, ";"));
                }
            }), 2 === n && p.push("--member-height: 90rpx;");
            var h = m || {}, f = h.showMemberCodeText, y = h.progressBarIcon, C = h.memberCodeIcon, v = h.assetNumberFontStyle, S = h.textFontStyle, T = h.cardNameFontStyle, L = h.textColor, F = h.assetNumberColor, x = h.memberCodeTextColor;
            this.setData({
                formattedCustomStyle: p.join(""),
                showCodeText: !!f,
                showProgressIcon: !!y,
                showCodeFont: !C,
                assetNumberFontStyle: this.isJSONString(v) ? (0, u.formatStyle)(JSON.parse(v)) : "",
                textFontStyle: this.isJSONString(S) ? (0, u.formatStyle)(JSON.parse(S)) : "",
                cardNameFontStyle: this.isJSONString(T) ? (0, u.formatStyle)(JSON.parse(T)) : "",
                textColor: null != L ? L : l.textColor,
                assetNumberColor: null != F ? F : l.assetNumberColor,
                memberCodeFont: null != x ? x : L
            });
        },
        kebabize: function(e) {
            return "--member-" + e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function(e, t) {
                return (t ? "-" : "") + e.toLowerCase();
            });
        },
        setCardData: function(e) {
            this.properties.needSecondRequest || this.setDataAndStyle(e);
        },
        setDataAndStyle: function(e) {
            if (e) {
                this.setData({
                    memberCardData: e
                });
                var t = e.assets, o = e.memberGradeRight, r = this.properties.overallStyle, a = t && 3 === t.length && t.every(function(e) {
                    return (e.value + "").length > 4;
                });
                if (this.setData({
                    doubleLined: t && t.length > 0 ? "double-line" : "",
                    marginCompacted: a ? "margin-compact" : ""
                }), o) {
                    if (r) switch (r) {
                      case 2:
                        return void this.formatTextProgress(o);

                      case 1:
                        this.formatBarProgress(o);
                    }
                } else this.setData({
                    barProgress: null,
                    formattedRichTexts: ""
                });
            }
        },
        getMemberInfo: function(e) {
            var r = this;
            return o(t.default.mark(function o() {
                return t.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        !r.isLoading && r.properties.needSecondRequest && (r.isLoading = !0, e && Object.keys(e).length && (0, 
                        l.request)({
                            url: "/api/v1/rmsmina/c/comp/member/memberinfo",
                            params: e,
                            method: "POST",
                            completeCallbacks: function(e) {
                                r.setDataAndStyle(e), n.default.getLimoRuntime().setStorage({
                                    key: d,
                                    data: {
                                        data: e,
                                        expireTime: Date.now()
                                    }
                                });
                            }
                        }), r.isLoading = !1);

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, o);
            }))();
        },
        getInfoFormStorage: function() {
            var e = this;
            this.properties.needSecondRequest && (0, l.getStorageData)({
                key: d,
                success: function(t) {
                    e.setDataAndStyle(t);
                }
            });
        },
        toMemberCode: function(e) {
            e.stopPropagation && e.stopPropagation(), n.default.getLimoRuntime().sendMC("b_eco_g55f2nwt_mc");
            var t = this.data.memberCardData;
            t && t.memberCodeUrl && n.default.getLimoRuntime().navigateTo({
                url: t.memberCodeUrl
            });
        },
        toMemberCenter: function(e) {
            e.stopPropagation && e.stopPropagation(), n.default.getLimoRuntime().sendMC("b_eco_72ef9j52_mc");
            var t = this.data.memberCardData, o = this.properties.memberCardInfo;
            null != o && o.hasCouponActivity ? (this.triggerEvent("collectCoupon", {
                from: "member-coupon"
            }, {
                bubbles: !0,
                composed: !0
            }), this.triggerEvent("handleTakeaway"), n.default.getLimoRuntime().sendMC("b_saaspay_5wtvwj42_mc")) : t && t.buttonAction ? (0, 
            m.tapActionHandler)(t.buttonAction, {
                compInst: this
            }) : t && t.buttonUrl && n.default.getLimoRuntime().navigateTo({
                url: t.buttonUrl
            });
        },
        toAssetDetail: function(e) {
            var t = e.currentTarget.dataset.assetRedirectUrl || e.currentTarget.assetRedirectUrl;
            t && n.default.getLimoRuntime().navigateTo({
                url: t
            });
        },
        formatTextProgress: function(e) {
            var t = e.prompt, o = void 0 === t ? "" : t;
            this.formatRichTexts(o);
        },
        formatBarProgress: function(e) {
            var t = e.currentNum, o = e.totalNum, r = e.percent, a = e.isCurrentMaxSort, n = e.prompt, i = void 0 === n ? "" : n;
            a ? this.formatRichTexts(i) : this.setData({
                barProgress: {
                    currentNum: t,
                    totalNum: o,
                    percent: r
                }
            });
        },
        formatRichTexts: function(e) {
            var t = this;
            if (n.default.getLimoRuntime().isAlipay) try {
                var o = e.replace(/<style.*<\/style>/, "");
                parse(o, function(e, o) {
                    e || t.setData({
                        formattedRichTexts: o || ""
                    });
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                this.setData({
                    formattedRichTexts: ""
                });
            } else this.setData({
                formattedRichTexts: e
            });
        },
        updateStyleType: function(e) {
            var t = "", o = "";
            1 === e && (t = "asset-style-one", o = "title-pro-one"), 2 === e && (t = "asset-style-two", 
            o = "title-pro-two"), this.setData({
                memberNewStyle: 3 !== e ? "member-style" : "",
                assetNewStyle: t,
                titleBarStyle: o
            });
        },
        notLoginStyle: function(e, t) {
            var o = e || {}, r = o.style, a = void 0 === r ? 1 : r, n = o.customImg, i = o.buttonColor, s = o.buttonTextColor, l = this.properties.theme.custom || {}, m = l.buttonColor, u = l.buttonTextColor;
            t ? this.setData({
                notLoginType: 1,
                notLoginBtnStyle: "",
                notLoginCustom: "",
                notLoginText: "",
                notLoginBgStyle: ""
            }) : this.setData({
                notLoginType: a,
                notLoginBtnStyle: 1 === a ? "color:".concat(null != s ? s : u, ";background:").concat(null != i ? i : m, ";") : "display:none;",
                notLoginCustom: n,
                notLoginText: 1 === a ? "font-weight: normal; font-style: normal;" : "display: none;",
                notLoginBgStyle: 1 === a ? "" : "padding: 0; background: #ffffff;"
            });
        },
        isJSONString: function(e) {
            try {
                return JSON.parse(e), !0;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        }
    }
});