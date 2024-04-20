var e = require("../../../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = require("../../../../../b/helpers/objectSpread2"), n = e(require("../../limo-core/index")), a = require("../../../../../miniprogram_npm/@limo/container/behaviors/index"), t = function(e) {
    return a._getModules.call(this, o(o({}, e), {}, {
        moduleDefaultProperties: l
    }));
};

Component({
    behaviors: [ a.commonBehavior ],
    externalClasses: [ "container-class" ],
    properties: {
        data: {
            type: Object,
            value: {},
            observer: function(e) {
                if (e && e.modules) try {
                    this.initEntryTs = Date.now(), this.initModuleLoadDurations = {};
                    var o = t.call(this, e), n = o.modulesChange, a = o.modules, l = o.layoutStyle;
                    n ? this.setData({
                        modules: a,
                        layoutStyle: l
                    }) : this.watchData(e);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    console.error(e);
                }
            }
        }
    },
    data: {
        layoutStyle: "",
        modules: [],
        dialogs: []
    },
    created: function() {
        this.lastCommonData = "", this.lastModules = [], this.linkedModules = [];
    },
    attached: function() {
        var e = this.getInstance();
        e && e.linked(this, "limo-layout"), n.default.clearCaches();
    },
    methods: {
        watchData: function(e) {
            return a._watchData.call(this, e, l);
        },
        updateModule: a.updateModule,
        loadModule: a.loadModule,
        unLoadModule: a.unLoadModule,
        destroyModule: a.layoutDestroyModule,
        hasModule: a.layoutHasModule,
        transformStyle: a.transformStyle,
        validateLayoutValue: a.validateLayoutValue,
        formatLayoutInfo: a.formatLayoutInfo,
        limoShowDialog: function(e, o, n) {
            return a._limoShowDialog.call(this, e, o, n, l);
        },
        limoCloseDialog: a.limoCloseDialog,
        onMaskTap: a.onMaskTap,
        onMaskTouchMove: a.onMaskTouchMove,
        limoDidLoad: a.limoDidLoad,
        limoSetLayoutStyle: a.limoSetLayoutStyle,
        __getContainerLimoCore: function() {
            return n.default;
        }
    }
});

var l = {
    "menu-shop-info": {
        backgroundImgUrl: "",
        shopHeadInfo: {},
        peopleCountText: "",
        tableName: "",
        headActionList: [],
        shopTagList: [],
        expandInfo: {},
        shopId: "",
        tableNum: 0,
        searchBannerOpacity: 0,
        hideSearch: !1,
        waiMaiConfig: {},
        pickUpConfig: {},
        orderConfig: {},
        progressInfo: {},
        urlParams: {},
        grouponCouponData: {},
        isVirtualTabbar: !1,
        backgroundColor: ""
    },
    "recommendation-module": {
        urlParams: {},
        recommendShowType: 0,
        recommendTabs: [],
        spuInfos: [],
        mpUserInfo: {},
        menuUpdateTime: 0
    },
    "groupon-coupon-login": {
        isPadding: !1,
        imageUrl: "",
        customClass: "",
        loginMode: "OGIN_MODE.THIRD_LOGI"
    },
    "groupon-coupon-swiper": {
        shopId: "",
        grouponCouponList: [],
        mtUserName: "",
        couponStyle: {},
        coupons: []
    },
    "menu-popup-windows": {
        adPopupDecoration: {},
        takeCoupon: {},
        buffetLimitMealTips: "",
        shopId: ""
    },
    "top-sticky-container": {
        offsetTop: 0,
        fixed: !1,
        announcementCarousel: {},
        topTimeTip: {}
    },
    "advertising-carousel": {
        banners: [],
        heightImg: 0,
        layout: {},
        shopId: "",
        bannerInterval: "EFAULT_INTERVA",
        advId: "",
        autoplay: !0
    },
    "register-panel": {
        actionUrl: ""
    },
    "panel-container-menu": {},
    "agreement-confirm": {
        shopId: "",
        fromMenu: !1
    },
    "member-info": {
        memberCardInfo: {},
        overallStyle: 0,
        theme: {
            preset: 1,
            custom: {}
        },
        animationStyle: "",
        businessData: {},
        needSecondRequest: !1,
        showNickName: !1,
        showCardTitle: !0,
        showMemberGrade: !0,
        styleType: 3,
        cardId: 0,
        notLoginConfig: {},
        defaultNickName: "",
        layout: {},
        componentStyle: {}
    },
    "notice-config": {
        noticeContent: [],
        slideInterval: 0,
        showStyle: 0,
        textColor: {},
        bgColor: {},
        noticeIcon: {},
        noticeImgUrl: {},
        layout: {},
        componentStyle: {}
    },
    "voucher-menu-select-modal": {
        modalTitle: "超值券包",
        hideClose: !1,
        closePosition: "right",
        modalName: "voucher-menu-select-modal",
        requestInfo: {}
    },
    "shop-ui-confirm": {
        btns: [],
        content: "",
        title: ""
    },
    "universal-login": {
        useNewAuthVersion: !1,
        loginStatus: !1,
        useRevoke: !1,
        revokePrefix: "",
        isDialog: !1,
        showOuterAgreement: !1,
        authButtonClassName: "",
        loginStyle: "",
        loginText: "",
        enableAutoFocus: !0,
        enableAgreementDialog: !0,
        agreementList: [],
        commonHeaders: {},
        agreementParams: {},
        agreementHeaders: {},
        agreementDesc: "我已阅读并同意",
        hasAgreed: !1,
        enabledLoginType: "'phone', 'password'",
        defaultLoginType: "phone",
        extraLoginParams: {},
        extraEventParams: {},
        location: {},
        shopRegisterRedirectPath: "",
        yodaOptions: {},
        layout: {}
    },
    "login-modal": {
        modalName: "",
        useRevoke: !1,
        revokeEventsName: "\n  closeLoginModal: 'login-modal-close-login-modal',\n  loginSuccess: 'login-modal-login-success',\n  loginFailed: 'login-modal-login-failed',\n  loginShowYoda: 'login-modal-login-show-yoda',\n  loginToggleAgreement: 'login-modal-login-toggle-agreement',\n  switchLoginType: 'login-modal-switch-login-type',\n  reUserBindSuccess: 'login-modal-re-user-bind-success',\n  reUserBindFailed: 'login-modal-re-user-bind-failed',\n  reUserBindCancel: 'login-modal-re-user-bind-cancel'\n",
        enableAutoFocus: !0,
        extraEventParams: {},
        agreementList: [],
        commonHeaders: "\n  tenantId: {\n    type: String\n  },\n  poiId: {\n    type: String,\n    optionalTypes: [Number]\n  },\n  poiType: {\n    type: String,\n    optionalTypes: [Number]\n  },\n  orgId: {\n    type: String\n  },\n  customChannel: {\n    type: String\n  },\n  appCode: {\n    type: String,\n    optionalTypes: [Number]\n  },\n  businessLine: {\n    type: String,\n    optionalTypes: [Number]\n  }\n",
        enabledLoginType: "'phone', 'password'",
        defaultLoginType: "phone",
        extraLoginParams: {},
        agreementDesc: "请阅读并勾选协议",
        hasAgreed: !1
    },
    "common-agreement-confirm-dialog": {
        modalName: "",
        modalTitle: "",
        modalSubTitle: "",
        logo: "",
        agreements: [],
        agreementDesc: "",
        headers: {},
        successEventName: "contractSigned",
        failEventName: "contractDenied",
        authButtonClassName: "",
        authButtonStyle: "",
        useRevoke: !1,
        confirmText: "同意",
        rejectText: "拒绝"
    },
    "phone-number-no-quota-modal": {
        modalName: ""
    },
    "limo-rules-modal-v2": {
        headers: {},
        agreement: "\n  contentUrl: {\n    type: String,\n    value: null\n  },\n  name: {\n    type: String,\n    value: ''\n  },\n  snapshotId: {\n    type: String,\n    value: null\n  },\n  type: {\n    type: String || Number,\n    value: null\n  }\n"
    },
    "double-limo-slide": {
        bannerInterval: 3,
        advId: "",
        imgList: [],
        heightImg: 160,
        autoplay: !0,
        opacitySpu: .8,
        layout: {},
        componentStyle: {}
    },
    "member-canvas": {
        loginCanvasConfig: {},
        feBasicResource: "",
        isLogin: !1,
        needSecondRequest: !1,
        isMemberCanvas: !0,
        loginAction: {},
        businessData: {}
    },
    "video-module": {
        videoAuditInfo: {},
        circulate: !1,
        autoplay: !1,
        fillShowSwitch: !0,
        layout: {},
        componentStyle: {}
    },
    "coupon-rules-standard": {
        rulesParams: null,
        safePadding: 0,
        requestHeader: {}
    }
};